import type { StoryPageData, TermPageData } from "@/lib/sanity/types";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

/** 짤막지식: 에칭 — 산으로 금속을 녹이는 기술 */
export const etchingStory: StoryPageData = {
  _id: "story-what-is-etching",
  _type: "story",
  question: "산이 어떻게 그림을 새길까?",
  shortAnswer:
    "금속판에 산을 안 먹는 왁스를 입고, 바늘로 그림을 그리듯 왁스만 긁어낸다. 산(질산)에 담그면 왁스가 벗겨진 선만 녹아 홈이 된다. 화가는 금속을 새기는 힘 대신, 그림을 그리는 손만 있으면 된다.",
  domain: "technique",
  storyBody: [
    {
      _type: "block",
      _key: "s1",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "s1s1",
          text: "에칭(etching)은 우연에서 시작한 기술이다. 갑옷 장인들이 금속 장식을 산으로 새기던 방법이 16세기 초 판화로 옮겨졌다. 뒤러도 에칭을 시도했고, 17세기 렘브란트에 이르러 완성된 예술 언어가 됐다.",
        },
      ],
    },
    {
      _type: "block",
      _key: "s2",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "s2s1",
          text: "핵심은 ‘시간이 곧 깊이’라는 원리다. 산에 담그는 시간이 길수록 홈이 깊어지고, 깊은 홈일수록 잉크를 많이 머금어 어둡게 찍힌다. 화가는 판을 산에 담갔다 꺼내는 과정을 반복하며 부분별로 다른 깊이를 만든다 — 이를 스톱아웃 바니시로 이미 에칭된 부분을 덮아 조절한다.",
        },
      ],
    },
    {
      _type: "block",
      _key: "s3",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "s3s1",
          text: "이 기술이 열어준 것은 참여의 문이다. 에닝그래빙의 조각사가 되려면 금속 가공 수련이 필요했지만, 에칭은 그림을 그릴 줄 아는 화가라면 누구나 시도할 수 있었다. 렘브란트, 반 다이크, 고야, 마네 — 에칭은 화가들의 판화가 된다. 복제 기술의 역사는 참여자를 넓히는 방향으로 흘러왔고, 석판화가 다음 문을 열었다.",
        },
      ],
    },
  ],
  shortDescription: "조각칼 대신 바늘과 왁스, 그리고 산 — 화가의 동판화 참여를 연 기술.",
  evidence: {
    heading: "근거와 예시",
    body: [
      {
        _type: "block",
        _key: "e1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "e1s1",
            text: "렘브란트의 판은 상태(state)마다 에칭 깊이가 달라 찍히는 결과도 다르다. Met가 소장한 『선한 사마리아인』 등의 판본에서 이 단계적 변화를 직접 비교할 수 있다.",
          },
        ],
      },
    ],
  },
  whatChanged: {
    heading: "무엇이 바뀌었나",
    body: [
      {
        _type: "block",
        _key: "c1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "c1s1",
            text: "판화의 주인공이 ‘조각 기술자’에서 ‘화가’로 바뀌었다. 이후 석판화가 이 흐름을 완성한다 — 그리는 사람이 곧 복제하는 사람이 되는, 오늘날 콘텐츠 제작의 원형.",
          },
        ],
      },
    ],
  },
  connections: [
    {
      relationType: "explains",
      relationNature: "historical",
      evidenceLevel: "documented",
      label: "이 기술이 쓰인 동판화의 세계",
      teaser: "렘브란트의 명암, 고야의 풍자 — 에칭이 열어준 표현의 폭.",
      editorialPriority: 1,
      sources: [SOURCES.metRembrandtSamaritan],
      target: CARDS.intaglio,
    },
    {
      relationType: "relatedTo",
      relationNature: "conceptual",
      evidenceLevel: "probable",
      label: "다음 문을 연 석판화",
      teaser: "돌 위에 바로 그리는 석판화 — 참여의 문은 더 넓어졌다.",
      editorialPriority: 2,
      sources: [SOURCES.metLithographyEssay],
      target: CARDS.lithography,
    },
  ],
  furtherReading: [SOURCES.metRembrandtSamaritan],
  sources: [SOURCES.metRembrandtSamaritan, SOURCES.metGoyaCaprichos],
};

/** 짤막지식: 판흔(plate mark) — 동판화의 서명 */
export const plateMarkTerm: TermPageData = {
  _id: "term-plate-mark",
  _type: "term",
  term: "판흔 (plate mark)",
  originalLanguage: "English · plate mark",
  pronunciation: "플레이트 마크",
  literalMeaning: "판(plate)이 남긴 자국(mark)",
  simpleDefinition:
    "동판화를 찍을 때 프레스의 강한 압력이 금속판 모서리를 종이에 눌러 만드는 움푹한 테두리. 종이 위에 사각형의 얕은 골짜기처럼 남아, 이 판화가 오목한 판에서 찍혔다는 증거가 된다.",
  contextDefinition: {
    heading: "감별에서의 의미",
    body: [
      {
        _type: "block",
        _key: "ctx1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "ctx1s1",
            text: "판흔이 있으면 요판(intaglio) 인쇄다 — 석판화와 목판화는 평면이므로 이런 눌림이 생기지 않는다. 다만 현대 재판본은 판흔을 잘라내거나 흉내 내기도 하므로, 선의 솟음과 잉크의 광택과 함께 종합적으로 판단해야 한다. 지폐의 도안이 만져지는 것도 같은 원리다 — 깊은 홈의 잉크가 종이 위로 솟기 때문.",
          },
        ],
      },
    ],
  },
  etymology: {
    heading: "말의 뿌리",
    body: [
      {
        _type: "block",
        _key: "ety1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "ety1s1",
            text: "영어 plate(금속판) + mark(표). 판 자체가 남긴 자국이라는 소박한 이름이다. 불어로는 cuvette(퀴베트), 독일어로는 Plattenrand(판의 가장자리)라 부른다.",
          },
        ],
      },
    ],
  },
  shortDescription: "프레스가 판 모서리로 눌러낸 움푹한 테두리 — 동판화의 물리적 서명.",
  domain: "technique",
  relatedTerms: [],
  sources: [SOURCES.metRembrandtSamaritan, SOURCES.metGoyaCaprichos],
};
