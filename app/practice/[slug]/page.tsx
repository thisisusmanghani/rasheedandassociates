import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import InnerLayout from "@/components/InnerLayout";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/seo/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { practiceAreas, getPracticeArea } from "@/lib/practiceAreas";
import { insights } from "@/lib/insights";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: area.keywords,
    alternates: { canonical: `/practice/${area.slug}` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `${site.url}/practice/${area.slug}`,
      type: "article",
    },
  };
}

export default async function PracticeAreaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const related = insights
    .filter((i) => i.relatedPracticeSlugs.includes(area.slug))
    .slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${area.title} — ${site.name}`,
    description: area.metaDescription,
    url: `${site.url}/practice/${area.slug}`,
    serviceType: area.title,
    provider: { "@type": "LegalService", name: site.name, url: site.url },
    areaServed: [
      { "@type": "City", name: "Lahore" },
      { "@type": "AdministrativeArea", name: "Punjab" },
      { "@type": "Country", name: "Pakistan" },
    ],
  };

  return (
    <InnerLayout>
      <JsonLd data={serviceSchema} />

      <PageHero
        eyebrow={area.title}
        title={area.hero}
        subtitle={area.intro}
        crumbs={[
          { label: "Practice", href: "/practice" },
          { label: area.shortTitle, href: `/practice/${area.slug}` },
        ]}
      />

      <section className="bg-bone">
        <div className="container py-20 md:py-28 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink-800">What we do</h2>
              <ul className="mt-6 space-y-3">
                {area.services.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-ink-800/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink-800">How we work</h2>
              <ol className="mt-6 grid gap-5 sm:grid-cols-2">
                {area.process.map((step, i) => (
                  <li key={step.title} className="rounded-2xl border border-ink-800/10 bg-white p-6">
                    <span className="text-xs uppercase tracking-widest text-gold">Step {i + 1}</span>
                    <h3 className="mt-2 font-serif text-xl text-ink-800">{step.title}</h3>
                    <p className="mt-2 text-sm text-ink-800/70 leading-relaxed">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start space-y-6">
            <div className="rounded-2xl bg-ink-gradient p-7 text-white">
              <h3 className="font-serif text-2xl">Speak to a senior advocate</h3>
              <p className="mt-3 text-sm text-white/75">
                Direct partner-led consultation on your {area.shortTitle.toLowerCase()} matter.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-xs uppercase tracking-widest text-ink-900 font-medium"
              >
                Book Consultation <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-ink-800/10 bg-white p-7">
                <p className="text-xs uppercase tracking-widest text-gold mb-4">Related reading</p>
                <ul className="space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/insights/${r.slug}`} className="text-sm text-ink-800 hover:text-gold transition-colors">
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border border-ink-800/10 bg-white p-7">
              <p className="text-xs uppercase tracking-widest text-gold mb-4">Other practice areas</p>
              <ul className="space-y-2 text-sm">
                {practiceAreas.filter((p) => p.slug !== area.slug).slice(0, 6).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/practice/${p.slug}`} className="text-ink-800/80 hover:text-gold transition-colors">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FaqSection faqs={area.faqs} title={`${area.shortTitle} — Frequently Asked Questions`} />
      <CtaBanner />
    </InnerLayout>
  );
}
