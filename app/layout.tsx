import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/seo/JsonLd";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#081526",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Advocates & Legal Consultants in Lahore`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "lawyer in Lahore",
    "best lawyer in Lahore",
    "top lawyer in Lahore",
    "best law firm in Lahore",
    "top law firm Lahore",
    "advocate in Lahore",
    "advocate Lahore High Court",
    "civil lawyer in Lahore",
    "criminal lawyer in Lahore",
    "corporate lawyer in Lahore",
    "family lawyer in Lahore",
    "property lawyer in Lahore",
    "tax lawyer in Lahore",
    "constitutional lawyer Lahore",
    "banking lawyer Lahore",
    "Lahore High Court advocate",
    "Lahore High Court lawyer",
    "lawyers in Lahore Pakistan",
    "Lahore law firm",
    "legal services Lahore",
    "law firm near me Lahore",
    "advocate near me Lahore",
    "Rasheed and Associates Lahore",
    "Rasheed & Associates",
    "M Rasheed Bhatti advocate Lahore",
    "best advocate Lahore High Court",
    "Lahore legal consultants",
    "law firm The Mall Lahore",
    "vakeel Lahore",
    "wakil Lahore",
  ],
  authors: [{ name: site.founderName }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
    languages: {
      "en-PK": "/",
      "ur-PK": "/ur",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    alternateLocale: "ur_PK",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Best Law Firm in Lahore | Advocates & Legal Consultants`,
    description: site.description,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: `${site.name} — Best Lawyers in Lahore, Pakistan` }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  category: "Legal Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const address = {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: "Punjab",
    addressCountry: "PK",
  };

  const openingHours = [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    opens: "09:30", closes: "18:30",
  }];

  const legalService = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness", "ProfessionalService"],
    name: site.name,
    alternateName: ["Rasheed and Associates", "Rasheed Associates Lawyers", "R&A Law Firm Lahore"],
    image: `${site.url}/logo.png`,
    logo: `${site.url}/logo.png`,
    "@id": `${site.url}#organization`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    description: site.description,
    address,
    geo: { "@type": "GeoCoordinates", latitude: 31.5611, longitude: 74.3261 },
    hasMap: "https://maps.google.com/?q=Fahad+Arcade+63+The+Mall+Lahore",
    areaServed: [
      { "@type": "City", name: "Lahore" },
      { "@type": "AdministrativeArea", name: "Punjab" },
      { "@type": "Country", name: "Pakistan" },
    ],
    knowsAbout: [
      "Criminal Defence", "Property Disputes", "Family Law",
      "Constitutional Law", "Writ Petitions", "Cyber Crime / PECA",
    ],
    serviceType: [
      "Legal consultation", "Litigation", "Bail applications", "Writ petitions",
      "Property dispute resolution", "Family law representation", "Company registration",
    ],
    founder: { "@type": "Person", name: site.founderName, jobTitle: site.founderTitle },
    foundingDate: "2004",
    sameAs: [],
    openingHoursSpecification: openingHours,
    contactPoint: [{
      "@type": "ContactPoint",
      telephone: site.phone,
      email: site.email,
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu", "Punjabi"],
    }],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    url: site.url,
    name: site.name,
    inLanguage: ["en-PK", "ur-PK"],
    publisher: { "@id": `${site.url}#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/insights?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans bg-ivory text-ink-800 antialiased">
        <JsonLd data={[legalService, website]} />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
