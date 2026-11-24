import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";

import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { validateContact, type ContactErrors, type ContactForm } from "@/lib/contact-validation";
import { SERVICES, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "যোগাযোগ — পিক্সেলবাড়ি" },
      {
        name: "description",
        content: "নতুন প্রজেক্ট বা ফ্রি পরামর্শের জন্য পিক্সেলবাড়ির সাথে যোগাযোগ করুন।",
      },
      { property: "og:title", content: "যোগাযোগ — পিক্সেলবাড়ি" },
      {
        property: "og:description",
        content: "নতুন প্রজেক্ট বা ফ্রি পরামর্শের জন্য পিক্সেলবাড়ির সাথে যোগাযোগ করুন।",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

type FormState = ContactForm;

const EMPTY_FORM: FormState = { name: "", email: "", phone: "", service: "", message: "" };

const CONTACT_INFO = [
  { icon: Phone, label: "ফোন", value: SITE.phone },
  { icon: Mail, label: "ইমেইল", value: SITE.email },
  { icon: MapPin, label: "ঠিকানা", value: SITE.address },
  { icon: Clock, label: "অফিস সময়", value: SITE.hours },
];

function ContactPage() {
  // useState: form fields, validation errors and submitted state (frontend only)
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validateContact(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmittedName(form.name.trim());
    setForm(EMPTY_FORM);
  };

  return (
    <>
      <PageHero
        eyebrow="যোগাযোগ"
        title="চলুন একসাথে কিছু দারুণ বানাই"
        description="নিচের ফর্মটি পূরণ করুন, আমাদের টিম ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবে।"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <aside className="space-y-4">
          {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 rounded-3xl border bg-card p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="font-medium">{value}</p>
              </div>
            </div>
          ))}
          <div className="rounded-3xl bg-ink-gradient p-6 text-ink-foreground">
            <p className="font-display text-2xl font-semibold">ফ্রি পরামর্শ 🎁</p>
            <p className="mt-2 text-ink-muted">
              প্রথম ৩০ মিনিটের আলোচনা সম্পূর্ণ ফ্রি। কোনো বাধ্যবাধকতা নেই।
            </p>
          </div>
        </aside>

        <div className="rounded-[2rem] border bg-card p-6 shadow-soft sm:p-10">
          {submittedName ? (
            <div className="animate-rise flex flex-col items-center py-12 text-center" role="status">
              <span className="grid size-20 place-items-center rounded-full bg-lime text-lime-foreground">
                <CheckCircle2 className="size-10" />
              </span>
              <h2 className="mt-6 text-3xl font-bold">ধন্যবাদ, {submittedName}!</h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                আপনার বার্তা আমরা পেয়েছি। খুব শিগগিরই আমাদের টিম আপনার সাথে যোগাযোগ করবে।
              </p>
              <Button variant="outline" size="pill" className="mt-8" onClick={() => setSubmittedName(null)}>
                আরেকটি বার্তা পাঠান
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">আমাদের বার্তা পাঠান</h2>
                <p className="mt-1 text-muted-foreground">* চিহ্নিত ঘরগুলো অবশ্যই পূরণ করুন</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="আপনার নাম *" htmlFor="name" error={errors.name}>
                  <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="যেমন: রহিম উদ্দিন" className="h-12 rounded-xl bg-background" />
                </Field>
                <Field label="ইমেইল *" htmlFor="email" error={errors.email}>
                  <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="h-12 rounded-xl bg-background" />
                </Field>
                <Field label="ফোন নম্বর" htmlFor="phone">
                  <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="০১৭XXXXXXXX" className="h-12 rounded-xl bg-background" />
                </Field>
                <Field label="কোন সার্ভিস দরকার?" htmlFor="service">
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-input bg-background px-3 text-base focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <option value="">বেছে নিন</option>
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="আপনার বার্তা *" htmlFor="message" error={errors.message}>
                <Textarea id="message" name="message" value={form.message} onChange={handleChange} rows={5} placeholder="আপনার প্রজেক্ট সম্পর্কে সংক্ষেপে লিখুন..." className="rounded-xl bg-background" />
              </Field>

              <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto">
                বার্তা পাঠান <Send />
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
