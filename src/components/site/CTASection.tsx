import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "আপনার পরবর্তী বড় আইডিয়া নিয়ে কথা বলি?",
  description = "৩০ মিনিটের ফ্রি পরামর্শে জানুন কীভাবে আপনার ব্যবসা অনলাইনে আরও এগোতে পারে।",
}: CTASectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-lime-gradient px-8 py-14 sm:px-14">
        <div className="dot-grid pointer-events-none absolute inset-0 text-ink opacity-30" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-lime-foreground sm:text-4xl">{title}</h2>
            <p className="mt-3 text-lg text-lime-foreground/75">{description}</p>
          </div>
          <Button asChild variant="ink" size="xl">
            <Link to="/contact">
              যোগাযোগ করুন <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
