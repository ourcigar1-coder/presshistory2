import Link from "next/link";
import { CompactNav } from "@/components/layout/ExploreShell";
import { CardTile } from "@/components/common/RelatedContent";
import { SLICE_CARDS } from "@/lib/fixtures";

/** §7.4 Production Guard: 필수 page document 없음 → notFound() + 추천 Entry */
export default function NotFound() {
  return (
    <>
      <CompactNav />
      <main className="mx-auto flex min-h-[60vh] w-full max-w-[780px] flex-col items-start justify-center px-6 py-16">
        <h1 className="text-3xl font-black tracking-tight">여기엔 아직 아무것도 없다</h1>
        <p className="mt-3 text-ink-soft">
          페이지가 이동했거나 아직 발행되지 않았다. 첫 번째 탐험 경로에서 다시 시작해 보자.
        </p>
        <Link
          href="/entries/poster"
          className="mt-6 inline-flex rounded-full bg-accent px-6 py-2.5 font-semibold text-white hover:bg-accent/90"
        >
          거리의 포스터에서 시작하기 →
        </Link>

        <h2 className="mt-12 text-sm font-semibold uppercase tracking-wide text-ink-soft">
          추천 노드
        </h2>
        <div className="mt-4 grid w-full gap-4 sm:grid-cols-2">
          {SLICE_CARDS.slice(0, 4).map((card) => (
            <CardTile key={card._id} card={card} />
          ))}
        </div>
      </main>
    </>
  );
}
