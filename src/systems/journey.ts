import type { GameSave } from './adventure';
import { campaign, rating, unlockedChapter } from './campaign';
export const STORY_PARTS=['prologue','intro','mid5','mid10','mid15','outro'] as const;
export type StoryPart=typeof STORY_PARTS[number];
export const storyKey=(chapter:number,part:StoryPart)=>part==='prologue'?'prologue':`${part}-${chapter}`;
export const storyLabel=(part:StoryPart)=>({prologue:'프롤로그',intro:'서막',mid5:'첫 단서',mid10:'깊어지는 인연',mid15:'결전의 문턱',outro:'종막'}[part]);
export function canWatchStory(s:GameSave,ch:number,part:StoryPart){
 if(!Number.isInteger(ch)||ch<1||ch>20)return false;
 if(part==='prologue')return ch===1;
 if(ch>unlockedChapter(s))return false;
 return part==='intro'||rating(s,ch,part==='outro'?20:Number(part.slice(3)),'쉬움')>0;
}
export function pendingStageStory(s:GameSave,ch:number,stage:number):StoryPart|null{
 const part=({5:'mid5',10:'mid10',15:'mid15',20:'outro'} as Record<number,StoryPart>)[stage];
 return part&&canWatchStory(s,ch,part)&&!campaign(s).seenScenes.includes(storyKey(ch,part))?part:null;
}
export const guideTasks=(s:GameSave)=>[
 {id:'growth',title:'첫 번째 성장',text:'함께할 요괴의 레벨을 한 번 올려 보세요.',done:s.owned.some(u=>u.level>1),action:'guide-growth',button:'요괴 성장하기'},
 {id:'battle',title:'첫 탐험',text:'1-1 숲의 오솔길을 정화하고 전투 보상을 받으세요.',done:rating(s,1,1,'쉬움')>0,action:'guide-battle',button:'첫 탐험 시작'},
 {id:'reward',title:'여정의 보답',text:'여정 임무에서 달성한 보상을 받아 보세요.',done:s.claimed.length>0,action:'quests',button:'임무 보상 확인'},
];
export const guideComplete=(s:GameSave)=>guideTasks(s).every(t=>t.done);
