/**
 * §3 GROQ Query Layer · FINAL
 *
 * 원칙:
 * - Production과 Draft는 동일 GROQ string/projection을 공유하고 perspective만 달라진다 (§3.4)
 * - 관계가 늘어나도 페이지 Query가 거대한 그래프 조회로 변하지 않는다: 데이터 깊이 기본 2단계 제한
 * - Related 카드에서 target 전체 document dereference 금지 (§3.4)
 */

/** §3.2 CARD_PROJECTION */
export const CARD_PROJECTION = /* groq */ `
  {
    _id,
    _type,
    "title": coalesce(title, question, term),
    "slug": slug.current,
    shortDescription,
    domain,
    "thumbnail": coalesce(
      heroImage.asset->url,
      staticDiagrams[0].asset->url
    )
  }
`;

/** §3.2 SOURCE_PROJECTION */
export const SOURCE_PROJECTION = /* groq */ `
  {
    title,
    sourceType,
    institution,
    author,
    year,
    url,
    accessedAt,
    notes
  }
`;

/** §3.2 IMAGE_RIGHTS_PROJECTION + LLM provenance (§2.7) */
export const IMAGE_RIGHTS_PROJECTION = /* groq */ `
  {
    originType,
    institution,
    sourcePage,
    sourceImage,
    iiifManifest,
    license,
    publicDomain,
    creditLine,
    accessionNumber,
    dateVerified,
    generationProvider,
    model,
    generatedAt,
    humanReviewed,
    accuracyStatus,
    explanatoryOnly,
    notes,
    "referenceSources": referenceSources[]{ title, url }
  }
`;

/** §3.2 RELATION_TARGET_PROJECTION */
export const RELATION_TARGET_PROJECTION = /* groq */ `
  {
    relationType,
    relationNature,
    evidenceLevel,
    label,
    teaser,
    editorialPriority,
    "sources": sources[]${SOURCE_PROJECTION},
    "target": target->${CARD_PROJECTION}
  }
`;

const RICH_SECTION_PROJECTION = /* groq */ `
  { heading, body }
`;

const STATIC_DIAGRAM_PROJECTION = /* groq */ `
  {
    title,
    alt,
    caption,
    longDescription,
    "url": asset->url,
    "visualRecord": visualRecord->${IMAGE_RIGHTS_PROJECTION}
  }
`;

// ---------------------------------------------------------------- page queries

/** §3.3 ENTRY_PAGE_QUERY */
export const ENTRY_PAGE_QUERY = /* groq */ `
*[_type == "entry" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  introQuestion,
  simpleExplanation,
  shortDescription,
  domain,
  "heroImage": heroImage{ "url": asset->url, alt },
  optionalDiagram ${STATIC_DIAGRAM_PROJECTION},
  "connections": connections[]->${RELATION_TARGET_PROJECTION} | order(editorialPriority asc),
  "recommendedPath": recommendedPath[]{
    reason,
    "target": target->${CARD_PROJECTION}
  },
  "relatedEntries": relatedEntries[]->${CARD_PROJECTION},
  "sources": sources[]${SOURCE_PROJECTION}
}
`;

/** §3.3 TECHNIQUE_PAGE_QUERY */
export const TECHNIQUE_PAGE_QUERY = /* groq */ `
*[_type == "technique" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  family,
  tenSecondExplanation,
  shortDescription,
  domain,
  "process": process[]{ title, description, image ${STATIC_DIAGRAM_PROJECTION} },
  whyItAppeared ${RICH_SECTION_PROJECTION},
  historicalContext ${RICH_SECTION_PROJECTION},
  "scienceConcepts": scienceConcepts[]->{
    _id, _type, title, "slug": slug.current, shortDescription, domain,
    oneSentence,
    "thumbnail": coalesce(heroImage.asset->url, staticDiagrams[0].asset->url)
  },
  "representativeArtwork": representativeArtwork->${CARD_PROJECTION},
  "sideTracks": sideTracks[]->${RELATION_TARGET_PROJECTION} | order(editorialPriority asc),
  "staticDiagrams": staticDiagrams[] ${STATIC_DIAGRAM_PROJECTION},
  interactiveDiagram {
    interactiveKey,
    title,
    intro,
    fallbackExplanation,
    fallbackDiagram ${STATIC_DIAGRAM_PROJECTION}
  },
  "sources": sources[]${SOURCE_PROJECTION}
}
`;

/** §3.3 ARTWORK_PAGE_QUERY */
export const ARTWORK_PAGE_QUERY = /* groq */ `
*[_type == "artwork" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  year,
  thirtySecondExplanation,
  shortDescription,
  domain,
  "artist": artist->{ name, "slug": slug.current },
  "techniqueCard": technique->${CARD_PROJECTION},
  "heroImage": heroImage{
    "url": asset->url,
    alt,
    "visualRecord": visualRecord->${IMAGE_RIGHTS_PROJECTION}
  },
  "materials": materials[]->{ name, simpleDescription, "slug": slug.current },
  "scienceConcepts": scienceConcepts[]->${CARD_PROJECTION},
  howItWasMade ${RICH_SECTION_PROJECTION},
  historicalContext ${RICH_SECTION_PROJECTION},
  whyItMatters ${RICH_SECTION_PROJECTION},
  "unexpectedConnections": unexpectedConnections[]->${RELATION_TARGET_PROJECTION} | order(editorialPriority asc),
  "sources": sources[]${SOURCE_PROJECTION}
}
`;

/** §3.3 STORY_PAGE_QUERY */
export const STORY_PAGE_QUERY = /* groq */ `
*[_type == "story" && slug.current == $slug][0]{
  _id,
  _type,
  question,
  shortAnswer,
  storyBody,
  shortDescription,
  domain,
  evidence ${RICH_SECTION_PROJECTION},
  whatChanged ${RICH_SECTION_PROJECTION},
  "connections": connections[]->${RELATION_TARGET_PROJECTION} | order(editorialPriority asc),
  "furtherReading": furtherReading[]${SOURCE_PROJECTION},
  "sources": sources[]${SOURCE_PROJECTION}
}
`;

/** §3.3 TERM_PAGE_QUERY */
export const TERM_PAGE_QUERY = /* groq */ `
*[_type == "term" && slug.current == $slug][0]{
  _id,
  _type,
  term,
  originalLanguage,
  pronunciation,
  literalMeaning,
  simpleDefinition,
  contextDefinition ${RICH_SECTION_PROJECTION},
  etymology ${RICH_SECTION_PROJECTION},
  shortDescription,
  domain,
  "relatedTerms": relatedTerms[]->{
    _id, _type, term, title, "slug": slug.current, simpleDefinition, shortDescription, domain
  },
  "sources": sources[]${SOURCE_PROJECTION}
}
`;

/** §3.3 SCIENCE_PAGE_QUERY */
export const SCIENCE_PAGE_QUERY = /* groq */ `
*[_type == "scienceConcept" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  oneSentence,
  standardExplanation,
  deepExplanation,
  shortDescription,
  domain,
  "relatedMaterials": relatedMaterials[]->{ name, "slug": slug.current, simpleDescription },
  "relatedTechniques": relatedTechniques[]->${CARD_PROJECTION},
  "staticDiagrams": staticDiagrams[] ${STATIC_DIAGRAM_PROJECTION},
  "sources": sources[]${SOURCE_PROJECTION}
}
`;

/** §3.3 BRIDGE_PAGE_QUERY */
export const BRIDGE_PAGE_QUERY = /* groq */ `
*[_type == "bridge" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  introQuestion,
  shortDescription,
  domain,
  "timeline": timeline[]{ periodLabel, title, description, markerType },
  commonProblem ${RICH_SECTION_PROJECTION},
  "comparisonTable": comparisonTable[]{ aspect, printing, patterning },
  "keyDifferences": keyDifferences[]{ difference, explanation },
  "relatedNodes": relatedNodes[]->${RELATION_TARGET_PROJECTION} | order(editorialPriority asc),
  closingQuestion,
  "sources": sources[]${SOURCE_PROJECTION}
}
`;

/** Listing Query - 홈/추천 경로 (§3.1) */
export const ENTRY_LISTING_QUERY = /* groq */ `
*[_type == "entry" && status == "published"] | order(publishedAt asc) ${CARD_PROJECTION}
`;

/** Search Projection - keyword v1 (§3.1, §3.4) */
export const SEARCH_QUERY = /* groq */ `
*[
  _type in ["entry", "technique", "artwork", "story", "bridge", "term", "scienceConcept"]
  && status == "published"
  && [title, question, term, shortDescription] match $query + "*"
] | score(title match $query + "*", question match $query + "*", term match $query + "*")
  | order(_score desc)
  ${CARD_PROJECTION}
`;
