import type { ArtworkPageData } from "@/lib/sanity/types";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

/**
 * 고야 『이성의 잠은 괴물을 낳는다』 (Los Caprichos No. 43, 1799)
 * 에칭·아쿠아팅트 — Met 소장, Open Access (Public Domain)
 * 이미지: public/images/goya-sleep-of-reason.jpg (Wikimedia Commons, Google Art Project)
 */
const IMAGE_URL = "/images/goya-sleep-of-reason.jpg";

export const goyaSleepOfReasonArtwork: ArtworkPageData = {
  _id: "artwork-goya-sleep-of-reason",
  _type: "artwork",
  title: "The Sleep of Reason Produces Monsters",
  year: 1799,
  thirtySecondExplanation:
    "책상에 엎드려 잠든 화가 자신. 주위에는 날카로운 부엉이와 박쥐가 몰려들고, 바닥에는 스핑크스가 조용히 지켜본다. ‘이성의 잠은 괴물을 낳는다’ — 고야의 자기 풍자이자 계율이다. 이 에칭은 80장의 연작 『로스 카프리초스』의 43번째 판으로, 미신과 무지를 비판했다가 검열 직전까지 갔던 작품의 핵심 이미지다.",
  shortDescription:
    "고야의 자기 풍자 — 에칭이 검열과 싸운 기록. 이성의 잠은 괴물을 낳는다.",
  domain: "art",
  artist: { name: "Francisco de Goya", slug: "francisco-de-goya" },
  techniqueCard: CARDS.intaglio,
  heroImage: {
    url: IMAGE_URL,
    alt: "고야의 에칭 『이성의 잠은 괴물을 낳는다』. 책상에 엎드려 잠든 화가 주위로 부엉이와 박쥐 떼가 몰려들고, 바닥에는 스핑크스가 웅크리고 있다. 회색빛 명암이 불안한 분위기를 만든다.",
    visualRecord: {
      originType: "institutional",
      institution: "The Metropolitan Museum of Art",
      sourcePage: "https://www.metmuseum.org/art/collection/search/339636",
      license: "Open Access — Public Domain",
      publicDomain: true,
      creditLine:
        "Francisco de Goya, The Sleep of Reason Produces Monsters (Los Caprichos, No. 43), 1799. Etching and aquatint. The Metropolitan Museum of Art (Open Access). Image via Wikimedia Commons, Google Art Project.",
      accessionNumber: "18.64.43",
      dateVerified: "2026-08-25",
    },
  },
  materials: [
    {
      name: "구리판과 아쿠아팅트",
      simpleDescription:
        "에칭선 위에 송진 가루 층을 얹어 회색 톤을 만드는 기술 — 고야가 완성도를 끌어올린 무기.",
    },
    {
      name: "산과 왁스",
      simpleDescription: "바늘이 긁은 자리만 산이 녹인다 — 그림이 곧 화학 반응이 된다.",
    },
  ],
  scienceConcepts: [],
  howItWasMade: {
    heading: "어떻게 만들어졌나 — 에칭 위에 아쿠아팅트를 얹다",
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
            text: "고야는 에칭(선)과 아쿠아팅트(면의 톤)를 결합했다. 아쿠아팅트는 판에 송진 가루를 뿌려 가열하면 가루 주위로 산이 고여, 거친 회색 면을 만드는 기술이다. 이 그림의 불안한 회색 배경은 바로 이 방법으로 — 선이 아니라 톤으로 어둠을 그렸다.",
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
            text: "원래 이 판은 1797~98년경 제작됐다. 고야는 처음에 이 연작을 ‘꿈’의 시리즈로 구상했고, 판 자체를 자기 초상으로 시작해 — 잠든 화가 위에 괴물들이 모여드는 — 연작의 선언문으로 사용했다. 판에 새긴 고양이 발자국 같은 산의 얼룩까지 의도된 텍스처다.",
          },
        ],
      },
    ],
  },
  historicalContext: {
    heading: "검열 앞에서 — 왕에게 헌상하다",
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
            text: "『로스 카프리초스』는 1799년 판본 300부가 판매되었다. 그러나 내용이 종교재판·귀족·미신을 풍자하는 것이 들키자 종교재판소가 고야를 조사하려 했다. 고야는 판 전체를 카를로스 4세에게 헌상해 검열을 피했고, 이후 판본 판매는 중단됐다.",
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
            text: "판화는 회화와 다르게 여러 부가 존재한다. 그래서 위험하다 — 한 장의 그림은 벽에 걸리지만, 300부의 에칭은 손에서 손으로 퍼진다. 고야의 사례는 복제 기술이 표현의 자유와 검열이 부딪히는 지점이 항상 함께 온다는 것을 보여준다.",
          },
        ],
      },
    ],
  },
  whyItMatters: {
    heading: "왜 중요한가 — 판화가 풍자가 되다",
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
            text: "『로스 카프리초스』는 판화가 정치 비판의 무기가 될 수 있음을 증명했다. 이후 신문 만평, 정치 풍자 카툰, 밈까지 — 대량 복제되는 이미지로 권력을 비판하는 전통의 조상이다. 고야가 에칭판에서 시작한 것을, 오늘날 우리는 몇 초 만에 복제해 공유한다.",
          },
        ],
      },
    ],
  },
  unexpectedConnections: [
    {
      relationType: "relatedTo",
      relationNature: "conceptual",
      evidenceLevel: "documented",
      label: "렘브란트 — 같은 매체, 다른 세기의 목소리",
      teaser: "빛의 렘브란트, 어둠의 고야 — 에칭판 위에서 만나는 두 거인.",
      editorialPriority: 1,
      sources: [SOURCES.metRembrandtSelfPortrait],
      target: CARDS.rembrandtSelfPortrait,
    },
    {
      relationType: "explains",
      relationNature: "historical",
      evidenceLevel: "documented",
      label: "이 그림의 기술 — 에칭이란",
      teaser: "왁스와 바늘, 그리고 산. 화가가 판화에 참여한 방법.",
      editorialPriority: 2,
      sources: [SOURCES.metGoyaCaprichos],
      target: CARDS.etching,
    },
  ],
  sources: [SOURCES.metGoyaCaprichos],
};
