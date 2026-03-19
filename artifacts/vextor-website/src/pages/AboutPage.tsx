import { motion, useMotionValue, useTransform, useInView, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Target, ArrowRight } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { JoinModal } from "../components/JoinModal";

const IndiaFlag = ({ size = 16 }: { size?: number }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", width: size, height: Math.round(size * 0.67), borderRadius: 2, overflow: "hidden", flexShrink: 0, verticalAlign: "middle" }}>
    <span style={{ flex: 1, background: "#FF9933", display: "block" }} />
    <span style={{ flex: 1, background: "#ffffff", display: "block" }} />
    <span style={{ flex: 1, background: "#138808", display: "block" }} />
  </span>
);

/* ── India map watermark ── */
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
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }}>
      {dots.map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="0.8" fill="#00F2FF" />)}
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
    <div ref={ref} className="mt-8 flex flex-col items-start gap-1">
      <svg width="240" height="55" viewBox="0 0 240 55" fill="none">
        <motion.path
          d="M8,38 C15,15 28,45 40,28 C50,14 58,42 70,32 C80,22 88,40 100,34 C112,28 118,42 130,36 L138,48"
          stroke="#00F2FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.path
          d="M145,42 C152,30 162,48 172,38 C180,28 188,44 198,40 L208,35 L215,42 L222,30"
          stroke="#00F2FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1.8 }}
        />
        <motion.line x1="8" y1="50" x2="230" y2="50" stroke="#00F2FF" strokeWidth="0.5" strokeOpacity="0.3"
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
        — The Founders, Vextor.in
      </motion.p>
    </div>
  );
}

/* ── Tech Logo SVGs ── */
const TechLogos = {
  ReactAtom: ({ color }: { color: string }) => (
    <svg viewBox="0 0 48 48" width="42" height="42" fill="none">
      <circle cx="24" cy="24" r="4" fill={color} />
      <ellipse cx="24" cy="24" rx="20" ry="7" fill="none" stroke={color} strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="20" ry="7" fill="none" stroke={color} strokeWidth="2" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="20" ry="7" fill="none" stroke={color} strokeWidth="2" transform="rotate(120 24 24)" />
    </svg>
  ),
  Workflow: ({ color }: { color: string }) => (
    <svg viewBox="0 0 48 48" width="42" height="42" fill="none">
      <rect x="4" y="18" width="10" height="10" rx="3" fill={color} opacity="0.8" />
      <rect x="19" y="8" width="10" height="10" rx="3" fill={color} />
      <rect x="19" y="30" width="10" height="10" rx="3" fill={color} />
      <rect x="34" y="18" width="10" height="10" rx="3" fill={color} opacity="0.8" />
      <line x1="14" y1="23" x2="19" y2="13" stroke={color} strokeWidth="2" />
      <line x1="14" y1="23" x2="19" y2="35" stroke={color} strokeWidth="2" />
      <line x1="29" y1="13" x2="34" y2="23" stroke={color} strokeWidth="2" />
      <line x1="29" y1="35" x2="34" y2="23" stroke={color} strokeWidth="2" />
    </svg>
  ),
  Code: ({ color }: { color: string }) => (
    <svg viewBox="0 0 48 48" width="42" height="42" fill="none">
      <path d="M16 14L6 24L16 34" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 14L42 24L32 34" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 10L21 38" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  Shield: ({ color }: { color: string }) => (
    <svg viewBox="0 0 48 48" width="42" height="42" fill="none">
      <path d="M24 4L8 11V24C8 33.4 15.1 42 24 44C32.9 42 40 33.4 40 24V11L24 4Z" fill={`${color}22`} stroke={color} strokeWidth="2" />
      <path d="M17 24L21 28L31 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Cloud: ({ color }: { color: string }) => (
    <svg viewBox="0 0 48 48" width="42" height="42" fill="none">
      <path d="M36 34H14C10.7 34 8 31.3 8 28C8 25.1 10 22.6 12.8 22.1C12.3 21.1 12 20 12 18.8C12 14.5 15.5 11 19.8 11C22.3 11 24.6 12.2 26 14.1C26.9 13.4 28.1 13 29.4 13C32.5 13 35 15.5 35 18.6C35 19 34.9 19.4 34.8 19.8C37.7 20.5 40 23.1 40 26.2C40 30.5 38.4 34 36 34Z" fill={`${color}22`} stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M24 28V38M20 35L24 39L28 35" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Infinity: ({ color }: { color: string }) => (
    <svg viewBox="0 0 48 48" width="42" height="42" fill="none">
      <path d="M8 24C8 19.6 11.6 16 16 16C20.4 16 22 18 24 20C26 22 27.6 24 32 24C36.4 24 40 20.4 40 16M40 24C40 28.4 36.4 32 32 32C27.6 32 26 30 24 28C22 26 20.4 24 16 24C11.6 24 8 27.6 8 32" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="16" cy="24" r="3" fill={color} opacity="0.6" />
      <circle cx="32" cy="24" r="3" fill={color} opacity="0.6" />
    </svg>
  ),
};

/* ── 3D Tilt Card ── */
const roles = [
  {
    Logo: TechLogos.ReactAtom,
    title: "Software Architects",
    desc: "Designing scalable, future-proof systems that grow as you do.",
    color: "#00F2FF",
    tech: "React · Next.js · Node",
    particles: ["▲", "●", "■"],
  },
  {
    Logo: TechLogos.Workflow,
    title: "Infrastructure Engineers",
    desc: "Building automated workflows that replace manual 'Excel-hell'.",
    color: "#FF9933",
    tech: "n8n · Docker · CI/CD",
    particles: ["◆", "▶", "●"],
  },
  {
    Logo: TechLogos.Code,
    title: "Full-Stack Developers",
    desc: "Vibe Coding & AI-augmented speed for rapid, quality deployment.",
    color: "#a855f7",
    tech: "TypeScript · Python · AI",
    particles: ["{ }", "</>", ";;"],
  },
  {
    Logo: TechLogos.Shield,
    title: "Security Researchers",
    desc: "Protecting your business data with bank-grade security protocols.",
    color: "#22c55e",
    tech: "OWASP · Pentest · VAPT",
    particles: ["🔒", "✓", "⬡"],
  },
  {
    Logo: TechLogos.Cloud,
    title: "Cloud Engineers",
    desc: "Managing global-scale hosting on an SME-friendly budget.",
    color: "#3b82f6",
    tech: "AWS · Oracle · Azure",
    particles: ["☁", "⚡", "▲"],
  },
  {
    Logo: TechLogos.Infinity,
    title: "DevOps Specialists",
    desc: "Continuous pipelines so your product ships without downtime.",
    color: "#f97316",
    tech: "Kubernetes · Terraform · Git",
    particles: ["∞", "⟳", "▶"],
  },
];

function TechCard3D({ role, index }: { role: typeof roles[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-60, 60], [12, -12]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-12, 12]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(x, [-60, 60], [0, 100]);
  const glowY = useTransform(y, [-60, 60], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <ScrollReveal delay={index * 0.07}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, perspective: 800, transformStyle: "preserve-3d" }}
        className="relative h-full cursor-pointer"
      >
        {/* Dynamic glow layer */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: glowX.get() ? `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, ${role.color}18, transparent 60%)` : "none",
          }}
        />

        <div
          className="relative h-full rounded-2xl p-6 overflow-hidden group transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, rgba(10,25,47,0.8), rgba(10,25,47,0.5))`,
            border: `1px solid ${role.color}20`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Floating particles */}
          {role.particles.map((p, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0], opacity: [0.15, 0.4, 0.15] }}
              transition={{ duration: 2.5 + i * 0.7, repeat: Infinity, delay: i * 0.6 }}
              className="absolute text-[10px] select-none pointer-events-none"
              style={{
                color: role.color,
                top: `${15 + i * 22}%`,
                right: `${8 + i * 6}%`,
                fontFamily: "monospace",
              }}
            >
              {p}
            </motion.span>
          ))}

          {/* Top glow bar */}
          <div className="absolute top-0 left-6 right-6 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${role.color}50, transparent)` }} />

          {/* Logo */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="mb-4 w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: `${role.color}10`, border: `1px solid ${role.color}25`, transform: "translateZ(20px)" }}
          >
            <role.Logo color={role.color} />
          </motion.div>

          {/* Title */}
          <h3 className="font-bold text-sm text-foreground mb-1.5 group-hover:text-white transition-colors"
            style={{ fontFamily: "'Sora', sans-serif", transform: "translateZ(10px)" }}>
            {role.title}
          </h3>

          {/* Desc */}
          <p className="text-xs text-muted-foreground leading-relaxed mb-4" style={{ transform: "translateZ(8px)" }}>
            {role.desc}
          </p>

          {/* Tech stack pill */}
          <div
            className="inline-flex px-2.5 py-1 rounded-full text-[10px] font-medium"
            style={{ background: `${role.color}10`, color: role.color, border: `1px solid ${role.color}25`, transform: "translateZ(12px)" }}
          >
            {role.tech}
          </div>

          {/* Hover border glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ boxShadow: `inset 0 0 20px ${role.color}10, 0 0 20px ${role.color}08` }} />
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

/* ── Main Page ── */
export function AboutPage() {
  const [joinOpen, setJoinOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pt-16">
      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />

      {/* ── Hero Banner ──────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 svg-grid opacity-20" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(0,242,255,0.06) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-medium mb-6">
            <IndiaFlag size={14} /> Our Story
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            Architecting the{" "}
            <span className="text-[#00F2FF]">Digital Foundation</span>{" "}
            of a Developed India
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vextor.in was born from a singular mission: to ensure that the technology powering India's smallest businesses
            is as powerful as the technology powering global giants.
          </motion.p>
        </div>
      </section>

      {/* ── Founders' Message ────────────────────────────── */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <IndiaMapWatermark />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#FF9933]/30 text-[#FF9933] text-xs font-medium mb-4">
                A Message from the Founders
              </div>
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={0.1}>
            <div className="relative mb-14 text-center px-4 sm:px-12">
              <span className="absolute -top-6 left-0 sm:left-6 text-8xl leading-none select-none"
                style={{ color: "#00F2FF", opacity: 0.35, fontFamily: "Georgia, serif" }}>"</span>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight relative z-10 px-6"
                style={{ fontFamily: "'Sora', sans-serif" }}>
                Technology is not a luxury;{" "}
                <span className="text-[#00F2FF]">it's the engine of India's future.</span>
              </p>
              <span className="absolute -bottom-10 right-0 sm:right-6 text-8xl leading-none select-none"
                style={{ color: "#00F2FF", opacity: 0.35, fontFamily: "Georgia, serif" }}>"</span>
            </div>
          </ScrollReveal>

          {/* Letter — full width */}
          <ScrollReveal delay={0.15}>
            <div className="relative rounded-2xl p-7 sm:p-10 mt-6"
              style={{ background: "rgba(10,25,47,0.6)", border: "1px solid rgba(0,242,255,0.12)", backdropFilter: "blur(12px)" }}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  We started <span className="text-[#00F2FF] font-semibold">Vextor.in</span> with a simple observation:
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
      </section>

      {/* ── Command Center 3D Cards ───────────────────────── */}
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
              <TechCard3D key={role.title} role={role} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 2047 Mission ─────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden text-center"
              style={{ background: "linear-gradient(135deg,#071828,#0d2540,#071828)", border: "1px solid rgba(255,153,51,0.2)" }}>
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
                <motion.button
                  onClick={() => setJoinOpen(true)}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF9933] text-[#0A192F] font-bold text-sm"
                  style={{ boxShadow: "0 0 24px rgba(255,153,51,0.3)" }}
                >
                  Join the Movement <ArrowRight size={15} />
                </motion.button>
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
                <div className="p-7 rounded-2xl h-full"
                  style={{ background: "rgba(10,25,47,0.5)", border: `1px solid ${item.color}25` }}>
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
