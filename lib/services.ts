import {
  Gavel, Scale, Building2, Pill, ShieldCheck, Landmark,
  Users, BookOpen, Briefcase, FileText, Calculator, Eye,
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
  { slug: "civil",         title: "Civil Law",          blurb: "Property, contracts, recovery suits and declaratory matters before all civil courts.",       Icon: Scale },
  { slug: "corporate",     title: "Corporate Law",      blurb: "Incorporation, governance, SECP compliance, due diligence and shareholder disputes.",         Icon: Building2 },
  { slug: "narcotics",     title: "Narcotics Law",      blurb: "Defence in narcotics and controlled-substance cases from arrest through appellate stages.",   Icon: Pill },
  { slug: "cyber",         title: "Cyber Crime",        blurb: "PECA matters, data privacy, online defamation and FIA Cyber Crime defence.",                  Icon: ShieldCheck },
  { slug: "banking",       title: "Banking Law",        blurb: "Recovery suits, financing structures and disputes under the Banking Companies Ordinance.",    Icon: Briefcase },
  { slug: "family",        title: "Family Law",         blurb: "Khula, custody, guardianship, maintenance and dissolution proceedings handled with care.",    Icon: Users },
  { slug: "ip",            title: "IP Law",             blurb: "Trademark, copyright and patent registration, enforcement and licensing.",                    Icon: BookOpen },
  { slug: "rental",        title: "Rental Law",         blurb: "Tenancy disputes, eviction proceedings, rent recovery and landlord-tenant agreements.",     Icon: FileText },
  { slug: "constitutional",title: "Constitutional Law", blurb: "Writ petitions and fundamental-rights advocacy before the High Court & Supreme Court.",       Icon: Landmark },
  { slug: "taxation",      title: "Taxation Law",       blurb: "Income tax, sales tax & customs advisory, appeals and ADR before tribunals & FBR.",          Icon: Calculator },
  { slug: "fia",           title: "FIA Laws",           blurb: "Representation in FIA investigations and prosecutions across cyber, financial and human-trafficking wings.", Icon: Eye },
];
