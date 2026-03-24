import { motion } from "framer-motion";
import { useState } from "react";
import { Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle, Youtube, ArrowRight, Zap } from "lucide-react";
import { QuoteModal } from "../components/QuoteModal";

const WHATSAPP = "919777005033";

const IndiaFlag = ({ size = 16 }: { size?: number }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", width: size, height: Math.round(size * 0.67), borderRadius: 2, overflow: "hidden", flexShrink: 0, verticalAlign: "middle" }}>
    <span style={{ flex: 1, background: "#FF9933", display: "block" }} />
    <span style={{ flex: 1, background: "#ffffff", display: "block" }} />
    <span style={{ flex: 1, background: "#138808", display: "block" }} />
  </span>
);

/* ─────────────────────────────────────────────────────────
   Pre-footer CTA Strip
───────────────────────────────────────────────────────── */
function PreFooterCTA() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <>
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <div className="relative overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-0 -mb-1">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#071828] via-[#0a2440] to-[#071828]" />
        <div className="absolute inset-0 svg-grid opacity-20" />
        {/* Glow orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(0,242,255,0.12)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(255,153,51,0.08)" }} />
        {/* India flag accent top */}
        <div className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg,#FF9933 33.3%,#fff 33.3% 66.6%,#22c55e 66.6%)" }} />

        <div className="relative z-10 px-6 py-12 sm:py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF9933]/40 text-[#FF9933] text-xs font-medium mb-5"
            style={{ background: "rgba(255,153,51,0.08)" }}>
            <IndiaFlag size={14} /> Start Your Digital Journey Today
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            Ready to Digitize Your<br />
            <span className="text-[#00F2FF]">Business?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-white/55 text-base max-w-md mx-auto mb-8">
            Get a free custom roadmap in 2 hours. No commitment, no agency fees — just a clear path forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <motion.button
              onClick={() => setQuoteOpen(true)}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{ background: "#00F2FF", color: "#0A192F", boxShadow: "0 0 24px rgba(0,242,255,0.35)" }}>
              Get Smart Quote <ArrowRight size={14} />
            </motion.button>
            <motion.a
              href={`https://wa.me/${WHATSAPP}?text=Hi%20Vextor!%20I%20want%20to%20learn%20more%20about%20your%20services.`}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white border border-white/15 hover:border-[#25D366]/50 transition-colors"
              style={{ background: "rgba(37,211,102,0.1)" }}>
              <MessageCircle size={14} style={{ color: "#25D366" }} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Footer
───────────────────────────────────────────────────────── */
export function Footer() {
  const handleNav = (href: string) => {
    if (!href || href === "#") return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <PreFooterCTA />

      <footer className="relative border-t border-border/40 mt-0 overflow-hidden"
        style={{ background: "linear-gradient(180deg,#071828 0%,#050f1c 100%)" }}>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 svg-grid opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">

          {/* ── 4-column grid ──────────────────────────────── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-3 group">
                <img src="/logo.png" alt="Vextor" className="h-16 w-16 object-contain neon-logo-glow" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold leading-none"
                    style={{ fontFamily: "'Sora', sans-serif", background: "linear-gradient(135deg,#00F2FF,#fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Vextor
                  </span>
                  <span className="text-[10px] font-semibold text-muted-foreground/80 tracking-widest uppercase mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Technologies
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Enterprise-grade software at SME-friendly prices. Building India's tech backbone for Vikshit Bharat 2047.
              </p>

              {/* Made in India badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-5"
                style={{ background: "rgba(255,153,51,0.08)", border: "1px solid rgba(255,153,51,0.2)" }}>
                <IndiaFlag size={14} />
                <span className="text-[10px] font-semibold text-[#FF9933]">Proudly Made in India</span>
              </div>

              {/* Social icons */}
              <div className="flex gap-2">
                {[
                  { Icon: Linkedin, href: "#", label: "LinkedIn" },
                  { Icon: Instagram, href: "#", label: "Instagram" },
                  { Icon: Youtube, href: "#", label: "YouTube" },
                  { Icon: MessageCircle, href: `https://wa.me/${WHATSAPP}`, label: "WhatsApp", color: "#25D366" },
                ].map(({ Icon, href, label, color }) => (
                  <motion.a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer" aria-label={label}
                    whileHover={{ scale: 1.12, y: -2 }}
                    className="w-8 h-8 rounded-lg glass border border-white/8 flex items-center justify-center text-muted-foreground hover:text-[#00F2FF] transition-colors"
                    style={color ? { borderColor: `${color}30` } : {}}>
                    <Icon size={13} style={color ? { color } : {}} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-foreground" style={{ fontFamily: "'Sora', sans-serif" }}>
                Services
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Workflow Automation",
                  "Mobile App Development",
                  "Web Development",
                  "Cloud Infrastructure",
                  "AI Integration",
                  "Social Marketing",
                ].map(item => (
                  <li key={item}>
                    <button onClick={() => handleNav("#services")}
                      className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#00F2FF] transition-colors text-left">
                      <span className="w-1 h-1 rounded-full bg-[#00F2FF]/30 group-hover:bg-[#00F2FF] transition-colors flex-shrink-0" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-foreground" style={{ fontFamily: "'Sora', sans-serif" }}>
                Company
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "SME Advantage", scroll: "#pricing" },
                  { label: "2047 Vision", scroll: "#pricing" },
                  { label: "Get Quote", scroll: "#contact" },
                ].map(item => (
                  <li key={item.label}>
                    <button onClick={() => handleNav(item.scroll)}
                      className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#00F2FF] transition-colors text-left">
                      <span className="w-1 h-1 rounded-full bg-[#00F2FF]/30 group-hover:bg-[#00F2FF] transition-colors flex-shrink-0" />
                      {item.label}
                    </button>
                  </li>
                ))}
                {[
                  { label: "About Us", path: "/about" },
                  { label: "Privacy Policy", path: "/privacy" },
                  { label: "Terms of Use", path: "/terms" },
                ].map(item => (
                  <li key={item.label}>
                    <a href={item.path}
                      className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#00F2FF] transition-colors">
                      <span className="w-1 h-1 rounded-full bg-[#00F2FF]/30 group-hover:bg-[#00F2FF] transition-colors flex-shrink-0" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-foreground" style={{ fontFamily: "'Sora', sans-serif" }}>
                Get in Touch
              </h4>
              <ul className="space-y-3 mb-5">
                {[
                  { Icon: Phone, value: "+91 97770 05033", href: "tel:+919777005033" },
                  { Icon: Mail, value: "hello@vextor.in", href: "mailto:hello@vextor.in" },
                  { Icon: MapPin, value: "India — Serving SMEs Nationwide", href: null },
                ].map(({ Icon, value, href }) => (
                  <li key={value}>
                    {href ? (
                      <a href={href}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground hover:text-[#00F2FF] transition-colors group">
                        <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "rgba(0,242,255,0.08)", border: "1px solid rgba(0,242,255,0.15)" }}>
                          <Icon size={11} className="text-[#00F2FF]" />
                        </div>
                        {value}
                      </a>
                    ) : (
                      <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "rgba(0,242,255,0.08)", border: "1px solid rgba(0,242,255,0.15)" }}>
                          <Icon size={11} className="text-[#00F2FF]" />
                        </div>
                        {value}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* WhatsApp CTA */}
              <motion.a
                href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                style={{ background: "linear-gradient(135deg,#25D366,#128C7E)", boxShadow: "0 0 16px rgba(37,211,102,0.2)" }}>
                <MessageCircle size={14} />
                WhatsApp Us Now
              </motion.a>
            </div>
          </div>

          {/* ── Tech stack strip ───────────────────────────── */}
          <div className="py-5 border-y border-white/5 mb-6">
            <div className="flex flex-wrap items-center gap-4 justify-center">
              {/* n8n */}
              <motion.div whileHover={{ scale: 1.1 }} title="n8n" className="flex flex-col items-center gap-1 cursor-default">
                <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#FF6600" opacity="0.15" />
                  <circle cx="10" cy="20" r="4" fill="#FF6600" />
                  <circle cx="30" cy="20" r="4" fill="#FF6600" />
                  <circle cx="20" cy="12" r="3.5" fill="#FF6600" />
                  <circle cx="20" cy="28" r="3.5" fill="#FF6600" />
                  <line x1="14" y1="20" x2="26" y2="20" stroke="#FF6600" strokeWidth="2" />
                  <line x1="20" y1="15.5" x2="20" y2="24.5" stroke="#FF6600" strokeWidth="2" />
                </svg>
                <span className="text-[9px] font-semibold" style={{ color: "#FF6600" }}>n8n</span>
              </motion.div>
              {/* Flutter */}
              <motion.div whileHover={{ scale: 1.1 }} title="Flutter" className="flex flex-col items-center gap-1 cursor-default">
                <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#54C5F8" opacity="0.12" />
                  <polygon points="8,20 18,8 28,8 18,20" fill="#54C5F8" />
                  <polygon points="18,20 28,8 38,20 28,32" fill="#01579B" opacity="0.7" />
                  <polygon points="18,20 28,32 18,32 13,26" fill="#29B6F6" />
                </svg>
                <span className="text-[9px] font-semibold" style={{ color: "#54C5F8" }}>Flutter</span>
              </motion.div>
              {/* Next.js */}
              <motion.div whileHover={{ scale: 1.1 }} title="Next.js 15" className="flex flex-col items-center gap-1 cursor-default">
                <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#ffffff" opacity="0.08" />
                  <circle cx="20" cy="20" r="14" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
                  <text x="20" y="26" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#ffffff" fontFamily="sans-serif">N</text>
                </svg>
                <span className="text-[9px] font-semibold text-white/70">Next.js</span>
              </motion.div>
              {/* React */}
              <motion.div whileHover={{ scale: 1.1 }} title="React 18" className="flex flex-col items-center gap-1 cursor-default">
                <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#61DAFB" opacity="0.1" />
                  <circle cx="20" cy="20" r="3" fill="#61DAFB" />
                  <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
                  <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)" />
                  <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)" />
                </svg>
                <span className="text-[9px] font-semibold" style={{ color: "#61DAFB" }}>React</span>
              </motion.div>
              {/* Docker */}
              <motion.div whileHover={{ scale: 1.1 }} title="Docker" className="flex flex-col items-center gap-1 cursor-default">
                <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#2496ED" opacity="0.12" />
                  <rect x="7" y="18" width="5" height="4" rx="0.5" fill="#2496ED" />
                  <rect x="13" y="18" width="5" height="4" rx="0.5" fill="#2496ED" />
                  <rect x="19" y="18" width="5" height="4" rx="0.5" fill="#2496ED" />
                  <rect x="13" y="12" width="5" height="4" rx="0.5" fill="#2496ED" />
                  <rect x="19" y="12" width="5" height="4" rx="0.5" fill="#2496ED" />
                  <rect x="25" y="18" width="5" height="4" rx="0.5" fill="#2496ED" />
                  <path d="M6 23.5 C8 27 14 28 20 26 C26 24 32 22 34 23.5" stroke="#2496ED" strokeWidth="1.5" fill="none" />
                </svg>
                <span className="text-[9px] font-semibold" style={{ color: "#2496ED" }}>Docker</span>
              </motion.div>
              {/* PostgreSQL */}
              <motion.div whileHover={{ scale: 1.1 }} title="PostgreSQL" className="flex flex-col items-center gap-1 cursor-default">
                <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#336791" opacity="0.15" />
                  <ellipse cx="20" cy="13" rx="10" ry="5" stroke="#336791" strokeWidth="1.8" fill="none" />
                  <path d="M10 13 L10 27 Q10 32 20 32 Q30 32 30 27 L30 13" stroke="#336791" strokeWidth="1.8" fill="none" />
                  <path d="M30 20 Q35 18 34 13" stroke="#336791" strokeWidth="1.5" fill="none" />
                  <line x1="20" y1="18" x2="20" y2="32" stroke="#336791" strokeWidth="1.2" strokeDasharray="2 2" />
                </svg>
                <span className="text-[9px] font-semibold" style={{ color: "#336791" }}>Postgres</span>
              </motion.div>
              {/* Framer Motion */}
              <motion.div whileHover={{ scale: 1.1 }} title="Framer Motion" className="flex flex-col items-center gap-1 cursor-default">
                <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#0055FF" opacity="0.12" />
                  <polygon points="8,8 32,8 32,21 8,21" fill="#0055FF" />
                  <polygon points="8,21 20,21 8,34" fill="#0055FF" opacity="0.7" />
                  <polygon points="20,21 32,21 20,34" fill="#0055FF" opacity="0.4" />
                </svg>
                <span className="text-[9px] font-semibold" style={{ color: "#0055FF" }}>Framer</span>
              </motion.div>
              {/* AI / OpenAI */}
              <motion.div whileHover={{ scale: 1.1 }} title="AI-Powered" className="flex flex-col items-center gap-1 cursor-default">
                <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#00F2FF" opacity="0.1" />
                  <path d="M20 6 L22.5 14 L30 11 L25 18 L32 22 L24 22 L26 30 L20 25 L14 30 L16 22 L8 22 L15 18 L10 11 L17.5 14 Z" fill="none" stroke="#00F2FF" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="20" cy="20" r="3" fill="#00F2FF" />
                </svg>
                <span className="text-[9px] font-semibold" style={{ color: "#00F2FF" }}>AI</span>
              </motion.div>
            </div>
          </div>

          {/* ── Bottom bar ─────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground/60 text-center sm:text-left">
              © 2026 Vextor Technologies. All rights reserved.
            </p>

            {/* Centre: India flag */}
            <div className="flex items-center gap-1.5">
              <IndiaFlag size={14} />
              <span className="text-[10px] text-muted-foreground/50">Building Vikshit Bharat 2047</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
              <Zap size={10} className="text-[#00F2FF]" />
              Built with AI-augmented workflows
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
