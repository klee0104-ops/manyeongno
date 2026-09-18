/**
 * 최소 세이브/로드 — localStorage 기반. 추후 서버 동기화(19-5 "서버·라이브옵스")로 교체 가능하도록
 * SaveManager 인터페이스만 의존하게 구성했다.
 */
import { createNewPlayerState, normalizePlayerState, type PlayerState } from '@/types/player';

const SAVE_KEY = 'manyeongno:save:v1';

export interface SaveManager {
  load(): PlayerState;
  save(state: PlayerState): void;
  reset(): void;
}

export class LocalStorageSaveManager implements SaveManager {
  load(): PlayerState {
    if (typeof localStorage === 'undefined') return createNewPlayerState();
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return createNewPlayerState();
    try {
      // 구버전 세이브에 없는 필드는 기본값으로 채운다.
      return normalizePlayerState(JSON.parse(raw) as Partial<PlayerState>);
    } catch {
      console.warn('[saveManager] 저장 데이터 파싱 실패, 새 세이브로 초기화합니다.');
      return createNewPlayerState();
    }
  }

  save(state: PlayerState): void {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  }

  reset(): void {
    if (typeof localStorage === 'undefined') return;
    localStorage.removeItem(SAVE_KEY);
  }
}
