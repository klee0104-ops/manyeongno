/**
 * 파티 진형 및 타겟팅 규칙.
 * 근거 문서: 기획 브리핑 16-1(파티 편성: 전열 2 + 후열 3, 전열 전멸 시 후열이 앞으로 당겨짐).
 *
 * 이 모듈은 순수 로직이다 — Phaser/DOM에 의존하지 않는다.
 */

export type Row = '전열' | '후열';

/** 16-1: 5슬롯 = 전열 2 + 후열 3 */
export const FRONT_ROW_SLOTS = 2;
export const BACK_ROW_SLOTS = 3;
export const PARTY_SLOTS = FRONT_ROW_SLOTS + BACK_ROW_SLOTS;

export interface Positioned {
  row: Row;
  hp: number;
}

function aliveInRow<T extends Positioned>(units: T[], row: Row): T[] {
  return units.filter((u) => u.row === row && u.hp > 0);
}

/**
 * 16-1: 타겟 후보 산출.
 * 전열에 생존자가 있으면 전열만 공격 대상이 되고, 전열이 전멸하면 후열이 앞으로 당겨져 대상이 된다.
 */
export function targetableUnits<T extends Positioned>(units: T[]): T[] {
  const front = aliveInRow(units, '전열');
  if (front.length > 0) return front;
  return aliveInRow(units, '후열');
}

/** 16-1: 타겟 1체 선택 — 후보 중 첫 번째(편성 순서상 앞자리) */
export function selectTarget<T extends Positioned>(units: T[]): T | undefined {
  return targetableUnits(units)[0];
}

/**
 * 전열이 전멸했는지 여부. true이면 후열이 전열 자리로 당겨진 상태로 간주한다.
 * (실제 row 값은 바꾸지 않는다 — 원래 편성 정보를 보존하고, 판정은 targetableUnits로 위임한다.)
 */
export function isFrontRowWiped<T extends Positioned>(units: T[]): boolean {
  return units.some((u) => u.row === '전열') && aliveInRow(units, '전열').length === 0;
}

/**
 * 16-1: 편성 인덱스(0~4)를 전열/후열로 매핑한다. 0~1번 슬롯이 전열, 2~4번이 후열.
 * 5슬롯을 넘는 인덱스는 후열로 취급한다(확장 편성 대비).
 */
export function rowForSlotIndex(index: number): Row {
  return index < FRONT_ROW_SLOTS ? '전열' : '후열';
}

/** 편성이 16-1 규칙(전열 ≤ 2, 후열 ≤ 3, 총 ≤ 5)을 만족하는지 검사한다. */
export function isValidFormation<T extends Positioned>(units: T[]): boolean {
  if (units.length > PARTY_SLOTS) return false;
  const front = units.filter((u) => u.row === '전열').length;
  const back = units.filter((u) => u.row === '후열').length;
  return front <= FRONT_ROW_SLOTS && back <= BACK_ROW_SLOTS;
}
