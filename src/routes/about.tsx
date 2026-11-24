import { createFileRoute } from "@tanstack/react-router";
import { Eye, HeartHandshake, Lightbulb, Target } from "lucide-react";
import { useState } from "react";

import heroTeam from "@/assets/hero-team.jpg";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatsStrip } from "@/components/site/StatsStrip";
import { TEAM } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "আমাদের সম্পর্কে — পিক্সেলবাড়ি" },
      {
        name: "description",
        content: "পিক্সেলবাড়ির গল্প, লক্ষ্য, মূল্যবোধ আর আমাদের দক্ষ টিম সম্পর্কে জানুন।",
      },
      { property: "og:title", content: "আমাদের সম্পর্কে — পিক্সেলবাড়ি" },
      {
        property: "og:description",
        content: "পিক্সেলবাড়ির গল্প, লক্ষ্য, মূল্যবোধ আর আমাদের দক্ষ টিম সম্পর্কে জানুন।",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const TABS = {
  mission: {
    label: "আমাদের লক্ষ্য",
    icon: Target,
    text: "বাংলাদেশের প্রতিটি ছোট-বড় ব্যবসাকে সাশ্রয়ী মূল্যে বিশ্বমানের ডিজিটাল সেবা দেওয়া, যাতে তারা অনলাইনে আত্মবিশ্বাসের সাথে বড় হতে পারে।",
  },
  vision: {
    label: "আমাদের স্বপ্ন",
    icon: Eye,
    text: "২০৩০ সালের মধ্যে দক্ষিণ এশিয়ার সবচেয়ে বিশ্বস্ত ক্রিয়েটিভ ডিজিটাল এজেন্সি হয়ে ওঠা — যেখানে বাংলাদেশি মেধা বিশ্বকে পথ দেখাবে।",
  },
  values: {
    label: "আমাদের মূল্যবোধ",
    icon: HeartHandshake,
    text: "সততা, স্বচ্ছতা আর সময়মতো ডেলিভারি। আমরা ক্লায়েন্টকে শুধু গ্রাহক নয়, দীর্ঘমেয়াদি পার্টনার মনে করি।",
  },
} as const;

type TabKey = keyof typeof TABS;

function AboutPage() {
  // useState: switch between mission / vision / values on button click
  const [tab, setTab] = useState<TabKey>("mission");
  const ActiveIcon = TABS[tab].icon;

  return (
    <>
      <PageHero
        eyebrow="আমাদের সম্পর্কে"
        title="প্রযুক্তি আর সৃজনশীলতার এক ঠিকানা"
        description="২০১৯ সালে ধানমন্ডির একটি ছোট রুমে তিনজন বন্ধুর হাত ধরে পিক্সেলবাড়ির যাত্রা শুরু। আজ আমরা ২৪ জনের একটি পরিবার।"
      />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <img
            src={heroTeam}
            alt="পিক্সেলবাড়ির অফিসে টিম মিটিং"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 right-6 flex items-center gap-3 rounded-2xl bg-lime p-4 text-lime-foreground shadow-lift">
            <Lightbulb className="size-8" />
            <div>
              <p className="font-display text-2xl font-bold">২০১৯</p>
              <p className="text-sm">যাত্রা শুরু</p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="আমাদের গল্প"
            title="আমরা বিশ্বাস করি ভালো ডিজাইন ব্যবসা বদলে দেয়"
            description="আমাদের ডিজাইনার, ডেভেলপার আর মার্কেটাররা একসাথে কাজ করে এমন সমাধান তৈরি করে যা দেখতে সুন্দর এবং কাজে কার্যকর।"
          />

          <div className="mt-8 flex flex-wrap gap-2" role="tablist">
            {(Object.keys(TABS) as TabKey[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  tab === key
                    ? "bg-ink text-ink-foreground"
                    : "border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {TABS[key].label}
              </button>
            ))}
          </div>
          <div key={tab} className="animate-rise mt-6 flex gap-4 rounded-3xl border bg-card p-6">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
              <ActiveIcon className="size-6" />
            </span>
            <p className="text-lg leading-relaxed">{TABS[tab].text}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <StatsStrip />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="আমাদের টিম"
          title="যাদের হাতে আপনার প্রজেক্ট"
          description="অভিজ্ঞ আর উদ্যমী একদল মানুষ, যারা প্রতিটি প্রজেক্টকে নিজের মনে করে।"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <article
              key={member.name}
              className="group rounded-3xl border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div
                className={`mx-auto grid size-24 place-items-center rounded-full font-display text-2xl font-bold transition-transform group-hover:scale-105 ${
                  i % 2 === 0 ? "bg-lime text-lime-foreground" : "bg-coral text-coral-foreground"
                }`}
              >
                {member.initials}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection title="আমাদের টিমের সাথে কাজ করতে চান?" />
    </>
  );
}
