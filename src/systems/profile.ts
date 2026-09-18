import type { GameSave } from './adventure';
import { totalClears } from './campaign';
export const PROFILE_TITLES=[{id:'wanderer',name:'인연을 잇는 영술사',clears:0},{id:'forest',name:'숲의 수호자',clears:20},{id:'traveler',name:'경계를 걷는 자',clears:140},{id:'legend',name:'만령의 벗',clears:400}];
export const profileTitle=(s:GameSave)=>PROFILE_TITLES.find(t=>t.id===s.profileTitle)?.name??PROFILE_TITLES[0].name;
export const profileAvatar=(s:GameSave)=>s.owned.some(u=>u.id===s.profileAvatar)?s.profileAvatar!:(s.owned.find(u=>u.id==='gumiho')?.id??s.owned[0]?.id??'gumiho');
export function updateProfile(s:GameSave,name:string,avatar:string,title:string):string|null{
 const clean=name.trim();if(!clean||Array.from(clean).length>16||Array.from(clean).some(c=>c.charCodeAt(0)<32||c.charCodeAt(0)===127))return '닉네임은 1~16자의 글자로 입력해주세요.';
 if(!s.owned.some(u=>u.id===avatar))return '인연을 맺은 요괴를 대표로 선택해주세요.';
 const badge=PROFILE_TITLES.find(t=>t.id===title);if(!badge||totalClears(s)<badge.clears)return '아직 얻지 못한 칭호입니다.';
 s.profileName=clean;s.profileAvatar=avatar;s.profileTitle=title;return null;
}
