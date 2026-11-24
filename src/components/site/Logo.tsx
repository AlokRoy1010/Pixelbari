import { Link } from "@tanstack/react-router";

import { SITE } from "@/lib/site-data";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label={`${SITE.name} হোম`}>
      <span className="grid size-10 grid-cols-2 gap-1 rounded-xl bg-ink p-2 transition-transform group-hover:rotate-6">
        <span className="rounded-sm bg-lime" />
        <span className="rounded-sm bg-ink-foreground/80" />
        <span className="rounded-sm bg-coral" />
        <span className="rounded-sm bg-lime" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-xl font-bold ${light ? "text-ink-foreground" : "text-foreground"}`}
        >
          {SITE.name}
        </span>
        <span className={`text-xs ${light ? "text-ink-muted" : "text-muted-foreground"}`}>
          {SITE.tagline}
        </span>
      </span>
    </Link>
  );
}
