# 만령로 v0.3 아트와 전투 표현

내장 image_gen으로 생성했습니다. CLI/API 외부 경로는 사용하지 않았습니다. 참조 일러스트의 한복 색상과 요괴 특징을 유지하면서 무기·자세·실루엣·전투 동작을 다시 구성했습니다. 아트는 프로젝트 public/art에 저장하며 완성 빌드에도 포함됩니다.

| 요괴 | 무기와 전투 표현 |
| --- | --- |
| 삼신동자 | 인삼 지팡이를 심어 생명의 잎과 치유진을 전개 |
| 만검혼 | 장검·부유검, 낮은 자세에서 검격과 전진 |
| 적염귀왕 | 용암 권갑, 크게 내지르는 화염 주먹 |
| 심연마갈 | 물결 쌍부채, 회전하는 파도 |
| 지부신구 | 현무 등껍질 방패·돌망치, 웅크려 버티는 수호 자세 |
| 구미호 | 금빛 방울·붉은 부적·아홉 꼬리, 부적과 여우불 |
| 산군·죽림뱀·잡초정령·흑무 이무기왕·만수도군·홍도깨비 | 발톱·독니·꽃가루·용주·지팡이·방망이로 구분 |

스프라이트는 4열(대기/왼발/오른발/전투)이며 생성 이미지의 실제 행 간격에 맞춰 UV 영역을 정의했습니다. 원본 PNG를 임의로 축소하거나 색상 필터로 도트화하지 않았습니다. 코드에서 프레임을 선택하고 효과와 이동을 합성합니다. 신물 장착은 능력치에 반영되며, 캐릭터의 고유 무기가 장착 아이템에 따라 교체되는 시스템은 아닙니다.

도감의 전투 미리보기는 미보유 요괴에서도 사용할 수 있습니다. 지부신구의 보호막은 실제 전투의 수호 역할 효과와 연결됩니다. 일러스트 크게 보기는 정사각형 원본 프레임을 유지하고, 구미호는 사용자가 제공한 전신 원본을 사용합니다.

배경음악 ‘달빛을 따라’는 로컬 Web Audio 신시사이저로 연주하는 창작곡입니다. 72 BPM의 32마디 선율에 현 아르페지오·피리·잔잔한 패드·종소리를 겹칩니다. 외부 음원을 사용하지 않습니다. 브라우저 자동 재생 제한에 따라 사용자의 첫 클릭 이후 재생하며, 음소거·음량·페이지 비활성 시 정지를 지원합니다.

## 최종 프롬프트

```json
{
  "tool": "Built-in image_gen (not CLI)",
  "acceptedAssets": [
    {
      "path": "public/art/pixel-spirits-v2.png",
      "prompt": "Use case: stylized-concept, character-specific pixel RPG sprite sheet. Reference is character identity and Korean hanbok colors ONLY. Completely REDESIGN each character's combat silhouette, weapon, stance, and action. Six rows of DIFFERENT readable classes, NOT six recolors of a pointing girl. Transparent alpha PNG 1024x1536, exactly 4 equal columns and 6 equal rows, each cell256 square. Columns: combat idle, walking left foot, walking right foot, unique class action. All face three-quarter RIGHT; feet on same baseline within cells; scale each whole subject to leave 12% margin around every cell, including weapons and tails. Crisp chunky authentic pixel art, 64x80 logical-pixel chibi sprites enlarged, no smooth painting. Row1 SAMSIN: small blonde sprout girl, pale green hanbok, TWO hands on a tall crooked living ginseng staff topped by a glowing leaf bud; serene healer stance, forward lean, last frame plants staff and conjures a SMALL green leaf healing circle. Row2 MANGEOM: silver ponytail swordswoman, white/silver short layered hanbok with dark fitted trousers, katana held low diagonally, sheath at hip, two small hovering silver blades behind shoulder; athletic wide-legged asymmetrical stance; last frame strong horizontal sword slash, NOT empty-hand casting. Row3 FIRE KING: red horned boy, black/red sleeveless martial hanbok and huge black molten gauntlets, grounded fists-up boxer stance; last frame explosive forward flaming punch. Row4 SIMYEON: long teal hair fin-ear water mage, flowing long blue hanbok; BOTH hands wield open crescent-shaped blue fans, elegant sideways dancer stance on small water swirl; last frame overhead double-fan sweeping wave arc. Row5 JIBU: short brown bob turtle girl in ochre tan hanbok with green armor plates, broad low sturdy tank stance, HUGE prominent hexagonal tortoise-shell SHIELD in LEFT hand in front of torso and a short square stone hammer in RIGHT hand; visible eyes above shield. Last frame crouching behind raised shield braced against impact, stones lifting, completely distinct defensive silhouette. Shield in ALL FOUR frames. Row6 GUMIHO: white fox ears and white hair, white/red Korean hanbok, broad peach-tipped nine-tail fan silhouette, one hand holding a small GOLD RITUAL BELL and the other with several RED PAPER TALISMANS, composed sideways shaman stance; last frame throws talismans forward while tails flare and three foxfire wisps emerge. Distinct weapon shapes, idle posture and action per row are CRITICAL. NO shared pointing pose. No text, no labels, no scenery, no grid borders, no color panels. Actual transparent background alpha."
    },
    {
      "path": "public/art/pixel-monsters.png",
      "prompt": "Use case: style-transfer. Create a production transparent pixel RPG sprite atlas based on six creatures in reference. Portrait1024x1536, EXACTLY4columns and6rows of equal256x256cells. 24 fullbody sprites with generous10percent transparent margins. Each row same creature four poses: idle, step left, step right, attack. All facing slightly RIGHT. Strict grid consistent sizes and foot baselines. Actual transparent alpha background, remove all scenery, NO panels, NO colored background, no text, no labels. Authentic chunky crisp pixel art SD game sprites approximately64x80 logicalpixels enlarged. Row1 orange tiger guardian in green gold Korean robe. Row2 green bamboo snake. Row3 round palegreen leaf sprout spirit. Row4 purple serpentine dragon with horns. Row5 gentle small elderly tree deity with white beard greenrobe antler branches and wooden staff. Row6 red horned smiling dokkaebi goblin with club. Preserve the distinct character designs from the reference, but entirely replace painted style with cute consistent pixel art sprites. All tails limbs staff club contained in each cell. No overlap. TransparentPNG."
    },
    {
      "path": "public/art/pixel-forest.png",
      "prompt": "Use case: stylized-concept. Asset type: 2D pixel art Korean fantasy RPG opening background and battlefield. Wide1536x1024. A serene enchanted forest at blue hour, a winding stone trail and shallow stream leading toward a distant traditional Korean pavilion with tiny warm lanterns, old pines, distant misty blue mountains, a small pale moon peeking between trees, teal grasses and white wildflowers. Strong depth, darker foreground vegetation frames edges, large tranquil clearing in the LOWER HALF, open unobstructed ground to place gameplay sprites. Beautiful hand-crafted 16bit pixel art with crisp square pixel clusters, restrained detailed palette, subtle cyan water reflections, jade teal foliage, warm amber lanterns, quiet sense of inviting adventure. Artful and immersive like a premium indie RPG. No people, no characters, no text, no logo, no UI. Keep center clearing and right center visually calm for title overlay, sky at top subtle. No smooth painting or photographic texture, intentional pixel art."
    }
  ]
}
```
