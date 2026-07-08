import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, Phone, GraduationCap, Scale, Languages, Briefcase } from "lucide-react";
import InnerLayout from "@/components/InnerLayout";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import { attorneys, getAttorney } from "@/lib/attorneys";
import { practiceAreas } from "@/lib/practiceAreas";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return attorneys.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getAttorney(slug);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: `/attorneys/${a.slug}` },
    openGraph: {
      title: a.metaTitle,
      description: a.metaDescription,
      url: `${site.url}/attorneys/${a.slug}`,
      type: "profile",
      images: [{ url: a.photo, width: 800, height: 1000, alt: a.name }],
    },
  };
}

export default async function AttorneyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getAttorney(slug);
  if (!a) notFound();

  const relatedAreas = practiceAreas.filter((p) => a.practiceAreas.includes(p.slug));

  const personSchema = {
    "@context": "https://schema.org",
    "@type": ["Person", "Attorney"],
    name: a.name,
    jobTitle: a.designation,
    image: `${site.url}${a.photo.startsWith("/") ? "" : "/"}${a.photo}`,
    url: `${site.url}/attorneys/${a.slug}`,
    email: a.email,
    telephone: a.phone,
    worksFor: { "@type": "LegalService", name: site.name, url: site.url },
    alumniOf: a.education.map((e) => ({ "@type": "EducationalOrganization", name: e })),
    memberOf: a.memberOf.map((m) => ({ "@type": "Organization", name: m })),
    knowsAbout: a.knowsAbout,
    knowsLanguage: a.languages,
    description: a.bio,
  };

  return (
    <InnerLayout>
      <JsonLd data={personSchema} />

      <PageHero
        eyebrow={a.designation}
        title={a.name}
        subtitle={a.title}
        crumbs={[
          { label: "Attorneys", href: "/attorneys" },
          { label: a.name, href: `/attorneys/${a.slug}` },
        ]}
      />

      <section className="bg-bone">
        <div className="container py-20 md:py-28 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-800/5">
              <Image
                src={a.photo}
                alt={`${a.name} — ${a.title}`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="mt-6 rounded-2xl border border-ink-800/10 bg-white p-6 space-y-3 text-sm text-ink-800/85">
              <p className="flex items-start gap-3"><Briefcase className="mt-0.5 h-4 w-4 text-gold" /> {a.yearsOfExperience}+ years at the bar</p>
              <p className="flex items-start gap-3"><Scale className="mt-0.5 h-4 w-4 text-gold" /> {a.barRegistration}</p>
              <p className="flex items-start gap-3"><Languages className="mt-0.5 h-4 w-4 text-gold" /> {a.languages.join(", ")}</p>
              <p className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-gold" /> <a href={`tel:${a.phone}`} className="hover:text-gold">{a.phone}</a></p>
              <p className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-gold" /> <a href={`mailto:${a.email}`} className="hover:text-gold break-all">{a.email}</a></p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink-800">Profile</h2>
              <div className="mt-6 space-y-5 text-ink-800/80 leading-relaxed">
                {a.longBio.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink-800">Education & Bar</h2>
              <ul className="mt-6 space-y-3 text-ink-800/85">
                {a.education.map((e) => (
                  <li key={e} className="flex items-start gap-3"><GraduationCap className="mt-0.5 h-5 w-5 text-gold" />{e}</li>
                ))}
                <li className="flex items-start gap-3"><Scale className="mt-0.5 h-5 w-5 text-gold" />{a.barRegistration}</li>
              </ul>
              <p className="mt-4 text-sm text-ink-800/70">Member of: {a.memberOf.join(" · ")}</p>
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink-800">Practice Areas</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {relatedAreas.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/practice/${p.slug}`}
                    className="rounded-full border border-ink-800/15 bg-white px-4 py-2 text-sm text-ink-800/85 hover:border-gold hover:text-gold transition-colors"
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </InnerLayout>
  );
}
