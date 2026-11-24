type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
          light ? "bg-ink-foreground/10 text-lime" : "bg-secondary text-primary"
        }`}
      >
        <span className="size-1.5 rounded-full bg-coral" />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-ink-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg ${light ? "text-ink-muted" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
