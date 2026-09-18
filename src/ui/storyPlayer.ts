import scenes from '../data/storyScenes.json';
import { CAMPAIGN, chapterInfo } from '../data/campaign';
import { rating, unlockedChapter } from '../systems/campaign';
import type { GameSave } from '../systems/adventure';
import { fullIllustration } from './pixel';
import { assetPath } from '../utils/assets';

export type StoryPart='intro'|'outro';
export const storyShots=(chapter:number,part:StoryPart)=>scenes[Math.max(0,Math.min(19,chapter-1))][part];
export const narrationPath=(id:string)=>assetPath(`audio/story/${id}.wav`);
export function storyPlate(visual:string,theme:number){
 const relics:Record<string,number>={heirloom:0,ledger:1,jades:2,sacrifice:2,dawn:3};
 const relic=relics[visual],n=relic??theme;
 return `--scene-image:url('${assetPath(`art/${relic===undefined?'story-worlds':'story-relics'}-v05.png`)}');--scene-x:${n%2*100}%;--scene-y:${Math.floor(n/2)*(relic===undefined?50:100)}%;--scene-size:200% ${relic===undefined?300:200}%`;
}
const particles=(count:number)=>Array.from({length:count},(_,i)=>`<i style="--i:${i};--x:${(i*37+9)%100}%;--y:${(i*17+12)%85}%;--delay:${-(i%7)}s"></i>`).join('');
function props(visual:string){
 const seal=['ward','shrine','blessing','temple','gate'].includes(visual);
 return `<div class="scene-mist mist-back"></div><div class="scene-mist mist-front"></div><div class="scene-dust">${particles(20)}</div>
 ${seal?`<div class="scene-seals">${['封','靈','守','結','界'].map((v,i)=>`<i style="--i:${i}">${v}</i>`).join('')}</div>`:''}
 ${visual==='heirloom'?'<div class="scene-candle-glow"></div><div class="scene-map-trace"><i></i><i></i><i></i></div>':''}
 ${visual==='gate'?'<div class="scene-gate-wings"><i></i><i></i></div>':''}
 ${['sword','cliff'].includes(visual)?'<div class="scene-swords"><i></i><i></i><i></i></div>':''}
 ${['shadow','ledger','fracture','memories','ancestor','mural','wolf'].includes(visual)?'<div class="scene-ink"></div><div class="scene-rift"></div>':''}
 ${['jades','sacrifice','blessing','stars'].includes(visual)?`<div class="scene-constellation">${['#93d385','#eeeeff','#ee9576','#67d0de','#e2c27b','#cca9f5'].map((c,i)=>`<i style="--i:${i};--jade:${c}"></i>`).join('')}</div>`:''}
 ${['water','dragon','temple','storm'].includes(visual)?'<div class="scene-water"><i></i><i></i><i></i></div><div class="scene-lightning"></div>':''}
 ${['lantern','festival'].includes(visual)?`<div class="scene-lanterns">${particles(7)}</div>`:''}
 ${['fire','sacrifice','dawn'].includes(visual)?'<div class="scene-radiance"></div>':''}`;
}
function modalFocus(overlay:HTMLElement,e:KeyboardEvent){
 if(e.key!=='Tab')return;
 const list=Array.from(overlay.querySelectorAll<HTMLButtonElement>('button:not(:disabled)')).filter(el=>!el.hidden);
 const index=list.indexOf(document.activeElement as HTMLButtonElement);
 if(!list.length)return;
 if(index<0||e.shiftKey&&index===0||!e.shiftKey&&index===list.length-1){e.preventDefault();list[e.shiftKey?list.length-1:0].focus();}
}
/** Locally generated Korean narration drives each cut; no walking sprites. */
export function storyFilm(chapter:number,part:StoryPart,onDone:()=>void){
 const c=chapterInfo(chapter),shots=storyShots(chapter,part),overlay=document.createElement('section');
 const previous=document.activeElement as HTMLElement,app=document.querySelector<HTMLElement>('#app');
 const wasInert=app?.inert??false;if(app)app.inert=true;
 overlay.className='story-theater';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label',`${c.title} 이야기 감상`);
 overlay.innerHTML=`<header class="theater-header"><div><span>萬靈路 · 이야기의 조각</span><h2>제 ${chapter}장 · ${c.title}</h2></div><button data-story="skip">감상 끝내기 ×</button></header><div class="theater-stage"></div><div class="theater-subtitles" aria-live="polite"><small>${c.region} · ${part==='intro'?'서막':'종막'}</small><p></p></div><footer class="theater-footer"><div class="story-transport"><button data-story="prev" aria-label="이전 장면">←</button><button data-story="pause">일시정지</button><button data-story="next" aria-label="다음 장면">→</button></div><div class="story-timeline" aria-label="장면 선택">${shots.map((_,i)=>`<button data-story="scene" data-index="${i}" aria-label="${i+1}번째 장면"><i></i></button>`).join('')}</div><div class="narration-control"><button data-story="voice" aria-pressed="true">내레이션 켜짐</button><button data-story="retry" hidden>음성 재생</button><small class="narration-status" role="status"></small></div></footer>`;
 const audio=document.createElement('audio');audio.preload='auto';audio.volume=.9;audio.setAttribute('aria-label','한국어 이야기 내레이션');overlay.append(audio);
 document.body.append(overlay);document.body.classList.add('film-open');
 let index=0,paused=false,done=false,voice=true,failed=false,timer:number|undefined,deadline=0,remaining=0,token=0;
 try{voice=localStorage.getItem('manyeongno:narration')!=='off';}catch{/* The session can still play without storage. */}
 const button=(name:string)=>overlay.querySelector<HTMLButtonElement>(`[data-story="${name}"]`)!;
 const status=(text:string)=>{overlay.querySelector('.narration-status')!.textContent=text;};
 const clear=()=>{window.clearTimeout(timer);timer=undefined;};
 const fallback=()=>{clear();remaining=Math.max(4500,shots[index].caption.length*160);if(!paused){deadline=performance.now()+remaining;timer=window.setTimeout(next,remaining);}};
 const finish=()=>{if(done)return;done=true;token++;clear();audio.pause();audio.removeAttribute('src');audio.load();document.removeEventListener('visibilitychange',visibility);overlay.remove();document.body.classList.remove('film-open');if(app)app.inert=wasInert;previous?.focus({preventScroll:true});onDone();};
 function next(){if(index<shots.length-1){index++;cut();}else finish();}
 function failedAudio(){if(done||failed)return;failed=true;status('음성 재생을 눌러 다시 들을 수 있어요');button('retry').hidden=false;fallback();}
 async function play(){const current=++token;try{await audio.play();if(done||current!==token)return;failed=false;button('retry').hidden=true;status('한국어 내레이션 재생 중');clear();}catch{if(current===token)failedAudio();}}
 function cut(){
  token++;clear();audio.pause();paused=false;failed=false;overlay.classList.remove('story-paused');button('pause').textContent='일시정지';button('retry').hidden=true;
  const shot=shots[index];overlay.dataset.scene=shot.id;
  overlay.querySelector('.theater-stage')!.innerHTML=`<div class="story-scene shot-${shot.visual}" style="${storyPlate(shot.visual,shot.theme)}"><div class="story-painted-scene"></div><div class="scene-shade"></div>${shot.actor?`<div class="scene-figure ${['shadow','ledger','memories','ancestor','mural'].includes(shot.visual)?'silhouette':''}">${fullIllustration(shot.actor)}</div>`:''}${props(shot.visual)}<div class="scene-frame"></div></div>`;
  overlay.querySelector('.theater-subtitles p')!.textContent=shot.caption;
  overlay.querySelectorAll<HTMLElement>('[data-story="scene"]').forEach((el,i)=>{el.classList.toggle('current',i===index);el.classList.toggle('past',i<index);el.setAttribute('aria-current',i===index?'step':'false');});
  button('prev').disabled=index===0;button('next').setAttribute('aria-label',index===shots.length-1?'감상 마치기':'다음 장면');
  button('voice').textContent=voice?'내레이션 켜짐':'내레이션 꺼짐';button('voice').setAttribute('aria-pressed',String(voice));
  audio.src=narrationPath(shot.id);status(voice?'음성 불러오는 중':'자막으로 감상 중');
  if(voice){void play();deadline=performance.now()+10000;remaining=10000;timer=window.setTimeout(failedAudio,10000);}else fallback();
 }
 function pause(value:boolean){
  paused=value;overlay.classList.toggle('story-paused',paused);button('pause').textContent=paused?'계속':'일시정지';
  if(paused){if(timer!==undefined)remaining=Math.max(0,deadline-performance.now());clear();token++;audio.pause();status('감상 일시정지');}
  else if(voice&&!failed)void play();else{deadline=performance.now()+remaining;timer=window.setTimeout(next,remaining);status(voice?'자막으로 감상 중':'내레이션 꺼짐');}
 }
 const visibility=()=>{if(document.hidden&&!done)pause(true);};document.addEventListener('visibilitychange',visibility);
 audio.addEventListener('ended',()=>{if(!paused&&!done&&voice)next();});audio.addEventListener('error',()=>{if(voice&&!done)failedAudio();});
 overlay.addEventListener('click',e=>{const el=(e.target as HTMLElement).closest<HTMLElement>('[data-story]');if(!el||(el as HTMLButtonElement).disabled)return;
  switch(el.dataset.story){case 'skip':finish();break;case 'pause':pause(!paused);break;case 'prev':index=Math.max(0,index-1);cut();break;case 'next':next();break;case 'scene':index=Number(el.dataset.index);cut();break;case 'retry':failed=false;paused=false;overlay.classList.remove('story-paused');button('pause').textContent='일시정지';audio.currentTime=0;clear();void play();break;case 'voice':voice=!voice;try{localStorage.setItem('manyeongno:narration',voice?'on':'off');}catch{/* Optional preference. */}cut();break;}
 });
 overlay.addEventListener('keydown',e=>{if(e.key==='Escape')finish();else if(e.key==='ArrowRight')next();else if(e.key==='ArrowLeft'&&index>0){index--;cut();}else if(e.code==='Space'&&!(e.target instanceof HTMLButtonElement)){e.preventDefault();pause(!paused);}modalFocus(overlay,e);});
 button('pause').focus();cut();return finish;
}

/** Asset progress is real; the ready screen waits for a deliberate story choice. */
export function journeyLoading(chapter:number,onWatch:()=>void,onExplore:()=>void){
 const c=chapterInfo(chapter),overlay=document.createElement('section'),app=document.querySelector<HTMLElement>('#app');
 if(app)app.inert=true;overlay.className='journey-loader';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','여정 준비');
 overlay.innerHTML=`<div class="loader-landscape" style="${storyPlate('forest',c.theme)}"></div><div class="loader-shade"></div><div class="loader-content"><span class="loader-seal">緣</span><span class="eyebrow">THE NEXT CHAPTER</span><h1>${c.title}</h1><p>${c.region}의 인연을 불러오고 있습니다.</p><div class="loader-progress" role="progressbar" aria-label="여정 로딩" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i></i></div><small class="loader-status" role="status">0% · 이야기와 소리를 준비하는 중</small><div class="loader-choice" hidden><button class="primary-button" data-loading="watch">▷ 스토리 감상하기</button><button class="outline-button" data-loading="explore">바로 탐험하기 →</button><small>한국어 내레이션 · 자막 · 장면별 2D 연출<br>이야기는 탐험 화면에서 다시 감상할 수 있어요.</small></div></div>`;
 document.body.append(overlay);document.body.classList.add('film-open');let done=false,loaded=0,missing=0;
 const assets=[...['art/story-worlds-v05.png','art/story-relics-v05.png','art/library-v05.png'].map(path=>assetPath(path)),...storyShots(chapter,'intro').map(s=>narrationPath(s.id))];
 const ready=async()=>{
  await Promise.all([...assets.map(async url=>{try{const r=await fetch(url,{signal:AbortSignal.timeout(8000)});if(!r.ok)throw new Error('asset');await r.arrayBuffer();}catch{missing++;}finally{loaded++;const n=Math.round(loaded/assets.length*100);overlay.querySelector<HTMLElement>('.loader-progress i')!.style.width=`${n}%`;overlay.querySelector('.loader-progress')!.setAttribute('aria-valuenow',String(n));overlay.querySelector('.loader-status')!.textContent=`${n}% · ${loaded} / ${assets.length}`;}}),new Promise(resolve=>setTimeout(resolve,1000))]);
  if(done)return;overlay.classList.add('ready');overlay.querySelector('.loader-content>p')!.textContent=`제 ${chapter}장 · 달빛 아래, 이야기가 시작됩니다.`;overlay.querySelector('.loader-status')!.textContent=missing?'일부 자료를 불러오지 못했습니다. 감상 중 다시 시도할 수 있어요.':'준비 완료';overlay.querySelector<HTMLElement>('.loader-choice')!.hidden=false;overlay.querySelector<HTMLButtonElement>('[data-loading="watch"]')!.focus();
 };
 overlay.addEventListener('click',e=>{const action=(e.target as HTMLElement).closest<HTMLElement>('[data-loading]')?.dataset.loading;if(!action||done)return;done=true;overlay.remove();document.body.classList.remove('film-open');if(app)app.inert=false;(action==='watch'?onWatch:onExplore)();});overlay.addEventListener('keydown',e=>modalFocus(overlay,e));void ready();
}
export function storyArchive(s:GameSave){
 const frontier=unlockedChapter(s);
 return `<div class="modal-heading"><span class="eyebrow">MEMORIES OF THE JOURNEY</span><h2>이야기 감상하기</h2><p>목소리와 장면으로 다시 만나는, 길 위의 인연.</p></div><div class="story-archive">${CAMPAIGN.map((c,i)=>`<article class="${i+1>frontier?'locked':''}"><div class="story-chapter-thumbnail" style="${storyPlate('forest',c.theme)}"><span>${String(i+1).padStart(2,'0')}</span></div><div><small>${c.region}</small><h3>${c.title}</h3><div><button class="outline-button" data-action="watch-story" data-id="${i+1}:intro" ${i+1>frontier?'disabled':''}>${i+1>frontier?'미해금':'서막 감상'}</button><button class="outline-button" data-action="watch-story" data-id="${i+1}:outro" ${!rating(s,i+1,20,'쉬움')?'disabled':''}>${rating(s,i+1,20,'쉬움')?'종막 감상':'보스 정화 후'}</button></div></div></article>`).join('')}</div>`;
}
