/**
 * 15-3 "검증용 예시 계산"을 그대로 재현: 3성 신수(ATK500)가 스킬2(계수230%)로
 * DEF300 상대를 상성유리(1.5배) 상태에서 크리(150%) 적중.
 * RawDamage 1,150 → DefMitigated 460 → ElementAdjusted 690 → CritAdjusted 1,035.
 */
import { describe, it, expect } from 'vitest';
import { calculateDamage, rollDamageVariance, rollCrit } from '@/systems/damage';

describe('calculateDamage (15-3)', () => {
  it('문서 예시값을 랜덤변동 1.0 고정으로 정확히 재현한다', () => {
    const result = calculateDamage({
      attackerAtk: 500,
      skillCoefficientPct: 230,
      defenderDef: 300,
      elementMultiplier: 1.5,
      isCrit: true,
      critDamagePct: 150,
      randomRoll: 1.0,
    });

    expect(result.rawDamage).toBeCloseTo(1150, 5);
    expect(result.defMitigated).toBeCloseTo(460, 5);
    expect(result.elementAdjusted).toBeCloseTo(690, 5);
    expect(result.critAdjusted).toBeCloseTo(1035, 5);
    expect(result.finalDamage).toBeCloseTo(1035, 5);
  });

  it('최소 데미지 보장: 방어력이 극단적으로 높아도 RawDamage의 5% 밑으로 내려가지 않는다', () => {
    const result = calculateDamage({
      attackerAtk: 500,
      skillCoefficientPct: 100,
      defenderDef: 100000,
      elementMultiplier: 0.7,
      isCrit: false,
      randomRoll: 0.95,
    });
    const rawDamage = 500; // 500 * (100/100)
    expect(result.finalDamage).toBeGreaterThanOrEqual(rawDamage * 0.05 - 1e-9);
  });

  it('버프/디버프는 15-6 캡(+100% / -70%)을 넘지 못한다', () => {
    const noCap = calculateDamage({
      attackerAtk: 100,
      skillCoefficientPct: 100,
      defenderDef: 0,
      elementMultiplier: 1,
      isCrit: false,
      buffPct: 5, // +500% 시도 → +100%로 캡
      debuffPct: 0,
      randomRoll: 1.0,
    });
    // rawDamage=100, defMitigated=100, elementAdjusted=100, critAdjusted=100
    // 캡 적용 시 buffTerm = 1 + 1.0 - 0 = 2.0 → finalDamage = 200
    expect(noCap.finalDamage).toBeCloseTo(200, 5);
  });
});

describe('rollDamageVariance (15-3)', () => {
  it('항상 0.95~1.05 범위 안에서 값을 반환한다', () => {
    for (let i = 0; i < 200; i += 1) {
      const v = rollDamageVariance(Math.random);
      expect(v).toBeGreaterThanOrEqual(0.95);
      expect(v).toBeLessThanOrEqual(1.05);
    }
  });
});

describe('rollCrit (15-3 기본 크리 확률 5%)', () => {
  it('rng가 확률 미만이면 크리, 이상이면 크리 아님', () => {
    expect(rollCrit(0.05, () => 0.04)).toBe(true);
    expect(rollCrit(0.05, () => 0.06)).toBe(false);
  });
});
