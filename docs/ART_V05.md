# v0.5 아트 제작 기록

생성 도구: 기본 제공 `image_gen.imagegen` (imagegen 스킬). 기존 사용자 참조 캐릭터는 유지하고 배경 3장을 새로 제작했습니다. 이미지 파일 자체를 잘라 편집하지 않고 CSS에서 패널 위치를 지정합니다.

| 파일 | 용도 |
|---|---|
| `public/art/library-v05.png` | 만령서고 배경 |
| `public/art/story-worlds-v05.png` | 여섯 지역의 2열 × 3행 장면 배경 |
| `public/art/story-relics-v05.png` | 유품·명부·경계옥·새벽의 2열 × 2행 장면 |

원본 생성 파일은 `로컬 generated_images 보관 폴더`에 보관했습니다. 프로젝트에는 복사본을 사용합니다.

## 서고 프롬프트

Use case: stylized-concept. Asset: game environment background, landscape 1536x1024. A quiet, magnificent traditional Korean fantasy library at night, no people or creatures. Hand-painted 2D anime background, sophisticated cinematic lighting, delicate brush textures. Tall dark walnut bookshelves filled with old thread-bound East Asian books and rolled scrolls, a circular moon window in the back, warm amber lanterns, carved lattice wood, hanging pale silk, gentle golden dust in beams. Broad reading table in lower foreground with empty space for game UI books. Symmetrical but organic perspective, shelves framing the left and right, darker uncluttered central reading space. Deep teal shadows, old bronze, parchment ochre, warm gold. It should feel like entering a hidden spirit archive in a beautiful animated film. No readable writing, no logos, no watermark, no UI, no pixels, no book held by hands. Full environment illustration.

## 여섯 지역 프롬프트

Use case: stylized-concept. Asset: SIX wide cinematic background panels packed in an exact 2-column 3-row grid, total 2048x1728, each panel 1024x576 with 16:9 composition. Full-bleed panels, no gutters or borders. Hand-painted 2D animation backgrounds for Korean supernatural adventure, beautifully painted with crisp delicate linework, cinematic atmospheric depth, NOT pixel art, NOT 3D. NO people, humanoids, animal characters, text, labels, UI. Row1 left: ancient Korean forest shrine at moonlit night, mist on stone steps and old trees, eerie emerald pools of light. Row1 right: immense cloud canyon with waterfalls and a distant Chinese-style sword sect pavilion on a cliff, sunset gold and slate blue. Row2 left: deserted yokai festival town with vermilion torii, hundreds of glowing paper lanterns over a bridge, indigo night. Row2 right: dense Southeast Asian jungle surrounding a naga temple, turquoise water reflecting colossal serpent stone statues, bioluminescent vegetation. Row3 left: Mongolian grassland under a vast star-filled sky, small stone ovoo altar with ribbons, silver blue and lavender wind. Row3 right: shattered celestial shrine floating over a luminous abyss, six empty stone pedestals, broken rings, pale gold and midnight violet. All panels balanced for scene overlays and slow camera parallax, center and lower third quiet. The panels must be visually distinct in architecture and lighting, same polished 2D animated-film art style. Exact grid alignment.

## 이야기 소품 프롬프트

Use case: stylized-concept. Asset: 2 by 2 grid of four cinematic illustration plates for a Korean fantasy 2D animated story. Overall landscape 2048x1152, each equal cell 1024x576. Seamless grid no gutters, captions, text, borders or UI. Hand-painted high-quality 2D anime film still, textured ink and gouache, NOT pixel art, NOT 3D. No people or character bodies. Top left: close-up of grandmother's old wooden table in a Korean cottage at night, an unfurled antique mountain map with NO legible lettering, a closed cloth talisman pouch, thread-bound old diary, one candle, moonlight and warm gold; quiet intimate inherited promise. Top right: close-up of a sinister ancient ledger floating open, torn paper pages and black ink smoke twisting through an old stone gate, teal rimlight against almost black background; supernatural corruption. Bottom left: six differently colored glowing jade stones orbiting an ancient circular stone altar above a void, pale threads of light connect them, beautiful suspenseful celestial magic. Bottom right: sun breaking through storm clouds above an East Asian mountain valley with rivers and rooftops, pale peach dawn, black shadow dispersing into golden dust, hopeful ending. Each composition stands alone, depth and visual storytelling, lower third quiet for subtitles, exact equal 2x2 cells.
