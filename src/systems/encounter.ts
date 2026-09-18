/**
 * 스테이지 → 적 편성(인카운터) 생성.
 * 근거 문서: 기획 브리핑 11-4(스테이지 유형), 11-5(몬스터 스탯 스케일링).
 *
 * ⚠️ PLACEHOLDER 항목:
 *  - 적 이름/속성 목록: 지역별 몬스터 도감(17장 잡귀 로스터)이 발췌본에 없어 임시 이름을 쓴다.
 *  - 유형별 마릿수와 잡몹 배율: 11-4 웨이브 템플릿의 마릿수가 발췌본에 없다.
 *    일반 2~3 / 정예 3 / 미니보스 1+2 / 챕터보스 1 로 가정했다.
 *  - 챕터보스 페이즈2(50% HP, ×4.55)는 전투 시뮬레이터가 페이즈 전환을 아직 지원하지 않아 P1 스탯만 쓴다.
 *
 * 이 모듈은 순수 로직이다 — Phaser/DOM에 의존하지 않는다.
 */
import type { StageDefinition, Difficulty } from '@/types/stage';
import type { Element } from '@/types/unit';
import { calculateEnemyStat, splitEnemyStat } from './enemyStat';
import type { Combatant } from './battle';
import { rowForSlotIndex } from './targeting';

interface EnemyTemplate {
  name: string;
  element: Element;
}

/** 지역별 잡몹 풀 (⚠️ PLACEHOLDER 이름) */
const REGION_MINIONS: Record<string, EnemyTemplate[]> = {
  적요림: [
    { name: '들개 잡귀', element: '토' },
    { name: '썩은 나무정령', element: '목' },
    { name: '도깨비불', element: '화' },
    { name: '산적 원혼', element: '금' },
    { name: '늪지 물귀신', element: '수' },
  ],
};
const FALLBACK_MINIONS: EnemyTemplate[] = [
  { name: '떠도는 잡귀', element: '토' },
  { name: '길잃은 원혼', element: '금' },
  { name: '음습한 안개귀', element: '수' },
];

/** 지역별 보스 (⚠️ PLACEHOLDER 이름) */
const REGION_BOSSES: Record<string, { mini: EnemyTemplate; chapter: EnemyTemplate[] }> = {
  적요림: {
    mini: { name: '외눈 산돼지 요괴', element: '토' },
    chapter: [
      { name: '붉은 잎 요호(妖狐)', element: '화' },
      { name: '고목 거인', element: '목' },
      { name: '적요림의 그림자 산군', element: '금' },
    ],
  },
};
const FALLBACK_BOSS = { mini: { name: '지역 수문장', element: '토' as Element }, chapter: [{ name: '지역 지배자', element: '금' as Element }] };

/** 잡몹(보스 옆 부하)의 스탯 배율 */
const ADD_STAT_MULTIPLIER = 0.45;

/** 스테이지 id로부터 결정적인 의사난수 시드 — 같은 스테이지는 항상 같은 편성 */
function seedFrom(stage: StageDefinition): number {
  return stage.chapter * 100 + stage.stageNum;
}

function pick<T>(list: T[], seed: number, offset: number): T {
  return list[(seed + offset * 7) % list.length];
}

function makeEnemy(
  id: string,
  template: EnemyTemplate,
  enemyStat: number,
  statMultiplier: number,
  slotIndex: number,
): Combatant {
  const { atk, def, hp } = splitEnemyStat(enemyStat * statMultiplier);
  const roundedHp = Math.round(hp);
  return {
    id,
    name: template.name,
    element: template.element,
    atk: Math.round(atk),
    def: Math.round(def),
    hp: roundedHp,
    maxHp: roundedHp,
    basicAttackCoefficientPct: 100,
    row: rowForSlotIndex(slotIndex),
  };
}

export function buildEncounter(stage: StageDefinition, difficulty: Difficulty): Combatant[] {
  const enemyStat = calculateEnemyStat({
    region: stage.region,
    stageNum: stage.stageNum,
    stageType: stage.stageType,
    chapterStepInRegion: stage.chapterStepInRegion,
    difficulty,
    bossPhase: 1,
  });
  const seed = seedFrom(stage);
  const minions = REGION_MINIONS[stage.region] ?? FALLBACK_MINIONS;
  const bosses = REGION_BOSSES[stage.region] ?? FALLBACK_BOSS;
  const prefix = `enemy-${stage.id}`;

  switch (stage.stageType) {
    case '일반전': {
      const count = 2 + (stage.stageNum % 2); // 2 또는 3
      return Array.from({ length: count }, (_, i) =>
        makeEnemy(`${prefix}-${i}`, pick(minions, seed, i), enemyStat, 1.0, i),
      );
    }
    case '정예전':
      return Array.from({ length: 3 }, (_, i) =>
        makeEnemy(`${prefix}-${i}`, pick(minions, seed, i), enemyStat, 1.0, i),
      );
    case '미니보스전': {
      const boss = makeEnemy(`${prefix}-boss`, bosses.mini, enemyStat, 1.0, 0);
      const adds = Array.from({ length: 2 }, (_, i) =>
        makeEnemy(`${prefix}-${i}`, pick(minions, seed, i), enemyStat, ADD_STAT_MULTIPLIER, i + 1),
      );
      return [boss, ...adds];
    }
    case '챕터보스전': {
      const template = bosses.chapter[(stage.chapterStepInRegion - 1) % bosses.chapter.length];
      return [makeEnemy(`${prefix}-boss`, template, enemyStat, 1.0, 0)];
    }
  }
}

export function isBossId(id: string): boolean {
  return id.endsWith('-boss');
}
