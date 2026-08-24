import type { PortableTextBlock } from "next-sanity";
import type { StoryPageData } from "@/lib/sanity/types";
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

export const gumArabicStory: StoryPageData = {
  _id: "story-why-gum-arabic-likes-water",
  _type: "story",
  question: "아라비아고무는 왜 물을 좋아할까?",
  shortAnswer:
    "아라비아고무 분자 사슬에는 물과 쉽게 손잡는 부위가 아주 많다. 물 분자들이 사슬 사이로 파고들어 붙으면 고무는 물과 어울려 젤처럼 퍼진다. 석판화에서 이 성질이 결정적인데, 빈 면을 ‘물을 좋아하는 얇은 젤 막’으로 덮어주니 기름 잉크가 그곳에 달라붙을 수 없게 된다.",
  domain: "material",
  storyBody: [
    block(
      "s1",
      "아라비아고무는 아카시아나무 줄기에서 맺히는 딱딱한 수액이다. 마시멜로를 쫀득하게 만들고 탄산음료의 향을 골고루 섞어주는 식품 첨가물로도 흔히 쓰니, 어느 주방에나 비슷한 일을 하는 친구가 있는 셈이다.",
    ),
    block(
      "s2",
      "이 수액의 비밀은 분자 모양에 있다. 길고 구부러진 사슬 형태인데, 사슬 곳곳에 물 분자와 전기를 주고받으며 잘 붙는 자리(-OH 같은 무리)가 빽빽하게 늘어선다. 물을 좋아하는 성질, 즉 친수성은 특별한 재주가 아니라 이런 ‘손잡이’가 많다는 뜻이다.",
    ),
    block(
      "s3",
      "석판화 판 위에서 아라비아고무는 두 가지 일을 한다. 에칭(고정) 단계에서 산과 섞여 발리면, 기름으로 그린 선은 더 단단해지고 빈 돌면은 물을 좋아하게 된다. 인쇄 내내 빈 면은 고무막+물막 이중 방어선을 갖추므로 잉크가 설 자리가 없어진다.",
    ),
    block(
      "s4",
      "결국 석판화는 조각칼이 아니라 화학 약속의 기술이다. ‘기름은 기름끼리, 물은 물끼리’라는 단순한 성질을 재료 단계에서부터 설계해 넣었고, 아라비아고무는 그 약속의 중개인이었다.",
    ),
  ],
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
            text: "아라비아고무가 아카시아 수액에서 얻는 천연 수지이며 물에 녹아 점조액이 된다는 것은 표준 참고 자료에서 확인된다(§ Sources). 식품·공업용으로 널리 쓰인다는 사실 역시 동일하다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "e2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "e2s1",
            text: "석판화 공정에서 아라비아고무 용액으로 판을 처리하는 관행은 19세기 석판화 개관 자료에서 반복적으로 확인된다. 다만 제네펠더 본인이 처음부터 오늘날과 같은 에칭법을 썼는지 여부처럼 세부 경로는 연구자마다 서술이 갈릴 수 있어, 강한 단정은 피한다.",
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
            text: "‘판을 파내야 하는 것’에서 ‘판의 표면 상태를 바꿀 것’으로. 목판화와 동판화가 물리적 깊이로 그림을 담았다면, 석판화는 평평한 면 위의 화학적 구분으로 그림을 담는다. 평판 인쇄라는 새로운 계열이 열린 지점이다.",
          },
        ],
      },
    ],
  },
  connections: [
    {
      relationType: "usesMaterial",
      relationNature: "historical",
      evidenceLevel: "documented",
      label: "이 재료가 쓰인 공정",
      teaser: "돌을 파지 않는 인쇄의 비밀이 딱 한 알의 수액에 있었다.",
      editorialPriority: 1,
      sources: [SOURCES.metLithographyEssay],
      target: CARDS.lithography,
    },
    {
      relationType: "explains",
      relationNature: "conceptual",
      evidenceLevel: "documented",
      label: "같은 원리의 과학 이름",
      teaser: "‘물을 좋아함’에는 정확한 용어가 있다 — 친수성/친유성 표면.",
      editorialPriority: 2,
      sources: [SOURCES.britannicaLithography],
      target: CARDS.hydrophilicOleophilic,
    },
  ],
  furtherReading: [SOURCES.britannicaGumArabic, SOURCES.wikipediaGumArabic],
  sources: [SOURCES.britannicaGumArabic, SOURCES.wikipediaGumArabic, SOURCES.metLithographyEssay],
};
