import type { BridgePageData } from "@/lib/sanity/types";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

export const patterningBridge: BridgePageData = {
  _id: "bridge-from-printing-to-patterning",
  _type: "bridge",
  title: "새기는 것에서 패터닝으로",
  introQuestion:
    "1839년의 돌판과 오늘날 반도체 공장은 무엇이 같고 무엇이 다를까?",
  shortDescription:
    "인쇄의 정합과 현대 패터닝의 alignment — 같은 문제를 푼 두 세계를 구분해서 보기.",
  domain: "technology",
  timeline: [
    {
      periodLabel: "1790년대~",
      title: "석판화: 화학으로 그리는 평판",
      description:
        "제네펠더가 물/기름의 선택적 부착을 정리하며, 파내지 않고 찍는 인쇄가 실용 기술이 되었다.",
      markerType: "historical",
    },
    {
      periodLabel: "19세기 후반",
      title: "사진식각: 빛으로 판을 '그리다'",
      description:
        "감광제 위에 이미지를 전사해 산으로 선택적으로 파내는 사진식각(photoengraving)이 인쇄 제판을 바꿨다. 이제 그림은 손이 아니라 빛과 약품으로도 만들어진다.",
      markerType: "historical",
    },
    {
      periodLabel: "20세기 중반",
      title: "인쇄회로(PCB)와 마스크",
      description:
        "감광 코팅 위에 회로 패턴을 겹쳐 노출시키고, 남은 보호막 아래 금속을 깔거나 여분을 식각한다. ‘원하는 곳만 처리한다’는 공정 문법이 전자산업으로 넘어갔다.",
      markerType: "historical",
    },
    {
      periodLabel: "1950년대~",
      title: "포토리소그래피: 웨이퍼 위의 패턴",
      description:
        "실리콘 웨이퍼 위 감광막에 마스크 패턴을 빛으로 새겨 넣는 포토리소그래피가 반도체 미세공정의 핵심이 되었다. 이름 속의 lithography는 돌에서 빌려온 말이다.",
      markerType: "historical",
    },
    {
      periodLabel: "개념 비교",
      title: "'감광재로 패턴을 정의하고 선택적으로 처리한다'는 구조 자체",
      description:
        "두 세계를 잇는 것은 계보가 아니라 구조의 유사성이다. 이 유사성은 역사적 인과와 다른 것으로 명시적으로 구분된다.",
      markerType: "conceptual",
    },
    {
      periodLabel: "개념 비교",
      title: "registration ≈ alignment/overlay",
      description:
        "여러 층을 어긋나지 않게 겹치는 문제는 인쇄와 칩 공정 모두의 핵심이다. 다만 측정 단위와 목적이 다르다.",
      markerType: "conceptual",
    },
  ],
  commonProblem: {
    heading: "공통의 과제: 어디에 남기고, 어디에 지울 것인가",
    body: [
      {
        _type: "block",
        _key: "cp1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "cp1s1",
            text: "석판화든 반도체 패터닝이든 답해야 하는 질문은 같다 — 원하는 모양을 ‘어디에 남기고 어디에 지울 것인가’. 둘 다 마스크(그림)와 선택적 처리(잉크 또는 증착·식각), 그리고 층과 층을 맞추는 눈금(registration 또는 overlay)으로 이 문제를 푼다.",
          },
        ],
      },
    ],
  },
  comparisonTable: [
    {
      aspect: "재료",
      printing: "매끈한 석회암 판",
      patterning: "실리콘 웨이퍼",
    },
    {
      aspect: "패턴을 정의하는 방법",
      printing: "기름 크레용/터셰로 직접 그림 (후기엔 감광제판도)",
      patterning: "감광제(레지스트)+마스크를 통한 빛 노출",
    },
    {
      aspect: "선택적 처리",
      printing: "물이 잉크를 밀어냄 / 산이 표면 성질을 고정",
      patterning: "증착·식각이 레지스트가 가린 곳만 남김",
    },
    {
      aspect: "층 정합",
      printing: "레지스터 마크로 색판 겹침 (mm~수십 μm)",
      patterning: "overlay key로 층 간 정렬 (nm)",
    },
    {
      aspect: "복제의 대상",
      printing: "종이 위 잉크 이미지 수천 장",
      patterning: "웨이퍼 위 미세 구조 수백만 개",
    },
  ],
  keyDifferences: [
    {
      difference: "계보가 아니라 유비",
      explanation:
        "포토리소그래피라는 이름이 돌(lithos)을 빌렸다고 해서, 석판화 기술 자체가 반도체 공정으로 ‘발전’한 것은 아니다. 둘은 서로 다른 필요(값싼 복제 vs 초미세 회로)에서 각각 생겼고, 공유하는 것은 문제 구조의 유사성이다.",
    },
    {
      difference: "정밀도의 스케일 차이",
      explanation:
        "색판 정합의 오차가 종이 위 눈에 보이는 크기(mm급)라면, 칩 공정의 overlay 오차는 머리카락 굵기의 수만 분의 일(nm급)이다. 이름이 비슷해도 허용오차의 세계가 다르다.",
    },
    {
      difference: "복제되는 것이 다르다",
      explanation:
        "인쇄는 이미지를 종이에 옮기지만, 패터닝은 재료의 구조 자체를 만들어 낸다. 잉크의 자국이 아니라, 그 자리에 트랜지스터가 생긴다.",
    },
  ],
  relatedNodes: [
    {
      relationType: "relatedTo",
      relationNature: "conceptual",
      evidenceLevel: "probable",
      label: "같은 '정합' 문제의 인쪽 버전",
      teaser: "색 세 장을 겹치는 인쇄공의 고민이 개념의 출발점이다.",
      editorialPriority: 1,
      sources: [SOURCES.metLaGoulue],
      target: CARDS.registration,
    },
    {
      relationType: "relatedTo",
      relationNature: "historical",
      evidenceLevel: "documented",
      label: "선택적 부착을 처음 정리한 공정",
      teaser: "물과 기름의 규칙은 여기서 출발했다.",
      editorialPriority: 2,
      sources: [SOURCES.metLithographyEssay],
      target: CARDS.lithography,
    },
  ],
  closingQuestion:
    "그렇다면 오늘날 ‘찍는다’는 무엇일까? 복제의 대상이 이미지에서 구조로 옮겨간 지금, 당신이 손에 든 기계 안에서는 무엇이 찍히고 있을까?",
  sources: [SOURCES.wikipediaPhotolithography, SOURCES.britannicaLithography],
};
