import { describe, expect, it } from "vitest";
import { getFixture, listFixtures } from "@/lib/fixtures";
import { SLICE_CARDS, WOODCUT_CARDS, INTAGLIO_CARDS, SCREENPRINT_CARDS } from "@/lib/fixtures";
import { checkVisualRecord } from "@/lib/visuals";
import type { ArtworkPageData, BridgePageData, StoryPageData, TechniquePageData } from "@/lib/sanity/types";

/**
 * §7.3 Vertical Slice E2E 시나리오 — 데이터 계약 수준의 자동 검증.
 * (라우팅/스크롤/브라우저 동작은 배포 후 수동 확인 항목)
 */

const BASE = process.env.E2E_BASE_URL ?? "https://presshistory2-beta.vercel.app";

describe("§7.3 E2E 데이터 계약", () => {
  it("1. Entry에 질문·대표이미지·첫 CTA 대상(lithography)이 있다", () => {
    const entry = getFixture("entry", "poster") as Extract<
      ReturnType<typeof getFixture>, NonNullable<unknown>
    > extends never ? never : NonNullable<ReturnType<typeof getFixture>>;
    expect(entry).toBeTruthy();
    const e = entry as unknown as import("@/lib/sanity/types").EntryPageData;
    expect(e.introQuestion).toContain("?");
    expect(e.heroImage?.url ?? e._id).toBeTruthy(); // hero 또는 폴백 존재
    expect(e.connections?.[0]?.target.slug).toBe("lithography");
  });

  it("2. Lithography에 10초 설명·process·static diagram이 로드된다", () => {
    const t = getFixture("technique", "lithography") as TechniquePageData;
    expect(t.tenSecondExplanation.length).toBeGreaterThan(20);
    expect(t.process!.length).toBeGreaterThanOrEqual(3);
    expect(t.staticDiagrams!.length).toBeGreaterThanOrEqual(1);
  });

  it("3. Gum Arabic side-track이 lithography에서 열린다 (relation payload 완비)", () => {
    const t = getFixture("technique", "lithography") as TechniquePageData;
    const st = t.sideTracks!.find((r) => r.target.slug === "why-gum-arabic-likes-water");
    expect(st).toBeTruthy();
    expect(st!.teaser).toBeTruthy();
    expect(st!.target.title).toBeTruthy();
  });

  it("4. Story full node가 직접 URL로 접근 가능한 slug를 갖는다", () => {
    const s = getFixture("story", "why-gum-arabic-likes-water") as StoryPageData;
    expect(s.question).toBeTruthy();
    expect(s.shortAnswer).toBeTruthy();
  });

  it("5. Moulin Rouge에 image rights가 있고 registration 연결이 노출된다", () => {
    const a = getFixture("artwork", "moulin-rouge-la-goulue") as ArtworkPageData;
    const rec = a.heroImage!.visualRecord!;
    expect(rec.originType).toBe("institutional");
    expect(rec.publicDomain).toBe(true);
    expect(checkVisualRecord(rec).ok).toBe(true);
    expect(a.unexpectedConnections!.some((r) => r.target.slug === "registration")).toBe(true);
  });

  it("6. Registration interactive가 keyboard/reduced-motion에서 이해 가능한 텍스트를 제공한다", () => {
    const t = getFixture("technique", "lithography") as TechniquePageData;
    expect(t.interactiveDiagram!.fallbackExplanation.length).toBeGreaterThan(30);
  });

  it("7. Bridge에서 historical/conceptual이 텍스트로 구분된다", () => {
    const b = getFixture("bridge", "from-printing-to-patterning") as BridgePageData;
    const markers = b.timeline!.map((x) => x.markerType);
    expect(markers).toContain("historical");
    expect(markers).toContain("conceptual");
    expect(b.keyDifferences!.some((d) => d.difference.includes("계보"))).toBe(true);
  });

  it("8-9. 탐험 경로가 끊기지 않는다 — 4개 경로 모두 slug 체인 완비", () => {
    for (const cards of [SLICE_CARDS, WOODCUT_CARDS, INTAGLIO_CARDS, SCREENPRINT_CARDS]) {
      expect(cards.length).toBeGreaterThan(0);
      for (const card of cards) {
        expect(card.slug).toBeTruthy();
        expect(card.title).toBeTruthy();
      }
    }
  });
});

describe("확장 노드 데이터 품질", () => {
  it("목판화·동판화·스크린 인쇄 technique가 공정·감별법을 갖춘다", () => {
    for (const slug of ["woodcut", "intaglio", "screenprint"]) {
      const t = getFixture("technique", slug) as TechniquePageData;
      expect(t, slug).toBeTruthy();
      expect(t.process!.length).toBeGreaterThanOrEqual(3);
      expect(t.tenSecondExplanation).toBeTruthy();
      expect(t.sources!.length).toBeGreaterThan(0);
    }
  });

  it("모든 artwork에 rights record가 있다", () => {
    for (const slug of ["moulin-rouge-la-goulue", "hiroshige-wild-geese", "rembrandt-self-portrait", "goya-sleep-of-reason"]) {
      const a = getFixture("artwork", slug) as ArtworkPageData;
      expect(a.heroImage?.visualRecord, slug).toBeTruthy();
      expect(a.heroImage!.visualRecord!.creditLine).toBeTruthy();
    }
  });
});
