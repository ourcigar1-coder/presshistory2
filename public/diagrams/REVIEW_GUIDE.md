# 이미지 검수 가이드 (§2.7, §7.4)

## 검수 대상

현재 LLM 생성 설명 이미지 3종이 `draft` 상태입니다. 프로덕션에서 표시되려면 검수 승인이 필요합니다.

1. `lithography-water-ink-surface` (석판화 표면 단면)
2. `registration-alignment-compare` (다색 정합 비교)
3. `gum-arabic-molecule` (아라비아고무 분자 — 생성 후)

## 검수 절차 (Sanity Studio에서)

1. `/studio` 접속 → **Sources & Rights** → **Image Asset Records**
2. 대상 레코드 열기 (예: "Image Record · LLM (ox-alpha)")
3. **LLM Provenance** 그룹에서 확인:
   - prompt가 실제 생성에 사용한 것과 일치하는가
   - referenceSources가 최소 1개 있는가
4. **이미지 내용 검수** (§2.7 편집 원칙):
   - 잘못된 도구/재료가 없는가
   - 공정 순서가 거꾸로가 아닌가
   - 물/잉크 위치가 실제 원리와 일치하는가
   - 텍스트 오류가 없는가
5. 승인 시:
   - `humanReviewed` → **true**
   - `accuracyStatus` → **reviewed** (또는 approved)
   - `dateVerified` → 오늘 날짜
6. 저장 → 몇 초 내 사이트에 반영 (Sanity Live)

## 검수 전 상태에서의 동작

- **Preview(draft mode)**: "검수 전 설명 이미지 · AI-generated" 배지와 함께 표시
- **Production**: 이미지 숨김 + 텍스트 fallback 표시 (§7.4 가드)

## 대체 이미지 생성

기존 SVG가 만족스럽지 않으면 `GENERATION_PROMPTS.md`의 프롬프트로
외부 도구(DALL·E 등)에서 재생성 후 `public/diagrams/`에 교체하고,
fixture의 `url`을 새 파일로 업데이트하세요.
