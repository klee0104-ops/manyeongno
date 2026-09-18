import type { GameSave } from '../systems/adventure';
import { PROFILE_TITLES } from '../systems/profile';
import { totalClears } from '../systems/campaign';
import { spiritById } from '../data/gameContent';
import { portrait } from './components';
const escape=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
export interface ProfileDraft {name:string;avatar:string;title:string}
export function profilePanel(s:GameSave,draft:ProfileDraft){
 return `<form id="profile-edit-form" class="profile-editor"><span class="eyebrow">YOUR NAME, YOUR JOURNEY</span><h2>영술사 수첩</h2><p>함께한 인연으로 나만의 모습을 꾸며 보세요.</p><div class="profile-preview">${portrait(draft.avatar)}<div><strong>${escape(draft.name||'이름을 입력하세요')}</strong><small>${PROFILE_TITLES.find(t=>t.id===draft.title)?.name??''}</small></div></div><label for="profile-edit-name">영술사 이름 <small>1~16자</small></label><input id="profile-edit-name" name="nickname" maxlength="32" required value="${escape(draft.name)}" autocomplete="nickname"><label for="profile-edit-title">여정 칭호</label><select id="profile-edit-title">${PROFILE_TITLES.map(t=>`<option value="${t.id}" ${t.id===draft.title?'selected':''} ${totalClears(s)<t.clears?'disabled':''}>${t.name}${totalClears(s)<t.clears?` · ${t.clears}곳 정화 후`:''}</option>`).join('')}</select><h3>대표 요괴 <small>인연을 맺은 요괴 ${s.owned.length}종</small></h3><div class="profile-avatars">${s.owned.map(u=>`<button type="button" data-action="profile-avatar" data-id="${u.id}" aria-label="${spiritById(u.id).name} 대표 선택" aria-pressed="${draft.avatar===u.id}">${portrait(u.id)}<span>${spiritById(u.id).name}</span></button>`).join('')}</div><div class="button-row"><button class="outline-button" type="button" data-action="close">취소</button><button class="primary-button" type="submit">프로필 저장</button></div></form>`;
}
