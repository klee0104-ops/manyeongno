/**
 * ⚠️ PLACEHOLDER: 유닛 기본 스탯 산출 공식.
 * 기획 브리핑에는 등급별 "레벨 캡"(14-4)과 스킬 계수(15-4)는 명시되어 있지만, 레벨당 ATK/DEF/HP
 * 증가치처럼 실제 밸런싱 수치는 아직 확정되지 않았다(19-5 "신규 유저 온보딩 곡선" 등과 함께
 * 후속 밸런싱 단계 대상). 이 파일은 핵심 루프가 "일단 돌아가게" 하기 위한 placeholder이며,
 * 실제 수치가 정해지면 이 파일만 교체하면 되도록 다른 시스템과 분리해뒀다.
 */
import type { Rarity, BattleStats, Element } from '@/types/unit';
import { DEFAULT_SKILL_COEFFICIENTS } from './skillCoefficients';

const RARITY_BASE = {
  atk: { 1: 40, 2: 55, 3: 75, 4: 100, 5: 130 } as Record<Rarity, number>,
  def: { 1: 25, 2: 35, 3: 48, 4: 65, 5: 85 } as Record<Rarity, number>,
  hp: { 1: 250, 2: 350, 3: 480, 4: 650, 5: 850 } as Record<Rarity, number>,
};

export function computeBattleStats(
  rarity: Rarity,
  element: Element,
  level: number,
): BattleStats {
  const levelFactor = 1 + (level - 1) * 0.08; // placeholder: 레벨당 +8%

  const atk = Math.round(RARITY_BASE.atk[rarity] * levelFactor);
  const def = Math.round(RARITY_BASE.def[rarity] * levelFactor);
  const maxHp = Math.round(RARITY_BASE.hp[rarity] * levelFactor);

  return {
    atk,
    def,
    hp: maxHp,
    maxHp,
    element,
    rarity,
    skillCoefficients: DEFAULT_SKILL_COEFFICIENTS[rarity],
  };
}
