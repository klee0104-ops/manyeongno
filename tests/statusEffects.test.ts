/**
 * 15-6 버프/디버프 합산 캡 및 CC 판정, 지속시간 관리 검증.
 */
import { describe, it, expect } from 'vitest';
import {
  activeCrowdControls,
  applyStatusEffect,
  isActionBlocked,
  isSilenced,
  tickStatusEffects,
  totalBuffPct,
  totalDebuffPct,
  type StatusEffect,
} from '@/systems/statusEffects';

const buff = (id: string, magnitude: number, turns = 2): StatusEffect => ({
  id,
  kind: 'buff',
  magnitude,
  remainingTurns: turns,
});
const debuff = (id: string, magnitude: number, turns = 2): StatusEffect => ({
  id,
  kind: 'debuff',
  magnitude,
  remainingTurns: turns,
});
const cc = (id: string, kind: StatusEffect['cc'], turns = 1): StatusEffect => ({
  id,
  kind: 'cc',
  cc: kind,
  remainingTurns: turns,
});

describe('applyStatusEffect', () => {
  it('새 효과는 추가되고 원본 배열은 변경되지 않는다', () => {
    const before: StatusEffect[] = [];
    const after = applyStatusEffect(before, buff('a', 0.1));
    expect(before).toHaveLength(0);
    expect(after).toHaveLength(1);
  });

  it('동일 id는 중첩되지 않고 더 긴 지속시간으로 갱신된다', () => {
    let effects = applyStatusEffect([], buff('a', 0.1, 3));
    effects = applyStatusEffect(effects, buff('a', 0.2, 1));
    expect(effects).toHaveLength(1);
    expect(effects[0].magnitude).toBe(0.2);
    expect(effects[0].remainingTurns).toBe(3);
  });
});

describe('tickStatusEffects', () => {
  it('지속시간을 1 줄이고 0이 되면 제거한다', () => {
    const effects = [buff('a', 0.1, 1), buff('b', 0.1, 2)];
    const after = tickStatusEffects(effects);
    expect(after.map((e) => e.id)).toEqual(['b']);
    expect(after[0].remainingTurns).toBe(1);
  });
});

describe('15-6 합산 캡', () => {
  it('버프 합산은 +100%를 넘지 않는다', () => {
    const effects = [buff('a', 0.6), buff('b', 0.6)];
    expect(totalBuffPct(effects)).toBe(1.0);
  });

  it('디버프 합산은 -70%를 넘지 않는다', () => {
    const effects = [debuff('a', 0.5), debuff('b', 0.5)];
    expect(totalDebuffPct(effects)).toBe(0.7);
  });

  it('캡 이하에서는 단순 합산', () => {
    const effects = [buff('a', 0.2), buff('b', 0.3), debuff('c', 0.1)];
    expect(totalBuffPct(effects)).toBeCloseTo(0.5, 10);
    expect(totalDebuffPct(effects)).toBeCloseTo(0.1, 10);
  });

  it('CC는 버프/디버프 합산에 포함되지 않는다', () => {
    expect(totalBuffPct([cc('s', '기절')])).toBe(0);
    expect(totalDebuffPct([cc('s', '기절')])).toBe(0);
  });
});

describe('CC 판정', () => {
  it('기절/빙결은 행동을 막는다', () => {
    expect(isActionBlocked([cc('s', '기절')])).toBe(true);
    expect(isActionBlocked([cc('f', '빙결')])).toBe(true);
  });

  it('침묵은 행동은 허용하되 스킬만 막는다', () => {
    const effects = [cc('m', '침묵')];
    expect(isActionBlocked(effects)).toBe(false);
    expect(isSilenced(effects)).toBe(true);
  });

  it('속박은 현재 전투 모델에서 행동/스킬을 막지 않는다', () => {
    const effects = [cc('r', '속박')];
    expect(isActionBlocked(effects)).toBe(false);
    expect(isSilenced(effects)).toBe(false);
  });

  it('activeCrowdControls는 걸려 있는 CC 종류를 나열한다', () => {
    expect(activeCrowdControls([cc('a', '기절'), buff('b', 0.1), cc('c', '침묵')])).toEqual([
      '기절',
      '침묵',
    ]);
  });
});
