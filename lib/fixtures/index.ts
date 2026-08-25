import type {
  ArtworkPageData,
  BridgePageData,
  EntryPageData,
  NodeCard,
  SciencePageData,
  StoryPageData,
  TermPageData,
  TechniquePageData,
} from "@/lib/sanity/types";
import { posterEntry } from "./poster";
import { lithographyTechnique } from "./lithography";
import { moulinRougeArtwork } from "./moulinRouge";
import { gumArabicStory } from "./gumArabic";
import { registrationTerm } from "./registration";
import { patterningBridge } from "./patterning";
import { hydrophilicOleophilicScience } from "./hydrophilic";
import { woodcutTechnique } from "./woodcut";
import { hiroshigeWildGeeseArtwork } from "./hiroshige";
import { greatWaveStory, kentoTerm } from "./ukiyoE";

/**
 * §3.6 typed fixtures
 * Sanity 프로젝트가 연결되기 전까지 데이터 레이어의 폴백이자,
 * published/draft가 동일 필드 shape을 갖는지 검증하는 계약 fixture다.
 */
export type FixtureData =
  | EntryPageData
  | TechniquePageData
  | ArtworkPageData
  | StoryPageData
  | TermPageData
  | SciencePageData
  | BridgePageData;

const FIXTURES: Record<string, FixtureData> = {
  "entry/poster": posterEntry,
  "technique/lithography": lithographyTechnique,
  "artwork/moulin-rouge-la-goulue": moulinRougeArtwork,
  "story/why-gum-arabic-likes-water": gumArabicStory,
  "term/registration": registrationTerm,
  "bridge/from-printing-to-patterning": patterningBridge,
  "scienceConcept/hydrophilic-oleophilic-surface": hydrophilicOleophilicScience,
  // 목판화 확장 (§8)
  "technique/woodcut": woodcutTechnique,
  "artwork/hiroshige-wild-geese": hiroshigeWildGeeseArtwork,
  "story/how-many-blocks-great-wave": greatWaveStory,
  "term/kento": kentoTerm,
};

export function getFixture(type: string, slug: string): FixtureData | null {
  return FIXTURES[`${type}/${slug}`] ?? null;
}

export function listFixtures(): FixtureData[] {
  return Object.values(FIXTURES);
}

/** 홈/탐험 지도용 카드 목록 (§0.1 Slice 순서) */
export const SLICE_CARDS: NodeCard[] = [
  { _id: posterEntry._id, _type: "entry", title: posterEntry.title, slug: "poster", shortDescription: posterEntry.shortDescription, domain: posterEntry.domain, thumbnail: "/images/cheret-esclave.jpg" },
  { _id: lithographyTechnique._id, _type: "technique", title: lithographyTechnique.title, slug: "lithography", shortDescription: lithographyTechnique.shortDescription, domain: lithographyTechnique.domain, thumbnail: "/diagrams/lithography-water-ink-surface.svg" },
  { _id: moulinRougeArtwork._id, _type: "artwork", title: moulinRougeArtwork.title, slug: "moulin-rouge-la-goulue", shortDescription: moulinRougeArtwork.shortDescription, domain: moulinRougeArtwork.domain, thumbnail: moulinRougeArtwork.heroImage?.url ?? null },
  { _id: gumArabicStory._id, _type: "story", title: gumArabicStory.question, slug: "why-gum-arabic-likes-water", shortDescription: undefined, domain: gumArabicStory.domain, thumbnail: "/images/gum-arabic-exuding.jpg" },
  { _id: registrationTerm._id, _type: "term", title: registrationTerm.term, slug: "registration", shortDescription: "색 하나당 판 하나. 어긋나지 않게 겹치는 일은 왜 어려울까?", domain: registrationTerm.domain, thumbnail: "/diagrams/registration-alignment-compare.svg" },
  { _id: patterningBridge._id, _type: "bridge", title: patterningBridge.title, slug: "from-printing-to-patterning", shortDescription: patterningBridge.shortDescription, domain: patterningBridge.domain, thumbnail: "/images/silicon-wafer.jpg" },
];

/** 확장 경로 — 목판화 (§8 확장) */
export const WOODCUT_CARDS: NodeCard[] = [
  { _id: woodcutTechnique._id, _type: "technique", title: woodcutTechnique.title, slug: "woodcut", shortDescription: woodcutTechnique.shortDescription, domain: woodcutTechnique.domain, thumbnail: "/images/woodcut-inking.jpg" },
  { _id: hiroshigeWildGeeseArtwork._id, _type: "artwork", title: hiroshigeWildGeeseArtwork.title, slug: "hiroshige-wild-geese", shortDescription: hiroshigeWildGeeseArtwork.shortDescription, domain: hiroshigeWildGeeseArtwork.domain, thumbnail: "/images/hiroshige-wild-geese.jpg" },
  { _id: greatWaveStory._id, _type: "story", title: greatWaveStory.question, slug: "how-many-blocks-great-wave", shortDescription: undefined, domain: greatWaveStory.domain, thumbnail: "/images/hokusai-wave.jpg" },
  { _id: kentoTerm._id, _type: "term", title: kentoTerm.term, slug: "kento", shortDescription: kentoTerm.simpleDefinition, domain: kentoTerm.domain, thumbnail: "/images/hiroshige-wild-geese.jpg" },
];
