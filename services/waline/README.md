# CodeBlue0 익명 댓글 서버

블로그는 GitHub Pages에 두고 댓글 API만 별도 Vercel 프로젝트로 운영합니다.
이 디렉터리는 Jekyll의 `exclude`에 포함되므로 블로그에 게시되지 않습니다.

## 초기 설정

1. Vercel에 이 디렉터리를 `codeblue0-comments` 프로젝트로 연결합니다.
2. 전용 PostgreSQL 데이터베이스를 생성하고 공식 스키마를 복사한 `schema.sql`을 적용합니다.
3. `.env.example`의 환경변수를 Vercel에 설정합니다. 비밀번호와 JWT 키를 Git에 올리지 않습니다.
4. 첫 가입자가 관리자가 되는 Waline의 기본 동작에 유의해, 공개 전에 관리자 계정을 확보합니다.
5. 서버 배포와 댓글 작성·조회·삭제를 검증한 뒤 `_config.yml`의
   `comments.waline.server_url`에 실제 HTTPS 서버 주소를 입력합니다.

`SECURE_DOMAINS`에는 `codeblue0.github.io`와 댓글 서버 호스트를 모두 넣습니다.
Neon은 `PG_SSL=true`가 필요합니다. `JWT_TOKEN`은 임의의 긴 비밀값을 사용합니다.
로그인 강제 설정은 사용하지 않으며, 작성자의 지역·브라우저 정보는 공개하지 않습니다.
이 설정이 서버나 호스팅 사업자의 접속 로그 수집까지 막는 것은 아닙니다.

## 게시글

새 `_posts/YYYY-MM-DD-slug.md` 글에는 댓글이 기본으로 표시됩니다.
글별로 끄려면 front matter에 `comment: false`를 넣습니다.
소개·카테고리 같은 일반 페이지에는 표시되지 않습니다.
일반 페이지에서 별도로 켜려면 `comment: true`를 넣습니다.

댓글은 게시글 URL별로 구분합니다. 기존 글의 URL을 변경할 때는 댓글 연결도 고려하세요.
서버 주소가 비어 있으면 댓글 위젯을 로드하지 않습니다.

## 설정 근거

- [Waline 설치](https://waline.js.org/en/guide/get-started/)
- [클라이언트 설정](https://waline.js.org/en/reference/client/props.html)
- [서버 환경변수](https://waline.js.org/en/reference/server/env.html)

클라이언트는 3.16.1, 서버는 1.43.4로 고정합니다.
DOMPurify와 일부 간접 의존성에는 패치 버전 override를 적용합니다.

2026-11-02 의존성 검사에서는 critical 0, high 4, moderate 15가 보고되었습니다.
high 경고는 CloudBase SDK의 `lodash.set`과 이를 포함하는 상위 패키지에서 발생합니다.
운영 저장소는 PostgreSQL이며 CloudBase 어댑터를 사용하지 않습니다.
사용하지 않는 의존성의 경고도 사라진 것은 아니므로 Waline 업데이트 시 다시 검사합니다.

관리자 초기 로그인 정보는 로컬 `.env.admin`에만 저장하며 Git에 포함하지 않습니다.
관리 페이지에 처음 로그인한 뒤 비밀번호와 이메일을 본인 정보로 변경하세요.
