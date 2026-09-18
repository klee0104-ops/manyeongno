/**
 * 스테이지 진행도(잠금/해제) 규칙.
 * 근거 문서: 기획 브리핑 4장(20챕터 순차 진행), 11-4(챕터당 20스테이지).
 * 규칙: 1-1은 항상 열림. n번 스테이지는 n-1번 클리어 시 열림. 다음 챕터 1번은 이전 챕터 20번 클리어 시 열림.
 *
 * 이 모듈은 순수 로직이다 — Phaser/DOM에 의존하지 않는다.
 */
import { CHAPTER_META } from '@/data/chapters';

export const STAGES_PER_CHAPTER = 20;
export const MAX_CHAPTER = CHAPTER_META.length;

export function stageId(chapter: number, stageNum: number): string {
  return `${chapter}-${stageNum}`;
}

export function isStageCleared(cleared: readonly string[], chapter: number, stageNum: number): boolean {
  return cleared.includes(stageId(chapter, stageNum));
}

export function isStageUnlocked(cleared: readonly string[], chapter: number, stageNum: number): boolean {
  if (chapter < 1 || chapter > MAX_CHAPTER || stageNum < 1 || stageNum > STAGES_PER_CHAPTER) return false;
  if (chapter === 1 && stageNum === 1) return true;
  if (stageNum === 1) return isStageCleared(cleared, chapter - 1, STAGES_PER_CHAPTER);
  return isStageCleared(cleared, chapter, stageNum - 1);
}

export function isChapterUnlocked(cleared: readonly string[], chapter: number): boolean {
  return isStageUnlocked(cleared, chapter, 1);
}

/** 다음 스테이지 좌표. 20-20 이후는 null */
export function nextStage(chapter: number, stageNum: number): { chapter: number; stageNum: number } | null {
  if (stageNum < STAGES_PER_CHAPTER) return { chapter, stageNum: stageNum + 1 };
  if (chapter < MAX_CHAPTER) return { chapter: chapter + 1, stageNum: 1 };
  return null;
}

/** 클리어 기록에 스테이지를 추가한 새 배열(중복 없음) */
export function markCleared(cleared: readonly string[], chapter: number, stageNum: number): string[] {
  const id = stageId(chapter, stageNum);
  return cleared.includes(id) ? [...cleared] : [...cleared, id];
}

/** 플레이어가 도달한 가장 앞선(잠금 해제된 최신) 스테이지 */
export function frontierStage(cleared: readonly string[]): { chapter: number; stageNum: number } {
  let cursor = { chapter: 1, stageNum: 1 };
  while (isStageCleared(cleared, cursor.chapter, cursor.stageNum)) {
    const next = nextStage(cursor.chapter, cursor.stageNum);
    if (!next) break;
    cursor = next;
  }
  return cursor;
}
