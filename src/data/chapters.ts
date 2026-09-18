/**
 * 챕터 ↔ 지역 매핑 및 스테이지 생성기.
 * 근거 문서: 기획 브리핑 4장(지역/챕터 구성), 11-2(챕터 내 맵 배치 규칙), 11-4(웨이브 구성 템플릿).
 */
import type { StageDefinition, StageType } from '@/types/stage';

export interface ChapterMeta {
  chapter: number;
  region: string;
  /** 해당 지역 내에서 몇 번째 챕터인지 (1부터) — 11-5 ChapterStepMult 계산용 */
  chapterStepInRegion: number;
}

/** 4장 지역/챕터 구성표를 그대로 전개 */
export const CHAPTER_META: ChapterMeta[] = [
  { chapter: 1, region: '적요림', chapterStepInRegion: 1 },
  { chapter: 2, region: '적요림', chapterStepInRegion: 2 },
  { chapter: 3, region: '적요림', chapterStepInRegion: 3 },
  { chapter: 4, region: '운봉협', chapterStepInRegion: 1 },
  { chapter: 5, region: '운봉협', chapterStepInRegion: 2 },
  { chapter: 6, region: '운봉협', chapterStepInRegion: 3 },
  { chapter: 7, region: '운봉협', chapterStepInRegion: 4 },
  { chapter: 8, region: '백귀정', chapterStepInRegion: 1 },
  { chapter: 9, region: '백귀정', chapterStepInRegion: 2 },
  { chapter: 10, region: '백귀정', chapterStepInRegion: 3 },
  { chapter: 11, region: '나가라 사원', chapterStepInRegion: 1 },
  { chapter: 12, region: '나가라 사원', chapterStepInRegion: 2 },
  { chapter: 13, region: '나가라 사원', chapterStepInRegion: 3 },
  { chapter: 14, region: '초원의 하늘', chapterStepInRegion: 1 },
  { chapter: 15, region: '초원의 하늘', chapterStepInRegion: 2 },
  { chapter: 16, region: '초원의 하늘', chapterStepInRegion: 3 },
  { chapter: 17, region: '경계의 끝', chapterStepInRegion: 1 },
  { chapter: 18, region: '경계의 끝', chapterStepInRegion: 2 },
  { chapter: 19, region: '경계의 끝', chapterStepInRegion: 3 },
  { chapter: 20, region: '경계의 끝', chapterStepInRegion: 4 },
];

/** 11-4: 스테이지 번호(1~20) → 스테이지 유형 */
export function stageTypeForStageNum(stageNum: number): StageType {
  if (stageNum === 20) return '챕터보스전';
  if (stageNum === 10) return '미니보스전';
  if (stageNum === 5 || stageNum === 15) return '정예전';
  return '일반전';
}

/** 특정 챕터의 스테이지 1~20 전체를 생성한다. */
export function generateStages(chapter: number): StageDefinition[] {
  const meta = CHAPTER_META.find((m) => m.chapter === chapter);
  if (!meta) throw new Error(`알 수 없는 챕터: ${chapter}`);

  return Array.from({ length: 20 }, (_, i) => {
    const stageNum = i + 1;
    return {
      id: `${chapter}-${stageNum}`,
      chapter,
      stageNum,
      region: meta.region,
      stageType: stageTypeForStageNum(stageNum),
      chapterStepInRegion: meta.chapterStepInRegion,
    } satisfies StageDefinition;
  });
}
