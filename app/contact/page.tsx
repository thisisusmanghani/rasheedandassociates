import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import InnerLayout from "@/components/InnerLayout";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact a Lawyer in Lahore — Best Law Firm | Rasheed & Associates",
  description:
    "Contact the best lawyers in Lahore at Rasheed & Associates. Office at The Mall, near Lahore High Court. Call +92 300 4553477, WhatsApp or email for a confidential legal consultation in Lahore Pakistan.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Best Lawyers in Lahore | Rasheed & Associates",
    description: "Book a consultation with top Lahore law firm. WhatsApp, phone and email available. Best advocates at Lahore High Court.",
    url: `${site.url}/contact`,
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${site.name}`,
  url: `${site.url}/contact`,
  mainEntity: {
    "@type": "LegalService",
    name: site.name,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  },
};

export default function ContactPage() {
  return (
    <InnerLayout>
      <JsonLd data={contactJsonLd} />

      <PageHero
        eyebrow="Contact"
        title="Speak with our team in Lahore"
        subtitle="Confidential consultation by phone, WhatsApp, email or in person at our office on The Mall."
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="bg-bone">
        <div className="container py-20 md:py-28 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="rounded-2xl border border-ink-800/10 bg-white p-7">
              <p className="text-xs uppercase tracking-widest text-gold mb-5">Direct lines</p>
              <ul className="space-y-5 text-ink-800/85">
                <li className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ink-800/55">Phone</p>
                    <a href={`tel:${site.phoneRaw}`} className="font-serif text-lg text-ink-800 hover:text-gold">{site.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MessageCircle className="mt-0.5 h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ink-800/55">WhatsApp</p>
                    <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-serif text-lg text-ink-800 hover:text-gold">Message us on WhatsApp</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ink-800/55">Email</p>
                    <a href={`mailto:${site.email}`} className="font-serif text-lg text-ink-800 hover:text-gold break-all">{site.email}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ink-800/55">Office</p>
                    <p className="text-ink-800">{site.address.line1}<br />{site.address.line2}, {site.address.city}, {site.address.country}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="mt-0.5 h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ink-800/55">Hours</p>
                    <p className="text-ink-800">Monday – Saturday · 9:30 am to 6:30 pm</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-ink-gradient p-7 text-white">
              <h3 className="font-serif text-xl">For overseas Pakistanis</h3>
              <p className="mt-3 text-sm text-white/75">
                We routinely represent clients in the UK, US, Canada, Gulf and Australia through Special Power of Attorney. Read our <Link href="/insights/overseas-pakistanis-property-cases-remotely" className="text-gold underline-offset-4 hover:underline">guide on remote case handling</Link>.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-ink-800/10 bg-white min-h-[400px]">
            <iframe
              title="Rasheed & Associates — Lahore office location"
              src="https://maps.google.com/maps?q=Fahad%20Arcade%2063%20The%20Mall%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block min-h-[400px]"
            />
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
