/**
 * 데미지 계산 공식.
 * 근거 문서: 기획 브리핑 15-3 (데미지 계산 공식).
 *
 *   RawDamage       = 공격자ATK × 스킬계수(%)
 *   DefMitigated    = RawDamage × [100 / (100 + 방어자DEF × 0.5)]
 *   ElementAdjusted = DefMitigated × 오행배율(15-2)
 *   CritAdjusted    = ElementAdjusted × (크리 발생 시 크리데미지%, 아니면 ×1.0)
 *   FinalDamage     = CritAdjusted × (1 + Σ버프% − Σ디버프%) × 랜덤변동(0.95~1.05)
 *
 * 최소 데미지 보장: FinalDamage는 RawDamage의 5% 이하로 내려가지 않음.
 */

export interface DamageInput {
  attackerAtk: number;
  /** 스킬 계수. 예: 230%면 230 */
  skillCoefficientPct: number;
  defenderDef: number;
  /** getElementMultiplier() 결과값 (0.7 / 1.0 / 1.5) */
  elementMultiplier: number;
  isCrit: boolean;
  /** 크리티컬 데미지 %. 기본 150(=150%) */
  critDamagePct?: number;
  /** 합산 버프 %(소수, 0.1 = +10%) */
  buffPct?: number;
  /** 합산 디버프 %(소수, 0.1 = -10%) */
  debuffPct?: number;
  /** 랜덤 변동치(0.95~1.05). 테스트에서는 1.0으로 고정해 결정적으로 검증. */
  randomRoll?: number;
}

export interface DamageBreakdown {
  rawDamage: number;
  defMitigated: number;
  elementAdjusted: number;
  critAdjusted: number;
  finalDamage: number;
}

const MIN_DAMAGE_RATIO = 0.05;
/** 15-6: 버프 최대 +100%, 디버프 최대 -70% */
export const MAX_BUFF_PCT = 1.0;
export const MAX_DEBUFF_PCT = 0.7;

export function calculateDamage(input: DamageInput): DamageBreakdown {
  const skillCoefficient = input.skillCoefficientPct / 100;
  const rawDamage = input.attackerAtk * skillCoefficient;

  const defMitigated = rawDamage * (100 / (100 + input.defenderDef * 0.5));
  const elementAdjusted = defMitigated * input.elementMultiplier;

  const critMultiplier = input.isCrit ? (input.critDamagePct ?? 150) / 100 : 1.0;
  const critAdjusted = elementAdjusted * critMultiplier;

  const buffPct = Math.min(input.buffPct ?? 0, MAX_BUFF_PCT);
  const debuffPct = Math.min(input.debuffPct ?? 0, MAX_DEBUFF_PCT);
  const buffTerm = 1 + buffPct - debuffPct;

  const randomRoll = input.randomRoll ?? rollDamageVariance();

  const rawFinal = critAdjusted * buffTerm * randomRoll;
  const finalDamage = Math.max(rawFinal, rawDamage * MIN_DAMAGE_RATIO);

  return { rawDamage, defMitigated, elementAdjusted, critAdjusted, finalDamage };
}

/** 15-3: 랜덤 변동 0.95~1.05 */
export function rollDamageVariance(rng: () => number = Math.random): number {
  return 0.95 + rng() * 0.1;
}

/** 기본 크리티컬 확률 5% (15-3) */
export const BASE_CRIT_CHANCE = 0.05;
export const BASE_CRIT_DAMAGE_PCT = 150;

export function rollCrit(critChance = BASE_CRIT_CHANCE, rng: () => number = Math.random): boolean {
  return rng() < critChance;
}
