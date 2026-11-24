import { Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

import { SITE } from "@/lib/site-data";

/** useEffect: shows a welcome message once the page has loaded, then hides it. */
export function WelcomeMessage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = window.setTimeout(() => setVisible(true), 600);
    const hideTimer = window.setTimeout(() => setVisible(false), 7000);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      className="animate-in fade-in slide-in-from-bottom-4 fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-md items-start gap-3 rounded-2xl bg-ink p-4 text-ink-foreground shadow-lift sm:inset-x-auto sm:right-6 sm:bottom-6"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-lime text-lime-foreground">
        <Sparkles className="size-5" />
      </span>
      <div className="flex-1">
        <p className="font-display text-lg font-semibold">স্বাগতম {SITE.name}-তে! 👋</p>
        <p className="text-sm text-ink-muted">
          আপনার ব্যবসাকে অনলাইনে এগিয়ে নিতে আমরা প্রস্তুত। ঘুরে দেখুন আমাদের কাজ।
        </p>
      </div>
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="rounded-full p-1 text-ink-muted transition-colors hover:text-ink-foreground"
        aria-label="বার্তা বন্ধ করুন"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
