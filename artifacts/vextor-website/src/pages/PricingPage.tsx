import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Zap, Cloud, TrendingDown, CheckCircle } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

/* ─────────────────────────────────────────────────────────
   Countdown to Independence Day 2047
───────────────────────────────────────────────────────── */
function CountdownTimer() {
  const target = new Date("2047-08-15T00:00:00");
  const getTimeLeft = () => {
    const diff = target.getTime() - Date.now();
    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };
  const [t, setT] = useState(getTimeLeft());
  useEffect(() => { const id = setInterval(() => setT(getTimeLeft()), 1000); return () => clearInterval(id); }, []);
  return (
    <div className="flex gap-3 sm:gap-5 justify-center">
      {[["days","Days"],["hours","Hrs"],["minutes","Min"],["seconds","Sec"]].map(([k, lbl]) => (
        <div key={k} className="flex flex-col items-center">
          <motion.div key={t[k as keyof typeof t]}
            initial={{ scale: 1.15, opacity: 0.7 }} animate={{ scale: 1, opacity: 1 }}
            className="w-16 sm:w-20 h-16 sm:h-20 glass rounded-2xl border border-[#00F2FF]/30 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold tabular-nums text-[#00F2FF]"
              style={{ fontFamily: "'Sora', sans-serif" }}>
              {String(t[k as keyof typeof t]).padStart(2, "0")}
            </span>
          </motion.div>
          <span className="text-[10px] text-muted-foreground mt-2">{lbl}</span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Animated stat counter (counts up on scroll-into-view)
───────────────────────────────────────────────────────── */
function AnimatedCounter({ target, suffix, prefix = "", label, color, sublabel = "" }: {
  target: number; suffix: string; prefix?: string;
  label: string; color: string; sublabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1500;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <div ref={ref}
      className="glass rounded-2xl p-5 border border-white/8 text-center hover:border-white/15 transition-colors group relative overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${color}10 0%, transparent 70%)` }} />
      <div className="text-3xl sm:text-4xl font-bold mb-1 relative"
        style={{ color, fontFamily: "'Sora', sans-serif" }}>
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs font-semibold text-foreground/80 mb-0.5">{label}</div>
      {sublabel && <div className="text-[10px] text-muted-foreground">{sublabel}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Card mini-animations
───────────────────────────────────────────────────────── */
function VibeCodingAnim() {
  const lines = [
    { text: "$ vextor create --template=erp", clr: "#94a3b8" },
    { text: "⚡ AI-augmented build in progress…", clr: "#FF9933" },
    { text: "✅ Deployed to production — Week 3", clr: "#22c55e" },
  ];
  return (
    <div className="rounded-xl overflow-hidden border border-white/8" style={{ background: "rgba(4,12,28,0.9)", fontFamily: "monospace" }}>
      {/* Terminal chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
        {["#ef4444","#f59e0b","#22c55e"].map(c => <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />)}
        <span className="text-[9px] text-slate-500 ml-2">vextor.terminal — bash</span>
      </div>
      {/* Code lines */}
      <div className="p-3 space-y-2 min-h-[60px]">
        {lines.map((l, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }} transition={{ delay: i * 0.45, duration: 0.3 }}
            style={{ fontSize: 8.5, color: l.clr, lineHeight: 1.5 }}>{l.text}
          </motion.div>
        ))}
        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.9, repeat: Infinity }}
          style={{ fontSize: 9, color: "#00F2FF", display: "inline-block" }}>█</motion.span>
      </div>
      {/* Delivery comparison */}
      <div className="flex gap-2 px-3 pb-3">
        <div className="flex-1 text-center rounded-lg py-1.5" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
          <div style={{ fontSize: 7, color: "#ef4444" }}>Agency</div>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#ef4444" }}>12 wks</div>
        </div>
        <div className="flex items-center text-slate-500" style={{ fontSize: 9 }}>vs</div>
        <div className="flex-1 text-center rounded-lg py-1.5" style={{ background: "rgba(0,242,255,0.08)", border: "1px solid rgba(0,242,255,0.2)" }}>
          <div style={{ fontSize: 7, color: "#00F2FF" }}>Vextor</div>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#00F2FF" }}>3 wks</div>
        </div>
      </div>
    </div>
  );
}

function CloudCostAnim() {
  const items = [
    { label: "Traditional Setup", amt: "₹2,00,000", pct: 100, clr: "#ef4444" },
    { label: "Vextor Cloud",      amt: "₹20,000",   pct: 10,  clr: "#00F2FF" },
  ];
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i}>
          <div className="flex justify-between mb-1.5">
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: item.clr }}>{item.amt}</span>
          </div>
          <div className="rounded-full overflow-hidden" style={{ height: 9, background: "rgba(255,255,255,0.05)" }}>
            <motion.div style={{ height: "100%", background: item.clr, borderRadius: 20 }}
              initial={{ width: 0 }} whileInView={{ width: `${item.pct}%` }}
              viewport={{ once: false }} transition={{ delay: i * 0.35, duration: 1, ease: "easeOut" }} />
          </div>
        </div>
      ))}
      <motion.div className="flex items-center gap-2 rounded-xl p-2.5"
        style={{ background: "rgba(0,242,255,0.07)", border: "1px solid rgba(0,242,255,0.18)" }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.8 }}>
        <span style={{ fontSize: 14 }}>💡</span>
        <span style={{ fontSize: 9.5, color: "#00F2FF", fontWeight: 600 }}>You save ₹1,80,000 — 90% infra cost</span>
      </motion.div>
    </div>
  );
}

function LeanOpsAnim() {
  const trad = [
    { label: "Rent & Office", pct: 25, clr: "#ef4444" },
    { label: "Agency Margin", pct: 35, clr: "#f97316" },
    { label: "Actual Dev",    pct: 40, clr: "#22c55e" },
  ];
  return (
    <div className="space-y-3">
      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.38)", textTransform: "uppercase", letterSpacing: 0.8 }}>Where your ₹ goes</div>
      {/* Traditional */}
      <div>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", marginBottom: 5 }}>Traditional Agency</div>
        <div className="flex rounded-lg overflow-hidden" style={{ height: 22 }}>
          {trad.map((t, i) => (
            <motion.div key={i} title={t.label}
              style={{ background: t.clr, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
              initial={{ width: 0 }} whileInView={{ width: `${t.pct}%` }}
              viewport={{ once: false }} transition={{ delay: i * 0.18, duration: 0.6 }}>
              <span style={{ fontSize: 7.5, color: "#fff", fontWeight: 700, whiteSpace: "nowrap", padding: "0 3px" }}>{t.pct}%</span>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Vextor */}
      <div>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", marginBottom: 5 }}>Vextor</div>
        <motion.div className="rounded-lg flex items-center justify-center" style={{ height: 22, background: "linear-gradient(90deg,#00F2FF,#0066cc)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.55 }}>
          <span style={{ fontSize: 8.5, color: "#000", fontWeight: 800 }}>100% goes to Development</span>
        </motion.div>
      </div>
      {/* Legend */}
      <div className="flex flex-wrap gap-2.5 pt-1">
        {trad.map(t => (
          <div key={t.label} className="flex items-center gap-1">
            <div style={{ width: 7, height: 7, borderRadius: 2, background: t.clr }} />
            <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.38)" }}>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   4-step process timeline
───────────────────────────────────────────────────────── */
function ProcessTimeline() {
  const steps = [
    { icon: "🎯", num: "01", title: "Discovery Call",    sub: "Day 1–2",  clr: "#00F2FF",
      desc: "Free consultation to map your business workflows, pain points and tech goals." },
    { icon: "📐", num: "02", title: "Design & Plan",     sub: "Week 1",   clr: "#FF9933",
      desc: "UI wireframes, architecture diagram, n8n automation blueprint & project plan." },
    { icon: "⚡", num: "03", title: "Build & Test",      sub: "Week 2–3", clr: "#22c55e",
      desc: "Agile sprints with daily demos, automated testing on staging, and your feedback." },
    { icon: "🚀", num: "04", title: "Launch & Support",  sub: "Week 4+",  clr: "#a855f7",
      desc: "Production deploy, team training, and 3 months of free dedicated support." },
  ];

  return (
    <div className="relative">
      {/* Connecting dashed line — desktop */}
      <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%]" style={{ height: 1, zIndex: 0 }}>
        <motion.div className="h-full" style={{ background: "linear-gradient(90deg,#00F2FF40,#FF993340,#22c55e40,#a855f740)" }}
          initial={{ scaleX: 0, transformOrigin: "left" }} whileInView={{ scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeInOut" }} />
        {/* Animated pulse dot */}
        <motion.div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00F2FF]"
          style={{ left: 0 }}
          animate={{ left: ["0%", "100%"], opacity: [0.8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }} />
      </div>

      <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
        {steps.map((step, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center text-center relative z-10">
            {/* Icon circle */}
            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: `${step.clr}15`, border: `2px solid ${step.clr}40` }}
              animate={{ boxShadow: [`0 0 0 0 ${step.clr}50`, `0 0 0 14px ${step.clr}00`] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.55 }}>
              <span style={{ fontSize: 26 }}>{step.icon}</span>
            </motion.div>
            {/* Sub-label (duration) */}
            <div className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold mb-2"
              style={{ background: `${step.clr}15`, color: step.clr, border: `1px solid ${step.clr}35` }}>
              {step.sub}
            </div>
            <h4 className="font-bold text-base mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>{step.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Page
───────────────────────────────────────────────────────── */
export function PricingPage() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* ── Section Header ───────────────────────────────── */}
      <ScrollReveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#FF9933]/30 text-[#FF9933] text-xs font-medium mb-4">
            SME Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            Advanced Tech.{" "}
            <span className="text-[#00F2FF]">No Agency Tax.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We pass our efficiency gains directly to you — enterprise-grade software at prices every Indian SME can afford.
          </p>
        </div>
      </ScrollReveal>

      {/* ── Animated Stats Row ───────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        <AnimatedCounter target={87}  suffix="%" label="Cost Savings"       sublabel="vs traditional agency"  color="#00F2FF" />
        <AnimatedCounter target={5}   suffix="x" label="Faster Delivery"    sublabel="AI-augmented builds"    color="#FF9933" />
        <AnimatedCounter target={3}   suffix=" wks" label="Avg Project Time" sublabel="discovery to launch"  color="#22c55e" />
        <AnimatedCounter target={1}   suffix="M+" label="SME Target"        sublabel="digitized by 2047"      color="#a855f7" />
      </div>

      {/* ── Why Cards with Mini Animations ───────────────── */}
      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {[
          {
            icon: Zap, color: "#00F2FF", title: "Vibe Coding",
            desc: "We build 5× faster using AI-augmented workflows. What takes agencies 3 months, we deliver in 3 weeks.",
            saving: "5× faster delivery",
            Anim: VibeCodingAnim,
          },
          {
            icon: Cloud, color: "#FF9933", title: "Cloud Native",
            desc: "No expensive physical servers. Oracle Cloud's infrastructure at a fraction of the traditional cost.",
            saving: "90% infra savings",
            Anim: CloudCostAnim,
          },
          {
            icon: TrendingDown, color: "#00F2FF", title: "Lean Ops",
            desc: "We invest in code, not fancy offices. Every rupee you pay goes directly into building your software.",
            saving: "60% overhead cut",
            Anim: LeanOpsAnim,
          },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={item.title} delay={i * 0.15}>
              <motion.div
                className="glass rounded-2xl p-6 border border-border/50 hover:border-[#00F2FF]/30 transition-all h-full flex flex-col"
                whileHover={{ y: -4 }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-lg" style={{ fontFamily: "'Sora', sans-serif" }}>{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                {/* Mini animation */}
                <div className="mb-4 flex-1">
                  <item.Anim />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>
                  <CheckCircle size={10} />
                  {item.saving}
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* ── Cost Comparison (enhanced) ───────────────────── */}
      <div className="mb-20">
        <ScrollReveal delay={0.2}>
          <div className="glass rounded-2xl p-6 sm:p-10 border border-[#00F2FF]/20">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Real Numbers</div>
              <h3 className="text-2xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                Traditional Agency vs. <span className="text-[#00F2FF]">Vextor</span>
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Traditional */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="text-sm font-semibold text-red-400">Traditional Agency</div>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "Development",       cost: "₹8,00,000+", pct: 100 },
                    { label: "Server Setup",       cost: "₹2,00,000+", pct: 25  },
                    { label: "Annual Maintenance", cost: "₹80,000/yr", pct: 10  },
                    { label: "Agency Overhead",    cost: "₹3,00,000+", pct: 37  },
                  ].map((item, i) => (
                    <div key={item.label}
                      className="rounded-xl p-3 border border-red-500/15" style={{ background: "rgba(239,68,68,0.04)" }}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                        <span className="text-sm font-semibold text-red-400">{item.cost}</span>
                      </div>
                      <div className="rounded-full overflow-hidden" style={{ height: 4, background: "rgba(255,255,255,0.06)" }}>
                        <motion.div style={{ height: "100%", background: "#ef4444", borderRadius: 10 }}
                          initial={{ width: 0 }} whileInView={{ width: `${item.pct}%` }}
                          viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.2, duration: 0.8 }} />
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center p-3 rounded-xl"
                    style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-red-400 text-lg">₹13,80,000+</span>
                  </div>
                </div>
              </div>

              {/* Vextor */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#00F2FF]" />
                  <div className="text-sm font-semibold text-[#00F2FF]">Vextor Framework</div>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "Development",       cost: "₹1,50,000", pct: 18.75 },
                    { label: "Cloud Setup",        cost: "₹20,000",   pct: 2.5   },
                    { label: "Annual Maintenance", cost: "₹15,000/yr",pct: 1.87  },
                    { label: "Overhead",           cost: "Zero",       pct: 0     },
                  ].map((item, i) => (
                    <div key={item.label}
                      className="rounded-xl p-3 border border-[#00F2FF]/15" style={{ background: "rgba(0,242,255,0.04)" }}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                        <span className="text-sm font-semibold text-[#00F2FF]">{item.cost}</span>
                      </div>
                      <div className="rounded-full overflow-hidden" style={{ height: 4, background: "rgba(255,255,255,0.06)" }}>
                        <motion.div style={{ height: "100%", background: "#00F2FF", borderRadius: 10 }}
                          initial={{ width: 0 }} whileInView={{ width: `${item.pct}%` }}
                          viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.2, duration: 0.8 }} />
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center p-3 rounded-xl"
                    style={{ background: "rgba(0,242,255,0.1)", border: "1px solid rgba(0,242,255,0.3)" }}>
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-[#00F2FF] text-lg">₹1,85,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings callout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="mt-8 relative rounded-2xl overflow-hidden"
              style={{ background: "linear-gradient(135deg,rgba(0,242,255,0.1),rgba(255,153,51,0.07))", border: "1px solid rgba(0,242,255,0.25)" }}>
              <div className="px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Total Savings</div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#00F2FF]" style={{ fontFamily: "'Sora', sans-serif" }}>
                    ₹11,95,000 saved
                  </div>
                  <div className="text-sm text-muted-foreground mt-0.5">That's <span className="text-[#FF9933] font-semibold">87% less</span> than a traditional agency</div>
                </div>
                <div className="flex flex-col items-center sm:items-end">
                  <div className="flex gap-2 items-center mb-1">
                    <div className="w-8 h-2 rounded-full bg-red-400" />
                    <div className="text-xs text-muted-foreground">Agency — ₹13,80,000</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-1 h-2 rounded-full bg-[#00F2FF]" />
                    <div className="text-xs text-muted-foreground">Vextor — ₹1,85,000</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Process Timeline ─────────────────────────────── */}
      <div className="mb-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#22c55e]/30 text-[#22c55e] text-xs font-medium mb-4">
              How We Work
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
              From Call to Launch in <span className="text-[#00F2FF]">4 Weeks</span>
            </h3>
            <p className="text-muted-foreground mt-2 max-w-lg mx-auto text-sm">
              A transparent, milestone-driven process with daily updates. No black boxes, no surprises.
            </p>
          </div>
          <ProcessTimeline />
        </ScrollReveal>
      </div>

      {/* ── What's Included (feature grid) ──────────────── */}
      <div className="mb-20">
        <ScrollReveal>
          <div className="glass rounded-2xl p-6 sm:p-8 border border-[#FF9933]/15">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                Every Project Includes
              </h3>
              <p className="text-sm text-muted-foreground">No hidden charges. No à la carte surprises.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { icon: "🔒", label: "SSL & Security",            desc: "Bank-grade TLS + OWASP hardening" },
                { icon: "📱", label: "Mobile Responsive",          desc: "Looks perfect on every device" },
                { icon: "☁️", label: "Oracle Cloud Hosting",       desc: "99.99% uptime SLA included" },
                { icon: "🔄", label: "CI/CD Pipeline",             desc: "Auto-deploy on every commit" },
                { icon: "📊", label: "Analytics Dashboard",         desc: "Realtime business metrics" },
                { icon: "🤖", label: "n8n Workflow Engine",         desc: "Visual automation included" },
                { icon: "💾", label: "Daily Backups",              desc: "30-day point-in-time restore" },
                { icon: "🎓", label: "Team Training",              desc: "2-session onboarding included" },
                { icon: "🛠️", label: "3 Month Support",            desc: "Bug fixes & minor updates free" },
              ].map((f, i) => (
                <motion.div key={f.label}
                  initial={{ opacity: 0, scale: 0.93 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 p-3.5 rounded-xl glass border border-white/5 hover:border-[#FF9933]/20 transition-colors">
                  <span style={{ fontSize: 18, lineHeight: 1, flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div className="text-sm font-semibold">{f.label}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── 2047 Vision Banner ───────────────────────────── */}
      <ScrollReveal>
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#0d2040] to-[#0A192F]" />
          {/* Animated India flag colors glow */}
          <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: "linear-gradient(90deg,#FF9933,#FF9933,#fff,#22c55e,#22c55e)" }} />
          {/* City skyline SVG */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="cityGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#00F2FF" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              {[0,90,160,210,290,350,450,520,610,675,760,820,910,980,1090,1155].map((x, i) => {
                const heights = [150,200,120,220,160,240,180,250,200,230,170,210,150,260,180,140];
                const h = heights[i];
                return <rect key={i} x={x} y={400 - h} width={i % 3 === 0 ? 70 : i % 3 === 1 ? 55 : 40} height={h} fill="url(#cityGrad2)" />;
              })}
            </svg>
          </div>
          {/* Grid overlay */}
          <div className="absolute inset-0 svg-grid opacity-20 pointer-events-none" />
          {/* Moving particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div key={i}
              className="absolute w-1 h-1 rounded-full bg-[#00F2FF]/50"
              style={{ left: `${10 + i * 15}%`, top: "50%" }}
              animate={{ y: [-20, 20, -20], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }} />
          ))}

          {/* Content */}
          <div className="relative z-10 text-center px-6 py-16 sm:py-24">
            <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF9933]/50 text-[#FF9933] text-sm font-medium mb-6"
              style={{ background: "rgba(255,153,51,0.1)" }}>
              🇮🇳 Vikshit Bharat 2047
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Sora', sans-serif" }}>
              Target: 1 Million SMEs<br />
              <span className="text-[#00F2FF]">Digitized by 2047</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.35 }}
              className="text-white/65 text-base sm:text-lg max-w-xl mx-auto mb-10">
              A developed India needs tech-first businesses. We are committed to making that accessible for every entrepreneur — from Surat to Shillong.
            </motion.p>

            {/* Impact stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.45 }}
              className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                { val: "63M+", label: "SMEs in India today",    clr: "#FF9933" },
                { val: "6%",   label: "Tech-enabled today",     clr: "#ef4444" },
                { val: "94%",  label: "Our opportunity",        clr: "#00F2FF" },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: s.clr, fontFamily: "'Sora', sans-serif" }}>{s.val}</div>
                  <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <div className="text-xs text-white/40 mb-5 uppercase tracking-widest">Time until Independence Day 2047</div>
              <CountdownTimer />
            </motion.div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
