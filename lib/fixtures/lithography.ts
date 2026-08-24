import type { TechniquePageData } from "@/lib/sanity/types";
import type { StaticDiagramProjection } from "@/lib/pageTypes";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

const surfaceDiagram: StaticDiagramProjection = {
  title: "석판화 표면의 물/기름 선택적 부착",
  alt: "돌 판 단면 위에서 그린 선은 기름 잉크를 붙잡고, 젖은 빈 면은 잉크를 밀어낸다는 것을 보여주는 설명 다이어그램",
  caption:
    "AI 생성 설명 이미지 — 돌 판 단면: 왼쪽 그린 자리는 기름을 붙잡고, 오른쪽 빈 면은 물막으로 덮여 잉크를 밀어낸다.",
  longDescription:
    "가로로 놓인 석회암 판의 단면도. 판 왼쪽 위에는 기름 성분으로 그린 어두운 선이 있고, 기름 잉크 롤러에서 내려온 잉크가 이 선에만 달라붙는다. 판 오른쪽 빈 면은 파란 물방울과 얇은 물막으로 덮여 있어, 잉크가 이 위에서는 미끄러져 지나간다. 범례: 검정=기름(잉크), 파랑=물, 회색=돌 표면.",
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
  caption: "AI 생성 설명 이미지 — 색 하나당 판 하나, 판마다 같은 눈금을 겨눠야 한다.",
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
    "돌 표면은 물을 좋아하는 자리와 기름을 좋아하는 자리로 나뉜다. 기름 성분인 잉크는 기름 쪽에만 붙고, 젖은 물 쪽에는 밀려난다. 그래서 돌을 파지 않아도, 그린 자리만 잉크를 받아 종이에 찍힌다. 판의 잉크와 종이는 한 평면(same plane)에서 만난다 — 파인 홈도, 솟은 면도 없다.",
  shortDescription:
    "돌을 파지 않는데 어떻게 같은 그림이 반복해서 찍힐까? 물과 기름의 은밀한 합작.",
  domain: "technique",
  process: [
    {
      title: "1 · 그리기 — 돌 위에 바로 그린다",
      description:
        "기름 성분이 든 크레용(석판 크레용)이나 물감처럼 쓰는 기름 먹(터셰)으로 매끈한 석회암 판 위에 직접 그린다. 새기지 않고 붓과 연필처럼 쓴다. 예술가가 동판을 깎는 기술 없이도 표현할 수 있다는 점이 석판화가 빠르게 퍼진 이유 중 하나다.",
      image: null,
    },
    {
      title: "2 · 로진·활석 뿌리기와 고정하기 (에칭)",
      description:
        "그림이 완성되면 분말 로진과 활석을 뿌린 뒤, 아라비아고무에 약한 질산을 섞은 용액을 발라 화학적 약속을 굳힌다. 그린 자리는 기름을 더 단단히 붙잡고, 빈 돌면은 물을 좋아하는 성질로 바뀐다. 이 단계는 지문 같은 불필요한 기름이 판에 스미는 것도 막는다.",
      image: null,
    },
    {
      title: "3 · 그림 지우기, 그리고 적시기",
      description:
        "석판을 리소틴(lithotine) 같은 용제로 닦아내면 그려진 선의 윤곽만 아주 옅게 남는다. 이어 아스팔텀(asphaltum)을 문질러 닦은 뒤 스펀지로 물을 발랐다 닦으면, 물은 기름을 미워하는 빈 면에만 얇은 막으로 남는다.",
      image: null,
    },
    {
      title: "4 · 잉크 롤러 — 선택적 부착",
      description:
        "기름 성분 잉크를 롤러로 문지른다. 소수성(hydrophobic)인 잉크는 기름 크레용이 닿았던 자리—지금은 옅은 기름 흔적만 남은 자리—에만 달라붙고, 친수성(hydrophilic)인 빈 면은 잉크를 거부한다. 전사 용지(transfer paper)로 옮긴 그림은 이 단계에서 종이결(paper grain)까지 함께 찍힐 수 있어, 직접 돌에 그린 쪽이 더 선명하다.",
      image: surfaceDiagram,
    },
    {
      title: "5 · 압착해서 찍기 — 그리고 반복",
      description:
        "종이를 얹고 프레스로 누르면 이미지가 반전되어 옮겨진다. 색 하나당 판 하나가 필요하므로, 색이 네 개면 이 전 과정을 네 판에 대해 반복한다. 각 판을 정확히 같은 자리에 겹쳐야 하므로 정합(registration) 시스템—십자 눈금과 돌의 위치 고정—이 품질의 핵심이 된다. 찍힌 판은 연마해 지우고 얼마든지 재사용할 수 있어, 금속판을 새로 사야 하는 동판화보다 재료비가 적게 든다.",
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
            text: "1790년대 바이에른의 극작가 알로이스 제네펠더(Alois Senefelder)는 무대 대본과 악보를 싸게 많이 복사할 방법을 찾고 있었다. 구리 동판을 새기는 데는 숙련과 시간이 너무 들었다. 그는 솔른호펜(Solnhofen) 지방의 다공성 석회암 위에 기름 크레용으로 적어 넣고, 물과 잉크가 서로 밀어내는 성질로 찍어내는 방식을 실험 끝에 정리했다.",
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
            text: "결정적인 조건은 재료였다. 솔른호펜 석회암의 미세한 구멍은 물을 잘 머금고, 기름 크레용은 그 위에 잘 붙는다. 독일은 초기에 석판화의 중심이 됐지만, 19세기 초 프랑스가 혁신과 생산 모두에서 독일을 앞질렀고, 세기말에는 툴루즈=로트렉, 에드바르 뭉크 같은 예술가들이 석판화를 주 매체로 쓰게 됐다. 이 이야기는 늘 수요와 함께 자랐다 — 값싼 복제는 그것을 소비할 시장이 있을 때 퍼진다.",
          },
        ],
      },
    ],
  },
  historicalContext: {
    heading: "손그림이 수천 장이 되기까지 — 상업과 예술 사이",
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
            text: "‘석판ography(lithography)’는 그리스어 돌(lithos)에 쓴다(graphein)에서 왔다. 19세기 동안 기술은 악보에서 지도, 상품 라벨·포장지, 신문, 공문서까지 확장되며 대량복제의 일상 도구가 됐고, 예술가들은 화랑이 아니라 거리 벽에 걸릴 그림을 그리기 시작했다. 거리에 넘쳐난 대형 색채 포스터—쥘 셰레(Jules Chéret) 같은 작가들이 이끈 흐름—는 상업 인쇄가 예술이 될 수 있음을 보여줬다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2a",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "h2s1",
            text: "어느 쪽이든 공정 자체는 제판가(printmaker)와의 협업이었다. 예술가는 종종 돌에 직접 그려 자발성(spontaneity)과 즉시성을 살렸고, 제판가가 에칭·잉킹·압착을 맡았다. 작업장(아뜰리에)에는 수련공과 조수가 함께 있었고, 인쇄의 숙련도는 결국 제판가의 손끝에서 결정됐다.",
          },
        ],
      },
    ],
  },
  howToIdentify: {
    heading: "어떻게 알아볼까 — 석판화 감별법",
    body: [
      {
        _type: "block",
        _key: "id1",
        style: "normal",
        markDefs: [],
        children: [
          { _type: "span", _key: "id1s1", text: "석판화는 잉크·돌·종이가 한 평면에서 만난다. 그래서 동판화처럼 판흔(plate mark)도, 목판화처럼 찍힌 면의 눌린 자국도 없다. 종이 표면이 돌에 눌려 살짝 평평해진 흔적은 간혹 보이지만, 가장자리의 단차는 없다." },
        ],
      },
      {
        _type: "block",
        _key: "id2",
        style: "normal",
        markDefs: [],
        children: [
          { _type: "span", _key: "id2s1", text: "현미경으로 보면 석판화는 입자감(grainy) 있는 선과 다양한 농담을 보이지만, 오프셋이나 디지털 인쇄의 규칙적인 점(dot) 패턴은 없다. 색을 여러 판으로 겹친 크로모리소그래프라도 점이 아닌 면으로 색을 쌓는다. 종이 위에 잉크가 직접 앉아 있고, 파인 홈에 고인 잉크의 입체감도 없다." },
        ],
      },
    ],
  },
  efficacy: {
    heading: "왜 오래 쓰였나 — 빠르고 싸고 다시 쓸 수 있어서",
    body: [
      {
        _type: "block",
        _key: "ef1",
        style: "normal",
        markDefs: [],
        children: [
          { _type: "span", _key: "ef1s1", text: "대영박물관 판화 담당자였던 앤서니 그리피스(Antony Griffiths)는 이렇게 적었다." },
        ],
      },
      { _type: "block", _key: "efq", style: "blockquote", markDefs: [], children: [{ _type: "span", _key: "efqs1", text: "“석판 돌이나 판은 대체로 표면의 질, 그리는 방법, 작업의 섬세함, 인쇄공의 숙련도에 따라 다르지만, 상당히 많은 부수를 찍어낼 수 있다.” — Griffiths 1996, 104" }] },
      {
        _type: "block",
        _key: "ef2",
        style: "normal",
        markDefs: [],
        children: [
          { _type: "span", _key: "ef2s1", text: "게다가 석판은 표면을 갈아내면 이전 그림이 사라지고 새 그림을 그릴 준비가 된다. 판을 갈아 재사용할 수 있으니, 그림마다 새 금속판을 사야 하는 동판화보다 재료비가 적게 들고, 목판을 파는 고된 노동도 필요 없다. 빨랐고, 쌌고, 다시 쓸 수 있었고, 그리는 솜씨만 있으면 됐다 — 그래서 민주적인 복제 기술이 됐다." },
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
      label: "빈 면을 물막으로 덮어주는 재료의 비밀",
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
      "석판화 판에는 두 종류의 자리가 있다. 기름 크레용으로 그린 자리는 기름 잉크를 붙잡고, 물로 젖은 빈 자리는 잉크를 밀어낸다. 인터랙션 없이도 이 규칙 하나면 전체 공정을 이해할 수 있다: 그리고 → 로진·활석→고정하고 → 지우고 적시고 → 잉크를 문지르고 → 찍는다.",
    fallbackDiagram: surfaceDiagram,
  },
  sources: [SOURCES.metLithographyEssay, SOURCES.britannicaLithography],
};
