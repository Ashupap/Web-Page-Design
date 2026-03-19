import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Server, Code2, Cloud, Lock, Target, ArrowRight } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

const IndiaFlag = ({ size = 16 }: { size?: number }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", width: size, height: Math.round(size * 0.67), borderRadius: 2, overflow: "hidden", flexShrink: 0, verticalAlign: "middle" }}>
    <span style={{ flex: 1, background: "#FF9933", display: "block" }} />
    <span style={{ flex: 1, background: "#ffffff", display: "block" }} />
    <span style={{ flex: 1, background: "#138808", display: "block" }} />
  </span>
);

/* ── India map watermark (simplified outline as digital nodes) ── */
function IndiaMapWatermark() {
  const dots = [
    [50,8],[55,12],[62,10],[68,15],[72,12],[78,18],[75,25],[80,30],[78,38],
    [82,42],[80,50],[75,58],[70,64],[65,72],[60,78],[55,82],[50,88],[45,82],
    [40,75],[35,68],[30,62],[25,55],[22,48],[20,40],[22,33],[25,26],[30,20],
    [35,15],[42,10],[48,8],[53,6],[45,18],[50,22],[55,18],[60,24],[65,20],
    [70,28],[68,35],[65,42],[60,50],[55,55],[50,60],[45,55],[40,48],[38,40],
    [40,32],[45,25],[52,20],[58,28],[62,35],[58,42],[52,48],[48,42],[44,36],
    [48,30],[55,32],[58,38],[54,44],[50,38],[46,30],
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.03 }}
    >
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="0.8" fill="#00F2FF" />
      ))}
      {dots.slice(0, dots.length - 1).map(([cx, cy], i) => {
        const next = dots[i + 1];
        if (!next) return null;
        const dist = Math.hypot(next[0] - cx, next[1] - cy);
        if (dist > 15) return null;
        return <line key={`l${i}`} x1={cx} y1={cy} x2={next[0]} y2={next[1]} stroke="#00F2FF" strokeWidth="0.2" />;
      })}
    </svg>
  );
}

/* ── SVG Signature Animation ── */
function SignatureAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} className="mt-6 flex flex-col items-start gap-1">
      <svg width="220" height="55" viewBox="0 0 220 55" fill="none">
        <motion.path
          d="M8,38 C15,15 28,45 40,28 C50,14 58,42 70,32 C80,22 88,40 100,34 C112,28 118,42 130,36 L138,48"
          stroke="#00F2FF"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.path
          d="M145,42 C152,30 162,48 172,38 C180,28 188,44 198,40 L208,35"
          stroke="#00F2FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1.8 }}
        />
        <motion.line
          x1="8" y1="50" x2="210" y2="50"
          stroke="#00F2FF"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.6, delay: 3.0 }}
        />
      </svg>
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 3.2, duration: 0.5 }}
        className="text-sm font-semibold text-[#00F2FF]"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        Founder, Vextor.in
      </motion.p>
    </div>
  );
}

/* ── Founder Portrait Placeholder ── */
function FounderPortrait({ scrollY }: { scrollY: import("framer-motion").MotionValue<number> }) {
  const y = useTransform(scrollY, [0, 1000], [0, -40]);
  return (
    <motion.div style={{ y }} className="relative flex-shrink-0">
      <div className="relative w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 mx-auto">
        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl blur-2xl" style={{ background: "rgba(0,242,255,0.12)" }} />
        {/* Card */}
        <div
          className="relative w-full h-full rounded-2xl overflow-hidden flex items-end justify-center"
          style={{ background: "linear-gradient(135deg,#071828 0%,#0d2540 50%,#071828 100%)", border: "1px solid rgba(0,242,255,0.2)" }}
        >
          {/* Subtle grid inside */}
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "linear-gradient(rgba(0,242,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,242,255,0.05) 1px,transparent 1px)", backgroundSize: "24px 24px" }} />

          {/* Person silhouette */}
          <svg viewBox="0 0 120 180" className="w-48 h-64 relative z-10" fill="none">
            {/* Head */}
            <circle cx="60" cy="42" r="28" fill="url(#personGrad)" />
            {/* Body / suit */}
            <path d="M20,100 Q18,170 20,175 L100,175 Q102,170 100,100 Q85,82 60,80 Q35,82 20,100Z" fill="url(#suitGrad)" />
            {/* Collar */}
            <path d="M48,80 L60,105 L72,80 Q65,86 60,88 Q55,86 48,80Z" fill="#0A192F" />
            {/* Tie */}
            <path d="M58,90 L62,90 L65,120 L60,130 L55,120Z" fill="#00F2FF" opacity="0.8" />
            <defs>
              <linearGradient id="personGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e3a5f" />
                <stop offset="100%" stopColor="#0d2540" />
              </linearGradient>
              <linearGradient id="suitGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#112240" />
                <stop offset="100%" stopColor="#0a1628" />
              </linearGradient>
            </defs>
          </svg>

          {/* Bottom name tag */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
            style={{ background: "linear-gradient(to top, rgba(7,24,40,0.95), transparent)" }}>
            <p className="text-xs font-bold text-[#00F2FF]" style={{ fontFamily: "'Sora', sans-serif" }}>Founder & CEO</p>
            <p className="text-[10px] text-white/50">Vextor Technologies Pvt. Ltd.</p>
          </div>
        </div>

        {/* Floating badge */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -right-3 px-2.5 py-1.5 rounded-xl text-[10px] font-bold"
          style={{ background: "rgba(0,242,255,0.12)", border: "1px solid rgba(0,242,255,0.3)", color: "#00F2FF", backdropFilter: "blur(8px)" }}
        >
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FF] animate-pulse" />
            India-First
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Command Center Roles ── */
const roles = [
  { Icon: Code2,   title: "Software Architects",       desc: "Designing scalable, future-proof systems that grow as you do.", color: "#00F2FF" },
  { Icon: Server,  title: "Infrastructure Engineers",  desc: "Building automated workflows that replace manual 'Excel-hell'.", color: "#FF9933" },
  { Icon: Zap,     title: "Full-Stack Developers",     desc: "Utilizing Vibe Coding and AI-augmented speed for rapid, high-quality deployment.", color: "#a855f7" },
  { Icon: Shield,  title: "Security Researchers",      desc: "Ensuring your business data is protected with bank-grade security protocols.", color: "#22c55e" },
  { Icon: Cloud,   title: "Cloud Engineers",           desc: "Managing global-scale hosting on an SME-friendly budget.", color: "#3b82f6" },
  { Icon: Lock,    title: "DevOps Specialists",        desc: "Continuous deployment pipelines so your product ships without downtime.", color: "#f97316" },
];

/* ── Main Page ── */
export function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  return (
    <div ref={containerRef} className="min-h-screen bg-background pt-16">

      {/* ── Hero Banner ──────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 svg-grid opacity-20" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(0,242,255,0.06) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-medium mb-6"
          >
            <IndiaFlag size={14} /> Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Architecting the{" "}
            <span className="text-[#00F2FF]">Digital Foundation</span>{" "}
            of a Developed India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Vextor.in was born from a singular mission: to ensure that the technology powering India's smallest businesses
            is as powerful as the technology powering global giants.
          </motion.p>
        </div>
      </section>

      {/* ── Founder's Message ────────────────────────────── */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* India map watermark */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <IndiaMapWatermark />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#FF9933]/30 text-[#FF9933] text-xs font-medium mb-4">
                A Message from the Founder
              </div>
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={0.1}>
            <div className="relative mb-14 text-center px-4 sm:px-12">
              <span
                className="absolute -top-6 left-0 sm:left-6 text-8xl leading-none select-none"
                style={{ color: "#00F2FF", opacity: 0.35, fontFamily: "Georgia, serif" }}
              >"</span>
              <p
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight relative z-10 px-6"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Technology is not a luxury;{" "}
                <span className="text-[#00F2FF]">it's the engine of India's future.</span>
              </p>
              <span
                className="absolute -bottom-10 right-0 sm:right-6 text-8xl leading-none select-none"
                style={{ color: "#00F2FF", opacity: 0.35, fontFamily: "Georgia, serif" }}
              >"</span>
            </div>
          </ScrollReveal>

          {/* Two column: portrait + letter */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mt-10">

            {/* Portrait */}
            <ScrollReveal delay={0.15}>
              <FounderPortrait scrollY={scrollY} />
            </ScrollReveal>

            {/* Letter */}
            <ScrollReveal delay={0.2} className="flex-1">
              <div
                className="relative rounded-2xl p-7 sm:p-10"
                style={{ background: "rgba(10,25,47,0.6)", border: "1px solid rgba(0,242,255,0.12)", backdropFilter: "blur(12px)" }}
              >
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    I started <span className="text-[#00F2FF] font-semibold">Vextor.in</span> with a simple observation:
                    India's SMEs are the hardest-working entrepreneurs in the world, yet they are often left behind in the digital race.
                    While large corporations have access to elite architects and multi-million dollar infrastructure, our local businesses
                    are often stuck between expensive agencies they can't afford and unreliable freelancers who can't scale.
                  </p>
                  <p>
                    At Vextor, we've changed the equation. We've built a{" "}
                    <span className="text-white font-semibold">'Command Center'</span> of elite Software Architects,
                    Security Researchers, and Infrastructure Engineers who share a single obsession —{" "}
                    <span className="text-[#FF9933] font-semibold">Efficiency</span>.
                    By utilizing modern <span className="text-white font-semibold">Vibe Coding</span> and AI-augmented workflows,
                    we've stripped away the corporate 'Agency Tax' to provide you with bank-grade technology at a fraction
                    of the traditional cost.
                  </p>
                  <p>
                    Our mission is bigger than just building apps. We are building the{" "}
                    <span className="text-white font-semibold">digital backbone</span> for a{" "}
                    <span className="text-[#FF9933] font-semibold">Vikshit Bharat by 2047</span>. When your business grows,
                    India grows. We are here to ensure that your trajectory is precise, your foundation is solid,
                    and your growth is unstoppable.
                  </p>
                  <p className="text-white font-medium italic">Let's build the future, together.</p>
                </div>

                <SignatureAnimation />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Command Center ───────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#00F2FF]/20 text-[#00F2FF] text-xs font-medium mb-4">
                Our Specialised Force
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
                The <span className="text-[#00F2FF]">Command Center</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                SME-friendly pricing doesn't mean amateur service. Every project is handled by specialists.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {roles.map((role, i) => (
              <ScrollReveal key={role.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4, borderColor: `${role.color}55` }}
                  className="p-5 rounded-2xl transition-all duration-300"
                  style={{ background: "rgba(10,25,47,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${role.color}14`, border: `1px solid ${role.color}30` }}>
                    <role.Icon size={18} style={{ color: role.color }} />
                  </div>
                  <h3 className="font-bold text-sm text-foreground mb-1.5" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {role.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{role.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2047 Mission ─────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div
              className="relative rounded-3xl p-8 sm:p-12 overflow-hidden text-center"
              style={{ background: "linear-gradient(135deg,#071828,#0d2540,#071828)", border: "1px solid rgba(255,153,51,0.2)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: "linear-gradient(90deg,#FF9933 33.3%,#fff 33.3% 66.6%,#138808 66.6%)" }} />
              <div className="absolute inset-0 svg-grid opacity-10" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF9933]/40 text-[#FF9933] text-xs font-medium mb-5"
                  style={{ background: "rgba(255,153,51,0.08)" }}>
                  <Target size={12} /> Our 2047 Goal
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
                  "Precision Tech. <span className="text-[#FF9933]">National Progress.</span>"
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Our ultimate target is to digitize{" "}
                  <span className="text-white font-bold">1 Million Indian SMEs</span> by 2047 — removing the tech barrier
                  that holds Indian businesses back and paving the path to a Vikshit Bharat.
                </p>
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                  {[
                    { value: "1M+", label: "SMEs to Digitize" },
                    { value: "2047", label: "Target Year" },
                    { value: "87%", label: "Cost Reduction" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-[#FF9933]" style={{ fontFamily: "'Sora', sans-serif" }}>{stat.value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <motion.a
                  href="/#contact"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF9933] text-[#0A192F] font-bold text-sm"
                  style={{ boxShadow: "0 0 24px rgba(255,153,51,0.3)" }}
                >
                  Join the Movement <ArrowRight size={15} />
                </motion.a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why Vextor ───────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
                Why <span className="text-[#00F2FF]">Vextor?</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "The Gap We Bridge",
                color: "#FF9933",
                content: "Most SMEs are stuck between two extremes: expensive corporate agencies that don't understand their budget, or local freelancers who lack the security and infrastructure expertise to build a real system.",
              },
              {
                title: "The Vextor Solution",
                color: "#00F2FF",
                content: "We operate with the efficiency of a modern startup and the expertise of an enterprise firm. Using AI-augmented workflows and lean team structures, we deliver elite results at honest prices.",
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={0.1}>
                <div
                  className="p-7 rounded-2xl h-full"
                  style={{ background: "rgba(10,25,47,0.5)", border: `1px solid ${item.color}25` }}
                >
                  <h3 className="font-bold text-base mb-3" style={{ fontFamily: "'Sora', sans-serif", color: item.color }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
