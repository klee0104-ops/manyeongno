/**
 * 15-2 오행 상성 매트릭스 검증 — 문서의 상극 순환(목극토·토극수·수극화·화극금·금극목)을 그대로 재현.
 */
import { describe, it, expect } from 'vitest';
import { getElementMultiplier, isAdvantaged, allElements } from '@/systems/elements';

describe('getElementMultiplier (15-2)', () => {
  it('상극 관계(유리)는 1.5배다', () => {
    expect(getElementMultiplier('목', '토')).toBe(1.5);
    expect(getElementMultiplier('토', '수')).toBe(1.5);
    expect(getElementMultiplier('수', '화')).toBe(1.5);
    expect(getElementMultiplier('화', '금')).toBe(1.5);
    expect(getElementMultiplier('금', '목')).toBe(1.5);
  });

  it('피상극 관계(불리)는 0.7배다', () => {
    expect(getElementMultiplier('토', '목')).toBe(0.7);
    expect(getElementMultiplier('수', '토')).toBe(0.7);
    expect(getElementMultiplier('화', '수')).toBe(0.7);
    expect(getElementMultiplier('금', '화')).toBe(0.7);
    expect(getElementMultiplier('목', '금')).toBe(0.7);
  });

  it('동일 속성 및 상생 관계는 중립(1.0배)이다', () => {
    for (const el of allElements()) {
      expect(getElementMultiplier(el, el)).toBe(1.0);
    }
    expect(getElementMultiplier('목', '화')).toBe(1.0);
  });
});

describe('isAdvantaged', () => {
  it('배율이 1.0 초과일 때만 true다', () => {
    expect(isAdvantaged('목', '토')).toBe(true);
    expect(isAdvantaged('목', '금')).toBe(false);
    expect(isAdvantaged('목', '화')).toBe(false);
  });
});
