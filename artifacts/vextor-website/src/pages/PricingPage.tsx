import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Zap, Cloud, TrendingDown, CheckCircle } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

function CountdownTimer() {
  const target = new Date("2047-08-15T00:00:00");

  const getTimeLeft = () => {
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex gap-3 sm:gap-6 justify-center">
      {units.map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center">
          <motion.div
            key={value}
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 sm:w-20 h-16 sm:h-20 glass rounded-2xl border border-[#00F2FF]/30 flex items-center justify-center"
          >
            <span
              className="text-2xl sm:text-3xl font-bold tabular-nums text-[#00F2FF]"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {String(value).padStart(2, "0")}
            </span>
          </motion.div>
          <span className="text-xs text-muted-foreground mt-2">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function PricingPage() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#FF9933]/30 text-[#FF9933] text-xs font-medium mb-4">
            SME Advantage
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Advanced Tech.{" "}
            <span className="text-[#00F2FF]">No Agency Tax.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We pass our efficiency savings directly to you. Here's why we can offer enterprise quality at SME prices.
          </p>
        </div>
      </ScrollReveal>

      {/* Why Low Cost */}
      <div className="mb-24">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Zap,
              title: "Vibe Coding",
              desc: "We build 5x faster using AI-augmented workflows. What takes agencies 3 months, we do in 3 weeks.",
              color: "#00F2FF",
              saving: "5x faster delivery",
            },
            {
              icon: Cloud,
              title: "Cloud Native",
              desc: "No expensive physical servers or data centers. We leverage Oracle Cloud's scale to reduce your infrastructure cost.",
              color: "#FF9933",
              saving: "70% infra savings",
            },
            {
              icon: TrendingDown,
              title: "Lean Ops",
              desc: "We invest in code, not fancy offices. Our team works remotely, and every rupee goes into building better software.",
              color: "#00F2FF",
              saving: "60% overhead cut",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <motion.div
                  className="bento-card glass rounded-2xl p-6 border border-border/50 hover:border-[#00F2FF]/40 transition-all h-full"
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <Icon size={22} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
                  >
                    <CheckCircle size={10} />
                    {item.saving}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Cost comparison graphic */}
        <ScrollReveal delay={0.3}>
          <div className="glass rounded-2xl p-6 sm:p-8 border border-[#00F2FF]/20">
            <h3 className="text-center font-bold text-lg mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
              Traditional Costs vs. Vextor Efficiency
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Traditional */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-red-400 mb-3">Traditional Agency</div>
                {[
                  { label: "Development", cost: "₹8,00,000+" },
                  { label: "Server Setup", cost: "₹2,00,000+" },
                  { label: "Maintenance", cost: "₹80,000/yr" },
                  { label: "Agency Overhead", cost: "₹3,00,000+" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center p-3 rounded-xl bg-red-500/5 border border-red-500/20">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="text-sm font-semibold text-red-400">{item.cost}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center p-3 rounded-xl bg-red-500/10 border border-red-500/30">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-red-400">₹13,80,000+</span>
                </div>
              </div>

              {/* Vextor */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-[#00F2FF] mb-3">Vextor Framework</div>
                {[
                  { label: "Development", cost: "₹1,50,000" },
                  { label: "Cloud Setup", cost: "₹20,000" },
                  { label: "Maintenance", cost: "₹15,000/yr" },
                  { label: "Overhead", cost: "Zero" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center p-3 rounded-xl bg-[#00F2FF]/5 border border-[#00F2FF]/20">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="text-sm font-semibold text-[#00F2FF]">{item.cost}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#00F2FF]/10 border border-[#00F2FF]/30">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-[#00F2FF]">₹1,85,000</span>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/30 text-[#00F2FF] font-bold text-sm">
                Save up to ₹11,95,000 — 87% less cost
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 2047 Vision Banner */}
      <ScrollReveal>
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#0d2040] to-[#0A192F] ken-burns" />
          {/* City silhouette SVG */}
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="cityGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00F2FF" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* City buildings */}
              <rect x="0" y="250" width="80" height="150" fill="url(#cityGrad)" />
              <rect x="90" y="200" width="60" height="200" fill="url(#cityGrad)" />
              <rect x="160" y="280" width="40" height="120" fill="url(#cityGrad)" />
              <rect x="210" y="180" width="70" height="220" fill="url(#cityGrad)" />
              <rect x="290" y="240" width="50" height="160" fill="url(#cityGrad)" />
              <rect x="350" y="160" width="90" height="240" fill="url(#cityGrad)" />
              <rect x="450" y="220" width="60" height="180" fill="url(#cityGrad)" />
              <rect x="520" y="150" width="80" height="250" fill="url(#cityGrad)" />
              <rect x="610" y="200" width="55" height="200" fill="url(#cityGrad)" />
              <rect x="675" y="170" width="75" height="230" fill="url(#cityGrad)" />
              <rect x="760" y="230" width="50" height="170" fill="url(#cityGrad)" />
              <rect x="820" y="190" width="80" height="210" fill="url(#cityGrad)" />
              <rect x="910" y="250" width="60" height="150" fill="url(#cityGrad)" />
              <rect x="980" y="140" width="100" height="260" fill="url(#cityGrad)" />
              <rect x="1090" y="220" width="55" height="180" fill="url(#cityGrad)" />
              <rect x="1155" y="260" width="45" height="140" fill="url(#cityGrad)" />
            </svg>
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 svg-grid opacity-30" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 py-16 sm:py-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF9933]/50 text-[#FF9933] text-sm font-medium mb-8"
              style={{ background: "rgba(255,153,51,0.1)" }}
            >
              🇮🇳 Vikshit Bharat 2047
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Target: 1 Million SMEs
              <br />
              <span className="text-[#00F2FF]">Digitized by 2047</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10"
            >
              A developed India needs tech-first businesses. We are here to make that affordable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <div className="text-xs text-white/50 mb-4 uppercase tracking-widest">Time until Independence Day 2047</div>
              <CountdownTimer />
            </motion.div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
