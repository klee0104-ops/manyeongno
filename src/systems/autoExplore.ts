import type { GameSave } from './adventure';
import type { Difficulty } from '../types/stage';
import { campaignGate, stageCost } from './campaign';
import { pendingStageStory } from './journey';
/** A continuation never skips an unseen story or spends stamina speculatively. */
export function autoExploreStop(s:GameSave,ch:number,stage:number,difficulty:Difficulty,won:boolean):string|null {
 if(!won)return '전투에서 패배해 연속 탐험을 멈췄습니다.';
 if(difficulty==='쉬움'&&pendingStageStory(s,ch,stage))return '새 이야기가 열렸습니다. 이야기를 감상한 뒤 다시 출발하세요.';
 if(stage>=20)return '이번 장의 탐험을 마쳤습니다. 다음 경계를 선택하세요.';
 const gate=campaignGate(s,ch,stage+1,difficulty);if(gate)return gate;
 if(s.stamina<stageCost(s,ch,stage+1,difficulty))return '행동력이 부족해 연속 탐험을 멈췄습니다.';
 return null;
}
