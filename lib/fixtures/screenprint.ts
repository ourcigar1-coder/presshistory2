import type { TechniquePageData } from "@/lib/sanity/types";
import { SOURCES } from "./sources";
import { CARDS } from "./cards";

/**
 * 스크린 인쇄 (screenprint / stencil) — 네 번째 기법 노드, 현대로 이어지는 다리.
 * 이미지: Velonis 스크린 인쇄 포스터(WPA, PD), 티셔츠 스크린 인쇄 공정 사진(CC BY-SA 4.0)
 */
export const screenprintTechnique: TechniquePageData = {
  _id: "technique-screenprint",
  _type: "technique",
  title: "망을 뚫어 찍는 판화, 스크린 인쇄",
  family: "공판 인쇄 (stencil)",
  tenSecondExplanation:
    "망사(그물) 스크린 위에 그림이 아닌 부분을 감광제로 막는다. 스퀴지(고무 밀대)로 잉크를 밀면, 뚫린 망구멍으로만 잉크가 종이나 천에 통과한다. 파내지도, 그리지도 않는다 — 막는 것만으로 이미지가 만들어진다. 티셔츠, 간판, 워홀의 팝아트가 모두 이 방식이다.",
  shortDescription:
    "막고, 밀고, 통과시킨다. 팝아트와 티셔츠로 이어진 가장 젊은 판화.",
  domain: "technique",
  process: [
    {
      title: "1 · 스크린 준비 — 그물 위의 캔버스",
      description:
        "나무나 알루미늄 프레임에 폴리에스터·나일론 망사를 팽팽히 당겨 붙인다. 옛날에는 실크를 썼기에 ‘실크스크린’이라 불렸다. 망의 촘촘함이 잉크 통과량과 디테일을 결정한다.",
      image: null,
    },
    {
      title: "2 · 막기 — 빛으로 마스크를 만들다",
      description:
        "스크린 전체에 감광제를 입히고, 그림이 검은 색으로 그려진 필름을 올려 자외선에 노출한다. 빛을 받은 부분은 굳어 막히고, 그림 부분은 씻겨 나가 망이 뚫린다. 사진 기술과 판화 기술이 만나는 지점 — 이 방식 덕분에 사진 이미지도 그대로 찍을 수 있게 됐다.",
      image: null,
    },
    {
      title: "3 · 잉크 얹기",
      description:
        "스크린을 종이·천·플라스틱 위에 올리고, 망 위에 잉크를 부어 넣는다. 잉크는 끈적한데도 망구멍으로 내려가지 않는다 — 스퀴지가 눌러주기 전까지는.",
      image: null,
    },
    {
      title: "4 · 스퀴지로 밀기",
      description:
        "고무 밀대(스퀴지)로 잉크를 한 번에 밀어내면, 압력이 망구멍을 잠깐 열며 잉크가 아래로 통과한다. 한 번의 스트로크, 하나의 색. 색이 여럿이면 스크린도 여럿 — 그리고 정합 문제가 또 등장한다.",
      image: null,
    },
    {
      title: "5 · 반복 — 무엇이든, 몇 장이든",
      description:
        "같은 스크린으로 천, 종이, 유리, 금속까지 무엇이든 찍을 수 있다. 잉크도 유성·수성·플라스틱sol 모두 가능. 이 유연성이 스크린 인쇄를 20세기의 상업·예술·의류 산업의 표준으로 만들었다.",
      image: null,
    },
  ],
  whyItAppeared: {
    heading: "왜 스크린이었을까 — 전쟁과 포스터가 만든 기술",
    body: [
      {
        _type: "block",
        _key: "w1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "w1s1",
            text: "스텐실(형판)로 찍는 기술은 고대부터 있었다 — 중국의 실크 스텐실, 일본의 가타가미(型紙). 이것이 서구에서 실크 스크린과 만난 것은 20세기 초. 1907년 존 필즈워스가 사진 감광 스크린 공법을 특허내며 산업 기술이 됐다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "w2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "w2s1",
            text: "결정적 계기는 1930년대 대공황이었다. 미국 WPA(연방 예술 프로젝트)는 실업 예술가들에게 포스터 제작을 맡겼고, 값싸고 크게 찍을 수 있는 스크린 인쇄가 표준이 됐다. 앤서니 벨로니스가 쓴 『기술적 매뉴얼』은 스크린 인쇄를 예술 매체로 정립시킨 교과서였다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "w3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "w3s1",
            text: "1960년대 워홀이 이 기술을 예술의 중심으로 끌어올렸다. 사진을 스크린에 그대로 전사할 수 있다는 점 — 그는 마릴린의 얼굴을 신문 사진에서 가져와, 복제 자체를 주제로 만들었다. 같은 얼굴이 36번 반복되고, 색이 어긋나고, 인쇄 불량까지 보인다. 복제의 기술을 복제의 주제로 쓴 첫 예술가.",
          },
        ],
      },
    ],
  },
  historicalContext: {
    heading: "포스터에서 티셔츠까지 — 20세기의 잉크",
    body: [
      {
        _type: "block",
        _key: "h1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "h1s1",
            text: "2차 세계대전 중 스크린 인쇄는 군용 깃발·표지판·달력을 찍어냈고, 전후에는 상업 간판과 T셔츠 산업의 기반이 됐다. 1960년대 시민권 운동과 반전 운동의 픽카드·포스터도 대부분 스크린 인쇄였다 — 값싸고, 빠르고, 어디서든 찍을 수 있었기 때문이다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "h2s1",
            text: "예술의 세계에서는 워홀 이후 로이 리히텐슈타인, 로버트 라우센버그가 스크린 인쇄로 사진과 회화를 섞었다. 판화가 더 이상 ‘원본의 복제’가 아니라, 복제 자체가 원본인 매체로 재정의된 시기다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "h3s1",
            text: "오늘날 스크린 인쇄는 전자 분야에도 쓰인다 — 태양전지·인쇄회로기판의 회로를 스크린으로 인쇄한다. 망사로 막고 잉크를 밀어 통과시키는 원리는, 포스터에서 반도체까지 이어지는 패터닝의 또 다른 얼굴이다.",
          },
        ],
      },
    ],
  },
  howToIdentify: {
    heading: "어떻게 알아볼까 — 스크린 인쇄 감별법",
    body: [
      {
        _type: "block",
        _key: "id1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "id1s1",
            text: "스크린 인쇄의 잉크층은 두껍고 평평하다 — 스퀴지가 망을 통해 밀어 넣은 잉크가 표면에 ‘올려져’ 있기 때문이다. 손끝으로 만지면 잉크가 종이 위에 앉아 있는 느낌이 든다. 색이 순수하고 채도가 높으며, 그라데이션이 거의 없다 — 한 번의 스트로크로 하나의 색이 찍히기 때문.",
          },
        ],
      },
      {
        _type: "block",
        _key: "id2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "id2s1",
            text: "돋보기로 보면 색 가장자리에 망사의 미세한 직교 패턴이 보일 수 있다. 워홀 팝아트의 어긋난 색 겹침(misregistration)은 결함이 아니라 의도된 미학 — 복제의 흔적을 그대로 보여주는 스타일이었다.",
          },
        ],
      },
    ],
  },
  efficacy: {
    heading: "왜 오래 쓰였나 — 가장 유연한 잉크",
    body: [
      {
        _type: "block",
        _key: "ef1",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "ef1s1",
            text: "스크린 인쇄는 재료의 자유가 압도적이다. 유성·수성·플라스틱sol·UV 잉크 모두 가능하고, 종이·천·유리·금속·플라스틱·세라믹까지 무엇에든 찍을 수 있다. 판이 유연해 곡면에도 인쇄된다 — 병·컵·키보드 키캡의 글자도 스크린 인쇄다.",
          },
        ],
      },
      {
        _type: "block",
        _key: "ef2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "ef2s1",
            text: "설비가 단순해 소규모 생산에 최적이다. 티셔츠 인쇄소, 밴드 머천다이즈, 지역 포스터 — ‘소량 다품종 복제’의 대명사. 대량 생산은 오프셋·디지털이 담당하고, 스크린 인쇄는 개성과 소규모의 영역을 지킨다. 복제 기술의 민주화가 완성된 형태다.",
          },
        ],
      },
    ],
  },
  scienceConcepts: [],
  representativeArtwork: null,
  sideTracks: [
    {
      relationType: "relatedTo",
      relationNature: "conceptual",
      evidenceLevel: "documented",
      label: "막아서 찍는다 — 세 기법 중 가장 젊은 원리",
      teaser: "그리기도 파기도 아닌, 막기. 스텐실의 계보를 잇는 기술.",
      editorialPriority: 1,
      sources: [SOURCES.metLithographyEssay],
      target: CARDS.lithography,
    },
    {
      relationType: "relatedTo",
      relationNature: "conceptual",
      evidenceLevel: "documented",
      label: "워홀의 어긋난 색 — misregistration의 미학",
      teaser: "정합이 완벽하지 않아서 오히려 좋다 — 복제의 흔적을 예술로.",
      editorialPriority: 2,
      sources: [SOURCES.metGoyaCaprichos],
      target: CARDS.registration,
    },
  ],
  staticDiagrams: [],
  interactiveDiagram: null,
  sources: [
    SOURCES.commonsVelonisSilkscreen,
    SOURCES.commonsScreenprintProcess,
  ],
};
