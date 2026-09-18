/**
 * 15-4: 등급별 스킬 계수 기준표 (%).
 * 실제 유닛별 스킬 이름·연출은 아직 미착수(19-5 참고) — 등급 기본값만 우선 반영.
 */
import type { Rarity } from '@/types/unit';
import type { SkillCoefficients } from '@/types/unit';

export const DEFAULT_SKILL_COEFFICIENTS: Record<Rarity, SkillCoefficients> = {
  1: { basicAttack: 100, skill1: 160, skill2: null, ultimate: 280 },
  2: { basicAttack: 100, skill1: 175, skill2: null, ultimate: 320 },
  3: { basicAttack: 100, skill1: 190, skill2: 230, ultimate: 380 },
  4: { basicAttack: 100, skill1: 205, skill2: 260, ultimate: 430 },
  5: { basicAttack: 100, skill1: 220, skill2: 290, ultimate: 500 },
};

/** 14-4: 등급별 기본 레벨 캡 */
export const BASE_LEVEL_CAP: Record<Rarity, number> = {
  1: 40,
  2: 50,
  3: 60,
  4: 70,
  5: 80,
};

/** 14-4: 각성 1회당 레벨 캡 +10, 최대 5각성 */
export const AWAKENING_LEVEL_CAP_BONUS = 10;
export const MAX_AWAKENING = 5;

/** 14-7: 전용돌파 최대 3회, 1돌파당 스탯 보정 */
export const BREAKTHROUGH_STAT_BONUS_PCT = [0, 0.08, 0.08, 0.08]; // index = 돌파 단계(0~3), 1돌파부터 +8%
export const MAX_BREAKTHROUGH = 3;
