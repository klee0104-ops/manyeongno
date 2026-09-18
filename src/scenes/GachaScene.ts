import Phaser from 'phaser';
import { GachaBanner, type PullResult } from '@/systems/gacha';
import { RARITY_LABEL } from '@/types/unit';

/**
 * 최소 가챠 화면: 배너 상태는 씬 로컬(재접속 시 초기화)로 두었다.
 * TODO(Fable 에이전트): PlayerState.gachaBannerState와 연동해 영속화, 다이아 소모/재화 체크,
 * 10연 결과 카드 연출, 도감(14-3) 등록 연결.
 */
export class GachaScene extends Phaser.Scene {
  private banner = new GachaBanner();
  private resultText?: Phaser.GameObjects.Text;

  constructor() {
    super('Gacha');
  }

  create(): void {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, height * 0.12, '부적 소환', { fontSize: '28px', color: '#EDEAE0' })
      .setOrigin(0.5);

    this.resultText = this.add
      .text(width / 2, height * 0.35, '소환 버튼을 눌러보세요.', {
        fontSize: '16px',
        color: '#B8B8B8',
        align: 'center',
        wordWrap: { width: width * 0.8 },
      })
      .setOrigin(0.5, 0);

    this.makeButton(width / 2, height * 0.6, '1회 소환', () => {
      this.showResults([this.banner.pull()]);
    });

    this.makeButton(width / 2, height * 0.7, '10연 소환', () => {
      this.showResults(this.banner.pullTen());
    });

    const backText = this.makeButton(width / 2, height * 0.85, '메인 메뉴로', () => {
      this.scene.start('MainMenu');
    });
    backText.setStyle({ backgroundColor: '#4A4A4A' });
  }

  private showResults(results: PullResult[]): void {
    const lines = results.map((r, i) => {
      const label = RARITY_LABEL[r.rarity];
      const pickupTag = r.rarity === 5 ? (r.isPickup ? ' [픽업]' : ' [논픽업]') : '';
      const guaranteedTag = r.guaranteed ? ' (천장/보장)' : '';
      return `${i + 1}. ${r.rarity}성 ${label}${pickupTag}${guaranteedTag}`;
    });
    this.resultText?.setText(lines.join('\n'));
  }

  private makeButton(x: number, y: number, label: string, onClick: () => void): Phaser.GameObjects.Text {
    const text = this.add
      .text(x, y, label, {
        fontSize: '20px',
        color: '#EDEAE0',
        backgroundColor: '#2F5D50',
        padding: { x: 18, y: 10 },
      })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    text.on('pointerover', () => text.setStyle({ backgroundColor: '#3E7A67' }));
    text.on('pointerout', () => text.setStyle({ backgroundColor: '#2F5D50' }));
    text.on('pointerdown', onClick);

    return text;
  }
}
