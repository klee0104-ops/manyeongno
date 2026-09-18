import Phaser from 'phaser';
import { LocalStorageSaveManager } from '@/save/saveManager';

function makeButton(
  scene: Phaser.Scene,
  x: number,
  y: number,
  label: string,
  onClick: () => void,
): void {
  const text = scene.add
    .text(x, y, label, {
      fontSize: '22px',
      color: '#EDEAE0',
      backgroundColor: '#2F5D50',
      padding: { x: 20, y: 12 },
    })
    .setOrigin(0.5)
    .setInteractive({ useHandCursor: true });

  text.on('pointerover', () => text.setStyle({ backgroundColor: '#3E7A67' }));
  text.on('pointerout', () => text.setStyle({ backgroundColor: '#2F5D50' }));
  text.on('pointerdown', onClick);
}

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  create(): void {
    const { width, height } = this.scale;
    const saveManager = new LocalStorageSaveManager();
    const player = saveManager.load();

    this.add
      .text(width / 2, height * 0.25, '만령로(萬靈路)', {
        fontSize: '36px',
        color: '#EDEAE0',
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height * 0.35, `계정 Lv.${player.accountLevel}  다이아 ${player.diamond}  스태미나 ${player.stamina}/${player.staminaMax}`, {
        fontSize: '16px',
        color: '#B8B8B8',
      })
      .setOrigin(0.5);

    makeButton(this, width / 2, height * 0.55, '1-1 스테이지 도전 (적요림)', () => {
      this.scene.start('Battle', { chapter: 1, stageNum: 1, difficulty: '쉬움' });
    });

    makeButton(this, width / 2, height * 0.68, '부적 소환 (가챠)', () => {
      this.scene.start('Gacha');
    });
  }
}
