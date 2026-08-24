/**
 * seed/seed.ndjson 생성기
 *
 * Vertical Slice 6노드 + 보조 문서(person/material/place/source/relation/imageAssetRecord)를
 * Sanity import용 NDJSON으로 만든다.
 *
 * 사용:
 *   pnpm tsx scripts/generate-seed.ts
 *   npx sanity dataset import ./seed/seed.ndjson <dataset> --replace
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

import { posterEntry } from "../lib/fixtures/poster";
import { lithographyTechnique } from "../lib/fixtures/lithography";
import { moulinRougeArtwork } from "../lib/fixtures/moulinRouge";
import { gumArabicStory } from "../lib/fixtures/gumArabic";
import { registrationTerm } from "../lib/fixtures/registration";
import { patterningBridge } from "../lib/fixtures/patterning";
import { hydrophilicOleophilicScience } from "../lib/fixtures/hydrophilic";
import { SOURCES } from "../lib/fixtures/sources";

const ACCESSED = "2026-08-24";
const NOW = "2026-08-24T00:00:00Z";

type Doc = Record<string, unknown> & { _id: string; _type: string };

function ref(id: string) {
  return { _type: "reference", _ref: id };
}

// ---------------------------------------------------------------- sources
const SOURCE_IDS: Record<string, string> = {
  metLaGoulue: "source-met-la-goulue",
  momaLaGoulue: "source-moma-la-goulue",
  aicLaGoulue: "source-aic-la-goulue",
  metLithographyEssay: "source-met-lithography-essay",
  britannicaLithography: "source-britannica-lithography",
  britannicaGumArabic: "source-britannica-gum-arabic",
  wikipediaGumArabic: "source-wikipedia-gum-arabic",
  wikipediaPhotolithography: "source-wikipedia-photolithography",
};

const sourceDocs: Doc[] = Object.entries(SOURCE_IDS).map(([key, id]) => ({
  _id: id,
  _type: "source",
  title: SOURCES[key].title,
  sourceType: SOURCES[key].sourceType,
  institution: SOURCES[key].institution,
  author: SOURCES[key].author,
  year: SOURCES[key].year,
  url: SOURCES[key].url,
  accessedAt: SOURCES[key].accessedAt ?? ACCESSED,
  notes: SOURCES[key].notes,
}));

// ---------------------------------------------------------------- entities
const personDocs: Doc[] = [
  {
    _id: "person-henri-de-toulouse-lautrec",
    _type: "person",
    name: "Henri de Toulouse-Lautrec",
    birthYear: 1864,
    deathYear: 1901,
    roles: ["화가", "석판가", "포스터 아티스트"],
    shortDescription:
      "몽마르트르의 오락 문화를 그린 프랑스 화가. 첫 의뢰 포스터 ‘물랭루주: 라 굴루’로 일약 유명해졌다.",
    sources: [ref(SOURCE_IDS.metLaGoulue)],
  },
];

const materialDocs: Doc[] = [
  {
    _id: "material-gum-arabic",
    _type: "material",
    name: "아라비아고무 (Gum arabic)",
    alternateNames: ["acacia gum", "아카시아 검"],
    composition: "아카시아 수액의 다당류·단백질 복합체",
    simpleDescription:
      "마시멜로와 탄산음료에도 쓰이는 아카시아 수액. 물을 좋아하는 사슬 분자라 석판 판의 빈 면을 물막으로 덮어준다.",
    properties: ["친수성", "수용성 점조액", "천연 유화제"],
    relatedScienceConcepts: [ref("science-hydrophilic-oleophilic-surface")],
    sources: [ref(SOURCE_IDS.britannicaGumArabic), ref(SOURCE_IDS.wikipediaGumArabic)],
  },
  {
    _id: "material-litho-stone",
    _type: "material",
    name: "석회암 판",
    simpleDescription: "색 하나당 한 개씩 준비한 매끈한 돌판. 색이 네 개면 판도 네 개다.",
    properties: ["다공성", "친수성 표면"],
    sources: [ref(SOURCE_IDS.britannicaLithography)],
  },
  {
    _id: "material-litho-ink",
    _type: "material",
    name: "기름성 잉크와 크레용",
    simpleDescription: "물을 미워하는 성질을 이용해, 그린 자리에만 머문다.",
    properties: ["소수성", "친유성"],
    sources: [ref(SOURCE_IDS.britannicaLithography)],
  },
];

const placeDocs: Doc[] = [
  {
    _id: "place-paris-montmartre",
    _type: "place",
    name: "파리 몽마르트르",
    shortDescription:
      "19세기 말 카바레와 무도장이 밀집한 파리의 언덕. 포스터 문화의 무대였다.",
    geo: { _type: "geopoint", lat: 48.8867, lng: 2.3431 },
    sources: [ref(SOURCE_IDS.momaLaGoulue)],
  },
];

// ---------------------------------------------------------------- image records
const imageRecords: Doc[] = [
  {
    _id: "image-cheret-saxoleine",
    _type: "imageAssetRecord",
    originType: "institutional",
    institution: "Bibliothèque nationale de France (Gallica)",
    sourcePage: "https://gallica.bnf.fr/ark:/12148/btv1b9015469h",
    sourceImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/%22L%27Esclave_blanche%22_par_Gustave_Aimard%2C_au_%22Journal_du_Dimanche%22..._-_affiche_-_Jules_Ch%C3%A9ret_-_btv1b9015469h.jpg",
    license: "Public Domain (BnF Gallica, Wikimedia Commons)",
    publicDomain: true,
    creditLine: "Jules Chéret, L'Esclave blanche — BnF Gallica, btv1b9015469h",
    accessionNumber: "btv1b9015469h",
    dateVerified: ACCESSED,
  },
  {
    _id: "image-met-la-goulue",
    _type: "imageAssetRecord",
    originType: "institutional",
    institution: "The Metropolitan Museum of Art",
    sourcePage: "https://www.metmuseum.org/art/collection/search/333990",
    license: "Open Access — Public Domain (CC0)",
    publicDomain: true,
    creditLine:
      "Henri de Toulouse-Lautrec, Moulin Rouge: La Goulue, 1891. Harris Brisbane Dick Fund, 1932. Image: The Metropolitan Museum of Art (Open Access)",
    accessionNumber: "32.88.12",
    dateVerified: ACCESSED,
  },
  {
    _id: "image-llm-water-ink",
    _type: "imageAssetRecord",
    originType: "llmGenerated",
    generationProvider: "ox-alpha (opencode)",
    model: "x-preview-f-free",
    prompt:
      "석판화 표면 단면 — 친유성 그린 선은 잉크를 붙잡고 친수성 빈 면은 물막으로 잉크를 밀어낸다는 것을 한눈에 보여주는 교육 다이어그램. 이미지 내 텍스트 최소화.",
    promptVersion: "v1",
    generatedAt: NOW,
    referenceSources: [
      ref(SOURCE_IDS.metLithographyEssay),
      ref(SOURCE_IDS.britannicaLithography),
    ],
    humanReviewed: false,
    accuracyStatus: "draft",
    explanatoryOnly: true,
    notes: "물막/기름막 두께 과장, 분자 구조 생략. public/diagrams/PROVENANCE.md 참조.",
  },
  {
    _id: "image-llm-registration",
    _type: "imageAssetRecord",
    originType: "llmGenerated",
    generationProvider: "ox-alpha (opencode)",
    model: "x-preview-f-free",
    prompt:
      "같은 도형 세 개의 색판을 정합/살짝 어긋남/크게 어긋남으로 비교한 registration 교육 다이어그램. 레지스터 마크 위치 표시.",
    promptVersion: "v1",
    generatedAt: NOW,
    referenceSources: [ref(SOURCE_IDS.metLaGoulue), ref(SOURCE_IDS.momaLaGoulue)],
    humanReviewed: false,
    accuracyStatus: "draft",
    explanatoryOnly: true,
    notes: "관습적 원색 사용, 혼색 단순화. public/diagrams/PROVENANCE.md 참조.",
  },
];

// ---------------------------------------------------------------- relations
const relationDocs: Doc[] = [
  {
    _id: "rel-poster-lithography",
    _type: "relation",
    source: ref("entry-poster"),
    target: ref("technique-lithography"),
    relationType: "relatedTo",
    relationNature: "historical",
    evidenceLevel: "documented",
    label: "포스터 물량을 가능하게 만든 인쇄법",
    teaser:
      "수천 장을 찍으려면 돌을 파는 방식으로는 감당이 안 됐다 — 그래서 돌을 파지 않는 인쇄법이 주목받았다.",
    editorialPriority: 1,
    sources: [ref(SOURCE_IDS.metLithographyEssay), ref(SOURCE_IDS.britannicaLithography)],
  },
  {
    _id: "rel-poster-moulin",
    _type: "relation",
    source: ref("entry-poster"),
    target: ref("artwork-moulin-rouge-la-goulue"),
    relationType: "appearsIn",
    relationNature: "historical",
    evidenceLevel: "documented",
    label: "이 경쟁의 승자가 된 작품",
    teaser: "여섯 자 높이의 포스터 하나가 파리 전체의 시선을 붙잡았다.",
    editorialPriority: 2,
    sources: [ref(SOURCE_IDS.momaLaGoulue), ref(SOURCE_IDS.aicLaGoulue)],
  },
  {
    _id: "rel-lithography-story-gum",
    _type: "relation",
    source: ref("technique-lithography"),
    target: ref("story-why-gum-arabic-likes-water"),
    relationType: "explains",
    relationNature: "historical",
    evidenceLevel: "documented",
    label: "빈 면을 물막으로 덮어주는 재료의 비밀",
    teaser: "마시멜로에도 들어가는 아카시아 수액이 인쇄 공정의 숨은 주인공이다.",
    editorialPriority: 1,
    sources: [ref(SOURCE_IDS.britannicaGumArabic), ref(SOURCE_IDS.wikipediaGumArabic)],
  },
  {
    _id: "rel-lithography-registration",
    _type: "relation",
    source: ref("technique-lithography"),
    target: ref("term-registration"),
    relationType: "relatedTo",
    relationNature: "conceptual",
    evidenceLevel: "probable",
    label: "색판이 어긋나면 생기는 일",
    teaser: "4색 포스터는 색 하나당 판 하나. 종이를 몇 번이고 다시 놓아야 한다는 뜻이다.",
    editorialPriority: 2,
    sources: [ref(SOURCE_IDS.metLaGoulue)],
  },
  {
    _id: "rel-artwork-registration",
    _type: "relation",
    source: ref("artwork-moulin-rouge-la-goulue"),
    target: ref("term-registration"),
    relationType: "relatedTo",
    relationNature: "historical",
    evidenceLevel: "documented",
    label: "색 세 장을 겹치는 일의 기술적 이름",
    teaser: "얼굴과 스커트가 무너지지 않으려면, 판마다 정확히 같은 자리에 찍혀야 한다.",
    editorialPriority: 1,
    sources: [ref(SOURCE_IDS.metLaGoulue)],
  },
  {
    _id: "rel-artwork-bridge",
    _type: "relation",
    source: ref("artwork-moulin-rouge-la-goulue"),
    target: ref("bridge-from-printing-to-patterning"),
    relationType: "conceptuallySimilarTo",
    relationNature: "conceptual",
    evidenceLevel: "probable",
    label: "거대한 ‘복제의 문명’으로 이어지는 다리",
    teaser: "수천 장의 포스터와 수억 개의 트랜지스터 — 같은 질문이 반복된다: 어떻게 똑같이?",
    editorialPriority: 2,
    sources: [ref(SOURCE_IDS.wikipediaPhotolithography)],
  },
  {
    _id: "rel-story-science-surface",
    _type: "relation",
    source: ref("story-why-gum-arabic-likes-water"),
    target: ref("science-hydrophilic-oleophilic-surface"),
    relationType: "explains",
    relationNature: "conceptual",
    evidenceLevel: "documented",
    label: "같은 원리의 과학 이름",
    teaser: "‘물을 좋아함’에는 정확한 용어가 있다 — 친수성/친유성 표면.",
    editorialPriority: 2,
    sources: [ref(SOURCE_IDS.britannicaLithography)],
  },
  {
    _id: "rel-bridge-registration",
    _type: "relation",
    source: ref("bridge-from-printing-to-patterning"),
    target: ref("term-registration"),
    relationType: "relatedTo",
    relationNature: "conceptual",
    evidenceLevel: "probable",
    label: "같은 '정합' 문제의 인쇄 버전",
    teaser: "색 세 장을 겹치는 인쇄공의 고민이 개념의 출발점이다.",
    editorialPriority: 1,
    sources: [ref(SOURCE_IDS.metLaGoulue)],
  },
  {
    _id: "rel-bridge-lithography",
    _type: "relation",
    source: ref("bridge-from-printing-to-patterning"),
    target: ref("technique-lithography"),
    relationType: "relatedTo",
    relationNature: "historical",
    evidenceLevel: "documented",
    label: "선택적 부착을 처음 정리한 공정",
    teaser: "물과 기름의 규칙은 여기서 출발했다.",
    editorialPriority: 2,
    sources: [ref(SOURCE_IDS.metLithographyEssay)],
  },
];

// ---------------------------------------------------------------- pages
const entryDoc: Doc = {
  _id: "entry-poster",
  _type: "entry",
  title: posterEntry.title,
  slug: { _type: "slug", current: "poster" },
  introQuestion: posterEntry.introQuestion,
  simpleExplanation: posterEntry.simpleExplanation,
  shortDescription: posterEntry.shortDescription,
  domain: posterEntry.domain,
  status: "published",
  heroImage: {
    _type: "image",
    alt: "쥘 셰레의 석판화 포스터 ‘Saxoléine’(1893). 거리 벽을 장식하던 대형 색채 포스터의 대표 사례.",
    visualRecord: ref("image-cheret-saxoleine"),
  },
  connections: [ref("rel-poster-lithography"), ref("rel-poster-moulin")],
  recommendedPath: [
    { reason: "포스터를 수천 장 찍게 만든 기술의 원리가 궁금해진다면", target: ref("technique-lithography") },
    { reason: "원리가 아니라 결과물부터 보고 싶다면", target: ref("artwork-moulin-rouge-la-goulue") },
  ],
  sources: [ref(SOURCE_IDS.metLithographyEssay), ref(SOURCE_IDS.britannicaLithography)],
  publishedAt: NOW,
};

const techniqueDoc: Doc = {
  _id: "technique-lithography",
  _type: "technique",
  title: lithographyTechnique.title,
  slug: { _type: "slug", current: "lithography" },
  family: lithographyTechnique.family,
  tenSecondExplanation: lithographyTechnique.tenSecondExplanation,
  shortDescription: lithographyTechnique.shortDescription,
  domain: lithographyTechnique.domain,
  status: "published",
  process: [
    {
      title: "1 · 그리기",
      description: lithographyTechnique.process![0].description,
    },
    {
      title: "2 · 고정하기 (에칭)",
      description: lithographyTechnique.process![1].description,
    },
    {
      title: "3 · 적시기",
      description: lithographyTechnique.process![2].description,
    },
    {
      title: "4 · 잉크 롤러",
      description: lithographyTechnique.process![3].description,
      image: {
        _type: "staticDiagramPlaceholder",
        note: "Studio에서 staticDiagram 객체를 만들고 asset에 /diagrams/lithography-water-ink-surface.svg 업로드 + visualRecord=image-llm-water-ink 연결",
      },
    },
    {
      title: "5 · 압착해서 찍기",
      description: lithographyTechnique.process![4].description,
    },
  ],
  whyItAppeared: undefined,
  sideTracks: [ref("rel-lithography-story-gum"), ref("rel-lithography-registration")],
  scienceConcepts: [ref("science-hydrophilic-oleophilic-surface")],
  representativeArtwork: ref("artwork-moulin-rouge-la-goulue"),
  interactiveDiagram: {
    interactiveKey: "lithography-water-ink",
    title: "표면을 바꿔보세요",
    intro: lithographyTechnique.interactiveDiagram?.intro,
    fallbackExplanation: lithographyTechnique.interactiveDiagram!.fallbackExplanation,
  },
  sources: [ref(SOURCE_IDS.metLithographyEssay), ref(SOURCE_IDS.britannicaLithography)],
  publishedAt: NOW,
};

void lithographyTechnique;

const artworkDoc: Doc = {
  _id: "artwork-moulin-rouge-la-goulue",
  _type: "artwork",
  title: moulinRougeArtwork.title,
  slug: { _type: "slug", current: "moulin-rouge-la-goulue" },
  year: 1891,
  artist: ref("person-henri-de-toulouse-lautrec"),
  technique: ref("technique-lithography"),
  thirtySecondExplanation: moulinRougeArtwork.thirtySecondExplanation,
  shortDescription: moulinRougeArtwork.shortDescription,
  domain: moulinRougeArtwork.domain,
  status: "published",
  materials: [ref("material-litho-stone"), ref("material-litho-ink")],
  scienceConcepts: [ref("science-hydrophilic-oleophilic-surface")],
  heroImage: {
    _type: "image",
    alt: moulinRougeArtwork.heroImage!.alt,
    // 실제 에셋은 Studio/업로드 후 연결. 권리 기록은 즉시 유효하다.
    visualRecord: ref("image-met-la-goulue"),
  },
  unexpectedConnections: [ref("rel-artwork-registration"), ref("rel-artwork-bridge")],
  sources: [ref(SOURCE_IDS.metLaGoulue), ref(SOURCE_IDS.momaLaGoulue), ref(SOURCE_IDS.aicLaGoulue)],
  publishedAt: NOW,
};

const storyDoc: Doc = {
  _id: "story-why-gum-arabic-likes-water",
  _type: "story",
  question: gumArabicStory.question,
  slug: { _type: "slug", current: "why-gum-arabic-likes-water" },
  shortAnswer: gumArabicStory.shortAnswer,
  storyBody: gumArabicStory.storyBody,
  shortDescription: gumArabicStory.shortDescription,
  domain: gumArabicStory.domain,
  status: "published",
  connections: [ref("rel-lithography-story-gum"), ref("rel-story-science-surface")],
  furtherReading: [ref(SOURCE_IDS.britannicaGumArabic), ref(SOURCE_IDS.wikipediaGumArabic)],
  sources: [
    ref(SOURCE_IDS.britannicaGumArabic),
    ref(SOURCE_IDS.wikipediaGumArabic),
    ref(SOURCE_IDS.metLithographyEssay),
  ],
  publishedAt: NOW,
};

const termDoc: Doc = {
  _id: "term-registration",
  _type: "term",
  term: registrationTerm.term,
  slug: { _type: "slug", current: "registration" },
  originalLanguage: registrationTerm.originalLanguage,
  pronunciation: registrationTerm.pronunciation,
  literalMeaning: registrationTerm.literalMeaning,
  simpleDefinition: registrationTerm.simpleDefinition,
  contextDefinition: registrationTerm.contextDefinition,
  etymology: registrationTerm.etymology,
  shortDescription: registrationTerm.shortDescription ?? "색판을 맞추는 기술",
  domain: registrationTerm.domain,
  status: "published",
  sources: [ref(SOURCE_IDS.metLaGoulue), ref(SOURCE_IDS.momaLaGoulue)],
  publishedAt: NOW,
};

const bridgeDoc: Doc = {
  _id: "bridge-from-printing-to-patterning",
  _type: "bridge",
  title: patterningBridge.title,
  slug: { _type: "slug", current: "from-printing-to-patterning" },
  introQuestion: patterningBridge.introQuestion,
  shortDescription: patterningBridge.shortDescription,
  domain: patterningBridge.domain,
  status: "published",
  timeline: patterningBridge.timeline,
  commonProblem: patterningBridge.commonProblem,
  comparisonTable: patterningBridge.comparisonTable,
  keyDifferences: patterningBridge.keyDifferences,
  relatedNodes: [ref("rel-bridge-registration"), ref("rel-bridge-lithography")],
  closingQuestion: patterningBridge.closingQuestion,
  sources: [ref(SOURCE_IDS.wikipediaPhotolithography), ref(SOURCE_IDS.britannicaLithography)],
  publishedAt: NOW,
};

const scienceDoc: Doc = {
  _id: "science-hydrophilic-oleophilic-surface",
  _type: "scienceConcept",
  title: hydrophilicOleophilicScience.title,
  slug: { _type: "slug", current: "hydrophilic-oleophilic-surface" },
  oneSentence: hydrophilicOleophilicScience.oneSentence,
  standardExplanation: hydrophilicOleophilicScience.standardExplanation,
  deepExplanation: hydrophilicOleophilicScience.deepExplanation,
  shortDescription: hydrophilicOleophilicScience.shortDescription,
  domain: hydrophilicOleophilicScience.domain,
  status: "published",
  relatedMaterials: [ref("material-gum-arabic")],
  relatedTechniques: [ref("technique-lithography")],
  sources: [ref(SOURCE_IDS.britannicaLithography), ref(SOURCE_IDS.metLithographyEssay)],
  publishedAt: NOW,
};

const docs: Doc[] = [
  ...sourceDocs,
  ...personDocs,
  ...materialDocs,
  ...placeDocs,
  ...imageRecords,
  ...relationDocs,
  entryDoc,
  techniqueDoc,
  artworkDoc,
  storyDoc,
  termDoc,
  bridgeDoc,
  scienceDoc,
];

const outDir = join(process.cwd(), "seed");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "seed.ndjson"), docs.map((d) => JSON.stringify(d)).join("\n") + "\n");
console.log(`seed/seed.ndjson 생성 완료 (${docs.length} documents)`);
