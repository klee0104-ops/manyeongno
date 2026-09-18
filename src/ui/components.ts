import { ELEMENT_COLOR, ELEMENT_HAN, RARITY_NAMES, spiritById, type Spirit } from '../data/gameContent';
import type { Element } from '../types/unit';
import { illustrationStyle } from './pixel';
export function icon(name:string,size=22):string {
  const paths:Record<string,string>={
    challenges:'<path d="M3 21V9l9-7 9 7v12H3ZM8 21v-8a4 4 0 0 1 8 0v8M3 9h18M5 6V3m14 3V3"/>',
    explore:'<path d="m3 20 6-15 4 8 3-5 5 12Z"/><path d="m7 10 3 3 2-2M3 20h18"/>',
    spirits:'<path d="M12 3c-2 4-8 5-8 11a8 8 0 0 0 16 0c0-5-6-8-8-11Z"/><path d="M9 13v2m6-2v2m-6 3c2 1 4 1 6 0"/>',
    equipment:'<path d="m15 3 6 6-12 12-6-6Z"/><path d="m11 7 6 6M3 3l5 5m-6 4 10-10"/>',
    summon:'<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z"/>',
    codex:'<path d="M12 5v16M3 4c4-1 6 0 9 2 3-2 5-3 9-2v15c-4-1-6 0-9 2-3-2-5-3-9-2Z"/>',
    quest:'<path d="M9 4h6l1 3H8l1-3Zm-1 1H5v16h14V5h-3M8 12h8m-8 4h5"/>',
    settings:'<path d="m10 3-1 3-3 1-3 3 2 3-1 3 3 3 3-1 3 2 3-3 1-3 3-1-1-4-3-1-1-3Z"/><circle cx="12" cy="12" r="3"/>',
    chevron:'<path d="m9 5 7 7-7 7"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',
    star:'<path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/>',
    shield:'<path d="m12 3 8 3v6c0 5-8 9-8 9S4 17 4 12V6Z"/>',
    heart:'<path d="M20 5c-3-3-7-1-8 2-1-3-5-5-8-2-4 4 1 10 8 15 7-5 12-11 8-15Z"/>',
    gold:'<circle cx="12" cy="12" r="9"/><path d="m12 7 4 5-4 5-4-5Z"/>',
    gem:'<path d="m7 3-5 7 10 12 10-12-5-7ZM2 10h20M7 3l5 19 5-19"/>',
    energy:'<path d="m14 2-9 12h6l-1 8 9-12h-6Z"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',check:'<path d="m5 12 5 5L20 7"/>',
    lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v2"/>',
    sound:'<path d="m11 4-6 5H2v6h3l6 5ZM15 8c3 2 3 6 0 8m3-11c5 4 5 10 0 14"/>',
    mute:'<path d="m11 4-6 5H2v6h3l6 5ZM16 9l6 6m-6 0 6-6"/>',
    gift:'<path d="M3 9h18v4H3Zm2 4v8h14v-8M12 9v12m0-12C3 9 5 0 9 4l3 5c9 0 7-9 3-5Z"/>',
    leaf:'<path d="M20 3C4 1 2 7 5 15c7 4 15 1 15-12ZM3 21 16 8"/>',
    time:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 3"/>',
    search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
    back:'<path d="m14 5-7 7 7 7"/>',play:'<path d="m8 4 12 8-12 8Z"/>',
    crown:'<path d="m3 5 4 5 5-7 5 7 4-5-2 14H5ZM5 22h14"/>',
    download:'<path d="M12 3v12m-5-5 5 5 5-5M3 16v5h18v-5"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]??paths.summon}</svg>`;
}
export const number=(n:number)=>Math.floor(n).toLocaleString('ko-KR');
export const stars=(n:number)=>`<span class="stars" aria-label="${n}성">${'✦'.repeat(n)}</span>`;
export function elementBadge(element:Element,small=false){return `<span class="element ${small?'small':''}" style="--element:${ELEMENT_COLOR[element]}" title="${element} 속성">${ELEMENT_HAN[element]}</span>`;}
export function portrait(d:Spirit|string,cls='',awakening=0):string {
  const s=typeof d==='string'?spiritById(d):d;
  return `<div class="portrait ${cls}" role="img" aria-label="${s.name} 일러스트" style="${illustrationStyle(s.id,awakening)}"></div>`;
}
export function itemArt(n:number,cls=''){return `<div class="item-art ${cls}" style="--x:${n%3*50}%;--y:${Math.floor(n/3)*100}%"></div>`;}
export function spiritCard(d:Spirit,owned:boolean,level=1,action='detail',extra=''):string {
  return `<button class="spirit-card rarity-${d.rarity} ${owned?'':'unowned'}" data-action="${action}" data-id="${d.id}" aria-label="${d.name} ${owned?`레벨 ${level}`:'미보유'} 상세 보기">
    ${portrait(d)}<div class="card-shade"></div>${elementBadge(d.element,true)}<span class="card-rarity">${RARITY_NAMES[d.rarity]}</span>
    ${extra}<div class="spirit-card-info">${stars(d.rarity)}<h3>${d.name}</h3><div><span>${d.role}</span><b>${owned?`Lv. ${level}`:'미보유'}</b></div></div></button>`;
}
export function rewardPill(type:string,value:number,label=''){return `<span class="reward-pill ${type}">${icon(type,18)}<strong>${number(value)}</strong>${label?`<small>${label}</small>`:''}</span>`;}
