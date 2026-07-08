import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import InnerLayout from "@/components/InnerLayout";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/seo/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { insights, getInsight } from "@/lib/insights";
import { practiceAreas } from "@/lib/practiceAreas";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${site.url}/insights/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [site.name],
      tags: post.keywords,
    },
  };
}

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const related = practiceAreas.filter((p) => post.relatedPracticeSlugs.includes(p.slug));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/insights/${post.slug}` },
    keywords: post.keywords.join(", "),
    inLanguage: "en-PK",
    articleSection: post.category,
  };

  return (
    <InnerLayout>
      <JsonLd data={articleSchema} />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[
          { label: "Insights", href: "/insights" },
          { label: post.title, href: `/insights/${post.slug}` },
        ]}
      />

      <article className="bg-bone">
        <div className="container py-16 md:py-24 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-ink-800/55">
              <time dateTime={post.publishedAt}>
                Published {new Date(post.publishedAt).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <span className="text-ink-800/25">·</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {post.readingMinutes} min read</span>
            </div>

            <p className="mt-8 text-lg text-ink-800/85 leading-relaxed font-serif italic">
              {post.intro}
            </p>

            <div className="mt-12 space-y-12">
              {post.sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="font-serif text-2xl md:text-3xl text-ink-800">{s.heading}</h2>
                  <div className="mt-5 space-y-4 text-ink-800/80 leading-relaxed">
                    {s.body.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </section>
              ))}
            </div>

            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <p className="mt-12 text-xs text-ink-800/50 italic">
                Last updated: {new Date(post.updatedAt).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 self-start space-y-6">
            <div className="rounded-2xl border border-ink-800/10 bg-white p-7">
              <p className="text-xs uppercase tracking-widest text-gold mb-4">Related practice areas</p>
              <ul className="space-y-2 text-sm">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/practice/${p.slug}`} className="text-ink-800/85 hover:text-gold transition-colors">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-ink-gradient p-7 text-white">
              <h3 className="font-serif text-xl">Need legal advice on this?</h3>
              <p className="mt-3 text-sm text-white/75">Get partner-led counsel on your matter.</p>
              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-full bg-gold-gradient px-5 py-2.5 text-xs uppercase tracking-widest text-ink-900 font-medium"
              >
                Book Consultation
              </Link>
            </div>

            <div className="rounded-2xl border border-ink-800/10 bg-white p-7">
              <p className="text-xs uppercase tracking-widest text-gold mb-4">More insights</p>
              <ul className="space-y-3 text-sm">
                {insights.filter((i) => i.slug !== post.slug).slice(0, 4).map((i) => (
                  <li key={i.slug}>
                    <Link href={`/insights/${i.slug}`} className="text-ink-800/85 hover:text-gold transition-colors leading-snug block">
                      {i.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      {post.faqs.length > 0 && <FaqSection faqs={post.faqs} title="Questions on this topic" />}
      <CtaBanner />
    </InnerLayout>
  );
}
