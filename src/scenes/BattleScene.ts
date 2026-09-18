import Phaser from 'phaser';
import unitsData from '@/data/units.sample.json';
import type { UnitDefinition } from '@/types/unit';
import type { Difficulty } from '@/types/stage';
import { computeBattleStats } from '@/config/unitBaseStats';
import { generateStages } from '@/data/chapters';
import { calculateEnemyStat, splitEnemyStat } from '@/systems/enemyStat';
import { simulateBattle, type Combatant } from '@/systems/battle';
import { rowForSlotIndex } from '@/systems/targeting';
import type { SkillSlot } from '@/systems/skills';
import { LocalStorageSaveManager } from '@/save/saveManager';

export interface BattleSceneData {
  chapter: number;
  stageNum: number;
  difficulty: Difficulty;
}

const units = unitsData as UnitDefinition[];

/**
 * 스테이지 지역과 겹치는 보유(샘플) 유닛 중 최대 4체로 파티를 구성한다.
 * 실제 "유닛 보유/편성" UI는 핵심 루프 범위 밖 — TODO(Fable 에이전트): 14-6 편성 화면 참고해 구현.
 */
function buildSampleParty(region: string): Combatant[] {
  const candidates = units.filter((u) => u.region === region);
  const pool = candidates.length > 0 ? candidates : units;
  return pool.slice(0, 4).map((def, index) => {
    const stats = computeBattleStats(def.rarity, def.element, 1);
    return {
      id: def.id,
      name: def.name,
      element: def.element,
      atk: stats.atk,
      def: stats.def,
      hp: stats.maxHp,
      maxHp: stats.maxHp,
      basicAttackCoefficientPct: stats.skillCoefficients.basicAttack,
      // 16-1: 편성 순서 0~1 전열, 2~ 후열
      row: rowForSlotIndex(index),
      // 15-4: 등급별 스킬 계수 → 15-1 우선순위 AI가 스킬/궁극기를 사용한다
      skillCoefficients: stats.skillCoefficients,
      awakening: 0,
      breakthrough: 0,
    } satisfies Combatant;
  });
}

/** 15-1 슬롯을 로그용 한글 라벨로 */
const SLOT_LABEL: Record<SkillSlot, string> = {
  basicAttack: '기본',
  skill1: '스킬1',
  skill2: '스킬2',
  ultimate: '궁극기',
};

function buildEnemy(data: BattleSceneData): Combatant {
  const stage = generateStages(data.chapter).find((s) => s.stageNum === data.stageNum);
  if (!stage) throw new Error(`알 수 없는 스테이지: ${data.chapter}-${data.stageNum}`);

  const enemyStat = calculateEnemyStat({
    region: stage.region,
    stageNum: stage.stageNum,
    stageType: stage.stageType,
    chapterStepInRegion: stage.chapterStepInRegion,
    difficulty: data.difficulty,
  });
  const { atk, def, hp } = splitEnemyStat(enemyStat);

  return {
    id: `enemy-${stage.id}`,
    name: `${stage.region} ${stage.id} 적`,
    element: '토',
    atk: Math.round(atk),
    def: Math.round(def),
    hp: Math.round(hp),
    maxHp: Math.round(hp),
    basicAttackCoefficientPct: 100,
  };
}

export class BattleScene extends Phaser.Scene {
  constructor() {
    super('Battle');
  }

  create(data: BattleSceneData): void {
    const { width, height } = this.scale;
    const stageId = `${data.chapter}-${data.stageNum}`;

    this.add
      .text(width / 2, height * 0.12, `${stageId} 전투 (${data.difficulty})`, {
        fontSize: '26px',
        color: '#EDEAE0',
      })
      .setOrigin(0.5);

    const party = buildSampleParty(generateStages(data.chapter)[0].region);
    const enemy = buildEnemy(data);

    const result = simulateBattle(party, [enemy]);
    const won = result.winner === 'party';

    if (won) {
      const saveManager = new LocalStorageSaveManager();
      const player = saveManager.load();
      if (!player.clearedStageIds.includes(stageId)) {
        player.clearedStageIds.push(stageId);
      }
      saveManager.save(player);
    }

    this.add
      .text(
        width / 2,
        height * 0.3,
        won ? '승리!' : result.winner === 'enemy' ? '패배...' : '무승부(시간 초과)',
        { fontSize: '32px', color: won ? '#7CC576' : '#D97A6C' },
      )
      .setOrigin(0.5);

    const enemyHits = result.log.filter((l) => l.defenderId === enemy.id);
    const enemyFinalHp = enemyHits.length > 0 ? enemyHits[enemyHits.length - 1].defenderHpAfter : enemy.hp;
    const ultimateCount = result.log.filter((l) => l.slot === 'ultimate').length;

    this.add
      .text(
        width / 2,
        height * 0.4,
        `${result.turns}턴 소요 · 로그 ${result.log.length}건 · 궁극기 ${ultimateCount}회 · 적 최종 HP ${Math.round(enemyFinalHp)}/${enemy.maxHp}`,
        { fontSize: '14px', color: '#B8B8B8' },
      )
      .setOrigin(0.5);

    const logLines = result.log
      .slice(0, 10)
      .map((l) => {
        if (l.blocked || l.slot === null) return `T${l.turn} ${l.attackerId}: 행동 불가(CC)`;
        const dmg = Math.round(l.damage);
        return `T${l.turn} ${l.attackerId} → ${l.defenderId} [${SLOT_LABEL[l.slot]}]: ${dmg}${l.isCrit ? ' (CRIT)' : ''} · 게이지 ${l.attackerGaugeAfter}`;
      })
      .join('\n');

    this.add
      .text(width / 2, height * 0.6, logLines || '(전투 로그 없음)', {
        fontSize: '12px',
        color: '#8C8C8C',
        align: 'center',
      })
      .setOrigin(0.5, 0);

    const backText = this.add
      .text(width / 2, height * 0.9, '메인 메뉴로', {
        fontSize: '18px',
        color: '#EDEAE0',
        backgroundColor: '#2F5D50',
        padding: { x: 16, y: 10 },
      })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });
    backText.on('pointerdown', () => this.scene.start('MainMenu'));
  }
}
