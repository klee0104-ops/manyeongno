/**
 * 15-1 궁극기 게이지 상수 / 15-4 각성 보정 / 14-7 돌파 보정 검증.
 */
import { describe, it, expect } from 'vitest';
import {
  GAUGE_GAIN,
  SKILL_PRIORITY,
  ULTIMATE_GAUGE_MAX,
  ULTIMATE_ELEMENT_AMPLIFIER,
  advantageBonusMultiplier,
  canUseUltimate,
  clampGauge,
  effectiveSkillCoefficients,
} from '@/systems/skills';
import { DEFAULT_SKILL_COEFFICIENTS } from '@/config/skillCoefficients';

describe('15-1 궁극기 게이지 상수', () => {
  it('획득량이 기획서 수치와 일치한다 (기본공격 +10 / 피격 +5 / 스킬1 +8 / 스킬2 +5 / 매 턴 +3)', () => {
    expect(GAUGE_GAIN.basicAttackHit).toBe(10);
    expect(GAUGE_GAIN.onHitTaken).toBe(5);
    expect(GAUGE_GAIN.skill1Use).toBe(8);
    expect(GAUGE_GAIN.skill2Use).toBe(5);
    expect(GAUGE_GAIN.perTurn).toBe(3);
    expect(ULTIMATE_GAUGE_MAX).toBe(100);
  });

  it('우선순위는 궁극기 > 스킬2 > 스킬1 > 기본공격', () => {
    expect(SKILL_PRIORITY).toEqual(['ultimate', 'skill2', 'skill1', 'basicAttack']);
  });

  it('clampGauge는 0~100으로 강제하고 canUseUltimate는 100에서만 true', () => {
    expect(clampGauge(-5)).toBe(0);
    expect(clampGauge(150)).toBe(100);
    expect(clampGauge(42)).toBe(42);
    expect(canUseUltimate(99)).toBe(false);
    expect(canUseUltimate(100)).toBe(true);
  });
});

describe('15-4 각성 보정', () => {
  const base5 = DEFAULT_SKILL_COEFFICIENTS[5]; // 100 / 220 / 290 / 500

  it('각성 0이면 기준표 그대로', () => {
    expect(effectiveSkillCoefficients(base5, { awakening: 0 })).toEqual(base5);
  });

  it('1각성: 스킬1 +15%p', () => {
    const r = effectiveSkillCoefficients(base5, { awakening: 1 });
    expect(r.skill1).toBe(235);
    expect(r.skill2).toBe(290);
    expect(r.ultimate).toBe(500);
  });

  it('2각성: 스킬1 +15%p, 스킬2 +15%p', () => {
    const r = effectiveSkillCoefficients(base5, { awakening: 2 });
    expect(r.skill1).toBe(235);
    expect(r.skill2).toBe(305);
    expect(r.ultimate).toBe(500);
  });

  it('4각성: 궁극기 +20%p 추가', () => {
    const r = effectiveSkillCoefficients(base5, { awakening: 4 });
    expect(r.skill1).toBe(235);
    expect(r.skill2).toBe(305);
    expect(r.ultimate).toBe(520);
  });

  it('기본공격은 각성과 무관하게 100 고정', () => {
    expect(effectiveSkillCoefficients(base5, { awakening: 5 }).basicAttack).toBe(100);
  });

  it('스킬2가 없는 1성은 2각성이어도 skill2가 null로 유지된다', () => {
    const r = effectiveSkillCoefficients(DEFAULT_SKILL_COEFFICIENTS[1], { awakening: 2 });
    expect(r.skill2).toBeNull();
    expect(r.skill1).toBe(175); // 160 + 15
  });
});

describe('14-7 전용돌파 보정', () => {
  const base5 = DEFAULT_SKILL_COEFFICIENTS[5];

  it('1돌파는 스킬 계수에 영향 없음', () => {
    expect(effectiveSkillCoefficients(base5, { breakthrough: 1 })).toEqual(base5);
  });

  it('2돌파: 액티브 스킬 계수 +10%p (기본공격 제외)', () => {
    const r = effectiveSkillCoefficients(base5, { breakthrough: 2 });
    expect(r.basicAttack).toBe(100);
    expect(r.skill1).toBe(230);
    expect(r.skill2).toBe(300);
    expect(r.ultimate).toBe(510);
  });

  it('각성과 돌파 보정은 합산된다', () => {
    const r = effectiveSkillCoefficients(base5, { awakening: 4, breakthrough: 3 });
    expect(r.skill1).toBe(245); // 220 + 15 + 10
    expect(r.skill2).toBe(315); // 290 + 15 + 10
    expect(r.ultimate).toBe(530); // 500 + 20 + 10
  });

  it('1돌파 이상은 상성 유리 시에만 추가 피해 +5%', () => {
    expect(advantageBonusMultiplier(0, true)).toBe(1.0);
    expect(advantageBonusMultiplier(1, false)).toBe(1.0);
    expect(advantageBonusMultiplier(1, true)).toBeCloseTo(1.05, 10);
    expect(advantageBonusMultiplier(3, true)).toBeCloseTo(1.05, 10);
  });

  it('궁극기 오행 극대화 배율은 1.2 (최종 1.5 × 1.2 = 1.8)', () => {
    expect(ULTIMATE_ELEMENT_AMPLIFIER).toBe(1.2);
    expect(1.5 * ULTIMATE_ELEMENT_AMPLIFIER).toBeCloseTo(1.8, 10);
  });
});
