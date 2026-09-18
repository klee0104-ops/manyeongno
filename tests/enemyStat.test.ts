/**
 * 11-6 "검증용 예시 계산" 표를 그대로 재현하는 회귀 테스트.
 * 기획 브리핑 원문의 4개 예시 전부를 커버해, 11-5 공식 구현이 문서와 어긋나면 즉시 실패하도록 한다.
 */
import { describe, it, expect } from 'vitest';
import { calculateEnemyStat } from '@/systems/enemyStat';

describe('calculateEnemyStat (11-5 / 11-6)', () => {
  it('1-1, 쉬움, 일반전 → 100', () => {
    const stat = calculateEnemyStat({
      region: '적요림',
      stageNum: 1,
      stageType: '일반전',
      chapterStepInRegion: 1,
      difficulty: '쉬움',
    });
    expect(stat).toBeCloseTo(100, 5);
  });

  it('3-20, 어려움, 챕터보스 P1 → 약 4,281', () => {
    const stat = calculateEnemyStat({
      region: '적요림',
      stageNum: 20,
      stageType: '챕터보스전',
      chapterStepInRegion: 3,
      difficulty: '어려움',
      bossPhase: 1,
    });
    expect(stat).toBeCloseTo(4280.64, 1);
  });

  it('10-10, 보통, 미니보스전 → 약 16,881', () => {
    const stat = calculateEnemyStat({
      region: '백귀정',
      stageNum: 10,
      stageType: '미니보스전',
      chapterStepInRegion: 3,
      difficulty: '보통',
    });
    expect(stat).toBeCloseTo(16881.48, 1);
  });

  it('20-20, 지옥, 챕터보스 P2 → 약 2,678,000', () => {
    const stat = calculateEnemyStat({
      region: '경계의 끝',
      stageNum: 20,
      stageType: '챕터보스전',
      chapterStepInRegion: 4,
      difficulty: '지옥',
      bossPhase: 2,
    });
    // 문서 표기는 "약 2,678,000"(반올림); 공식으로 정확히 계산하면 2,678,075.4 — 그 값과 정밀 비교한다.
    expect(stat).toBeCloseTo(2678075.4, 1);
    // 문서의 반올림 표기와도 1% 이내로 일치하는지 별도 확인.
    expect(Math.abs(stat - 2_678_000)).toBeLessThan(2_678_000 * 0.01);
  });

  it('알 수 없는 지역이면 에러를 던진다', () => {
    expect(() =>
      calculateEnemyStat({
        region: '존재하지않는지역',
        stageNum: 1,
        stageType: '일반전',
        chapterStepInRegion: 1,
        difficulty: '쉬움',
      }),
    ).toThrow();
  });
});
