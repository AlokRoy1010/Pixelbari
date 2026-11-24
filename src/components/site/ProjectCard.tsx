import { Expand } from "lucide-react";

import type { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
  onOpen?: () => void;
  tall?: boolean;
};

export function ProjectCard({ project, onOpen, tall = false }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block w-full overflow-hidden rounded-3xl bg-muted text-left"
      aria-label={`${project.title} বড় করে দেখুন`}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          tall ? "aspect-[4/5]" : "aspect-[4/3]"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
      <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-background/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100">
        <Expand className="size-4" />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-5 text-ink-foreground">
        <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-lime-foreground">
          {project.category}
        </span>
        <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-ink-muted">{project.client}</p>
      </div>
    </button>
  );
}
