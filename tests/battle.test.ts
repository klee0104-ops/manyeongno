/**
 * simulateBattle 검증.
 *  - 기본 교전 골격(승/패/무승부, 원본 불변)
 *  - 15-1 궁극기 게이지 누적·소모, 우선순위 AI, 쿨다운
 *  - 15-4 궁극기 오행 극대화, 14-7 돌파 보정
 *  - 15-6 버프/디버프·CC
 *  - 16-1 전열/후열 타겟팅
 *
 * rng를 0.5로 고정하면 크리티컬은 발생하지 않고(5% 미만 아님) 랜덤 변동은 정확히 1.0이 된다.
 */
import { describe, it, expect } from 'vitest';
import {
  chooseSkillSlot,
  effectiveElementMultiplier,
  simulateBattle,
  type Combatant,
} from '@/systems/battle';
import { calculateDamage } from '@/systems/damage';
import { DEFAULT_SKILL_COEFFICIENTS } from '@/config/skillCoefficients';
import type { StatusEffect } from '@/systems/statusEffects';

const fixedRng = () => 0.5;

function makeCombatant(overrides: Partial<Combatant> & { id: string }): Combatant {
  return {
    name: overrides.id,
    element: '목',
    atk: 100,
    def: 10,
    hp: 500,
    maxHp: 500,
    basicAttackCoefficientPct: 100,
    ...overrides,
  };
}

/** 오래 버티는 샌드백 적 — 아군 행동 패턴을 관찰하기 위한 용도 */
function makePunchingBag(id = 'e1'): Combatant {
  return makeCombatant({ id, hp: 1_000_000, maxHp: 1_000_000, atk: 1, element: '토' });
}

describe('simulateBattle — 기본 골격', () => {
  it('압도적으로 강한 파티는 승리한다', () => {
    const party = [makeCombatant({ id: 'p1', atk: 100000, hp: 5000, maxHp: 5000 })];
    const enemies = [makeCombatant({ id: 'e1', hp: 10, maxHp: 10, atk: 1 })];

    const result = simulateBattle(party, enemies, { rng: fixedRng });

    expect(result.winner).toBe('party');
    expect(result.log.length).toBeGreaterThan(0);
  });

  it('압도적으로 강한 적에게는 패배한다', () => {
    const party = [makeCombatant({ id: 'p1', hp: 10, maxHp: 10, atk: 1 })];
    const enemies = [makeCombatant({ id: 'e1', atk: 100000, hp: 5000, maxHp: 5000 })];

    const result = simulateBattle(party, enemies, { rng: fixedRng });

    expect(result.winner).toBe('enemy');
  });

  it('maxTurns에 도달하면 무승부로 종료되고, 원본 배열은 변경하지 않는다', () => {
    const party = [makeCombatant({ id: 'p1', hp: 1_000_000, maxHp: 1_000_000, atk: 1 })];
    const enemies = [makeCombatant({ id: 'e1', hp: 1_000_000, maxHp: 1_000_000, atk: 1 })];

    const partyHpBefore = party[0].hp;
    const result = simulateBattle(party, enemies, { maxTurns: 5, rng: fixedRng });

    expect(result.turns).toBe(5);
    expect(result.winner).toBe('draw');
    expect(party[0].hp).toBe(partyHpBefore);
  });

  it('skillCoefficients가 없는 전투원은 기본공격만 사용한다', () => {
    const result = simulateBattle([makeCombatant({ id: 'p1' })], [makePunchingBag()], {
      maxTurns: 10,
      rng: fixedRng,
    });
    const slots = result.log.filter((l) => l.attackerId === 'p1').map((l) => l.slot);
    expect(slots.every((s) => s === 'basicAttack')).toBe(true);
  });
});

describe('15-1 궁극기 게이지 & 우선순위 AI', () => {
  it('게이지 0에서 시작하면 스킬2 → 스킬1 → 기본공격 순으로 쿨다운에 따라 행동하고 게이지가 누적된다', () => {
    const party = [
      makeCombatant({ id: 'p1', hp: 100_000, maxHp: 100_000, skillCoefficients: DEFAULT_SKILL_COEFFICIENTS[5] }),
    ];
    const result = simulateBattle(party, [makePunchingBag()], { maxTurns: 3, rng: fixedRng });
    const mine = result.log.filter((l) => l.attackerId === 'p1');

    expect(mine.map((l) => l.slot)).toEqual(['skill2', 'skill1', 'basicAttack']);
    // 턴1: +3(턴) +5(스킬2) = 8 / 턴2: 8 +5(피격) +3 +8(스킬1) = 24 / 턴3: 24 +5 +3 +10(기본공격) = 42
    expect(mine.map((l) => l.attackerGaugeAfter)).toEqual([8, 24, 42]);
  });

  it('게이지가 100이면 즉시 궁극기를 쓰고 게이지는 0으로 소모된다', () => {
    const p1 = makeCombatant({
      id: 'p1',
      hp: 100_000,
      maxHp: 100_000,
      ultimateGauge: 100,
      skillCoefficients: DEFAULT_SKILL_COEFFICIENTS[5],
    });
    const enemy = makePunchingBag();
    const result = simulateBattle([p1], [enemy], { maxTurns: 1, rng: fixedRng });
    const first = result.log.find((l) => l.attackerId === 'p1');

    expect(first?.slot).toBe('ultimate');
    expect(first?.attackerGaugeAfter).toBe(0);

    // 목→토 상성 유리 + 궁극기 극대화 = 1.8배, 계수 500%
    const expected = calculateDamage({
      attackerAtk: p1.atk,
      skillCoefficientPct: 500,
      defenderDef: enemy.def,
      elementMultiplier: 1.8,
      isCrit: false,
      randomRoll: 1.0,
    }).finalDamage;
    expect(first?.damage).toBeCloseTo(expected, 6);
  });

  it('피격 시 방어자 게이지가 +5 오른다', () => {
    const result = simulateBattle(
      [makeCombatant({ id: 'p1', hp: 100_000, maxHp: 100_000 })],
      [makePunchingBag()],
      { maxTurns: 1, rng: fixedRng },
    );
    // e1은 턴 시작 +3, p1에게 피격 +5, 자신의 기본공격 +10 = 18
    const enemyAct = result.log.find((l) => l.attackerId === 'e1');
    expect(enemyAct?.attackerGaugeAfter).toBe(18);
  });

  it('chooseSkillSlot은 우선순위와 쿨다운/게이지를 반영한다', () => {
    const coefficients = DEFAULT_SKILL_COEFFICIENTS[5];
    const base = { coefficients, effects: [], cooldowns: { skill1: 0, skill2: 0 } };

    expect(chooseSkillSlot({ ...base, gauge: 100 })).toBe('ultimate');
    expect(chooseSkillSlot({ ...base, gauge: 99 })).toBe('skill2');
    expect(chooseSkillSlot({ ...base, gauge: 0, cooldowns: { skill1: 0, skill2: 1 } })).toBe('skill1');
    expect(chooseSkillSlot({ ...base, gauge: 0, cooldowns: { skill1: 1, skill2: 1 } })).toBe('basicAttack');
    // 1성(스킬2 없음)은 스킬2를 건너뛴다
    expect(
      chooseSkillSlot({ ...base, gauge: 0, coefficients: DEFAULT_SKILL_COEFFICIENTS[1] }),
    ).toBe('skill1');
  });
});

describe('15-4 오행 극대화 & 14-7 돌파 보정', () => {
  it('궁극기가 상성 유리 대상을 때리면 1.5 × 1.2 = 1.8배', () => {
    expect(effectiveElementMultiplier('목', '토', 'ultimate')).toBeCloseTo(1.8, 10);
  });

  it('궁극기라도 상성 유리가 아니면 극대화가 붙지 않는다', () => {
    expect(effectiveElementMultiplier('목', '목', 'ultimate')).toBe(1.0);
    expect(effectiveElementMultiplier('목', '금', 'ultimate')).toBeCloseTo(0.7, 10);
  });

  it('스킬1/스킬2/기본공격은 기본 오행배율만 적용', () => {
    expect(effectiveElementMultiplier('목', '토', 'skill1')).toBe(1.5);
    expect(effectiveElementMultiplier('목', '토', 'basicAttack')).toBe(1.5);
  });

  it('1돌파 이상은 상성 유리 시 ×1.05가 추가되고, 궁극기와 곱연산된다', () => {
    expect(effectiveElementMultiplier('목', '토', 'basicAttack', 1)).toBeCloseTo(1.575, 10);
    expect(effectiveElementMultiplier('목', '토', 'ultimate', 1)).toBeCloseTo(1.89, 10);
    expect(effectiveElementMultiplier('목', '목', 'ultimate', 3)).toBe(1.0);
  });

  it('각성 보정이 전투 데미지에 반영된다 (4각성 궁극기 520%)', () => {
    const p1 = makeCombatant({
      id: 'p1',
      hp: 100_000,
      maxHp: 100_000,
      ultimateGauge: 100,
      awakening: 4,
      skillCoefficients: DEFAULT_SKILL_COEFFICIENTS[5],
      element: '화',
    });
    const enemy = makePunchingBag(); // 토 — 화→토는 중립 1.0
    const result = simulateBattle([p1], [enemy], { maxTurns: 1, rng: fixedRng });
    const first = result.log.find((l) => l.attackerId === 'p1');

    const expected = calculateDamage({
      attackerAtk: p1.atk,
      skillCoefficientPct: 520,
      defenderDef: enemy.def,
      elementMultiplier: 1.0,
      isCrit: false,
      randomRoll: 1.0,
    }).finalDamage;
    expect(first?.damage).toBeCloseTo(expected, 6);
  });
});

describe('15-6 버프/디버프 & CC', () => {
  const buff = (magnitude: number, turns: number): StatusEffect => ({
    id: 'atk-up',
    kind: 'buff',
    magnitude,
    remainingTurns: turns,
  });

  it('공격자 버프 +50%는 데미지를 1.5배로 만든다', () => {
    const plain = simulateBattle([makeCombatant({ id: 'p1' })], [makePunchingBag()], {
      maxTurns: 1,
      rng: fixedRng,
    });
    const buffed = simulateBattle(
      [makeCombatant({ id: 'p1', statusEffects: [buff(0.5, 1)] })],
      [makePunchingBag()],
      { maxTurns: 1, rng: fixedRng },
    );
    const plainDmg = plain.log.find((l) => l.attackerId === 'p1')!.damage;
    const buffedDmg = buffed.log.find((l) => l.attackerId === 'p1')!.damage;
    expect(buffedDmg).toBeCloseTo(plainDmg * 1.5, 6);
  });

  it('버프는 지속시간이 끝나면 사라진다', () => {
    const result = simulateBattle(
      [makeCombatant({ id: 'p1', hp: 100_000, maxHp: 100_000, statusEffects: [buff(0.5, 1)] })],
      [makePunchingBag()],
      { maxTurns: 2, rng: fixedRng },
    );
    const mine = result.log.filter((l) => l.attackerId === 'p1');
    expect(mine[0].damage).toBeCloseTo(mine[1].damage * 1.5, 6);
  });

  it('기절 상태에서는 행동이 막히고 blocked 로그가 남는다', () => {
    const stun: StatusEffect = { id: 'stun', kind: 'cc', cc: '기절', remainingTurns: 1 };
    const result = simulateBattle(
      [makeCombatant({ id: 'p1', hp: 100_000, maxHp: 100_000, statusEffects: [stun] })],
      [makePunchingBag()],
      { maxTurns: 2, rng: fixedRng },
    );
    const mine = result.log.filter((l) => l.attackerId === 'p1');
    expect(mine[0].blocked).toBe(true);
    expect(mine[0].defenderId).toBeNull();
    expect(mine[0].slot).toBeNull();
    expect(mine[1].blocked).toBe(false);
    expect(mine[1].slot).toBe('basicAttack');
  });

  it('침묵 중에는 게이지가 가득 차도 기본공격만 사용하고, 풀리면 궁극기를 쓴다', () => {
    const silence: StatusEffect = { id: 'silence', kind: 'cc', cc: '침묵', remainingTurns: 2 };
    const result = simulateBattle(
      [
        makeCombatant({
          id: 'p1',
          hp: 100_000,
          maxHp: 100_000,
          ultimateGauge: 100,
          skillCoefficients: DEFAULT_SKILL_COEFFICIENTS[5],
          statusEffects: [silence],
        }),
      ],
      [makePunchingBag()],
      { maxTurns: 3, rng: fixedRng },
    );
    const slots = result.log.filter((l) => l.attackerId === 'p1').map((l) => l.slot);
    expect(slots).toEqual(['basicAttack', 'basicAttack', 'ultimate']);
  });
});

describe('16-1 전열/후열 타겟팅', () => {
  it('편성 순서 0~1은 전열로 먼저 맞고, 전열 전멸 후 후열이 맞는다', () => {
    const party = [
      makeCombatant({ id: 'p1', hp: 10, maxHp: 10, atk: 1 }),
      makeCombatant({ id: 'p2', hp: 10, maxHp: 10, atk: 1 }),
      makeCombatant({ id: 'p3', hp: 10, maxHp: 10, atk: 1 }),
    ];
    const boss = makeCombatant({ id: 'boss', atk: 100_000, hp: 1_000_000, maxHp: 1_000_000 });

    const result = simulateBattle(party, [boss], { rng: fixedRng });
    const targets = result.log.filter((l) => l.attackerId === 'boss').map((l) => l.defenderId);

    expect(targets).toEqual(['p1', 'p2', 'p3']);
    expect(result.winner).toBe('enemy');
    expect(result.turns).toBe(3);
  });

  it('row를 명시하면 편성 순서와 무관하게 전열이 우선 대상', () => {
    const party = [
      makeCombatant({ id: 'healer', row: '후열', hp: 10, maxHp: 10, atk: 1 }),
      makeCombatant({ id: 'tank', row: '전열', hp: 10, maxHp: 10, atk: 1 }),
    ];
    const boss = makeCombatant({ id: 'boss', atk: 100_000, hp: 1_000_000, maxHp: 1_000_000 });

    const result = simulateBattle(party, [boss], { rng: fixedRng });
    const targets = result.log.filter((l) => l.attackerId === 'boss').map((l) => l.defenderId);

    expect(targets).toEqual(['tank', 'healer']);
  });
});
