import type { TechniquePageData } from "@/lib/sanity/types";
import type { StaticDiagramProjection } from "@/lib/pageTypes";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

const surfaceDiagram: StaticDiagramProjection = {
  title: "석판화 표면의 물/기름 선택적 부착",
  alt: "돌 판 단면 위에서 그린 선은 기름 잉크를 붙잡고, 젖은 빈 면은 잉크를 밀어낸다는 것을 보여주는 설명 다이어그램",
  caption:
    "AI 생성 설명 이미지. 돌 판 단면: 왼쪽 그린 자리는 기름을 붙잡고, 오른쪽 빈 면은 물막으로 덮여 잉크를 밀어낸다.",
  longDescription:
    "가로로 놓인 석회암 판의 단면도. 판 왼쪽 위에는 기름 성분으로 그린 어두운 선이 있고, 기름 잉크 롤러에서 내려온 잉크가 이 선에만 달라붙는다. 판 오른쪽 빈 면은 파란 물방울과 얇은 물막으로 덮여 있어, 잉크가 이 위에서는 미끄러져 지나간다. 아래 범례: 검정=기름(잉크), 파랑=물, 회색=돌 표면.",
  url: "/diagrams/lithography-water-ink-surface.svg",
  visualRecord: {
    originType: "llmGenerated",
    generationProvider: "ox-alpha (opencode)",
    model: "x-preview-f-free",
    generatedAt: "2026-08-24T00:00:00Z",
    humanReviewed: false,
    accuracyStatus: "draft",
    explanatoryOnly: true,
    notes: "물막/기름막을 두꺼운 층으로 과장. 분자 구조와 화학 반응 생략. public/diagrams/PROVENANCE.md 참조.",
    referenceSources: [
      { title: SOURCES.metLithographyEssay.title, url: SOURCES.metLithographyEssay.url },
      { title: SOURCES.britannicaLithography.title, url: SOURCES.britannicaLithography.url },
    ],
  },
};

const registrationDiagram: StaticDiagramProjection = {
  title: "다색 인쇄의 정합 비교",
  alt: "같은 세 개의 원이 색판별로 정확히 겹쳐진 경우와 어긋난 경우를 나란히 비교하는 설명 다이어그램",
  caption: "AI 생성 설명 이미지. 색 하나당 판 하나 — 판마다 같은 눈금을 겨눠야 한다.",
  longDescription:
    "세 개의 패널. 첫째 패널: 청록·분홍·노랑 세 원이 같은 중심에 겹쳐 ‘정합’ 상태. 둘째 패널: 원들이 조금씩 밀려 살짝 어긋남. 셋째 패널: 크게 어긋나 형체를 알아보기 힘든 상태. 각 패널 위에는 십자+원형 레지스터 마크가 그려져 있다.",
  url: "/diagrams/registration-alignment-compare.svg",
  visualRecord: {
    originType: "llmGenerated",
    generationProvider: "ox-alpha (opencode)",
    model: "x-preview-f-free",
    generatedAt: "2026-08-24T00:00:00Z",
    humanReviewed: false,
    accuracyStatus: "draft",
    explanatoryOnly: true,
    notes: "실제 CMY 색순서 대신 관습적 원색 사용. public/diagrams/PROVENANCE.md 참조.",
    referenceSources: [
      { title: SOURCES.metLaGoulue.title, url: SOURCES.metLaGoulue.url },
      { title: SOURCES.momaLaGoulue.title, url: SOURCES.momaLaGoulue.url },
    ],
  },
};

export const lithographyTechnique: TechniquePageData = {
  _id: "technique-lithography",
  _type: "technique",
  title: "돌을 파지 않는 판화, 석판화",
  family: "평판 인쇄 (planographic)",
  tenSecondExplanation:
    "돌 표면은 물을 좋아하는 자리와 기름을 좋아하는 자리로 나뉜다. 기름 성분인 잉크는 기름 쪽에만 붙고, 젖은 물 쪽에는 밀려난다. 그래서 돌을 파지 않아도, 그린 자리만 잉크를 받아 종이에 찍힌다.",
  shortDescription:
    "돌을 파지 않는데 어떻게 같은 그림이 반복해서 찍힐까? 물과 기름의 은밀한 합작.",
  domain: "technique",
  process: [
    {
      title: "1 · 그리기",
      description:
        "기름 성분이 든 크레용(석판 크레용)과 물감처럼 쓰는 기름 먹(터셰)으로 매끈한 석회암 판 위에 바로 그린다. 새기지 않고, 붓과 연필처럼 쓰는 것이 핵심이다.",
      image: null,
    },
    {
      title: "2 · 고정하기 (에칭)",
      description:
        "아라비아고무에 약한 산을 섞은 용액을 발라 화학적 약속을 굳힌다 — 그린 자리는 기름을 더 단단히 붙잡고, 빈 자리는 물을 좋아하게 된다.",
      image: null,
    },
    {
      title: "3 · 적시기",
      description:
        "스펀지로 판 전체에 물을 발랐다 닦으면, 물은 기름을 미워하는 빈 면에만 얇은 막으로 남는다.",
      image: null,
    },
    {
      title: "4 · 잉크 롤러",
      description:
        "기름 성분 잉크를 롤러로 문지른다. 젖은 빈 면은 잉크를 거부하고, 그린 선만 잉크를 받아 다시 나타난다.",
      image: surfaceDiagram,
    },
    {
      title: "5 · 압착해서 찍기",
      description:
        "종이를 얹고 프레스로 누르면 그림이 옮겨진다. 색을 더하려면? 색마다 판을 따로 만들어 같은 자리에 겹쳐 찍는다 — 여기서 정합(registration) 문제가 시작된다.",
      image: registrationDiagram,
    },
  ],
  whyItAppeared: {
    heading: "왜 하필 그때, 하필 돌이었을까?",
    body: [
      {
        _type: "block",
        _key: "w1a",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "w1s1",
            text: "1790년대 바이에른의 배우 출신 알로이스 제네펠더(Alois Senefelder)는 무대 대본과 악보를 싸게 많이 복사할 방법을 찾고 있었다. 금속을 새기는 데는 돈과 시간이 너무 들었다. 그는 솔nhof 지방의 다공성 석회암 위에 기름 크레용으로 적어 넣고, 물과 잉크가 서로 밀어내는 성질로 찍어내는 방식을 실험 끝에 정리했다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "w2a",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "w2s1",
            text: "결정적인 조건은 재료였다. 석회암의 미세한 구멍은 물을 잘 머금고, 기름 크레용은 그 위에 잘 붙는다. 도시의 음악 출판업이 커지면서 악보 수요가 폭증한 것도 우연이 아니었다 — 값싼 복제 기술은 늘 그것을 소비할 시장과 함께 자란다.",
          },
        ],
      },
    ],
  },
  historicalContext: {
    heading: "손그림이 수천 장이 되기까지",
    body: [
      {
        _type: "block",
        _key: "h1a",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "h1s1",
            text: "‘석판ography(lithography)’라는 이름은 그리스어로 돌(lithos)에 쓴다(graphein)에서 왔다. 19세기 동안 이 기술은 악보에서 지도, 광고 포스터까지 확장되며 대량복제의 일상 도구가 되었고, 예술가들은 화랑이 아니라 거리 벽에 걸릴 그림을 그리기 시작했다.",
          },
        ],
      },
    ],
  },
  scienceConcepts: [CARDS.hydrophilicOleophilic],
  representativeArtwork: CARDS.moulinRouge,
  sideTracks: [
    {
      relationType: "explains",
      relationNature: "historical",
      evidenceLevel: "documented",
      label: "빈 면을 물박으로 덮어주는 재료의 비밀",
      teaser: "마시멜로에도 들어가는 아카시아 수액이 인쇄 공정의 숨은 주인공이다.",
      editorialPriority: 1,
      sources: [SOURCES.britannicaGumArabic, SOURCES.wikipediaGumArabic],
      target: CARDS.gumArabic,
    },
    {
      relationType: "relatedTo",
      relationNature: "conceptual",
      evidenceLevel: "probable",
      label: "색판이 어긋나면 생기는 일",
      teaser: "4색 포스터는 색 하나당 판 하나. 종이를 몇 번이고 다시 놓아야 한다는 뜻이다.",
      editorialPriority: 2,
      sources: [SOURCES.metLaGoulue],
      target: CARDS.registration,
    },
  ],
  staticDiagrams: [surfaceDiagram, registrationDiagram],
  interactiveDiagram: {
    interactiveKey: "lithography-water-ink",
    title: "표면을 바꿔보세요",
    intro:
      "판의 상태를 바꿔가며 물과 잉크가 어디에 붙는지 관찰해 보세요. 에칭(고정) 전후로 무엇이 달라지는지가 핵심입니다.",
    fallbackExplanation:
      "석판화 판에는 두 종류의 자리가 있다. 기름 크레용으로 그린 자리는 기름 잉크를 붙잡고, 물로 젖은 빈 자리는 잉크를 밀어낸다. 인터랙션 없이도 이 규칙 하나면 전체 공정을 이해할 수 있다: 그리고 → 고정하고 → 적시고 → 잉크를 문지르고 → 찍는다.",
    fallbackDiagram: surfaceDiagram,
  },
  sources: [SOURCES.metLithographyEssay, SOURCES.britannicaLithography],
};
