"""Build the spoken storyboard from the campaign text and authored scene direction."""
import ast
import json
import re
from pathlib import Path

root = Path(__file__).resolve().parents[1]
source = (root / 'src/data/campaign.ts').read_text(encoding='utf-8')
rows = ast.literal_eval(re.search(r'const ROWS[^=]*=(\[[\s\S]*?\n\]);', source).group(1))
# Three visual beats per chapter. No walking character sprites are used.
direction = [
 ('heirloom,forest,shadow','shadow,forest,gate','boar-shadow','dokkaebi','산신당에서 번져 나온 그림자가, 고요하던 마을의 밤을 바꾸고 있었다.','그림자를 따라가면, 사라진 사람들의 흔적을 찾을 수 있을 것이다.'),
 ('gate,ledger,shadow','ward,ledger,jades','underworld-reaper','gumiho','산 자와 죽은 자의 경계가, 누군가의 손에 의해 무너지고 있었다.','흩어진 경계옥과 사라진 명부. 이제 찾아야 할 것들이 분명해졌다.'),
 ('shrine,ledger,shadow','blessing,jades,blessing','shrine-shadow','samsindongja','산신령의 마지막 마음을 지켜야, 숲도 다시 숨을 쉴 수 있다.','태초석의 온기가 손끝으로 전해졌다. 숲 너머의 길이 열리고 있었다.'),
 ('cliff,sword,water','water,dragon,cliff','waterfall-drake','mangeomhon','폭포 아래 깊은 곳에서, 오래된 봉인이 낮게 울리고 있었다.','구름에 가려졌던 협곡의 상처가 조금씩 모습을 드러냈다.'),
 ('cliff,fire,ward','sword,ward,cliff','red-oni','story-swordsman','문파를 갈라놓은 불신 뒤에, 사룡을 깨우려는 손길이 숨어 있었다.','새 동료와 나란히 검을 들었다. 봉인의 근원으로 향할 때였다.'),
 ('dragon,fracture,sword','sword,blessing,dragon','cursed-dragon','mangeomhon','용의 잠이 끝나기 전에, 갈라진 문파의 마음을 다시 이어야 한다.','만검혼의 잔향이 사라져도, 버려진 검들이 남긴 뜻은 협곡에 머물렀다.'),
 ('fracture,cliff,dragon','dragon,jades,cliff','cursed-dragon','story-swordsman','무너지는 다리 위에서도, 동료들은 서로의 손을 놓지 않았다.','잠룡옥이 새로운 빛을 냈다. 다음 인연은 등불이 가득한 밤에 기다리고 있었다.'),
 ('festival,lantern,shadow','lantern,shadow,festival','alley-ghost','story-priestess','축제의 환한 얼굴 뒤에서, 검은 기운이 조용히 거리를 물들이고 있었다.','꺼지지 않는 등불을 따라, 뒤틀린 밤의 중심으로 들어섰다.'),
 ('shadow,ward,fire','ward,fire,blessing','fire-bandit','jeogyeom','여우무녀는 달아나지 않았다. 펼쳐진 부적들이 사람들의 피난길을 밝혔다.','붉은 불꽃이 잦아들자, 천 개의 등불이 한곳을 가리켰다.'),
 ('lantern,memories,shadow','ward,jades,festival','red-oni','gwijang','귀장이 말하는 하나의 세계에는, 아직 알 수 없는 슬픔이 깃들어 있었다.','등불옥을 품고 남쪽으로 향했다. 물의 사원이 다음 진실을 지키고 있었다.'),
 ('temple,water,storm','water,ledger,temple','stone-general','story-dancer','사원의 길잡이가 물결에 손을 얹었다. 수호자들의 분노는 자연스러운 것이 아니었다.','물 아래 흔적은 더 깊은 제단으로 이어졌다. 다툼을 멈출 실마리를 찾아야 했다.'),
 ('storm,dragon,ward','water,blessing,temple','thunder-bird','simyeon','하늘의 번개와 깊은 물의 힘이 부딪쳤다. 어긋난 흐름을 되돌려야 한다.','고요한 시선이 사라진 자리에서, 물의 사원은 잠시 평온을 되찾았다.'),
 ('dragon,water,mural','jades,mural,memories','cursed-dragon','gwijang','벽화는 오래전 세계가 갈라지던 순간을 기억하고 있었다.','귀장은 누구였을까. 오래된 영매의 기억을 따라, 별의 초원으로 향했다.'),
 ('stars,ancestor,wolf','stars,wolf,ancestor','silver-wolf','story-prophet','예언자는 별을 짚으며 말했다. 사라진 빛은 오래된 이름을 가리킨다고.','초원의 바람은 선조의 흔적을 실어 날랐다. 북쪽 제단에 답이 기다리고 있었다.'),
 ('wolf,fracture,stars','blessing,ancestor,stars','silver-wolf','jibu','땅속의 울림이 점점 가까워졌다. 무너지는 제단을 누군가가 떠받치고 있었다.','지부신구가 버틴 땅 위에서, 잊힌 기억으로 이어지는 길이 다시 열렸다.'),
 ('ancestor,memories,stars','jades,ancestor,jades','silver-wolf','story-prophet','먼 과거의 목소리가 현재의 당신을 불렀다. 모든 길은 하나의 인연으로 이어져 있었다.','성혼옥과 다른 경계옥들이 같은 빛을 냈다. 마지막 경계로 떠날 시간이었다.'),
 ('jades,ward,fracture','jades,gate,jades','stone-general','gwijang','다른 세계에서 만난 동료들이, 마지막 문 앞에서 한뜻으로 모였다.','여섯 빛이 하나의 원을 이루었다. 의식의 중심에는 아직 밝혀지지 않은 진실이 있었다.'),
 ('memories,ledger,ancestor','memories,shadow,fracture','gwijang','gwijang','경계가 지켜 준 것과, 경계가 가두어 버린 것. 귀장은 그 둘을 모두 기억했다.','귀장의 그림자 속에서 다른 이름이 꿈틀거렸다. 마지막 의식이 시작되고 있었다.'),
 ('jades,fracture,shadow','fracture,ward,sacrifice','gwijang','honwon','여섯 경계옥이 흔들렸다. 재봉인의 의식은 혼원이 기다리던 순간이었다.','귀장은 당신을 향해 손을 뻗었다. 남아 있는 시간은 길지 않았다.'),
 ('sacrifice,ward,jades','fracture,dawn,dawn','honwon','gwijang','서로 다른 세계에서 만난 모든 인연이, 하나의 빛으로 이어졌다.','새로운 아침이 다가왔다. 이제, 함께 살아갈 세계의 모습을 선택해야 한다.'),
]
chapters=[]
for i,(row,d) in enumerate(zip(rows,direction),1):
    intro,outro,foe,ally,extra_in,extra_out=d
    theme=0 if i<=3 else 1 if i<=7 else 2 if i<=10 else 3 if i<=13 else 4 if i<=16 else 5
    chapter={'chapter':i,'title':row[0],'theme':theme,'intro':[],'outro':[]}
    for part,visuals,text,extra,actor in [('intro',intro,row[3],extra_in,foe),('outro',outro,row[4],extra_out,ally)]:
        lines=[s.strip()+'.' for s in text.split('.') if s.strip()]
        while len(lines)<2:lines.append(extra)
        for j,(caption,visual) in enumerate(zip([lines[0],lines[1],extra],visuals.split(',')),1):
            chapter[part].append({'id':f'ch{i:02d}-{part}-{j}','caption':caption,'visual':visual,'actor':actor if j==2 else '', 'theme':theme})
    chapters.append(chapter)
output=root/'src/data/storyScenes.json'
output.write_text(json.dumps(chapters,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(f'{len(chapters)} chapters, {sum(len(c["intro"])+len(c["outro"]) for c in chapters)} narrated scenes')
