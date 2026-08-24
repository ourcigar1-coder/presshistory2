import type { ArtworkPageData } from "@/lib/sanity/types";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

/**
 * §6.3 A. 기관 이미지
 * Met Open Access (Public Domain / CC0) — Wikimedia Commons 경유 안정 URL.
 * dateVerified는 실제 검증일을 유지한다.
 */
const IMAGE_URL =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Henri_de_Toulouse-Lautrec%2C_Moulin_Rouge_-_La_Goulue%2C_1891_-_The_Metropolitan_Museum_of_Art.jpg";

export const moulinRougeArtwork: ArtworkPageData = {
  _id: "artwork-moulin-rouge-la-goulue",
  _type: "artwork",
  title: "Moulin Rouge: La Goulue",
  year: 1891,
  thirtySecondExplanation:
    "1889년 몽마르트르에 문 연 무도장 물랭루주가 오픈을 알릴 포스터를 의뢰하면서, 로트렉은 인생 첫 대형 포스터를 만들었다. 여섯 자 높이여서 종이 세 장을 이어 붙여야 했고, 스커트를 휘날리는 라 굴루의 몸통은 잉크를 아끼기 위해 종이의 하얀 여백 그 자체로 남겼다. 수천 장이 파리 벽에 붙었고, 길을 걷는 누구나 멀리서도 춤추는 실루엣을 알아봤다.",
  shortDescription:
    "멀리서도 알아보는 실루엣, 수천 장으로 퍼진 포스터. 거리가 화랑이 되던 순간.",
  domain: "art",
  artist: { name: "Henri de Toulouse-Lautrec", slug: "henri-de-toulouse-lautrec" },
  techniqueCard: CARDS.lithography,
  heroImage: {
    url: IMAGE_URL,
    alt: "툴루즈 로트렉의 석판화 포스터 ‘물랭루주: 라 굴루’. 왼쪽에서 남자의 실루엣이, 오른쪽에서 스커트를 걷어 올린 춤꾼 라 굴루가 노란 빛 속에 크게 보인다.",
    visualRecord: {
      originType: "institutional",
      institution: "The Metropolitan Museum of Art",
      sourcePage: "https://www.metmuseum.org/art/collection/search/333990",
      license: "Open Access — Public Domain (CC0)",
      publicDomain: true,
      creditLine:
        "Henri de Toulouse-Lautrec, Moulin Rouge: La Goulue, 1891. Harris Brisbane Dick Fund, 1932. Image: The Metropolitan Museum of Art (Open Access)",
      accessionNumber: "32.88.12",
      dateVerified: "2026-08-24",
    },
  },
  materials: [
    {
      name: "석회암 판",
      simpleDescription:
        "색 하나당 한 개씩 준비한 매끈한 돌판. 색이 네 개면 판도 네 개다.",
    },
    {
      name: "기름성 잉크와 크레용",
      simpleDescription: "물을 미워하는 성질을 이용해, 그린 자리에만 머문다.",
    },
  ],
  scienceConcepts: [CARDS.hydrophilicOleophilic],
  howItWasMade: {
    heading: "어떻게 만들어졌나",
    body: [
      {
        _type: "block",
        _key: "mk1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "mk1s1",
            text: "네 가지 색으로 찍은 석판화다. 색마다 판을 따로 준비해 같은 종이에 차례로 겹쳐 찍어야 했고, 판 크기가 워낙 커서 종이 세 장을 이어 붙였다. 인쇄는 파리의 Affiches Américaines(Charles Lévy) 인쇄소에서 이루어졌다. 색판이 조금만 어긋나도 얼굴과 스커트가 무너지므로, 정합(registration)은 곧 품질 그 자체였다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "mk2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "mk2s1",
            text: "눈에 띄는 절약도 있다. 라 굴루의 하얀 스커트는 잉크를 칠하지 않은 종이의 여백이다. 대량으로 찍는 그림에서는 ‘찍지 않음’이 곧 비용 절감이자, 강한 형태를 만드는 디자인이 된다.",
          },
        ],
      },
    ],
  },
  historicalContext: {
    heading: "무도장과 도시의 밤",
    body: [
      {
        _type: "block",
        _key: "hc1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "hc1s1",
            text: "물랭루주는 1889년 몽마르트르의 불바르 드 클리시에 문을 연 값비싼 무도장이었다. ‘라 굴루(제식이)’라는 별명의 댄서 루이즈 베버와 곡예사 발렝탱 르 데소세는 이곳의 스타였다. 포스터는 단순한 광고가 아니라, 도시 오락 산업이 자신들의 상품을 파는 새로운 광고 시장이 만들어졌다는 신호였다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "hc2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "hc2s1",
            text: "포스터는 벽에 풀로 붙여졌다. 비에 젖고, 찢기고, 다른 포스터에 덮였다. 원본이 아니라 복제물이 공간을 채우는 것이 자연스러운 최초의 예술 환경이 열린 셈이다.",
          },
        ],
      },
    ],
  },
  whyItMatters: {
    heading: "왜 중요한가",
    body: [
      {
        _type: "block",
        _key: "wm1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "wm1s1",
            text: "이 포스터는 광고 그림이 미술관에 걸릴 수 있음을 보여준 사례가 되었다. 화가의 서명보다 형태와 색의 즉각적 인상이 중요하다는 발상은, 눈이 흐르는 거리라는 조건에서 나왔다. 대량복제 기술이 ‘원본의 위계’를 흔든 지점 또한 여기서다.",
          },
        ],
      },
    ],
  },
  unexpectedConnections: [
    {
      relationType: "relatedTo",
      relationNature: "historical",
      evidenceLevel: "documented",
      label: "색 세 장을 겹치는 일의 기술적 이름",
      teaser: "얼굴과 스커트가 무너지지 않으려면, 판마다 정확히 같은 자리에 찍혀야 한다.",
      editorialPriority: 1,
      sources: [SOURCES.metLaGoulue],
      target: CARDS.registration,
    },
    {
      relationType: "conceptuallySimilarTo",
      relationNature: "conceptual",
      evidenceLevel: "probable",
      label: "거대한 ‘복제의 문명’으로 이어지는 다리",
      teaser: "수천 장의 포스터와 수억 개의 트랜지스터 — 같은 질문이 반복된다: 어떻게 똑같이?",
      editorialPriority: 2,
      sources: [SOURCES.wikipediaPhotolithography],
      target: {
        _id: "bridge-from-printing-to-patterning",
        _type: "bridge",
        title: "새기는 것에서 패터닝으로",
        slug: "from-printing-to-patterning",
        shortDescription:
          "1839년의 돌판과 오늘날 반도체 공장은 무엇이 같고 무엇이 다를까?",
        domain: "technology",
        thumbnail: null,
      },
    },
  ],
  sources: [SOURCES.metLaGoulue, SOURCES.momaLaGoulue, SOURCES.aicLaGoulue],
};
