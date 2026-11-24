import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { PROJECT_CATEGORIES, PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "গ্যালারি — পিক্সেলবাড়ির কাজ" },
      {
        name: "description",
        content: "ওয়েবসাইট, অ্যাপ, ব্র্যান্ডিং ও মার্কেটিং — পিক্সেলবাড়ির সাম্প্রতিক প্রজেক্টগুলো দেখুন।",
      },
      { property: "og:title", content: "গ্যালারি — পিক্সেলবাড়ির কাজ" },
      {
        property: "og:description",
        content: "ওয়েবসাইট, অ্যাপ, ব্র্যান্ডিং ও মার্কেটিং — পিক্সেলবাড়ির সাম্প্রতিক প্রজেক্টগুলো দেখুন।",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  // useState: selected filter + open image in lightbox
  const [filter, setFilter] = useState<(typeof PROJECT_CATEGORIES)[number]>("সব");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = filter === "সব" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const openProject = openIndex === null ? null : visible[openIndex];

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % visible.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? i : (i - 1 + visible.length) % visible.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, visible.length]);

  return (
    <>
      <PageHero
        eyebrow="গ্যালারি"
        title="আমাদের কাজের ঝলক"
        description="প্রতিটি প্রজেক্টের পেছনে আছে একটি গল্প আর একটি সফল ব্যবসা। ক্যাটাগরি বেছে নিয়ে দেখুন।"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="ক্যাটাগরি">
          {PROJECT_CATEGORIES.map((category) => {
            const count =
              category === "সব"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === category).length;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                onClick={() => setFilter(category)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  filter === category
                    ? "bg-ink text-ink-foreground shadow-soft"
                    : "border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
                <span
                  className={`rounded-full px-2 text-xs ${
                    filter === category ? "bg-lime text-lime-foreground" : "bg-secondary"
                  }`}
                >
                  {count.toLocaleString("bn-BD")}
                </span>
              </button>
            );
          })}
        </div>

        <div key={filter} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <div key={project.title} className="animate-rise" style={{ animationDelay: `${i * 70}ms` }}>
              <ProjectCard project={project} onOpen={() => setOpenIndex(i)} />
            </div>
          ))}
        </div>
      </section>

      {openProject && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={openProject.title}
          className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={openProject.image}
              alt={openProject.title}
              className="max-h-[75vh] w-full rounded-3xl object-contain"
            />
            <div className="mt-4 flex items-center justify-between gap-4 text-ink-foreground">
              <div>
                <p className="font-display text-2xl font-semibold">{openProject.title}</p>
                <p className="text-ink-muted">
                  {openProject.client} · {openProject.category}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setOpenIndex((openIndex - 1 + visible.length) % visible.length)}
                  className="grid size-11 place-items-center rounded-full bg-ink-foreground/10 hover:bg-ink-foreground/20"
                  aria-label="আগের ছবি"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setOpenIndex((openIndex + 1) % visible.length)}
                  className="grid size-11 place-items-center rounded-full bg-lime text-lime-foreground"
                  aria-label="পরের ছবি"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              className="absolute -top-3 -right-3 grid size-10 place-items-center rounded-full bg-background text-foreground shadow-lift"
              aria-label="বন্ধ করুন"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>
      )}

      <CTASection title="আপনার প্রজেক্টও থাকুক এই গ্যালারিতে" />
    </>
  );
}
