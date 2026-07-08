import Breadcrumbs, { type Crumb } from "@/components/seo/Breadcrumbs";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink-gradient text-white pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,97,0.18),transparent_60%)]" />
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="container relative">
        {crumbs && <div className="mb-8"><Breadcrumbs items={crumbs} /></div>}
        {eyebrow && (
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="text-xs tracking-widest uppercase text-gold/90">{eyebrow}</span>
          </div>
        )}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-white/75 text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
