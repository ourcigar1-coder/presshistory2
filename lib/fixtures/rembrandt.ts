import type { ArtworkPageData } from "@/lib/sanity/types";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

/**
 * 렘브란트 『돌에 기대어』 자화상 에칭 (1639)
 * Met 41.1.31 — Open Access (Public Domain), image via Wikimedia Commons (MET DP147767)
 */
const IMAGE_URL = "/images/rembrandt-self-portrait.jpg";

export const rembrandtSelfPortraitArtwork: ArtworkPageData = {
  _id: "artwork-rembrandt-self-portrait",
  _type: "artwork",
  title: "Self-Portrait Leaning on a Stone Sill",
  year: 1639,
  thirtySecondExplanation:
    "렘브란트는 평생 80여 번 자기 얼굴을 에칭과 회화로 남겼다. 이 판에서 그는 몸을 돌에 기댄 채 관객을 정면으로 응시한다. 얼굴의 밝은 부분은 판을 거의 파지 않은 곳이고, 그림자는 에칭선이 촘촘히 모인 곳 — 홈의 밀도가 곧 빛의 방향이 된다. 복제 판화 한 장이 화가의 얼굴을 유럽 전체에 퍼뜨린 셈이다.",
  shortDescription:
    "렘브란트가 자기 얼굴로 연습한 명암 — 홈의 밀도가 빛이 된다.",
  domain: "art",
  artist: { name: "Rembrandt van Rijn", slug: "rembrandt-van-rijn" },
  techniqueCard: CARDS.intaglio,
  heroImage: {
    url: IMAGE_URL,
    alt: "렘브란트의 에칭 자화상 『돌에 기대어』. 모자를 쓴 화가가 돌 난간에 팔을 괴고 관객을 정면으로 바라본다. 얼굴에는 밝은 빛, 배경에는 촘촘한 에칭선이 깔린 어둠.",
    visualRecord: {
      originType: "institutional",
      institution: "The Metropolitan Museum of Art",
      sourcePage: "https://www.metmuseum.org/art/collection/search/371786",
      license: "Open Access — Public Domain (CC0)",
      publicDomain: true,
      creditLine:
        "Rembrandt van Rijn, Self-Portrait Leaning on a Stone Sill, 1639. The Metropolitan Museum of Art (Open Access). Image via Wikimedia Commons.",
      accessionNumber: "41.1.31",
      dateVerified: "2026-08-25",
    },
  },
  materials: [
    {
      name: "구리판",
      simpleDescription: "에칭 왁스를 입혀 바늘로 긁고, 산에 담가 선을 녹여낸다.",
    },
    {
      name: "에칭 바늘",
      simpleDescription: "왁스 층만 긁으면 된다 — 금속을 직접 새기는 것보다 훨씬 가볍다.",
    },
    {
      name: "젖은 종이",
      simpleDescription: "물에 적신 종이가 부드러워져 홈 속 잉크를 빨아올린다.",
    },
  ],
  scienceConcepts: [],
  howItWasMade: {
    heading: "어떻게 만들어졌나 — 왁스, 바늘, 그리고 산",
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
            text: "렘브란트는 구리판에 왁스츨 입히고, 그 위에서 에칭 바늘로 자기 얼굴의 윤곽을 그렸다. 바늘이 왁스를 벗겨낸 자리에만 산이 닿아 금속을 녹였다. 얕게 녹인 선은 밝게, 여러 번 산에 담가 깊게 녹인 선은 어둡게 찍힌다 — 그는 이 깊이의 차이로 얼굴의 볼륨을 만들었다.",
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
            text: "배경의 어둠은 수천 개의 교차하는 짧은 선이다. 이 밀도 조절이 렘브란트 에칭의 핵심 기술이다. 그는 같은 판을 여러 단계에 걸쳐 다시 에칭하며 상태(state)를 바꿨고, 초기 상태의 인쇄본과 후기 상태는 서로 다른 그림처럼 보인다. 복제판이 ‘버전’을 갖기 시작한 순간이기도 하다.",
          },
        ],
      },
    ],
  },
  historicalContext: {
    heading: "자화상 80번 — 거울 앞에서 복제를 연습하다",
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
            text: "렘브란트(1606–1669)는 평생 자신의 얼굴을 그렸다. 회화와 에칭을 합쳐 80여 점. 이는 단순한 자기애가 아니라, 거울 앞에서 얼굴의 표정과 빛을 연구하는 실험이었다. 그리고 에칭은 그 실험 결과물을 팔 수 있는 유일한 매체였다 — 그림 하나는 귀족만 살지만, 에칭은 부르주아 수집가도 샀다.",
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
            text: "1639년, 암스테르담의 성공기였다. 이 자화상의 당당한 자세와 화려한 옷은 부유한 화가의 자기연출이다. 복제 기술이 화가의 사회적 지위를 만들어낸 시대 — 이미지의 대량 유통이 개인 브랜드를 가능케 한 최초의 사례 중 하나다.",
          },
        ],
      },
    ],
  },
  whyItMatters: {
    heading: "왜 중요한가 — 명암의 민주화",
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
            text: "렘브란트의 에칭은 유럽 전역의 화가들이 모사하며 명암법(키아로스쿠로)을 배운 교과서가 됐다. 원본 회화는 한 곳에 걸려 있지만, 에칭은 이동했다. 복제가 예술 교육의 형태를 바꾼 사례 — 오늘날의 튜토리얼 영상과 같은 역할을 17세기에 한 것이다.",
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
      label: "판흔 — 이 판화의 서명을 손끝으로 확인하다",
      teaser: "종이 가장자리의 움푹한 테두리가 동판화임을 말해준다.",
      editorialPriority: 1,
      sources: [SOURCES.metRembrandtSelfPortrait],
      target: CARDS.plateMark,
    },
    {
      relationType: "relatedTo",
      relationNature: "conceptual",
      evidenceLevel: "probable",
      label: "고야 — 160년 뒤 같은 매체의 다른 목소리",
      teaser: "렘브란트가 빛이었다면 고야는 어둠이었다. 둘 다 에칭판 위에서.",
      editorialPriority: 2,
      sources: [SOURCES.metGoyaCaprichos],
      target: CARDS.goyaSleep,
    },
  ],
  sources: [SOURCES.metRembrandtSelfPortrait, SOURCES.metRembrandtSamaritan],
};
