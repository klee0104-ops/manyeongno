import { afterEach, describe, expect, it, vi } from 'vitest';
import { assetPath } from '../src/utils/assets';
import { SPIRITS } from '../src/data/gameContent';
import { fullIllustration, pixelSprite } from '../src/ui/pixel';
import { narrationPath, storyPlate } from '../src/ui/storyPlayer';

afterEach(()=>vi.unstubAllEnvs());
describe('project-site asset paths',()=>{
  it('keeps localhost paths at root and joins project paths without duplicate slashes',()=>{
    expect(assetPath('/art/gumiho.png','/')).toBe('/art/gumiho.png');
    expect(assetPath('audio/shop/welcome.wav','/manyeongno/')).toBe('/manyeongno/audio/shop/welcome.wav');
    expect(assetPath('/art/gumiho.png','/manyeongno')).toBe('/manyeongno/art/gumiho.png');
  });
  it('loads every base and awakened sprite from the project directory',()=>{
    vi.stubEnv('BASE_URL','/manyeongno/');
    for(const d of SPIRITS)for(const stage of [0,5]){
      for(const html of [pixelSprite(d.id,'',stage),fullIllustration(d.id,stage)]){
        expect(html).toContain('/manyeongno/art/');
        expect(html).not.toMatch(/["']\/art\//);
      }
    }
  });
  it('loads story backgrounds and Korean voices below the project path',()=>{
    vi.stubEnv('BASE_URL','/manyeongno/');
    expect(narrationPath('ch01-intro-1')).toBe('/manyeongno/audio/story/ch01-intro-1.wav');
    expect(storyPlate('heirloom',0)).toContain('/manyeongno/art/story-relics-v05.png');
    expect(storyPlate('forest',0)).toContain('/manyeongno/art/story-worlds-v05.png');
  });
});
