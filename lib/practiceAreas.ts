import {
  Gavel, Scale, Building2, Pill, ShieldCheck, Landmark,
  Users, BookOpen, Briefcase, FileText, Calculator, Eye,
  type LucideIcon,
} from "lucide-react";

export type FAQ = { q: string; a: string };

export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
  Icon: LucideIcon;
  hero: string;
  intro: string;
  services: string[];
  process: { title: string; body: string }[];
  keywords: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "criminal",
    title: "Criminal Law",
    shortTitle: "Criminal",
    blurb: "Bail, trial, appeals and high-stakes criminal representation across all courts.",
    Icon: Gavel,
    hero: "Criminal Defence Lawyer in Lahore — Bail, Trial & Appeals",
    intro:
      "Rasheed & Associates is a leading criminal defence law firm in Lahore practising at the Lahore High Court and all subordinate courts of Punjab. Led by Advocate M. Rasheed Bhatti, our team handles bail applications, trial defence, anticipatory bail, quashment petitions and criminal appeals before sessions courts, the Lahore High Court and the Supreme Court of Pakistan.",
    services: [
      "Pre-arrest (anticipatory) bail under Section 498 CrPC",
      "Post-arrest bail and bail-cancellation matters",
      "Quashment of FIR under Section 561-A CrPC",
      "Trial representation under PPC, CrPC and special statutes",
      "Criminal appeals before the Lahore High Court & Supreme Court",
      "Defence in cases under PECA, Anti-Terrorism Act and Narcotics laws",
    ],
    process: [
      { title: "Consultation & Case Review", body: "We review the FIR, statements and evidence to map the strongest legal strategy from day one." },
      { title: "Bail Strategy", body: "Where applicable, we move pre-arrest or post-arrest bail before the competent court without delay." },
      { title: "Trial & Cross-Examination", body: "Rigorous cross-examination of prosecution witnesses and detailed defence evidence." },
      { title: "Appeal & Revision", body: "If conviction occurs, we pursue criminal appeals and revisions before the Lahore High Court." },
    ],
    keywords: ["criminal lawyer Lahore", "bail lawyer Lahore", "best criminal advocate Lahore High Court", "FIR quashment lawyer Punjab"],
    faqs: [
      { q: "How do I get bail in a criminal case in Pakistan?", a: "Bail in Pakistan is governed by Sections 496–498 of the Code of Criminal Procedure. For bailable offences bail is a matter of right; for non-bailable offences the court considers the gravity of the offence, evidence, and prospect of fair trial. Pre-arrest (anticipatory) bail is sought under Section 498 CrPC before the Sessions Court or High Court. We assess the FIR and prior record, draft a bail application, and argue for confirmation before the competent court — usually within days of engagement." },
      { q: "Can a lawyer get an FIR quashed in Lahore?", a: "Yes. Under Section 561-A of the CrPC the Lahore High Court has inherent jurisdiction to quash a First Information Report when the allegations, even if accepted as true, do not constitute the offence alleged, or where prosecution would be an abuse of process. We file a constitutional/quashment petition supported by documentary evidence and case law." },
      { q: "What is the difference between bailable and non-bailable offences?", a: "Bailable offences (e.g. simple hurt) entitle the accused to bail as a right by the police or court. Non-bailable offences (e.g. murder, dacoity) leave bail to judicial discretion and require a formal application supported by legal grounds — typically grounds of further inquiry, medical condition, hardship, or absence of prima facie evidence." },
    ],
    metaTitle: "Criminal Lawyer in Lahore | Bail & Defence Advocate Lahore High Court",
    metaDescription: "Top criminal defence lawyer in Lahore. Rasheed & Associates handle bail applications, FIR quashment, criminal trials and appeals at Lahore High Court. Call +92 300 4553477.",
  },
  {
    slug: "civil",
    title: "Civil Law",
    shortTitle: "Civil",
    blurb: "Property, contracts, recovery suits and declaratory matters before all civil courts.",
    Icon: Scale,
    hero: "Civil Litigation Lawyer in Lahore — Property, Contracts & Recovery",
    intro:
      "Our civil litigation practice covers the full spectrum of disputes before the civil courts of Lahore, the District Courts of Punjab and the Lahore High Court. We represent plaintiffs and defendants in suits for specific performance, declaration, possession, partition, injunction, recovery, and damages.",
    services: [
      "Suits for specific performance & declaration",
      "Possession and partition suits",
      "Permanent and mandatory injunctions",
      "Recovery of money & damages",
      "Civil revisions and second appeals before Lahore High Court",
      "Execution of decrees",
    ],
    process: [
      { title: "Pleadings", body: "We draft precise plaints, written statements and applications grounded in the Code of Civil Procedure." },
      { title: "Evidence", body: "Examination-in-chief, cross-examination and documentary proof managed in line with the Qanun-e-Shahadat Order." },
      { title: "Arguments & Judgment", body: "Oral and written arguments structured around binding precedent of the Lahore High Court and Supreme Court." },
      { title: "Appeal & Execution", body: "We pursue first appeals, revisions and execution proceedings to convert decrees into recoverable relief." },
    ],
    keywords: ["civil lawyer Lahore", "civil litigation Punjab", "specific performance lawyer Lahore", "civil court advocate Lahore"],
    faqs: [
      { q: "How long does a civil case take in Lahore?", a: "Most civil suits at the District level take 2–4 years to conclude due to docket pressure, with appeals adding further time. The Lahore High Court has issued case-management directions to accelerate disposal — competent counsel can substantially shorten timelines through focused pleadings and effective use of summary procedures." },
      { q: "What is a suit for specific performance in Pakistan?", a: "Under the Specific Relief Act, 1877, a buyer can sue for the actual transfer of immovable property where the seller has refused to honour an agreement to sell. The plaintiff must prove a valid contract, readiness and willingness to perform, and absence of laches. We routinely file such suits and obtain stay orders against third-party transfers." },
    ],
    metaTitle: "Civil Lawyer in Lahore | Civil Litigation Advocate Punjab",
    metaDescription: "Experienced civil litigation lawyer in Lahore. Suits for specific performance, declaration, possession and recovery before civil courts and Lahore High Court.",
  },
  {
    slug: "property",
    title: "Property & Real Estate Law",
    shortTitle: "Property",
    blurb: "Title disputes, DHA/LDA matters, transfers, illegal possession and inheritance.",
    Icon: Landmark,
    hero: "Property Lawyer in Lahore — Disputes, Transfers & Title Verification",
    intro:
      "Property litigation is the single largest source of dispute in Punjab. Rasheed & Associates handle title verification, sale-deed drafting, mutation and inteqaal disputes, illegal possession, DHA and LDA matters, inheritance partitions and overseas Pakistani property cases.",
    services: [
      "Title and ownership verification",
      "Sale deed and gift deed drafting & registration",
      "Mutation, inteqaal and fard disputes before Revenue authorities",
      "Possession suits and removal of encroachment",
      "DHA, LDA, Bahria Town and cooperative society disputes",
      "Inheritance and succession partition",
      "Overseas Pakistani property recovery",
    ],
    process: [
      { title: "Title Search", body: "We obtain fard, mutation history, registered deeds and approved layout plans before filing any suit." },
      { title: "Notice & Negotiation", body: "Many matters resolve at legal-notice stage — saving years of litigation." },
      { title: "Suit & Stay Order", body: "Where necessary we file a suit with stay against alienation and structural changes." },
      { title: "Decree & Mutation", body: "Once decreed, we ensure the decree is implemented in revenue and registry records." },
    ],
    keywords: ["property lawyer Lahore", "property dispute lawyer Punjab", "DHA lawyer Lahore", "LDA lawyer Lahore", "overseas Pakistani property lawyer"],
    faqs: [
      { q: "How do I resolve a property dispute in Punjab?", a: "Begin with a title search at the Sub-Registrar and Revenue offices to obtain fard, mutation history and registered deeds. A legal notice is then issued to the opposing party. If unresolved, we file a suit for declaration, possession or specific performance before the competent civil court along with an application for stay/temporary injunction. Decree execution is implemented through Revenue authorities or the Sub-Registrar." },
      { q: "Can overseas Pakistanis pursue a property case in Lahore remotely?", a: "Yes. Through a properly attested Special Power of Attorney (SPA) — attested at the Pakistani Embassy/Consulate and verified by the Ministry of Foreign Affairs — overseas Pakistanis can authorise our firm to file, defend and execute property matters on their behalf without travelling to Pakistan. Hearing updates are shared by email and WhatsApp." },
      { q: "What documents are needed for a property transfer in Pakistan?", a: "Original title document (registered sale deed, allotment letter or mutation), CNIC of buyer and seller, recent fard malkiat, NOC from the housing authority where applicable, photographs, payment proof, and a registered sale deed/agreement to sell. For DHA/LDA properties an additional transfer letter and clearance is required." },
    ],
    metaTitle: "Property Lawyer Lahore | Property Dispute Advocate Punjab",
    metaDescription: "Expert property lawyer in Lahore for title disputes, DHA/LDA matters, illegal possession, inheritance and overseas Pakistani property cases. Lahore High Court advocates.",
  },
  {
    slug: "family",
    title: "Family Law",
    shortTitle: "Family",
    blurb: "Khula, custody, guardianship, maintenance and dissolution proceedings handled with care.",
    Icon: Users,
    hero: "Family Lawyer in Lahore — Khula, Divorce, Custody & Maintenance",
    intro:
      "Family disputes demand discretion and clarity. Our family law practice handles khula, talaq, custody (hizanat), guardianship, maintenance (nafqa), dower (haq mehr), and dissolution of marriage under the Muslim Family Laws Ordinance, 1961 and the West Pakistan Family Courts Act, 1964.",
    services: [
      "Khula and dissolution of marriage",
      "Custody and visitation (hizanat)",
      "Guardianship under the Guardians and Wards Act",
      "Maintenance for wife and children",
      "Recovery of dower and dowry articles",
      "Domestic violence protection orders",
    ],
    process: [
      { title: "Confidential Counselling", body: "A private consultation to understand the matter and outline realistic outcomes." },
      { title: "Reconciliation & Pleadings", body: "Family Courts mandate reconciliation; where unworkable, we file the appropriate suit." },
      { title: "Trial & Decree", body: "Evidence is recorded confidentially; khula decrees are typically passed within 3–6 months." },
      { title: "Implementation", body: "We assist with the union council certificate, NADRA records and arrears recovery." },
    ],
    keywords: ["family lawyer Lahore", "khula lawyer Lahore", "divorce lawyer Lahore", "custody lawyer Punjab"],
    faqs: [
      { q: "What is the process for Khula in Pakistan?", a: "A Muslim wife may seek dissolution of marriage on the ground of khula by filing a suit in the Family Court of competent jurisdiction. The court attempts reconciliation; on failure, it dissolves the marriage on terms — typically the return of haq mehr already received. The Family Court must dispose of the suit within 6 months. Once decreed, an effective certificate is issued by the Union Council after the iddat period (90 days)." },
      { q: "Can a mother get custody of her children in Pakistan?", a: "Under classical Hanafi law and as applied by Pakistani Family Courts, the mother (hizan) has the primary right of custody of male children up to 7 years and female children until puberty, subject always to the welfare of the minor — the paramount consideration under the Guardians and Wards Act, 1890." },
      { q: "How much maintenance can a wife claim in Lahore?", a: "Maintenance (nafqa) is determined by the Family Court based on the husband's income and standard of living during the marriage. Courts in Lahore typically award between PKR 20,000 and PKR 200,000 per month per child depending on earnings, with periodic increases. Past maintenance can be recovered up to 6 years." },
    ],
    metaTitle: "Family Lawyer Lahore | Khula, Divorce & Custody Advocate",
    metaDescription: "Confidential family law services in Lahore. Khula, divorce, custody, maintenance and recovery of dower. Trusted female-friendly counsel at Lahore Family Courts.",
  },
  {
    slug: "corporate",
    title: "Corporate & Commercial Law",
    shortTitle: "Corporate",
    blurb: "Incorporation, governance, SECP compliance, due diligence and shareholder disputes.",
    Icon: Building2,
    hero: "Corporate Lawyer in Lahore — Company Registration, SECP & Commercial Disputes",
    intro:
      "We advise founders, SMEs and listed companies on incorporation, SECP compliance, contracts, joint ventures, due diligence and shareholder disputes — combining commercial pragmatism with rigorous legal drafting.",
    services: [
      "Company incorporation (private, SMC, public) with SECP",
      "Memorandum & Articles of Association drafting",
      "Shareholders' agreements & founder agreements",
      "Mergers, acquisitions and due diligence",
      "Commercial contract drafting and review",
      "Director liability & corporate governance advisory",
      "Shareholder, partnership and joint-venture disputes",
    ],
    process: [
      { title: "Structuring", body: "We recommend the right vehicle — SMC, Private Limited, AOP or LLP — based on tax, governance and exit objectives." },
      { title: "Incorporation", body: "Online filings with SECP, NTN registration with FBR, and bank account opening." },
      { title: "Ongoing Compliance", body: "Annual returns, statutory registers, board minutes and Form-29 filings." },
      { title: "Disputes", body: "Shareholder, oppression and mismanagement petitions before the Lahore Bench of SECP/Company Bench." },
    ],
    keywords: ["corporate lawyer Lahore", "company registration Lahore", "SECP lawyer Pakistan", "commercial lawyer Lahore"],
    faqs: [
      { q: "How do I register a company in Lahore?", a: "Company registration in Pakistan is done online through SECP's eServices portal. The steps are: (1) name reservation, (2) submission of incorporation documents (Memorandum, Articles, CNICs, Form 1, 21, 29), (3) issuance of Certificate of Incorporation, (4) NTN registration with FBR, and (5) bank account opening. Our firm handles end-to-end incorporation in 7–14 working days." },
      { q: "What is the difference between a Private Limited company and an SMC?", a: "A Single-Member Company (SMC) is a private limited company with one shareholder — useful for solo founders. A Private Limited Company requires 2–50 shareholders and offers easier capital-raising and equity distribution. Both have limited liability protection and are regulated by SECP under the Companies Act, 2017." },
    ],
    metaTitle: "Corporate Lawyer in Lahore | Company Registration & SECP Compliance",
    metaDescription: "Corporate lawyer in Lahore for company registration with SECP, shareholder agreements, M&A, due diligence and commercial disputes. Trusted by founders & SMEs.",
  },
  {
    slug: "constitutional",
    title: "Constitutional Law",
    shortTitle: "Constitutional",
    blurb: "Writ petitions and fundamental-rights advocacy before the High Court & Supreme Court.",
    Icon: Landmark,
    hero: "Constitutional Lawyer Lahore — Writ Petitions at Lahore High Court",
    intro:
      "We file constitutional and writ petitions before the Lahore High Court under Article 199 of the Constitution and intra-court appeals before the Division Bench. Our work spans fundamental-rights enforcement, service matters, regulatory challenges and challenges to executive action.",
    services: [
      "Writ of certiorari, mandamus, prohibition and habeas corpus",
      "Article 199 petitions before Lahore High Court",
      "Intra-Court Appeals (ICA) before Division Bench",
      "Constitutional petitions before Supreme Court of Pakistan",
      "Service matters & departmental appeals",
      "Public interest litigation",
    ],
    process: [
      { title: "Maintainability Review", body: "We assess whether an alternate remedy exists — a frequent ground for dismissal." },
      { title: "Drafting", body: "Constitutional petitions are drafted with grounds rooted in fundamental rights and binding precedent." },
      { title: "Hearing & Stay", body: "Urgent stay orders sought where executive action is causing irreparable harm." },
      { title: "Final Order & Appeal", body: "Decisions are pursued to ICA and Supreme Court where merited." },
    ],
    keywords: ["constitutional lawyer Lahore", "writ petition Lahore High Court", "LHC writ lawyer", "Article 199 petition Pakistan"],
    faqs: [
      { q: "How do I file a writ petition in Lahore High Court?", a: "A writ petition is filed under Article 199 of the Constitution before the Lahore High Court. The petition must show: (1) a violation of fundamental rights or unlawful executive action, (2) absence of an equally efficacious alternate remedy, and (3) standing of the petitioner. We draft the memo of petition, annexures, list of dates, and synopsis. Filing is via the LHC e-court portal; a court fee of approximately PKR 5,000 applies. Hearings begin within 1–4 weeks." },
      { q: "What is the difference between a writ petition and a constitutional petition?", a: "In Pakistan the terms are used interchangeably — both refer to petitions under Article 199 (High Court) or Article 184(3)/185 (Supreme Court). High Courts may issue writs in the nature of certiorari, prohibition, mandamus, habeas corpus and quo warranto. Constitutional petitions before the Supreme Court are reserved for matters of public importance involving fundamental rights." },
    ],
    metaTitle: "Constitutional Lawyer Lahore | Writ Petition Lahore High Court",
    metaDescription: "File a writ petition at Lahore High Court with experienced constitutional lawyers. Article 199 petitions, ICA and Supreme Court matters by Rasheed & Associates.",
  },
  {
    slug: "banking",
    title: "Banking & Finance Law",
    shortTitle: "Banking",
    blurb: "Recovery suits, financing structures and disputes under the Banking Companies Ordinance.",
    Icon: Briefcase,
    hero: "Banking Lawyer in Lahore — Recovery Suits & Banking Court Matters",
    intro:
      "We act for and against banks, NBFIs and borrowers in matters under the Financial Institutions (Recovery of Finances) Ordinance, 2001 before Banking Courts in Punjab. Our work covers recovery suits, leave-to-defend applications, mortgage enforcement and restructuring negotiations.",
    services: [
      "Recovery suits under FIO 2001",
      "Defence in banking recovery proceedings",
      "Leave-to-defend applications & set-aside of ex-parte decrees",
      "Mortgage and pledge enforcement",
      "Restructuring & settlement negotiations",
      "Cheque dishonour proceedings under Section 489-F PPC",
    ],
    process: [
      { title: "Document Review", body: "We audit finance facility letters, security documents and statements of account." },
      { title: "Strategy", body: "Settlement first; litigation where the bank is unreasonable or the borrower has a strong defence." },
      { title: "Court Action", body: "Banking Court litigation, with recovery suits typically decreed within 6–12 months." },
      { title: "Execution & Appeal", body: "Execution of decree through auction of mortgaged property; appeals to Lahore High Court." },
    ],
    keywords: ["banking lawyer Lahore", "FIO recovery suit lawyer", "banking court Punjab", "loan recovery lawyer Lahore"],
    faqs: [
      { q: "What is a banking court in Pakistan?", a: "Banking Courts are special courts established under the Financial Institutions (Recovery of Finances) Ordinance, 2001 to decide disputes between financial institutions and customers. They follow a summary procedure: the defendant must obtain leave to defend within 30 days or face an ex-parte decree. Appeals lie to the High Court within 30 days." },
    ],
    metaTitle: "Banking Lawyer Lahore | Banking Court Recovery Suit Advocate",
    metaDescription: "Banking lawyer in Lahore for recovery suits, leave-to-defend applications, mortgage enforcement and banking court litigation under FIO 2001.",
  },
  {
    slug: "taxation",
    title: "Taxation Law",
    shortTitle: "Taxation",
    blurb: "Income tax, sales tax & customs advisory, appeals and ADR before tribunals & FBR.",
    Icon: Calculator,
    hero: "Tax Lawyer in Lahore — Income Tax, Sales Tax & FBR Appeals",
    intro:
      "Our taxation practice covers income tax, sales tax, customs and provincial taxes. We act in audits, show-cause proceedings, appeals before the Commissioner (Appeals), the Appellate Tribunal Inland Revenue (ATIR), and references before the Lahore High Court.",
    services: [
      "Income Tax & Sales Tax advisory",
      "Audit, show-cause and assessment representation",
      "Appeals before Commissioner (Appeals) and ATIR",
      "Tax references before Lahore High Court",
      "ADR proceedings under the Ordinance",
      "Customs & Punjab Revenue Authority matters",
    ],
    process: [
      { title: "Audit Defence", body: "Reply drafting, document compilation and hearings before Inland Revenue." },
      { title: "Assessment & Appeal", body: "First appeal to Commissioner (Appeals) within 30 days, second appeal to ATIR." },
      { title: "High Court Reference", body: "Question of law to Lahore High Court within 90 days of ATIR order." },
    ],
    keywords: ["tax lawyer Lahore", "FBR lawyer Lahore", "income tax appeal Pakistan", "sales tax lawyer Lahore"],
    faqs: [
      { q: "How do I challenge an FBR tax assessment order?", a: "An assessment order under Section 122 of the Income Tax Ordinance, 2001 is appealable to the Commissioner (Appeals) within 30 days. The second appeal lies to the Appellate Tribunal Inland Revenue (ATIR) within 60 days. A reference on a question of law lies to the Lahore High Court within 90 days. We file appeals with detailed grounds, paper books, and case law." },
    ],
    metaTitle: "Tax Lawyer in Lahore | FBR Appeals & ATIR Advocate",
    metaDescription: "Tax lawyer in Lahore for income tax, sales tax, FBR audits, ATIR appeals and tax references before Lahore High Court.",
  },
  {
    slug: "ip",
    title: "Intellectual Property Law",
    shortTitle: "IP",
    blurb: "Trademark, copyright and patent registration, enforcement and licensing.",
    Icon: BookOpen,
    hero: "Intellectual Property Lawyer Lahore — Trademark & Copyright",
    intro:
      "We protect brands and creators through IPO Pakistan registration, opposition, infringement litigation and licensing. From single-class trademark filings to portfolio management for groups, we provide commercial IP counsel.",
    services: [
      "Trademark search, filing & registration with IPO Pakistan",
      "Trademark opposition and rectification",
      "Copyright registration",
      "Patent filing and prosecution",
      "Infringement and passing-off litigation",
      "Licensing and franchise agreements",
    ],
    process: [
      { title: "Search & Filing", body: "We conduct a clearance search and file the application with IPO Pakistan in the correct class(es)." },
      { title: "Examination & Opposition", body: "We respond to examination reports and defend oppositions." },
      { title: "Registration & Enforcement", body: "Registration certificate is followed by ongoing watch services and enforcement actions where required." },
    ],
    keywords: ["trademark lawyer Lahore", "IP lawyer Pakistan", "copyright registration Lahore", "patent lawyer Lahore"],
    faqs: [
      { q: "How long does trademark registration take in Pakistan?", a: "Trademark registration through IPO Pakistan typically takes 18–24 months from filing to registration certificate, assuming no opposition. The stages are: filing → examination report → publication in the Trade Marks Journal → opposition period (60 days) → registration. Once registered, protection is for 10 years and renewable indefinitely." },
    ],
    metaTitle: "Trademark & IP Lawyer in Lahore | IPO Pakistan Filings",
    metaDescription: "IP lawyer in Lahore for trademark, copyright and patent registration with IPO Pakistan, infringement litigation and licensing agreements.",
  },
  {
    slug: "cyber",
    title: "Cyber Crime & PECA",
    shortTitle: "Cyber",
    blurb: "PECA matters, data privacy, online defamation and FIA Cyber Crime defence.",
    Icon: ShieldCheck,
    hero: "Cyber Crime Lawyer Lahore — PECA & FIA Cyber Crime Wing",
    intro:
      "We act for complainants and accused in matters under the Prevention of Electronic Crimes Act, 2016 (PECA) before FIA Cyber Crime Wing, Sessions Courts and the Lahore High Court — covering online harassment, defamation, hacking, financial fraud and data theft.",
    services: [
      "PECA complaints and defence",
      "FIA Cyber Crime Wing representation",
      "Online defamation and reputation matters",
      "Removal of unlawful online content",
      "Data privacy advisory",
    ],
    process: [
      { title: "Complaint or Defence", body: "We file a detailed PECA complaint with FIA or defend an existing inquiry." },
      { title: "Investigation & Bail", body: "Bail strategy where arrest is imminent; representations during investigation." },
      { title: "Trial & Appeal", body: "Trial before the Sessions Court; appeals to Lahore High Court." },
    ],
    keywords: ["cyber crime lawyer Lahore", "PECA lawyer Pakistan", "FIA cyber crime advocate Lahore", "online defamation lawyer Pakistan"],
    faqs: [
      { q: "How do I file a complaint with FIA Cyber Crime Wing in Lahore?", a: "Complaints under PECA are filed at the FIA Cyber Crime Reporting Centre, Lahore (located at 2nd Floor, Awami Complex, New Garden Town) or online via the FIA portal. We draft a comprehensive complaint with screenshots, URLs, timestamps, and supporting evidence. The FIA conducts an inquiry, registers an FIR if a cognisable offence is made out, and submits a challan in court." },
    ],
    metaTitle: "Cyber Crime Lawyer Lahore | PECA & FIA Cyber Crime Defence",
    metaDescription: "Cyber crime lawyer in Lahore for PECA cases, FIA Cyber Crime Wing matters, online defamation and digital evidence litigation.",
  },
  {
    slug: "narcotics",
    title: "Narcotics Law",
    shortTitle: "Narcotics",
    blurb: "Defence in narcotics and controlled-substance cases from arrest through appellate stages.",
    Icon: Pill,
    hero: "Narcotics Lawyer Lahore — CNSA Defence & Bail",
    intro:
      "We defend the accused in cases under the Control of Narcotic Substances Act, 1997 (CNSA) before Special Courts (CNS), the Lahore High Court and Supreme Court. Our work covers bail, trial defence, recovery challenges and appeals.",
    services: [
      "Bail in CNSA matters (post-arrest under Section 51)",
      "Trial defence before Special Courts (CNS)",
      "Challenge to chain-of-custody and recovery",
      "Appeals before Lahore High Court",
    ],
    process: [
      { title: "Recovery Audit", body: "Quantum, chain-of-custody and witness composition often decide the case." },
      { title: "Bail Application", body: "Bail under Section 51 CNSA is restrictive; we frame applications around 'further inquiry' jurisprudence." },
      { title: "Trial & Appeal", body: "Cross-examination of recovery witnesses and PFSA chemical examiner; appeal to LHC where convicted." },
    ],
    keywords: ["narcotics lawyer Lahore", "CNSA lawyer Pakistan", "drug case lawyer Lahore"],
    faqs: [
      { q: "Can bail be granted in a CNSA case in Pakistan?", a: "Bail under the Control of Narcotic Substances Act, 1997 is restrictive — for recoveries above 1 kg of narcotics, bail is barred under Section 51 CNSA except in extraordinary circumstances. Where the recovery is below 1 kg, or where 'further inquiry' grounds exist (e.g. defective FSL report, chain-of-custody breach, identity issues), the Lahore High Court has consistently granted bail." },
    ],
    metaTitle: "Narcotics Lawyer Lahore | CNSA Defence & Bail Advocate",
    metaDescription: "Defence lawyer in Lahore for narcotics cases under CNSA 1997. Bail, trial and appeals before Special Courts and Lahore High Court.",
  },
  {
    slug: "rental",
    title: "Rental & Tenancy Law",
    shortTitle: "Rental",
    blurb: "Tenancy disputes, eviction proceedings, rent recovery and landlord-tenant agreements.",
    Icon: FileText,
    hero: "Rental Lawyer Lahore — Eviction & Rent Recovery",
    intro:
      "We act for landlords and tenants under the Punjab Rented Premises Act, 2009 before Rent Tribunals and the Lahore High Court — covering ejectment, rent recovery, fair-rent fixation and tenancy agreements.",
    services: [
      "Ejectment petitions before Rent Tribunal",
      "Defence in eviction proceedings",
      "Recovery of arrears of rent",
      "Drafting of tenancy agreements",
      "Appeals before Additional District Judge (Rent)",
    ],
    process: [
      { title: "Notice", body: "Statutory notice under the Act is a precondition to most ejectment grounds." },
      { title: "Petition & Tender", body: "Petition before Rent Tribunal; tenant must tender rent during proceedings." },
      { title: "Decree & Appeal", body: "Eviction order followed by execution; appeal to ADJ within 30 days." },
    ],
    keywords: ["rental lawyer Lahore", "eviction lawyer Lahore", "tenant lawyer Punjab"],
    faqs: [
      { q: "How long does an eviction case take in Lahore?", a: "Under the Punjab Rented Premises Act, 2009 an ejectment petition is required to be decided within 4 months. In practice, contested petitions take 6–12 months at the Tribunal level, with appeal to the Additional District Judge adding further time." },
    ],
    metaTitle: "Rental Lawyer Lahore | Eviction & Rent Recovery Advocate",
    metaDescription: "Rental lawyer in Lahore for ejectment, rent recovery and tenancy disputes under Punjab Rented Premises Act, 2009.",
  },
  {
    slug: "fia",
    title: "FIA Laws",
    shortTitle: "FIA",
    blurb: "Representation in FIA investigations and prosecutions across cyber, financial and human-trafficking wings.",
    Icon: Eye,
    hero: "FIA Lawyer Lahore — Defence in FIA Investigations",
    intro:
      "Our team represents individuals and businesses summoned or accused before the Federal Investigation Agency (FIA) in Lahore — across the Cyber Crime, Anti-Corruption, Anti-Human-Trafficking and Economic Crime wings.",
    services: [
      "Defence in FIA inquiries and investigations",
      "Pre-arrest bail in FIA cases",
      "Trial before Special FIA Courts",
      "Appeals before Lahore High Court",
    ],
    process: [
      { title: "Inquiry Stage", body: "Representations and replies to halt unlawful inquiry escalation." },
      { title: "Bail", body: "Anticipatory bail before LHC where arrest is imminent." },
      { title: "Trial & Appeal", body: "Trial in FIA Court; appeals to Lahore High Court." },
    ],
    keywords: ["FIA lawyer Lahore", "FIA inquiry lawyer Pakistan", "FIA bail lawyer Lahore"],
    faqs: [
      { q: "What should I do if I receive an FIA notice in Lahore?", a: "Do not ignore an FIA notice under Section 160 CrPC. Engage counsel before appearing — your statement during inquiry is recorded and used at trial. Our firm appears alongside the client at the FIA office, ensures questions are within the scope of inquiry, and obtains anticipatory bail where escalation is feared." },
    ],
    metaTitle: "FIA Lawyer Lahore | FIA Inquiry & Bail Defence Advocate",
    metaDescription: "FIA lawyer in Lahore for inquiries, bail and trials before Special FIA Courts. Cyber, anti-corruption and economic crime defence.",
  },
];

export const getPracticeArea = (slug: string) =>
  practiceAreas.find((p) => p.slug === slug);
