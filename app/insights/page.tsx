import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import InnerLayout from "@/components/InnerLayout";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { insights } from "@/lib/insights";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal Insights & Guides — Best Lawyers in Lahore | Rasheed & Associates",
  description:
    "Practical legal guides by the best lawyers in Lahore Pakistan — writ petitions at Lahore High Court, property disputes in Punjab, khula process, bail procedure, overseas Pakistani property cases and company registration in Lahore.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Legal Insights | Best Law Firm in Lahore — Rasheed & Associates",
    description:
      "Practical legal guides written by top advocates of the Lahore High Court — updated regularly for 2026.",
    url: `${site.url}/insights`,
  },
};

export default function InsightsIndex() {
  const sorted = [...insights].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <InnerLayout>
      <PageHero
        eyebrow="Insights"
        title="Practical legal guides for Pakistan"
        subtitle="Long-form, plain-English guides written by practising advocates — updated regularly to reflect current law and Lahore High Court practice."
        crumbs={[{ label: "Insights", href: "/insights" }]}
      />

      <section className="bg-bone">
        <div className="container py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-2">
            {sorted.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group rounded-2xl border border-ink-800/10 bg-white p-7 hover:border-gold/50 hover:shadow-ink transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gold">
                  <span>{p.category}</span>
                  <span className="text-ink-800/30">·</span>
                  <span className="text-ink-800/50 inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {p.readingMinutes} min read</span>
                </div>
                <h2 className="mt-3 font-serif text-2xl text-ink-800 leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm text-ink-800/70 leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs">
                  <time dateTime={p.publishedAt} className="text-ink-800/50">
                    {new Date(p.publishedAt).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                  <span className="inline-flex items-center gap-1.5 uppercase tracking-widest text-gold">
                    Read <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </InnerLayout>
  );
}
