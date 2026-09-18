# GitHub 공유와 테스트 사이트 관리

- 소스: https://github.com/klee0104-ops/manyeongno
- 플레이: https://klee0104-ops.github.io/manyeongno/
- 버그·의견: https://github.com/klee0104-ops/manyeongno/issues/new/choose

## 공유 방식

사국영웅전과 같은 GitHub Pages 방식으로, 지인에게 플레이 링크만 전달합니다. 게임 이용에는 GitHub 가입이 필요하지 않습니다. 저장소와 웹파일은 공개 상태이지만 별도의 홍보·소개 게시물은 만들지 않습니다. 검색 노출을 줄이기 위해 게임 HTML에 `noindex, nofollow, noarchive`를 설정했습니다. 이는 비밀번호나 초대 기반 접근 제한이 아니며, 링크를 받은 사람은 접속할 수 있습니다.

## 구조

소스 브랜치와 완성 빌드를 담은 `codex/pages` 브랜치를 분리합니다. GitHub Pages는 `codex/pages` 브랜치의 루트 폴더를 공개합니다. 별도 유료 호스팅이나 서버 계정은 필요하지 않습니다. 소스를 푸시한 뒤에는 아래 사이트 배포 명령도 실행해야 공개 화면이 갱신됩니다.

Git에는 소스·테스트·게임 그림·음성·실행 안내를 포함합니다. 기존 개인 저장 파일, 개발용 테스트 프로필, `tmp`, `node_modules`, 이전 ZIP, 원본 기획 PDF와 PDF 추출문은 올리지 않습니다. 로컬 파일은 보관합니다.

## 사이트 업데이트

```sh
npm ci
npm run verify
npm run publish:pages
```

`publish:pages`는 프로젝트 주소 `/manyeongno/`를 사용하는 빌드를 별도 `dist-pages`에 만들고, 배포 브랜치에 새 커밋을 추가합니다. Git 인증은 기존 GitHub CLI 로그인을 사용합니다. 강제 푸시 없이 기존 배포 이력을 이어갑니다. 이 명령은 공개 사이트를 변경하므로 공개할 변경을 검토한 뒤 실행합니다.

로컬 플레이의 `dist`와 `127.0.0.1:5173` 경로는 그대로 유지합니다. 런타임 그림·음성은 `src/utils/assets.ts`에서 Vite 기본 경로를 따르도록 처리합니다.

처음 설정하거나 복구할 때는 GitHub 저장소의 Settings → Pages에서 **Deploy from a branch**, **codex/pages**, **/(root)**를 선택합니다. 배포 상태는 저장소 Actions의 `pages build and deployment`에서 확인할 수 있습니다.

공식 참고: [GitHub Pages 게시 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [Vite의 GitHub Pages 경로 설정](https://vite.dev/guide/static-deploy.html#github-pages).
