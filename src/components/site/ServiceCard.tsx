import { ArrowUpRight, Check } from "lucide-react";

import type { Service } from "@/lib/site-data";

type ServiceCardProps = {
  service: Service;
  index: number;
  detailed?: boolean;
};

export function ServiceCard({ service, index, detailed = false }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <article className="group relative flex h-full flex-col rounded-3xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
      <div className="flex items-start justify-between">
        <span className="grid size-14 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-lime group-hover:text-lime-foreground">
          <Icon className="size-6" />
        </span>
        <span className="font-display text-sm text-muted-foreground">
          ০{["১", "২", "৩", "৪", "৫", "৬"][index] ?? ""}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 text-muted-foreground">{service.description}</p>

      {detailed && (
        <ul className="mt-5 space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <Check className="size-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex items-center justify-between pt-6">
        {detailed ? (
          <p className="text-sm text-muted-foreground">
            শুরু <span className="font-display text-xl font-bold text-foreground">৳{service.price}</span>
          </p>
        ) : (
          <span className="text-sm font-medium text-primary">বিস্তারিত দেখুন</span>
        )}
        <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
    </article>
  );
}
