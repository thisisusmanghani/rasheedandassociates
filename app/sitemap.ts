import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { practiceAreas } from "@/lib/practiceAreas";
import { attorneys } from "@/lib/attorneys";
import { insights } from "@/lib/insights";
import { locations } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url.replace(/\/$/, "");

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,           lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/practice`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/attorneys`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/insights`,   lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/faq`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ur`,         lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const practicePages: MetadataRoute.Sitemap = practiceAreas.map((p) => ({
    url: `${base}/practice/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const attorneyPages: MetadataRoute.Sitemap = attorneys.map((a) => ({
    url: `${base}/attorneys/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const insightPages: MetadataRoute.Sitemap = insights.map((i) => ({
    url: `${base}/insights/${i.slug}`,
    lastModified: new Date(i.updatedAt || i.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...practicePages, ...attorneyPages, ...insightPages, ...locationPages];
}
