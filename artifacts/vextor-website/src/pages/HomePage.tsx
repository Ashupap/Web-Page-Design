import React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import {
  Zap, FileX, Activity, Settings, Smartphone, Globe, Server,
  ArrowRight, ChevronRight, TrendingUp, Package, Receipt, Bell,
  Truck, CheckCircle, BarChart2, Users, Star, Boxes, ShieldCheck, Clock
} from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  PersonRetailer,
  PersonDistributor,
  PersonManufacturer,
} from "../components/PersonIllustrations";

/* ─────────────────────────────────────────────────────────
   Tech logos — each owned by a character, float in right half
───────────────────────────────────────────────────────── */
const TECH_LOGOS = [
  { label: "React",      color: "#61DAFB", symbol: "⚛",   owner: "priya" },
  { label: "Next.js",   color: "#00F2FF", symbol: "N",    owner: "priya" },
  { label: "Node.js",   color: "#68A063", symbol: "⬡",   owner: "priya" },
  { label: "TypeScript",color: "#3178C6", symbol: "TS",   owner: "priya" },
  { label: "PostgreSQL",color: "#336791", symbol: "🐘",   owner: "priya" },
  { label: "N8N",       color: "#FF9933", symbol: "n8n",  owner: "rahul" },
  { label: "Python",    color: "#3776AB", symbol: "Py",   owner: "rahul" },
  { label: "AWS",       color: "#FF9900", symbol: "☁",   owner: "rahul" },
  { label: "Redis",     color: "#DC382D", symbol: "R",    owner: "rahul" },
  { label: "Docker",    color: "#2496ED", symbol: "🐳",   owner: "meera" },
  { label: "Kubernetes",color: "#326CE5", symbol: "☸",   owner: "meera" },
  { label: "FastAPI",   color: "#009688", symbol: "🚀",   owner: "meera" },
  { label: "Flutter",   color: "#54C5F8", symbol: "Fl",   owner: "meera" },
  { label: "Oracle",    color: "#F80000", symbol: "O",    owner: "meera" },
];

/* Positions relative to the character group container — surround all 3 */
const LOGO_POSITIONS = [
  { x: 2,  y: 8  }, { x: 90, y: 5  }, { x: 48, y: 2  },
  { x: 4,  y: 42 }, { x: 94, y: 38 }, { x: 18, y: 18 },
  { x: 76, y: 15 }, { x: 6,  y: 72 }, { x: 90, y: 68 },
  { x: 30, y: 85 }, { x: 65, y: 82 }, { x: 94, y: 55 },
  { x: 2,  y: 58 }, { x: 50, y: 88 },
];

function FloatingTechLogos({ hoveredPerson }: { hoveredPerson: string | null }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {TECH_LOGOS.map((tech, i) => {
        const pos = LOGO_POSITIONS[i];
        const isHighlighted = hoveredPerson === tech.owner;
        const isDimmed = hoveredPerson !== null && hoveredPerson !== tech.owner;
        return (
          <motion.div
            key={tech.label}
            className="absolute flex flex-col items-center gap-0.5"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            animate={{
              y: [0, -12, 0, 7, 0],
              x: [0, 3, 0, -3, 0],
              rotate: [0, 2, 0, -2, 0],
              opacity: isHighlighted ? [0.85, 1, 0.85] : isDimmed ? 0.06 : [0.1, 0.2, 0.1],
              scale: isHighlighted ? 1.25 : 1,
            }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold"
              style={{
                background: isHighlighted ? `${tech.color}28` : `${tech.color}0D`,
                border: `1px solid ${isHighlighted ? tech.color + "70" : tech.color + "18"}`,
                color: tech.color,
                backdropFilter: "blur(4px)",
                boxShadow: isHighlighted ? `0 0 18px ${tech.color}50, 0 0 40px ${tech.color}20` : "none",
                transition: "all 0.4s ease",
              }}
            >
              {tech.symbol}
            </div>
            <AnimatePresence>
              {isHighlighted && (
                <motion.span
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-[8px] font-semibold"
                  style={{ color: `${tech.color}CC` }}
                >
                  {tech.label}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Multi-slide popup data for each person
───────────────────────────────────────────────────────── */
const PERSON_SLIDES: Record<string, { title: string; icon: React.ElementType; color: string; content: React.ReactNode }[]> = {
  priya: [
    {
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
              <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? "#00F2FF" : "rgba(0,242,255,0.22)" }} />
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-green-400">
            <TrendingUp size={10} /> Revenue up 32% this week
          </div>
        </div>
      ),
    },
    {
      title: "Recent Orders",
      icon: Receipt,
      color: "#00F2FF",
      content: (
        <div className="space-y-1.5">
          {[
            { id: "#4821", item: "Kurti Set ×3", amt: "₹2,100", status: "Packed" },
            { id: "#4820", item: "Saree ×1", amt: "₹3,500", status: "Shipped" },
            { id: "#4819", item: "Dupatta ×6", amt: "₹900", status: "Delivered" },
          ].map((o) => (
            <div key={o.id} className="flex justify-between items-center text-[10px]">
              <div>
                <span className="text-white/50">{o.id}</span>
                <span className="text-white/80 ml-1">{o.item}</span>
              </div>
              <span className="text-[#00F2FF] font-medium">{o.amt}</span>
            </div>
          ))}
          <div className="text-[10px] text-white/40 pt-0.5">3 orders today</div>
        </div>
      ),
    },
    {
      title: "Top Customers",
      icon: Users,
      color: "#00F2FF",
      content: (
        <div className="space-y-1.5">
          {[
            { name: "Riya Boutique", sales: "₹18,400", stars: 5 },
            { name: "Metro Fashion", sales: "₹14,200", stars: 4 },
            { name: "Trendy Hub",    sales: "₹9,600",  stars: 4 },
          ].map((c) => (
            <div key={c.name} className="flex justify-between items-center">
              <div>
                <div className="text-[10px] text-white/80">{c.name}</div>
                <div className="flex gap-0.5">{Array.from({ length: c.stars }).map((_, i) => <Star key={i} size={7} fill="#00F2FF" color="#00F2FF" />)}</div>
              </div>
              <span className="text-[10px] font-bold text-[#00F2FF]">{c.sales}</span>
            </div>
          ))}
        </div>
      ),
    },
  ],
  rahul: [
    {
      title: "Invoice Tracker",
      icon: Receipt,
      color: "#FF9933",
      content: (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xs font-semibold">INV-2026-0142</div>
              <div className="text-[10px] text-white/50">Sharma Textiles</div>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[9px] font-medium">Sent ✓</div>
          </div>
          <div className="text-lg font-bold text-[#FF9933]">₹1,24,500</div>
          <div className="w-full bg-white/10 rounded-full h-1">
            <div className="bg-[#FF9933] h-full rounded-full" style={{ width: "70%" }} />
          </div>
          <div className="text-[10px] text-white/50">Payment: 70% expected · Due Mar 25</div>
        </div>
      ),
    },
    {
      title: "Live Deliveries",
      icon: Truck,
      color: "#FF9933",
      content: (
        <div className="space-y-1.5">
          {[
            { route: "Mumbai → Pune",     status: "In Transit", pct: 70 },
            { route: "Delhi → Jaipur",    status: "Picked Up",  pct: 30 },
            { route: "Surat → Ahmedabad", status: "Delivered",  pct: 100 },
          ].map((r) => (
            <div key={r.route} className="space-y-0.5">
              <div className="flex justify-between text-[10px]">
                <span className="text-white/70">{r.route}</span>
                <span style={{ color: r.pct === 100 ? "#4ade80" : "#FF9933" }}>{r.status}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-0.5">
                <div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: r.pct === 100 ? "#4ade80" : "#FF9933" }} />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Payment Status",
      icon: BarChart2,
      color: "#FF9933",
      content: (
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="flex-1 p-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
              <div className="text-sm font-bold text-green-400">₹3.2L</div>
              <div className="text-[9px] text-white/40">Received</div>
            </div>
            <div className="flex-1 p-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-center">
              <div className="text-sm font-bold text-[#FF9933]">₹1.1L</div>
              <div className="text-[9px] text-white/40">Pending</div>
            </div>
          </div>
          <div className="flex items-end gap-1 h-8">
            {[55, 80, 60, 95, 70, 88, 45].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 3 ? "#FF9933" : "rgba(255,153,51,0.25)" }} />
            ))}
          </div>
          <div className="text-[10px] text-white/40">Collections this week</div>
        </div>
      ),
    },
  ],
  meera: [
    {
      title: "Inventory Alert",
      icon: Package,
      color: "#a855f7",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-1.5 rounded-lg bg-red-500/10 border border-red-500/20">
            <Bell size={10} className="text-red-400" />
            <span className="text-[10px] text-red-300">3 items low stock</span>
          </div>
          {[{ name: "Cotton Fabric", qty: 12, max: 200 }, { name: "Silk Thread", qty: 5, max: 100 }].map((item) => (
            <div key={item.name} className="space-y-0.5">
              <div className="flex justify-between text-[10px]">
                <span className="text-white/70">{item.name}</span>
                <span className="text-red-400 font-medium">{item.qty} left</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1">
                <div className="bg-red-400 h-full rounded-full" style={{ width: `${(item.qty / item.max) * 100}%` }} />
              </div>
            </div>
          ))}
          <div className="text-[10px] text-[#a855f7]">Auto-reorder triggered →</div>
        </div>
      ),
    },
    {
      title: "Production Line",
      icon: Settings,
      color: "#a855f7",
      content: (
        <div className="space-y-1.5">
          {[
            { line: "Line A — Weaving",   progress: 82, status: "Running" },
            { line: "Line B — Dyeing",    progress: 55, status: "Running" },
            { line: "Line C — Finishing", progress: 100, status: "Done ✓" },
          ].map((l) => (
            <div key={l.line} className="space-y-0.5">
              <div className="flex justify-between text-[10px]">
                <span className="text-white/70">{l.line}</span>
                <span style={{ color: l.progress === 100 ? "#4ade80" : "#a855f7" }}>{l.status}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1">
                <div className="h-full rounded-full" style={{ width: `${l.progress}%`, background: l.progress === 100 ? "#4ade80" : "#a855f7" }} />
              </div>
            </div>
          ))}
          <div className="text-[10px] text-white/40">Shift ends in 2h 15m</div>
        </div>
      ),
    },
    {
      title: "Quality Check",
      icon: CheckCircle,
      color: "#a855f7",
      content: (
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="flex-1 p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-center">
              <div className="text-sm font-bold text-[#a855f7]">98.4%</div>
              <div className="text-[9px] text-white/40">Pass Rate</div>
            </div>
            <div className="flex-1 p-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-center">
              <div className="text-sm font-bold text-red-400">14</div>
              <div className="text-[9px] text-white/40">Rejected</div>
            </div>
          </div>
          {[
            { check: "Thread tension",  pass: true },
            { check: "Color fastness", pass: true },
            { check: "Shrinkage test", pass: false },
          ].map((c) => (
            <div key={c.check} className="flex justify-between text-[10px]">
              <span className="text-white/70">{c.check}</span>
              <span style={{ color: c.pass ? "#4ade80" : "#f87171" }}>{c.pass ? "Pass ✓" : "Fail ✗"}</span>
            </div>
          ))}
        </div>
      ),
    },
  ],
};

/* ─────────────────────────────────────────────────────────
   Single person card — auto-cycling dashboard popup
───────────────────────────────────────────────────────── */
/* Detect mobile for responsive popup placement */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return isMobile;
}

interface PersonCardProps {
  personId: string;
  floatDelay?: number;
  desktopPopupSide?: "left" | "right" | "above";
  size?: "sm" | "md" | "lg";
  label: string;
  Illustration: React.ComponentType<{ className?: string }>;
  onHoverChange: (id: string | null) => void;
}

function PersonCard({ personId, floatDelay = 0, desktopPopupSide = "above", size = "md", label, Illustration, onHoverChange }: PersonCardProps) {
  const [hovered, setHovered] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const isMobile = useIsMobile();
  const slides = PERSON_SLIDES[personId] ?? PERSON_SLIDES["priya"];
  const slide = slides[Math.min(slideIndex, slides.length - 1)];
  const Icon = slide.icon;

  useEffect(() => {
    if (!hovered) { setSlideIndex(0); return; }
    const id = setInterval(() => setSlideIndex((s) => (s + 1) % slides.length), 2400);
    return () => clearInterval(id);
  }, [hovered, slides.length]);

  /* On mobile everything pops above; on desktop respect desktopPopupSide */
  const side = isMobile ? "above" : desktopPopupSide;
  const popupPos =
    side === "left"
      ? "left-full ml-3 top-2"
      : side === "right"
      ? "right-full mr-3 top-2"
      : "left-1/2 -translate-x-1/2 bottom-[calc(100%+10px)]";

  const popupInitial =
    side === "left"  ? { opacity: 0, scale: 0.9, x: -8 }
    : side === "right" ? { opacity: 0, scale: 0.9, x: 8 }
    : { opacity: 0, scale: 0.9, y: 8 };

  /* Responsive illustration widths */
  const illuSizeMap = {
    sm: "w-24 sm:w-28 lg:w-36",
    md: "w-28 sm:w-32 lg:w-44",
    lg: "w-32 sm:w-40 lg:w-52",
  };

  return (
    <motion.div
      className="relative cursor-pointer flex flex-col items-center"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5 + floatDelay, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
      onHoverStart={() => { setHovered(true); onHoverChange(personId); }}
      onHoverEnd={() => { setHovered(false); onHoverChange(null); }}
      style={{ zIndex: hovered ? 100 : 1 }}
    >
      {/* Person illustration */}
      <motion.div className={`relative ${illuSizeMap[size]}`} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <motion.div
          className="absolute inset-x-0 bottom-0 h-8 rounded-full blur-2xl"
          style={{ background: slide.color }}
          animate={{ opacity: hovered ? 0.2 : 0.07 }}
          transition={{ duration: 0.3 }}
        />
        <Illustration className="w-full h-auto relative z-10" />
      </motion.div>

      {/* Label */}
      <div className="text-center mt-1.5">
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: `${slide.color}12`,
            color: hovered ? slide.color : "var(--muted-foreground)",
            border: `1px solid ${hovered ? slide.color + "40" : "transparent"}`,
            transition: "all 0.3s",
          }}
        >
          {label}
        </span>
      </div>

      {/* Hover Popup — auto-cycling, vertical scroll transition */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={popupInitial}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute z-50 w-48 sm:w-52 p-3 rounded-2xl ${popupPos}`}
            style={{
              background: "rgba(6,16,36,0.97)",
              border: `1px solid ${slide.color}45`,
              boxShadow: `0 0 28px ${slide.color}20, 0 20px 60px rgba(0,0,0,0.7)`,
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 shrink-0 rounded-lg flex items-center justify-center" style={{ background: `${slide.color}20`, border: `1px solid ${slide.color}40` }}>
                  <Icon size={12} style={{ color: slide.color }} />
                </div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={slideIndex}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.18 }}
                    className="text-xs font-bold text-white truncate"
                  >
                    {slide.title}
                  </motion.span>
                </AnimatePresence>
              </div>
              {/* Slide pill dots */}
              <div className="flex gap-1 shrink-0 ml-2">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === slideIndex ? 12 : 4,
                      height: 4,
                      background: i === slideIndex ? slide.color : `${slide.color}30`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Slide content — vertical scroll transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
              >
                {slide.content}
              </motion.div>
            </AnimatePresence>
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
  const [hoveredPerson, setHoveredPerson] = useState<string | null>(null);

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

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* ── LEFT: Text content — second on mobile, first on desktop ── */}
          <motion.div style={{ y: textY }} className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
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
              className="flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto justify-center lg:justify-start"
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

          {/* ── RIGHT: Characters + floating tech logos — first on mobile ── */}
          <motion.div style={{ y: phoneY }} className="relative order-1 lg:order-2">
            {/* Logos float inside this container, around the characters */}
            <FloatingTechLogos hoveredPerson={hoveredPerson} />

            {/* Characters row */}
            <div className="relative z-10 flex items-end justify-center gap-3 sm:gap-6 lg:gap-8 pt-10 pb-6">
              {/* Glow base */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-16 bg-[#00F2FF]/10 blur-3xl rounded-full pointer-events-none" />

              {/* Person 1 — Priya (always visible) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
              >
                <PersonCard
                  personId="priya"
                  floatDelay={0.8}
                  desktopPopupSide="left"
                  size="sm"
                  label="Priya — Retailer"
                  Illustration={PersonRetailer}
                  onHoverChange={setHoveredPerson}
                />
              </motion.div>

              {/* Person 2 — Rahul (always visible, popup goes LEFT towards Priya) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                className="-mt-6 sm:-mt-8"
              >
                <PersonCard
                  personId="rahul"
                  floatDelay={0}
                  desktopPopupSide="right"
                  size="lg"
                  label="Rahul — Distributor"
                  Illustration={PersonDistributor}
                  onHoverChange={setHoveredPerson}
                />
              </motion.div>

              {/* Person 3 — Meera (hidden on mobile, shown on lg+) */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
                className="hidden lg:block"
              >
                <PersonCard
                  personId="meera"
                  floatDelay={1.6}
                  desktopPopupSide="above"
                  size="md"
                  label="Meera — Manufacturer"
                  Illustration={PersonManufacturer}
                  onHoverChange={setHoveredPerson}
                />
              </motion.div>
            </div>

            {/* Hint text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-center flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-1"
            >
              <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.8, repeat: Infinity }}>
                👆
              </motion.span>
              Tap to see live dashboards
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
const transformationMetrics = [
  { label: "Revenue Growth", value: "3.2x", suffix: "", icon: TrendingUp, color: "#00F2FF", desc: "Average uplift in 6 months" },
  { label: "Manual Errors", value: "0", suffix: "%", icon: ShieldCheck, color: "#FF9933", desc: "Auto-validated workflows" },
  { label: "Time Saved", value: "60", suffix: "%", icon: Clock, color: "#00F2FF", desc: "On daily operations" },
  { label: "Team Efficiency", value: "5x", suffix: "", icon: Users, color: "#FF9933", desc: "Faster decision making" },
];

function AnimatedCounter({ to, suffix, inView }: { to: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = to / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <>{count}{suffix}</>;
}

function ComparisonSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [metricsInView, setMetricsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setMetricsInView(true); },
      { threshold: 0.3 }
    );
    if (metricsRef.current) observer.observe(metricsRef.current);
    return () => observer.disconnect();
  }, []);

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
        <div className="text-center mb-14">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

        {/* ── Left: Comparison Slider ── */}
        <ScrollReveal delay={0.1}>
          <div
            ref={containerRef}
            className="relative rounded-3xl overflow-hidden cursor-col-resize border border-[#00F2FF]/20 h-64 sm:h-72 select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onTouchMove={handleTouchMove}
          >
            {/* Before */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-950/80 to-orange-950/60 flex flex-col items-center justify-center p-6 text-center">
              <div className="flex items-center gap-2 mb-5">
                <FileX size={18} className="text-red-400" />
                <span className="text-red-400 font-semibold text-xs uppercase tracking-widest">Legacy Chaos</span>
              </div>
              <div className="space-y-2.5">
                {["Paper Registers", "Broken Spreadsheets", "Manual Errors", "Data Loss Risk", "No Real-time View"].map((item) => (
                  <div key={item} className="flex items-center justify-center gap-2 blur-[0.6px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    <span className="text-red-200/80 text-xs font-medium line-through">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
              style={{
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                background: "linear-gradient(135deg, rgba(10,25,47,0.95), rgba(0,30,60,0.9))",
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Activity size={18} className="text-[#00F2FF]" />
                <span className="text-[#00F2FF] font-semibold text-xs uppercase tracking-widest">Vextor Flow</span>
              </div>
              <div className="space-y-2.5">
                {["Real-time Dashboard", "Auto Inventory Sync", "One-click Invoicing", "AI-powered Insights", "Mobile Access Anywhere"].map((item) => (
                  <div key={item} className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FF] shrink-0 pulse-cyan" />
                    <span className="text-cyan-100 text-xs font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 flex items-center justify-center"
              style={{ left: `calc(${sliderPos}% - 18px)`, width: "36px" }}
            >
              <div className="w-0.5 h-full bg-[#00F2FF] opacity-70" />
              <div className="absolute w-9 h-9 rounded-full bg-[#00F2FF] flex items-center justify-center text-[#0A192F] shadow-xl cursor-grab active:cursor-grabbing cyan-glow">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8H12M4 8L6.5 5M4 8L6.5 11M12 8L9.5 5M12 8L9.5 11" stroke="#0A192F" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Drag hint */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-white/40 pointer-events-none select-none tracking-wide">
              ← drag →
            </div>
          </div>
        </ScrollReveal>

        {/* ── Right: Animated Metrics Panel ── */}
        <ScrollReveal delay={0.25}>
          <div ref={metricsRef} className="glass rounded-3xl border border-[#00F2FF]/15 p-6 sm:p-8 h-full flex flex-col justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00F2FF] mb-1">Impact by the numbers</p>
              <h3 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                Real results, not promises.
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 flex-1">
              {transformationMetrics.map((m, i) => {
                const Icon = m.icon;
                const isNumeric = !isNaN(Number(m.value));
                return (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease: "easeOut" }}
                    className="rounded-2xl p-4 flex flex-col gap-2"
                    style={{ background: `${m.color}08`, border: `1px solid ${m.color}20` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${m.color}18` }}>
                        <Icon size={14} style={{ color: m.color }} />
                      </div>
                      <span className="text-[11px] text-muted-foreground font-medium leading-tight">{m.label}</span>
                    </div>
                    <div className="text-2xl font-bold" style={{ color: m.color, fontFamily: "'Sora', sans-serif" }}>
                      {isNumeric
                        ? <AnimatedCounter to={Number(m.value)} suffix={m.suffix} inView={metricsInView} />
                        : <motion.span
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={metricsInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.45, delay: 0.2 + i * 0.12 }}
                          >{m.value}{m.suffix}</motion.span>
                      }
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-snug">{m.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={metricsInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center gap-3 pt-2 border-t border-white/5"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-[#00F2FF] shrink-0"
              />
              <p className="text-[11px] text-muted-foreground">
                Based on avg. performance of SMEs onboarded in 2024–25
              </p>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
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
