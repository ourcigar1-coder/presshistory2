import Link from "next/link";
import type { PortableTextBlock } from "next-sanity";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

/** §4.3 SideTrackTrigger — 본문 흐름을 깨지 않는 inline curiosity link */
const portableComponents: PortableTextComponents = {
  types: {},
  marks: {
    sideTrackTrigger: ({ children, value }) => (
      <Link
        href={`?sideTrack=${value.targetSlug}`}
        scroll={false}
        className="rounded bg-accent/10 px-1 font-medium text-accent underline decoration-dotted underline-offset-4 hover:bg-accent/20"
      >
        {value.labelOverride ?? children}
      </Link>
    ),
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
        {children}
      </a>
    ),
  },
};

export function RichText({ value }: { value?: PortableTextBlock[] }) {
  if (!value) return null;
  return (
    <div className="prose-p:leading-relaxed prose-p:text-ink/90 space-y-4">
      <PortableText value={value} components={portableComponents} />
    </div>
  );
}

/** §4.3 ScienceCallout — 일상 비유 → 정확한 용어 순서 */
export function ScienceCallout({
  analogy,
  term,
  definition,
}: {
  analogy: string;
  term: string;
  definition: string;
}) {
  return (
    <aside className="my-8 rounded-xl border-l-4 border-water bg-water/5 p-5">
      <p className="text-base font-medium">{analogy}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        <span className="font-semibold text-ink">{term}</span> — {definition}
      </p>
    </aside>
  );
}

/** §4.3 IntroQuestion — 정의 문구를 대체하지 않는 첫 질문 */
export function IntroQuestion({ question }: { question: string }) {
  return (
    <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
      {question}
    </h1>
  );
}

/** §4.3 ProcessSteps — 모바일 세로, 데스크톱 유연 배치 */
export function ProcessSteps({
  steps,
}: {
  steps: { title: string; description: string; image?: unknown }[];
}) {
  return (
    <ol className="my-8 grid gap-4 sm:grid-cols-2">
      {steps.map((step) => (
        <li key={step.title} className="rounded-xl border border-stone-line bg-white/70 p-5">
          <h3 className="font-semibold text-accent">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/90">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

/** §6.7 Institutional Image Credit */
export function ImageCredit({
  credit,
}: {
  credit?: {
    institution?: string;
    accessionNumber?: string;
    license?: string;
    publicDomain?: boolean;
    creditLine?: string;
    sourcePage?: string;
    dateVerified?: string;
  };
}) {
  if (!credit || !credit.creditLine) return null;
  return (
    <p className="mt-2 text-xs leading-relaxed text-ink-soft">
      {credit.sourcePage ? (
        <a
          href={credit.sourcePage}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          {credit.creditLine}
        </a>
      ) : (
        credit.creditLine
      )}
      {credit.dateVerified ? ` · 권리 검증 ${credit.dateVerified}` : ""}
    </p>
  );
}
