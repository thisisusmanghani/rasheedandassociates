import type { FAQ } from "@/lib/faqs";
import JsonLd from "./JsonLd";

export default function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  intro,
  injectSchema = true,
}: {
  faqs: FAQ[];
  title?: string;
  intro?: string;
  injectSchema?: boolean;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-ivory">
      {injectSchema && <JsonLd data={jsonLd} />}
      <div className="container py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-gold/80 mb-3">FAQ</p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink-800 leading-tight">{title}</h2>
          {intro && <p className="mt-5 text-ink-800/70 leading-relaxed">{intro}</p>}
        </div>

        <div className="mt-12 grid gap-4 max-w-4xl">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-ink-800/10 bg-white p-6 md:p-7 open:shadow-ink transition-shadow"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                <h3 className="font-serif text-lg md:text-xl text-ink-800 leading-snug">{f.q}</h3>
                <span className="mt-1 h-6 w-6 shrink-0 rounded-full border border-gold/40 grid place-items-center text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-ink-800/75 leading-relaxed text-[15px]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
