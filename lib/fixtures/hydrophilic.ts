import type { PortableTextBlock } from "next-sanity";
import type { SciencePageData } from "@/lib/sanity/types";
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

export const hydrophilicOleophilicScience: SciencePageData = {
  _id: "science-hydrophilic-oleophilic-surface",
  _type: "scienceConcept",
  title: "물을 좋아하는 면, 기름을 좋아하는 면",
  oneSentence:
    "같은 표면이라도 어떤 자리는 물과 손잡이(친수)를 많이 가지고, 어떤 자리는 기름과 손잡이(친유)를 많이 가진다 — 잉크와 물은 각자 친한 쪽에만 머문다.",
  standardExplanation: [
    block(
      "st1",
      "친수성(hydrophilic)은 물 분자와 수소결합 같은 상호작용을 쉽게 하는 원자 무리(-OH 등)가 표면에 많다는 뜻이다. 물은 이런 면 위에 얇은 막으로 넓게 퍼진다. 반대로 탄소·기름 성분이 많은 친유성(소수성) 면은 물을 밀어내고 기름 성분 분자와 잘 어울린다.",
    ),
    block(
      "st2",
      "석판화는 이 선택성을 판 위에 ‘그려 넣는’ 기술이다. 기름 크레용으로 그린 선은 친유성을 띠고, 산과 아라비아고무 처리를 거친 빈 면은 친수성을 띤다. 젖은 판에 기름 잉크를 롤링하면, 잉크는 화학적으로 편한 친유성 선에만 남는다.",
    ),
  ],
  deepExplanation: [
    block("d1", "표면 에너지 관점에서 보면, 액체는 자신과 비슷한 표면 에너지의 고정박 위에서 낮은 접촉각(퍼짐)을 보인다. 물(고표면장력)은 저에너지 소수성 면에서 구슬로 맺히고, 유기 용매 성분이 많은 잉크는 고에너지 친수성 면에서 오히려 비친다."),
  ],
  shortDescription:
    "같은 표면이 어떻게 물에게는 미끄러운 바닥, 기름에게는 끈끈한 접착판이 될까?",
  domain: "science",
  relatedMaterials: [
    {
      name: "아라비아고무",
      slug: undefined,
      simpleDescription:
        "물 손잡이가 빽빽한 사슬 분자. 빈 돌면을 친수성 막으로 덮어준다.",
    },
  ],
  relatedTechniques: [CARDS.lithography],
  staticDiagrams: [],
  sources: [SOURCES.britannicaLithography, SOURCES.metLithographyEssay],
};
