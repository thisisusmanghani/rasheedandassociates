"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[i];
  const go = (n: number) =>
    setI((p) => (p + n + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-bone overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* huge ornamental quote */}
      <Quote
        aria-hidden
        className="absolute left-1/2 top-32 -translate-x-1/2 h-72 w-72 text-gold/[0.06]"
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="text-xs tracking-widestx uppercase text-gold-600">Voices of Trust</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink-800">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto min-h-[340px] flex items-center">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-ink-800/15 bg-white text-ink-800 hover:bg-ink-800 hover:text-gold hover:border-ink-800 transition-all flex items-center justify-center shadow-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-ink-800/15 bg-white text-ink-800 hover:bg-ink-800 hover:text-gold hover:border-ink-800 transition-all flex items-center justify-center shadow-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-center px-6"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-ink-800 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-gold-600 font-semibold tracking-wider uppercase text-sm">
                  {t.name}
                </div>
                <div className="text-ink-800/60 text-xs mt-1 tracking-wide">{t.role}</div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Go to testimonial ${k + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === k ? "w-10 bg-gold" : "w-2 bg-ink-800/20 hover:bg-ink-800/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
