/**
 * 스테이지/난이도 관련 타입 정의.
 * 근거 문서: 기획 브리핑 11장(맵 풀 & 웨이브 스케일링), 6장(난이도 시스템).
 */

export type Difficulty = '쉬움' | '보통' | '어려움' | '지옥';

/** 11-4: 스테이지 유형 */
export type StageType = '일반전' | '정예전' | '미니보스전' | '챕터보스전';

export interface StageDefinition {
  /** 예: "1-1", "3-20" */
  id: string;
  chapter: number;
  stageNum: number; // 1~20
  region: string;
  stageType: StageType;
  /** 해당 지역 내에서 이 챕터가 몇 번째인지 (1부터) — 11-5 ChapterStepMult 계산용 */
  chapterStepInRegion: number;
}

/** 11-5 ①: 지역별 기준 배율 */
export const REGION_MULT: Record<string, number> = {
  적요림: 1,
  운봉협: 5,
  백귀정: 15,
  '나가라 사원': 40,
  '초원의 하늘': 90,
  '경계의 끝': 200,
};

/** 11-5 ④: 난이도 배율 */
export const DIFFICULTY_MULT: Record<Difficulty, number> = {
  쉬움: 1.0,
  보통: 1.8,
  어려움: 3.2,
  지옥: 5.5,
};

/** 12-2: 스테이지 소모 스태미나 (반복파밍 기준, 난이도별) */
export const STAMINA_COST: Record<Difficulty, number> = {
  쉬움: 6,
  보통: 8,
  어려움: 12,
  지옥: 20,
};

/** 12-1: 스토리 최초클리어는 난이도 무관 항상 "쉬움 소모량" 고정 */
export const FIRST_CLEAR_STAMINA_COST = STAMINA_COST['쉬움'];
