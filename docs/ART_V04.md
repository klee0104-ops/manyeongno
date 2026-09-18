# 만령로 v0.4 이미지 제작 기록

2026-09-18. imagegen 스킬의 **내장 이미지 생성 도구**를 사용했습니다. 외부 API/CLI는 사용하지 않았습니다. 출력은 프로젝트의 `public/art/`에 복사했습니다. 원본과 이전 버전은 보관했습니다.

|자산|실제 사용 파일|
|---|---|
|6종 진명 일러스트|awakened-atlas.png|
|6종 진명 도트, 4자세|pixel-awakened.png|
|6지역 배경|regions-atlas.png|
|요괴 24종 A|roster-a-atlas.png|
|요괴 24종 B|roster-b-atlas.png|
|추가 요괴 1종, 동료 4종|roster-c-atlas-v2.png|
|주요 보스 6종|bosses-atlas.png|

## 검수와 표현 범위

- 새 이미지의 실제 알파 채널을 확인했습니다. 도구 미리보기에서 배경색이 보여도 파일은 투명 알파를 포함합니다.
- 행 간격을 픽셀 단위로 측정해 `src/ui/pixel.ts`의 UV 범위를 보정했습니다.
- C 시트는 검 끝이 이웃 칸으로 넘어가는 문제를 발견해 내장 도구로 여백을 넓혀 다시 제작했습니다.
- 대표 6종은 기본 및 5각성 전용 일러스트와 4자세 도트를 사용합니다.
- 기존 몬스터 6종은 4자세 도트입니다. 추가 요괴/동료와 보스는 개별 한 자세의 래스터 자산에 이동·돌진·반동·시전 애니메이션을 적용합니다. 모든 캐릭터에 8방향 프레임을 제작한 상태는 아닙니다.
- 그 외 요괴의 5각성은 오라와 능력 강화이며, 별도 진명 일러스트는 아직 없습니다.

## 대표 요괴 6종의 진명 일러스트

```text
Use case: stylized-concept. Asset: transparent 3-column by 2-row portrait atlas for Korean fantasy RPG. Input image is identity/style reference for six characters, not edit target. Generate the distinct FINAL AWAKENED forms of all six, full bodies completely contained inside their own equal 512x512 cell of a 1536x1024 transparent PNG. No borders no writing. Top row: 1 blonde sprout-haired ginseng child, now a jade-and-ivory forest oracle holding branching living staff, leaf crown and flowing leaf cloak; 2 silver-haired sword spirit woman, now midnight navy and platinum armored swordmaster with six radiant floating blades and long split coat; 3 red-haired horned fire boy, now crimson and black oni sovereign with enormous angular golden burning gauntlets and flame mantle. Bottom row: 4 long teal-haired aquatic woman, now deep blue and pearl ocean empress, two large luminous folding fans, fin crown and wave cape; 5 short brown-haired earth turtle girl, now powerful bronze-and-jade guardian, big hexagonal tortoise tower shield clearly on one arm and stone hammer in other, armored broad skirt and turtle-shell crown; 6 white-haired nine-tailed fox woman, now celestial white and deep red hanbok with gold constellation embroidery, moon circlet, fox ears and nine luminous peach-tipped tails, a ritual bell and red talismans. Preserve each original face/hair species and polished chibi Korean reference style, 2.7-head bodies, beautiful detailed costumes. Dramatically different equipment and silhouette for every character. Each whole character including weapon halo tails feet fits within its cell with 30px clear padding. Genuine alpha-transparent background.
```

## 진명 도트의 4개 자세

```text
Use case: style-transfer. Reference is six final-awakened character designs. Create their production PIXEL ART animation atlas, 1024x1536, exactly FOUR columns and SIX equal 256px rows. Transparent background. Each row same character four frames: idle, left-foot stepping, right-foot stepping, strong unique attack pose. 2.5-head chibi, detailed crisp square 16-bit pixels, face 3/4 RIGHT, all feet aligned at y=230 relative to cell. Keep weapons/hair entirely inside each 256x256 cell with 20px margin. Row 1 blonde forest oracle flower crown, green ivory dress, tall living branch staff; attack raises staff leaves. Row2 silver-haired navy/platinum swordmaster, long split coat, sword + six floating blades, attack lunging slash. Row3 red-haired horned king with heavy golden gauntlets, attack heavy punch. Row4 teal-haired blue/pearl water empress with TWO folding fans and fin crown, attack wide fan sweep. Row5 brown-haired jade/bronze turtle girl with HUGE hexagonal tower shield and stone hammer, attack shield bash. Row6 white-haired nine-tailed fox in red/white/gold hanbok with moon circlet, bell and talismans, attack releasing talismans. Must preserve reference faces/hair/outfits and especially distinct weapons; NO identical girl silhouettes. FOUR poses for each of SIX characters, NO text no lines no ground no grid borders, genuine alpha. Ensure exact rows prevent cropping.
```

## 여섯 지역 배경

```text
Use case: stylized-concept. Game environment atlas, 1536x2048 portrait PNG, exactly TWO columns by THREE rows, each equal 768x682 tile has a complete wide 2D pixel-art RPG battle background. No borders or text, no people/creatures. Rich detailed high-end 16-bit pixel art consistent pixel size. Top left: Korean moonlit mossy forest shrine jade-green, amber stone lantern at left and right edge. Top right: Chinese wuxia mountain canyon at sunset, red pavilion high cliffs bamboo, lanterns both sides. Middle left: Japanese ghost festival street at night, amber red paper lanterns hanging on edges, shrine roofs in distance. Middle right: Southeast Asian jungle temple twilight, emerald carved ruins and gold ornaments, braziers at sides. Bottom left: Mongolian starry steppe midnight indigo, distant yurts prayer flags stone ovoo, small campfire at sides. Bottom right: fractured boundary between mortal and underworld, floating ruins pale white jade fragments in ink-purple void, blue lanterns at sides. CRITICAL layout within every tile: horizon upper quarter, lower 65% is broad EMPTY WALKABLE ground occupying almost full width: paving, earth, stone, or grass. No big foreground objects obscuring fighters, no cliffs/streams dividing battleground. Dim but readable warm pixel lighting, calm adventure atmosphere. Every tile equally sized precisely aligned.
```

## 추가 요괴 A

```text
Use case: stylized-concept. Asset: production RPG pixel-art creature atlas. Exactly FOUR columns by SIX rows (24 cells), portrait 1024x1536. Every cell contains ONE completely different creature, full body, 20px transparent padding on every side, feet aligned near cell bottom. Transparent alpha background, NO words, NO borders, no shadows outside cells. Strict hard square pixel edges, high-end detailed 16-bit pixel art, cute 2.5-head humanoids and varied animal shapes. Korean/East Asian fantasy, consistent lighting and pixel scale, face THREE-QUARTER RIGHT in action-ready pose. Human women must have distinct weapons, silhouettes, hairstyles. Row-major ordered list, left to right then next row:
1. majestic golden nine-tailed fox, white-red shrine robes, sun disk, fire beads
2. silver wolf-headed celestial king, broad indigo-gold armor, round star shield and spear
3. elderly white-haired sword sage, black-white robes, long silver sword, floating jade sword ring
4. long turquoise coiled water dragon with pearl crown, ivory horns, flowing whiskers
5. green-robed underworld magistrate, tall black hat, huge brush and book
6. orange quadruped fox with three blazing tails and golden forehead jewel
7. tall purple-red floating ghost flame wearing a cracked smiling mask, many small soul wisps
8. stocky blue oni with red eyes, heavy brown armor, huge stone club and shield
9. golden eagle spirit with lightning wings and jeweled head crest
10. silver-armored female guardian, short dark blue hair, large diamond shield and spear
11. large silver quadruped wolf with blue moon runes and flowing dark mane
12. hooded blue-grey skeletal ferryman, wide straw hat, long wooden oar and lantern
13. tiny slender green bamboo stalk creature, leafy bamboo arms, tiny bamboo flute
14. small red fiery masked bandit with two daggers and spiky orange hair
15. brown-red flying hawk with long fiery tail feathers
16. heavy grey stone general statue with square helmet, huge rectangular shield and poleaxe
17. stacked round guardian stones with blue prayer ribbons, little glowing eyes and stone arms
18. animated bronze temple bell with elephant pattern, little limbs, golden sound rings
19. elegant white crane with red crown, black wing tips, jade ribbon
20. blue water otter spirit holding a pearl on lotus leaf, flowing aquatic scarf
21. small translucent icy bear with crystal shoulders, snowflake shield
22. bright lime poison frog with purple spots, leaf cape, reed blowpipe
23. brown jungle monkey with leaf headband, curled tail, bamboo staff
24. small russet fox cub with one flame tail and leaf ear
Precisely equal cells; each character must remain fully inside its own cell. Do not merge characters or omit any. No smooth painted rendering, pixel art only.

```

## 추가 요괴 B

```text
Use case: stylized-concept. Asset: production RPG pixel-art creature atlas. Exactly FOUR columns by SIX rows (24 cells), portrait 1024x1536. Every cell contains ONE completely different creature, full body, 20px transparent padding on every side, feet aligned near cell bottom. Transparent alpha background, NO words, NO borders, no shadows outside cells. Strict hard square pixel edges, high-end detailed 16-bit pixel art, cute 2.5-head humanoids and varied animal shapes. Korean/East Asian fantasy, consistent lighting and pixel scale, face THREE-QUARTER RIGHT in action-ready pose. Human women must have distinct weapons, silhouettes, hairstyles. Row-major ordered list, left to right then next row:
1. coiled coral red rattlesnake with gold bell tail and small temple crown
2. mischievous tiny orange fireball goblin holding two sparklers
3. round tan alley goblin with big ears, striped scarf and sling
4. little sand-colored skeleton lizard with bone club and cracked pot helmet
5. small stout stone child with straw rain cape, bronze handbell and wooden shield
6. floating white theatrical festival mask with flowing red tassels and two paper arms
7. grey-white falcon perched with spread wings and blue ankle ribbons
8. sentient rusty broken sword floating in pale silver ghost cloth
9. round turquoise steam ghost with towel on head, little wooden bath bucket
10. short blue-haired water child wearing white-blue short hanbok, reed flute and fish companion
11. tiny teal serpentine dragon with tiny horns and waterfall tail
12. tiny green leaf fairy with bamboo-leaf wings and acorn hood
13. floating moss-covered stone with tiny roots, gold eyes and small sprout
14. cute golden firefly spirit with translucent wings and glowing orange abdomen
15. small red mosquito imp with big eyes, long nose and transparent wings
16. cute orange campfire creature sitting on three brown logs, coal eyes
17. single-eyed tan goblin with stubby legs, stone shield and little horn
18. round brown pebble goblin with tiny arms and square rock fists
19. little reddish clay child statue with lotus leaf hat and clay bowl
20. small grey rat yokai with coin in paws, tied red headband and curled tail
21. smooth silver pebble sprite with crystalline metallic fins and purple eyes
22. floating old bronze coin with square hole face, small ghost arms and red string
23. clear blue teardrop-shaped water ghost with bright face and two little fins
24. round murky olive-blue puddle creature with floating twig hat and mud bubbles
Precisely equal cells; each character must remain fully inside its own cell. Do not merge characters or omit any. No smooth painted rendering, pixel art only.

```

## 동료와 추가 요괴 C

```text
Use case: stylized-concept. Asset: production RPG pixel-art creature atlas. Exactly THREE columns by TWO rows (6 cells), landscape 1536x1024. Every cell contains ONE completely different creature, full body, 20px transparent padding on every side, feet aligned near cell bottom. Transparent alpha background, NO words, NO borders, no shadows outside cells. Strict hard square pixel edges, high-end detailed 16-bit pixel art, cute 2.5-head humanoids and varied animal shapes. Korean/East Asian fantasy, consistent lighting and pixel scale, face THREE-QUARTER RIGHT in action-ready pose. Human women must have distinct weapons, silhouettes, hairstyles. Row-major ordered list, left to right then next row:
1. tiny pale aqua dewdrop fairy carried on a curved green leaf, glasslike wings
2. elderly grey-bearded wandering swordsman with weathered straw hat, white robes and iron sword
3. black-haired fox shrine maiden, red ears, amber-white robes and fan of red paper talismans
4. brown-skinned temple dancer, black braided hair, ornate gold crown, emerald flowing scarf and lotus
5. elderly steppe shaman with white braids, indigo deel, bone necklace and crooked star staff
6. stocky dark purple corrupted wild boar monster with big ivory tusks and smoky mane, on four legs.
Precisely equal cells; each character must remain fully inside its own cell. Do not merge characters or omit any. No smooth painted rendering, pixel art only.

```

## 동료 시트 여백 수정

```text
Use case: precise-object-edit. Edit target is the attached production pixel-art character atlas. Keep all six character identities, exact row-major order, same beautiful crisp pixel style and transparent alpha background. Fix ONLY framing/layout: precisely three columns and two rows of equal 512x512 cells in a 1536x1024 PNG. Reduce each entire character and all its effects/weapons uniformly so there is at least 55 pixels EMPTY TRANSPARENT PADDING around every character within each cell. Especially the swordsman's entire sword must remain in the middle top cell, never enter the fox maiden's cell. Dancer crown never enters top row. Nobody's feet, scarf, ears, sword, tails, leaf or staff may cross their cell boundary. Every full figure centered in own cell, no text no visible grid lines no borders. This will be sliced automatically, so margins are mandatory. Keep full bodies undistorted and no added characters.
```

## 주요 보스

```text
Use case: stylized-concept. Production fantasy RPG BOSS pixel-art atlas, 1536x1024, exactly THREE columns by TWO rows. Each equal 512x512 cell contains one complete enemy fully isolated with 35px transparent padding, no text borders ground. Genuine transparent background. Sharp high-end 16-bit pixel art, expressive detailed monsters facing three-quarter LEFT, ominous but suitable for a beautiful adventure game. Top row left: corrupted dark violet wild BOAR with ivory tusks, bulky four-legged body, smoky mane and glowing magenta eyes. Top middle: a black-clad underworld GRIM REAPER magistrate wearing tall black Korean gat, ghostly pale face, long hooked chain and scroll. Top right: a corrupted FOREST GOD SHADOW, enormous twisted black tree stump with antler branches, hollow glowing eyes, spectral green roots forming claws, not a friendly elder. Bottom left: a huge coiled black-purple serpentine DRAGON with crimson eyes, cracked jade scales, large horns and two clawed arms. Bottom middle: GWIJANG tragic primordial human medium, long white hair, pale face, tattered black and ivory robes, six floating broken talismans, one arm ink-corrupted, sinister elegant tall silhouette. Bottom right: HONWON primordial chaos final boss, faceless obsidian humanoid with enormous torn purple halo, four angular arms, six glowing colored jade fragments embedded in cracked torso, floating detached dark stone armor, radically different from human. Whole bodies/weapons/halos contained within cells. Keep precise equal grid and varied monster silhouettes.
```

