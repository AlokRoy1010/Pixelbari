import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/site-data";

import { Logo } from "./Logo";

export function Header() {
  // useState: mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled || menuOpen
          ? "border-b bg-background/90 shadow-soft backdrop-blur-md"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="প্রধান মেনু">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "bg-secondary !text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="ink" size="pill">
            <Link to="/contact">ফ্রি পরামর্শ নিন</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-11 place-items-center rounded-full border bg-card text-foreground lg:hidden"
          aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="animate-in fade-in slide-in-from-top-2 border-t bg-background px-5 pb-6 pt-3 lg:hidden"
          aria-label="মোবাইল মেনু"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: true }}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-medium text-muted-foreground"
                  activeProps={{ className: "bg-secondary !text-foreground" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild variant="hero" size="xl" className="mt-4 w-full">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              ফ্রি পরামর্শ নিন
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
