/**
 * 14-2 가챠 확률표 / 천장 / 픽업보장 / 10연 보장 로직 검증.
 */
import { describe, it, expect } from 'vitest';
import { GachaBanner, BASE_RARITY_RATE, HARD_PITY, rampFiveStarChance, SOFT_PITY_START } from '@/systems/gacha';

describe('BASE_RARITY_RATE (14-2)', () => {
  it('등급별 기본 확률 합이 100%다', () => {
    const total = Object.values(BASE_RARITY_RATE).reduce((a, b) => a + b, 0);
    expect(total).toBeCloseTo(1.0, 10);
  });

  it('문서 표기 그대로: 5성 1.5% / 4성 6% / 3성 18% / 2성 35% / 1성 39.5%', () => {
    expect(BASE_RARITY_RATE[5]).toBeCloseTo(0.015, 10);
    expect(BASE_RARITY_RATE[4]).toBeCloseTo(0.06, 10);
    expect(BASE_RARITY_RATE[3]).toBeCloseTo(0.18, 10);
    expect(BASE_RARITY_RATE[2]).toBeCloseTo(0.35, 10);
    expect(BASE_RARITY_RATE[1]).toBeCloseTo(0.395, 10);
  });
});

describe('rampFiveStarChance (소프트/하드 천장)', () => {
  it('소프트 천장 시작 전에는 기본 확률과 같다', () => {
    expect(rampFiveStarChance(0)).toBeCloseTo(BASE_RARITY_RATE[5], 10);
    expect(rampFiveStarChance(SOFT_PITY_START - 2)).toBeCloseTo(BASE_RARITY_RATE[5], 10);
  });

  it('80회차(하드천장)에서는 100% 확정이다', () => {
    expect(rampFiveStarChance(HARD_PITY - 1)).toBe(1.0);
  });

  it('소프트천장 구간 안에서는 기본확률보다 크고 100% 이하로 단조증가한다', () => {
    const a = rampFiveStarChance(SOFT_PITY_START); // 66번째 뽑기(65회 미획득 이후) — 램프 구간 진입
    const b = rampFiveStarChance(SOFT_PITY_START + 5);
    expect(a).toBeGreaterThan(BASE_RARITY_RATE[5]);
    expect(b).toBeGreaterThan(a);
    expect(b).toBeLessThanOrEqual(1.0);
  });
});

describe('GachaBanner.pull (하드 천장 확정)', () => {
  it('79연속 비5성 후 80번째 뽑기는 반드시 5성이 확정된다', () => {
    const banner = new GachaBanner(() => 0.999); // 항상 최대치 굴림 → 자연 확률로는 5성이 절대 안 나옴
    let lastResult;
    for (let i = 0; i < HARD_PITY; i += 1) {
      lastResult = banner.pull();
    }
    expect(lastResult?.rarity).toBe(5);
    expect(lastResult?.guaranteed).toBe(true);
  });

  it('픽업 보장 카운터: 논픽업 5성이 나오면 다음 5성은 100% 픽업된다', () => {
    // rng 시퀀스를 조작: 항상 5성이 뜨도록 낮은 값을 주고, 픽업 여부 굴림(50%)은 여러 번 호출되므로
    // 값 목록을 순환시켜 "논픽업 → 다음 5성 픽업 확정"만 검증한다.
    const rolls = [0.0, 0.9, 0.0]; // 1) 5성 당첨, 2) 픽업굴림 0.9→논픽업, 3) 다음 5성 당첨(픽업굴림 스킵되어야 함)
    let i = 0;
    const rng = () => rolls[Math.min(i++, rolls.length - 1)];
    const banner = new GachaBanner(rng);

    const first = banner.pull();
    expect(first.rarity).toBe(5);
    expect(first.isPickup).toBe(false);

    const second = banner.pull();
    expect(second.rarity).toBe(5);
    expect(second.isPickup).toBe(true);
  });
});

describe('GachaBanner.pullTen (10연 4성 이상 보장)', () => {
  it('10연 결과에 4성 이상이 하나도 없으면 마지막 결과가 4성으로 강제 승격된다', () => {
    const banner = new GachaBanner(() => 0.999); // 항상 최저 등급 쪽으로만 굴러가도록
    const results = banner.pullTen();
    expect(results).toHaveLength(10);
    expect(results.some((r) => r.rarity >= 4)).toBe(true);
  });
});
