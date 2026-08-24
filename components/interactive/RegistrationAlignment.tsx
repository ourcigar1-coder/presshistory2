"use client";

import { useState } from "react";

/**
 * §4.5 Interactive 2: Registration Alignment
 * 3개의 색 레이어를 어긋나게/맞춰 보며 registration을 이해.
 * 슬라이더는 키보드 조작 가능(기본 range 동작), 애니메이션 없음 → reduced-motion 안전.
 */
export function RegistrationAlignment({ intro }: { intro?: string }) {
  const [offset, setOffset] = useState(6);
  const aligned = offset === 0;

  return (
    <section className="my-10 rounded-2xl border border-stone-line bg-white p-5" data-testid="interactive-registration-alignment">
      <h3 className="text-lg font-bold">색판을 맞춰보세요</h3>
      {intro ? <p className="mt-1 text-sm text-ink-soft">{intro}</p> : null}

      <div className="mt-4 overflow-hidden rounded-xl border border-stone-line bg-white">
        <svg viewBox="0 0 600 260" className="w-full" role="img" aria-label={
          aligned
            ? "세 색판이 정확히 겹쳐 정합 상태다."
            : `색판이 ${offset}픽셀만큼 어긋나 있다.`
        }>
          <rect width="600" height="260" fill="#faf7f2" />
          {/* 레지스터 마크 */}
          <g stroke="#1c1a17" strokeWidth="2">
            <line x1="286" y1="26" x2="314" y2="26" />
            <line x1="300" y1="12" x2="300" y2="40" />
            <circle cx="300" cy="26" r="7" fill="none" />
          </g>

          <g transform={`translate(${offset}, ${offset * 0.4})`} opacity="0.5">
            <circle cx="270" cy="150" r="70" fill="#06b6d4" />
          </g>
          <g transform={`translate(${-offset}, ${-offset * 0.3})`} opacity="0.45">
            <circle cx="330" cy="140" r="70" fill="#ec4899" />
          </g>
          <g transform={`translate(0, ${offset})`} opacity="0.4">
            <circle cx="300" cy="165" r="70" fill="#facc15" />
          </g>

          {/* 스커트 느낌의 검은 선 (원본 포스터 연상) */}
          <path
            d={`M240 200 q60 -${40 + offset} 120 0`}
            stroke="#111"
            strokeWidth={4}
            fill="none"
            opacity="0.8"
          />

          <text x="300" y="246" textAnchor="middle" fontSize="13" fill="#57534e">
            {aligned ? "정합(in register) — 선명하다" : `${offset}px 어긋남(misregister)`}
          </text>
        </svg>
      </div>

      <label htmlFor="alignment-slider" className="mt-4 block text-sm font-medium">
        어긋남 조절: {offset}px
      </label>
      <input
        id="alignment-slider"
        type="range"
        min={0}
        max={20}
        step={1}
        value={offset}
        onChange={(e) => setOffset(Number(e.target.value))}
        className="mt-2 w-full accent-[#b45309]"
      />
      <button
        onClick={() => setOffset(0)}
        className="mt-2 rounded-full border border-stone-line px-4 py-1.5 text-sm font-medium hover:border-accent hover:text-accent"
      >
        정합시키기
      </button>

      <p className="mt-3 min-h-[2.5rem] text-sm leading-relaxed text-ink/90" aria-live="polite">
        {aligned
          ? "완벽한 정합. 네 색 포스터의 얼굴과 스커트가 제자리에 있다. 인쇄공이 매 장수마다 반복한 작업이다."
          : "어긋난 상태. 형체가 흐려진다 — 실제 인쇄에서는 눈금(레지스터 마크)을 겨눠 종이를 몇 번이고 다시 놓아야 한다."}
      </p>
    </section>
  );
}
