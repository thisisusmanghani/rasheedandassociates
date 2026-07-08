"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink-800/85 backdrop-blur-xl border-b border-gold/15 py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between gap-6">
        <Link href="/#home" className="group -ml-[6px] sm:-ml-[8px]">
          <div className="relative h-9 w-[170px] sm:h-11 sm:w-[230px] md:h-12 md:w-[280px] shrink-0">
            <Image
              src="/logo.png"
              alt={site.name}
              fill
              priority
              sizes="(max-width: 640px) 170px, (max-width: 768px) 230px, 280px"
              className="object-contain object-left drop-shadow-[0_2px_8px_rgba(201,169,97,0.35)]"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline text-sm tracking-widest uppercase text-white/85 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm text-white/85 hover:text-gold transition-colors"
          >
            <Phone className="h-4 w-4 text-gold" />
            <span>{site.phone}</span>
          </a>
          <a
            href="/#contact"
            className="hidden md:inline-flex group relative overflow-hidden rounded-full border border-gold/40 px-5 py-2 text-xs uppercase tracking-widest text-gold hover:text-ink-800 transition-colors"
          >
            <span className="relative z-10">Consult Now</span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gold-gradient" />
          </a>
          <button
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-ink-800/95 backdrop-blur-xl border-t border-gold/15"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/90 text-sm uppercase tracking-widest py-2 border-b border-white/5"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold text-sm pt-2"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
