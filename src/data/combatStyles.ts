import { spiritById } from './gameContent';
export interface CombatStyle { weapon:string; motion:string; effect:string }
export const COMBAT_STYLES:Record<string,CombatStyle>={
  samsindongja:{weapon:'생명의 인삼 지팡이',motion:'지팡이를 심어 잎의 치유진을 펼칩니다.',effect:'leaf'},
  mangeomhon:{weapon:'장검과 부유검',motion:'낮은 자세에서 파고들며 검기를 가릅니다.',effect:'blade'},
  jeogyeom:{weapon:'용암 권갑',motion:'주먹을 내질러 폭발하는 화염을 터뜨립니다.',effect:'flame'},
  simyeon:{weapon:'쌍월 물결 부채',motion:'두 부채를 회전시켜 커다란 파도를 일으킵니다.',effect:'tide'},
  jibu:{weapon:'현무 방패와 돌망치',motion:'방패를 세워 버티며 대지의 보호막을 펼칩니다.',effect:'stone'},
  gumiho:{weapon:'영혼의 방울과 붉은 부적',motion:'방울을 울리고 부적 사이로 여우불을 보냅니다.',effect:'foxfire'},
  sangun:{weapon:'산군의 발톱',motion:'육중하게 디디며 발톱으로 전열을 지킵니다.',effect:'claw'},
  jungnimbaem:{weapon:'대나무 독니',motion:'몸을 낮추고 빠르게 튀어 올라 공격합니다.',effect:'venom'},
  japchojeongryeong:{weapon:'새싹의 꽃가루',motion:'작은 몸을 흔들어 초록빛 꽃가루를 흩뿌립니다.',effect:'bloom'},
  'heugmu-imugiwang':{weapon:'흑무의 용주',motion:'몸을 감아 올리고 보랏빛 용기를 내뿜습니다.',effect:'storm'},
  mansudogun:{weapon:'천년목의 지팡이',motion:'지팡이를 들어 오래된 뿌리의 힘을 깨웁니다.',effect:'roots'},
  dokkaebi:{weapon:'가시 도깨비 방망이',motion:'방망이를 크게 휘둘러 묵직하게 내려칩니다.',effect:'club'},
};
export const combatStyle=(id:string):CombatStyle=>COMBAT_STYLES[id]??(()=>{const d=spiritById(id);return {weapon:d.role==='수호'?'수호의 방패':d.role==='치유'?'생명의 기운':d.element==='금'?'영혼의 칼날':d.element==='수'?'물결의 술법':d.element==='화'?'불꽃의 일격':'정령의 힘',motion:d.role==='수호'?'전열로 나아가 단단하게 받아칩니다.':d.role==='치유'?'치유의 빛을 동료에게 전합니다.':d.role==='공격'?'적에게 파고들어 일격을 가합니다.':'오행의 투사체를 날립니다.',effect:d.role==='치유'?'leaf':d.role==='수호'?'stone':({목:'venom',화:'flame',토:'club',금:'blade',수:'tide'}[d.element])};})();
