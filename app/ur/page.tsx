import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "بہترین وکیل لاہور | راشد اینڈ ایسوسی ایٹس — لاہور ہائی کورٹ",
  description:
    "راشد اینڈ ایسوسی ایٹس لاہور کا بہترین لا فرم ہے۔ سول، فوجداری، خاندانی، جائیداد، کارپوریٹ اور آئینی مقدمات میں ماہر وکلاء لاہور ہائی کورٹ۔ مفت ابتدائی مشورہ۔",
  alternates: {
    canonical: "/ur",
    languages: {
      "en-PK": "/",
      "ur-PK": "/ur",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: "ur_PK",
    title: "بہترین وکیل لاہور | راشد اینڈ ایسوسی ایٹس",
    description: "لاہور ہائی کورٹ کے ایڈووکیٹ۔ ایم راشد بھٹی ایڈووکیٹ کی سربراہی میں بہترین قانونی خدمات۔",
    url: `${site.url}/ur`,
  },
};

const sections = [
  {
    h: "ہمارے بارے میں",
    p: "راشد اینڈ ایسوسی ایٹس کی بنیاد ایڈووکیٹ ایم راشد بھٹی نے رکھی۔ آپ لاہور ہائی کورٹ کے ایڈووکیٹ ہیں اور بیس سال سے زائد عرصے سے سول، فوجداری، خاندانی، جائیداد، کارپوریٹ، بینکنگ، ٹیکس اور آئینی مقدمات کی پیروی کر رہے ہیں۔",
  },
  {
    h: "ہماری خدمات",
    p: "آئینی رٹ پٹیشنز، فوجداری ضمانت اور دفاع، جائیداد کے تنازعات، خلع و طلاق، نفقہ، کمپنی رجسٹریشن (SECP)، ٹیکس اپیلز، بینکنگ کورٹ مقدمات اور سمندر پار پاکستانیوں کے مقدمات۔",
  },
  {
    h: "بیرون ملک مقیم پاکستانیوں کے لیے",
    p: "اگر آپ بیرون ملک مقیم ہیں اور پاکستان میں جائیداد یا خاندانی مقدمہ ہے تو پاور آف اٹارنی کے ذریعے ہم آپ کی نمائندگی کر سکتے ہیں۔ سفارت خانے سے تصدیق شدہ SPA اور MOFA تصدیق کے بعد ہم مکمل مقدمہ چلا سکتے ہیں۔",
  },
  {
    h: "دفتر کا پتہ",
    p: "آفس نمبر 9، دوسری منزل، فہد آرکیڈ، 63 دی مال، لاہور۔ پیر تا ہفتہ، صبح 9:30 سے شام 6:30 بجے تک۔",
  },
];

export default function UrduHomePage() {
  return (
    <>
      <main>
          <section className="relative overflow-hidden bg-ink-gradient text-white pt-24 pb-16 md:pt-32 md:pb-24">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,97,0.18),transparent_60%)]" />
            <div className="container relative">
              <p className="text-xs tracking-widest text-gold/90 uppercase mb-4">لاہور · پاکستان</p>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.15] max-w-4xl">
                وکیل لاہور — راشد اینڈ ایسوسی ایٹس
              </h1>
              <p className="mt-6 max-w-2xl text-white/80 text-base md:text-lg leading-loose">
                لاہور ہائی کورٹ، ضلعی عدالتوں اور خاندانی عدالتوں میں قابل اعتماد قانونی نمائندگی۔ ایم راشد بھٹی ایڈووکیٹ کی قیادت میں۔
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`tel:${site.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm text-ink-900 font-medium">
                  <Phone className="h-4 w-4" /> {site.phone}
                </a>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm text-white/90 hover:border-gold hover:text-gold transition-colors">
                  <MessageCircle className="h-4 w-4" /> واٹس ایپ
                </a>
              </div>
            </div>
          </section>

          <section className="bg-bone">
            <div className="container py-16 md:py-24 grid gap-10 md:grid-cols-2">
              {sections.map((s) => (
                <div key={s.h} className="rounded-2xl border border-ink-800/10 bg-white p-7">
                  <h2 className="font-serif text-2xl text-ink-800">{s.h}</h2>
                  <p className="mt-4 text-ink-800/80 leading-loose">{s.p}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-ivory">
            <div className="container py-12 text-center">
              <Link href="/" className="text-sm text-ink-800/70 hover:text-gold underline-offset-4 hover:underline">
                English version
              </Link>
            </div>
          </section>
        </main>
    </>
  );
}
