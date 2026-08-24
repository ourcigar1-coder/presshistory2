import type { SourceProjection } from "@/lib/pageTypes";

/**
 * §4.3 SourceList / §6.7 Source Card 포맷
 * 기관/저자, 자료명, 연도, URL, 접근일, 이 자료가 뒷받침하는 주장
 */
export function SourceList({
  sources,
  title = "출처",
}: {
  sources?: SourceProjection[];
  title?: string;
}) {
  if (!sources || sources.length === 0) return null;

  return (
    <section aria-labelledby="sources-heading" className="mt-12 border-t border-stone-line pt-6">
      <h2 id="sources-heading" className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
        {title}
      </h2>
      <ol className="mt-3 space-y-3 text-sm">
        {sources.map((source, i) => (
          <li key={`${source.url}-${i}`} className="rounded-lg bg-white/60 p-3">
            <div className="font-medium">
              {i + 1}. {source.title}
            </div>
            <div className="mt-0.5 text-ink-soft">
              {[source.institution, source.author, source.year ? String(source.year) : null]
                .filter(Boolean)
                .join(" · ")}
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-soft">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-2 hover:underline break-all"
              >
                {source.url}
              </a>
              <span>접근일 {source.accessedAt}</span>
              {source.notes ? <span className="basis-full text-ink-soft">{source.notes}</span> : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
