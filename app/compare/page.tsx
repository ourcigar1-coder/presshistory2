import type { Metadata } from "next";
import { CompactNav } from "@/components/layout/ExploreShell";
import { SourceList } from "@/components/common/SourceList";
import { SOURCES } from "@/lib/fixtures/sources";

export const metadata: Metadata = {
  title: "판화 기법 비교 — 같은 문제, 다른 답",
  description: "석판화·목판화·동판화·스크린 인쇄 — 잉크가 어디에 있고, 무엇이 찍히는가.",
};

const TECHNIQUES = [
  {
    name: "석판화",
    family: "평판 (planographic)",
    href: "/techniques/lithography",
    thumbnail: "/images/cheret-esclave.jpg",
    principle: "돌 위에 기름으로 그린다 — 그린 자리만 잉크를 받는다",
    inkWhere: "그린 자리의 표면 위",
    raisedOrSunken: "평평함 — 아무것도 파지 않음",
    strength: "자유로운 손그림, 부드러운 톤",
    weakness: "판 재사용은 연마 필요",
    era: "1796~",
    color: "#b45309",
  },
  {
    name: "목판화",
    family: "볼록판 (relief)",
    href: "/techniques/woodcut",
    thumbnail: "/images/woodcut-inking.jpg",
    principle: "나무를 파낸다 — 남은 볼록한 면이 찍힌다",
    inkWhere: "남아 있는 볼록한 면 위",
    raisedOrSunken: "볼록 — 남긴 부분이 솟아 있다",
    strength: "값싸고 단순, 활판과 같은 높이",
    weakness: "판이 닳아 수천 장이 한계, 되돌릴 수 없음",
    era: "8세기~",
    color: "#92400e",
  },
  {
    name: "동판화",
    family: "요판 (intaglio)",
    href: "/techniques/intaglio",
    thumbnail: "/images/rembrandt-self-portrait.jpg",
    principle: "금속에 홈을 파낸다 — 홈에 고인 잉크가 찍힌다",
    inkWhere: "파낸 홈 안 (종이로 짜올림)",
    raisedOrSunken: "오목 — 파낸 부분이 들어가 있다",
    strength: "정교한 선, 명암의 깊이 (렘브란트)",
    weakness: "구리가 비싸고 판이 빨리 닳음 (수백 장)",
    era: "15세기~",
    color: "#1d4ed8",
  },
  {
    name: "스크린 인쇄",
    family: "공판 (stencil)",
    href: "/techniques/screenprint",
    thumbnail: "/images/silkscreen-process.jpg",
    principle: "망을 막았다 뚫는다 — 잉크를 밀어 통과시킨다",
    inkWhere: "망을 통과해 종이 위에 얹힘",
    raisedOrSunken: "통과 — 망사 구멍으로 잉크가 내려옴",
    strength: "무엇이든·어디에든·소량부터, 채도 높은 색",
    weakness: "색당 스크린 하나, 미세한 그라데이션 어려움",
    era: "20세기 초~",
    color: "#6d28d9",
  },
];

const SHARED_PROBLEMS = [
  {
    problem: "색을 어떻게 겹치는가",
    answers: [
      { t: "석판화", a: "색판마다 십자 눈금(registration mark)" },
      { t: "목판화", a: "판 가장자리의 겐토(見当) 홈" },
      { t: "동판화", a: "판흔 기준 재정렬 + 눈금" },
      { t: "스크린", a: "핀 레지스트 시스템 (워홀은 어긋남을 미학으로)" },
    ],
  },
  {
    problem: "원본과 복제의 관계",
    answers: [
      { t: "석판화", a: "그림 자체가 판 위에서 태어남 — 원본 개념 흐려짐" },
      { t: "목판화", a: "밑그림→판 각색 — 장인의 손이 끼어듦" },
      { t: "동판화", a: "상태(state)마다 다른 판본 — 버전의 탄생" },
      { t: "스크린", a: "사진을 그대로 전사 — 복제가 주제가 됨(워홀)" },
    ],
  },
  {
    problem: "누가 찍을 수 있는가",
    answers: [
      { t: "석판화", a: "그림 그리는 사람 — 조각 기술 불필요" },
      { t: "목판화", a: "도끼와 끌 — 가장 단순한 도구" },
      { t: "동판화", a: "에칭 이후 화가 참여 가능" },
      { t: "스크린", a: "티셔츠 인쇄소 수준의 진입장벽" },
    ],
  },
];

export default function ComparePage() {
  return (
    <>
      <CompactNav />
      <main className="mx-auto w-full max-w-[900px] px-6 py-10">
        <header>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Compare</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            네 가지 판화, 같은 문제
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            잉크가 어디에 있고, 무엇이 찍히는가 — 이 한 질문으로 네 기법이 갈린다.
            그리고 색을 겹치는 문제, 원본과 복제의 관계, 누가 찍을 수 있는가라는
            공통 과제에는 저마다의 답을 냈다.
          </p>
        </header>

        {/* 나란히 보는 4기법 */}
        <section aria-labelledby="side-by-side" className="mt-10 grid gap-4 sm:grid-cols-2">
          <h2 id="side-by-side" className="sr-only">
            네 기법 나란히 보기
          </h2>
          {TECHNIQUES.map((t) => (
            <a
              key={t.name}
              href={t.href}
              className="group overflow-hidden rounded-2xl border border-stone-line bg-white transition-colors hover:border-accent/60"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.thumbnail} alt="" className="h-40 w-full object-cover" loading="lazy" />
              <div className="p-4" style={{ borderTop: `3px solid ${t.color}` }}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-bold group-hover:text-accent">{t.name}</h3>
                  <span className="text-[11px] text-ink-soft">{t.era}</span>
                </div>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide" style={{ color: t.color }}>
                  {t.family}
                </p>
                <p className="mt-2 text-sm font-medium leading-snug">{t.principle}</p>
                <dl className="mt-3 space-y-1.5 text-xs leading-relaxed text-ink-soft">
                  <div>
                    <dt className="inline font-semibold text-ink">잉크 위치: </dt>
                    <dd className="inline">{t.inkWhere}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-ink">판의 형태: </dt>
                    <dd className="inline">{t.raisedOrSunken}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-ink">강점: </dt>
                    <dd className="inline">{t.strength}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-ink">한계: </dt>
                    <dd className="inline">{t.weakness}</dd>
                  </div>
                </dl>
              </div>
            </a>
          ))}
        </section>

        {/* 공통 문제와 답 */}
        <section aria-labelledby="shared-problems" className="mt-14">
          <h2 id="shared-problems" className="text-xl font-bold">
            공통의 문제, 저마다의 답
          </h2>
          <div className="mt-4 space-y-4">
            {SHARED_PROBLEMS.map((sp) => (
              <div key={sp.problem} className="rounded-xl border border-stone-line bg-white/70 p-5">
                <h3 className="font-bold text-accent">{sp.problem}</h3>
                <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                  {sp.answers.map((ans) => (
                    <li key={ans.t} className="flex gap-2">
                      <span className="w-16 shrink-0 font-semibold">{ans.t}</span>
                      <span className="text-ink-soft">{ans.a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 원리 요약 표 */}
        <section aria-labelledby="summary-table" className="mt-14 overflow-x-auto">
          <h2 id="summary-table" className="text-xl font-bold">
            한눈에 보기
          </h2>
          <table className="mt-4 w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-stone-line text-left">
                <th scope="col" className="py-2 pr-3 font-semibold">기법</th>
                <th scope="col" className="py-2 pr-3 font-semibold text-historical">잉크는 어디에</th>
                <th scope="col" className="py-2 pr-3 font-semibold text-conceptual">판은 볼록? 오목?</th>
              </tr>
            </thead>
            <tbody>
              {TECHNIQUES.map((t) => (
                <tr key={t.name} className="border-b border-stone-line">
                  <th scope="row" className="py-3 pr-3 text-left font-medium">
                    <a href={t.href} className="hover:text-accent hover:underline">
                      {t.name}
                    </a>
                  </th>
                  <td className="py-3 pr-3">{t.inkWhere}</td>
                  <td className="py-3 pr-3">{t.raisedOrSunken}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <p className="mt-10 rounded-xl border-l-4 border-water bg-water/5 p-4 text-sm leading-relaxed">
          네 기법 모두 ‘여러 층을 어긋나지 않게 겹치는 문제’를 풀었다. 이 정합의
          문제가 오늘날 반도체 패터닝의 alignment로 이어진다 — 물론 계보가 아니라
          구조의 유사성으로.{" "}
          <a href="/bridge/from-printing-to-patterning" className="font-medium underline underline-offset-2">
            브리지 노드에서 자세히 →
          </a>
        </p>

        <SourceList
          sources={[SOURCES.metLithographyEssay, SOURCES.metHiroshigeWildGeese, SOURCES.metRembrandtSamaritan, SOURCES.commonsVelonisSilkscreen]}
          title="출처"
        />
      </main>
    </>
  );
}
