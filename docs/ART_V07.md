# v0.7 아트와 음성 제작 기록

## 투명 구미호

- 원본: `public/art/gumiho.png` (보존)
- 게임용 결과: `public/art/gumiho-transparent-v07.png`
- 도구: imagegen 스킬의 기본 `image_gen.imagegen`, 원본 참조 편집
- 생성 결과: `exec-c4e70b64-3980-4bd8-8286-8f98eb39fd6a.png`

흰 사각 배경과 원형 배경·바닥 그림자·꽃잎을 제거해 진짜 알파 채널을 갖도록 편집했습니다. 얼굴, 흰 머리와 털, 붉은 한복, 장신구, 신발과 아홉 꼬리를 유지하고 전신을 담았습니다. 이미지 블렌딩으로 흰색을 지우지 않습니다.

사용 프롬프트:

> Use case: background-extraction. Edit target: original Gumiho game illustration. Remove ONLY entire ivory/white background, pale beige circular backdrop, floating petals and ground shadow; true transparent alpha. Preserve exact cute white-haired nine-tailed fox, face, red/ivory Korean hanbok, ornaments/shoes/pose/colors/all tails fine edges. White hair/clothing/fur opaque. Full body not cropped, no redesign/checkerboard.

## 이야기 음성과 전투 효과

`src/data/journeyScenes.json`에 프롤로그 4장면과 중간 이야기 60장면을 보관합니다. `scripts/generate-journey-audio.ps1`은 Windows 한국어 음성으로 22.05kHz 모노 PCM WAV를 만들며 원래 120장면과 함께 총 184개의 내레이션을 제공합니다. 전체 재생성은 `scripts/generate-story-audio.ps1`에서 두 대본을 모두 처리합니다.

전투 문양과 투사체는 `src/ui/combatEffects.ts`의 코드 기반 SVG이며 별도 이미지 생성이나 외부 다운로드를 사용하지 않았습니다.
