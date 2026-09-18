/**
 * 요괴/신격 유닛 관련 타입 정의.
 * 근거 문서: 기획 브리핑 14장(등급·가챠·성장), 15장(전투/스킬), 17-2(로스터).
 */

export type Rarity = 1 | 2 | 3 | 4 | 5;

export type Element = '목' | '화' | '토' | '금' | '수';

/** 14-1: 등급 명칭 표기 */
export const RARITY_LABEL: Record<Rarity, string> = {
  1: '잡귀(雜鬼)',
  2: '영물(靈物)',
  3: '신수(神獸)',
  4: '신장(神將)',
  5: '신격(神格)',
};

/** 로스터 원본 정의 — 17-2/17-3 데이터를 그대로 옮겨 담는 정적 스펙 */
export interface UnitDefinition {
  id: string;
  name: string;
  rarity: Rarity;
  element: Element;
  region: string;
  /** 17-3의 등장 배경 플레이버 텍스트 (도감용) */
  flavorText?: string;
  /** 지역 스토리에 실물로 카메오 등장하는 챕터 번호 (19-13 참고, 없으면 목격담 전용) */
  cameoChapter?: number;
}

/** 요괴 개체별 성장 상태 — 14-4(레벨/각성), 14-7(전용돌파) */
export interface UnitInstance {
  defId: string;
  level: number;
  awakening: 0 | 1 | 2 | 3 | 4 | 5;
  breakthrough: 0 | 1 | 2 | 3;
  /** 14-3 도감 인장 단계 */
  dexSeal: 0 | 1 | 2 | 3 | 4 | 5;
}

/** 전투에 실제로 투입되는, 스탯이 계산 완료된 유닛 */
export interface BattleStats {
  atk: number;
  def: number;
  hp: number;
  maxHp: number;
  element: Element;
  rarity: Rarity;
  skillCoefficients: SkillCoefficients;
}

/** 15-4: 등급별 스킬 계수 기준표 (기본값 — 각성/전용돌파로 보정됨) */
export interface SkillCoefficients {
  basicAttack: number;
  skill1: number;
  skill2: number | null;
  ultimate: number;
}
