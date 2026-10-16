export type Location = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  highlightPracticeSlugs: string[];
  faqs: { q: string; a: string }[];
};

export const locations: Location[] = [
  {
    slug: "lahore-lawyer",
    title: "Lawyer in Lahore",
    metaTitle: "Lawyer in Lahore | Best Law Firm Lahore — Rasheed & Associates",
    metaDescription:
      "Looking for the best lawyer in Lahore? Rasheed & Associates is a top-rated Lahore law firm at The Mall, near Lahore High Court. Expert advocates for civil, criminal, family, property, corporate cases in Lahore Pakistan.",
    eyebrow: "Local · Lahore",
    heroTitle: "Looking for a Lawyer in Lahore?",
    intro:
      "Rasheed & Associates is a full-service law firm in Lahore based at Office #9, Second Floor, Fahad Arcade, 63 The Mall — minutes from the Lahore High Court principal seat. Founded by Advocate M. Rasheed Bhatti, the firm represents individuals, families and businesses in civil, criminal, family, property, corporate, taxation and constitutional matters across Punjab.",
    sections: [
      {
        heading: "Why clients in Lahore choose us",
        body: [
          "Direct partner-led representation — every case is reviewed and supervised by the founding advocate, not delegated to junior associates.",
          "Walk-in office at The Mall, Lahore — five minutes from the LHC, City Courts and the District Courts complex.",
          "Modern client communication: WhatsApp updates, email pleadings, and online consultations for clients in Defence, Gulberg, Model Town, Bahria, DHA and Cantt.",
          "Transparent written fee engagement before any work begins — no hidden charges.",
        ],
      },
      {
        heading: "Practice areas covered in Lahore",
        body: [
          "Civil litigation, property and inheritance disputes, family law (khula, custody, maintenance), criminal defence and bail, corporate and SECP compliance, tax appeals, banking court matters, IP registration, and constitutional / writ petitions before the Lahore High Court.",
        ],
      },
      {
        heading: "Areas of Lahore we regularly serve",
        body: [
          "Clients across Lahore — including The Mall, Gulberg, Model Town, Defence (DHA), Bahria Town, Johar Town, Cantt, Garden Town, Wapda Town, Iqbal Town, Faisal Town and the inner city — engage us for litigation and advisory work. We also handle matters from districts across Punjab where they are listed before Lahore courts.",
        ],
      },
      {
        heading: "Book a consultation",
        body: [
          "Call or WhatsApp +92 300 4553477 or email rasheedandassociateslahore@gmail.com. Initial consultations are scheduled within 24–48 hours. Out-of-station and overseas clients are offered video consultations.",
        ],
      },
    ],
    highlightPracticeSlugs: ["criminal", "property", "family", "constitutional"],
    faqs: [
      {
        q: "Where is your law office in Lahore?",
        a: "Our office is at Office #9, Second Floor, Fahad Arcade, 63 The Mall, Lahore — close to the Lahore High Court and Charing Cross. Walk-in consultations are available 9:30am to 6:30pm, Monday to Saturday.",
      },
      {
        q: "Do you serve clients across Lahore?",
        a: "Yes. We routinely represent clients from every locality of Lahore — DHA, Gulberg, Model Town, Bahria, Cantt, Johar Town, Wapda Town, Iqbal Town and the inner city.",
      },
      {
        q: "Do you offer free legal consultation in Lahore?",
        a: "We offer a complimentary initial telephone or WhatsApp consultation to assess your matter. Detailed in-office or video consultations may be subject to a nominal fee, adjustable against engagement.",
      },
    ],
  },
  {
    slug: "punjab-lawyer",
    title: "Advocate in Punjab",
    metaTitle: "Advocate in Punjab | Best Lawyers Across Punjab — Rasheed & Associates",
    metaDescription:
      "Need the best advocate in Punjab? Rasheed & Associates — top-rated lawyers handling civil, criminal, family, property and constitutional matters across Lahore, Gujranwala, Faisalabad, Multan & Rawalpindi.",
    eyebrow: "Province · Punjab",
    heroTitle: "Trusted Advocate in Punjab",
    intro:
      "Rasheed & Associates, headquartered in Lahore, regularly accept matters from across Punjab — including Gujranwala, Faisalabad, Sialkot, Sheikhupura, Kasur, Multan, Rawalpindi and Sahiwal — particularly where appeals, references or writs lie before the Lahore High Court and its benches.",
    sections: [
      {
        heading: "Practice across Punjab",
        body: [
          "Our advocates appear at the Lahore High Court principal seat and its benches at Rawalpindi, Multan and Bahawalpur. We coordinate with local counsel for trial-court appearances in distant districts to keep costs manageable for clients.",
          "Where matters are filed at the Lahore High Court (writ petitions, criminal appeals, banking appeals, tax references, ICAs), we handle the entire matter from drafting to final hearing.",
        ],
      },
      {
        heading: "Categories of work undertaken across Punjab",
        body: [
          "Constitutional and writ petitions before LHC; second appeals and revisions; criminal appeals and bails; banking court appeals; tax references; family law appeals; SECP and corporate matters; rent appeals; and overseas Pakistani property recoveries.",
        ],
      },
      {
        heading: "Coordinated representation",
        body: [
          "For a client in (say) Faisalabad with a property suit pending in district court and an interim writ in LHC, we manage the LHC writ directly and supervise local counsel in Faisalabad — avoiding duplication and conflicting strategy.",
        ],
      },
    ],
    highlightPracticeSlugs: ["constitutional", "criminal", "property", "family"],
    faqs: [
      {
        q: "Do you handle cases outside Lahore?",
        a: "Yes. We handle appeals, writs and references from across Punjab that are filed at the Lahore High Court or its benches. For trial-court matters in distant districts we either travel or coordinate with local counsel.",
      },
      {
        q: "Can you appear at LHC benches in Rawalpindi or Multan?",
        a: "Yes. The firm undertakes matters at the Rawalpindi, Multan and Bahawalpur benches of the Lahore High Court on a case-by-case basis.",
      },
    ],
  },
  {
    slug: "lahore-high-court-advocate",
    title: "Lahore High Court Advocate",
    metaTitle: "Lahore High Court Advocate | Best LHC Lawyer in Lahore — Rasheed & Associates",
    metaDescription:
      "Top enrolled advocate of Lahore High Court in Lahore. Expert LHC lawyers for writ petitions, criminal appeals, civil revisions, banking & tax references at Lahore High Court. Direct partner-led LHC practice.",
    eyebrow: "Court · Lahore High Court",
    heroTitle: "Advocate, Lahore High Court — Direct LHC Practice",
    intro:
      "M. Rasheed Bhatti is enrolled as an Advocate of the Lahore High Court (Punjab Bar Council) and conducts a substantial constitutional, criminal, civil, banking and tax appellate practice at the LHC principal seat in Lahore.",
    sections: [
      {
        heading: "What we file and argue at Lahore High Court",
        body: [
          "Constitutional / writ petitions under Article 199 — service matters, regulatory action, fundamental-rights enforcement, habeas corpus.",
          "Intra-Court Appeals (ICA) before Division Benches against single-Judge orders.",
          "Criminal appeals, bails and quashment petitions under Section 561-A CrPC.",
          "Civil first appeals, second appeals and civil revisions.",
          "Banking appeals under FIO 2001 and tax references under the Income Tax Ordinance and Sales Tax Act.",
          "Company petitions and SECP appeals before the Company Bench.",
        ],
      },
      {
        heading: "How we work at LHC",
        body: [
          "We file electronically through the LHC e-court portal and physically at the filing branch. Urgent matters are moved by way of CM applications for ad-interim relief at the first hearing. Pleadings are drafted with reference to the latest binding case law of LHC and the Supreme Court.",
        ],
      },
      {
        heading: "Why a dedicated LHC advocate matters",
        body: [
          "The Lahore High Court has its own filing rules, listing practice and Bench-specific preferences. An advocate with regular LHC practice is familiar with daily cause lists, registrar branches, the e-court portal and the procedural nuances that decide whether interim relief is obtained at the first hearing.",
        ],
      },
    ],
    highlightPracticeSlugs: ["constitutional", "criminal"],
    faqs: [
      {
        q: "Are you enrolled as an Advocate of the Lahore High Court?",
        a: "Yes. The principal advocate, M. Rasheed Bhatti, is enrolled with the Punjab Bar Council as an Advocate of the Lahore High Court and regularly appears before single Judges and Division Benches of the LHC.",
      },
      {
        q: "How quickly can a writ petition be filed at LHC?",
        a: "Once the engagement is finalised and documents are provided, a writ petition can be drafted and filed within 24–72 hours. Urgent CM applications for stay can be moved at the first hearing the same week.",
      },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
