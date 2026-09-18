/**
 * 스테이지 잠금/해제 및 다음 스테이지 규칙 검증.
 */
import { describe, it, expect } from 'vitest';
import {
  frontierStage,
  isChapterUnlocked,
  isStageUnlocked,
  markCleared,
  nextStage,
} from '@/systems/progression';

describe('isStageUnlocked', () => {
  it('1-1은 항상 열려 있다', () => {
    expect(isStageUnlocked([], 1, 1)).toBe(true);
  });

  it('직전 스테이지를 클리어해야 열린다', () => {
    expect(isStageUnlocked([], 1, 2)).toBe(false);
    expect(isStageUnlocked(['1-1'], 1, 2)).toBe(true);
    expect(isStageUnlocked(['1-1'], 1, 3)).toBe(false);
  });

  it('다음 챕터 1번은 이전 챕터 20번 클리어 시 열린다', () => {
    expect(isStageUnlocked(['1-19'], 2, 1)).toBe(false);
    expect(isStageUnlocked(['1-20'], 2, 1)).toBe(true);
    expect(isChapterUnlocked(['1-20'], 2)).toBe(true);
    expect(isChapterUnlocked([], 2)).toBe(false);
  });

  it('범위 밖 좌표는 잠김', () => {
    expect(isStageUnlocked(['1-20'], 0, 1)).toBe(false);
    expect(isStageUnlocked(['1-20'], 1, 21)).toBe(false);
    expect(isStageUnlocked(['20-20'], 21, 1)).toBe(false);
  });
});

describe('nextStage / markCleared / frontierStage', () => {
  it('nextStage는 20번에서 다음 챕터 1번으로 넘어가고 20-20 이후는 null', () => {
    expect(nextStage(1, 5)).toEqual({ chapter: 1, stageNum: 6 });
    expect(nextStage(1, 20)).toEqual({ chapter: 2, stageNum: 1 });
    expect(nextStage(20, 20)).toBeNull();
  });

  it('markCleared는 중복 없이 추가하고 원본을 바꾸지 않는다', () => {
    const base = ['1-1'];
    const a = markCleared(base, 1, 2);
    const b = markCleared(a, 1, 2);
    expect(a).toEqual(['1-1', '1-2']);
    expect(b).toEqual(['1-1', '1-2']);
    expect(base).toEqual(['1-1']);
  });

  it('frontierStage는 아직 클리어하지 않은 첫 스테이지', () => {
    expect(frontierStage([])).toEqual({ chapter: 1, stageNum: 1 });
    expect(frontierStage(['1-1', '1-2'])).toEqual({ chapter: 1, stageNum: 3 });
    const all = Array.from({ length: 20 }, (_, i) => `1-${i + 1}`);
    expect(frontierStage(all)).toEqual({ chapter: 2, stageNum: 1 });
  });
});
