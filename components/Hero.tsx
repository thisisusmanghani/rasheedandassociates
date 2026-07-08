"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y     = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade  = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-ink-900"
    >
      {/* Backdrop image with parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=2400&q=80"
          alt="Courthouse columns at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/65 to-ink-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,97,0.10),transparent_55%)]" />
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Decorative corner ornaments */}
      <svg className="absolute top-24 left-6 md:left-10 h-16 w-16 text-gold/40" viewBox="0 0 64 64" fill="none">
        <path d="M2 2 H30 M2 2 V30" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg className="absolute bottom-24 right-6 md:right-10 h-16 w-16 text-gold/40" viewBox="0 0 64 64" fill="none">
        <path d="M62 62 H34 M62 62 V34" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Content */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 container min-h-screen flex flex-col justify-center pt-32 pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="gold-rule" />
            <span className="text-xs md:text-sm tracking-widestx uppercase text-gold/90">
              Lahore High Court, Lahore ,Punjab · Pakistan
            </span>
          </div>

          <h1 className="font-serif font-light leading-[0.95] text-white">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Rasheed <span className="text-gold italic font-normal">&amp;</span> Associates
            </span>
            <span className="block mt-4 text-3xl sm:text-4xl md:text-5xl text-shimmer">
              Best Lawyers in Lahore &amp; Attorneys at Law
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed font-light">
            Looking for the best lawyer in Lahore? Rasheed &amp; Associates is a top-rated law firm in Lahore, Pakistan representing individuals, families and enterprises across civil, criminal, corporate, taxation and constitutional matters at the Lahore High Court &mdash; with the rigour of old-school advocacy and the clarity of latest laws.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold-gradient px-7 py-3.5 text-sm uppercase tracking-widest text-ink-900 font-medium shadow-gold transition-transform hover:-translate-y-0.5"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/30 mix-blend-overlay" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-3.5 text-sm uppercase tracking-widest text-white/90 hover:border-gold hover:text-gold transition-colors"
            >
              Practice Areas
            </a>
          </div>

          <div className="mt-16 flex items-center gap-4 text-white/55 text-xs tracking-widestx uppercase">
            <span className="gold-rule" />
            <span>Trusted Counsel · Decades of Practice</span>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-gold transition-colors"
          aria-label="Scroll"
        >
          <span className="text-[10px] tracking-widestx uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </motion.div>
    </section>
  );
}
