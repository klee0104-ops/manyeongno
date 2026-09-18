/**
 * 버프 / 디버프 / 상태이상(CC) 처리.
 * 근거 문서: 기획 브리핑 15-6(버프·디버프 및 상태이상), 15-3(데미지 공식의 버프항).
 *
 * 15-6 캡: 버프 합산 최대 +100%, 디버프 합산 최대 -70%.
 * 지속시간은 "턴" 단위로 관리하며, 매 턴 종료 시 1씩 감소하고 0이 되면 제거된다.
 *
 * 이 모듈은 순수 로직이다 — Phaser/DOM에 의존하지 않는다.
 */
import { MAX_BUFF_PCT, MAX_DEBUFF_PCT } from './damage';

/**
 * 15-6: 상태이상(CC) 종류.
 * - 기절(stun): 행동 불가
 * - 빙결(freeze): 행동 불가
 * - 침묵(silence): 스킬 사용 불가(기본공격만 가능)
 * - 속박(root): 행동은 가능하나 회피/이동 불가 — 현재 전투 모델에는 이동이 없어 행동 제약 없음
 */
export type CrowdControlKind = '기절' | '빙결' | '침묵' | '속박';

/** 행동 자체를 막는 CC */
const ACTION_BLOCKING_CC: readonly CrowdControlKind[] = ['기절', '빙결'];
/** 스킬 사용만 막는 CC */
const SKILL_BLOCKING_CC: readonly CrowdControlKind[] = ['침묵'];

export type StatModifierKind = 'buff' | 'debuff';

export interface StatusEffect {
  id: string;
  kind: StatModifierKind | 'cc';
  /** kind가 'cc'일 때만 의미 있음 */
  cc?: CrowdControlKind;
  /** kind가 'buff'/'debuff'일 때의 피해량 보정 비율(소수, 0.1 = 10%) */
  magnitude?: number;
  /** 남은 지속 턴 수. 1이면 이번 턴 종료 시 사라진다. */
  remainingTurns: number;
}

/** 한 전투원에게 붙어 있는 모든 상태효과의 집합 */
export type StatusEffectSet = StatusEffect[];

/**
 * 15-6: 동일 id의 효과는 중첩되지 않고 지속시간을 갱신(refresh)한다.
 * 서로 다른 id의 효과는 합산 대상이 된다.
 */
export function applyStatusEffect(effects: StatusEffectSet, incoming: StatusEffect): StatusEffectSet {
  const existingIndex = effects.findIndex((e) => e.id === incoming.id);
  if (existingIndex === -1) return [...effects, { ...incoming }];

  const next = effects.slice();
  next[existingIndex] = {
    ...incoming,
    // 더 긴 지속시간이 남아 있으면 그쪽을 유지한다.
    remainingTurns: Math.max(effects[existingIndex].remainingTurns, incoming.remainingTurns),
  };
  return next;
}

/** 매 턴 종료 시 호출 — 지속시간을 1 감소시키고 만료된 효과를 제거한다. */
export function tickStatusEffects(effects: StatusEffectSet): StatusEffectSet {
  return effects
    .map((e) => ({ ...e, remainingTurns: e.remainingTurns - 1 }))
    .filter((e) => e.remainingTurns > 0);
}

/** 15-6: 버프 합산(+100% 캡 적용) */
export function totalBuffPct(effects: StatusEffectSet): number {
  const sum = effects
    .filter((e) => e.kind === 'buff')
    .reduce((acc, e) => acc + (e.magnitude ?? 0), 0);
  return Math.min(sum, MAX_BUFF_PCT);
}

/** 15-6: 디버프 합산(-70% 캡 적용) */
export function totalDebuffPct(effects: StatusEffectSet): number {
  const sum = effects
    .filter((e) => e.kind === 'debuff')
    .reduce((acc, e) => acc + (e.magnitude ?? 0), 0);
  return Math.min(sum, MAX_DEBUFF_PCT);
}

/** 기절/빙결 등으로 이번 턴 행동이 불가능한지 */
export function isActionBlocked(effects: StatusEffectSet): boolean {
  return effects.some((e) => e.kind === 'cc' && e.cc !== undefined && ACTION_BLOCKING_CC.includes(e.cc));
}

/** 침묵 등으로 스킬(기본공격 제외) 사용이 불가능한지 */
export function isSilenced(effects: StatusEffectSet): boolean {
  return effects.some((e) => e.kind === 'cc' && e.cc !== undefined && SKILL_BLOCKING_CC.includes(e.cc));
}

/** 현재 걸려 있는 CC 종류 목록 */
export function activeCrowdControls(effects: StatusEffectSet): CrowdControlKind[] {
  return effects
    .filter((e) => e.kind === 'cc' && e.cc !== undefined)
    .map((e) => e.cc as CrowdControlKind);
}
