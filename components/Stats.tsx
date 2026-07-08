"use client";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 21,   suffix: "+", label: "Years of Practice" },
  { value: 1500, suffix: "+", label: "Cases Handled"     },
  { value: 12,   suffix: "",  label: "Practice Areas"    },
  { value: 98,   suffix: "%", label: "Client Retention"  },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{display}</motion.span>
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-ink-800 text-white border-y border-gold/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,97,0.08),transparent_60%)]" />
      <div className="container relative grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((s) => (
          <div key={s.label} className="space-y-2">
            <div className="font-serif text-5xl md:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="text-xs md:text-sm uppercase tracking-widestx text-white/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
