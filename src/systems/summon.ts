/**
 * 소환 결과(등급) → 실제 유닛 결정 및 지급.
 * 근거 문서: 기획 브리핑 14-2(픽업 규칙), 14-7(혼편 — 중복 획득 시 적립), 14-3(도감).
 *
 * ⚠️ PLACEHOLDER: 중복 유닛 획득 시 혼편 지급량(1개)은 발췌본에 없어 임시로 정했다.
 *
 * 이 모듈은 순수 로직이다 — Phaser/DOM에 의존하지 않는다.
 */
import type { PlayerState } from '@/types/player';
import { createUnitInstance } from '@/types/player';
import type { Rarity, UnitDefinition } from '@/types/unit';
import type { PullResult } from './gacha';
import type { Roster } from './party';

export const DUPLICATE_SOUL_SHARDS = 1;

/** 뽑힌 등급에 해당하는 유닛을 로스터에서 고른다. 해당 등급이 없으면 한 단계씩 낮춰 찾는다. */
export function resolvePullToUnit(
  result: PullResult,
  roster: Roster,
  pickupId: string,
  rng: () => number = Math.random,
): UnitDefinition {
  const all = [...roster.values()];
  if (result.rarity === 5) {
    const pickup = roster.get(pickupId);
    if (result.isPickup && pickup) return pickup;
    const nonPickup = all.filter((u) => u.rarity === 5 && u.id !== pickupId);
    if (nonPickup.length > 0) return nonPickup[Math.floor(rng() * nonPickup.length)];
    if (pickup) return pickup;
  }
  for (let r = result.rarity; r >= 1; r -= 1) {
    const pool = all.filter((u) => u.rarity === (r as Rarity));
    if (pool.length > 0) return pool[Math.floor(rng() * pool.length)];
  }
  throw new Error('로스터가 비어 있습니다.');
}

export interface SummonGrant {
  def: UnitDefinition;
  /** 처음 획득한 유닛인지 */
  isNew: boolean;
  /** 중복이라 혼편으로 전환된 수량 */
  shardsGranted: number;
  rarity: Rarity;
  isPickup: boolean;
  guaranteed: boolean;
}

/** 유닛을 지급한다. 이미 보유 중이면 혼편으로 전환. 원본은 변경하지 않는다. */
export function grantUnit(player: PlayerState, def: UnitDefinition): { player: PlayerState; isNew: boolean; shardsGranted: number } {
  const alreadyOwned = player.ownedUnits.some((u) => u.defId === def.id);
  if (alreadyOwned) {
    const current = player.soulShards[def.id] ?? 0;
    return {
      player: { ...player, soulShards: { ...player.soulShards, [def.id]: current + DUPLICATE_SOUL_SHARDS } },
      isNew: false,
      shardsGranted: DUPLICATE_SOUL_SHARDS,
    };
  }
  return {
    player: { ...player, ownedUnits: [...player.ownedUnits, createUnitInstance(def.id)] },
    isNew: true,
    shardsGranted: 0,
  };
}

/** 소환 결과 목록을 순서대로 지급하고 각 결과의 상세를 돌려준다. */
export function applySummonResults(
  player: PlayerState,
  results: PullResult[],
  roster: Roster,
  pickupId: string,
  rng: () => number = Math.random,
): { player: PlayerState; grants: SummonGrant[] } {
  let current = player;
  const grants: SummonGrant[] = [];
  for (const result of results) {
    const def = resolvePullToUnit(result, roster, pickupId, rng);
    const granted = grantUnit(current, def);
    current = granted.player;
    grants.push({
      def,
      isNew: granted.isNew,
      shardsGranted: granted.shardsGranted,
      rarity: result.rarity,
      isPickup: result.isPickup,
      guaranteed: result.guaranteed,
    });
  }
  return { player: current, grants };
}
