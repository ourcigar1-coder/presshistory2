import type { ArtworkPageData } from "@/lib/sanity/types";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

/**
 * Met Open Access (Public Domain / CC0) — Wikimedia Commons 경유 안정 URL.
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
    alt: "툴루즈 로트렉의 석판화 포스터 ‘물랭루주: 라 굴루’. 왼쪽에서 발레리나처럼 뻣뻣한 발렌탱의 검은 실루엣이, 오른쪽 중앙에서 흰 스커트를 부풀린 라 굴루가 노란 불빛 속에 크게 보인다. 배경의 검은 관객 실루엣과 대각선 repeating 글씨가 시선을 이끈다.",
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
      name: "석회암 판 3장",
      simpleDescription: "색마다 판 하나씩, 총 4색 — 크기 때문에 종이도 세 장을 이어 붙여야 했다.",
    },
    {
      name: "기름성 잉크·크레용·터셰",
      simpleDescription: "물을 밀어내고 기름을 붙잡는 성질로 선과 면을 만든다.",
    },
    {
      name: "우븐지(wove paper)",
      simpleDescription: "올이 드러나지 않는 매끈한 종이. 접합부가 감춰진다.",
    },
  ],
  scienceConcepts: [CARDS.hydrophilicOleophilic],
  howItWasMade: {
    heading: "어떻게 만들어졌나 — 네 가지 색, 세 장의 종이",
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
            text: "네 가지 색으로 찍은 평판 석판화이며, 색마다 판을 따로 준비해 같은 종이에 차례로 겹쳐 찍어야 했다. 크기 자체가 압도적이어서—높이 6피트(약 190cm)—우븐지 세 장을 이어 붙였고, 인쇄는 파리의 Affiches Américaines(샤를 레비) 인쇄소가 맡았다. 색판이 조금만 어긋나도 얼굴과 스커트의 경계가 무너지므로, 정합(registration)은 곧 품질 그 자체였다.",
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
            text: "형태를 결정한 또 하나의 선택은 ‘찍지 않음’이다. 라 굴루의 하얗고 부풀린 스커트는 잉크를 칠하지 않은 종이의 여백 그 자체다. 대량으로 찍는 그림에서 여백은 비용 절감이자 가장 강한 형태—멀리서도 읽히는 실루엣—가 된다. 배경의 반복되는 레터링(MOULIN ROUGE)과 검은 관객 열은 대각선 리듬을 만들며 무대 중앙의 폭발을 더 또렷하게 만든다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "mk3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "mk3s1",
            text: "발렌탱(Valentin le Désossé)의 길쭉한 검은 실루엣은 라 굴루와 대조를 이루며 포스터를 좌우 두 덩어리로 나눈다. 실루엣과 평면 색면만으로 공간을 만든 방식은, 그가 일본 목판화에서 배운 압축과도 통한다.",
          },
        ],
      },
    ],
  },
  historicalContext: {
    heading: "무도장과 도시의 밤 — 왜 하필 1891년이었나",
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
            text: "물랭루주는 1889년 몽마르트르의 불바르 드 클리시에 문을 연 값비싼 무도장이었다. ‘라 굴루(먹보)’ 루이즈 베버와 ‘뼈 없는’ 발렌탱은 이곳을 상징하는 스타였다. 도시는 가스등과 대중 교통으로 밤까지 붐볐고, 카바레·상점·신문이 벽을 사들이며 포스터 시장 자체가 커지고 있었다. 이 수요 없는 기술 혁명은 없었다.",
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
            text: "포스터는 풀로 벽에 붙여졌다. 비에 젖고, 찢기고, 다른 광고에 덮였다. 화랑의 두꺼운 액자나 유리 없이, 복제물이 곧 원본이 되는 첫 예술 환경이 거리에서 열렸다. 로트렉에게 포스터 의뢰는 화가가 아니라 거리로 가는 길이었고, 그 길은 도시의 노동과 소비, 야간 오락 산업이 함께 만든 것이었다.",
          },
        ],
      },
    ],
  },
  whyItMatters: {
    heading: "왜 중요한가 — 광고가 미술이 된 순간",
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
            text: "이 포스터는 광고 그림이 미술관에 걸릴 수 있음을 보여준 사례가 됐다. 화가의 서명보다 형태와 색의 즉각적 인상이 중요하다는 발상은, 눈이 흐르는 거리라는 조건에서 나왔다. 평면 색면과 실루엣, 그리고 ‘비워둠’의 디자인—여백을 형태로 쓴 방식—은 이후 포스터 디자인의 문법이 됐다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "wm2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "wm2s1",
            text: "동시에 대량복제가 ‘원본의 위계’를 흔든 지점이기도 하다. 벽에 붙은 수천 장 중 어느 하나가 원본인지 묻는 일 자체가 어색해진다. 기술사적으로도 의미가 있다—평판 석판화가 거리 광고라는 대량 소비재와 만나, 복제의 문명이 일상으로 들어온 장면이기 때문이다.",
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
        shortDescription: "1839년의 돌판과 오늘날 반도체 공장은 무엇이 같고 무엇이 다를까?",
        domain: "technology",
        thumbnail: null,
      },
    },
  ],
  sources: [SOURCES.metLaGoulue, SOURCES.momaLaGoulue, SOURCES.aicLaGoulue],
};
