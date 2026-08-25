import type { SourceProjection } from "@/lib/sanity/types";

/**
 * §6.2 Source Strategy
 * Vertical Slice Research Pack(§6.6)의 필수 출처 묶음.
 * accessedAt/dateVerified는 실제 확인일을 기록한다.
 */

const ACCESSED = "2026-08-24";

export const SOURCES: Record<string, SourceProjection> = {
  /** Met · Moulin Rouge: La Goulue collection record */
  metLaGoulue: {
    title: "Moulin Rouge: La Goulue — Collection record",
    sourceType: "institution",
    institution: "The Metropolitan Museum of Art",
    year: 1891,
    url: "https://www.metmuseum.org/art/collection/search/333990",
    accessedAt: ACCESSED,
    notes: "4색 석판화, 3매의 종이, 32.88.12, Harris Brisbane Dick Fund 1932. Open Access(PD) 이미지 제공.",
  },
  /** MoMA · 작품 해설 (첫 포스터, 3매 합판, 여백 활용 근거) */
  momaLaGoulue: {
    title: "Toulouse-Lautrec. Moulin Rouge, La Goulue (1891)",
    sourceType: "institution",
    institution: "The Museum of Modern Art",
    year: 1891,
    url: "https://www.moma.org/collection/works/188979",
    accessedAt: ACCESSED,
    notes: "로트렉의 첫 포스터. 3매의 종이에 인쇄할 만큼 거대, 스커트의 중심 형태를 종이의 여백(무인영)으로 처리.",
  },
  /** AIC · CC0 소장본과 IIIF */
  aicLaGoulue: {
    title: "Moulin Rouge, La Goulue — Collection record (CC0)",
    sourceType: "institution",
    institution: "The Art Institute of Chicago",
    year: 1891,
    url: "https://www.artic.edu/artworks/82287/moulin-rouge-la-goulue",
    accessedAt: ACCESSED,
    notes: "CC0 지정. IIIF manifest 제공. 수천 장이 파리에 게시되었다는 기관 서술.",
  },
  /** Met · 19세기 석판화 개관 에세이 */
  metLithographyEssay: {
    title: "Lithography in the Nineteenth Century (Heilbrunn Timeline of Art History)",
    sourceType: "institution",
    institution: "The Metropolitan Museum of Art",
    url: "https://www.metmuseum.org/toah/hd/lith/hd_lith.htm",
    accessedAt: ACCESSED,
    notes: "석판화 원리와 19세기 확산의 기관 개관 자료.",
  },
  /** Britannica · lithography 기술 개관 */
  britannicaLithography: {
    title: "Lithography — Encyclopaedia Britannica",
    sourceType: "academic",
    institution: "Encyclopaedia Britannica",
    url: "https://www.britannica.com/technology/lithography",
    accessedAt: ACCESSED,
    notes: "평판 인쇄 원리, 제네펠더와 초기 역사의 일반 참고 자료.",
  },
  /** Britannica · gum arabic */
  britannicaGumArabic: {
    title: "Gum arabic — Encyclopaedia Britannica",
    sourceType: "academic",
    institution: "Encyclopaedia Britannica",
    url: "https://www.britannica.com/science/gum-arabic",
    accessedAt: ACCESSED,
    notes: "아카시아 수액, 식품/공업용 천연 수지로서의 성질.",
  },
  /** Wikipedia · gum arabic (탐색 지도용 C티어) */
  wikipediaGumArabic: {
    title: "Gum arabic — Wikipedia",
    sourceType: "encyclopedia",
    institution: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Gum_arabic",
    accessedAt: ACCESSED,
    notes: "탐색 지도로 사용. strong claim의 유일한 근거로 사용하지 않음 (§6.2 C티어).",
  },
  /** Wikipedia · photolithography (bridge, C티어 + editorial review 필요) */
  wikipediaPhotolithography: {
    title: "Photolithography — Wikipedia",
    sourceType: "encyclopedia",
    institution: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Photolithography",
    accessedAt: ACCESSED,
    notes: "현대 패터닝 개요 탐색용. Bridge의 historical/conceptual 구분은 편집 리뷰 필수 (§6.6).",
  },
  // ---------- 목판화 (woodcut) ----------
  /** Met · 히로시게 『만월하의 비행기』 collection record */
  metHiroshigeWildGeese: {
    title: "Utagawa Hiroshige, Wild Geese Flying under the Full Moon — Collection record",
    sourceType: "institution",
    institution: "The Metropolitan Museum of Art",
    year: 1832,
    url: "https://www.metmuseum.org/art/collection/search/36742",
    accessedAt: ACCESSED,
    notes: "JP270. Rogers Fund. Open Access(PD) 이미지 제공. 다색 우키요에 목판화.",
  },
  /** Met · 호쿠사이 『가나가와 해변의 큰 파도』 collection record */
  metHokusaiWave: {
    title: "Katsushika Hokusai, Under the Wave off Kanagawa — Collection record",
    sourceType: "institution",
    institution: "The Metropolitan Museum of Art",
    year: 1830,
    url: "https://www.metmuseum.org/art/collection/search/45434",
    accessedAt: ACCESSED,
    notes: "JP10. Harris Brisbane Dick Fund. Open Access(PD). 다색 목판 인쇄의 정점.",
  },
  /** NGA · 뒤러 『코뿔소』 collection record */
  ngaDurerRhinoceros: {
    title: "Albrecht Dürer, The Rhinoceros — Collection record",
    sourceType: "institution",
    institution: "National Gallery of Art, Washington",
    year: 1515,
    url: "https://www.nga.gov/collection/art-object-page.121617.html",
    accessedAt: ACCESSED,
    notes: "Open Access(PD). 목판화. 유럽 목판 복제 이미지의 상징적 사례.",
  },
  /** Commons · 목판 잉킹 작업 사진 */
  commonsWoodcutInking: {
    title: "Endi Poskovic inking a color wood-relief block",
    sourceType: "openCollection",
    institution: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Endi_Poskovic_inking_a_color_wood-relief_block.jpg",
    accessedAt: ACCESSED,
    notes: "CC BY-SA 3.0. 현대 컬러 목판 작업 과정 사진.",
  },
};
