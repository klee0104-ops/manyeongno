/**
 * 보유 유닛 → 전투 파티 변환 및 편성 규칙.
 * 근거 문서: 기획 브리핑 16-1(5슬롯: 전열 2 + 후열 3), 14-4(레벨/각성), 14-7(전용돌파 스탯 보정).
 *
 * 이 모듈은 순수 로직이다 — Phaser/DOM에 의존하지 않는다.
 */
import type { PlayerState } from '@/types/player';
import type { UnitDefinition, UnitInstance } from '@/types/unit';
import { computeBattleStats } from '@/config/unitBaseStats';
import { BREAKTHROUGH_STAT_BONUS_PCT } from '@/config/skillCoefficients';
import type { Combatant } from './battle';
import { PARTY_SLOTS, rowForSlotIndex } from './targeting';

export type Roster = ReadonlyMap<string, UnitDefinition>;

export function toRoster(defs: readonly UnitDefinition[]): Roster {
  return new Map(defs.map((d) => [d.id, d]));
}

/** 14-7: 1돌파부터 누적 +8%씩 (index = 돌파 단계) */
export function breakthroughStatMultiplier(breakthrough: UnitInstance['breakthrough']): number {
  let total = 0;
  for (let i = 1; i <= breakthrough; i += 1) total += BREAKTHROUGH_STAT_BONUS_PCT[i] ?? 0;
  return 1 + total;
}

/** 유닛 인스턴스 하나를 전투원으로 변환한다. */
export function toCombatant(instance: UnitInstance, def: UnitDefinition, slotIndex: number): Combatant {
  const stats = computeBattleStats(def.rarity, def.element, instance.level);
  const mult = breakthroughStatMultiplier(instance.breakthrough);
  const atk = Math.round(stats.atk * mult);
  const defense = Math.round(stats.def * mult);
  const hp = Math.round(stats.maxHp * mult);
  return {
    id: def.id,
    name: def.name,
    element: def.element,
    atk,
    def: defense,
    hp,
    maxHp: hp,
    basicAttackCoefficientPct: stats.skillCoefficients.basicAttack,
    row: rowForSlotIndex(slotIndex),
    skillCoefficients: stats.skillCoefficients,
    awakening: instance.awakening,
    breakthrough: instance.breakthrough,
  };
}

/** 16-1: partyIds 순서대로 전투원 배열을 만든다. 보유하지 않거나 로스터에 없는 id는 건너뛴다. */
export function buildParty(player: PlayerState, roster: Roster): Combatant[] {
  const owned = new Map(player.ownedUnits.map((u) => [u.defId, u]));
  const result: Combatant[] = [];
  for (const id of player.partyIds.slice(0, PARTY_SLOTS)) {
    const instance = owned.get(id);
    const def = roster.get(id);
    if (!instance || !def) continue;
    result.push(toCombatant(instance, def, result.length));
  }
  return result;
}

/** 등급 내림차순 → 레벨 내림차순으로 상위 5체를 자동 편성한다. */
export function defaultPartyIds(owned: readonly UnitInstance[], roster: Roster): string[] {
  return owned
    .filter((u) => roster.has(u.defId))
    .slice()
    .sort((a, b) => {
      const ra = roster.get(a.defId)!.rarity;
      const rb = roster.get(b.defId)!.rarity;
      if (rb !== ra) return rb - ra;
      return b.level - a.level;
    })
    .slice(0, PARTY_SLOTS)
    .map((u) => u.defId);
}

/** 편성 토글: 이미 있으면 제외(최소 1체 유지), 없으면 추가(최대 5체). 변경 불가면 null */
export function togglePartyMember(partyIds: readonly string[], defId: string): string[] | null {
  if (partyIds.includes(defId)) {
    if (partyIds.length <= 1) return null;
    return partyIds.filter((id) => id !== defId);
  }
  if (partyIds.length >= PARTY_SLOTS) return null;
  return [...partyIds, defId];
}
