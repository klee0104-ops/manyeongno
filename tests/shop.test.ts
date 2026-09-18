import { describe, expect, it } from 'vitest';
import { createGame, validateSave } from '../src/systems/adventure';
import { campaign, staminaCap } from '../src/systems/campaign';
import { purchaseGood, purchaseProblem, shopStock } from '../src/systems/shop';
import lines from '../public/audio/shop/lines.json';
import { SHOP_LINES } from '../src/ui/shopHost';

describe('general shop transactions', () => {
  it('keeps the recorded shopkeeper voice aligned with its visible captions', () => {
    expect(lines).toEqual(SHOP_LINES);
  });
  it('charges exact prices for a batch and retains items after serialization', () => {
    const s = createGame(); s.gold = 100000;
    const before = { tickets: campaign(s).sweepTickets, stones: campaign(s).enhanceStones, dust: s.dust };
    expect(purchaseGood(s, 'sweep-bundle', 3)).toBeNull();
    expect(purchaseGood(s, 'forge-stones', 2)).toBeNull();
    expect(purchaseGood(s, 'spirit-essence', 5)).toBeNull();
    const restored = JSON.parse(JSON.stringify(s));
    expect(validateSave(restored)).toBe(true);
    expect(restored.gold).toBe(61500);
    expect(shopStock(restored, 'sweep-bundle')).toBe(before.tickets + 15);
    expect(shopStock(restored, 'forge-stones')).toBe(before.stones + 20);
    expect(shopStock(restored, 'spirit-essence')).toBe(before.dust + 250);
  });
  it('rejects invalid requests and insufficient funds without consuming anything', () => {
    const s = createGame(); campaign(s); s.gold = 2499; s.gems = 24; s.stamina = 40;
    const before = JSON.stringify(s);
    for (const [id, qty] of [['missing', 1], ['sweep-bundle', 1], ['herbal-tea', 1], ['forge-stones', -1], ['forge-stones', 0], ['forge-stones', 1.5], ['forge-stones', 6], ['forge-stones', Infinity], ['forge-stones', NaN]] as const) {
      expect(purchaseGood(s, id, qty)).toBeTypeOf('string');
      expect(JSON.stringify(s)).toBe(before);
    }
  });
  it('serves one tea at a time, caps recovery, and never charges when already full', () => {
    const s = createGame(); campaign(s); s.stamina = 50;
    const gems = s.gems;
    expect(purchaseGood(s, 'herbal-tea', 2)).toBeTruthy();
    expect(s.gems).toBe(gems);
    expect(purchaseGood(s, 'herbal-tea')).toBeNull();
    expect(s.stamina).toBe(80); expect(s.gems).toBe(gems - 25);
    s.stamina = staminaCap(s) - 7;
    expect(purchaseGood(s, 'herbal-tea')).toBeNull();
    expect(s.stamina).toBe(staminaCap(s));
    const full = JSON.stringify(s);
    expect(purchaseGood(s, 'herbal-tea')).toBeTruthy();
    expect(JSON.stringify(s)).toBe(full);
  });
  it('checks the resource limit before charging for a batch', () => {
    const s = createGame(); s.gold = 100000; campaign(s).enhanceStones = 1e9 - 5;
    const before = JSON.stringify(s);
    expect(purchaseProblem(s, 'forge-stones', 1)).toContain('한도');
    expect(purchaseGood(s, 'forge-stones', 5)).toContain('한도');
    expect(JSON.stringify(s)).toBe(before);
  });
});
