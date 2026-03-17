import React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import {
  Zap, FileX, Activity, Settings, Smartphone, Globe, Server,
  ArrowRight, ChevronRight, TrendingUp, Package, Receipt, Bell
} from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  PersonRetailer,
  PersonDistributor,
  PersonManufacturer,
} from "../components/PersonIllustrations";

/* ─────────────────────────────────────────────────────────
   Tech logos as inline SVGs / emoji for zero network cost
───────────────────────────────────────────────────────── */
const TECH_LOGOS = [
  { label: "Python", color: "#3776AB", symbol: "Py" },
  { label: "React", color: "#61DAFB", symbol: "⚛" },
  { label: "Next.js", color: "#00F2FF", symbol: "N" },
  { label: "Docker", color: "#2496ED", symbol: "🐳" },
  { label: "Node.js", color: "#68A063", symbol: "⬡" },
  { label: "N8N", color: "#FF9933", symbol: "n8n" },
  { label: "AWS", color: "#FF9900", symbol: "☁" },
  { label: "Flutter", color: "#54C5F8", symbol: "Fl" },
  { label: "PostgreSQL", color: "#336791", symbol: "🐘" },
  { label: "Redis", color: "#DC382D", symbol: "R" },
  { label: "TypeScript", color: "#3178C6", symbol: "TS" },
  { label: "Kubernetes", color: "#326CE5", symbol: "☸" },
  { label: "FastAPI", color: "#009688", symbol: "🚀" },
  { label: "Oracle", color: "#F80000", symbol: "O" },
];

/* positions in % across a wide area so they don't cluster */
const LOGO_POSITIONS = [
  { x: 2, y: 8 }, { x: 88, y: 5 }, { x: 5, y: 55 },
  { x: 91, y: 62 }, { x: 48, y: 3 }, { x: 75, y: 15 },
  { x: 18, y: 28 }, { x: 82, y: 35 }, { x: 60, y: 78 },
  { x: 25, y: 80 }, { x: 50, y: 88 }, { x: 8, y: 88 },
  { x: 70, y: 48 }, { x: 38, y: 18 },
];

function FloatingTechLogos() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {TECH_LOGOS.map((tech, i) => {
        const pos = LOGO_POSITIONS[i];
        return (
          <motion.div
            key={tech.label}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            animate={{
              y: [0, -14, 0, 8, 0],
              x: [0, 4, 0, -4, 0],
              rotate: [0, 3, 0, -3, 0],
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shadow-lg"
              style={{
                background: `${tech.color}18`,
                border: `1px solid ${tech.color}35`,
                color: tech.color,
                backdropFilter: "blur(4px)",
              }}
            >
              {tech.symbol}
            </div>
            <span className="text-[9px] font-medium" style={{ color: `${tech.color}80` }}>
              {tech.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Popup cards for each person
───────────────────────────────────────────────────────── */
const POPUP_CARDS = [
  {
    id: "dashboard",
    title: "Sales Dashboard",
    icon: TrendingUp,
    color: "#00F2FF",
    content: (
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-white/60">Today Revenue</span>
          <span className="font-bold text-[#00F2FF]">₹48,200</span>
        </div>
        <div className="flex items-end gap-1 h-10">
          {[40, 65, 45, 80, 60, 90, 72].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: i === 5 ? "#00F2FF" : "rgba(0,242,255,0.25)",
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-green-400">
          <TrendingUp size={10} /> Revenue up 32% this week
        </div>
      </div>
    ),
  },
  {
    id: "invoice",
    title: "Invoice Sent",
    icon: Receipt,
    color: "#FF9933",
    content: (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs font-semibold">INV-2024-0142</div>
            <div className="text-[10px] text-white/50">Sharma Textiles</div>
          </div>
          <div className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[9px] font-medium">
            Sent ✓
          </div>
        </div>
        <div className="text-lg font-bold text-[#FF9933]">₹1,24,500</div>
        <div className="text-[10px] text-white/50">Due: Mar 25, 2026</div>
        <div className="w-full bg-white/10 rounded-full h-1">
          <div className="bg-[#FF9933] h-full rounded-full" style={{ width: "70%" }} />
        </div>
        <div className="text-[10px] text-white/50">Payment: 70% expected</div>
      </div>
    ),
  },
  {
    id: "inventory",
    title: "Inventory Alert",
    icon: Package,
    color: "#a855f7",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-red-500/10 border border-red-500/20">
          <Bell size={10} className="text-red-400" />
          <span className="text-[10px] text-red-300">3 items low stock</span>
        </div>
        {[
          { name: "Cotton Fabric", qty: 12, max: 200 },
          { name: "Silk Thread", qty: 5, max: 100 },
        ].map((item) => (
          <div key={item.name} className="space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="text-white/70">{item.name}</span>
              <span className="text-red-400 font-medium">{item.qty} left</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1">
              <div
                className="bg-red-400 h-full rounded-full"
                style={{ width: `${(item.qty / item.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
        <div className="text-[10px] text-[#a855f7]">Auto-reorder triggered →</div>
      </div>
    ),
  },
];

/* ─────────────────────────────────────────────────────────
   Single person card with hoverable popup
───────────────────────────────────────────────────────── */
interface PersonCardProps {
  popupIndex: number;
  floatDelay?: number;
  position?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
  label: string;
  Illustration: React.ComponentType<{ className?: string }>;
}

function PersonCard({ popupIndex, floatDelay = 0, position = "center", size = "md", label, Illustration }: PersonCardProps) {
  const [hovered, setHovered] = useState(false);
  const popup = POPUP_CARDS[popupIndex];
  const Icon = popup.icon;

  const illuSizeMap = { sm: "w-36", md: "w-44", lg: "w-52" };
  const popupPos =
    position === "left"
      ? "left-full ml-4 top-4"
      : position === "right"
      ? "right-full mr-4 top-4"
      : "left-1/2 -translate-x-1/2 bottom-[calc(100%+12px)]";

  return (
    <motion.div
      className="relative cursor-pointer flex flex-col items-center"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5 + floatDelay, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Person illustration */}
      <motion.div
        className={`relative ${illuSizeMap[size]}`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-x-0 bottom-0 h-8 rounded-full blur-2xl"
          style={{ background: popup.color }}
          animate={{ opacity: hovered ? 0.18 : 0.07 }}
          transition={{ duration: 0.3 }}
        />
        <Illustration className="w-full h-auto relative z-10" />
      </motion.div>

      {/* Label */}
      <div className="text-center mt-1.5">
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: `${popup.color}12`,
            color: hovered ? popup.color : "var(--muted-foreground)",
            border: `1px solid ${hovered ? popup.color + "40" : "transparent"}`,
            transition: "all 0.3s",
          }}
        >
          {label}
        </span>
      </div>

      {/* Hover Popup */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: position === "center" ? 8 : 0, x: position === "left" ? -8 : position === "right" ? 8 : 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={`absolute z-50 w-48 p-3 rounded-2xl ${popupPos}`}
            style={{
              background: "rgba(6,16,36,0.97)",
              border: `1px solid ${popup.color}45`,
              boxShadow: `0 0 28px ${popup.color}20, 0 20px 60px rgba(0,0,0,0.7)`,
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: `${popup.color}20`, border: `1px solid ${popup.color}40` }}>
                <Icon size={12} style={{ color: popup.color }} />
              </div>
              <span className="text-xs font-bold text-white">{popup.title}</span>
            </div>
            {popup.content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Hero Section — 2-column
───────────────────────────────────────────────────────── */
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const words = ["The", "Tech", "Direction", "of", "a", "Developed", "India."];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated SVG Grid */}
      <div className="svg-grid opacity-40" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(0,242,255,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 30%, rgba(255,153,51,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
      />

      {/* Floating tech logos */}
      <FloatingTechLogos />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[85vh]">
          {/* ── LEFT: Text content ── */}
          <motion.div style={{ y: textY }} className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-medium mb-6 w-fit"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-[#00F2FF]"
              />
              Powering Vikshit Bharat 2047
              <ChevronRight size={12} />
            </motion.div>

            {/* Headline — word by word */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.1] mb-5"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block mr-3 ${
                    word === "Developed" || word === "India."
                      ? "text-[#00F2FF]"
                      : "text-foreground"
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              Enterprise-grade software at SME-friendly prices. Powering your growth to achieve{" "}
              <span className="text-[#FF9933] font-semibold">Vikshit Bharat by 2047</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00F2FF] text-[#0A192F] font-bold text-sm cyan-glow"
              >
                <Zap size={16} className="fill-[#0A192F]" />
                Grow My Business
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, borderColor: "rgba(0,242,255,0.5)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#00F2FF]/30 text-foreground font-medium text-sm glass transition-all"
              >
                Explore Services
                <ChevronRight size={14} />
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex gap-6 sm:gap-10"
            >
              {[
                { value: "5x", label: "Faster Delivery" },
                { value: "87%", label: "Cost Savings" },
                { value: "1M+", label: "SME Target" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ fontFamily: "'Sora', sans-serif", color: "#00F2FF" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: 3 people with phones ── */}
          <motion.div
            style={{ y: phoneY }}
            className="relative flex items-end justify-center gap-4 sm:gap-6 lg:gap-8 pt-16 pb-4"
          >
            {/* Glow base */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-20 bg-[#00F2FF]/10 blur-3xl rounded-full" />

            {/* Person 1 — left */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
            >
              <PersonCard
                popupIndex={1}
                floatDelay={0.8}
                position="left"
                size="sm"
                label="Priya — Retailer"
                Illustration={PersonRetailer}
              />
            </motion.div>

            {/* Person 2 — center (tallest) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="-mt-8"
            >
              <PersonCard
                popupIndex={0}
                floatDelay={0}
                position="center"
                size="lg"
                label="Rahul — Distributor"
                Illustration={PersonDistributor}
              />
            </motion.div>

            {/* Person 3 — right */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
            >
              <PersonCard
                popupIndex={2}
                floatDelay={1.6}
                position="right"
                size="md"
                label="Meera — Manufacturer"
                Illustration={PersonManufacturer}
              />
            </motion.div>

            {/* Hint text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap"
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                👆
              </motion.span>
              Hover to see live dashboards
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <motion.div
            className="w-5 h-8 rounded-full border border-[#00F2FF]/40 flex items-start justify-center pt-1.5"
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-[#00F2FF]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Comparison Section
───────────────────────────────────────────────────────── */
function ComparisonSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 5), 95));
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 5), 95));
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#00F2FF]/20 text-[#00F2FF] text-xs font-medium mb-4">
            <FileX size={12} /> The Digital Transformation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            Stop managing on <span className="text-[#00F2FF]">paper</span>.
            <br />
            Start leading with <span className="text-[#FF9933]">Data</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Drag the slider to see the before/after transformation.
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
          {/* Before */}
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

          {/* After */}
          <div
            className="absolute inset-0 flex flex-col items-end justify-center p-8 sm:p-12"
            style={{
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              background: "linear-gradient(135deg, rgba(10,25,47,0.95), rgba(0,30,60,0.9))",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
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

/* ─────────────────────────────────────────────────────────
   Bento Grid Section
───────────────────────────────────────────────────────── */
const bentoItems = [
  { icon: Settings, title: "Workflow Automation", desc: "Eliminate manual entries. Auto-sync inventory and sales with intelligent triggers.", color: "#00F2FF", span: "col-span-1" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Your office in your pocket. Manage from anywhere, anytime.", color: "#FF9933", span: "col-span-1" },
  { icon: Globe, title: "Web & SMM", desc: "High-converting React sites + AI-powered Social Marketing that drives real growth.", color: "#00F2FF", span: "col-span-1 md:col-span-2" },
  { icon: Server, title: "Infrastructure", desc: "Microservices that never crash. Bank-grade security with zero downtime SLA.", color: "#FF9933", span: "col-span-1 md:col-span-2" },
  { icon: Zap, title: "AI Augmented", desc: "We build 5x faster using AI-augmented workflows. No agency bloat.", color: "#00F2FF", span: "col-span-1" },
];

function BentoSection() {
  return (
    <section id="services-preview" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#00F2FF]/20 text-[#00F2FF] text-xs font-medium mb-4">
            The Complete Solution
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
            Everything you need to <span className="text-[#00F2FF]">scale</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bentoItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={item.title} delay={i * 0.1} className={item.span}>
              <motion.div
                className="bento-card glass rounded-2xl p-6 sm:p-8 h-full cursor-pointer"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                  <Icon size={22} style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif", color: item.color }}>
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
