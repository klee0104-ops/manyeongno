/**
 * ⚠️ PLACEHOLDER: 재화 획득/소모 수치.
 * 기획 브리핑 12장(스태미나)·19장(수익화)에는 스테이지 보상 골드·최초클리어 다이아·소환 비용의
 * 구체 수치가 발췌본에 없다. 핵심 루프(전투 → 골드 → 레벨업 → 다음 스테이지, 다이아 → 소환)가
 * 돌아가도록 임시로 정한 값이며, 실제 밸런싱 수치가 확정되면 이 파일만 교체하면 된다.
 *
 * 보상 스케일링은 11-5 몬스터 스탯 곡선(BaseCurve·유형계수·난이도·챕터스텝)을 그대로 빌려
 * "강한 적일수록 보상이 큼"만 보장한다.
 */
import type { StageDefinition, Difficulty } from '@/types/stage';
import { DIFFICULTY_MULT } from '@/types/stage';
import { baseCurve, chapterStepMultiplier, stageTypeCoefficient } from './enemyStat';

export interface StageRewards {
  gold: number;
  diamond: number;
  /** 최초 클리어 보상이 포함됐는지 */
  firstClear: boolean;
}

const BASE_GOLD_PER_STAGE = 120;

/** 최초 클리어 다이아 (유형별) */
const FIRST_CLEAR_DIAMOND: Record<StageDefinition['stageType'], number> = {
  일반전: 20,
  정예전: 40,
  미니보스전: 60,
  챕터보스전: 100,
};

export function stageRewards(stage: StageDefinition, difficulty: Difficulty, alreadyCleared: boolean): StageRewards {
  const gold = Math.round(
    BASE_GOLD_PER_STAGE *
      baseCurve(stage.stageNum) *
      stageTypeCoefficient(stage.stageType) *
      chapterStepMultiplier(stage.chapterStepInRegion) *
      DIFFICULTY_MULT[difficulty],
  );
  const firstClear = !alreadyCleared;
  return {
    gold,
    diamond: firstClear ? FIRST_CLEAR_DIAMOND[stage.stageType] : 0,
    firstClear,
  };
}

/** 소환 비용(다이아) */
export const GACHA_COST = {
  single: 150,
  ten: 1500,
} as const;

/** 레벨업 골드 비용: 현재 레벨 × 50 */
export function levelUpCost(currentLevel: number): number {
  return currentLevel * 50;
}
