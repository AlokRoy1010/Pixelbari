import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { NAV_LINKS, SERVICES, SITE } from "@/lib/site-data";

import { Logo } from "./Logo";

const SOCIALS = [
  { icon: Facebook, label: "ফেসবুক" },
  { icon: Instagram, label: "ইনস্টাগ্রাম" },
  { icon: Linkedin, label: "লিংকডইন" },
  { icon: Youtube, label: "ইউটিউব" },
];

export function Footer() {
  return (
    <footer className="bg-ink-gradient text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-5">
          <Logo light />
          <p className="text-sm leading-relaxed text-ink-muted">
            আইডিয়া থেকে অনলাইন সাফল্য — ছোট-বড় সব ব্যবসার জন্য আমরা ডিজিটাল সমাধান তৈরি করি।
          </p>
          <div className="flex gap-2">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-ink-foreground/15 transition-colors hover:bg-lime hover:text-lime-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">পেজসমূহ</h3>
          <ul className="space-y-2.5 text-sm text-ink-muted">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-lime">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">সার্ভিস</h3>
          <ul className="space-y-2.5 text-sm text-ink-muted">
            {SERVICES.slice(0, 5).map((service) => (
              <li key={service.title}>
                <Link to="/services" className="transition-colors hover:text-lime">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">যোগাযোগ</h3>
          <ul className="space-y-3.5 text-sm text-ink-muted">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-lime" />
              {SITE.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-lime" />
              {SITE.phone}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-lime" />
              {SITE.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-sm text-ink-muted lg:px-8">
          © ২০২৬ {SITE.name}। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
}
