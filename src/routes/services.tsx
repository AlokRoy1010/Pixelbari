import { createFileRoute } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "সার্ভিসসমূহ — পিক্সেলবাড়ি" },
      {
        name: "description",
        content: "ওয়েব ডেভেলপমেন্ট, মোবাইল অ্যাপ, ডিজিটাল মার্কেটিং, এসইও, ব্র্যান্ডিং ও ই-কমার্স সার্ভিস।",
      },
      { property: "og:title", content: "সার্ভিসসমূহ — পিক্সেলবাড়ি" },
      {
        property: "og:description",
        content: "ওয়েব ডেভেলপমেন্ট, মোবাইল অ্যাপ, ডিজিটাল মার্কেটিং, এসইও, ব্র্যান্ডিং ও ই-কমার্স সার্ভিস।",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const STEPS = [
  { title: "আলোচনা", text: "আপনার ব্যবসা, লক্ষ্য আর চাহিদা বুঝে নিই।" },
  { title: "পরিকল্পনা", text: "সময়, বাজেট আর কাজের পরিষ্কার রোডম্যাপ তৈরি করি।" },
  { title: "ডিজাইন ও তৈরি", text: "নিয়মিত আপডেটসহ ধাপে ধাপে কাজ এগিয়ে নিই।" },
  { title: "লঞ্চ ও সাপোর্ট", text: "প্রকাশের পরও ৩ মাস ফ্রি সাপোর্ট দিই।" },
];

const FAQS = [
  {
    q: "একটি ওয়েবসাইট তৈরি করতে কত সময় লাগে?",
    a: "সাধারণ ব্যবসায়িক ওয়েবসাইট ২–৩ সপ্তাহে এবং ই-কমার্স সাইট ৪–৬ সপ্তাহে তৈরি হয়ে যায়।",
  },
  {
    q: "পেমেন্ট কীভাবে করতে হয়?",
    a: "কাজ শুরুর আগে ৫০% এবং ডেলিভারির সময় বাকি ৫০%। বিকাশ, নগদ বা ব্যাংক ট্রান্সফারে পরিশোধ করা যায়।",
  },
  {
    q: "কাজ শেষে কি পরিবর্তন করা যাবে?",
    a: "অবশ্যই! প্রতিটি প্রজেক্টে ২ বার ফ্রি রিভিশন থাকে, আর লঞ্চের পর ৩ মাস ফ্রি সাপোর্ট পাবেন।",
  },
  {
    q: "আমি কি শুধু মার্কেটিং সার্ভিস নিতে পারি?",
    a: "হ্যাঁ, প্রতিটি সার্ভিস আলাদাভাবে নেওয়া যায়। মাসিক প্যাকেজ যেকোনো সময় বাতিল করতে পারবেন।",
  },
];

function ServicesPage() {
  // useState: which FAQ item is open
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="আমাদের সার্ভিস"
        title="এক জায়গায় সব ডিজিটাল সমাধান"
        description="আপনার ব্যবসার আকার যাই হোক, আমাদের কাছে আছে উপযুক্ত সার্ভিস আর সাশ্রয়ী প্যাকেজ।"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} detailed />
          ))}
        </div>
      </section>

      <section className="bg-ink-gradient py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading light eyebrow="কাজের ধাপ" title="কীভাবে আমরা কাজ করি" />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <li key={step.title} className="relative rounded-3xl bg-ink-foreground/5 p-6">
                <span className="font-display text-5xl font-bold text-lime-gradient">
                  ০{["১", "২", "৩", "৪"][i]}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
        <SectionHeading eyebrow="প্রশ্নোত্তর" title="সাধারণ জিজ্ঞাসা" />
        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={faq.q} className="overflow-hidden rounded-2xl border bg-card">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-lg font-semibold">{faq.q}</span>
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen ? "bg-lime text-lime-foreground" : "bg-secondary text-primary"
                    }`}
                  >
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="animate-in fade-in px-5 pb-5 text-muted-foreground">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <CTASection title="কোন সার্ভিসটি আপনার জন্য ঠিক, বুঝতে পারছেন না?" />
    </>
  );
}
