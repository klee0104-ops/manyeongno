/**
 * 스킬 슬롯 / 궁극기 게이지 / 각성·돌파 계수 보정.
 * 근거 문서: 기획 브리핑 15-1(스킬 슬롯 구조 & 궁극기 게이지), 15-4(등급별 스킬 계수 및 각성 보정),
 *            14-7(전용돌파).
 *
 * 이 모듈은 순수 로직이다 — Phaser/DOM에 의존하지 않는다.
 */
import type { SkillCoefficients } from '@/types/unit';
import type { UnitInstance } from '@/types/unit';

/** 15-1: 유닛이 사용할 수 있는 스킬 슬롯 */
export type SkillSlot = 'basicAttack' | 'skill1' | 'skill2' | 'ultimate';

/** 15-1: 궁극기 게이지는 0~100 */
export const ULTIMATE_GAUGE_MAX = 100;

/**
 * 15-1: 궁극기 게이지 획득량.
 * 기본공격 적중 +10 / 피격 +5 / 스킬1 사용 +8 / 스킬2 사용 +5 / 매 턴 +3.
 */
export const GAUGE_GAIN = {
  basicAttackHit: 10,
  onHitTaken: 5,
  skill1Use: 8,
  skill2Use: 5,
  perTurn: 3,
} as const;

/** 15-1: AI 자동 사용 우선순위 (궁극기 > 스킬2 > 스킬1 > 기본공격) */
export const SKILL_PRIORITY: readonly SkillSlot[] = [
  'ultimate',
  'skill2',
  'skill1',
  'basicAttack',
] as const;

/**
 * 스킬1/스킬2 쿨다운(턴).
 * ⚠️ PLACEHOLDER: 기획 브리핑 15-1은 "쿨다운이 존재한다"는 사실만 명시하고 슬롯별 턴 수는 수치로
 * 주지 않았다. 우선순위 AI가 의미 있게 동작하도록 스킬2를 더 길게(3턴) 잡은 임시값이다.
 * 실제 수치가 확정되면 이 상수만 교체하면 된다.
 */
export const SKILL_COOLDOWN_TURNS: Record<'skill1' | 'skill2', number> = {
  skill1: 2,
  skill2: 3,
};

/**
 * 15-4: 각성 보정치.
 * 1각성 스킬1 +15%p, 2각성 스킬2 +15%p, 4각성 궁극기 +20%p.
 */
export const AWAKENING_COEFFICIENT_BONUS = {
  skill1: { requiredAwakening: 1, bonusPct: 15 },
  skill2: { requiredAwakening: 2, bonusPct: 15 },
  ultimate: { requiredAwakening: 4, bonusPct: 20 },
} as const;

/**
 * 14-7: 전용돌파 2돌파 시 "스킬계수 +10%p".
 * ⚠️ 문서에 어느 슬롯에 붙는지 명시가 없다 — 기본공격(전 등급 100% 고정)을 제외한 액티브 스킬
 * (스킬1/스킬2/궁극기) 전체에 적용하는 것으로 해석했다.
 */
export const BREAKTHROUGH_SKILL_COEFFICIENT = {
  requiredBreakthrough: 2,
  bonusPct: 10,
} as const;

/** 14-7 1돌파: 상성 유리 시 추가 피해 +5% */
export const BREAKTHROUGH_ADVANTAGE_BONUS = {
  requiredBreakthrough: 1,
  bonusPct: 5,
} as const;

/**
 * 15-4: 궁극기가 상성 유리 대상을 적중시키면 오행배율 위에 추가 ×1.2 (최종 1.5 × 1.2 = 1.8).
 */
export const ULTIMATE_ELEMENT_AMPLIFIER = 1.2;

export interface CoefficientModifiers {
  awakening?: UnitInstance['awakening'];
  breakthrough?: UnitInstance['breakthrough'];
}

/**
 * 15-4 각성 보정 + 14-7 돌파 보정을 적용한 실효 스킬 계수를 산출한다.
 * 기본공격은 전 등급 100% 고정이며 각성 보정 대상이 아니다(15-4 표).
 */
export function effectiveSkillCoefficients(
  base: SkillCoefficients,
  modifiers: CoefficientModifiers = {},
): SkillCoefficients {
  const awakening = modifiers.awakening ?? 0;
  const breakthrough = modifiers.breakthrough ?? 0;

  const breakthroughBonus =
    breakthrough >= BREAKTHROUGH_SKILL_COEFFICIENT.requiredBreakthrough
      ? BREAKTHROUGH_SKILL_COEFFICIENT.bonusPct
      : 0;

  const awakeningBonus = (slot: keyof typeof AWAKENING_COEFFICIENT_BONUS): number => {
    const rule = AWAKENING_COEFFICIENT_BONUS[slot];
    return awakening >= rule.requiredAwakening ? rule.bonusPct : 0;
  };

  return {
    basicAttack: base.basicAttack,
    skill1: base.skill1 + awakeningBonus('skill1') + breakthroughBonus,
    skill2:
      base.skill2 === null ? null : base.skill2 + awakeningBonus('skill2') + breakthroughBonus,
    ultimate: base.ultimate + awakeningBonus('ultimate') + breakthroughBonus,
  };
}

/** 14-7 1돌파 이상이면 상성 유리 시 추가 피해 배율(1.05), 아니면 1.0 */
export function advantageBonusMultiplier(
  breakthrough: UnitInstance['breakthrough'],
  isAdvantaged: boolean,
): number {
  if (!isAdvantaged) return 1.0;
  if (breakthrough < BREAKTHROUGH_ADVANTAGE_BONUS.requiredBreakthrough) return 1.0;
  return 1 + BREAKTHROUGH_ADVANTAGE_BONUS.bonusPct / 100;
}

/** 게이지를 0~100 범위로 강제한다. */
export function clampGauge(value: number): number {
  return Math.max(0, Math.min(ULTIMATE_GAUGE_MAX, value));
}

/** 15-1: 궁극기 발동 가능 여부 — 게이지가 가득 찼을 때만 */
export function canUseUltimate(gauge: number): boolean {
  return gauge >= ULTIMATE_GAUGE_MAX;
}
