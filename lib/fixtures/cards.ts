import type { NodeCard } from "@/lib/sanity/types";

/** 카드 projection 공용 fixture (§3.2 CARD_PROJECTION) */
export const CARDS: Record<string, NodeCard> = {
  poster: {
    _id: "entry-poster",
    _type: "entry",
    title: "거리의 포스터에서 시작하기",
    slug: "poster",
    shortDescription: "왜 19세기 도시는 갑자기 포스터로 가득 찼을까?",
    domain: "society",
    thumbnail: null,
  },
  lithography: {
    _id: "technique-lithography",
    _type: "technique",
    title: "돌을 파지 않는 판화, 석판화",
    slug: "lithography",
    shortDescription:
      "돌을 파지 않는데 어떻게 같은 그림이 반복해서 찍힐까? 물과 기름의 은밀한 합작.",
    domain: "technique",
    thumbnail: "/diagrams/lithography-water-ink-surface.svg",
  },
  moulinRouge: {
    _id: "artwork-moulin-rouge-la-goulue",
    _type: "artwork",
    title: "Moulin Rouge: La Goulue",
    slug: "moulin-rouge-la-goulue",
    shortDescription:
      "멀리서도 알아보는 실루엣, 수천 장으로 퍼진 포스터. 거리가 화랑이 되던 순간.",
    domain: "art",
    thumbnail: null,
  },
  gumArabic: {
    _id: "story-why-gum-arabic-likes-water",
    _type: "story",
    title: "아라비아고무는 왜 물을 좋아할까?",
    slug: "why-gum-arabic-likes-water",
    shortDescription:
      "아카시아 수액 하나가 인쇄의 판도를 바꾼 이야기. 마시멜로와 석판화의 숨은 연결점.",
    domain: "material",
    thumbnail: null,
  },
  registration: {
    _id: "term-registration",
    _type: "term",
    title: "Registration · 색판을 맞추는 기술",
    slug: "registration",
    shortDescription: "색 하나당 판 하나. 어긋나지 않게 겹치는 일은 왜 어려울까?",
    domain: "technique",
    thumbnail: "/diagrams/registration-alignment-compare.svg",
  },
  hydrophilicOleophilic: {
    _id: "science-hydrophilic-oleophilic-surface",
    _type: "scienceConcept",
    title: "물을 좋아하는 면, 기름을 좋아하는 면",
    slug: "hydrophilic-oleophilic-surface",
    shortDescription:
      "같은 표면이 어떻게 물에게는 미끄러운 바닥, 기름에게는 끈끈한 접착판이 될까?",
    domain: "science",
    thumbnail: "/diagrams/lithography-water-ink-surface.svg",
  },
};
