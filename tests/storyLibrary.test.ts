import { describe, it, expect } from 'vitest';
import manifest from '../public/audio/story/manifest.json';
import { createGame } from '../src/systems/adventure';
import { campaign } from '../src/systems/campaign';
import { SPIRITS, BOSS_ART } from '../src/data/gameContent';
import scenes from '../src/data/storyScenes.json';
import { storyShots, storyArchive, narrationPath } from '../src/ui/storyPlayer';
import { newCodexView } from '../src/ui/codexPanel';
import { libraryPanel, bookSpread, newBookView } from '../src/ui/library';

describe('voiced stories and library',()=>{
 it('ships audible Korean clips matching every chapter caption',()=>{
  const clips:Record<string,{text:string;file:string}>=manifest.clips;
  expect(scenes).toHaveLength(20);const ids=new Set<string>();
  for(let ch=1;ch<=20;ch++)for(const part of ['intro','outro'] as const){
   const shots=storyShots(ch,part);expect(shots).toHaveLength(3);
   for(const shot of shots){
    expect(ids.has(shot.id)).toBe(false);ids.add(shot.id);
    expect(clips[shot.id].text).toBe(shot.caption);
    expect(clips[shot.id].file).toBe(narrationPath(shot.id));
    if(shot.actor)expect([...SPIRITS,...BOSS_ART].some(d=>d.id===shot.actor),shot.actor).toBe(true);
   }
  }
  expect(ids.size).toBe(120);expect(manifest.language).toBe('ko-KR');
 });
 it('only opens stories at the player frontier and endings after the chapter boss',()=>{
  const s=createGame();let html=storyArchive(s);
  expect(html).toContain('data-id="1:intro" >서막 감상');
  expect(html).toContain('data-id="1:outro" disabled');expect(html).toContain('data-id="2:intro" disabled');
  campaign(s).ratings['1-20-0']=3;html=storyArchive(s);
  expect(html).toContain('data-id="1:outro" >종막 감상');expect(html).toContain('data-id="2:intro" >서막 감상');expect(html).toContain('data-id="3:intro" disabled');
 });
 it('separates basic and awakening volumes and keeps every entry reachable across spreads',()=>{
  const s=createGame(),v=newCodexView(),b=newBookView();
  const landing=libraryPanel(s,v,b);expect(landing).toContain('요괴도감 펼치기');expect(landing).toContain('각성비록 펼치기');
  const seen=new Set<string>();b.open=true;
  for(let page=0;page<4;page++){v.page=page;const html=bookSpread(s,v,b);for(const match of html.matchAll(/data-action="book-entry" data-id="([^"]+)"/g)){expect(seen.has(match[1])).toBe(false);seen.add(match[1]);}}
  expect(seen.size).toBe(SPIRITS.length);
  v.query='지부신구';v.page=99;let html=bookSpread(s,v,b);expect(v.page).toBe(0);expect(html).toContain('지부신구 요괴 기록 읽기');expect(html).not.toContain('구미호 요괴 기록 읽기');
  v.tab='awakening';v.selected='jibu';v.stage=5;b.reading=true;html=bookSpread(s,v,b);
  expect(html).toContain('각성의 다섯 기록');expect(html).toContain('awakened-atlas.png');expect(html).toContain('5각성');
  v.tab='base';html=bookSpread(s,v,b);expect(html).not.toContain('각성의 다섯 기록');expect(html).not.toContain('awakened-atlas.png');
 });
 it('reading and filtering do not spend currency or change owned progress',()=>{
  const s=createGame();campaign(s);const before=JSON.stringify(s),v=newCodexView(),b={...newBookView(),open:true,reading:true};
  for(const d of SPIRITS){v.selected=d.id;for(const tab of ['base','awakening'] as const){v.tab=tab;for(const stage of [1,5]){v.stage=stage;expect(libraryPanel(s,v,b)).toContain(d.name);}}}
  expect(JSON.stringify(s)).toBe(before);
 });
});
