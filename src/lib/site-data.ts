import {
  Code2,
  Megaphone,
  Palette,
  Search,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import workApp from "@/assets/work-app.jpg";
import workBrand from "@/assets/work-brand.jpg";
import workEcommerce from "@/assets/work-ecommerce.jpg";
import workMarketing from "@/assets/work-marketing.jpg";
import workSocial from "@/assets/work-social.jpg";
import workWeb from "@/assets/work-web.jpg";

export const SITE = {
  name: "পিক্সেলবাড়ি",
  tagline: "ডিজিটাল এজেন্সি",
  phone: "+৮৮০ ১৭১১-২৩৪৫৬৭",
  email: "hello@pixelbari.com.bd",
  address: "বাড়ি ১২, রোড ৫, ধানমন্ডি, ঢাকা ১২০৫",
  hours: "শনি – বৃহস্পতি, সকাল ১০টা – সন্ধ্যা ৭টা",
};

export const NAV_LINKS = [
  { to: "/", label: "হোম" },
  { to: "/about", label: "আমাদের সম্পর্কে" },
  { to: "/services", label: "সার্ভিস" },
  { to: "/gallery", label: "গ্যালারি" },
  { to: "/contact", label: "যোগাযোগ" },
] as const;

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
};

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "ওয়েব ডিজাইন ও ডেভেলপমেন্ট",
    description: "দ্রুত, সুন্দর আর মোবাইল-বান্ধব ওয়েবসাইট যা ভিজিটরকে গ্রাহকে পরিণত করে।",
    features: ["কাস্টম ডিজাইন", "মোবাইল-বান্ধব লেআউট", "দ্রুত লোডিং"],
    price: "২৫,০০০",
  },
  {
    icon: Smartphone,
    title: "মোবাইল অ্যাপ",
    description: "অ্যান্ড্রয়েড ও আইফোনের জন্য সহজে ব্যবহারযোগ্য অ্যাপ তৈরি।",
    features: ["অ্যান্ড্রয়েড ও iOS", "সুন্দর ইন্টারফেস", "প্লে স্টোরে প্রকাশ"],
    price: "৮০,০০০",
  },
  {
    icon: Megaphone,
    title: "ডিজিটাল মার্কেটিং",
    description: "ফেসবুক, গুগল ও ইউটিউবে সঠিক মানুষের কাছে আপনার ব্র্যান্ড পৌঁছে দিই।",
    features: ["ফেসবুক বিজ্ঞাপন", "গুগল বিজ্ঞাপন", "মাসিক রিপোর্ট"],
    price: "১৫,০০০/মাস",
  },
  {
    icon: Search,
    title: "এসইও (SEO)",
    description: "গুগলের প্রথম পাতায় আপনার ওয়েবসাইট নিয়ে আসার কার্যকর পরিকল্পনা।",
    features: ["কিওয়ার্ড রিসার্চ", "কনটেন্ট উন্নয়ন", "র‍্যাংকিং ট্র্যাকিং"],
    price: "১২,০০০/মাস",
  },
  {
    icon: Palette,
    title: "ব্র্যান্ডিং ও গ্রাফিক্স",
    description: "লোগো থেকে শুরু করে পুরো ব্র্যান্ড পরিচিতি — যা মানুষ মনে রাখে।",
    features: ["লোগো ডিজাইন", "ব্র্যান্ড গাইডলাইন", "সোশ্যাল মিডিয়া পোস্ট"],
    price: "১০,০০০",
  },
  {
    icon: ShoppingBag,
    title: "ই-কমার্স সমাধান",
    description: "অনলাইনে পণ্য বিক্রির জন্য সম্পূর্ণ শপ — পেমেন্ট ও ডেলিভারিসহ।",
    features: ["পণ্য ব্যবস্থাপনা", "বিকাশ/নগদ পেমেন্ট", "অর্ডার ট্র্যাকিং"],
    price: "৪৫,০০০",
  },
];

export type ProjectCategory = "ওয়েবসাইট" | "অ্যাপ" | "ব্র্যান্ডিং" | "মার্কেটিং";

export type Project = {
  title: string;
  client: string;
  category: ProjectCategory;
  image: string;
};

export const PROJECT_CATEGORIES: ("সব" | ProjectCategory)[] = [
  "সব",
  "ওয়েবসাইট",
  "অ্যাপ",
  "ব্র্যান্ডিং",
  "মার্কেটিং",
];

export const PROJECTS: Project[] = [
  { title: "কর্পোরেট ওয়েবসাইট", client: "আকাশ বিল্ডার্স লিমিটেড", category: "ওয়েবসাইট", image: workWeb },
  { title: "খাবার ডেলিভারি অ্যাপ", client: "খাইদাই", category: "অ্যাপ", image: workApp },
  { title: "ব্র্যান্ড পরিচিতি", client: "সবুজ অর্গানিক", category: "ব্র্যান্ডিং", image: workBrand },
  { title: "বিজ্ঞাপন ক্যাম্পেইন ড্যাশবোর্ড", client: "দেশি মার্ট", category: "মার্কেটিং", image: workMarketing },
  { title: "শাড়ির অনলাইন শপ", client: "তাঁতঘর", category: "ওয়েবসাইট", image: workEcommerce },
  { title: "সোশ্যাল মিডিয়া কনটেন্ট", client: "চা-কফি ক্যাফে", category: "মার্কেটিং", image: workSocial },
];

export const STATS = [
  { value: "১৫০+", label: "সম্পন্ন প্রজেক্ট" },
  { value: "৯৮%", label: "সন্তুষ্ট ক্লায়েন্ট" },
  { value: "৭+", label: "বছরের অভিজ্ঞতা" },
  { value: "২৪", label: "দক্ষ টিম মেম্বার" },
];

export const TESTIMONIALS = [
  {
    quote:
      "পিক্সেলবাড়ি আমাদের অনলাইন শপ বানানোর পর তিন মাসে বিক্রি দ্বিগুণ হয়েছে। ওদের টিম সবসময় পাশে ছিল।",
    name: "নুসরাত জাহান",
    role: "প্রতিষ্ঠাতা, তাঁতঘর",
  },
  {
    quote:
      "ফেসবুক মার্কেটিংয়ে আগে শুধু টাকা খরচ হতো। এখন প্রতিটি টাকার হিসাব আর ফলাফল পরিষ্কার দেখতে পাই।",
    name: "রাকিব হাসান",
    role: "মার্কেটিং প্রধান, দেশি মার্ট",
  },
  {
    quote:
      "আমাদের অ্যাপটা সময়মতো, বাজেটের মধ্যে এবং অসাধারণ মান নিয়ে ডেলিভারি দিয়েছে। আবারও কাজ করব।",
    name: "তানভীর আহমেদ",
    role: "সিইও, খাইদাই",
  },
];

export const TEAM = [
  { name: "আরিফুল ইসলাম", role: "প্রতিষ্ঠাতা ও সিইও", initials: "আই" },
  { name: "সাদিয়া রহমান", role: "ক্রিয়েটিভ ডিরেক্টর", initials: "সর" },
  { name: "মেহেদী হাসান", role: "লিড ডেভেলপার", initials: "মহ" },
  { name: "ফারহানা আক্তার", role: "মার্কেটিং ম্যানেজার", initials: "ফআ" },
];
