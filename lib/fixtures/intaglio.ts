import type { TechniquePageData } from "@/lib/sanity/types";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

/**
 * 동판화 (intaglio) — 세 번째 기법 노드.
 * 이미지: 렘브란트 자화상(Met CC0), 선한 사마리아인(Met PD), 고야(Met PD), 인쇄 작업 사진(CC BY-SA 3.0 de)
 */
export const intaglioTechnique: TechniquePageData = {
  _id: "technique-intaglio",
  _type: "technique",
  title: "홈에 잉크가 고이는 판화, 동판화",
  family: "요판 인쇄 (intaglio)",
  tenSecondExplanation:
    "금속판에 파거나 산으로 갉아낸 홈에 잉크를 채우고, 표면의 잉크는 닦아낸다. 종이를 얹어 세게 누르면 압력이 잉크를 홈에서 끌어올려 종이로 옮긴다. 목판화가 볼록한 면을 찍는다면, 동판화는 오목한 홈을 찍는다 — 그래서 선이 종이 위에 살짝 솟아오르는 촉감이 있다.",
  shortDescription:
    "금속판에 홈을 파고, 잉크를 채우고, 눌러 짜낸다. 명암의 마법사, 동판화.",
  domain: "technique",
  process: [
    {
      title: "1 · 판 준비 — 구리의 은빛 면",
      description:
        "매끈하게 연마한 구리판이 캔버스다. 구리는 부드러워서 손으로도 새길 수 있고, 산에도 정교하게 녹는다. 판의 모서리는 45도로 갈아 둥글게 다듬는다 — 나중에 종이에 판흔(plate mark)이라는 눌림 자국을 남기는 그 모서리다.",
      image: null,
    },
    {
      title: "2 · 새기기 또는 갉기 — 두 가지 방법",
      description:
        "버로(burin)라는 다이아몬드 끝 조각칼로 직접 파내면 에닝그래빙(engraving) — 정밀하고 규칙적인 선이 나온다. 반대로 왁스를 입힌 판에 바늘로 그린 뒤 산에 담가 금속을 녹이면 에칭(etching) — 화가의 손글씨 그대로의 자유로운 선이 나온다. 렘브란트는 에칭으로, 뒤러는 에닝그래빙으로 명성을 쌓았다.",
      image: null,
    },
    {
      title: "3 · 잉크 채우기 — 홈에 고이는 어둠",
      description:
        "판 전체에 잉크를 듬뿍 발라 홈마다 채워 넣는다. 이때 목판화와는 반대다 — 목판화에서 잉크는 볼록한 면 위에 있었지만, 동판화에서 잉크는 파낸 바닥 아래에 숨는다.",
      image: null,
    },
    {
      title: "4 · 표면 닦기 — 타르라탄의 손길",
      description:
        "타르라탄(거친 명주 천)으로 표면의 잉크를 닦아낸다. 홈 안의 잉크는 그대로 남는다. 얼마나 닦느냐에 따라 인상의 톤이 달라진다 — 표면에 옅은 잉크 막(retroussage)을 남기면 렘브란트 같은 안개 같은 명암이 생긴다.",
      image: null,
    },
    {
      title: "5 · 눌러 짜기 — 압력이 잉크를 끌어올린다",
      description:
        "젖은 종이를 판 위에 얹고 펠트 담요를 덮은 뒤 롤러 프레스에 통과시킨다. 강한 압력이 종이를 홈까지 밀어 넣어, 잉크를 빨아 올린다. 종이를 떼어내면 선이 종이 표면 위로 살짝 솟아 있다 — 손끝으로 느껴지는 동판화만의 질감이다.",
      image: null,
    },
  ],
  whyItAppeared: {
    heading: "왜 금속이었을까 — 명암이라는 새로운 언어",
    body: [
      {
        _type: "block",
        _key: "w1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "w1s1",
            text: "15세기 초 독일과 이탈리아에서, 금세공인들이 은제품에 장식 도안을 새기던 기술이 종이 인쇄로 옮겨왔다. 금속판에 파낸 홈은 목판보다 훨씬 가늘고 깊은 선을 담을 수 있었다. 그 선들이 모이면 — 명암이 생긴다. 목판화가 ‘선의 예술’이라면 동판화는 ‘톤의 예술’이다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "w2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "w2s1",
            text: "에칭의 등장이 대중화를 끝냈다. 금속을 파내는 조각 기술은 수년의 수련이 필요했지만, 산에 녹이는 방식은 화가가 그림 그리듯 바늘로 왁스를 긁으면 됐다. 렘브란트는 에칭으로 손끝의 감정을 그대로 금속에 옮겼고, 고야는 『로스 카프리초스』로 풍자와 검열의 시대를 찍어냈다. 동판화는 그림 잘 그리는 사람이라면 누구나 복제에 참여할 수 있는 문을 열어둔 기술이었다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "w3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "w3s1",
            text: "그리고 지폐. 오늘날 지폐의 정교한 선은 모두 동판화(요판 인쇄)다. 홈이 깊을수록 잉크가 많이 고여 선이 솟아오르는 성질을 이용해, 만져서 진짜임을 확인하게 만든다. 복제 기술의 정점이 곧 위조 방지 기술이 되는 아이러니 — 복제를 가장 잘하는 기술이 복제를 막는 데도 가장 뛰어나다.",
          },
        ],
      },
    ],
  },
  historicalContext: {
    heading: "렘브란트의 안개, 고야의 어둠",
    body: [
      {
        _type: "block",
        _key: "h1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "h1s1",
            text: "17세기 암스테르담에서 렘브란트는 에칭을 연구 대상이 아니라 표현 그 자체로 만들었다. 그의 판은 수십 번 다시 에칭하고 다시 찍었다(상태, state). 『선한 사마리아인』에서 빛이 길 위로 흘러나오는 것은 홈의 깊이 조절과 표면 잉크 잔여물의 마법이다. 그의 에칭은 생전에 수백 부씩 팔려 유럽 전역의 수집가들 사이를 돌았다 — 예술가가 살아있는 동안 복제로 부와 명성을 얻은 초기 사례다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "h2s1",
            text: "1799년 마드리드에서 고야는 80장의 에칭·아쿠아팅트 연작 『로스 카프리초스』를 내놓았다. “이성의 잠은 괴물을 낳는다” — 종교재판과 미신을 비판한 이 그림들은 곧 검열당할 뻔했고, 고야는 판을 왕에게 헌상해 검열을 피했다. 복제 기술이 비판의 무기가 되려면, 언제나 검열과의 충돌을 함께 온다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "h3s1",
            text: "19세기에는 사진과 요판 인쇄(그라비아)가 만나 예술 작품의 복제본이 책으로 퍼졌고, 20세기에는 지폐·우표 인쇄의 표준이 됐다. 오늘날 요판 인쇄기는 하루에 수백만 장의 지폐를 찍는다 — 600년 된 기술이 아직도 가장 믿을 만한 보안 장치로 일하고 있다.",
          },
        ],
      },
    ],
  },
  howToIdentify: {
    heading: "어떻게 알아볼까 — 동판화 감별법",
    body: [
      {
        _type: "block",
        _key: "id1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "id1s1",
            text: "가장 확실한 단서는 판흔(plate mark)이다. 프레스의 압력이 금속판 모서리를 종이에 눌러 만든 움푹한 테두리 — 석판화나 목판화에는 없는, 동판화만의 서명이다. 판보다 크게 재단된 현대 인쇄물에서는 판흔이 잘려나가기도 한다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "id2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "id2s1",
            text: "선을 손끝으로 만져보면 살짝 솟아 있다. 홈에서 짜낸 잉크가 종이 위에 얇게 쌓였기 때문이다. 돋보기로 보면 선 가장자리가 번들거리는데, 이는 홈에서 짜올린 잉크가 마르며 만드는 광택이다. 목판화의 도려낸 날카로움, 석판화의 분필 입자와는 또 다른 — ‘깊이’의 질감이다.",
          },
        ],
      },
    ],
  },
  efficacy: {
    heading: "왜 오래 쓰였나 — 금속의 값과 명암의 값",
    body: [
      {
        _type: "block",
        _key: "ef1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "ef1s1",
            text: "동판화의 약점은 명확하다 — 구리는 비싸고, 판은 닳는다. 목판이 수천 장을 견디는 동안 구리판은 수백 장이면 선이 둔해진다. 그래서 동판화는 늘 ‘비싼 복제’였다. 대량으로 팔리는 책 삽화는 목판이, 수집가용 예술 판화는 동판이 담당하는 분업이 17~19세기 유럽의 표준이었다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "ef2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "ef2s1",
            text: "그럼에도 동판화가 살아남은 이유는 명암이다. 홈의 깊이가 곧 어두움의 농도라는 원리는 어떤 기술로도 대체하기 어려웠고, 사진이 등장한 뒤에도 요판 인쇄(그라비아)는 사진을 책에 복제하는 최고의 방법이었다. 그리고 오늘날 지폐 — 복제의 정밀함이 곧 진품의 증거가 되는, 역설적 승리다.",
          },
        ],
      },
    ],
  },
  scienceConcepts: [],
  representativeArtwork: CARDS.rembrandtSelfPortrait,
  sideTracks: [
    {
      relationType: "explains",
      relationNature: "historical",
      evidenceLevel: "documented",
      label: "산으로 금속을 녹이는 기술 — 에칭",
      teaser: "조각칼 대신 바늘과 왁스, 그리고 산. 화가가 동판화에 참여한 방법.",
      editorialPriority: 1,
      sources: [SOURCES.metRembrandtSamaritan],
      target: CARDS.etching,
    },
    {
      relationType: "relatedTo",
      relationNature: "conceptual",
      evidenceLevel: "documented",
      label: "판흔 — 동판화의 서명",
      teaser: "프레스가 판의 모서리를 종이에 눌러 남긴 움푹한 테두리.",
      editorialPriority: 2,
      sources: [SOURCES.metRembrandtSamaritan],
      target: CARDS.plateMark,
    },
    {
      relationType: "relatedTo",
      relationNature: "conceptual",
      evidenceLevel: "documented",
      label: "볼록과 오목 — 목판화와 정반대의 원리",
      teaser: "남기고 찍는 것과 파고 찍는 것 — 두 기법의 대결.",
      editorialPriority: 3,
      sources: [SOURCES.metLithographyEssay],
      target: CARDS.woodcut,
    },
  ],
  staticDiagrams: [],
  interactiveDiagram: null,
  sources: [
    SOURCES.metRembrandtSamaritan,
    SOURCES.metRembrandtSelfPortrait,
    SOURCES.metGoyaCaprichos,
  ],
};
