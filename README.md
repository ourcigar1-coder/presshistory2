# 복제의 문명 (presshistory2)

> 좋은 작품과 기술 하나가 과학·재료·언어·역사·사회·산업으로 계속 이어져 가족이
> "이것도 궁금한데?"라고 말하게 만드는 탐험 사이트.

**Production:** https://presshistory2-beta.vercel.app
**Studio:** https://presshistory2-beta.vercel.app/studio

Vertical Slice 구현 명세: `inbox/복제의_문명_Vertical_Slice_구현_확정_명세서_v1.1.md`

## 스택

- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS v4
- Sanity v6 (embedded studio `/studio`, Live Content API, Draft Mode, Visual Editing)
- PostHog (`06 Analytics` core events)
- pnpm / Vitest / GitHub Actions

## 시작하기

```bash
pnpm install
cp .env.example .env.local   # 값 채우기 (아래 참고)
pnpm dev                     # http://localhost:3000
```

Sanity 자격증명이 없으면 데이터 레이어가 **typed fixture**(`lib/fixtures/`)로
폴백하므로 UI 개발/QA가 바로 가능하다(§3.6).

### Sanity 프로젝트 연결

1. https://www.sanity.io/manage 에서 프로젝트 생성 (dataset: `production`)
2. `.env.local`에 `NEXT_PUBLIC_SANITY_PROJECT_ID`, `SANITY_API_READ_TOKEN`(Viewer 권한) 입력
3. 콘텐츠 시드:

```bash
pnpm tsx scripts/generate-seed.ts   # seed/seed.ndjson 생성
npx sanity@latest dataset import ./seed/seed.ndjson production --replace
```

4. Studio: `/studio` 라우트에서 편집. Desk 구조는 §2.8
   (Ready to Publish / Needs Fact Check / Needs Visual / Published / By Type / Sources & Rights).

## 명령어

| 명령 | 설명 |
|---|---|
| `pnpm dev` | 개발 서버 |
| `pnpm build` | 프로덕션 빌드 |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | tsc --noEmit |
| `pnpm test` | Vitest (fixture/query 계약 검증) |
| `pnpm tsx scripts/generate-seed.ts` | Sanity import 시드 재생성 |

## 아키텍처 지도

```
app/
  page.tsx                  홈 — 첫 탐험 경로 (Listing Query)
  entries/[slug]            Entry   → ENTRY_PAGE_QUERY
  techniques/[slug]         Technique → TECHNIQUE_PAGE_QUERY (+ interactive)
  artworks/[slug]           Artwork → ARTWORK_PAGE_QUERY (+ image rights)
  stories/[slug]            Story   → STORY_PAGE_QUERY
  terms/[slug]              Term    → TERM_PAGE_QUERY
  science/[slug]            ScienceConcept → SCIENCE_PAGE_QUERY
  bridge/[slug]             Bridge  → BRIDGE_PAGE_QUERY (historical/conceptual 구분)
  search                    keyword 검색 v1
  studio/[[...tool]]        Embedded Sanity Studio
  api/draft-mode/enable     Draft mode (§3.4)
lib/
  sanity/queries.ts         §3.2 projections + §3.3 page queries
  sanity/fetchPage.ts       fetch 계층 (CMS 미구성 시 fixture 폴백)
  fixtures/                 Slice 6노드 typed fixtures = 실제 copy
  analytics/                §5 core events, exploration depth
components/sidetrack/       ?sideTrack= routing · overlay · focus trap
components/interactive/     lithography-water-ink · registration-alignment
public/diagrams/            LLM 생성 설명 이미지 + PROVENANCE.md (§2.7)
sanity/schema/              §2 전체 schema (validation 포함)
seed/                       Sanity import용 NDJSON
```

## 운영 원칙 요약

- 새 지식은 **CMS 작업**, 새 상호작용만 코드 작업.
- 실제 작품 이미지는 기관 Open Access + rights record 필수.
- 원리·공정 설명 도식은 LLM 생성 + provenance/human review 기록(§2.7).
- 강한 역사 주장에는 source. historical/conceptual 관계는 절대 혼용 금지.
- PR 필수 체크: `pnpm lint && pnpm typecheck && pnpm test && pnpm build`
