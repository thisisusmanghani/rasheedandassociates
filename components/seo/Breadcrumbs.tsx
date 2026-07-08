import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/lib/site";
import JsonLd from "./JsonLd";

export type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest text-white/55">
        <ol className="flex flex-wrap items-center gap-2">
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span className="text-gold/90" aria-current="page">{c.label}</span>
                ) : (
                  <Link href={c.href} className="hover:text-gold transition-colors">
                    {c.label}
                  </Link>
                )}
                {!last && <ChevronRight className="h-3 w-3 text-white/30" aria-hidden />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
