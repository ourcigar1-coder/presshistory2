# LLM 원리 이미지 생성 프롬프트 (§2.7)

아래 프롬프트를 DALL·E 3, Midjourney, Stable Diffusion 등 이미지 생성 도구에 붙여넣어
원리 도해를 생성하세요. 생성 결과는 `public/diagrams/`에 아래 파일명으로 저장하면
코드가 자동으로 인식합니다(기존 SVG보다 우선하지 않음 — fixture의 `url`을 교체해야 반영).

생성 후 각 이미지는 Sanity Studio의 imageAssetRecord에서 검수(humanReviewed=true,
accuracyStatus=reviewed/approved)를 거쳐야 프로덕션에 표시됩니다.

---

## 1. lithography-water-ink-surface (석판화 표면 단면)

**파일명:** `lithography-water-ink-surface.png`

```
Educational cross-section diagram, clean flat illustration style, cream paper background (#faf7f2).
A horizontal limestone slab shown in side view. On the LEFT half of the slab surface, a dark
greasy crayon drawing line; greasy printing ink roller above deposits black ink that sticks ONLY
to the drawn line. On the RIGHT half, the blank stone surface is covered by a thin blue water
film with small water droplets; the oily ink slides off this wet area, shown by an arrow deflecting
away. Minimal Korean labels only: "기름(잉크)", "물", "돌". Soft muted colors: warm gray stone,
black ink, sky-blue water. No photorealism, no 3D, no shadows — simple vector-like educational
diagram, generous whitespace, single mechanism only.
```

**검수 체크:** 그린 선에만 잉크가 붙는가? 빈 면에 물막이 있는가? 화살표가 잉크 거부를 보여주는가?

---

## 2. registration-alignment-compare (다색 정합 비교)

**파일명:** `registration-alignment-compare.png`

```
Educational comparison diagram, clean flat illustration style, cream paper background.
Three side-by-side panels of the SAME simple flower motif printed with 4 separated color layers
(cyan, magenta, yellow, black outlines):
Panel 1 "정합": all four color layers perfectly aligned, crisp flower.
Panel 2 "살짝 어긋남": color layers slightly offset, visible color fringes at edges.
Panel 3 "크게 어긋남": layers badly misaligned, ghosting and doubled outlines.
Each panel has a small crosshair registration mark in its top corner. Minimal Korean labels under
each panel only. Flat vector-like style, generous whitespace, no photorealism, no 3D.
```

**검수 체크:** 세 패널의 어긋남 정도가 점진적인가? 십자 마크가 보이는가? 컬러인가?

---

## 3. gum-arabic-molecule (아라비아고무 사슬과 물)

**파일명:** `gum-arabic-molecule.png`

```
Educational molecular diagram, clean flat illustration style, cream paper background.
LEFT side: a long wavy polymer chain (gum arabic) drawn as a thick brown ribbon with many small
"-OH" attachment sites shown as small blue tabs along its length.
RIGHT side: many water molecules (small blue V-shapes, H2O) approaching and attaching to the blue
tabs, showing the chain swelling into a soft gel film covering a gray stone surface at the bottom.
Minimal Korean labels only: "아라비아고무 사슬", "물", "친수성 부위". Soft muted colors, flat
vector-like educational style, generous whitespace, no photorealism.
```

**검수 체크:** 사슬에 물 손잡이(-OH)가 많은가? 물이 붙어 젤 막을 이루는가? 돌 표면 위 막인가?

---

## 교체 절차

1. 생성 이미지를 `public/diagrams/`에 위 파일명으로 저장
2. `lib/fixtures/lithography.ts`의 `surfaceDiagram.url`, `registrationDiagram.url`을
   `/diagrams/<파일명>.png`로 교체
3. `public/diagrams/PROVENANCE.md`에 생성 기록 갱신 (provider/model/generatedAt)
4. Sanity Studio에서 imageAssetRecord 검수 승인
5. 배포
