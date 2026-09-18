import type { UnitInstance } from './unit';
import type { GachaBannerState } from '@/systems/gacha';

export interface PlayerState {
  accountLevel: number;
  gold: number;
  diamond: number;
  /** 12-2: 기본 최대치 120, 계정 레벨당 +1 */
  stamina: number;
  staminaMax: number;
  /** 12-2 자연회복 기준 시각(ms epoch). 마지막으로 스태미나 1이 회복된 시점 */
  lastStaminaAt: number;
  ownedUnits: UnitInstance[];
  /** 14-7: 유닛별 보유 혼편 수 (중복 획득 시 적립) */
  soulShards: Record<string, number>;
  /** 16-1: 편성 슬롯 순서(defId). 0~1번 전열, 2~4번 후열 */
  partyIds: string[];
  clearedStageIds: string[];
  gachaBannerState: GachaBannerState;
}

/** 12-2: 기본 최대 스태미나 */
export const BASE_STAMINA_MAX = 120;

/**
 * ⚠️ PLACEHOLDER: 신규 계정 초기 지급.
 * 기획서(19장 온보딩)에 초기 지급 수치가 없어, 튜토리얼 없이 바로 소환·전투를 체험할 수 있도록
 * 임시로 정한 값이다. 스타터 요괴 3종은 units.sample.json에 있는 하위 등급 유닛을 그대로 썼다.
 */
export const STARTER_UNIT_IDS = ['sangun', 'jungnimbaem', 'japchojeongryeong'];
export const STARTER_DIAMOND = 3000;
export const STARTER_GOLD = 500;

export function createUnitInstance(defId: string): UnitInstance {
  return { defId, level: 1, awakening: 0, breakthrough: 0, dexSeal: 0 };
}

export function createNewPlayerState(now: number = Date.now()): PlayerState {
  return {
    accountLevel: 1,
    gold: STARTER_GOLD,
    diamond: STARTER_DIAMOND,
    stamina: BASE_STAMINA_MAX,
    staminaMax: BASE_STAMINA_MAX,
    lastStaminaAt: now,
    ownedUnits: STARTER_UNIT_IDS.map(createUnitInstance),
    soulShards: {},
    partyIds: [...STARTER_UNIT_IDS],
    clearedStageIds: [],
    gachaBannerState: { pullsSinceLastFiveStar: 0, pickupGuaranteedNext: false },
  };
}

/**
 * 구버전 세이브(필드 누락)를 현재 스키마로 보정한다. 알 수 없는 값은 새 계정 기본값으로 채운다.
 */
export function normalizePlayerState(raw: Partial<PlayerState> | null | undefined, now: number = Date.now()): PlayerState {
  const fresh = createNewPlayerState(now);
  if (!raw || typeof raw !== 'object') return fresh;

  const ownedUnits = Array.isArray(raw.ownedUnits) && raw.ownedUnits.length > 0 ? raw.ownedUnits : fresh.ownedUnits;
  const ownedIds = new Set(ownedUnits.map((u) => u.defId));
  const partyIds = Array.isArray(raw.partyIds)
    ? raw.partyIds.filter((id) => ownedIds.has(id)).slice(0, 5)
    : [];

  return {
    accountLevel: typeof raw.accountLevel === 'number' ? raw.accountLevel : fresh.accountLevel,
    gold: typeof raw.gold === 'number' ? raw.gold : fresh.gold,
    diamond: typeof raw.diamond === 'number' ? raw.diamond : fresh.diamond,
    stamina: typeof raw.stamina === 'number' ? raw.stamina : fresh.stamina,
    staminaMax: typeof raw.staminaMax === 'number' ? raw.staminaMax : fresh.staminaMax,
    lastStaminaAt: typeof raw.lastStaminaAt === 'number' ? raw.lastStaminaAt : now,
    ownedUnits,
    soulShards: raw.soulShards && typeof raw.soulShards === 'object' ? raw.soulShards : {},
    partyIds: partyIds.length > 0 ? partyIds : ownedUnits.slice(0, 5).map((u) => u.defId),
    clearedStageIds: Array.isArray(raw.clearedStageIds) ? raw.clearedStageIds : [],
    gachaBannerState:
      raw.gachaBannerState && typeof raw.gachaBannerState === 'object'
        ? raw.gachaBannerState
        : fresh.gachaBannerState,
  };
}
