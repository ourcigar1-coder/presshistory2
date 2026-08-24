import "server-only";

import { notFound } from "next/navigation";
import { hasSanityConfig } from "./env";
import { getSanityFetch } from "./client";
import {
  ARTWORK_PAGE_QUERY,
  BRIDGE_PAGE_QUERY,
  ENTRY_LISTING_QUERY,
  ENTRY_PAGE_QUERY,
  SCIENCE_PAGE_QUERY,
  SEARCH_QUERY,
  STORY_PAGE_QUERY,
  TERM_PAGE_QUERY,
  TECHNIQUE_PAGE_QUERY,
} from "./queries";
import { getFixture, listFixtures, SLICE_CARDS } from "@/lib/fixtures";
import type {
  ArtworkPageData,
  BridgePageData,
  EntryPageData,
  NodeCard,
  SciencePageData,
  StoryPageData,
  TermPageData,
  TechniquePageData,
} from "./types";

/**
 * §3.4 Fetch 규칙
 * - 모든 페이지는 sanityFetch 기반. Production/Draft는 같은 query 계약.
 * - 필수 page document가 없으면 notFound(). 선택 섹션 누락은 section omission.
 * - Sanity 미구성 시 typed fixture로 폴백(§3.6)해 UI 개발/QA가 막히지 않게 한다.
 */

async function sanityFetchOrNull<T>(
  query: string,
  params: Record<string, unknown>,
): Promise<T | null> {
  const sanityFetch = getSanityFetch();
  try {
    const { data } = await sanityFetch({ query, params });
    return (data ?? null) as T | null;
  } catch (error) {
    console.error("sanityFetch failed", { query: query.slice(0, 60), error });
    return null;
  }
}

function fixtureOrNotFound<T>(type: string, slug: string): T {
  const fixture = getFixture(type, slug);
  if (!fixture) notFound();
  return fixture as T;
}

export async function fetchEntryPage(slug: string): Promise<EntryPageData | null> {
  if (!hasSanityConfig) return fixtureOrNotFound<EntryPageData>("entry", slug);
  return (
    await sanityFetchOrNull<EntryPageData>(ENTRY_PAGE_QUERY, { slug })
  ) ?? fixtureOrNotFound<EntryPageData>("entry", slug);
}

export async function fetchTechniquePage(slug: string): Promise<TechniquePageData | null> {
  if (!hasSanityConfig) return fixtureOrNotFound<TechniquePageData>("technique", slug);
  return (
    (await sanityFetchOrNull<TechniquePageData>(TECHNIQUE_PAGE_QUERY, { slug })) ??
    fixtureOrNotFound<TechniquePageData>("technique", slug)
  );
}

export async function fetchArtworkPage(slug: string): Promise<ArtworkPageData | null> {
  if (!hasSanityConfig) return fixtureOrNotFound<ArtworkPageData>("artwork", slug);
  return (
    (await sanityFetchOrNull<ArtworkPageData>(ARTWORK_PAGE_QUERY, { slug })) ??
    fixtureOrNotFound<ArtworkPageData>("artwork", slug)
  );
}

export async function fetchStoryPage(slug: string): Promise<StoryPageData | null> {
  if (!hasSanityConfig) return fixtureOrNotFound<StoryPageData>("story", slug);
  return (
    (await sanityFetchOrNull<StoryPageData>(STORY_PAGE_QUERY, { slug })) ??
    fixtureOrNotFound<StoryPageData>("story", slug)
  );
}

export async function fetchTermPage(slug: string): Promise<TermPageData | null> {
  if (!hasSanityConfig) return fixtureOrNotFound<TermPageData>("term", slug);
  return (
    (await sanityFetchOrNull<TermPageData>(TERM_PAGE_QUERY, { slug })) ??
    fixtureOrNotFound<TermPageData>("term", slug)
  );
}

export async function fetchSciencePage(slug: string): Promise<SciencePageData | null> {
  if (!hasSanityConfig) return fixtureOrNotFound<SciencePageData>("scienceConcept", slug);
  return (
    (await sanityFetchOrNull<SciencePageData>(SCIENCE_PAGE_QUERY, { slug })) ??
    fixtureOrNotFound<SciencePageData>("scienceConcept", slug)
  );
}

export async function fetchBridgePage(slug: string): Promise<BridgePageData | null> {
  if (!hasSanityConfig) return fixtureOrNotFound<BridgePageData>("bridge", slug);
  return (
    (await sanityFetchOrNull<BridgePageData>(BRIDGE_PAGE_QUERY, { slug })) ??
    fixtureOrNotFound<BridgePageData>("bridge", slug)
  );
}

/** §3.1 Listing Query — 홈 추천 경로 */
export async function fetchEntryListing(): Promise<NodeCard[]> {
  if (!hasSanityConfig) return SLICE_CARDS.filter((c) => c._type === "entry");
  const cards = await sanityFetchOrNull<NodeCard[]>(ENTRY_LISTING_QUERY, {});
  if (cards && cards.length > 0) return cards;
  // CMS가 비어 있으면 fixture로 안내
  return SLICE_CARDS.filter((c) => c._type === "entry");
}

/** §3.1 Search Projection — keyword v1 */
export async function fetchSearchResults(query: string): Promise<NodeCard[]> {
  const q = query.trim();
  if (q.length < 2) return [];
  if (!hasSanityConfig) {
    const lower = q.toLowerCase();
    return listFixtures()
      .map((f): NodeCard => ({
        _id: f._id,
        _type: f._type,
        title:
          ("title" in f && f.title) ||
          ("question" in f && f.question) ||
          ("term" in f && f.term) ||
          "(무제)",
        slug: (f as { slug?: string }).slug ?? "",
        shortDescription: f.shortDescription,
        domain: f.domain,
        thumbnail: null,
      }))
      .filter(
        (c) =>
          (c.title?.toLowerCase().includes(lower)) ||
          (c.shortDescription?.toLowerCase().includes(lower)),
      );
  }
  const results = await sanityFetchOrNull<NodeCard[]>(SEARCH_QUERY, { query: q });
  return results ?? [];
}
