/**
 * 16-1 전열/후열 타겟팅 규칙 및 편성 유효성 검증.
 */
import { describe, it, expect } from 'vitest';
import {
  FRONT_ROW_SLOTS,
  BACK_ROW_SLOTS,
  PARTY_SLOTS,
  isFrontRowWiped,
  isValidFormation,
  rowForSlotIndex,
  selectTarget,
  targetableUnits,
  type Positioned,
} from '@/systems/targeting';

interface U extends Positioned {
  id: string;
}
const u = (id: string, row: Positioned['row'], hp = 100): U => ({ id, row, hp });

describe('16-1 편성 슬롯', () => {
  it('전열 2 + 후열 3 = 5슬롯', () => {
    expect(FRONT_ROW_SLOTS).toBe(2);
    expect(BACK_ROW_SLOTS).toBe(3);
    expect(PARTY_SLOTS).toBe(5);
  });

  it('편성 인덱스 0~1은 전열, 2~4는 후열', () => {
    expect([0, 1, 2, 3, 4].map(rowForSlotIndex)).toEqual(['전열', '전열', '후열', '후열', '후열']);
  });

  it('isValidFormation은 슬롯 한도를 검사한다', () => {
    expect(isValidFormation([u('a', '전열'), u('b', '전열'), u('c', '후열')])).toBe(true);
    expect(isValidFormation([u('a', '전열'), u('b', '전열'), u('c', '전열')])).toBe(false);
    expect(
      isValidFormation([u('a', '후열'), u('b', '후열'), u('c', '후열'), u('d', '후열')]),
    ).toBe(false);
    expect(
      isValidFormation([
        u('a', '전열'),
        u('b', '전열'),
        u('c', '후열'),
        u('d', '후열'),
        u('e', '후열'),
        u('f', '후열'),
      ]),
    ).toBe(false);
  });
});

describe('타겟팅', () => {
  it('전열에 생존자가 있으면 전열만 대상이 된다', () => {
    const units = [u('f1', '전열'), u('f2', '전열'), u('b1', '후열')];
    expect(targetableUnits(units).map((x) => x.id)).toEqual(['f1', 'f2']);
    expect(selectTarget(units)?.id).toBe('f1');
  });

  it('전열 일부가 죽어도 남은 전열이 우선', () => {
    const units = [u('f1', '전열', 0), u('f2', '전열'), u('b1', '후열')];
    expect(selectTarget(units)?.id).toBe('f2');
    expect(isFrontRowWiped(units)).toBe(false);
  });

  it('전열 전멸 시 후열이 앞으로 당겨져 대상이 된다', () => {
    const units = [u('f1', '전열', 0), u('f2', '전열', 0), u('b1', '후열'), u('b2', '후열')];
    expect(targetableUnits(units).map((x) => x.id)).toEqual(['b1', 'b2']);
    expect(selectTarget(units)?.id).toBe('b1');
    expect(isFrontRowWiped(units)).toBe(true);
  });

  it('전원 사망이면 대상이 없다', () => {
    const units = [u('f1', '전열', 0), u('b1', '후열', 0)];
    expect(selectTarget(units)).toBeUndefined();
  });

  it('편성에 전열이 아예 없으면 isFrontRowWiped는 false, 후열이 곧바로 대상', () => {
    const units = [u('b1', '후열')];
    expect(isFrontRowWiped(units)).toBe(false);
    expect(selectTarget(units)?.id).toBe('b1');
  });
});
