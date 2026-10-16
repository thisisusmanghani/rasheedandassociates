import {
  Gavel, Pill, ShieldCheck, Landmark,
  Users, FileText, Eye,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  Icon: LucideIcon;
};

export const services: Service[] = [
  { slug: "criminal",      title: "Criminal Law",       blurb: "Bail, trial, appeals and high-stakes criminal representation across all courts.",            Icon: Gavel },
  { slug: "narcotics",     title: "Narcotics Law",      blurb: "Defence in narcotics and controlled-substance cases from arrest through appellate stages.",   Icon: Pill },
  { slug: "cyber",         title: "Cyber Crime",        blurb: "PECA matters, data privacy, online defamation and FIA Cyber Crime defence.",                  Icon: ShieldCheck },
  { slug: "family",        title: "Family Law",         blurb: "Khula, custody, guardianship, maintenance and dissolution proceedings handled with care.",    Icon: Users },
  { slug: "rental",        title: "Rental Law",         blurb: "Tenancy disputes, eviction proceedings, rent recovery and landlord-tenant agreements.",     Icon: FileText },
  { slug: "constitutional",title: "Constitutional Law", blurb: "Writ petitions and fundamental-rights advocacy before the High Court & Supreme Court.",       Icon: Landmark },
  { slug: "fia",           title: "FIA Laws",           blurb: "Representation in FIA investigations and prosecutions across cyber, financial and human-trafficking wings.", Icon: Eye },
];
