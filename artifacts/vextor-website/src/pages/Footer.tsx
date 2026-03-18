import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle, Youtube, ArrowRight, Zap } from "lucide-react";

const WHATSAPP = "919999999999";

/* ─────────────────────────────────────────────────────────
   Pre-footer CTA Strip
───────────────────────────────────────────────────────── */
function PreFooterCTA() {
  return (
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
          🇮🇳 Start Your Digital Journey Today
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
          <motion.a href="#contact" onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            style={{ background: "#00F2FF", color: "#0A192F", boxShadow: "0 0 24px rgba(0,242,255,0.35)" }}>
            Get Smart Quote <ArrowRight size={14} />
          </motion.a>
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
              <div className="flex items-center gap-2.5 mb-3">
                <img src="/logo.png" alt="Vextor" className="h-9 w-9 object-contain" />
                <span className="text-xl font-bold"
                  style={{ fontFamily: "'Sora', sans-serif", background: "linear-gradient(135deg,#00F2FF,#fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Vextor
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Enterprise-grade software at SME-friendly prices. Building India's tech backbone for Vikshit Bharat 2047.
              </p>

              {/* Made in India badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-5"
                style={{ background: "rgba(255,153,51,0.08)", border: "1px solid rgba(255,153,51,0.2)" }}>
                <span style={{ fontSize: 12 }}>🇮🇳</span>
                <span className="text-[10px] font-semibold text-[#FF9933]">Proudly Made in India</span>
              </div>

              {/* Social icons */}
              <div className="flex gap-2">
                {[
                  { Icon: Linkedin,  href: "#",  label: "LinkedIn"  },
                  { Icon: Instagram, href: "#",  label: "Instagram" },
                  { Icon: Youtube,   href: "#",  label: "YouTube"   },
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
                  { label: "About Us",       href: "#home"    },
                  { label: "SME Advantage",  href: "#pricing" },
                  { label: "2047 Vision",    href: "#pricing" },
                  { label: "Get Quote",      href: "#contact" },
                  { label: "Privacy Policy", href: "#"        },
                  { label: "Terms of Use",   href: "#"        },
                ].map(item => (
                  <li key={item.label}>
                    <button onClick={() => handleNav(item.href)}
                      className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#00F2FF] transition-colors text-left">
                      <span className="w-1 h-1 rounded-full bg-[#00F2FF]/30 group-hover:bg-[#00F2FF] transition-colors flex-shrink-0" />
                      {item.label}
                    </button>
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
                  { Icon: Phone,  value: "+91 99999 99999",            href: "tel:+919999999999"       },
                  { Icon: Mail,   value: "hello@vextor.in",            href: "mailto:hello@vextor.in"  },
                  { Icon: MapPin, value: "India — Serving SMEs Nationwide", href: null                 },
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
            <div className="flex flex-wrap items-center gap-2 justify-center">
              <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest mr-2">Built with</span>
              {[
                { label: "n8n",         clr: "#FF6600" },
                { label: "Flutter",     clr: "#54C5F8" },
                { label: "Next.js 15",  clr: "#ffffff" },
                { label: "React 18",    clr: "#61DAFB" },
                { label: "Docker",      clr: "#2496ED" },
                { label: "PostgreSQL",  clr: "#336791" },
                { label: "Framer",      clr: "#0055FF" },
                { label: "AI",          clr: "#00F2FF" },
              ].map(t => (
                <motion.span key={t.label}
                  whileHover={{ scale: 1.08 }}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-semibold cursor-default select-none"
                  style={{ background: `${t.clr}12`, color: t.clr, border: `1px solid ${t.clr}25` }}>
                  {t.label}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ── Bottom bar ─────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground/60 text-center sm:text-left">
              © 2026 Vextor Technologies Pvt. Ltd. All rights reserved.
            </p>

            {/* Centre: India flag */}
            <div className="flex items-center gap-1.5">
              <span style={{ display: "inline-block", width: 14, height: 8, background: "linear-gradient(#FF9933 33%,#fff 33% 66%,#22c55e 66%)", borderRadius: 2 }} />
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
