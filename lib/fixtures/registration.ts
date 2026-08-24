import type { RichSection } from "@/lib/sanity/types";
import type { TermPageData } from "@/lib/sanity/types";
import { SOURCES } from "./sources";

const contextDefinition: RichSection = {
  heading: "석판화에서의 의미",
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
          text: "색 하나당 판 하나. 네 색 포스터라면 종이는 최소 네 번 판을 만난다. 판마다 종이를 다시 놓는 순간 미세한 어긋남(misregistration)이 생기고, 얼굴 윤곽과 스커트 선이 서로 밀린다. 인쇄공은 눈금(레지스터 마크)과 십자 표시를 겨눠 매번 같은 위치를 잡았고, 이 정밀함이 곧 완성도였다.",
        },
      ],
    },
  ],
};

const etymology: RichSection = {
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
          text: "라틴어 registrum(기록된 것)에서 온 말로, 원래는 ‘정확히 기록해 맞춘다’는 뜻이다. 인쇄에서는 여러 판을 같은 위치에 정확히 겹치는 일, 그리고 그 결과 상태를 가리킨다.",
        },
      ],
    },
  ],
};

export const registrationTerm: TermPageData = {
  _id: "term-registration",
  _type: "term",
  term: "Registration",
  originalLanguage: "Latin · registrum",
  pronunciation: "레지스트레이션",
  literalMeaning: "다시 맞춰 기록함 → 정확히 겹쳐 맞춤",
  simpleDefinition:
    "여러 장의 색판을 한 장의 종이에 겹쳐 찍을 때 어긋나지 않게 같은 자리에 맞추는 기술. 스티커 여러 장을 같은 중심점에 차례로 붙이는 것과 비슷하지만, 한 번 밀리면 다시 붙일 수 없다는 점이 훨씬 어렵다.",
  contextDefinition,
  etymology,
  domain: "technique",
  relatedTerms: [],
  sources: [SOURCES.metLaGoulue, SOURCES.momaLaGoulue],
};
