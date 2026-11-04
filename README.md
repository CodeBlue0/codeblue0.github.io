# CodeBlue Security Blog

Minimal Mistakes 기반 Jekyll 블로그입니다. 기본 스킨과 원본 레이아웃을 사용합니다.

## 로컬 실행

Ruby와 Bundler가 설치된 환경에서:

```sh
bundle install
bundle exec jekyll serve
```

브라우저에서 http://127.0.0.1:4000 을 엽니다.

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

## 콘텐츠 수정

- `_posts/`: 마크다운 게시글
- `_config.yml`: 사이트 이름, 프로필 설정
- `_data/profile.yml`: 소개 페이지 내용
- `_data/navigation.yml`: 상단 메뉴
- `_pages/`: 카테고리, 태그, 연도별 목록

기존 GitHub Pages 워크플로는 main 브랜치에 push 시 빌드 및 배포합니다.

테마 출처와 교체 전 백업 경로는 [THEME.md](THEME.md)를 참고하세요.
