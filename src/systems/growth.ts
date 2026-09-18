/**
 * 유닛 성장: 레벨업 / 전용돌파.
 * 근거 문서: 기획 브리핑 14-4(레벨캡: 등급별 기본 + 각성당 +10), 14-7(혼편 5개당 1돌파, 최대 3회).
 *
 * ⚠️ PLACEHOLDER: 레벨업 골드 비용은 economy.ts의 levelUpCost() 참고(임시값).
 * 각성(14-4)은 비용 재화가 발췌본에 없어 아직 미구현 — TODO.
 *
 * 이 모듈은 순수 로직이다 — Phaser/DOM에 의존하지 않는다.
 */
import type { PlayerState } from '@/types/player';
import type { UnitInstance } from '@/types/unit';
import { AWAKENING_LEVEL_CAP_BONUS, BASE_LEVEL_CAP, MAX_BREAKTHROUGH } from '@/config/skillCoefficients';
import { levelUpCost } from './economy';
import type { Roster } from './party';

/** 14-7: 혼편 5개당 1돌파 */
export const SHARDS_PER_BREAKTHROUGH = 5;

/** 14-4: 현재 레벨 캡 */
export function levelCapFor(instance: UnitInstance, roster: Roster): number {
  const def = roster.get(instance.defId);
  if (!def) return 1;
  return BASE_LEVEL_CAP[def.rarity] + instance.awakening * AWAKENING_LEVEL_CAP_BONUS;
}

export type LevelUpFailure = 'not-owned' | 'level-cap' | 'not-enough-gold';

export function tryLevelUp(
  player: PlayerState,
  defId: string,
  roster: Roster,
): { player: PlayerState } | { error: LevelUpFailure } {
  const index = player.ownedUnits.findIndex((u) => u.defId === defId);
  if (index === -1) return { error: 'not-owned' };
  const instance = player.ownedUnits[index];
  if (instance.level >= levelCapFor(instance, roster)) return { error: 'level-cap' };
  const cost = levelUpCost(instance.level);
  if (player.gold < cost) return { error: 'not-enough-gold' };

  const ownedUnits = player.ownedUnits.slice();
  ownedUnits[index] = { ...instance, level: instance.level + 1 };
  return { player: { ...player, gold: player.gold - cost, ownedUnits } };
}

export type BreakthroughFailure = 'not-owned' | 'max-breakthrough' | 'not-enough-shards';

export function tryBreakthrough(
  player: PlayerState,
  defId: string,
): { player: PlayerState } | { error: BreakthroughFailure } {
  const index = player.ownedUnits.findIndex((u) => u.defId === defId);
  if (index === -1) return { error: 'not-owned' };
  const instance = player.ownedUnits[index];
  if (instance.breakthrough >= MAX_BREAKTHROUGH) return { error: 'max-breakthrough' };
  const shards = player.soulShards[defId] ?? 0;
  if (shards < SHARDS_PER_BREAKTHROUGH) return { error: 'not-enough-shards' };

  const ownedUnits = player.ownedUnits.slice();
  ownedUnits[index] = { ...instance, breakthrough: (instance.breakthrough + 1) as UnitInstance['breakthrough'] };
  return {
    player: {
      ...player,
      ownedUnits,
      soulShards: { ...player.soulShards, [defId]: shards - SHARDS_PER_BREAKTHROUGH },
    },
  };
}
