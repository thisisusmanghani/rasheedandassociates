import type { Metadata } from "next";
import InnerLayout from "@/components/InnerLayout";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/seo/FaqSection";
import { generalFaqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Best Lawyers in Lahore | Legal FAQ",
  description:
    "Legal FAQs answered by the best lawyers in Lahore at Rasheed & Associates: writs at Lahore High Court, legal fees in Pakistan, khula, bail, property mutation, overseas Pakistanis, company registration and more.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Legal FAQ | Best Law Firm in Lahore — Rasheed & Associates",
    description:
      "Plain-English answers to the most common legal questions clients ask in Lahore and across Pakistan. Trusted Lahore lawyers.",
    url: `${site.url}/faq`,
  },
};

export default function FaqPage() {
  return (
    <InnerLayout>
      <PageHero
        eyebrow="FAQ"
        title="Answers to the questions clients ask most"
        subtitle="Plain-English answers to common questions about litigation, fees, family matters and overseas Pakistani cases. For specifics about your matter, please book a consultation."
        crumbs={[{ label: "FAQ", href: "/faq" }]}
      />
      <FaqSection faqs={generalFaqs} title="General Legal FAQs" />
      <CtaBanner title="Still have a question?" subtitle="Send us the basics and we'll respond with a clear next step within one working day." />
    </InnerLayout>
  );
}
