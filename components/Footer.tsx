"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site, footerLegalLinks } from "@/lib/site";
import { practiceAreas } from "@/lib/practiceAreas";

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 text-white/70 border-t border-gold/15">
      <div className="container py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="relative h-16 w-[240px] max-w-full">
            <Image
              src="/logo.png"
              alt={site.name}
              fill
              sizes="240px"
              className="object-contain object-left"
            />
          </div>
          <p className="mt-5 text-sm leading-relaxed max-w-sm">
            Rasheed &amp; Associates — the best law firm in Lahore, Pakistan. Trusted advocates at Lahore High Court offering expert legal services in civil, criminal, family, property and corporate law across Punjab.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-widestx text-gold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm">
            {footerLegalLinks.slice(0, 6).map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-gold transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-widestx text-gold mb-4">Practice</h4>
          <ul className="space-y-2 text-sm">
            {practiceAreas.slice(0, 7).map((s) => (
              <li key={s.slug}><Link href={`/practice/${s.slug}`} className="hover:text-gold transition-colors">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-widestx text-gold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /><span>{site.address.line1}, {site.address.line2}, {site.address.city}</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /><a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">{site.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" /><a href={`mailto:${site.email}`} className="hover:text-gold whitespace-nowrap">{site.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/45 text-center md:text-left">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {footerLegalLinks.slice(6).map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-gold transition-colors">{l.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
