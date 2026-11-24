import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Play, Quote, Star } from "lucide-react";
import { useState } from "react";

import heroTeam from "@/assets/hero-team.jpg";
import { CTASection } from "@/components/site/CTASection";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { StatsStrip } from "@/components/site/StatsStrip";
import { Button } from "@/components/ui/button";
import { PROJECTS, SERVICES, TESTIMONIALS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "পিক্সেলবাড়ি — আপনার ব্যবসার ডিজিটাল পার্টনার" },
      {
        name: "description",
        content: "ওয়েবসাইট, মোবাইল অ্যাপ, ব্র্যান্ডিং ও ডিজিটাল মার্কেটিং — এক জায়গায় সব ডিজিটাল সমাধান।",
      },
      { property: "og:title", content: "পিক্সেলবাড়ি — আপনার ব্যবসার ডিজিটাল পার্টনার" },
      {
        property: "og:description",
        content: "ওয়েবসাইট, মোবাইল অ্যাপ, ব্র্যান্ডিং ও ডিজিটাল মার্কেটিং — এক জায়গায় সব ডিজিটাল সমাধান।",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const CLIENTS = ["তাঁতঘর", "খাইদাই", "দেশি মার্ট", "সবুজ অর্গানিক", "আকাশ বিল্ডার্স", "চা-কফি ক্যাফে"];

function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="আমাদের সার্ভিস"
            title="আপনার ব্যবসার জন্য যা যা দরকার"
            description="পরিকল্পনা থেকে ডিজাইন, তৈরি থেকে প্রচার — পুরো যাত্রায় আমরা আপনার সাথে।"
          />
          <Button asChild variant="outline" size="pill">
            <Link to="/services">
              সব সার্ভিস <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((service, i) => (
            <Link key={service.title} to="/services" className="block">
              <ServiceCard service={service} index={i} />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink-gradient py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            light
            eyebrow="সংখ্যায় আমরা"
            title="৭ বছরে ১৫০+ ব্যবসার ডিজিটাল যাত্রা"
          />
          <div className="mt-12">
            <StatsStrip light />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="সাম্প্রতিক কাজ"
            title="যে কাজগুলো নিয়ে আমরা গর্বিত"
          />
          <Button asChild variant="outline" size="pill">
            <Link to="/gallery">
              পুরো গ্যালারি <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROJECTS.slice(0, 3).map((project) => (
            <Link key={project.title} to="/gallery" className="block">
              <ProjectCard project={project} tall />
            </Link>
          ))}
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0 text-foreground opacity-50" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:pt-20">
        <div>
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-sm">
            <span className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-3.5 fill-coral text-coral" />
              ))}
            </span>
            ১৫০+ সন্তুষ্ট ক্লায়েন্টের আস্থা
          </span>
          <h1 className="animate-rise mt-6 text-5xl font-extrabold sm:text-6xl lg:text-7xl">
            আইডিয়া থেকে{" "}
            <span className="relative inline-block">
              <span className="relative z-10">অনলাইন</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-4 rounded-full bg-lime sm:h-5" />
            </span>{" "}
            সাফল্য
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            আমরা ওয়েবসাইট, মোবাইল অ্যাপ আর ডিজিটাল মার্কেটিং দিয়ে বাংলাদেশের ব্যবসাগুলোকে অনলাইনে
            বড় করে তুলি।
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                প্রজেক্ট শুরু করুন <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/gallery">
                <Play /> আমাদের কাজ দেখুন
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={heroTeam}
              alt="পিক্সেলবাড়ির টিম একসাথে ওয়েবসাইট ডিজাইন নিয়ে কাজ করছে"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="animate-float absolute -bottom-6 -left-4 rounded-2xl bg-ink p-4 text-ink-foreground shadow-lift sm:-left-8">
            <p className="font-display text-3xl font-bold text-lime">২x</p>
            <p className="text-sm text-ink-muted">গড় বিক্রি বৃদ্ধি</p>
          </div>
          <div className="absolute -right-3 -top-4 rounded-full bg-coral px-4 py-2 text-sm font-semibold text-coral-foreground shadow-soft">
            ৭+ বছর অভিজ্ঞতা
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientMarquee() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <div className="overflow-hidden border-y bg-card py-5">
      <div className="animate-marquee flex w-max gap-12">
        {items.map((client, i) => (
          <span
            key={`${client}-${i}`}
            className="flex items-center gap-12 font-display text-xl font-semibold text-muted-foreground"
          >
            {client}
            <span className="size-2 rounded-full bg-lime" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  // useState: button clicks move between testimonials
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[active] ?? TESTIMONIALS[0]!;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <SectionHeading eyebrow="ক্লায়েন্টদের কথা" title="তারা যা বলছেন" />
        <figure key={active} className="animate-rise mt-12">
          <Quote className="mx-auto size-10 text-coral" />
          <blockquote className="mt-6 font-display text-2xl font-medium leading-relaxed sm:text-3xl">
            “{current.quote}”
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-semibold">{current.name}</p>
            <p className="text-sm text-muted-foreground">{current.role}</p>
          </figcaption>
        </figure>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" className="size-11 rounded-full" onClick={prev} aria-label="আগের মতামত">
            <ArrowLeft />
          </Button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${t.name}-এর মতামত দেখুন`}
                className={`h-2.5 rounded-full transition-all ${
                  i === active ? "w-8 bg-primary" : "w-2.5 bg-primary/25"
                }`}
              />
            ))}
          </div>
          <Button variant="ink" size="icon" className="size-11 rounded-full" onClick={next} aria-label="পরের মতামত">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
