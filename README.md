# Tech Blog

기술 블로그 프로젝트입니다. Astro, React, TypeScript를 사용하여 개발되었습니다.

## 기술 스택

- Frontend: Astro + React
- Styling: Tailwind CSS
- Editor: Tiptap
- Authentication & Database: Supabase
- Deployment: Vercel

## 요구사항 체크리스트

### 초기 설정
- [x] Astro 프로젝트 생성
- [x] TypeScript 설정
- [x] React 통합 설정
- [x] Tailwind CSS 설정
- [x] Supabase 프로젝트 설정 (022bd12)
  - [ ] GitHub OAuth 설정
  - [ ] 데이터베이스 스키마 설정
  - [ ] Row Level Security 정책 설정
- [x] 환경 변수 설정

### 인증 시스템
- [ ] Supabase Auth 설정
  - [ ] GitHub 로그인 구현
  - [ ] 관리자 권한 설정
- [ ] 관리자 전용 라우트 구현
  - [ ] 로그인 페이지
  - [ ] 관리자 대시보드
  - [ ] 인증 미들웨어

### 블로그 핵심 기능
- [ ] 기본 레이아웃 구현
  - [ ] 반응형 네비게이션 바
  - [ ] 메인 페이지 레이아웃
- [ ] 포스트 관리 시스템
  - [ ] Tiptap 에디터 구현
  - [ ] 마크다운 변환 기능
  - [ ] Content Collections 설정
- [ ] 포스트 목록 페이지
  - [ ] 페이지네이션
  - [ ] 카테고리/태그 필터링
- [ ] 포스트 상세 페이지
  - [ ] 마크다운 렌더링
  - [ ] 코드 하이라이팅
  - [ ] 목차 자동 생성

### 배포 설정
- [ ] GitHub 저장소 설정
- [ ] Vercel 프로젝트 연동
- [ ] 자동 배포 설정
  - [ ] main 브랜치 푸시 시 자동 배포
  - [ ] 환경 변수 설정

### 추가 기능 (향후 구현)
- [ ] 댓글 시스템
  - [ ] Supabase 실시간 댓글
  - [ ] 소셜 로그인 (선택적)
- [ ] 검색 기능
- [ ] 다크 모드
- [ ] RSS 피드

## 로컬 개발 환경 설정

(프로젝트 생성 후 추가 예정)

## 환경 변수 설정

(프로젝트 생성 후 추가 예정)

## 배포 방법

(프로젝트 생성 후 추가 예정)


# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
