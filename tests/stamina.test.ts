/**
 * 12-1/12-2 스태미나 소모·자연회복(5분당 1) 검증.
 */
import { describe, it, expect } from 'vitest';
import {
  STAMINA_REGEN_INTERVAL_MS,
  applyStaminaRegen,
  msUntilNextStamina,
  spendStamina,
  staminaCostFor,
  staminaMaxForLevel,
} from '@/systems/stamina';
import { createNewPlayerState, BASE_STAMINA_MAX } from '@/types/player';

const T0 = 1_000_000;

describe('12-2 최대치', () => {
  it('기본 120, 계정 레벨당 +1', () => {
    expect(staminaMaxForLevel(1)).toBe(120);
    expect(staminaMaxForLevel(11)).toBe(130);
  });
});

describe('12-1 소모량', () => {
  it('최초 클리어는 난이도 무관 6, 반복은 난이도별', () => {
    expect(staminaCostFor('지옥', false)).toBe(6);
    expect(staminaCostFor('쉬움', true)).toBe(6);
    expect(staminaCostFor('보통', true)).toBe(8);
    expect(staminaCostFor('어려움', true)).toBe(12);
    expect(staminaCostFor('지옥', true)).toBe(20);
  });
});

describe('spendStamina', () => {
  it('부족하면 null', () => {
    const p = { ...createNewPlayerState(T0), stamina: 5 };
    expect(spendStamina(p, 6, T0)).toBeNull();
  });

  it('가득 찬 상태에서 소모하면 회복 타이머가 지금부터 시작된다', () => {
    const p = { ...createNewPlayerState(T0), lastStaminaAt: T0 - 999_999 };
    const after = spendStamina(p, 6, T0)!;
    expect(after.stamina).toBe(BASE_STAMINA_MAX - 6);
    expect(after.lastStaminaAt).toBe(T0);
  });

  it('원본은 변경하지 않는다', () => {
    const p = createNewPlayerState(T0);
    spendStamina(p, 6, T0);
    expect(p.stamina).toBe(BASE_STAMINA_MAX);
  });
});

describe('applyStaminaRegen', () => {
  it('5분마다 1씩 회복한다', () => {
    const p = { ...createNewPlayerState(T0), stamina: 100, lastStaminaAt: T0 };
    const after = applyStaminaRegen(p, T0 + STAMINA_REGEN_INTERVAL_MS * 3 + 1000);
    expect(after.stamina).toBe(103);
    // 기준 시각은 마지막 회복 틱으로 이동 (남은 1초는 다음 틱에 누적)
    expect(after.lastStaminaAt).toBe(T0 + STAMINA_REGEN_INTERVAL_MS * 3);
  });

  it('5분 미만 경과면 변화 없음', () => {
    const p = { ...createNewPlayerState(T0), stamina: 100, lastStaminaAt: T0 };
    const after = applyStaminaRegen(p, T0 + STAMINA_REGEN_INTERVAL_MS - 1);
    expect(after.stamina).toBe(100);
    expect(after.lastStaminaAt).toBe(T0);
  });

  it('최대치를 넘지 않으며 도달 시 기준 시각을 현재로 맞춘다', () => {
    const p = { ...createNewPlayerState(T0), stamina: 118, lastStaminaAt: T0 };
    const now = T0 + STAMINA_REGEN_INTERVAL_MS * 50;
    const after = applyStaminaRegen(p, now);
    expect(after.stamina).toBe(120);
    expect(after.lastStaminaAt).toBe(now);
  });

  it('msUntilNextStamina는 최대치면 0, 아니면 다음 틱까지 남은 시간', () => {
    const full = createNewPlayerState(T0);
    expect(msUntilNextStamina(full, T0 + 1000)).toBe(0);
    const p = { ...full, stamina: 10, lastStaminaAt: T0 };
    expect(msUntilNextStamina(p, T0 + 60_000)).toBe(STAMINA_REGEN_INTERVAL_MS - 60_000);
  });
});
