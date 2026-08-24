import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { createReadClient, readToken } from "@/lib/sanity/client";
import { hasSanityConfig } from "@/lib/sanity/env";

/**
 * §3.4 Draft Mode + Visual Editing
 * Sanity 미구성 환경(build 시 등)에서는 503으로 응답한다.
 */
export async function GET(request: Request) {
  if (!hasSanityConfig || !readToken) {
    return new Response("Sanity draft mode is not configured", { status: 503 });
  }
  const handler = defineEnableDraftMode({
    client: createReadClient(),
  });
  return handler.GET(request);
}
