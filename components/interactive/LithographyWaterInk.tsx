"use client";

import { useState } from "react";

/**
 * §4.5 Interactive 1: Lithography Water/Ink
 * 사용자가 표면 상태(에칭 전/후, 적심)를 바꿔 물/잉크의 선택적 부착을 직관적으로 확인.
 * reduced-motion 환경에서도 텍스트 설명으로 동일하게 이해 가능 (§4.6).
 */

type Stage = "drawn" | "etched" | "wet" | "inked";

const STAGES: { key: Stage; label: string; description: string }[] = [
  {
    key: "drawn",
    label: "1 · 그린 직후",
    description:
      "기름 크레용으로 선을 그렸다. 아직 아무 처리도 하지 않았다면, 잉크는 그린 자리와 빈 돌면 모두에 얼룩지게 붙는다.",
  },
  {
    key: "etched",
    label: "2 · 에칭(고정)",
    description:
      "아라비아고무+산 용액으로 판을 고정했다. 그린 선은 기름을 더 단단히 붙잡고, 빈 면은 물을 좋아하는 성질로 바뀐다.",
  },
  {
    key: "wet",
    label: "3 · 물로 적심",
    description:
      "물을 발랐다. 물은 이제 빈 면에만 얇은 막으로 남는다. 그린 선 위에는 머물지 않는다.",
  },
  {
    key: "inked",
    label: "4 · 잉크 롤링",
    description:
      "기름 잉크를 롤러로 문지른다. 젖은 빈 면은 잉크를 밀어내고, 기름 선만 잉크를 받는다 — 찍힐 준비 완료.",
  },
];

function Surface({ stage }: { stage: Stage }) {
  const etched = stage !== "drawn";
  const wet = stage === "wet" || stage === "inked";
  const inked = stage === "inked";

  return (
    <svg
      viewBox="0 0 600 220"
      className="w-full"
      role="img"
      aria-label={`판 상태: ${STAGES.find((s) => s.key === stage)?.label}. ${
        inked
          ? "그린 선에만 잉크가 붙어 있다."
          : wet
            ? "빈 면이 물막으로 덮여 있다."
            : etched
              ? "표면의 화학적 약속이 고정되었다."
              : "기름 크레용으로 선이 그려져 있다."
      }`}
    >
      <rect x="0" y="0" width="600" height="220" fill="#faf7f2" rx="8" />
      {/* 돌 */}
      <rect x="40" y="120" width="520" height="60" rx="6" fill="#b8b2a7" stroke="#8d867b" strokeWidth="2" />
      <text x="300" y="205" textAnchor="middle" fontSize="13" fill="#57534e">석회암 판</text>

      {/* 빈 면 물막 */}
      {wet ? (
        <g>
          <rect x="320" y="112" width="240" height="8" rx="4" fill="#93c5fd" />
          <circle cx="360" cy="96" r="7" fill="#60a5fa" />
          <circle cx="420" cy="92" r="9" fill="#60a5fa" />
          <circle cx="480" cy="97" r="7" fill="#60a5fa" />
          <text x="440" y="72" textAnchor="middle" fontSize="12" fill="#1d4ed8">물막</text>
        </g>
      ) : null}

      {/* 그린 선 */}
      <path
        d="M90 118 q20 -14 40 0 q20 -12 38 2 l22 -2 q18 -10 30 0"
        stroke={inked ? "#111" : "#3f3c39"}
        strokeWidth={inked ? 10 : 7}
        strokeLinecap="round"
        fill="none"
      />
      <text x="150" y="80" textAnchor="middle" fontSize="12" fill="#1c1a17">
        {inked ? "잉크가 붙은 선" : "그린 선"}
      </text>

      {/* 잉크 거부 표시 */}
      {inked ? (
        <g>
          <line x1="430" y1="130" x2="500" y2="130" stroke="#57534e" strokeWidth="2" strokeDasharray="5 4" />
          <text x="465" y="152" textAnchor="middle" fontSize="11" fill="#57534e">잉크 거부</text>
        </g>
      ) : null}

      {/* 에칭 전 경고 */}
      {!etched ? (
        <g>
          <rect x="330" y="128" width="180" height="26" rx="6" fill="#fde68a" opacity="0.85" />
          <text x="420" y="146" textAnchor="middle" fontSize="12" fill="#92400e">
            고정 전: 어디든 잉크가 붙음
          </text>
        </g>
      ) : null}
    </svg>
  );
}

export function LithographyWaterInk({ intro }: { intro?: string }) {
  const [stage, setStage] = useState<Stage>("etched");
  const current = STAGES.find((s) => s.key === stage)!;

  return (
    <section className="my-10 rounded-2xl border border-stone-line bg-white p-5" data-testid="interactive-lithography-water-ink">
      <h3 className="text-lg font-bold">표면을 바꿔보세요</h3>
      {intro ? <p className="mt-1 text-sm text-ink-soft">{intro}</p> : null}

      <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="공정 단계">
        {STAGES.map((s) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={stage === s.key}
            onClick={() => setStage(s.key)}
            className={
              "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors " +
              (stage === s.key
                ? "border-accent bg-accent text-white"
                : "border-stone-line bg-paper hover:border-accent/60")
            }
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-stone-line">
        <Surface stage={stage} />
      </div>

      {/* reduced-motion에서도 동일 정보 제공 (§4.6): 상태 설명 텍스트 */}
      <p className="mt-3 min-h-[3rem] text-sm leading-relaxed text-ink/90" aria-live="polite">
        {current.description}
      </p>
    </section>
  );
}
