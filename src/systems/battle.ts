/**
 * 오토배틀 시뮬레이터.
 * 근거 문서: 기획 브리핑 15-1(스킬 슬롯/궁극기 게이지/우선순위), 15-2(오행 상성), 15-3(데미지 공식),
 *            15-4(등급별 스킬 계수 및 각성 보정), 15-6(버프/디버프·CC), 16-1(전열/후열 타겟팅),
 *            14-7(전용돌파 보정).
 *
 * 구현된 범위:
 *   - 15-1 궁극기 게이지(기본공격 적중 +10 / 피격 +5 / 스킬1 +8 / 스킬2 +5 / 매 턴 +3)와 궁극기 발동
 *   - 15-1 우선순위 AI(궁극기 > 스킬2 > 스킬1 > 기본공격) 및 스킬1/스킬2 쿨다운
 *   - 15-4 각성 보정 + 14-7 돌파 보정이 반영된 실효 스킬 계수
 *   - 궁극기 오행 극대화(상성 유리 대상에 ×1.2 추가)
 *   - 15-6 버프/디버프 합산(캡 적용) 및 CC(행동 불가/침묵) 처리, 턴 단위 지속시간 감소
 *   - 16-1 전열 우선 타겟팅, 전열 전멸 시 후열로 폴백
 *
 * TODO(다음 확장):
 *   - 15-5 패시브(상시형/조건부 발동형)
 *   - 스킬별 고유 효과(광역/치유/버프 부여 등) — 현재 모든 슬롯은 단일 대상 피해로만 동작
 *   - 11-4 다중 웨이브 구성
 */
import {
  calculateDamage,
  rollCrit,
  rollDamageVariance,
  BASE_CRIT_DAMAGE_PCT,
  BASE_CRIT_CHANCE,
} from './damage';
import { getElementMultiplier, isAdvantaged } from './elements';
import {
  GAUGE_GAIN,
  SKILL_COOLDOWN_TURNS,
  ULTIMATE_ELEMENT_AMPLIFIER,
  advantageBonusMultiplier,
  canUseUltimate,
  clampGauge,
  effectiveSkillCoefficients,
  type SkillSlot,
} from './skills';
import {
  isActionBlocked,
  isSilenced,
  tickStatusEffects,
  totalBuffPct,
  totalDebuffPct,
  type StatusEffectSet,
} from './statusEffects';
import { rowForSlotIndex, selectTarget, type Row } from './targeting';
import type { Element, SkillCoefficients, UnitInstance } from '@/types/unit';

export interface Combatant {
  id: string;
  name: string;
  element: Element;
  atk: number;
  def: number;
  hp: number;
  maxHp: number;
  /** 기본공격 계수(%). 15-4 기준 전 등급 100% */
  basicAttackCoefficientPct: number;
  /** 16-1 진형. 생략하면 편성 순서(0~1=전열, 2~=후열)로 자동 배정된다. */
  row?: Row;
  /** 15-4 스킬 계수 기준표. 생략하면 기본공격만 사용하는 단순 전투원이 된다. */
  skillCoefficients?: SkillCoefficients;
  /** 14-4 각성 단계 — 15-4 각성 보정에 사용 */
  awakening?: UnitInstance['awakening'];
  /** 14-7 전용돌파 단계 */
  breakthrough?: UnitInstance['breakthrough'];
  /** 15-1 시작 궁극기 게이지(0~100). 생략 시 0 */
  ultimateGauge?: number;
  /** 15-6 전투 시작 시점에 이미 걸려 있는 상태효과 */
  statusEffects?: StatusEffectSet;
}

export interface BattleLogEntry {
  turn: number;
  attackerId: string;
  /** CC로 행동이 막힌 경우 null */
  defenderId: string | null;
  /** 이번 행동에 사용된 슬롯. 행동 불가였다면 null */
  slot: SkillSlot | null;
  damage: number;
  isCrit: boolean;
  defenderHpAfter: number;
  /** 행동 직후 공격자의 궁극기 게이지 */
  attackerGaugeAfter: number;
  /** CC로 행동이 막혔는지 */
  blocked: boolean;
}

export interface BattleResult {
  winner: 'party' | 'enemy' | 'draw';
  turns: number;
  log: BattleLogEntry[];
}

interface CombatantState extends Combatant {
  row: Row;
  gauge: number;
  effects: StatusEffectSet;
  coefficients: SkillCoefficients;
  cooldowns: { skill1: number; skill2: number };
}

/** 스킬 계수가 주어지지 않은 전투원을 위한 폴백 — 기본공격만 사용한다. */
function fallbackCoefficients(basicAttackPct: number): SkillCoefficients {
  return { basicAttack: basicAttackPct, skill1: 0, skill2: null, ultimate: 0 };
}

function toState(c: Combatant, index: number): CombatantState {
  const base = c.skillCoefficients ?? fallbackCoefficients(c.basicAttackCoefficientPct);
  return {
    ...c,
    row: c.row ?? rowForSlotIndex(index),
    gauge: clampGauge(c.ultimateGauge ?? 0),
    effects: (c.statusEffects ?? []).map((e) => ({ ...e })),
    coefficients: effectiveSkillCoefficients(base, {
      awakening: c.awakening,
      breakthrough: c.breakthrough,
    }),
    cooldowns: { skill1: 0, skill2: 0 },
  };
}

/** 15-1: 우선순위(궁극기 > 스킬2 > 스킬1 > 기본공격)에 따라 이번 턴 사용할 슬롯을 고른다. */
export function chooseSkillSlot(actor: {
  gauge: number;
  coefficients: SkillCoefficients;
  cooldowns: { skill1: number; skill2: number };
  effects: StatusEffectSet;
}): SkillSlot {
  if (isSilenced(actor.effects)) return 'basicAttack';

  const { coefficients, cooldowns } = actor;
  if (coefficients.ultimate > 0 && canUseUltimate(actor.gauge)) return 'ultimate';
  if (coefficients.skill2 !== null && coefficients.skill2 > 0 && cooldowns.skill2 <= 0) return 'skill2';
  if (coefficients.skill1 > 0 && cooldowns.skill1 <= 0) return 'skill1';
  return 'basicAttack';
}

function coefficientFor(state: CombatantState, slot: SkillSlot): number {
  switch (slot) {
    case 'basicAttack':
      return state.coefficients.basicAttack;
    case 'skill1':
      return state.coefficients.skill1;
    case 'skill2':
      return state.coefficients.skill2 ?? state.coefficients.basicAttack;
    case 'ultimate':
      return state.coefficients.ultimate;
  }
}

/**
 * 15-2/15-4/14-7을 합친 실효 오행 배율.
 * 기본 오행배율 × (궁극기이고 상성 유리면 ×1.2) × (1돌파 이상이고 상성 유리면 ×1.05)
 */
export function effectiveElementMultiplier(
  attackerElement: Element,
  defenderElement: Element,
  slot: SkillSlot,
  breakthrough: UnitInstance['breakthrough'] = 0,
): number {
  const base = getElementMultiplier(attackerElement, defenderElement);
  const advantaged = isAdvantaged(attackerElement, defenderElement);
  const ultimateAmp = slot === 'ultimate' && advantaged ? ULTIMATE_ELEMENT_AMPLIFIER : 1.0;
  return base * ultimateAmp * advantageBonusMultiplier(breakthrough, advantaged);
}

/** 슬롯 사용 시 공격자가 얻는 게이지(궁극기는 소모하므로 0) */
function gaugeGainForSlot(slot: SkillSlot): number {
  switch (slot) {
    case 'basicAttack':
      return GAUGE_GAIN.basicAttackHit;
    case 'skill1':
      return GAUGE_GAIN.skill1Use;
    case 'skill2':
      return GAUGE_GAIN.skill2Use;
    case 'ultimate':
      return 0;
  }
}

/**
 * party(아군) vs enemy(적군) 간 교전을 턴 단위로 시뮬레이션한다.
 * 매 턴: 모든 생존 전투원 게이지 +3 → 생존 아군이 순서대로 행동 → 생존 적이 순서대로 행동 → 상태효과/쿨다운 틱.
 */
export function simulateBattle(
  party: Combatant[],
  enemies: Combatant[],
  options: { maxTurns?: number; rng?: () => number } = {},
): BattleResult {
  const maxTurns = options.maxTurns ?? 200;
  const rng = options.rng ?? Math.random;

  // 원본 배열/객체를 건드리지 않도록 내부 상태로 복제한다.
  const partyState = party.map(toState);
  const enemyState = enemies.map(toState);

  const log: BattleLogEntry[] = [];
  let turn = 0;

  const act = (attacker: CombatantState, opposing: CombatantState[]): void => {
    if (attacker.hp <= 0) return;

    // 15-6: 기절/빙결 등은 이번 턴 행동 자체를 막는다.
    if (isActionBlocked(attacker.effects)) {
      log.push({
        turn,
        attackerId: attacker.id,
        defenderId: null,
        slot: null,
        damage: 0,
        isCrit: false,
        defenderHpAfter: 0,
        attackerGaugeAfter: attacker.gauge,
        blocked: true,
      });
      return;
    }

    // 16-1: 전열 우선, 전열 전멸 시 후열로 폴백
    const defender = selectTarget(opposing);
    if (!defender) return;

    const slot = chooseSkillSlot(attacker);
    const isCrit = rollCrit(BASE_CRIT_CHANCE, rng);

    const dmg = calculateDamage({
      attackerAtk: attacker.atk,
      skillCoefficientPct: coefficientFor(attacker, slot),
      defenderDef: defender.def,
      elementMultiplier: effectiveElementMultiplier(
        attacker.element,
        defender.element,
        slot,
        attacker.breakthrough ?? 0,
      ),
      isCrit,
      critDamagePct: BASE_CRIT_DAMAGE_PCT,
      // 15-3의 버프항은 공격자에게 걸린 피해량 증감 효과를 합산해 적용한다.
      buffPct: totalBuffPct(attacker.effects),
      debuffPct: totalDebuffPct(attacker.effects),
      randomRoll: rollDamageVariance(rng),
    });

    defender.hp = Math.max(0, defender.hp - dmg.finalDamage);

    // 15-1: 게이지 처리 — 궁극기는 전량 소모, 그 외 슬롯은 사용량만큼 획득. 피격자는 +5.
    attacker.gauge = slot === 'ultimate' ? 0 : clampGauge(attacker.gauge + gaugeGainForSlot(slot));
    defender.gauge = clampGauge(defender.gauge + GAUGE_GAIN.onHitTaken);

    // 15-1: 스킬 쿨다운 진입
    if (slot === 'skill1') attacker.cooldowns.skill1 = SKILL_COOLDOWN_TURNS.skill1;
    if (slot === 'skill2') attacker.cooldowns.skill2 = SKILL_COOLDOWN_TURNS.skill2;

    log.push({
      turn,
      attackerId: attacker.id,
      defenderId: defender.id,
      slot,
      damage: dmg.finalDamage,
      isCrit,
      defenderHpAfter: defender.hp,
      attackerGaugeAfter: attacker.gauge,
      blocked: false,
    });
  };

  const endOfTurn = (unit: CombatantState): void => {
    unit.effects = tickStatusEffects(unit.effects);
    unit.cooldowns.skill1 = Math.max(0, unit.cooldowns.skill1 - 1);
    unit.cooldowns.skill2 = Math.max(0, unit.cooldowns.skill2 - 1);
  };

  while (turn < maxTurns) {
    const partyAlive = partyState.filter((c) => c.hp > 0);
    const enemyAlive = enemyState.filter((c) => c.hp > 0);
    if (partyAlive.length === 0 || enemyAlive.length === 0) break;
    turn += 1;

    // 15-1: 매 턴 +3
    for (const unit of [...partyAlive, ...enemyAlive]) {
      unit.gauge = clampGauge(unit.gauge + GAUGE_GAIN.perTurn);
    }

    for (const attacker of partyAlive) act(attacker, enemyState);

    for (const attacker of enemyState.filter((c) => c.hp > 0)) act(attacker, partyState);

    for (const unit of [...partyState, ...enemyState]) endOfTurn(unit);
  }

  const partyWiped = partyState.every((c) => c.hp <= 0);
  const enemyWiped = enemyState.every((c) => c.hp <= 0);

  let winner: BattleResult['winner'] = 'draw';
  if (enemyWiped && !partyWiped) winner = 'party';
  else if (partyWiped && !enemyWiped) winner = 'enemy';

  return { winner, turns: turn, log };
}
