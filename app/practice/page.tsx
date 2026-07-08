import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import InnerLayout from "@/components/InnerLayout";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { practiceAreas } from "@/lib/practiceAreas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practice Areas — Best Law Firm in Lahore | Legal Services Pakistan",
  description:
    "Explore all practice areas of Rasheed & Associates — the best law firm in Lahore. Civil, criminal, family, property, corporate, constitutional, banking, taxation, IP and cyber law services in Lahore and across Punjab Pakistan.",
  alternates: { canonical: "/practice" },
  openGraph: {
    title: "Practice Areas | Best Law Firm in Lahore — Rasheed & Associates",
    description:
      "12 core practice areas covered by top Lahore lawyers — Lahore High Court advocacy across civil, criminal, family, property, corporate and constitutional law in Pakistan.",
    url: `${site.url}/practice`,
  },
};

export default function PracticeIndex() {
  return (
    <InnerLayout>
      <PageHero
        eyebrow="Practice Areas"
        title="Comprehensive legal counsel across every major area of Pakistani law"
        subtitle="From bail applications and writ petitions to corporate compliance and overseas property recovery, our practice covers the full spectrum of contentious and advisory work."
        crumbs={[{ label: "Practice", href: "/practice" }]}
      />

      <section className="bg-bone">
        <div className="container py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map(({ slug, title, blurb, Icon }) => (
              <Link
                key={slug}
                href={`/practice/${slug}`}
                className="group relative rounded-2xl border border-ink-800/10 bg-white p-7 hover:border-gold/50 hover:shadow-ink transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-800/5 text-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="font-serif text-xl text-ink-800">{title}</h2>
                    <p className="mt-2 text-sm text-ink-800/70 leading-relaxed">{blurb}</p>
                  </div>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                  Read more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </InnerLayout>
  );
}
