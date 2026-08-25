import type { TechniquePageData } from "@/lib/sanity/types";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

/**
 * 목판화 (woodcut / relief) — 석판화와 대비되는 두 번째 기법 노드.
 * 이미지: 히로시게(Met PD), 호쿠사이(Met PD), 뒤러(NGA PD), 목판 잉킹 사진(CC BY-SA 3.0)
 */
export const woodcutTechnique: TechniquePageData = {
  _id: "technique-woodcut",
  _type: "technique",
  title: "나무를 파서 찍는 판화, 목판화",
  family: "볼록판 인쇄 (relief)",
  tenSecondExplanation:
    "나무판에서 그림이 될 부분을 남기고 나머지를 도려낸다. 남은 볼록한 면에만 잉크를 묻히고 종이를 눌러 찍는다. 돌 위에 그리는 석판화와 정반대다 — 석판화는 그린 자리가 찍히지만, 목판화는 파지 않은 자리가 찍힌다.",
  shortDescription:
    "도려내고, 묻히고, 누른다. 인류가 가장 오래 쓴 복제 기술의 원리와 아름다움.",
  domain: "technique",
  process: [
    {
      title: "1 · 밑그림 — 거꾸로 생각하기",
      description:
        "나무판 위에 그림을 옮긴다. 이때 완성될 그림은 좌우가 뒤집혀 찍힌다. 글자를 찍으려면 판에는 거꾸로 써야 한다. 일본 우키요에 판화의 글씨가 특유의 생동감을 갖는 이유 중 하나가 이 ‘뒤집힘’이다.",
      image: null,
    },
    {
      title: "2 · 도려내기 — 남기는 것이 그림",
      description:
        "칼과 둥근 끌로 선의 양쪽을 따라 깊게 파낸다. 인쇄될 볼록한 면만 남기고 나머지는 모두 제거한다. 손이 미끄러지면 한 판 전체가 망가진다. 흰 선을 만들려면 검은 면을 파내고, 검은 선을 남기려면 그 주변을 파내는 것 — 목판화의 사고방식은 조각이지 그리기가 아니다.",
      image: {
        title: "컬러 목판에 잉크를 묻히는 작가",
        alt: "작가가 롤러로 컬러 목판 볼록면에 잉크를 묻히고 있다. 파낸 오목한 부분은 잉크 없이 남아 있다.",
        caption: "목판화 제작 현장 — 볼록한 면에만 잉크가 묻는다. Wikimedia Commons, CC BY-SA 3.0 (사진: Endi Poskovic)",
        longDescription:
          "작업대 위에 놓인 컬러 목판 위로 작가가 롤러를 굴리고 있다. 파낸 부분은 낮게 들어가 있어 잉크가 닿지 않으며, 남아 있는 볼록한 면만 잉크로 덮여 있다.",
        url: "/images/woodcut-inking.jpg",
        visualRecord: {
          originType: "institutional",
          institution: "Wikimedia Commons",
          sourcePage:
            "https://commons.wikimedia.org/wiki/File:Endi_Poskovic_inking_a_color_wood-relief_block.jpg",
          license: "CC BY-SA 3.0",
          publicDomain: false,
          creditLine: "Endi Poskovic inking a color wood-relief block — Wikimedia Commons, CC BY-SA 3.0",
          dateVerified: "2026-08-25",
        },
      },
    },
    {
      title: "3 · 잉크 묻히기",
      description:
        "볼록한 면 위에 잉크를 얇게 펴 바른다. 오목하게 파낸 바닥에는 잉크가 남아도 종이에 닿지 않는다. 롤러(브레이어)나 일본식의 손바닥 크기 패드(바렌)로 골고루 문질러 준다.",
      image: null,
    },
    {
      title: "4 · 눌러 찍기",
      description:
        "종이를 얹고 프레스로 누르거나 바렌으로 등을 문지른다. 잉크가 종이로 옮겨지며 그림이 완성된다. 힘의 세기와 종이의 습기에 따라 같은 판이라도 찍힘의 결이 달라진다 — 우키요에 장인들이 ‘찍사(刷師)’를 별도 직업으로 둔 이유다.",
      image: null,
    },
    {
      title: "5 · 색을 더하기 — 판을 나누어 겹치기",
      description:
        "색 하나에 판 하나. 보통 검은 윤곽판 위에 색판 여러 장을 겹쳐 찍는다. 호쿠사이의 ‘가나가와 해변의 큰 파도’는 수십 번의 색판 인쇄를 거쳐 완성됐고, 각 판의 어긋남을 막는 눈금(겐토)이 정합의 핵심이었다. 석판화의 registration과 같은 문제를, 완전히 다른 재료로 푼 셈이다.",
      image: null,
    },
  ],
  whyItAppeared: {
    heading: "왜 나무였을까 — 천 년을 버틴 가장 싼 공장",
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
            text: "목판화는 인쇄 역사상 가장 오래된 복제 기술이다. 동아시아에서는 8세기경 불경 인쇄에 이미 쓰였고(현존 최고 목판 인쇄물은 868년 『금강경』), 유럽에서는 15세기 직물 무늬와 종교 화보에 퍼졌다. 재료가 나무 하나, 도구가 끌 하나면 어디서든 시작할 수 있었다.",
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
            text: "결정적 순간은 활판 인쇄와의 만남이었다. 15세기 구텐베르크 이후 책이 대량 생산되면서, 글자 사이사이에 들어갈 그림도 같은 방식으로 찍을 필요가 생겼다. 금속 활자는 볼록한 면에 잉크를 묻혀 찍는다 — 목판화와 같은 원리다. 그래서 글자와 그림이 한 장의 종이 위에 한 번에 찍힐 수 있었다. 동판화(오목한 홈에 잉크가 고이는 방식)는 따로 두 번 찍어야 했다. 뒤러의 목판화가 책 삽화로 폭발적으로 퍼진 것은 우연이 아니었다.",
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
            text: "일본에서는 에도 시대(1603–1868) 도시 문화와 만나 우키요에라는 독자적 꽃을 피웠다. 배우의 초상, 미인도, 풍경 — 대중이 소비하는 이미지를 수천 부씩 찍어내는 상업 산업이 완성됐다. 판을 파는 장인, 색을 칠하는 장인, 찍는 장인, 이 모든 것을 기획하는 화가(원화가). 분업화된 ‘복제의 공장’이었다.",
          },
        ],
      },
    ],
  },
  historicalContext: {
    heading: "손으로 파낸 대량생산 — 뒤러에서 우키요에까지",
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
            text: "알브레히트 뒤러(1471–1528)는 목판화를 장인의 기술에서 예술가의 표현으로 끌어올렸다. 『묵시록』 연작과 『코뿔소』는 유럽 전역으로 퍼져, 그가 직접 본 적 없는 동물의 이미지가 수백 년간 사람들의 상상을 지배했다. 복제 이미지가 지식이 되는 시대의 시작이었다.",
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
            text: "한편 에도의 우키요에는 색판 분할이라는 기술적 완성을 이뤘다. 스즈키 하루노부(1720년대)가 다색 인쇄(니시키에)를 상용화한 뒤, 가토 시게노부와 같은 찍사들이 정밀한 겐토(눈금) 시스템으로 열 장 이상의 색판을 밀리미터 단위로 맞춰 찍었다. 히로시게의 『동해도오십삼차』는 이 시스템 위에서 만들어진 대중적 베스트셀러였다 — 여행 붐을 일으킨 ‘복제된 풍경’이다.",
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
            text: "19세기 말, 우키요에가 유럽에 알려지며 일어난 ‘자포니즘’은 인상주의를 바꿔놓았다. 석판화로 포스터를 만들던 툴루즈=로트렉의 평면적인 색면과 잘린 구도에는 우키요에의 문법이 스며 있다. 목판화와 석판화 — 두 기술은 서로 다른 시대와 장소에서 태어나 복제 이미지의 문법을 서로 주고받으며 성장했다.",
          },
        ],
      },
    ],
  },
  howToIdentify: {
    heading: "어떻게 알아볼까 — 목판화 감별법",
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
            text: "목판화의 선은 석판화와 결이 다르다. 끌로 파낸 자국 때문에 선 가장자리가 약간 뭉툭하거나, 검은 선 안쪽에 하얀 금(균열)이 보이기도 한다. 나뭇결을 따라 파낸 긴 선은 특유의 유기적인 흔들림을 갖는다. 동판화처럼 잉크가 홈에 고여 깊이감을 주지도, 석판화처럼 연필의 입자감이 살아있지도 않다 — 깔끔하게 ‘도려낸’ 면의 매력이다.",
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
            text: "뒷면을 보면 인쇄 압력이 종이를 누른 자국이 얕게 패어 있을 수 있다. 그림의 여백이 종이 본색이라는 점도 힌트다 — 목판화는 ‘찍지 않은 부분이 하얗다’는 전제로 설계되기 때문이다.",
          },
        ],
      },
    ],
  },
  efficacy: {
    heading: "왜 오래 쓰였나 — 나무의 경제학",
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
            text: "목판의 장점은 단순하다. 재료가 싸고, 도구가 단순하고, 활판 인쇄와 같은 높이로 찍을 수 있다. 대신 단점도 뚜렷하다 — 판은 유한하다. 수천 장을 찍으면 볼록한 선이 닳아 흐려지고, 나무결이 부서진다. 우키요에 명작들이 ‘초찍(初摺)’과 ‘재판’으로 가격이 갈리는 이유다.",
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
            text: "석판화의 돌이 갈아내어 재사용할 수 있는 것과 달리, 파내버린 목판은 되돌릴 수 없다. 그러나 역설적으로 이 한계가 기술을 진보시켰다 — 더 단단한 벚나무판, 더 정밀한 끌, 그리고 판이 닳기 전에 최대한 찍어내는 효율의 경제학이. 복제의 문명은 언제나 재료의 한계와 함께 진화한다.",
          },
        ],
      },
    ],
  },
  scienceConcepts: [],
  representativeArtwork: CARDS.hiroshigeWildGeese,
  sideTracks: [
    {
      relationType: "relatedTo",
      relationNature: "conceptual",
      evidenceLevel: "documented",
      label: "돌 위에 그리는 것과 나무를 도려내는 것",
      teaser: "같은 ‘복제’라는 목표, 정반대의 방법 — 석판화와 무엇이 다를까?",
      editorialPriority: 1,
      sources: [SOURCES.metLithographyEssay],
      target: CARDS.lithography,
    },
    {
      relationType: "explains",
      relationNature: "historical",
      evidenceLevel: "documented",
      label: "파도 하나에 수십 개의 판 — 색판 정합의 극한",
      teaser: "가나가와의 큰 파도는 몇 장의 판으로 이루어져 있을까?",
      editorialPriority: 2,
      sources: [SOURCES.metLaGoulue],
      target: CARDS.registration,
    },
  ],
  staticDiagrams: [],
  interactiveDiagram: null,
  sources: [
    SOURCES.metHiroshigeWildGeese,
    SOURCES.metHokusaiWave,
    SOURCES.ngaDurerRhinoceros,
  ],
};
