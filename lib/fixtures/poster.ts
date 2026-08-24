import type { EntryPageData } from "@/lib/sanity/types";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

export const posterEntry: EntryPageData = {
  _id: "entry-poster",
  _type: "entry",
  title: "거리의 포스터에서 시작하기",
  introQuestion: "왜 19세기 도시는 갑자기 포스터로 가득 찼을까?",
  simpleExplanation:
    "가스등이 밤거리를 밝히고, 마차와 지하철이 수만 명을 실어 나르면서 파리의 거리는 처음으로 ‘사람이 계속 흐르는 공간’이 되었다. 흘러가는 눈을 붙잡아야 하는 카바레, 상점, 신문은 도시의 벽을 경쟁적으로 사들이기 시작했다. 그런데 벽에 붙일 그림을 한 장씩 그릴 수는 없다. 같은 그림을 수천 장 찍어내는 기술이 바로 그때 필요해졌고, 거리는 곧 걸어 다니는 화랑이 되었다.",
  shortDescription:
    "밤거리가 밝아지고 사람이 흐르기 시작한 도시. 흐르는 눈을 붙잡아야 하는 상업이 벽을 원했다.",
  domain: "society",
  heroImage: {
    url: "/images/cheret-esclave.jpg",
    alt: "쥘 셰레의 석판화 포스터 ‘L'Esclave blanche’ — 거리 벽을 장식하던 대형 색채 포스터의 대표 사례. (BnF Gallica, btv1b9015469h)",
  },
  connections: [
    {
      relationType: "relatedTo",
      relationNature: "historical",
      evidenceLevel: "documented",
      label: "포스터 물량을 가능하게 만든 인쇄법",
      teaser:
        "수천 장을 찍으려면 돌을 파는 방식으로는 감당이 안 됐다 — 그래서 돌을 파지 않는 인쇄법이 주목받았다.",
      editorialPriority: 1,
      sources: [SOURCES.metLithographyEssay, SOURCES.britannicaLithography],
      target: CARDS.lithography,
    },
    {
      relationType: "appearsIn",
      relationNature: "historical",
      evidenceLevel: "documented",
      label: "이 경쟁의 승자가 된 작품",
      teaser: "여섯 자 높이의 포스터 하나가 파리 전체의 시선을 붙잡았다.",
      editorialPriority: 2,
      sources: [SOURCES.momaLaGoulue, SOURCES.aicLaGoulue],
      target: CARDS.moulinRouge,
    },
  ],
  recommendedPath: [
    {
      reason: "포스터를 수천 장 찍게 만든 기술의 원리가 궁금해진다면",
      target: CARDS.lithography,
    },
    {
      reason: "원리가 아니라 결과물부터 보고 싶다면",
      target: CARDS.moulinRouge,
    },
  ],
  relatedEntries: [],
  sources: [SOURCES.metLithographyEssay, SOURCES.britannicaLithography],
};
