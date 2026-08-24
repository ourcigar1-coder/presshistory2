# LLM 생성 설명 이미지 Provenance (§2.7)

이 폴더의 SVG는 「판화의 원리」를 설명하기 위한 **AI-generated explanatory visual**이다.
실제 역사 자료·실물 사진처럼 제시하지 않는다.

## 공통 생성 기록

| 항목 | 값 |
|---|---|
| generationProvider | ox-alpha (opencode) |
| model | x-preview-f-free |
| generatedAt | 2026-08-24 |
| promptVersion | v1 |
| accuracyStatus | `draft` (편집자 검수 전) |
| humanReviewed | false |
| explanatoryOnly | true (항상) |

### Prompt v1

> "석판화의 물/잉크 선택적 부착(또는 다색 registration 정합)을 한눈에 이해시키는
> 단면 비교 다이어그램. 한 이미지에 하나의 메커니즘만. 이미지 안 텍스트는 최소화.
> 실제 도구 외형은 박물관 자료를 참고하되 역사 사진처럼 위장하지 않을 것."

## 개별 파일

### lithography-water-ink-surface.svg

- Purpose: 석판화 표면 단면 — 그린 자리(친유)는 잉크를 붙잡고, 빈 면(친수)은 물막으로 잉크를 밀어낸다.
- Reference sources:
  - Met, "Lithography in the Nineteenth Century" — https://www.metmuseum.org/toah/hd/lith/hd_lith.htm
  - Britannica, "Lithography" — https://www.britannica.com/technology/lithography
- Simplifications / notes: 분자 구조와 화학 반응은 생략. 물막/기름막을 두꺼운 층으로 과장해 그렸다. 롤러 형태는 교육적 단순화.

### registration-alignment-compare.svg

- Purpose: 같은 도형 3개의 색판을 정합/살짝 어긋남/크게 어긋남으로 겹쳐 본 비교. 레지스터 마크 위치 설명.
- Reference sources:
  - Met, collection record 333990 (4색 석판화, 3매 합판) — https://www.metmuseum.org/art/collection/search/333990
  - MoMA, work 188979 — https://www.moma.org/collection/works/188979
- Simplifications / notes: 실제 인쇄 색순서(CMY)와 다른 관습적 원색 사용. 어긋난 원의 겹침 색은 혼색 개념 단순화.

## 검수 절차 (§2.7 생성 이미지 편집 원칙)

검수자는 다음을 확인한다:

1. 잘못된 도구/재료가 없는가
2. 공정 순서가 거꾸로가 아닌가
3. 물/잉크 위치가 실제 원리와 일치하는가
4. 텍스트 오류가 없는가

확인 후 Sanity의 imageAssetRecord(originType=llmGenerated)에서
humanReviewed=true + accuracyStatus=reviewed/approved로 갱신하고,
동일 내용을 이 파일에도 기록한다.
