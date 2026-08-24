import Link from "next/link";
import type { Metadata } from "next";
import { CompactNav } from "@/components/layout/ExploreShell";
import { fetchSearchResults } from "@/lib/sanity/fetchPage";
import { nodeHref } from "@/components/common/RelatedContent";
import { SearchTracker } from "./SearchTracker";

export const metadata: Metadata = {
  title: "검색",
};

export default async function SearchPage({
  searchParams,
}: PageProps<"/search">) {
  const sp = await searchParams;
  const q = typeof sp.q === "string" ? sp.q : "";
  const results = q ? await fetchSearchResults(q) : [];

  return (
    <>
      <CompactNav />
      <main className="mx-auto w-full max-w-[780px] px-6 py-10">
        <h1 className="text-2xl font-bold">탐험 검색</h1>
        <form action="/search" role="search" className="mt-5 flex gap-2">
          <label htmlFor="search-input" className="sr-only">
            검색어
          </label>
          <input
            id="search-input"
            type="search"
            name="q"
            defaultValue={q}
            placeholder="예: 석판화, 포스터, registration"
            className="flex-1 rounded-full border border-stone-line bg-white px-5 py-2.5 outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="rounded-full bg-ink px-5 py-2.5 font-medium text-paper hover:bg-ink/90"
          >
            검색
          </button>
        </form>

        {q && q.trim().length >= 2 ? (
          <p className="mt-4 text-sm text-ink-soft">
            ‘{q}’에 대한 결과 {results.length}개
          </p>
        ) : null}

        <ul className="mt-6 space-y-3">
          {results.map((result) => (
            <li key={result._id}>
              <Link
                href={nodeHref(result)}
                className="block rounded-xl border border-stone-line bg-white/70 p-4 hover:border-accent/60"
              >
                <span className="text-[11px] uppercase tracking-wide text-ink-soft">
                  {result._type} · {result.domain}
                </span>
                <h2 className="mt-0.5 font-semibold">{result.title}</h2>
                {result.shortDescription ? (
                  <p className="mt-1 text-sm text-ink-soft">{result.shortDescription}</p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>

        <SearchTracker query={q} resultCount={results.length} />
      </main>
    </>
  );
}
