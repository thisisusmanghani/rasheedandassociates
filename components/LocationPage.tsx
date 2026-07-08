import Link from "next/link";
import { ArrowRight } from "lucide-react";
import InnerLayout from "@/components/InnerLayout";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/seo/FaqSection";
import type { Location } from "@/lib/locations";
import { practiceAreas } from "@/lib/practiceAreas";

export default function LocationPage({ data, showMap = false }: { data: Location; showMap?: boolean }) {
  const highlights = practiceAreas.filter((p) => data.highlightPracticeSlugs.includes(p.slug));

  return (
    <InnerLayout>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.heroTitle}
        subtitle={data.intro}
        crumbs={[{ label: data.title, href: `/${data.slug}` }]}
      />

      <section className="bg-bone">
        <div className="container py-20 md:py-28 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {data.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-serif text-2xl md:text-3xl text-ink-800">{s.heading}</h2>
                <div className="mt-5 space-y-4 text-ink-800/80 leading-relaxed">
                  {s.body.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            ))}

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-ink-800">Practice areas we cover</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {highlights.map(({ slug, title, blurb, Icon }) => (
                  <Link
                    key={slug}
                    href={`/practice/${slug}`}
                    className="group rounded-2xl border border-ink-800/10 bg-white p-5 hover:border-gold/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-800/5 text-gold">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-serif text-lg text-ink-800">{title}</h3>
                        <p className="mt-1 text-sm text-ink-800/65 leading-relaxed">{blurb}</p>
                      </div>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold">
                      Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start space-y-6">
            <div className="rounded-2xl bg-ink-gradient p-7 text-white">
              <h3 className="font-serif text-2xl">Speak to our team</h3>
              <p className="mt-3 text-sm text-white/75">Direct partner-led representation. Initial response within one working day.</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-xs uppercase tracking-widest text-ink-900 font-medium"
              >
                Book Consultation <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {showMap && (
              <div className="rounded-2xl overflow-hidden border border-ink-800/10 bg-white">
                <iframe
                  title="Rasheed & Associates — Lahore office location"
                  src="https://maps.google.com/maps?q=Fahad%20Arcade%2063%20The%20Mall%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>
            )}
          </aside>
        </div>
      </section>

      <FaqSection faqs={data.faqs} title={`${data.title} — FAQs`} />
      <CtaBanner />
    </InnerLayout>
  );
}
