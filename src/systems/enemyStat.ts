/**
 * 몬스터 스탯 스케일링 공식.
 * 근거 문서: 기획 브리핑 11-5 (스탯 스케일링 수식), 검증값은 11-6 참고.
 *
 *   EnemyStat = BaseStat(100) × RegionMult × ChapterStepMult × StageTypeMult × DifficultyMult
 */
import { REGION_MULT, DIFFICULTY_MULT, type Difficulty, type StageType } from '@/types/stage';

export const BASE_STAT = 100;

/** 11-5 ②: 1.4 ^ (지역 내 챕터 순번 - 1) */
export function chapterStepMultiplier(chapterStepInRegion: number): number {
  return Math.pow(1.4, chapterStepInRegion - 1);
}

/** 11-5 ③: BaseCurve(stageNum) = 1 + 0.05 × (stageNum - 1) */
export function baseCurve(stageNum: number): number {
  return 1 + 0.05 * (stageNum - 1);
}

/** 11-5 ③: 스테이지 유형별 계수. 챕터보스전은 페이즈에 따라 3.5 / 4.55 */
export function stageTypeCoefficient(stageType: StageType, bossPhase: 1 | 2 = 1): number {
  switch (stageType) {
    case '일반전':
      return 1.0;
    case '정예전':
      return 1.6;
    case '미니보스전':
      return 2.2;
    case '챕터보스전':
      return bossPhase === 1 ? 3.5 : 4.55;
  }
}

export function stageTypeMultiplier(
  stageNum: number,
  stageType: StageType,
  bossPhase: 1 | 2 = 1,
): number {
  return baseCurve(stageNum) * stageTypeCoefficient(stageType, bossPhase);
}

export interface EnemyStatInput {
  region: string;
  stageNum: number;
  stageType: StageType;
  chapterStepInRegion: number;
  difficulty: Difficulty;
  bossPhase?: 1 | 2;
}

export function calculateEnemyStat(input: EnemyStatInput): number {
  const regionMult = REGION_MULT[input.region];
  if (regionMult === undefined) {
    throw new Error(`알 수 없는 지역: ${input.region}`);
  }
  const chapterMult = chapterStepMultiplier(input.chapterStepInRegion);
  const typeMult = stageTypeMultiplier(input.stageNum, input.stageType, input.bossPhase ?? 1);
  const difficultyMult = DIFFICULTY_MULT[input.difficulty];

  return BASE_STAT * regionMult * chapterMult * typeMult * difficultyMult;
}

/**
 * 11장에서 산출된 EnemyStat을 ATK/DEF/HP로 세부 배분한다.
 * 문서에 정확한 배분 비율은 명시되어 있지 않으므로, 몬스터가 "탱킹하며 딜을 넣는" 표준적인
 * 배분(HP 비중이 가장 큼)을 기본값으로 둔다 — 실제 밸런싱 단계에서 조정 대상(19-5 참고).
 */
export interface EnemyStatBreakdown {
  atk: number;
  def: number;
  hp: number;
}

export function splitEnemyStat(enemyStat: number): EnemyStatBreakdown {
  return {
    atk: enemyStat * 0.3,
    def: enemyStat * 0.2,
    hp: enemyStat * 5,
  };
}
