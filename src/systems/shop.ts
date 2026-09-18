import type { GameSave } from './adventure';
import { campaign, staminaCap } from './campaign';
export const SHOP_GOODS=[
 {id:'herbal-tea',name:'달빛 약차',category:'탐험 준비',desc:'따뜻한 약차로 행동력 30을 즉시 회복합니다.',price:25,currency:'gems' as const,amount:30,icon:'tea',unit:'행동력'},
 {id:'sweep-bundle',name:'길잡이 부적',category:'탐험 준비',desc:'정화한 길을 빠르게 돌아보는 소탕권 5장입니다.',price:2500,currency:'gold' as const,amount:5,icon:'scroll',unit:'소탕권'},
 {id:'forge-stones',name:'반짝이는 강화석',category:'성장 재료',desc:'신물을 강화하는 데 사용하는 강화석 10개입니다.',price:3000,currency:'gold' as const,amount:10,icon:'stones',unit:'강화석'},
 {id:'spirit-essence',name:'정령의 이슬',category:'성장 재료',desc:'요괴 성장과 각성석 교환에 사용하는 정수 50개입니다.',price:5000,currency:'gold' as const,amount:50,icon:'bottle',unit:'요괴 정수'},
];
export function shopStock(s:GameSave,id:string){const c=campaign(s);return id==='herbal-tea'?s.stamina:id==='sweep-bundle'?c.sweepTickets:id==='forge-stones'?c.enhanceStones:s.dust;}
export function purchaseProblem(s:GameSave,id:string,quantity:number):string|null {
 const good=SHOP_GOODS.find(g=>g.id===id);if(!good||!Number.isInteger(quantity)||quantity<1||quantity>5)return '상품과 수량을 확인해주세요.';
 if(s[good.currency]<good.price*quantity)return `${good.currency==='gold'?'금화가':'경계석이'} 부족합니다.`;
 if(id==='herbal-tea'&&s.stamina>=staminaCap(s))return '행동력이 가득 차 있습니다.';
 if(id==='herbal-tea'&&quantity!==1)return '약차는 한 잔씩 마실 수 있습니다.';
 if(id!=='herbal-tea'&&shopStock(s,id)+good.amount*quantity>1e9)return '재료 보관 한도에 도달했습니다.';
 return null;
}
export function purchaseGood(s:GameSave,id:string,quantity=1):string|null {
 const error=purchaseProblem(s,id,quantity);if(error)return error;
 const good=SHOP_GOODS.find(g=>g.id===id)!,c=campaign(s);s[good.currency]-=good.price*quantity;
 if(id==='herbal-tea')s.stamina=Math.min(staminaCap(s),s.stamina+good.amount);
 else if(id==='sweep-bundle')c.sweepTickets+=good.amount*quantity;
 else if(id==='forge-stones')c.enhanceStones+=good.amount*quantity;
 else s.dust+=good.amount*quantity;
 return null;
}
