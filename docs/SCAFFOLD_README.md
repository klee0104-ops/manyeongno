# 만령로(萬靈路) — 핵심 루프 최소 골격

오행 상성 기반 가챠 수집 RPG "만령로"의 웹 프로토타입 스캐폴드. 20챕터 × 400스테이지 방치형/수집형
게임의 전체 기획 중, **1지역(적요림) 기준 핵심 루프 하나만 실제로 동작하는 최소 골격**이다.

- 스택: TypeScript + Phaser 3 + Vite + Vitest + ESLint — GUI 없이 `npm run verify` 한 줄로
  타입체크·린트·테스트·빌드까지 전부 headless로 검증 가능하도록 의도적으로 선택했다.
- 현재 실제로 플레이 가능한 것: 메인메뉴 → 스테이지 전투(오토배틀 시뮬레이션) / 가챠 소환.
- 나머지(전체 로스터, 스킬 연출, PVP, 길드, 수익화 등)는 이 문서 하단 "TODO"에 정리해뒀다.

## 이 문서를 읽는 에이전트에게

이 저장소는 **Claude Fable 5를 염두에 두고** 구성했다. 아래 순서로 작업할 것을 권장한다.

1. `docs/DESIGN_REFERENCE.md`를 먼저 읽는다 — 코드 구현에 필요한 수치·공식 발췌본이다. 이 저장소에는
   원본 기획 문서 전체가 포함되어 있지 않다(원본은 Claude Project `모바일 게임`의
   `방치형게임_기획브리핑.md`에 있음 — 접근 가능하면 그쪽이 항상 우선한다).
2. 아무 코드나 만지기 전에 `npm install && npm run verify`를 한 번 실행해 baseline이 깨끗한지 확인한다.
3. 기능을 추가/수정할 때마다 **매번** `npm run verify`를 실행하고, 실패하면 원인을 고친 뒤 커밋한다.
   이 스캐폴드는 에이전트가 스스로 오류를 검증하며 반복할 수 있도록 만들어졌다 — 이 습관이 핵심이다.
4. 기획서에 근거가 없어 임의로 정한 값은 반드시 파일 상단에 `⚠️ PLACEHOLDER` 주석으로 표시되어 있다
   (`src/config/unitBaseStats.ts`, `src/systems/gacha.ts`의 `rampFiveStarChance`,
   `src/systems/enemyStat.ts`의 `splitEnemyStat` 등). 이런 값을 실제 밸런싱 수치로 교체할 때는
   해당 함수/모듈만 바꾸면 되도록 이미 분리해뒀으니, 그 경계를 유지할 것.
5. 기획서 수치를 코드로 옮길 때는 `docs/DESIGN_REFERENCE.md`나 기획 문서의 섹션 번호를 주석으로
   남긴다(기존 코드 전반의 컨벤션 — 예: `// 15-3: 데미지 계산 공식`). 나중에 기획이 바뀌었을 때
   어떤 코드가 어떤 문단에서 왔는지 추적하기 위함.
6. 신규 시스템을 추가할 때도 동일 패턴을 유지: `src/types`(타입) → `src/systems` 또는 `src/config`
   (순수 로직/데이터, DOM·Phaser 의존 없음) → `src/scenes`(Phaser UI 연결). 순수 로직을 Phaser와
   분리해두면 `tests/`에서 Phaser 없이 유닛테스트가 가능하다 — 이 구조를 깨지 말 것.

## 실행

```bash
npm install
npm run dev        # 개발 서버 (http://localhost:5173)
npm run verify      # typecheck + lint + test + build 전체 실행
```

개별 명령:
```bash
npm run typecheck   # tsc --noEmit
npm run lint         # eslint src
npm run test          # vitest run
npm run test:watch    # vitest (watch 모드, 사람이 개발할 때용)
npm run build          # 프로덕션 빌드 (dist/)
npm run preview          # 빌드 결과 미리보기
```

## 폴더 구조

```
src/
  types/            # 순수 타입 정의 (unit.ts, stage.ts, player.ts)
  systems/          # 순수 게임 로직 — Phaser에 의존하지 않음, 유닛테스트 대상
    elements.ts       # 15-2 오행 상성 매트릭스
    damage.ts         # 15-3 데미지 계산 공식
    enemyStat.ts       # 11-5 몬스터 스탯 스케일링
    gacha.ts             # 14-2 가챠 확률/천장/픽업보장
    skills.ts             # 15-1 궁극기 게이지·우선순위, 15-4 각성 보정, 14-7 돌파 보정
    statusEffects.ts       # 15-6 버프/디버프 합산 캡, CC(기절·빙결·침묵·속박), 지속시간 틱
    targeting.ts            # 16-1 전열/후열 타겟팅, 전열 전멸 시 후열 폴백
    battle.ts                # 오토배틀 시뮬레이터 (게이지·스킬 AI·쿨다운·CC·진형 반영, 확장 여지는 TODO 주석 참고)
  config/           # 정적 설정값
    skillCoefficients.ts  # 15-4 등급별 스킬 계수, 14-4/14-7 레벨캡·돌파
    unitBaseStats.ts        # ⚠️ PLACEHOLDER 레벨별 ATK/DEF/HP 산출
  data/             # 정적 데이터
    chapters.ts        # 4장 지역/챕터 매핑 + 스테이지 생성기
    units.sample.json    # 17-2/17-3 로스터 중 7종 샘플 (전체 60종 아님)
  save/             # LocalStorage 기반 세이브/로드
  scenes/           # Phaser 씬 (Boot → MainMenu → Battle / Gacha)
  main.ts           # Phaser.Game 부트스트랩
tests/              # vitest — 기획서 "검증용 예시 계산"을 그대로 재현하는 회귀 테스트 포함
docs/
  DESIGN_REFERENCE.md  # 기획 문서에서 발췌한 수치 요약
```

## 핵심 설계 원칙 (지켜야 할 것)

- **순수 로직과 Phaser 분리**: `src/systems`, `src/config`, `src/data`는 Phaser/DOM을 import하지 않는다.
  씬(`src/scenes`)에서만 이들을 가져다 쓴다. 이래야 `npm run test`가 브라우저 없이 빠르게 돈다.
- **기획서 수치 vs placeholder 구분**: 실제 기획서 수치는 근거 섹션 번호를 주석에 남기고, 기획서에
  없는 값은 반드시 `⚠️ PLACEHOLDER`로 표시한다. 이 구분이 무너지면 나중에 "이 숫자가 기획 의도인지
  임시값인지" 아무도 구분 못 한다.
- **검증 예시는 회귀 테스트로 고정**: 기획서에 "검증용 예시 계산"이 있으면(11-6, 15-3 등) 그 값을
  그대로 vitest 테스트로 박아둔다. 공식을 리팩터링하다 실수로 기획 의도를 깨면 테스트가 바로 잡아낸다.

## TODO — 다음 단계(우선순위 낮은 순 아님, 상황에 맞게 조정)

### 전투 시스템 (15장 나머지)
- [x] 궁극기 게이지(기본공격 적중 +10 / 피격 +5 / 스킬1 +8 / 스킬2 +5 / 매턴 +3) 및 궁극기 발동 — `src/systems/skills.ts`, `battle.ts`
- [x] 스킬 우선순위 AI(궁극기 > 스킬2 > 스킬1 > 기본공격), 스킬1/스킬2 쿨다운 — 쿨다운 턴 수는 ⚠️ PLACEHOLDER
- [ ] 15-5 패시브 시스템(상시형/조건부 발동형)
- [x] 15-6 버프/디버프·상태이상(CC) 처리, 지속시간 관리 — `src/systems/statusEffects.ts`
      (현재는 전투 시작 시 `Combatant.statusEffects`로 주입만 가능. 스킬이 효과를 *부여*하는 경로는 미구현)
- [x] 16-1 전열/후열 타겟팅 규칙, 전열 전멸 시 자리 교체 폴백 — `src/systems/targeting.ts`
- [x] 15-4 각성 보정치(1각성 스킬1+15%p, 2각성 스킬2+15%p, 4각성 궁극기+20%p) 반영
- [x] 궁극기 오행 극대화(상성 유리 시 ×1.2배 추가) 반영
- [x] 14-7 1돌파 상성유리 추가피해 +5%, 2돌파 스킬계수 +10%p 반영 (3돌파 파티 패시브는 15-5와 함께)
- [ ] 스킬별 고유 효과(광역/치유/버프·디버프 부여) — 현재 모든 슬롯은 단일 대상 피해로만 동작

### 로스터 & 성장
- [ ] `units.sample.json`(7종)을 실제 60종 전체 로스터로 확장 (17-2/17-3)
- [ ] 실제 레벨별 ATK/DEF/HP 밸런싱 수치로 `unitBaseStats.ts`의 placeholder 교체
- [ ] 14-4 각성(0~5단계) UI 및 비용/재화 연동
- [ ] 14-7 전용돌파(혼편 재화, 3단계 효과) 구현
- [ ] 14-3 도감/인장 시스템
- [ ] 14-6 장비(신물) 시스템, 오행 세트 효과

### 가챠
- [ ] `PlayerState.gachaBannerState`와 GachaScene 연동(현재는 씬 로컬 상태라 재접속 시 초기화됨)
- [ ] 다이아 소모 및 재화 부족 처리
- [ ] 실제 65~79회차 소프트천장 곡선 수치가 확정되면 `rampFiveStarChance()` 교체
- [ ] 픽업 배너 전환(현재는 단일 배너만 존재)
- [ ] 10연 결과 카드 연출, 도감 자동 등록

### 스테이지/맵
- [ ] 11-2/11-3 맵 풀 순환 배치 및 챕터보스 전용 세트피스 맵(20종) 연결 — 현재는 스테이지 메타데이터만
      존재하고 실제 맵 비주얼은 없음
- [ ] `splitEnemyStat()`의 ATK/DEF/HP 배분 비율이 확정되면 placeholder 교체
- [ ] 11-4 웨이브 구성(정예전/미니보스전/챕터보스전의 다중 웨이브) — 현재는 단일 웨이브 교전만 구현
- [ ] 나머지 5개 지역(운봉협·백귀정·나가라 사원·초원의 하늘·경계의 끝) 스테이지 플레이 흐름 확인

### 경제/스태미나
- [ ] 12장 스태미나 자연회복(5분당 1), 소탕 시스템, 일괄 소탕
- [ ] 골드/재화 획득·소모 연결(현재 PlayerState에 필드만 있고 전투 보상 미지급)

### 파티 편성 & PVP (16장)
- [ ] 파티 편성 UI(전열2/후열3), 리더 스킬
- [ ] 16-3 비동기 PVP(수호진 시뮬레이션)

### 그 외 (17~19장)
- [ ] 18장 소셜/길드
- [ ] 19장 수익화 상품(월간 정액권, 소탕 가속 패스 등)
- [ ] 아트 리소스 파이프라인 연결(현재 전부 텍스트/도형 placeholder) — 19-14 참고,
      생성된 캐릭터 비주얼 레퍼런스는 Claude Project 문서에 메모로 남겨져 있음

## 알려진 placeholder 목록 (요약)

| 파일 | 내용 | 비고 |
|---|---|---|
| `src/config/unitBaseStats.ts` | 등급별 기본 ATK/DEF/HP, 레벨당 증가율 8% | 기획서에 실제 밸런싱 수치 없음 |
| `src/systems/gacha.ts` (`rampFiveStarChance`) | 소프트천장(65~79회차) 확률 증가 곡선 | 기획서는 "점증"만 명시, 선형 보간으로 가정 |
| `src/systems/enemyStat.ts` (`splitEnemyStat`) | EnemyStat → ATK/DEF/HP 배분 비율 | 기획서에 배분 비율 명시 없음 |
| `src/systems/skills.ts` (`SKILL_COOLDOWN_TURNS`) | 스킬1 2턴 / 스킬2 3턴 쿨다운 | 기획서는 쿨다운 존재만 명시, 턴 수 없음 |
| `src/systems/skills.ts` (`BREAKTHROUGH_SKILL_COEFFICIENT`) | 2돌파 "스킬계수 +10%p"의 적용 슬롯 | 기본공격 제외 액티브 3슬롯 전체로 해석 |
| `src/systems/battle.ts` (버프항) | 15-3 `(1 + Σ버프 − Σ디버프)`의 귀속 주체 | 공격자에게 걸린 효과만 합산하는 것으로 해석 |
| `src/scenes/BattleScene.ts` (`buildSampleParty`) | 파티 구성/편성 UI | 현재는 첫 지역 유닛 4종을 자동 구성 |
