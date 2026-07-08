import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocation } from "@/lib/locations";
import { site } from "@/lib/site";

const data = getLocation("punjab-lawyer")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: `/${data.slug}` },
  openGraph: { title: data.metaTitle, description: data.metaDescription, url: `${site.url}/${data.slug}` },
};

export default function Page() {
  return <LocationPage data={data} />;
}
