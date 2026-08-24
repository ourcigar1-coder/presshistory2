import { describe, expect, it } from "vitest";
import { getFixture, listFixtures } from "@/lib/fixtures";
import type {
  ArtworkPageData,
  BridgePageData,
  EntryPageData,
  SciencePageData,
  StoryPageData,
  TermPageData,
  TechniquePageData,
} from "@/lib/sanity/types";
import { checkVisualRecord } from "@/lib/visuals";
import { isInteractiveKey } from "@/lib/pageTypes";

/**
 * §3.6 완료 조건
 * Vertical Slice fixture들이 published/draft와 동일한 필드 shape 계약을 지키는지 검증한다.
 * 또한 §0.2 Fun Gate / §6.5 Claim Gate의 최소 조건을 점검한다.
 */

const SLICE = [
  ["entry", "poster"],
  ["technique", "lithography"],
  ["artwork", "moulin-rouge-la-goulue"],
  ["story", "why-gum-arabic-likes-water"],
  ["term", "registration"],
  ["bridge", "from-printing-to-patterning"],
] as const;

describe("Vertical Slice fixtures", () => {
  it.each(SLICE)("존재한다: %s/%s", (type, slug) => {
    const fixture = getFixture(type, slug);
    expect(fixture).not.toBeNull();
    expect(fixture!._type).toBe(type);
    expect(fixture!.domain).toBeTruthy();
  });

  it("§0.2 모든 노드는 질문 또는 정의가 아닌 첫 화면 요소를 가진다", () => {
    const entry = getFixture("entry", "poster") as EntryPageData;
    const technique = getFixture("technique", "lithography") as TechniquePageData;
    const artwork = getFixture("artwork", "moulin-rouge-la-goulue") as ArtworkPageData;
    const story = getFixture("story", "why-gum-arabic-likes-water") as StoryPageData;
    const bridge = getFixture("bridge", "from-printing-to-patterning") as BridgePageData;

    expect(entry.introQuestion.endsWith("?")).toBe(true);
    expect(technique.tenSecondExplanation.length).toBeGreaterThan(20);
    expect(artwork.thirtySecondExplanation.length).toBeGreaterThan(20);
    expect(story.question.endsWith("?")).toBe(true);
    expect(bridge.introQuestion.endsWith("?")).toBe(true);
  });

  it("§3.5 조회 흐름: lithography → science/story/artwork 카드가 연결된다", () => {
    const technique = getFixture("technique", "lithography") as TechniquePageData;
    expect(technique.scienceConcepts?.some((c) => c.slug === "hydrophilic-oleophilic-surface")).toBe(true);
    expect(
      technique.sideTracks?.some((r) => r.target.slug === "why-gum-arabic-likes-water"),
    ).toBe(true);
    expect(technique.representativeArtwork?.slug).toBe("moulin-rouge-la-goulue");
  });

  it("§2.5 relation 검증: historicallyLedTo↔historical, conceptuallySimilarTo↔conceptual", () => {
    for (const fixture of listFixtures()) {
      const relations: { relationType: string; relationNature: string }[] = [];
      if ("connections" in fixture) relations.push(...((fixture as EntryPageData).connections ?? []));
      if ("sideTracks" in fixture) relations.push(...((fixture as TechniquePageData).sideTracks ?? []));
      if ("unexpectedConnections" in fixture)
        relations.push(...((fixture as ArtworkPageData).unexpectedConnections ?? []));
      if ("relatedNodes" in fixture) relations.push(...((fixture as BridgePageData).relatedNodes ?? []));

      for (const r of relations) {
        if (r.relationType === "historicallyLedTo") {
          expect(r.relationNature, JSON.stringify(r)).toBe("historical");
        }
        if (r.relationType === "conceptuallySimilarTo") {
          expect(r.relationNature, JSON.stringify(r)).toBe("conceptual");
        }
      }
    }
  });

  it("§6.4 Fun Gate: primary node은 side-track 훅이 최소 2개", () => {
    const technique = getFixture("technique", "lithography") as TechniquePageData;
    const artwork = getFixture("artwork", "moulin-rouge-la-goulue") as ArtworkPageData;
    expect(technique.sideTracks!.length).toBeGreaterThanOrEqual(2);
    expect(artwork.unexpectedConnections!.length).toBeGreaterThanOrEqual(2);
  });

  it("§6.4 Fun Gate: 모든 노드에 source가 있다", () => {
    for (const fixture of listFixtures()) {
      const sources =
        ("sources" in fixture && fixture.sources) || [];
      expect(sources.length, `source 없음: ${fixture._id}`).toBeGreaterThan(0);
    }
  });

  it("Bridge: historical과 conceptual 타임라인 항목이 모두 있고 구분된다 (§7.3-7)", () => {
    const bridge = getFixture("bridge", "from-printing-to-patterning") as BridgePageData;
    const markers = bridge.timeline!.map((t) => t.markerType);
    expect(markers).toContain("historical");
    expect(markers).toContain("conceptual");
  });
});

describe("Artwork 이미지 권리 (§6.3)", () => {
  it("기관 이미지에 rights record가 완비되어 있다", () => {
    const artwork = getFixture("artwork", "moulin-rouge-la-goulue") as ArtworkPageData;
    const record = artwork.heroImage?.visualRecord;
    expect(record).toBeDefined();
    expect(record!.originType).toBe("institutional");
    expect(record!.publicDomain).toBe(true);
    expect(record!.accessionNumber).toBeTruthy();
    expect(record!.creditLine).toContain("Metropolitan Museum of Art");
    expect(checkVisualRecord(record).ok).toBe(true);
  });
});

describe("LLM 생성 설명 이미지 provenance (§2.7)", () => {
  it("referenceSources + explanatoryOnly가 기록되어 있다", () => {
    const technique = getFixture("technique", "lithography") as TechniquePageData;
    for (const diagram of technique.staticDiagrams ?? []) {
      const record = diagram.visualRecord;
      expect(record?.originType).toBe("llmGenerated");
      expect(record?.explanatoryOnly).toBe(true);
      expect(record?.model).toBeTruthy();
      expect(record?.referenceSources?.length).toBeGreaterThan(0);
    }
  });

  it("§7.4: humanReviewed=false인 LLM 이미지는 production에서 숨겨진다", () => {
    const technique = getFixture("technique", "lithography") as TechniquePageData;
    const draftRecord = technique.staticDiagrams![0].visualRecord!;
    expect(draftRecord.humanReviewed).toBe(false);

    // production
    const prodGate = checkVisualRecord(draftRecord);
    expect(prodGate.ok).toBe(false);
    expect(prodGate.ok ? "" : prodGate.reason).toMatch(/human review/);

    // preview(draft mode)에서는 배지와 함께 표시 허용 — Preview QA(§7.2)용
    const previewGate = checkVisualRecord(draftRecord, { preview: true });
    expect(previewGate.ok).toBe(true);

    // reviewed 상태가 되면 production에서도 표시
    const approvedGate = checkVisualRecord({
      ...draftRecord,
      humanReviewed: true,
      accuracyStatus: "approved",
    });
    expect(approvedGate.ok).toBe(true);
  });
});

describe("Interactive registry (§4.5)", () => {
  it("기법 노드의 interactive key는 registry allowlist 안이다", () => {
    const technique = getFixture("technique", "lithography") as TechniquePageData;
    const key = technique.interactiveDiagram?.interactiveKey ?? "";
    expect(isInteractiveKey(key)).toBe(true);
    expect(technique.interactiveDiagram?.fallbackExplanation).toBeTruthy();
  });
});

describe("Science concept (§3.3 SCIENCE_PAGE_QUERY 흐름)", () => {
  it("친수/친유 개념이 존재하고 one-sentence를 가진다", () => {
    const science = getFixture(
      "scienceConcept",
      "hydrophilic-oleophilic-surface",
    ) as SciencePageData;
    expect(science.oneSentence.length).toBeGreaterThan(10);
    expect(science.relatedTechniques?.[0]?.slug).toBe("lithography");
  });
});

describe("Term (registration)", () => {
  it("어원·일상 비유 정의를 가진다 (§1.3)", () => {
    const term = getFixture("term", "registration") as TermPageData;
    expect(term.simpleDefinition).toMatch(/스티커|비슷/);
    expect(term.etymology?.body?.length).toBeGreaterThan(0);
  });
});
