import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Zap, FileX, Activity, Settings, Smartphone, Globe, Server,
  ArrowRight, ChevronRight
} from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

function HeroSection() {
  const letters = "The Tech Direction of a Developed India.".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.3 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated SVG Grid Background */}
      <div className="svg-grid opacity-60" />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,242,255,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(var(--background)))",
        }}
      />

      {/* Floating glowing dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 3 + "px",
            height: Math.random() * 6 + 3 + "px",
            background: i % 2 === 0 ? "#00F2FF" : "#FF9933",
            left: `${10 + i * 11}%`,
            top: `${20 + (i % 3) * 20}%`,
            filter: "blur(1px)",
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00F2FF]/30 text-[#00F2FF] text-sm font-medium mb-8"
        >
          <Zap size={14} className="fill-[#00F2FF]" />
          Powering Vikshit Bharat 2047
          <ChevronRight size={14} />
        </motion.div>

        {/* H1 with letter stagger */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className={letter === " " ? "inline-block w-3" : "inline-block"}
              style={{
                background:
                  i < 4
                    ? "linear-gradient(135deg, #00F2FF, #00a8ff)"
                    : "linear-gradient(135deg, hsl(var(--foreground)), hsl(var(--foreground)/0.8))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Enterprise-grade software at SME-friendly prices. Powering your growth to achieve{" "}
          <span className="text-[#FF9933] font-semibold">Vikshit Bharat by 2047</span>.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#00F2FF] text-[#0A192F] font-bold text-base cyan-glow transition-all duration-300"
          >
            <Zap size={18} className="fill-[#0A192F]" />
            Grow My Business
            <ArrowRight size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, borderColor: "rgba(0,242,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-[#00F2FF]/30 text-foreground font-medium glass transition-all"
          >
            Explore Services
            <ChevronRight size={16} />
          </motion.button>
        </motion.div>

        {/* 3D Abstract Vector Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 1, type: "spring" }}
          className="mt-16 relative flex justify-center"
        >
          <div className="relative w-64 h-64">
            <svg viewBox="0 0 200 200" className="w-full h-full float-anim">
              <defs>
                <radialGradient id="dotGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00F2FF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0088ff" stopOpacity="0.3" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Glowing dot field forming a V/arrow shape */}
              {[...Array(60)].map((_, i) => {
                const row = Math.floor(i / 8);
                const col = i % 8;
                const x = 20 + col * 23;
                const y = 20 + row * 23;
                const opacity = Math.random() * 0.5 + 0.3;
                const size = Math.random() * 3 + 2;
                return (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={size}
                    fill="#00F2FF"
                    opacity={opacity}
                    filter="url(#glow)"
                    animate={{
                      opacity: [opacity, opacity * 1.5, opacity],
                      r: [size, size * 1.3, size],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                );
              })}
              {/* Arrow shape */}
              <motion.path
                d="M30 50 L100 150 L170 50"
                stroke="#00F2FF"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 2.5, duration: 1.5 }}
              />
              <motion.path
                d="M100 130 L100 160"
                stroke="#FF9933"
                strokeWidth="6"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 4, duration: 0.5 }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "5x", label: "Faster Delivery" },
            { value: "70%", label: "Cost Savings" },
            { value: "2047", label: "Target Year" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: "'Sora', sans-serif", color: "#00F2FF" }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 5), 95));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 5), 95));
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#00F2FF]/20 text-[#00F2FF] text-xs font-medium mb-4">
            <FileX size={12} />
            The Digital Transformation
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Stop managing your business on{" "}
            <span className="text-[#00F2FF]">paper</span>.
            <br />
            Start leading with <span className="text-[#FF9933]">Data</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Drag the slider to see the transformation from legacy chaos to digital clarity.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden cursor-col-resize border border-[#00F2FF]/20 h-72 sm:h-96 select-none"
          onMouseMove={handleMouseMove}
          onMouseDown={() => (isDragging.current = true)}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
          onTouchMove={handleTouchMove}
        >
          {/* Before (Legacy) */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/80 to-orange-950/60 flex flex-col items-start justify-center p-8 sm:p-12">
            <div className="flex items-center gap-2 mb-6">
              <FileX size={20} className="text-red-400" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-widest">Legacy Chaos</span>
            </div>
            <div className="space-y-3">
              {["Paper Registers", "Broken Excel Formulas", "Manual Errors", "Data Loss Risk", "Zero Real-time Visibility"].map((item) => (
                <div key={item} className="flex items-center gap-3 blur-[1px]">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                  <span className="text-red-200/80 text-sm font-medium line-through">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After (Vextor Flow) */}
          <div
            className="absolute inset-0 flex flex-col items-end justify-center p-8 sm:p-12"
            style={{
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              background: "linear-gradient(135deg, rgba(10,25,47,0.95), rgba(0,30,60,0.9))",
            }}
          >
            <div className="flex items-center gap-2 mb-6 mr-0">
              <Activity size={20} className="text-[#00F2FF]" />
              <span className="text-[#00F2FF] font-semibold text-sm uppercase tracking-widest">Vextor Flow</span>
            </div>
            <div className="space-y-3">
              {["Real-time Dashboard", "Auto Inventory Sync", "One-click Invoicing", "AI-powered Insights", "Mobile Access Anywhere"].map((item) => (
                <div key={item} className="flex items-center gap-3 justify-end">
                  <span className="text-cyan-100 text-sm font-medium">{item}</span>
                  <span className="w-2 h-2 rounded-full bg-[#00F2FF] shrink-0 pulse-cyan" />
                </div>
              ))}
            </div>
            {/* Mini dashboard mockup */}
            <div className="absolute bottom-4 right-4 glass rounded-xl p-3 border border-[#00F2FF]/30 hidden sm:block">
              <div className="flex gap-2 mb-2">
                {[40, 65, 45, 80, 60].map((h, i) => (
                  <div key={i} className="w-3 rounded-sm" style={{ height: `${h * 0.6}px`, background: i === 3 ? "#00F2FF" : "rgba(0,242,255,0.3)" }} />
                ))}
              </div>
              <div className="text-[10px] text-[#00F2FF] font-medium">Revenue ↑ 3.2x</div>
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 flex items-center justify-center"
            style={{ left: `calc(${sliderPos}% - 20px)`, width: "40px" }}
          >
            <div className="w-0.5 h-full bg-[#00F2FF] opacity-70" />
            <div className="absolute w-10 h-10 rounded-full bg-[#00F2FF] flex items-center justify-center text-[#0A192F] shadow-xl cursor-grab active:cursor-grabbing cyan-glow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8H12M4 8L6.5 5M4 8L6.5 11M12 8L9.5 5M12 8L9.5 11" stroke="#0A192F" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

const bentoItems = [
  {
    icon: Settings,
    title: "Workflow Automation",
    desc: "Eliminate manual entries. Auto-sync inventory and sales with intelligent triggers.",
    color: "#00F2FF",
    gradient: "from-cyan-500/10 to-transparent",
    span: "col-span-1",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Your office in your pocket. Manage from anywhere, anytime.",
    color: "#FF9933",
    gradient: "from-orange-500/10 to-transparent",
    span: "col-span-1",
  },
  {
    icon: Globe,
    title: "Web & SMM",
    desc: "High-converting React sites + AI-powered Social Marketing that drives growth.",
    color: "#00F2FF",
    gradient: "from-blue-500/10 to-transparent",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Server,
    title: "Infrastructure",
    desc: "Microservices that never crash. Bank-grade security with zero downtime SLA.",
    color: "#FF9933",
    gradient: "from-amber-500/10 to-transparent",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Zap,
    title: "AI Augmented",
    desc: "We build 5x faster using AI-augmented workflows. No agency bloat.",
    color: "#00F2FF",
    gradient: "from-purple-500/10 to-transparent",
    span: "col-span-1",
  },
];

function BentoSection() {
  return (
    <section id="services-preview" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#00F2FF]/20 text-[#00F2FF] text-xs font-medium mb-4">
            The Complete Solution
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Everything you need to{" "}
            <span className="text-[#00F2FF]">scale</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bentoItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={item.title} delay={i * 0.1} className={item.span}>
              <motion.div
                className={`bento-card glass rounded-2xl p-6 sm:p-8 h-full bg-gradient-to-br ${item.gradient} cursor-pointer`}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Sora', sans-serif", color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ComparisonSection />
      <BentoSection />
    </>
  );
}
