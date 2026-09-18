import { spiritById, ELEMENT_COLOR } from './gameContent';
import { combatStyle } from './combatStyles';
export type IdleKind='fox'|'sprout'|'swordsman'|'brawler'|'tide'|'guardian'|'beast'|'serpent'|'hover';
const special:Record<string,IdleKind>={gumiho:'fox',samsindongja:'sprout',mangeomhon:'swordsman',jeogyeom:'brawler',simyeon:'tide',jibu:'guardian',sangun:'beast',jungnimbaem:'serpent',japchojeongryeong:'sprout'};
const names:Record<IdleKind,string>={fox:'방울을 어루만지며 꼬리를 쉬게 합니다',sprout:'숨결을 따라 새싹과 치유의 빛이 피어납니다',swordsman:'검을 가다듬고 조용히 호흡합니다',brawler:'주먹을 쥐고 무게중심을 바꿉니다',tide:'잔물결처럼 몸과 소매를 움직입니다',guardian:'방패 뒤에서 묵직하게 호흡합니다',beast:'몸을 낮추고 다음 움직임을 살핍니다',serpent:'몸을 유연하게 흔들며 기회를 엿봅니다',hover:'영기의 흐름을 따라 가볍게 떠오릅니다'};
const durations:Record<IdleKind,number>={fox:4.8,sprout:3.8,swordsman:5.2,brawler:3.1,tide:4.6,guardian:5,beast:3.9,serpent:4.1,hover:4.7};
export function idleProfile(id:string){const d=spiritById(id),effect=combatStyle(id).effect,kind=special[id]??(d.role==='수호'?'guardian':d.role==='치유'?'sprout':effect==='blade'?'swordsman':effect==='tide'?'tide':effect==='venom'?'serpent':effect==='flame'||effect==='club'?'brawler':'hover');const seed=Array.from(id).reduce((n,c)=>n+c.charCodeAt(0),0);return {kind,description:names[kind],duration:durations[kind]+seed%5*.13,seed,color:ELEMENT_COLOR[d.element]};}
export function idleStyle(id:string,now=Date.now()){const p=idleProfile(id);return `--idle-time:${p.duration}s;--idle-phase:-${((now/1000+p.seed*.31)%p.duration).toFixed(3)}s;--idle-color:${p.color}`;}
