"use client";

import Link from "next/link";
import { trackEntryPathStart } from "@/lib/analytics/exploration";

/** §5.1 entry_path_start — 홈/Entry에서 탐험 시작 CTA */
export function EntryStartLink({
  entryOrigin,
  href,
  className,
  children,
}: {
  entryOrigin: string;
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEntryPathStart(entryOrigin, "recommended")}
    >
      {children}
    </Link>
  );
}
