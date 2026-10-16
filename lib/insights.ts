export type InsightSection = { heading: string; body: string[] };

export type Insight = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  category: string;
  relatedPracticeSlugs: string[];
  keywords: string[];
  intro: string;
  sections: InsightSection[];
  faqs: { q: string; a: string }[];
};

export const insights: Insight[] = [
  {
    slug: "how-to-file-writ-petition-lahore-high-court",
    title: "How to File a Writ Petition in Lahore High Court — Step by Step",
    metaTitle: "How to File a Writ Petition in Lahore High Court (2026 Guide)",
    metaDescription:
      "A step-by-step guide to filing a constitutional / writ petition under Article 199 before the Lahore High Court — drafting, filing, court fee and timelines, by Rasheed & Associates.",
    excerpt:
      "Article 199 of the Constitution gives the Lahore High Court power to issue writs against unlawful executive action. Here is exactly how a writ petition is drafted, filed and heard at the LHC.",
    publishedAt: "2025-09-12",
    updatedAt: "2026-01-08",
    readingMinutes: 9,
    category: "Constitutional Law",
    relatedPracticeSlugs: ["constitutional"],
    keywords: ["writ petition Lahore High Court", "Article 199 petition", "how to file writ Pakistan", "LHC writ procedure"],
    intro:
      "A writ petition is the constitutional remedy of choice when an arm of the state — a federal or provincial authority, statutory body or quasi-judicial tribunal — has acted unlawfully and no equally efficacious alternate remedy is available. Under Article 199 of the Constitution of Pakistan, the Lahore High Court is empowered to issue writs in the nature of certiorari, prohibition, mandamus, habeas corpus and quo warranto. This guide explains how Rasheed & Associates files writ petitions at the LHC principal seat in Lahore.",
    sections: [
      {
        heading: "1. Confirm maintainability before drafting",
        body: [
          "The single biggest reason for dismissal at admission stage is the existence of an alternate remedy. Before any draft is begun we examine: is there a statutory appeal, revision or review available? If yes, has it been exhausted, or is it inadequate?",
          "We also confirm the petitioner is an ‘aggrieved person’ — a recurring threshold under Article 199 — and that the relief sought falls within the writ jurisdiction of the High Court (not, for example, a contractual dispute that lies before a civil court).",
        ],
      },
      {
        heading: "2. Drafting the memo of petition",
        body: [
          "The memo of petition must contain: a concise narrative of facts, the impugned action or order, the constitutional and statutory provisions invoked, and a clear prayer clause. Annexures are paginated and indexed.",
          "We pair the memo with a list of dates, a synopsis (one-page summary), an affidavit of the petitioner, and a power of attorney in favour of counsel.",
        ],
      },
      {
        heading: "3. Court fee, filing and numbering",
        body: [
          "Court fee for a writ petition before the Lahore High Court is approximately PKR 5,000. Filing is done electronically via the LHC e-court portal and physically at the filing branch.",
          "Once scrutinised, the petition is numbered (e.g. W.P. No. 12345/2026) and listed before a Bench within 1–4 weeks. Urgent matters can be moved by way of a separate urgent application supported by affidavit.",
        ],
      },
      {
        heading: "4. First hearing, notice and stay orders",
        body: [
          "At the first hearing the Bench may: admit the petition for regular hearing and issue notice to the respondents; grant an interim stay where irreparable harm is shown; or dismiss in limine if maintainability fails.",
          "Where time-sensitive executive action is challenged (e.g. property auctions, demolitions, transfers, suspensions) we move a CM application for ad-interim stay simultaneously with filing.",
        ],
      },
      {
        heading: "5. Reply, rejoinder and final hearing",
        body: [
          "Respondents file parawise comments. We respond with a rejoinder where new factual material is introduced. The matter is then set for arguments — usually in 2–6 months in straightforward cases.",
          "On final hearing the Bench may allow the petition (and issue the appropriate writ), dismiss it, or remand the matter back for fresh decision.",
        ],
      },
      {
        heading: "6. After the LHC order — ICA & Supreme Court",
        body: [
          "An adverse order of a single Judge is appealable by way of an Intra-Court Appeal (ICA) to a Division Bench within 20 days. Decisions of the Division Bench are challengeable before the Supreme Court of Pakistan by way of a Civil Petition for Leave to Appeal under Article 185(3) of the Constitution.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a lawyer to file a writ petition in Lahore High Court?",
        a: "Technically a person can appear in person, but in practice the LHC requires petitions to comply with strict drafting, annexure and procedural rules. Lay petitions are routinely dismissed at admission stage. Engaging an enrolled advocate ensures proper drafting, timely filing of CM applications and effective oral arguments.",
      },
      {
        q: "How long does a writ petition take at Lahore High Court?",
        a: "Simple writs are decided in 2–6 months. Petitions involving service matters, regulatory action or fundamental rights with multiple respondents typically take 8–18 months. Interim relief, however, can be obtained at the first hearing.",
      },
      {
        q: "What is the court fee for a writ petition in LHC?",
        a: "The current court fee for a writ petition in the Lahore High Court is approximately PKR 5,000, exclusive of advocate fee, photocopying and process fee. Fees may be revised from time to time by the Punjab Government.",
      },
    ],
  },
  {
    slug: "property-disputes-punjab-legal-rights",
    title: "Property Disputes in Punjab: Your Legal Rights Explained",
    metaTitle: "Property Disputes in Punjab — Legal Rights & Remedies (2026)",
    metaDescription:
      "Understand your legal rights in Punjab property disputes — title verification, mutation, possession, DHA/LDA matters, inheritance and stay orders. Guide by Lahore property lawyers.",
    excerpt:
      "Property litigation is the largest category of civil disputes in Punjab. This guide explains the rights of buyers, sellers and inheritors and how to enforce them.",
    publishedAt: "2025-10-05",
    updatedAt: "2026-02-14",
    readingMinutes: 10,
    category: "Property Law",
    relatedPracticeSlugs: ["property", "constitutional"],
    keywords: ["property dispute Punjab", "property lawyer Lahore", "DHA dispute", "LDA dispute", "inheritance Pakistan"],
    intro:
      "From contested mutations to encroached plots, property disputes in Punjab cut across every district court docket. The good news: the law gives owners and bona fide purchasers strong remedies — declaration, possession, partition, specific performance and stay against alienation. The challenge is procedural: getting the right relief from the right forum, fast.",
    sections: [
      {
        heading: "1. Start with title verification",
        body: [
          "Before any litigation we obtain: the latest fard malkiat (record of rights) from the Land Record Centre (Aarazi Record Centre), the mutation history (inteqaalat), the registered sale deed (if any), and the approved layout plan or NOC where the property is in DHA, LDA, Bahria, or a cooperative society.",
          "A sound title chain prevents weak suits and exposes forgeries early. We also run a Sub-Registrar search to detect parallel registrations.",
        ],
      },
      {
        heading: "2. Common categories of dispute",
        body: [
          "Most property disputes fall into one of: (a) title disputes between rival claimants, (b) specific performance against a defaulting seller, (c) inheritance partition among legal heirs, (d) illegal possession or encroachment, (e) DHA/LDA transfer disputes, and (f) overseas Pakistani property cases involving fraudulent transfers during the owner’s absence.",
        ],
      },
      {
        heading: "3. Choosing the correct civil suit",
        body: [
          "Suit for declaration: when the dispute is about who owns the property.",
          "Suit for specific performance: when an agreement to sell has been executed but the seller refuses to transfer title.",
          "Suit for possession: when title is undisputed but possession lies with another.",
          "Suit for partition: when co-sharers want their respective shares physically separated.",
          "Each suit has different limitation, court fee and jurisdictional rules — getting this wrong delays the case by years.",
        ],
      },
      {
        heading: "4. Stay orders preserve the property",
        body: [
          "An application for temporary injunction under Order XXXIX Rules 1–2 CPC is moved at the first hearing to restrain alienation, construction or third-party transfer pending suit. Failing to seek interim relief is a frequent — and avoidable — mistake.",
        ],
      },
      {
        heading: "5. DHA, LDA & private societies",
        body: [
          "DHA and LDA disputes have additional layers: NOC, transfer letters, possession letters, dues clearance. These require representation before the housing authority’s grievance forums in addition to civil courts.",
        ],
      },
      {
        heading: "6. Overseas Pakistanis: managing matters remotely",
        body: [
          "Through a properly attested Special Power of Attorney (SPA) — attested at the Pakistani Embassy/Consulate and verified by MOFA Islamabad — overseas owners can authorise our firm to file, defend and execute property matters without travelling to Pakistan.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long do property cases take in Lahore?",
        a: "Most contested property suits take 2–4 years at the District level. Cases supported by clear documentary title and a stay order can sometimes be decreed faster through summary procedures. Appeals add 12–24 months.",
      },
      {
        q: "Can I get a stay order against a property transfer?",
        a: "Yes. A temporary injunction under Order XXXIX CPC can restrain registration, mutation or alienation pending suit. The plaintiff must show a prima facie case, balance of convenience and irreparable loss.",
      },
    ],
  },
  {
    slug: "khula-process-pakistan-women-guide",
    title: "Khula Process in Pakistan: What Women Need to Know",
    metaTitle: "Khula in Pakistan — Process, Rights & Timeline (2026 Guide)",
    metaDescription:
      "A clear guide to the Khula process in Pakistan — filing, reconciliation, decree, iddat and the union council certificate. By Rasheed & Associates, family lawyers in Lahore.",
    excerpt:
      "Khula gives a Muslim wife the right to seek dissolution of marriage on her own initiative. This guide explains the legal process, timeline and outcomes.",
    publishedAt: "2025-11-02",
    updatedAt: "2026-02-21",
    readingMinutes: 8,
    category: "Family Law",
    relatedPracticeSlugs: ["family"],
    keywords: ["khula Pakistan", "khula procedure Lahore", "family lawyer Lahore", "divorce lawyer Pakistan"],
    intro:
      "Khula is the right of a Muslim wife to seek dissolution of marriage by approaching the Family Court of competent jurisdiction. The process is governed by the West Pakistan Family Courts Act, 1964 read with the Muslim Family Laws Ordinance, 1961.",
    sections: [
      {
        heading: "1. Where to file",
        body: [
          "The suit is filed before the Family Court within whose jurisdiction the wife ordinarily resides. This is a deliberate protective provision — a wife is not required to travel to her husband’s city.",
        ],
      },
      {
        heading: "2. Pleadings",
        body: [
          "The suit for dissolution of marriage is drafted setting out the date and place of nikkah, the registered nikkahnama details, the grounds (including the wife’s aversion to the marriage — a recognised standalone ground for khula), and the reliefs claimed (dissolution, maintenance, dower, dowry articles, custody where applicable).",
        ],
      },
      {
        heading: "3. Pre-trial reconciliation",
        body: [
          "The Family Court is statutorily required to attempt reconciliation. If reconciliation fails, the court proceeds to dissolve the marriage on terms — typically requiring the wife to return the haq mehr already received.",
        ],
      },
      {
        heading: "4. Decree and timeline",
        body: [
          "By statute, the Family Court must dispose of a khula suit within 6 months. In practice, well-prepared suits are decreed within 3–4 months at Lahore Family Courts.",
        ],
      },
      {
        heading: "5. Union Council certificate",
        body: [
          "The decree is forwarded to the concerned Union Council, which then runs the iddat period of 90 days and issues the effective certificate. The marriage stands dissolved from the date of the certificate.",
        ],
      },
      {
        heading: "6. Allied claims: maintenance, custody, dowry",
        body: [
          "We commonly combine the khula suit with claims for past and future maintenance, recovery of dowry articles (jahez), and custody of minor children — all of which fall within the Family Court’s jurisdiction.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the husband’s consent matter in Khula?",
        a: "No. Under settled jurisprudence the wife’s aversion is itself a sufficient ground; the court will dissolve the marriage even where the husband refuses consent, subject to terms regarding return of dower.",
      },
      {
        q: "How long does Khula take in Lahore?",
        a: "Typically 3–6 months from filing to decree, plus a further 90 days for the iddat period at the Union Council before the effective certificate is issued.",
      },
    ],
  },
  {
    slug: "criminal-bail-applications-pakistan-complete-guide",
    title: "Criminal Bail Applications in Pakistan: A Complete Guide",
    metaTitle: "Bail Applications in Pakistan — Pre-Arrest, Post-Arrest & Cancellation",
    metaDescription:
      "Complete guide to bail in Pakistan — bailable vs non-bailable, anticipatory bail under s.498 CrPC, post-arrest bail, cancellation and bail at LHC. By Lahore criminal lawyers.",
    excerpt:
      "Bail in Pakistan is governed by Sections 496–498 CrPC. This guide walks through pre-arrest, post-arrest and cancellation proceedings, with specific reference to LHC practice.",
    publishedAt: "2025-08-18",
    updatedAt: "2026-01-30",
    readingMinutes: 9,
    category: "Criminal Law",
    relatedPracticeSlugs: ["criminal", "constitutional", "narcotics"],
    keywords: ["bail Pakistan", "bail lawyer Lahore", "anticipatory bail Pakistan", "section 498 CrPC"],
    intro:
      "Bail is one of the most time-sensitive legal remedies in Pakistan. The Code of Criminal Procedure, 1898 governs the regime, and the Lahore High Court has produced a substantial body of jurisprudence shaping how bail is granted, refused and cancelled in Punjab.",
    sections: [
      {
        heading: "1. Bailable vs non-bailable offences",
        body: [
          "Schedule II of the CrPC classifies every offence as bailable or non-bailable. For bailable offences, bail is a matter of right granted by the police or Magistrate on furnishing surety. For non-bailable offences, bail is judicially discretionary.",
        ],
      },
      {
        heading: "2. Pre-arrest (anticipatory) bail under Section 498 CrPC",
        body: [
          "Where arrest is imminent, the accused may apply for pre-arrest bail before the Sessions Court or directly before the Lahore High Court. The leading jurisprudence requires the applicant to demonstrate mala fides on the part of the prosecution and absence of any prima facie case.",
          "Interim pre-arrest bail is typically granted at the first hearing pending notice to the State; confirmation hearing is held after the prosecution’s reply.",
        ],
      },
      {
        heading: "3. Post-arrest bail",
        body: [
          "Post-arrest bail is moved before the same Magistrate, Sessions Court or High Court (depending on the offence). The court considers the gravity of the offence, the strength of the prosecution case, and whether the matter requires ‘further inquiry’.",
        ],
      },
      {
        heading: "4. Bail in special statutes",
        body: [
          "Special laws — CNSA (narcotics), Anti-Terrorism Act, NAB Ordinance — impose additional bars on bail. For CNSA recoveries above 1 kg, bail is barred under s.51 CNSA except in extraordinary circumstances. NAB cases require approach to the Accountability Court, with appeals to the Islamabad/Lahore High Court.",
        ],
      },
      {
        heading: "5. Cancellation of bail",
        body: [
          "Bail once granted can be cancelled on grounds of: misuse of liberty, attempts to abscond, threats to witnesses, or new material disclosing a stronger prosecution case. Applications for cancellation are moved by the State or the complainant.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I get bail before being arrested in Pakistan?",
        a: "Yes. Pre-arrest (anticipatory) bail under Section 498 CrPC is available before the Sessions Court or Lahore High Court when arrest is imminent. The applicant must show malice on the part of the complainant and absence of prima facie evidence.",
      },
      {
        q: "How long does a bail application take at Lahore High Court?",
        a: "Bail before the LHC is typically decided within 2–6 weeks of filing. Interim relief is often granted at the first hearing in pre-arrest bail matters.",
      },
    ],
  },
  {
    slug: "overseas-pakistanis-property-cases-remotely",
    title: "Overseas Pakistanis: How to Handle Property Cases Remotely",
    metaTitle: "Overseas Pakistani Property Lawyer in Lahore — Remote Case Handling",
    metaDescription:
      "Step-by-step guide for overseas Pakistanis pursuing property, inheritance and family cases in Lahore — power of attorney, attestation, court representation by Rasheed & Associates.",
    excerpt:
      "From the UK, US, Canada, Gulf and Australia, overseas Pakistanis routinely run litigation in Pakistan via attested Special Power of Attorney. Here is how the process works.",
    publishedAt: "2025-12-10",
    updatedAt: "2026-03-04",
    readingMinutes: 8,
    category: "Property Law",
    relatedPracticeSlugs: ["property", "family"],
    keywords: ["overseas Pakistani lawyer", "SPA attestation Pakistan", "remote property case Lahore", "MOFA attestation"],
    intro:
      "Overseas Pakistanis own a significant portion of urban and peri-urban property in Punjab. Distance and unauthorised transfers during absence make them vulnerable. The law provides a robust remedy: a properly attested Special Power of Attorney (SPA) allowing local counsel to file, defend and execute matters without the principal travelling to Pakistan.",
    sections: [
      {
        heading: "1. Drafting a Special Power of Attorney (SPA)",
        body: [
          "A bespoke SPA is drafted listing the specific powers required: filing and defending suits, signing pleadings, swearing affidavits, receiving payments, executing sale deeds, mutating property, and engaging counsel. Generic SPAs cause practical difficulties at the Sub-Registrar and revenue office.",
        ],
      },
      {
        heading: "2. Attestation at the Pakistani Embassy / Consulate",
        body: [
          "The SPA is signed in front of a notary in the country of residence and then attested at the Pakistani Embassy or Consulate, which verifies the principal’s CNIC/NICOP and signature.",
        ],
      },
      {
        heading: "3. MOFA verification in Islamabad",
        body: [
          "On arrival in Pakistan the SPA is verified by the Ministry of Foreign Affairs, Camp Office. Without MOFA verification, the SPA will not be accepted by the Sub-Registrar.",
        ],
      },
      {
        heading: "4. Registration with the Sub-Registrar",
        body: [
          "Where the SPA authorises sale or transfer of immovable property, it must be registered with the Sub-Registrar of the city where the property is located. Stamp duty applies.",
        ],
      },
      {
        heading: "5. Running the case",
        body: [
          "Once the SPA is in place we file pleadings, attend hearings, examine witnesses and execute decrees on the principal’s behalf. Updates are shared by email and WhatsApp; payments are accepted by international bank transfer.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I have to come to Pakistan to start a property case?",
        a: "No. Through a properly drafted, attested and MOFA-verified Special Power of Attorney, an overseas Pakistani can authorise our firm to file and run the entire matter in Pakistan without travel.",
      },
      {
        q: "Can a SPA be revoked?",
        a: "Yes. A registered SPA can be revoked by a registered deed of revocation, with notice to the attorney and to all parties relying on it.",
      },
    ],
  },
  {
    slug: "company-registration-lahore-secp-process",
    title: "Company Registration in Lahore: The Legal Process Explained",
    metaTitle: "Company Registration in Lahore (SECP) — Step-by-Step Guide",
    metaDescription:
      "Register a Private Limited or SMC company in Lahore with SECP. Documents, fees, NTN, and bank account opening explained by corporate lawyers at Rasheed & Associates.",
    excerpt:
      "Company registration in Pakistan is fully online via SECP eServices. This guide explains the legal steps from name reservation to NTN and bank account opening.",
    publishedAt: "2025-07-22",
    updatedAt: "2026-02-02",
    readingMinutes: 7,
    category: "Corporate Law",
    relatedPracticeSlugs: [],
    keywords: ["company registration Lahore", "SECP registration Pakistan", "private limited Pakistan", "SMC registration"],
    intro:
      "The Securities and Exchange Commission of Pakistan (SECP) administers company registration under the Companies Act, 2017. The entire process is now online via eServices, but each filing has substantive legal implications that benefit from corporate counsel.",
    sections: [
      {
        heading: "1. Choose the right vehicle",
        body: [
          "Private Limited Company (Pvt Ltd) — 2 to 50 shareholders, separate legal personality, easy capital raising, suitable for most SMEs.",
          "Single-Member Company (SMC) — one shareholder, ideal for solo founders who want limited liability without partners.",
          "Public Limited Company — minimum 7 shareholders, more onerous compliance, used for listed entities.",
        ],
      },
      {
        heading: "2. Name reservation",
        body: [
          "A unique name is reserved through SECP eServices. SECP rejects names that are deceptive, identical to existing companies, or contain restricted words (e.g. ‘Bank’, ‘Government’, ‘University’) without sectoral approval.",
        ],
      },
      {
        heading: "3. Incorporation documents",
        body: [
          "Memorandum of Association (objects), Articles of Association (governance), Form 1 (declaration), Form 21 (registered office), Form 29 (directors), CNICs of subscribers and directors.",
          "Foreign directors require additional documents: passport, CV, security clearance.",
        ],
      },
      {
        heading: "4. Certificate of Incorporation",
        body: [
          "On approval, SECP issues a digital Certificate of Incorporation, allotting the company a unique CUIN (Corporate Unique Identification Number). The company comes into existence from this date.",
        ],
      },
      {
        heading: "5. NTN and bank account",
        body: [
          "Within 30 days the company should be registered with FBR for NTN, and a corporate bank account opened. Most banks require the original Certificate, MOA/AOA, board resolution and director KYC.",
        ],
      },
      {
        heading: "6. Ongoing compliance",
        body: [
          "Annual returns, statutory registers, board minutes, AGM, and Form-29 (changes in directors) are mandatory. Non-compliance attracts SECP penalties.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does company registration take in Lahore?",
        a: "Through SECP eServices, name reservation typically takes 1–2 working days and the Certificate of Incorporation is issued within 5–10 working days. NTN and bank account opening add a further week.",
      },
      {
        q: "What is the SECP fee for a Private Limited company?",
        a: "Fees vary with authorised capital. For a basic Private Limited company with PKR 100,000 authorised capital, the SECP filing fee is approximately PKR 1,800 online. Stamp duty and our professional fee are additional.",
      },
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
