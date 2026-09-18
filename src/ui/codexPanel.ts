import { SPIRITS, ELEMENT_HAN, ELEMENT_COLOR, RARITY_NAMES, spiritById, type Spirit } from '../data/gameContent';
import { BASE_LEVEL_CAP } from '../config/skillCoefficients';
import { DEFAULT_SKILL_COEFFICIENTS } from '../config/skillCoefficients';
import { effectiveSkillCoefficients } from '../systems/skills';
import type { GameSave } from '../systems/adventure';
import { codexBonus } from '../systems/campaign';
import { fullIllustration, pixelSprite } from './pixel';
import { elementBadge, icon, number, portrait, stars } from './components';
import type { Element } from '../types/unit';

export interface CodexView {
 tab:'base'|'awakening'; element:string; region:string; rarity:number;
 ownership:string; sort:string; query:string; page:number; selected:string; stage:number;
}
export const newCodexView=():CodexView=>({tab:'base',element:'전체',region:'전체',rarity:0,ownership:'all',sort:'number',query:'',page:0,selected:'gumiho',stage:5});
const PAGE_SIZE=18;
const esc=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const storyChapter:Record<string,number>={'story-swordsman':5,'story-priestess':9,'story-dancer':11,'story-prophet':14};
const no=(d:Spirit)=>String(SPIRITS.indexOf(d)+1).padStart(3,'0');
export const acquisition=(d:Spirit)=>d.storyOnly?`${storyChapter[d.id]}장 동료`:d.id==='gumiho'?'달빛 인연 픽업':'인연 소환';

export function codexList(s:GameSave,v:CodexView){
 const owned=new Map(s.owned.map(u=>[u.id,u])),q=v.query.trim().toLocaleLowerCase();
 const list=SPIRITS.filter(d=>{
  const u=owned.get(d.id);
  return (v.element==='전체'||d.element===v.element)&&(v.region==='전체'||d.region===v.region)&&(!v.rarity||d.rarity===v.rarity)&&(!q||d.name.toLocaleLowerCase().includes(q))&&(v.ownership==='all'||(v.ownership==='owned'?!!u:v.ownership==='missing'?!u:(u?.awakening??0)>0));
 });
 if(v.sort==='rarity')list.sort((a,b)=>b.rarity-a.rarity||SPIRITS.indexOf(a)-SPIRITS.indexOf(b));
 if(v.sort==='owned')list.sort((a,b)=>Number(owned.has(b.id))-Number(owned.has(a.id))||SPIRITS.indexOf(a)-SPIRITS.indexOf(b));
 return list;
}
export function awakeningRecord(s:GameSave,id:string,stage:number){
 const d=spiritById(id),u=s.owned.find(u=>u.id===id),n=Math.max(1,Math.min(5,Math.floor(stage))),current=u?.awakening??0;
 const coefficients=effectiveSkillCoefficients(DEFAULT_SKILL_COEFFICIENTS[d.rarity],{awakening:n as 1|2|3|4|5});
 return {stage:n,current,unlocked:!!u&&current>=n,cap:BASE_LEVEL_CAP[d.rarity]+n*10,bonus:n*10,coefficients,gold:n*2500,stones:n,requiredLevel:n*10,hasNewArt:d.atlas==='spirits'&&n===5};
}
export function codexPanel(s:GameSave,v:CodexView){
 const awakened=s.owned.reduce((n,u)=>n+u.awakening,0);
 return `<div class="archive-page"><div class="page-heading"><div><span class="eyebrow">THE ARCHIVE OF SPIRITS</span><h1>만령 도감</h1><p>만남은 한 권의 기록이 되고, 각성은 새로운 장이 됩니다.</p></div><button class="outline-button" data-action="codex-rewards">${icon('gift',16)} 도감 보상</button></div>
 <div class="dex-summary"><div><span>맺어진 인연</span><strong>${s.owned.length}<small> / ${SPIRITS.length}</small></strong></div><div><span>열린 각성 기록</span><strong>${awakened}<small> / ${SPIRITS.length*5}</small></strong></div><div><span>도감 공명</span><strong>+${(codexBonus(s)*100).toFixed(1)}<small>%</small></strong></div><p>요괴 한 종의 인연은 하나로.<br>각성의 다섯 단계는 별도의 기록으로.</p></div>
 <div class="dex-tabs" role="group" aria-label="도감 종류"><button data-action="dex-tab" data-id="base" aria-pressed="${v.tab==='base'}" class="${v.tab==='base'?'active':''}">${icon('codex',20)} 요괴 도감 <small>기본 모습 · 수집</small></button><button data-action="dex-tab" data-id="awakening" aria-pressed="${v.tab==='awakening'}" class="${v.tab==='awakening'?'active':''}">${icon('summon',20)} 각성 도감 <small>1–5단계 · 진명</small></button></div>
 ${v.tab==='awakening'?`<div id="awakening-record">${awakeningPanel(s,v)}</div>`:''}
 <section class="dex-catalog" aria-label="${v.tab==='awakening'?'각성 기록을 볼 요괴 선택':'요괴 수집 목록'}"><div class="dex-catalog-title"><div><span class="eyebrow">${v.tab==='base'?'SPIRIT COLLECTION':'CHOOSE A SPIRIT'}</span><h2>${v.tab==='base'?'인연의 기록':'각성 기록 찾아보기'}</h2></div><label class="dex-search">${icon('search',17)}<input id="codex-search" aria-label="도감 이름 검색" placeholder="요괴 이름 검색" value="${esc(v.query)}"></label></div>
 <div class="dex-controls"><div class="filter-tabs" role="group" aria-label="도감 오행 필터">${['전체','목','화','토','금','수'].map(e=>`<button data-action="dex-element" data-id="${e}" aria-pressed="${v.element===e}" class="${v.element===e?'active':''}">${e==='전체'?'모든 오행':ELEMENT_HAN[e as Element]+' '+e}</button>`).join('')}</div><div class="dex-selects"><label>지역<select id="dex-region"><option value="전체">모든 지역</option>${[...new Set(SPIRITS.map(d=>d.region))].map(r=>`<option ${v.region===r?'selected':''}>${r}</option>`).join('')}</select></label><label>등급<select id="dex-rarity"><option value="0">모든 등급</option>${[5,4,3,2,1].map(n=>`<option value="${n}" ${v.rarity===n?'selected':''}>${n}성 · ${RARITY_NAMES[n]}</option>`).join('')}</select></label><label>수집<select id="dex-ownership">${[['all','전체 요괴'],['owned','보유 요괴'],['missing','미보유 요괴'],['awakened','각성한 요괴']].map(([id,label])=>`<option value="${id}" ${v.ownership===id?'selected':''}>${label}</option>`).join('')}</select></label><label>정렬<select id="dex-sort">${[['number','도감 번호순'],['rarity','높은 등급순'],['owned','보유 요괴 먼저']].map(([id,label])=>`<option value="${id}" ${v.sort===id?'selected':''}>${label}</option>`).join('')}</select></label><button class="text-link" data-action="dex-reset">필터 초기화</button></div></div>
 <div id="codex-results">${codexResults(s,v)}</div></section></div>`;
}
export function codexResults(s:GameSave,v:CodexView){
 const list=codexList(s,v),pages=Math.max(1,Math.ceil(list.length/PAGE_SIZE)),page=Math.min(v.page,pages-1),visible=list.slice(page*PAGE_SIZE,(page+1)*PAGE_SIZE);
 return `<div class="dex-result-count" role="status">${list.length}종의 기록 <span>${v.tab==='base'?'카드를 눌러 요괴 정보와 만나는 방법을 확인하세요.':'카드를 눌러 위쪽의 각성 기록을 살펴보세요.'}</span></div><div class="dex-grid">${visible.map(d=>{
  const u=s.owned.find(u=>u.id===d.id),awake=v.tab==='awakening';
  return `<button class="dex-card ${u?'discovered':'undiscovered'} ${awake&&v.selected===d.id?'chosen':''}" style="--dex-color:${ELEMENT_COLOR[d.element]}" data-action="${awake?'dex-spirit':'dex-detail'}" data-id="${d.id}" aria-label="${d.name} ${awake?'각성 기록':u?'보유 · 상세':'미보유 · 상세'}"><div class="dex-card-top"><span>No. ${no(d)}</span>${elementBadge(d.element,true)}</div><div class="dex-card-art">${portrait(d,'',awake?5:0)}</div><div class="dex-card-copy">${stars(d.rarity)}<h3>${d.name}</h3><p>${d.role} <i>·</i> ${d.region}</p><div class="dex-card-status"><span>${awake?`${u?.awakening??0} / 5 각성`:u?'인연 맺음':'미보유'}</span>${awake?`<b class="dex-pips" aria-hidden="true">${[1,2,3,4,5].map(n=>`<i class="${(u?.awakening??0)>=n?'lit':''}"></i>`).join('')}</b>`:`<small>${acquisition(d)}</small>`}</div></div></button>`;
 }).join('')||`<div class="dex-empty">${icon('search',28)}<h3>아직 이 조건의 기록은 없어요.</h3><p>다른 이름이나 지역을 찾아보세요.</p><button class="outline-button" data-action="dex-reset">필터 초기화</button></div>`}</div><div class="dex-pagination"><button class="outline-button" data-action="dex-page" data-id="${page-1}" ${page===0?'disabled':''} aria-label="이전 도감 페이지">${icon('back',16)}</button>${Array.from({length:pages},(_,i)=>`<button data-action="dex-page" data-id="${i}" aria-label="도감 ${i+1}페이지" aria-current="${i===page?'page':'false'}" class="${i===page?'active':''}">${i+1}</button>`).join('')}<button class="outline-button" data-action="dex-page" data-id="${page+1}" ${page===pages-1?'disabled':''} aria-label="다음 도감 페이지">${icon('chevron',16)}</button></div>`;
}
export function awakeningPanel(s:GameSave,v:CodexView){
 const d=spiritById(v.selected),r=awakeningRecord(s,d.id,v.stage),u=s.owned.find(u=>u.id===d.id);
 const names=['첫 울림','깊어진 인연','영혼의 결','경계를 넘어','진명의 개화'];
 const additions=[`${d.skill} · 스킬 1 계수 +15%p`,d.rarity>=3?'스킬 2 계수 +15%p':'생명·공격·방어 성장 강화','레벨 상한과 기초 능력치 확장','궁극기 계수 +20%p · 재사용 1턴 감소',d.atlas==='spirits'?'진명 일러스트와 전용 전투 외형 개방':'진명 오라 개방'];
 return `<section class="awake-record" style="--dex-color:${ELEMENT_COLOR[d.element]}"><div class="awake-showcase"><span class="awake-record-number">AWAKENING RECORD / ${no(d)}</span><div class="awake-orbit"></div><button class="awake-main-art" data-action="dex-illustration" data-id="${d.id}" aria-label="${d.name} ${r.stage}각성 전신 크게 보기">${fullIllustration(d.id,r.stage)}</button><span class="awake-watermark">${['壹','貳','參','肆','伍'][r.stage-1]}</span><div class="awake-mini">${pixelSprite(d.id,'',r.stage)}<span>전투 모습</span></div><span class="awake-form-label">${r.hasNewArt?'진명 전용 외형':r.stage===5?'진명 오라':'기본 외형 · 각성 성장'}</span></div>
 <div class="awake-description"><div class="awake-meta">${elementBadge(d.element)}<span>${RARITY_NAMES[d.rarity]} · ${d.role}</span><b class="${r.unlocked?'unlocked':''}">${r.unlocked?'해금한 기록':'미해금 · 미리보기'}</b></div><h2>${d.name}</h2><p class="awake-subtitle">${d.title}</p><div class="awake-current"><span>보유 상태</span><strong>${u?`Lv. ${u.level} · 현재 ${r.current}각성`:'아직 인연을 맺지 않았습니다'}</strong></div>
 <div class="awake-stage-tabs" role="group" aria-label="각성 단계 선택">${[1,2,3,4,5].map(n=>`<button class="${n===r.stage?'selected':''} ${r.current>=n?'unlocked':''}" aria-pressed="${n===r.stage}" data-action="dex-stage" data-id="${n}"><span>${n===5?'✧':String(n).padStart(2,'0')}</span><b>${n}각성</b><small>${r.current>=n?'해금':'미해금'}</small></button>`).join('')}</div>
 <div class="awake-stage-heading"><span>STAGE ${String(r.stage).padStart(2,'0')}</span><h3>${names[r.stage-1]}</h3></div><p class="awake-stage-feature">${additions[r.stage-1]}</p>
 <div class="awake-benefits"><div><span>각성 능력치 보너스</span><b>+${r.bonus}%</b></div><div><span>해당 단계 레벨 상한</span><b>Lv. ${r.cap}</b></div><div><span>스킬 1 / 스킬 2 계수</span><b>${r.coefficients.skill1}% / ${r.coefficients.skill2===null?'—':r.coefficients.skill2+'%'}</b></div><div><span>궁극기 계수</span><b>${r.coefficients.ultimate}%</b></div></div>
 <p class="awake-benefit-note">각성만 반영한 누적 효과입니다. 장비·돌파·도감 공명은 별도로 더해집니다.</p><div class="awake-requirement"><span>${r.stage-1} → ${r.stage}각성에 필요한 것</span><p>Lv. ${r.requiredLevel} <i>·</i> 금화 ${number(r.gold)} <i>·</i> 전용 각성석 ${r.stones} <i>·</i> 혼돈 파편 ${r.stones}</p></div>
 <div class="awake-record-actions"><button class="primary-button" data-action="${u?'detail':d.storyOnly?'world':'go-summon'}" data-id="${d.id}">${u?'요괴 성장으로':d.storyOnly?`${storyChapter[d.id]}장 여정 보기`:'소환 상점으로'} ${icon('chevron',15)}</button><button class="outline-button" data-action="dex-tab" data-id="base">기본 도감 보기</button></div><p class="awake-art-note">${d.atlas==='spirits'?'1~4각성은 기본 외형을 유지하며, 5각성에서 모습이 달라집니다.':'이 요괴의 5각성은 기존 외형에 진명 오라가 더해집니다.'}</p></div></section>`;
}
