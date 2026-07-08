"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-ink-900 text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.07]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-800/95 to-ink-900" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="text-xs tracking-widestx uppercase text-gold/90">Practice Areas</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Lahore's Top <span className="text-shimmer">Legal Practice</span> Areas
          </h2>
          <p className="mt-6 text-white/65 text-base md:text-lg leading-relaxed">
            From the courtroom to the boardroom, our Lahore law firm offers expert counsel across every discipline that shapes modern life and commerce in Pakistan.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 rounded-sm overflow-hidden border border-gold/15">
          {services.map((s, i) => (
            <motion.a
              key={s.slug}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              className="group relative bg-ink-800 hover:bg-ink-700 transition-colors duration-500 p-8 md:p-10 overflow-hidden"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(201,169,97,0.18),transparent_60%)]" />

              {/* top accent line on hover */}
              <span className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gold-gradient transition-all duration-700" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="h-14 w-14 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink-900 transition-all duration-500">
                  <s.Icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-gold group-hover:rotate-12 transition-all duration-500" />
              </div>

              <h3 className="relative font-serif text-2xl mt-6 mb-3 text-white group-hover:text-gold transition-colors duration-500">
                {s.title}
              </h3>
              <p className="relative text-sm text-white/60 leading-relaxed">
                {s.blurb}
              </p>

              <span className="relative mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-widestx text-gold/80 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                Speak to Counsel <ArrowUpRight className="h-3 w-3" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
