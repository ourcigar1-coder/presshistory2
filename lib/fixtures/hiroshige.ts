import type { ArtworkPageData } from "@/lib/sanity/types";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

/**
 * 히로시게 『만월하의 비행기』 (Wild Geese Flying under the Full Moon)
 * Met JP270, Rogers Fund — Open Access (Public Domain)
 * 이미지: public/images/hiroshige-wild-geese.jpg (Met Open Access)
 */
const IMAGE_URL = "/images/hiroshige-wild-geese.jpg";

export const hiroshigeWildGeeseArtwork: ArtworkPageData = {
  _id: "artwork-hiroshige-wild-geese",
  _type: "artwork",
  title: "Wild Geese Flying under the Full Moon",
  year: 1832,
  thirtySecondExplanation:
    "보름달 아래를 가로지르는 기러기 떼. 히로시게는 하늘을 거의 비워두고, 달의 둥근 면과 기러기의 작은 검은 점들만으로 밤의 고요함을 그려냈다. 색판은 몇 장 되지 않지만 — 연한 하늘, 달, 새, 윤곽 — 그 절제가 오히려 시적인 풍경을 만든다. 다색 목판 인쇄는 화려한 포스터만 만드는 게 아니었다.",
  shortDescription:
    "만달 하늘을 나는 기러기 — 다색 우키요에의 서정성. 비워둠으로 밤을 그리는 방법.",
  domain: "art",
  artist: { name: "Utagawa Hiroshige", slug: "utagawa-hiroshige" },
  techniqueCard: CARDS.woodcut,
  heroImage: {
    url: IMAGE_URL,
    alt: "우타가와 히로시게의 다색 목판화 『만월하의 비행기』. 짙은 남색 하늘에 큰 보름달이 떠 있고, 그 앞으로 기러기 떼가 날아간다. 아래쪽에는 갈대밭의 어두운 실루엣이 있다.",
    visualRecord: {
      originType: "institutional",
      institution: "The Metropolitan Museum of Art",
      sourcePage: "https://www.metmuseum.org/art/collection/search/36742",
      license: "Open Access — Public Domain",
      publicDomain: true,
      creditLine:
        "Utagawa Hiroshige, Wild Geese Flying under the Full Moon, 1832. Rogers Fund, 1922 (JP270). Image: The Metropolitan Museum of Art (Open Access)",
      accessionNumber: "JP270",
      dateVerified: "2026-08-25",
    },
  },
  materials: [
    {
      name: "벚나무 판",
      simpleDescription:
        "색과 윤곽마다 하나씩. 판의 결이 곧은 선을 내는 도구이기도 하다.",
    },
    {
      name: "수성 잉크와 채색료",
      simpleDescription:
        "석판화의 기름 잉크와 달리, 물에 갠 색을 쓴다. 부드러운 색조의 비밀.",
    },
    {
      name: "바렌(馬連)",
      simpleDescription:
        "손바닥 크기의 패드. 종이 뒷면을 문질러 판의 잉크를 종이로 옮긴다.",
    },
  ],
  scienceConcepts: [],
  howItWasMade: {
    heading: "어떻게 만들어졌나 — 몇 장의 판으로 밤을 그렸을까",
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
            text: "이 그림은 『美術すみか』 연작 중 한 장으로, 보통 4~6장의 판으로 찍었다고 본다. 연한 하늘의 그라데이션(보쿠시)은 잉크를 판에 물게 하여 찍는 기술로, 찍사의 손끝이 곧 색이 되는 영역이었다. 윤곽판(검은 선), 하늘판, 달판, 기러기판, 갈대판 — 각 판은 겐토 눈금으로 정확히 겹쳐진다.",
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
            text: "주목할 점은 ‘비워둠’이다. 하늘의 넓은 여백은 종이 본색과 옅은 색면이 만드는 것이며, 이는 목판화의 본성 — 파낸 곳은 찍히지 않는다 — 과 정확히 일치한다. 물랭루즈 포스터의 하얀 스커트와 같은 문법이, 백 년 전의 에도에서 이미 완성되어 있었다.",
          },
        ],
      },
    ],
  },
  historicalContext: {
    heading: "히로시게와 에도의 여행 붐",
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
            text: "우타가와 히로시게(1797–1858)는 에도 시대 말기의 우키요에 화가다. 『동해도오십삼차』(1833)는 도카이도를 따라 에도에서 교토까지의 53개 역을 그린 연작으로, 당시 막부의 ‘참근교대’ 제도로 인해 여행이 성행하던 에도의 대중적 열망을 담아 폭발적인 인기를 얻었다. 풍경화가 대중 문화의 상품이 된 셈이다.",
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
            text: "이 그림이 속한 연작은 『美術すみか』(그림 여백의 시집)로, 시와 그림이 함께 어우러진 소박한 형식의 우키요에다. 우키요에는 배우 초상과 미인도가 주류였지만, 히로시게와 호쿠사이는 풍경이라는 새로운 장르를 개척했다 — 그리고 그 풍경은 수천 부의 복제물로 에도 시민의 벽을 장식했다.",
          },
        ],
      },
    ],
  },
  whyItMatters: {
    heading: "왜 중요한가 — 복제된 풍경이 만든 세계",
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
            text: "우키요에 목판화는 ‘복제 이미지가 감정을 운반할 수 있다’는 것을 증명했다. 이 그림 같은 작품들이 유럽에 알려지며(자포니즘) 모네, 반 고흐, 툴루즈=로트렉의 그림이 바뀌었다 — 평면적인 색면, 잘린 구도, 일상의 소재. 석판화 포스터와 우키요에는 서로 다른 대륙에서, 같은 문제(대중에게 이미지를 팔기)를 풀다가, 19세기 말 만나 서로를 바꿔놓았다.",
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
      label: "겐토 — 우키요에의 정합 눈금",
      teaser: "색판이 밀리미터 단위로 어긋나지 않은 비밀은 나무에 낸 작은 홈에 있다.",
      editorialPriority: 1,
      sources: [SOURCES.metHiroshigeWildGeese],
      target: CARDS.kento,
    },
    {
      relationType: "relatedTo",
      relationNature: "conceptual",
      evidenceLevel: "documented",
      label: "석판화 — 같은 시대, 다른 대륙의 복제 기술",
      teaser: "파리의 포스터와 에도의 풍경화는 서로를 알아보고 영향을 주었다.",
      editorialPriority: 2,
      sources: [SOURCES.metLithographyEssay],
      target: CARDS.lithography,
    },
  ],
  sources: [SOURCES.metHiroshigeWildGeese, SOURCES.metHokusaiWave],
};
