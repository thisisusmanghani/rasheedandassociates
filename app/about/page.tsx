import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import InnerLayout from "@/components/InnerLayout";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { site } from "@/lib/site";
import { attorneys } from "@/lib/attorneys";
import { practiceAreas } from "@/lib/practiceAreas";

export const metadata: Metadata = {
  title: "About — Rasheed & Associates | Best Law Firm in Lahore Pakistan",
  description:
    "Rasheed & Associates is the best law firm in Lahore, founded by M. Rasheed Bhatti in 2004. Leading Lahore High Court advocates providing trusted legal services across civil, criminal, family, property and constitutional law in Pakistan.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Rasheed & Associates | Best Law Firm in Lahore",
    description: "Top Lahore High Court law firm with two decades of practice. Best lawyers in Lahore Pakistan for civil, criminal, family & corporate law.",
    url: `${site.url}/about`,
  },
};

const founder = attorneys[0];

const facts = [
  { k: "Founded", v: "2004" },
  { k: "Principal Seat", v: "Lahore" },
  { k: "Courts Served", v: "Lahore High Court · District Courts · Family · Banking · Special · Supreme Court" },
  { k: "Practice Areas", v: `${practiceAreas.length} core areas` },
  { k: "Languages", v: "English · Urdu · Punjabi" },
  { k: "Clients", v: "Resident & overseas Pakistanis worldwide" },
];

export default function AboutPage() {
  return (
    <InnerLayout>
      <PageHero
        eyebrow="About the Firm"
        title="A Lahore law firm built on direct, partner-led representation."
        subtitle={`Established ${site.founded.toLowerCase()}, Rasheed & Associates is a full-service practice based at The Mall, Lahore — minutes from the Lahore High Court principal seat.`}
        crumbs={[{ label: "About", href: "/about" }]}
      />

      <section className="bg-bone">
        <div className="container py-20 md:py-28 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-ink-800">Our story</h2>
            {founder.longBio.map((p, i) => (
              <p key={i} className="text-ink-800/80 leading-relaxed">{p}</p>
            ))}
            <p className="text-ink-800/80 leading-relaxed">
              The firm represents individuals, families, SMEs and overseas Pakistanis. Every brief is reviewed by the founding advocate; nothing is delegated downstream without supervision. We engage clients on transparent, written terms and provide modern, technology-enabled communication including WhatsApp and video consultations.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/attorneys/m-rasheed-bhatti"
                className="inline-flex items-center gap-2 rounded-full bg-ink-800 text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-ink-700 transition-colors"
              >
                Meet the founder <ArrowRight className="h-3 w-3" />
              </Link>
              <Link
                href="/practice"
                className="inline-flex items-center gap-2 rounded-full border border-ink-800/20 text-ink-800 px-6 py-3 text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-colors"
              >
                Practice areas <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-800/5">
              <Image
                src={founder.photo}
                alt={`${founder.name} — ${founder.title}`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="mt-6 rounded-2xl border border-ink-800/10 bg-white p-6">
              <p className="text-xs uppercase tracking-widest text-gold mb-4">Firm at a glance</p>
              <dl className="grid grid-cols-1 gap-3 text-sm">
                {facts.map((f) => (
                  <div key={f.k} className="flex flex-col">
                    <dt className="text-ink-800/55 uppercase tracking-widest text-[11px]">{f.k}</dt>
                    <dd className="text-ink-800 font-medium">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </InnerLayout>
  );
}
