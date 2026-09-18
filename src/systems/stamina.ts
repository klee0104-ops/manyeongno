/**
 * 스태미나 소모 / 자연회복.
 * 근거 문서: 기획 브리핑 12-1(최초클리어 고정 소모), 12-2(기본 최대치·계정레벨 보정·5분당 1 회복).
 *
 * 이 모듈은 순수 로직이다 — Phaser/DOM에 의존하지 않는다.
 */
import type { PlayerState } from '@/types/player';
import { BASE_STAMINA_MAX } from '@/types/player';
import { FIRST_CLEAR_STAMINA_COST, STAMINA_COST, type Difficulty } from '@/types/stage';

/** 12-2: 5분당 1 회복 */
export const STAMINA_REGEN_INTERVAL_MS = 5 * 60 * 1000;

/** 12-2: 최대치 = 120 + (계정레벨 - 1) */
export function staminaMaxForLevel(accountLevel: number): number {
  return BASE_STAMINA_MAX + Math.max(0, accountLevel - 1);
}

/** 12-1/12-2: 최초 클리어는 난이도 무관 6, 반복 파밍은 난이도별 */
export function staminaCostFor(difficulty: Difficulty, alreadyCleared: boolean): number {
  return alreadyCleared ? STAMINA_COST[difficulty] : FIRST_CLEAR_STAMINA_COST;
}

/**
 * 마지막 회복 시각 이후 경과한 5분 단위만큼 스태미나를 채운다. 원본은 변경하지 않는다.
 * 최대치에 도달하면 기준 시각을 현재로 맞춰 "초과 적립"이 생기지 않게 한다.
 */
export function applyStaminaRegen(state: PlayerState, now: number): PlayerState {
  const max = staminaMaxForLevel(state.accountLevel);
  if (state.stamina >= max) {
    return { ...state, staminaMax: max, lastStaminaAt: now };
  }
  const elapsed = now - state.lastStaminaAt;
  const ticks = Math.floor(elapsed / STAMINA_REGEN_INTERVAL_MS);
  if (ticks <= 0) return { ...state, staminaMax: max };

  const stamina = Math.min(max, state.stamina + ticks);
  const lastStaminaAt = stamina >= max ? now : state.lastStaminaAt + ticks * STAMINA_REGEN_INTERVAL_MS;
  return { ...state, staminaMax: max, stamina, lastStaminaAt };
}

/** 다음 1 회복까지 남은 ms (최대치면 0) */
export function msUntilNextStamina(state: PlayerState, now: number): number {
  if (state.stamina >= staminaMaxForLevel(state.accountLevel)) return 0;
  const elapsed = now - state.lastStaminaAt;
  return Math.max(0, STAMINA_REGEN_INTERVAL_MS - (elapsed % STAMINA_REGEN_INTERVAL_MS));
}

/** 스태미나를 소모한다. 부족하면 null. 최대치 상태에서 소모하면 회복 타이머가 그 시점부터 시작된다. */
export function spendStamina(state: PlayerState, cost: number, now: number): PlayerState | null {
  if (state.stamina < cost) return null;
  const wasFull = state.stamina >= staminaMaxForLevel(state.accountLevel);
  return {
    ...state,
    stamina: state.stamina - cost,
    lastStaminaAt: wasFull ? now : state.lastStaminaAt,
  };
}
