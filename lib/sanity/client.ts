import "server-only";

import { createClient } from "next-sanity";
import { defineLive } from "next-sanity/live";
import { apiVersion, dataset, hasSanityConfig, projectId } from "./env";

export const readToken = process.env.SANITY_API_READ_TOKEN;

function createClientIfConfigured() {
  if (!hasSanityConfig) return null;
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: "published",
    // Visual Editing stega (draft mode에서만 활성화된다)
    stega: { studioUrl: "/studio" },
  });
}

const liveClient = createClientIfConfigured();

let live: ReturnType<typeof defineLive> | null = null;

if (liveClient) {
  live = defineLive({
    client: liveClient,
    serverToken: readToken || undefined,
    browserToken: readToken || undefined,
  });
}

export function getSanityFetch() {
  if (!live) {
    throw new Error("sanityFetch called without Sanity configuration");
  }
  return live.sanityFetch;
}

/** root layout에서 1회 구성 (§3.4) */
export function getSanityLive() {
  return live?.SanityLive ?? null;
}

/** Draft mode 활성화 등 토큰이 필요한 클라이언트를 지연 생성한다 */
export function createReadClient() {
  if (!hasSanityConfig) {
    throw new Error("client requested without Sanity configuration");
  }
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: readToken,
  });
}
