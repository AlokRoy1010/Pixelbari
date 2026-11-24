type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-gradient text-ink-foreground">
      <div className="dot-grid pointer-events-none absolute inset-0 text-ink-foreground opacity-40" />
      <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-lime/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <span className="animate-rise inline-flex items-center gap-2 rounded-full bg-ink-foreground/10 px-3 py-1 text-sm text-lime">
          <span className="size-1.5 rounded-full bg-coral" />
          {eyebrow}
        </span>
        <h1 className="animate-rise mt-5 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="animate-rise mt-5 max-w-2xl text-lg text-ink-muted">{description}</p>
      </div>
    </section>
  );
}
