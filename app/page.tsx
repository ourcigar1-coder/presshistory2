import { PanelHeading } from "@/components/layout/ExploreShell";
import { CardTile } from "@/components/common/RelatedContent";
import { fetchEntryListing } from "@/lib/sanity/fetchPage";
import { EntryStartLink } from "@/components/analytics/EntryStartLink";
import { WOODCUT_CARDS, INTAGLIO_CARDS, SCREENPRINT_CARDS } from "@/lib/fixtures";

export const metadata = {
  title: "복제의 문명",
};

export default async function HomePage() {
  const cards = await fetchEntryListing();

  return (
    <>
      <header className="border-b border-stone-line bg-gradient-to-b from-white to-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            《복제의 문명》
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            왜 19세기 도시는 갑자기 포스터로 가득 찼을까?
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            한 호기심이 다음 호기심을 낳는 탐험. 포스터에서 출발해 석판화의 원리,
            작품, 재료와 정합의 문제를 지나 현대 패터닝의 개념적 비교까지 이어진다.
          </p>
          <EntryStartLink
            entryOrigin="home"
            href="/entries/poster"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-lg font-semibold text-white shadow-sm hover:bg-accent/90"
          >
            거리의 포스터에서 시작하기 →
          </EntryStartLink>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1440px] px-6 py-12">
        <PanelHeading>첫 번째 탐험 경로 · 석판화</PanelHeading>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <CardTile key={card._id} card={card} />
          ))}
        </div>
        {cards.length === 0 ? (
          <p className="text-sm text-ink-soft">아직 발행된 노드가 없다.</p>
        ) : null}

        <div className="mt-14">
          <PanelHeading>두 번째 탐험 경로 · 목판화</PanelHeading>
          <p className="mt-2 text-sm text-ink-soft">
            돌에 그리는 대신 나무를 도려낸다 — 같은 복제, 정반대의 방법.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {WOODCUT_CARDS.map((card) => (
              <CardTile key={card._id} card={card} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <PanelHeading>세 번째 탐험 경로 · 동판화</PanelHeading>
          <p className="mt-2 text-sm text-ink-soft">
            홈에 잉크가 고인다 — 명암의 마법사, 렘브란트와 고야의 기술.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {INTAGLIO_CARDS.map((card) => (
              <CardTile key={card._id} card={card} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <PanelHeading>네 번째 탐험 · 스크린 인쇄와 현대</PanelHeading>
          <p className="mt-2 text-sm text-ink-soft">
            막고 밀어 통과시킨다 — 팝아트와 티셔츠, 그리고 반도체까지.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {SCREENPRINT_CARDS.map((card) => (
              <CardTile key={card._id} card={card} />
            ))}
          </div>
        </div>
      </div>

      <footer className="mx-auto w-full max-w-[1440px] px-6 pb-16 pt-4">
        <p className="text-xs leading-relaxed text-ink-soft">
          실제 작품 이미지는 미술관 Open Access 자산을 사용하며 출처와 권리를 함께 표시한다.
          원리·공정 설명 도식은 AI-generated explanatory visual이다.
        </p>
      </footer>
    </>
  );
}
