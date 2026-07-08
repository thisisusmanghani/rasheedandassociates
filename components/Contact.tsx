"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Consultation Request — ${fd.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\nPhone: ${fd.get("phone")}\nEmail: ${fd.get("email")}\nMatter: ${fd.get("matter")}\n\n${fd.get("message")}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 600);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-ink-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,97,0.10),transparent_55%)]" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="container relative grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left – info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="text-xs tracking-widestx uppercase text-gold/90">Get in Touch</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Counsel begins with a <span className="text-shimmer">conversation.</span>
          </h2>
          <p className="mt-6 text-white/65 leading-relaxed max-w-md">
            Reach out to schedule a confidential consultation. We respond to every inquiry within
            one working day.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { Icon: MapPin, title: "Chambers", lines: [site.address.line1, `${site.address.line2}, ${site.address.city}`] },
              { Icon: Phone,  title: "Telephone", lines: [site.phone],  href: site.whatsappUrl },
              { Icon: Mail,   title: "Email",     lines: [site.email],  href: `mailto:${site.email}` },
              { Icon: Clock,  title: "Hours",     lines: ["Mon – Sat · 9:30 AM – 6:30 PM"] },
            ].map(({ Icon, title, lines, href }) => {
              const Wrap = href ? "a" : "div";
              return (
                <Wrap
                  key={title}
                  {...(href ? { href } : {})}
                  className="group flex items-start gap-4 p-4 rounded-sm border border-white/10 hover:border-gold/40 hover:bg-white/[0.02] transition-all"
                >
                  <div className="h-10 w-10 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-ink-800 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widestx text-gold/80">{title}</div>
                    {lines.map((l) => (
                      <div key={l} className="text-sm text-white/85 mt-0.5">{l}</div>
                    ))}
                  </div>
                </Wrap>
              );
            })}
          </div>
        </motion.div>

        {/* Right – form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={onSubmit}
            className="relative bg-gradient-to-br from-ink-800/80 to-ink-700/60 backdrop-blur-xl border border-gold/20 rounded-sm p-8 md:p-10 shadow-ink"
          >
            <div className="absolute -top-px left-0 right-0 h-px bg-gold-gradient" />
            <h3 className="font-serif text-2xl md:text-3xl mb-1">Request a Consultation</h3>
            <p className="text-white/55 text-sm mb-8">All conversations are privileged and confidential.</p>

            <div className="grid md:grid-cols-2 gap-5">
              <Field name="name"  label="Full Name" required placeholder="e.g. Hassan Rai" />
              <Field name="phone" label="Phone"     required placeholder="+92 3xx xxxxxxx" type="tel" />
              <Field name="email" label="Email"     required placeholder="you@example.com" type="email" className="md:col-span-2" />
              <div className="md:col-span-2">
                <Label>Matter Type</Label>
                <select
                  name="matter"
                  required
                  defaultValue=""
                  className="w-full bg-ink-900/60 border border-white/10 focus:border-gold/60 outline-none text-white/90 text-sm px-4 py-3 rounded-sm transition-colors"
                >
                  <option value="" disabled>Select an area</option>
                  {["Civil","Criminal","Corporate","Family","Tax","Property","Other"].map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <Label>Brief Description</Label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your matter…"
                  className="w-full bg-ink-900/60 border border-white/10 focus:border-gold/60 outline-none text-white/90 text-sm px-4 py-3 rounded-sm transition-colors resize-none placeholder:text-white/30"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-8 group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gold-gradient px-8 py-3.5 text-sm uppercase tracking-widest text-ink-900 font-medium shadow-gold disabled:opacity-60 transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              <span>{status === "sent" ? "Message Sent" : status === "sending" ? "Sending…" : "Send Inquiry"}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-[11px] text-white/40 mt-4 leading-relaxed">
              By submitting, you agree to be contacted regarding your inquiry. No attorney-client
              relationship is formed until a written engagement is signed.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-[11px] uppercase tracking-widestx text-gold/80 mb-2">{children}</label>;
}

function Field({
  name, label, type = "text", placeholder, required, className = "",
}: {
  name: string; label: string; type?: string; placeholder?: string; required?: boolean; className?: string;
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-ink-900/60 border border-white/10 focus:border-gold/60 outline-none text-white/90 text-sm px-4 py-3 rounded-sm transition-colors placeholder:text-white/30"
      />
    </div>
  );
}
