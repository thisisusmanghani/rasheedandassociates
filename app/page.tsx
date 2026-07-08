import Navbar      from "@/components/Navbar";
import Hero        from "@/components/Hero";
import Founder     from "@/components/Founder";
import Services    from "@/components/Services";
import Stats       from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact     from "@/components/Contact";
import Footer      from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd      from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  alternateName: ["Rasheed & Associates Lahore", "Rasheed Associates Law Firm", "R&A Law Firm", "Best Law Firm in Lahore"],
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/logo.png`,
  description: site.description,
  foundingDate: "2004",
  founder: {
    "@type": "Person",
    name: site.founderName,
    jobTitle: site.founderTitle,
  },
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: "Punjab",
    addressCountry: "PK",
    postalCode: "54000",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "31.5580",
    longitude: "74.3131",
  },
  areaServed: [
    { "@type": "City", name: "Lahore" },
    { "@type": "State", name: "Punjab" },
    { "@type": "Country", name: "Pakistan" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:30",
    closes: "18:30",
  },
  sameAs: [
    site.url,
  ],
  knowsAbout: [
    "Civil Litigation",
    "Criminal Defence",
    "Family Law",
    "Khula",
    "Divorce",
    "Child Custody",
    "Property Disputes",
    "Real Estate Law",
    "Corporate Law",
    "Company Registration",
    "Constitutional Law",
    "Writ Petitions",
    "Taxation Law",
    "Banking Law",
    "Intellectual Property",
    "Cyber Law",
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${site.name} — Best Law Firm in Lahore`,
  url: site.url,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${site.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema]} />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <Services />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
