# 일러스트 아틀라스 경계 수리 원본

`roster-d-base.png`와 `roster-d-stage-1.png`부터 `roster-d-stage-5.png`는 재패킹 전 실제 production 파일의 보존본이다. 기존 파일을 덮어 보관하지 않는다. `awakening-manifest-before.json`은 수리 전 manifest다.

문제: 명목상 3열 2행/512px 경계와 생성 이미지의 실제 인물 경계가 달라 강시 각성2 아래에 연등 머리, 설녀 각성3 오른쪽에 우산 조각이 들어오고 우산 각성3의 왼쪽이 잘렸다.

수리: `scripts/pack-folklore-illustrations.mjs`가 행·열 양쪽에서 알파16 초과 픽셀이 없는 실제 빈 경계를 구한다. 급한 머리카락/우산 경계도 빈 공간을 따라 이동하며, 원본 RGBA를 유지한 채 각 인물의 전체 알파 범위를 512×512 셀에 종횡비를 유지하여 배치한다. 최소 약32px 여백을 둔다. 원본 그림의 몸체를 잘라 숨기거나 새로운 팔다리를 합성하지 않았다.

각성4는 강시와 아래 연등의 몸체가 실제로 연결되어 기계적으로 분리할 수 없었다. 내장 `image_gen`에서 기존 4단계 얼굴·의상·장비·포즈를 유지하고 각 인물 사이 여백만 늘리는 교정을 했다. `roster-d-stage-4-v2.png`가 채택된 교정본이며, `stage4-repair-prompt.json`에 프롬프트와 입력·출력 경로가 있다. 설녀는 부채, 청사는 쌍단검을 유지한다. 다른 다섯 atlas는 기존 원본 픽셀의 기술적 패킹이다.

검증 결과:

- `node scripts/pack-folklore-illustrations.mjs --verify`: 6 atlas/36일러스트 PASS, 모든 셀의 3px 가장자리에 알파 픽셀 0, source/output SHA 일치.
- 기존 25개 각성 manifest 항목의 내용 불변. 이번 수정에서 갱신한 항목은 `roster-d` 각성1~5의 SHA와 규격뿐이다.
- 실제 UI 36칸 재캡처: `tmp/qa-v019/awakening-gallery.jpg`; 수리 전 비교: `tmp/qa-v019/awakening-gallery-before-repack.jpg`.
- 갤러리에서 이웃 머리·금색 우산 조각이 사라졌고 우산 각성3의 전체 윤곽, 각 인물의 신발·머리카락·장비가 셀 안에 보이는 것을 확인했다.

`packing-results.json`에 원본/산출물 SHA, 인물별 원본 경계, 배율, 산출물 경계, 알파 빈 분할 경계를 기록한다. 원본 캔버스 밖에 이미 없던 그림은 기술적 패킹으로 새로 그리지 않는다. 최종 게임 하네스와 배포 검증은 통합 담당이 수행한다.
