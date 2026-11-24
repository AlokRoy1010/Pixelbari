import { STATS } from "@/lib/site-data";

export function StatsStrip({ light = false }: { light?: boolean }) {
  return (
    <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className={`rounded-3xl p-6 ${light ? "bg-ink-foreground/5" : "border bg-card"}`}
        >
          <dt className={`text-sm ${light ? "text-ink-muted" : "text-muted-foreground"}`}>
            {stat.label}
          </dt>
          <dd
            className={`mt-2 font-display text-4xl font-bold sm:text-5xl ${
              light ? "text-lime" : "text-foreground"
            }`}
          >
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
