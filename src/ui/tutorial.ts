import type { GameSave } from '../systems/adventure';
import { guideComplete, guideTasks } from '../systems/journey';
export function tutorialCard(s:GameSave){
 if(s.guideDismissed||guideComplete(s))return '';
 const tasks=guideTasks(s),next=tasks.find(t=>!t.done)!;
 return `<aside class="journey-guide" aria-label="초행 길잡이"><div class="guide-seal">緣</div><div><small>초행 길잡이 · ${tasks.filter(t=>t.done).length} / 3</small><strong>${next.title}</strong><p>${next.text}</p></div><button class="outline-button" data-action="${next.action}">${next.button} →</button><button class="guide-dismiss" data-action="guide-dismiss" aria-label="길잡이 접기">×</button></aside>`;
}
export function tutorialPanel(s:GameSave){return `<div class="tutorial-panel"><span class="eyebrow">YOUR FIRST STEPS</span><h2>처음 걷는 만령로</h2><p>세 가지 작은 여정으로 동료와 함께 싸우는 법을 익혀 보세요.</p><ol>${guideTasks(s).map((t,i)=>`<li class="${t.done?'done':''}"><b>${t.done?'✓':String(i+1).padStart(2,'0')}</b><div><strong>${t.title}</strong><p>${t.text}</p></div></li>`).join('')}</ol><div class="tutorial-battle-tip"><b>전열은 지키고, 후열은 지원합니다.</b><p>전투는 자동으로 진행됩니다. 궁극기 게이지가 차면 수동으로 발동할 수도 있습니다. 적의 공격을 버티기 어렵다면 요괴의 레벨과 신물을 먼저 살펴보세요.</p></div><div class="button-row"><button class="outline-button" data-action="guide-dismiss">나중에 할게요</button><button class="primary-button" data-action="guide-start">${guideComplete(s)?'여정 계속하기':'길잡이와 시작하기'}</button></div></div>`;}
