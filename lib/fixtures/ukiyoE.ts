import type { PortableTextBlock } from "next-sanity";
import type { StoryPageData, TermPageData } from "@/lib/sanity/types";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

function block(key: string, text: string): PortableTextBlock {
  return {
    _type: "block",
    _key: key,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `${key}s`, text, marks: [] }],
  };
}

/** 짤막지식: 파도 하나에 판이 몇 장일까? (호쿠사이 다색 인쇄) */
export const greatWaveStory: StoryPageData = {
  _id: "story-how-many-blocks-great-wave",
  _type: "story",
  question: "파도 하나에 판이 몇 장일까?",
  shortAnswer:
    "『가나가와 해변의 큰 파도』 한 장을 만드는 데 보통 5~10장 안팎의 목판이 쓰였다고 본다. 검은 윤곽판 하나에, 하늘·파도·배·후지산·물방울마다 색판이 따로 필요했다. 색이 하나 추가될 때마다 판 하나, 찍는 횟수 하나가 늘어난다 — 그리고 판이 늘어날수록 정합(겐토)의 난이도는 기하급수적으로 올라간다.",
  domain: "technique",
  storyBody: [
    block(
      "s1",
      "우키요에의 다색 인쇄(니시키에)는 퍼즐 같은 분업이다. 화가가 완성된 밑그림을 내면, 판각사(彫師)는 그 그림을 겹쳐 놓을 판의 수를 먼저 정한다. 검은 윤곽은 기준판이 되고, 나머지 색 영역마다 별도의 판을 만든다. 하루노부 이전의 우키요에는 주로 검정 두 색뿐이었지만, 1765년경 다색 인쇄가 상용화되며 에도의 판화 시장이 완전히 바뀌었다.",
    ),
    block(
      "s2",
      "색판이 많아지면 생기는 문제는 단순하다 — 어긋남. 판 하나라도 밀리면 얼굴 윤곽에서 색이 삐져나온다. 우키요에 장인들의 해법은 판과 종이에 작은 홈과 돌기(겐토)를 만들어, 매번 같은 위치에 종이가 놓이도록 고정하는 것이었다. 오늘날 인쇄공의 레지스터 마크, 반도체 공정의 overlay key와 정확히 같은 발상이다.",
    ),
    block(
      "s3",
      "『가나가와 해변의 큰 파도』에서 파도의 물방울 하나하나가 흩어지지 않고 뭉쳐 보이는 것은, 수십 번의 반복 인쇄가 모두 겐토를 기준으로 정확히 겹쳤기 때문이다. 복제의 아름다움은 언제나 정합의 정밀함 위에 서 있다.",
    ),
  ],
  shortDescription: "세계에서 가장 유명한 파도 뒤에 숨은 다색 인쇄의 공학.",
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
            text: "정확한 판 수는 판본마다, 연구자마다 조금씩 다르게 추정된다. 현존하는 초찍본과 재판본의 색 구성이 다르고, 판이 닳아 재각(再刻)되기도 했기 때문이다. 그래서 ‘몇 장’이라는 숫자는 특정 판본에 대한 기술이지, 작품 전체에 대한 절대 답이 아니다.",
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
            text: "다색 인쇄의 상용화는 ‘복제 이미지의 색’을 대중의 것이 만들었다. 색채 포스터(석판화), 컬러 사진, 컬러 TV로 이어지는 색의 대량복제 역사는 에도의 판화 공방에서 한 단계 앞서 완성되어 있었다.",
          },
        ],
      },
    ],
  },
  connections: [
    {
      relationType: "relatedTo",
      relationNature: "conceptual",
      evidenceLevel: "documented",
      label: "같은 문제를 푼 석판화의 답",
      teaser: "색 하나당 판 하나 — 파리에서도 에도에서도 정합이 품질이었다.",
      editorialPriority: 1,
      sources: [SOURCES.metLaGoulue],
      target: CARDS.registration,
    },
    {
      relationType: "explains",
      relationNature: "historical",
      evidenceLevel: "documented",
      label: "이 공정의 재료와 기술",
      teaser: "나무를 파내고, 물에 갠 색을 겹치는 우키요에의 세계.",
      editorialPriority: 2,
      sources: [SOURCES.metHokusaiWave],
      target: CARDS.woodcut,
    },
  ],
  furtherReading: [SOURCES.metHokusaiWave],
  sources: [SOURCES.metHokusaiWave, SOURCES.metHiroshigeWildGeese],
};

/** 짤막지식: 겐토(見当) — 우키요에의 정합 눈금 */
export const kentoTerm: TermPageData = {
  _id: "term-kento",
  _type: "term",
  term: "겐토 (見当, kentō)",
  originalLanguage: "Japanese · 見当 (kentō, ‘조준·눈금’)",
  pronunciation: "켄토/겐토",
  literalMeaning: "견(見, 볼 견) + 당(當, 마땅할 당) — 겨냥할 표",
  simpleDefinition:
    "우키요에 목판 인쇄에서 색판이 어긋나지 않게 종이의 위치를 고정하는 눈금 시스템. 판의 오른쪽 아래 모서리에 L자 홈(겐토)과 위쪽에 작은 홈(히츠케)을 파서, 종이를 항상 같은 자리에 얹는다. 인쇄공의 레지스터 마크와 같은 발명이다.",
  contextDefinition: {
    heading: "석판화의 registration과 비교하면",
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
            text: "석판화는 종이에 십자 눈금을 인쇄해 눈으로 맞추는 방식이고, 겐토는 판 자체에 홈을 파서 물리적으로 고정하는 방식이다. 재료와 문화가 다르지만, ‘매번 같은 자리’라는 문제에 대한 답의 구조는 같다. 반도체의 overlay key까지 이어지는, 복제의 문명에 공통된 발명이다.",
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
            text: "겐토(見当)는 원래 ‘겨냥하다’, ‘어림짐작하다’라는 일상어다. 인쇄의 맥락에서는 종이가 판 위에서 겨냥할 위치 표시를 가리키게 됐다. 눈금 자체를 뜻하는 말이 기술 용어가 된 사례로, registration이 ‘기록해 맞춤’에서 인쇄 용어가 된 것과 흥미로운 대조를 이룬다.",
          },
        ],
      },
    ],
  },
  shortDescription: "색판이 어긋나지 않게 — 우키요에 장인들의 나무 눈금 시스템.",
  domain: "technique",
  relatedTerms: [],
  sources: [SOURCES.metHiroshigeWildGeese, SOURCES.metHokusaiWave],
};
