export type Attorney = {
  slug: string;
  name: string;
  designation: string;
  title: string;
  photo: string;
  bio: string;
  longBio: string[];
  education: string[];
  barRegistration: string;
  memberOf: string[];
  practiceAreas: string[];
  knowsAbout: string[];
  languages: string[];
  yearsOfExperience: number;
  email: string;
  phone: string;
  metaTitle: string;
  metaDescription: string;
};

export const attorneys: Attorney[] = [
  {
    slug: "m-rasheed-bhatti",
    name: "M. Rasheed Bhatti",
    designation: "Founder & Principal Advocate",
    title: "Advocate, Lahore High Court",
    photo: "/bhatti saab.png",
    bio:
      "Founder of Rasheed & Associates and a senior advocate of the Lahore High Court with over two decades of practice across civil, criminal, corporate, taxation and constitutional law in Pakistan.",
    longBio: [
      "M. Rasheed Bhatti is the founder and principal advocate of Rasheed & Associates, a Lahore-based law firm with a national practice. He is enrolled as an Advocate of the Lahore High Court and has appeared in hundreds of matters before the High Court, District Courts of Lahore, Family Courts, Banking Courts, Special Courts under PECA and CNSA, the Appellate Tribunal Inland Revenue (ATIR), and the Supreme Court of Pakistan.",
      "His practice covers writ petitions, civil and criminal litigation, family law, property disputes, corporate compliance, taxation appeals, and banking recovery. He is particularly recognised for his constitutional advocacy at the Lahore High Court and his strategic handling of complex property and inheritance matters for both resident and overseas Pakistani clients.",
      "Mr. Bhatti is committed to the highest standards of professional ethics and combines old-school courtroom advocacy with modern, technology-enabled client service.",
    ],
    education: [
      "LL.B — University of the Punjab, Lahore",
    ],
    barRegistration: "Enrolled Advocate, Lahore High Court — Punjab Bar Council",
    memberOf: ["Punjab Bar Council", "Lahore High Court Bar Association", "Lahore Bar Association"],
    practiceAreas: ["criminal", "civil", "property", "family", "corporate", "constitutional", "banking", "taxation"],
    knowsAbout: [
      "Constitutional Law",
      "Writ Petitions",
      "Lahore High Court Practice",
      "Civil Litigation",
      "Criminal Defence",
      "Property Disputes",
      "Family Law",
      "Corporate & Commercial Law",
      "Banking Law",
      "Taxation Law",
    ],
    languages: ["English", "Urdu", "Punjabi"],
    yearsOfExperience: 20,
    email: "rasheedandassociateslahore@gmail.com",
    phone: "+92 300 4553477",
    metaTitle: "M. Rasheed Bhatti — Advocate Lahore High Court | Founder, Rasheed & Associates",
    metaDescription:
      "M. Rasheed Bhatti is a senior advocate of the Lahore High Court and founder of Rasheed & Associates with 20+ years' experience in civil, criminal, corporate, family and constitutional law in Pakistan.",
  },
];

export const getAttorney = (slug: string) => attorneys.find((a) => a.slug === slug);
