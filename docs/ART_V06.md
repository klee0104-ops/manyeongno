# v0.6 아트와 음성 제작 기록

imagegen 스킬의 기본 image_gen.imagegen으로 상점 내부와 할머니 표정 시트를 제작했습니다. 기존 요괴 그림은 유지합니다. 최종 파일은 원본을 복사해 사용하며 이미지 파일을 잘라 수정하지 않고 CSS에서 포즈를 선택합니다.

| 파일 | 용도 |
|---|---|
| public/art/shop-interior-v06.png | 따뜻한 등불과 창문이 있는 상점 내부 |
| public/art/granny-poses-v06.png | 투명 배경 2열 × 2행: 대기·눈 깜빡임·말하기·손을 펼친 표정 |
| public/audio/shop/*.wav | 한국어 인사·소환·일반 상점·구매·복귀 5개 대사, 약 35초 |

음성은 Windows Microsoft Heami Desktop TTS로 생성했습니다. `scripts/generate-shop-audio.ps1`과 `public/audio/shop/lines.json`에 대본을 보관합니다. 외부 음성 서비스 없이 재생합니다.

원본 생성 파일은 로컬 generated_images 보관 폴더에 보관합니다. 선택한 배경 원본은 exec-c90f082d-820f-43e5-b8d1-7ac0a2c92737.png, 할머니 최종 원본은 exec-473bd0a7-7e74-4a6e-9099-e1c21a21b46e.png입니다. 초기 4열 그림은 손이 가장자리에 걸쳐 최종본으로 사용하지 않았습니다.

일반 상점의 찻주전자·부적·강화석·정수병은 코드에서 그리는 SVG입니다. 요괴 대기 모션은 기존 도트 아트를 머리·상체·하체 영역으로 나눠 움직이는 방식이며, 새로운 전체 프레임 시트 65종을 제작한 것은 아닙니다.

## 상점 배경 프롬프트

Use case: stylized-concept. Create a game background asset, landscape 1536x1024, gorgeous hand-painted 2D Korean fantasy anime shop interior at night. A cozy supernatural traveling grandmother's shop, traditional wooden beams and carved lattice, many old medicine drawers, jars of herbs, rolls of talisman paper, jade gems, hanging amber lanterns, green bottles, a sleeping teapot on a little stove with steam. Spacious wooden counter running across lower third. Behind the counter left 40 percent is calm uncluttered softly lit area for a standing elderly shopkeeper character to be composited later. Right 50 percent darker open area with atmospheric shelves behind for overlaying two large UI choices. Back window shows a quiet indigo moonlit yokai town. Warm honey amber light, turquoise night shadows, burgundy cloth, polished antique wood, lush detailed painted textures, welcoming intimate atmosphere, not a real photograph, not 3D. NO people or characters, NO text, labels, symbols, letters, logos, UI, watermark. Clear perspective and strong cinematic composition. This must feel like arriving at a new location in a polished fantasy RPG.

## 할머니 초기 제작 프롬프트

Use case: game-character sprite-sheet. Create FOUR aligned sprite portraits of THE SAME lovely elderly Korean fantasy shopkeeper grandmother in exact one-row four-column grid. Wide canvas 2048x1024, four equal 512x1024 cells. TRUE TRANSPARENT background with alpha, no backdrop, no white sheet, no shadows on floor. Each frame shows same woman from waist to top of bun, full hands visible, at identical size and coordinates, with ample transparent padding between cells, character hair top y=150 and waist bottom y=920. She is clearly a warm wise elderly grandmother, fine facial wrinkles, silver-gray hair in low neat bun, small round spectacles on nose, burgundy and muted teal traditional hanbok, cream sleeves, jade pendant, herbal sachet at waist. Beautiful polished hand-painted 2D anime illustration, consistent with Korean fantasy chibi-inspired RPG but mature adult elderly proportions, sweet smile, no child face. Pose at slight three-quarter angle facing viewer right. Frame 1: relaxed welcoming pose, both hands gently folded, eyes open, mouth gently closed. Frame 2: EXACT SAME POSE as frame 1, closed eyes for blink, mouth closed. Frame 3: same body placement with right palm softly raised to welcome, eyes open, mouth slightly open while speaking. Frame 4: same body placement and raised palm, eyes smiling softly, mouth closed between words. Consistent outfit, face, anatomy, scale and silhouettes across all four frames. No writing, captions, borders, panel lines, watermarks, UI, cropped hair, cropped hands. Four separately usable alpha-transparent sprite cells. Not pixel art, not 3D.

## 할머니 2×2 포즈 정리 프롬프트

Edit the supplied sprite sheet. Keep EXACT same elderly grandmother identity, face, glasses, clothing, art style, colors and four expressions. Reorganize into a precise TWO COLUMN TWO ROW sprite atlas on square 2048x2048, each cell 1024x1024. Transparent alpha background. Top-left open eyes mouth closed hands folded. Top-right eyes closed mouth closed hands folded. Bottom-left eyes open smiling mouth slightly open one hand welcoming. Bottom-right eyes softly smiling mouth closed one hand welcoming. CRITICAL: each complete bust from head to waist and BOTH hands must fit comfortably inside its cell, at same coordinates and scale. Never touch the image edges or neighboring cells. At least 12% transparent padding on ALL FOUR SIDES of EACH square cell. Head at y14% of cell, waist at85%; body centered45% of cell, raised hand must stay inside86% of cell. Absolutely no cropped fingers or neighboring character fragments. The previous wide sheet clipped the fourth hand and overlapped neighbor cells; correct those layout problems. Keep transparent clean gutters, no text, no background, no border. This is a game sprite atlas.

