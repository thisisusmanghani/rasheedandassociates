"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Landmark, MapPin, Phone, Mail, Award, Scale } from "lucide-react";
import { site } from "@/lib/site";

const credentials = [
  { Icon: Landmark,       label: "Adv, Lahore High Court, Lahore" },
  { Icon: GraduationCap,  label: "LL.B — University of the Punjab" },
  { Icon: Award,          label: "Decades of Courtroom Practice" },
  { Icon: Scale,          label: "Criminal · Family · Property · Constitutional" },
];

export default function Founder() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-bone overflow-hidden">
      {/* Decorative monogram */}
      <div className="pointer-events-none absolute -right-32 -top-32 select-none font-serif text-[28rem] leading-none text-ink-800/[0.03]">
        R
      </div>

      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Copy – left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="text-xs tracking-widestx uppercase text-gold-600">The Founder</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink-800 leading-[1.05]">
            {site.founderName} — Best Advocate in Lahore
            <span className="block mt-2 text-2xl md:text-3xl text-gold-600 italic font-normal">
              Advocate, Lahore High Court, Lahore
            </span>
          </h2>

          <div className="mt-8 space-y-5 text-ink-800/80 leading-relaxed text-[15px] md:text-base max-w-2xl">
            <p>
              For over two decades, <strong className="text-ink-800">M. Rasheed Bhatti</strong>{" "}
              has appeared before the courts of Law as one of the most trusted lawyers in Lahore — a steadfast advocate for clients
              navigating the most consequential moments of their lives — from disputed
              inheritances to corporate crises, from family matters to constitutional petitions.
            </p>
            <p>
              His practice is built on a single principle: <em className="text-gold-600 not-italic">
              meticulous preparation, plain-spoken counsel, and unwavering loyalty to the client</em>.
              Whether before a magistrate or the High Court, every brief is argued with the same
              dedication.
            </p>
          </div>

          {/* Credentials grid */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {credentials.map(({ Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                className="flex items-center gap-3 border border-ink-800/10 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-sm hover:border-gold/50 hover:shadow-md transition-all"
              >
                <Icon className="h-5 w-5 text-gold-600 shrink-0" />
                <span className="text-sm text-ink-800/85">{label}</span>
              </motion.div>
            ))}
          </div>

          {/* Quick contact strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-ink-800/10">
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-ink-800 hover:text-gold-600 transition-colors">
              <Phone className="h-4 w-4 text-gold-600" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-sm text-ink-800 hover:text-gold-600 transition-colors break-all">
              <Mail className="h-4 w-4 text-gold-600" /> {site.email}
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-ink-800/80">
              <MapPin className="h-4 w-4 text-gold-600" /> {site.address.line1}, {site.address.line2}, {site.address.city}, {site.address.country}
            </span>
          </div>
        </motion.div>

        {/* Portrait – right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[3/2] w-full">
            {/* Gold frame offset */}
            <div className="absolute -inset-3 border border-gold/40 rounded-sm" />
            <div className="absolute -bottom-5 -right-5 w-2/3 h-2/3 bg-ink-800 rounded-sm -z-10" />
            <div className="relative h-full w-full overflow-hidden rounded-sm shadow-ink">
              <Image
                src="/bhatti saab.png"
                alt={`${site.founderName} — ${site.founderTitle}`}
                fill
                sizes="(min-width: 1024px) 580px, 90vw"
                className="object-cover object-center"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -left-4 bottom-8 bg-ink-800 text-white px-5 py-3 rounded-sm shadow-ink border-l-2 border-gold"
            >
              <div className="text-[10px] tracking-widestx uppercase text-gold/80">Est.</div>
              <div className="font-serif text-2xl">2004</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
