import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import InnerLayout from "@/components/InnerLayout";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { attorneys } from "@/lib/attorneys";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Attorneys — Best Lawyers in Lahore | Rasheed & Associates",
  description:
    "Meet the best lawyers in Lahore at Rasheed & Associates — led by M. Rasheed Bhatti, top Advocate of the Lahore High Court with 20+ years of practice in Pakistan. Expert legal team in Lahore.",
  alternates: { canonical: "/attorneys" },
  openGraph: {
    title: "Attorneys | Best Law Firm in Lahore — Rasheed & Associates",
    description: "Top advocates of the Lahore High Court — direct partner-led representation by the best lawyers in Lahore Pakistan.",
    url: `${site.url}/attorneys`,
  },
};

export default function AttorneysIndex() {
  return (
    <InnerLayout>
      <PageHero
        eyebrow="Our People"
        title="Senior advocates with two decades at the bar"
        subtitle="Every brief is reviewed and supervised by the founding partner. No matter is delegated downstream without partner oversight."
        crumbs={[{ label: "Attorneys", href: "/attorneys" }]}
      />

      <section className="bg-bone">
        <div className="container py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-2">
            {attorneys.map((a, i) => (
              <Link
                key={a.slug}
                href={`/attorneys/${a.slug}`}
                className="group rounded-2xl overflow-hidden border border-ink-800/10 bg-white hover:shadow-ink transition-shadow"
              >
                <div className="relative h-[420px] bg-ink-800/5">
                  <Image
                    src={a.photo}
                    alt={`${a.name} — ${a.title}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    priority={i === 0}
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-widest text-gold">{a.designation}</p>
                  <h2 className="mt-2 font-serif text-2xl text-ink-800">{a.name}</h2>
                  <p className="mt-1 text-sm text-ink-800/70">{a.title}</p>
                  <p className="mt-4 text-sm text-ink-800/75 leading-relaxed">{a.bio}</p>
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
