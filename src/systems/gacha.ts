/**
 * 가챠(부적 소환) 시스템.
 * 근거 문서: 기획 브리핑 14-2 (가챠 확률표 및 천장 시스템).
 *
 * 등급별 기본 확률: 5성 1.5% / 4성 6.0% / 3성 18.0% / 2성 35.0% / 1성 39.5%
 * 천장: 소프트 천장 65회차부터 5성 확률 점증, 하드 천장 80회차 5성 확정.
 * 픽업 보장: 5성 등장 시 픽업 50%. 천장으로 나온 5성이 논픽업이면 "차기 5성 확정 카운터" 적립 →
 *            카운터 보유 중 다음 5성은 100% 픽업.
 * 10연 소환: 4성 이상 최소 1개 확정 지급.
 *
 * ⚠️ 소프트 천장 구간(65~79회차)의 정확한 확률 증가 곡선은 기획서에 수치식으로 명시되어 있지
 * 않다 — 65회차 기본 확률에서 80회차 100%까지 선형 보간하는 것으로 가정(placeholder)했다.
 * 실제 밸런싱 수치가 정해지면 rampFiveStarChance()만 교체하면 된다.
 */
import type { Rarity } from '@/types/unit';

export const BASE_RARITY_RATE: Record<Rarity, number> = {
  5: 0.015,
  4: 0.06,
  3: 0.18,
  2: 0.35,
  1: 0.395,
};

export const SOFT_PITY_START = 65; // 65회차부터 점증 시작
export const HARD_PITY = 80; // 80회차 확정

export interface PullResult {
  rarity: Rarity;
  /** 5성일 때만 의미 있음: 픽업 유닛인지 여부 */
  isPickup: boolean;
  /** 이 결과가 확정(천장/10연 보장)으로 나온 것인지, 자연 확률로 나온 것인지 */
  guaranteed: boolean;
}

export interface GachaBannerState {
  pullsSinceLastFiveStar: number;
  pickupGuaranteedNext: boolean;
}

/** 소프트 천장 구간의 5성 확률 램프(placeholder, 위 주석 참고) */
export function rampFiveStarChance(pullsSinceLastFiveStar: number): number {
  const base = BASE_RARITY_RATE[5];
  const priorPullCount = pullsSinceLastFiveStar; // 이번 뽑기 이전까지 누적된 미획득 횟수
  const currentPullIndex = priorPullCount + 1; // 이번 뽑기가 몇 번째 뽑기인지 (1-indexed)

  if (currentPullIndex >= HARD_PITY) return 1.0;
  if (currentPullIndex < SOFT_PITY_START) return base;

  const t =
    (currentPullIndex - SOFT_PITY_START) / (HARD_PITY - SOFT_PITY_START);
  return base + (1.0 - base) * t;
}

function pickNonFiveStarRarity(rng: () => number): Rarity {
  // 5성을 제외한 나머지 등급 확률을 그대로 비율 유지한 채 재정규화해서 뽑는다.
  const rest: Rarity[] = [4, 3, 2, 1];
  const restTotal = rest.reduce((sum, r) => sum + BASE_RARITY_RATE[r], 0);
  let roll = rng() * restTotal;
  for (const r of rest) {
    roll -= BASE_RARITY_RATE[r];
    if (roll <= 0) return r;
  }
  return 1;
}

export class GachaBanner {
  private state: GachaBannerState;

  /** initialState를 주면 세이브에 저장된 천장/픽업 보장 카운터를 이어받는다. */
  constructor(
    private readonly rng: () => number = Math.random,
    initialState?: GachaBannerState,
  ) {
    this.state = initialState
      ? { ...initialState }
      : { pullsSinceLastFiveStar: 0, pickupGuaranteedNext: false };
  }

  getState(): GachaBannerState {
    return { ...this.state };
  }

  /** 단일 소환 1회 */
  pull(): PullResult {
    const fiveStarChance = rampFiveStarChance(this.state.pullsSinceLastFiveStar);
    const roll = this.rng();

    if (roll < fiveStarChance) {
      const guaranteed = this.state.pullsSinceLastFiveStar + 1 >= HARD_PITY;
      const isPickup = this.state.pickupGuaranteedNext ? true : this.rng() < 0.5;

      this.state.pullsSinceLastFiveStar = 0;
      this.state.pickupGuaranteedNext = isPickup ? false : true;

      return { rarity: 5, isPickup, guaranteed };
    }

    this.state.pullsSinceLastFiveStar += 1;
    const rarity = pickNonFiveStarRarity(this.rng);
    return { rarity, isPickup: false, guaranteed: false };
  }

  /** 10연 소환: 4성 이상 최소 1개 보장 */
  pullTen(): PullResult[] {
    const results = Array.from({ length: 10 }, () => this.pull());
    const hasFourStarOrAbove = results.some((r) => r.rarity >= 4);

    if (!hasFourStarOrAbove) {
      // 마지막 뽑기를 4성으로 강제 승격 (14-2: "10연 소환 시 4성 이상 최소 1개 확정 지급")
      results[9] = { rarity: 4, isPickup: false, guaranteed: true };
    }

    return results;
  }
}
