import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaBanner({
  title = "Speak with a senior advocate today",
  subtitle = "Discreet consultation. Clear, written engagement. Direct partner-led representation in Lahore and across Punjab.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-gradient text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,97,0.15),transparent_60%)]" />
      <div className="container relative py-20 md:py-28 text-center">
        <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-white/75">{subtitle}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-gold-gradient px-7 py-3.5 text-sm uppercase tracking-widest text-ink-900 font-medium shadow-gold"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-3.5 text-sm uppercase tracking-widest text-white/90 hover:border-gold hover:text-gold transition-colors"
          >
            WhatsApp {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
