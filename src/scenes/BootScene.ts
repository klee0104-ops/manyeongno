import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  create(): void {
    // 실제 아트 리소스는 별도 파이프라인(GPT 등)에서 생성 후 public/assets에 배치 예정.
    // 지금은 플레이스홀더 도형/텍스트만으로 핵심 루프를 검증한다.
    this.scene.start('MainMenu');
  }
}
