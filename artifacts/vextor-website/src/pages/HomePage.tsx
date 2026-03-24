import React from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useMotionValueEvent, type MotionValue } from "framer-motion";
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
import { QuoteModal } from "../components/QuoteModal";

const LazyQuoteModal = React.lazy(() => import("../components/QuoteModal").then(m => ({ default: m.QuoteModal })));

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
                background: isHighlighted ? `${tech.color}15` : `transparent`,
                border: `1px solid ${isHighlighted ? tech.color + "50" : tech.color + "20"}`,
                color: tech.color,
                boxShadow: isHighlighted ? `0 0 15px ${tech.color}40, inset 0 0 10px ${tech.color}15` : "none",
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
  isActive?: boolean;
}

function PersonCard({ personId, floatDelay = 0, desktopPopupSide = "above", size = "md", label, Illustration, onHoverChange, isActive = false }: PersonCardProps) {
  const [hovered, setHovered] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const isMobile = useIsMobile();
  const slides = PERSON_SLIDES[personId] ?? PERSON_SLIDES["priya"];
  const slide = slides[Math.min(slideIndex, slides.length - 1)];
  const Icon = slide.icon;
  const active = hovered || isActive;

  useEffect(() => {
    if (!active) { setSlideIndex(0); return; }
    const id = setInterval(() => setSlideIndex((s) => (s + 1) % slides.length), 2400);
    return () => clearInterval(id);
  }, [active, slides.length]);

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
      style={{ zIndex: active ? 100 : 1 }}
    >
      {/* Person illustration */}
      <motion.div 
        className={`relative ${illuSizeMap[size]}`} 
        whileHover={{ scale: 1.05 }} 
        animate={{ 
          filter: active ? "blur(0px) grayscale(0%)" : "blur(2.5px) grayscale(40%)",
          opacity: active ? 1 : 0.45,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-x-0 bottom-0 h-8 rounded-full blur-2xl"
          style={{ background: slide.color }}
          animate={{ opacity: active ? 0.2 : 0.0 }}
          transition={{ duration: 0.5 }}
        />
        <Illustration className="w-full h-auto relative z-10" />
      </motion.div>

      {/* Label */}
      <motion.div 
        className="text-center mt-1.5"
        animate={{ opacity: active ? 1 : 0.45 }}
        transition={{ duration: 0.5 }}
      >
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: `${slide.color}12`,
            color: active ? slide.color : "var(--muted-foreground)",
            border: `1px solid ${active ? slide.color + "40" : "transparent"}`,
            transition: "all 0.3s",
          }}
        >
          {label}
        </span>
      </motion.div>

      {/* Hover Popup — auto-cycling, vertical scroll transition */}
      <AnimatePresence>
        {active && (
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
  const [autoPerson, setAutoPerson] = useState<string | null>(null);

  useEffect(() => {
    if (hoveredPerson) {
      setAutoPerson(null);
      return;
    }
    const cycle = ["priya", "rahul", "meera"];
    let i = 0;
    setAutoPerson(cycle[i]);
    const id = setInterval(() => {
      i = (i + 1) % cycle.length;
      setAutoPerson(cycle[i]);
    }, 4500); // cycle every 4.5s
    return () => clearInterval(id);
  }, [hoveredPerson]);

  const activePerson = hoveredPerson || autoPerson;

  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  const words = [
    "Stop", "juggling", "spreadsheets.", 
    "Run", "your", "business", "from", "one screen."
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[min(100vh,900px)] flex flex-col justify-center overflow-hidden pt-16 pb-6 lg:pt-20 lg:pb-12"
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
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* ── LEFT: Text content ── */}
          <motion.div style={{ y: textY }} className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-medium mb-4 w-fit"
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
              className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-[1.15] mb-4 tracking-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block mr-[0.35em] ${
                    word === "one screen." || word === "spreadsheets."
                      ? "text-[#00F2FF] whitespace-nowrap"
                      : "text-foreground"
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Benefit pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-3 justify-center lg:justify-start"
            >
              {[
                { label: "Less Paperwork", icon: "📄" },
                { label: "Lower Costs",    icon: "💰" },
                { label: "More Growth",    icon: "📈" },
              ].map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(0,242,255,0.08)",
                    border: "1px solid rgba(0,242,255,0.25)",
                    color: "#00F2FF",
                  }}
                >
                  <span>{pill.icon}</span>
                  {pill.label}
                </span>
              ))}
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.6 }}
              className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 max-w-lg"
            >
              Powerful tech. Honest prices. Built for{" "}
              <span className="text-[#FF9933] font-semibold">Vikshit Bharat 2047</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mb-5 w-full sm:w-auto justify-center lg:justify-start"
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

            {/* Trust & Social Proof Banner */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border border-background bg-slate-800 flex items-center justify-center shadow-md">
                    <Users size={12} className="text-[#00F2FF]" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#FF9933] text-[#FF9933]" />
                  ))}
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-muted-foreground mt-0.5">
                  Trusted by <span className="text-foreground">500+ SMEs</span>
                </div>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap gap-4 sm:gap-8"
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

          {/* ── RIGHT: Characters + floating tech logos — desktop only ── */}
          <motion.div style={{ y: phoneY }} className="relative hidden lg:block">
            {/* Logos float inside this container, around the characters */}
            <FloatingTechLogos hoveredPerson={activePerson} />

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
                  isActive={activePerson === "priya"}
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
                  isActive={activePerson === "rahul"}
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
                  isActive={activePerson === "meera"}
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
              Hover to pause live dashboards
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
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
  { label: "Revenue Growth", from: 1.0, to: 3.2, decimals: 1, unit: "x", icon: TrendingUp, color: "#00F2FF", desc: "Average uplift in 6 months" },
  { label: "Manual Errors",  from: 45,  to: 0,   decimals: 0, unit: "%", icon: ShieldCheck, color: "#FF9933", desc: "Auto-validated workflows" },
  { label: "Time Saved",     from: 5,   to: 60,  decimals: 0, unit: "%", icon: Clock,       color: "#00F2FF", desc: "On daily operations" },
  { label: "Team Efficiency",from: 1.0, to: 5.0, decimals: 1, unit: "x", icon: Users,       color: "#FF9933", desc: "Faster decision making" },
];

function MetricValue({ motionPos, from, to, decimals, unit }: {
  motionPos: MotionValue<number>;
  from: number; to: number; decimals: number; unit: string;
}) {
  const transformed = useTransform(motionPos, [5, 95], [from, to]);
  const [display, setDisplay] = useState(from + ((50 - 5) / 90) * (to - from));
  useMotionValueEvent(transformed, "change", (v) => setDisplay(v));
  return <>{display.toFixed(decimals)}{unit}</>;
}

function ComparisonSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [metricsInView, setMetricsInView] = useState(false);
  const sliderMV = useMotionValue(50);
  const sliderSpring = useSpring(sliderMV, { stiffness: 200, damping: 30 });

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
    const pos = Math.min(Math.max(((e.clientX - rect.left) / rect.width) * 100, 5), 95);
    setSliderPos(pos);
    sliderMV.set(pos);
  }, [sliderMV]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.min(Math.max(((e.touches[0].clientX - rect.left) / rect.width) * 100, 5), 95);
    setSliderPos(pos);
    sliderMV.set(pos);
  }, [sliderMV]);

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
        <ScrollReveal delay={0.1} className="h-full">
          <div className="flex flex-col justify-center h-full">
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
          </div>
        </ScrollReveal>

        {/* ── Right: Animated Metrics Panel ── */}
        <ScrollReveal delay={0.25} className="h-full">
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
                    <div className="text-2xl font-bold tabular-nums" style={{ color: m.color, fontFamily: "'Sora', sans-serif" }}>
                      <MetricValue motionPos={sliderSpring} from={m.from} to={m.to} decimals={m.decimals} unit={m.unit} />
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
   Bento Grid Section — 3D Cards with Animated Use Cases
───────────────────────────────────────────────────────── */

function WorkflowAnim() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 5), 950);
    return () => clearInterval(t);
  }, []);
  const steps = [
    { label: "Order Received",      Icon: Package },
    { label: "Invoice Generated",   Icon: Receipt },
    { label: "Stock Synced",        Icon: CheckCircle },
  ];
  return (
    <div className="space-y-2 w-full">
      {steps.map((s, i) => {
        const active = step > i;
        const SIcon = s.Icon;
        return (
          <div key={s.label} className="flex items-center gap-2.5"
            style={{ opacity: step >= i ? 1 : 0.3, transition: "opacity 0.4s" }}>
            <div className="w-5 h-5 rounded-full border flex items-center justify-center shrink-0"
              style={{ borderColor: active ? "#00F2FF80" : "rgba(0,242,255,0.2)", background: active ? "#00F2FF18" : "transparent", transition: "all 0.4s" }}>
              {active
                ? <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><CheckCircle size={10} color="#00F2FF" /></motion.div>
                : <SIcon size={9} color="rgba(0,242,255,0.5)" />}
            </div>
            <span className="text-[11px] flex-1"
              style={{ color: active ? "#e2e8f0" : "rgba(226,232,240,0.4)", transition: "color 0.4s" }}>
              {s.label}
            </span>
            {active && <motion.span initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} className="text-[10px] font-bold text-[#00F2FF]">✓</motion.span>}
          </div>
        );
      })}
      <div className="h-0.5 rounded-full bg-[#00F2FF]/10 overflow-hidden mt-1">
        <motion.div className="h-full bg-[#00F2FF]/50 rounded-full"
          animate={{ width: `${Math.min(Math.round(step / 3 * 100), 100)}%` }}
          style={{ transition: "width 0.55s ease" }} />
      </div>
    </div>
  );
}

function MobileAnim() {
  const [sales, setSales] = useState(0);
  const [orders, setOrders] = useState(0);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    let s = 0, o = 0;
    const t = setInterval(() => {
      s = Math.min(s + 530, 12840);
      o = Math.min(o + 1, 23);
      setSales(s); setOrders(o);
      if (s >= 12840) {
        setTimeout(() => { setSales(0); setOrders(0); setTick(k => k + 1); }, 1600);
        clearInterval(t);
      }
    }, 80);
    return () => clearInterval(t);
  }, [tick]);
  return (
    <div className="w-full space-y-2">
      <div className="rounded-xl p-3" style={{ background: "rgba(255,153,51,0.08)", border: "1px solid rgba(255,153,51,0.2)" }}>
        <div className="text-[10px] text-orange-400/60 mb-0.5 font-medium uppercase tracking-wider">Today's Sales</div>
        <div className="text-lg font-bold tabular-nums" style={{ color: "#FF9933", fontFamily: "'Sora',sans-serif" }}>
          ₹{sales.toLocaleString("en-IN")}
        </div>
        <div className="h-1 rounded-full bg-[#FF9933]/10 mt-1.5 overflow-hidden">
          <div className="h-full bg-[#FF9933]/50 rounded-full transition-all duration-150" style={{ width: `${(sales / 12840) * 100}%` }} />
        </div>
      </div>
      <div className="flex gap-2">
        {[{ label: "Orders", val: orders }, { label: "Live Users", val: "📱 42" }].map(m => (
          <div key={m.label} className="flex-1 rounded-lg p-2" style={{ background: "rgba(255,153,51,0.06)", border: "1px solid rgba(255,153,51,0.15)" }}>
            <div className="text-[9px] text-orange-400/50 uppercase tracking-wider">{m.label}</div>
            <div className="text-sm font-bold tabular-nums" style={{ color: "#FF9933", fontFamily: "'Sora',sans-serif" }}>{m.val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WebSmmAnim() {
  const metrics = [
    { label: "Reach",  value: "12.4K", pct: 82, delay: 0 },
    { label: "Clicks", value: "4.2K",  pct: 56, delay: 0.18 },
    { label: "Conv.",  value: "847",   pct: 28, delay: 0.36 },
  ];
  return (
    <div className="space-y-2.5 w-full">
      {metrics.map(m => (
        <div key={m.label} className="flex items-center gap-2">
          <span className="text-[10px] text-slate-400 w-8 shrink-0">{m.label}</span>
          <div className="flex-1 h-1.5 rounded-full bg-[#00F2FF]/10 overflow-hidden">
            <motion.div className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg,#00F2FF,#00F2FF70)" }}
              initial={{ width: 0 }}
              animate={{ width: ["0%", `${m.pct}%`, `${m.pct}%`, "0%"] }}
              transition={{ duration: 4, delay: m.delay, repeat: Infinity, times: [0, 0.5, 0.85, 1], ease: "easeInOut" }} />
          </div>
          <span className="text-[10px] font-semibold text-[#00F2FF] w-9 text-right tabular-nums">{m.value}</span>
        </div>
      ))}
    </div>
  );
}

function InfraAnim() {
  const services = [
    { name: "API Gateway", uptime: "99.9%" },
    { name: "Database",    uptime: "100%" },
    { name: "CDN Edge",    uptime: "99.7%" },
  ];
  return (
    <div className="space-y-2 w-full">
      {services.map((s, i) => (
        <div key={s.name} className="flex items-center gap-2.5 rounded-lg px-2.5 py-2"
          style={{ background: "rgba(255,153,51,0.06)", border: "1px solid rgba(255,153,51,0.12)" }}>
          <motion.div className="w-2 h-2 rounded-full shrink-0" style={{ background: "#22c55e" }}
            animate={{ opacity: [1, 0.3, 1], scale: [1, 0.75, 1] }}
            transition={{ duration: 1.8, delay: i * 0.45, repeat: Infinity, ease: "easeInOut" }} />
          <span className="text-[11px] text-slate-300 flex-1">{s.name}</span>
          <span className="text-[11px] font-bold tabular-nums" style={{ color: "#22c55e" }}>{s.uptime}</span>
        </div>
      ))}
    </div>
  );
}

function AiAnim() {
  return (
    <div className="space-y-3 w-full">
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-[10px] text-slate-400">Manual Process</span>
          <span className="text-[10px] text-slate-400">14 days</span>
        </div>
        <div className="h-2 rounded-full bg-slate-700/40 overflow-hidden">
          <motion.div className="h-full rounded-full bg-slate-500/60"
            animate={{ width: ["0%", "100%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.65, 0.88, 1], ease: "easeOut" }} />
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-[10px] font-semibold text-[#00F2FF]">⚡ Vextor AI</span>
          <span className="text-[10px] font-bold text-[#00F2FF]">3 days</span>
        </div>
        <div className="h-2 rounded-full bg-[#00F2FF]/10 overflow-hidden">
          <motion.div className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg,#00F2FF,#00F2FF70)" }}
            animate={{ width: ["0%", "21%", "21%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.36, 0.88, 1], ease: "easeOut" }} />
        </div>
      </div>
      <motion.p className="text-[10px] font-semibold text-center text-[#00F2FF]"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0.3, 0.5, 0.86, 1] }}>
        5× faster · Zero manual work
      </motion.p>
    </div>
  );
}

function AnalyticsAnim() {
  const [rev, setRev] = useState(180000);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    let r = 180000;
    const t = setInterval(() => {
      r = Math.min(r + 5800, 240000);
      setRev(r);
      if (r >= 240000) {
        setTimeout(() => { setRev(180000); setTick(k => k + 1); }, 1800);
        clearInterval(t);
      }
    }, 80);
    return () => clearInterval(t);
  }, [tick]);
  const path = "M4,46 L18,34 L32,38 L46,18 L60,26 L74,10";
  const dots: [number,number][] = [[4,46],[18,34],[32,38],[46,18],[60,26],[74,10]];
  return (
    <div className="w-full space-y-2">
      <div className="flex items-baseline gap-2">
        <span className="text-base font-bold tabular-nums" style={{ color: "#FF9933", fontFamily: "'Sora',sans-serif" }}>
          ₹{(rev / 100000).toFixed(1)}L
        </span>
        <span className="text-[11px] font-semibold text-emerald-400">↑ 18%</span>
        <span className="text-[10px] text-slate-500 ml-auto">this month</span>
      </div>
      <svg viewBox="0 0 78 56" fill="none" className="w-full h-24">
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF9933" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#FF9933" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d={`${path} L74,56 L4,56 Z`} fill="url(#chartFill)" />
        <motion.path d={path} stroke="#FF9933" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.55, 0.88, 1], ease: "easeInOut" }} />
        {dots.map(([x, y], i) => (
          <motion.circle key={i} cx={x} cy={y} r="3.5" fill="#FF9933"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] }}
            transition={{ duration: 4.5, delay: i * 0.09, repeat: Infinity, times: [0, 0.55, 0.88, 1] }} />
        ))}
      </svg>
    </div>
  );
}

const bentoItems: { icon: React.ElementType; color: string; title: string; desc: string; Anim: React.FC }[] = [
  { icon: Settings,   color: "#00F2FF", title: "Workflow Automation",  desc: "Eliminate manual entries. Auto-sync inventory and sales with intelligent triggers.", Anim: WorkflowAnim },
  { icon: Smartphone, color: "#FF9933", title: "Mobile Apps",          desc: "Your office in your pocket. Manage orders, sales, and teams from anywhere.", Anim: MobileAnim },
  { icon: Globe,      color: "#00F2FF", title: "Web & SMM",            desc: "High-converting React sites + AI-powered Social Marketing that drives real growth.", Anim: WebSmmAnim },
  { icon: Server,     color: "#FF9933", title: "Infrastructure",       desc: "Microservices that never crash. Bank-grade security with zero downtime SLA.", Anim: InfraAnim },
  { icon: Zap,        color: "#00F2FF", title: "AI Augmented",         desc: "We build 5× faster using AI-augmented workflows. No agency bloat.", Anim: AiAnim },
  { icon: BarChart2,  color: "#FF9933", title: "Analytics & Reports",  desc: "Real-time dashboards and smart reports that tell you exactly where to grow next.", Anim: AnalyticsAnim },
];

function Card3D({ item, delay }: { item: typeof bentoItems[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springRotX = useSpring(rotX, { stiffness: 220, damping: 22 });
  const springRotY = useSpring(rotY, { stiffness: 220, damping: 22 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  const onMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width;
    const cy = (e.clientY - rect.top) / rect.height;
    rotX.set((cy - 0.5) * -20);
    rotY.set((cx - 0.5) * 20);
    setShine({ x: cx * 100, y: cy * 100 });
  };

  const onMouseLeave = () => {
    rotX.set(0);
    rotY.set(0);
    setHovered(false);
  };

  return (
    <ScrollReveal delay={delay}>
      <div style={{ perspective: "900px" }}>
        <motion.div
          ref={cardRef}
          onMouseMove={onMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={onMouseLeave}
          style={{
            rotateX: springRotX,
            rotateY: springRotY,
            transformStyle: "preserve-3d",
          }}
          className="relative rounded-2xl overflow-hidden h-64 cursor-pointer group"
        >
          {/* Base background */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(145deg, ${item.color}12 0%, rgba(10,25,47,0.95) 60%, ${item.color}06 100%)`,
            }}
          />
          {/* Border */}
          <div
            className="absolute inset-0 rounded-2xl transition-all duration-300"
            style={{
              border: `1px solid ${item.color}${hovered ? "50" : "20"}`,
              boxShadow: hovered
                ? `0 20px 60px ${item.color}18, 0 0 0 1px ${item.color}20, inset 0 1px 0 ${item.color}20`
                : `0 4px 20px rgba(0,0,0,0.3)`,
            }}
          />
          {/* Shine */}
          <div
            className="absolute inset-0 pointer-events-none z-10 rounded-2xl transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.13) 0%, transparent 55%)`,
              opacity: hovered ? 1 : 0,
            }}
          />
          {/* Content — lifted in Z */}
          <div
            className="relative z-20 h-full flex flex-col gap-3 p-5"
            style={{ transform: "translateZ(30px)" }}
          >
            {/* Icon + Title row */}
            <div className="flex items-center gap-3">
              <motion.div
                animate={hovered ? { y: -2 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: `${item.color}18`,
                  border: `1px solid ${item.color}40`,
                  boxShadow: hovered ? `0 6px 18px ${item.color}30` : "none",
                  transition: "box-shadow 0.3s",
                }}
              >
                <Icon size={18} style={{ color: item.color }} />
              </motion.div>
              <h3 className="text-sm font-bold leading-snug"
                style={{ fontFamily: "'Sora', sans-serif", color: item.color }}>
                {item.title}
              </h3>
            </div>
            {/* Animation area */}
            <div className="flex-1 flex items-center min-h-0">
              <div className="w-full">
                <item.Anim />
              </div>
            </div>
            {/* Description */}
            <p className="text-muted-foreground text-[11px] leading-relaxed line-clamp-2">
              {item.desc}
            </p>
          </div>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

function BentoSection() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <>
      <React.Suspense fallback={null}>
        {quoteOpen && <LazyQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />}
      </React.Suspense>
      <section id="services-preview" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#00F2FF]/20 text-[#00F2FF] text-xs font-medium mb-4">
              <Zap size={12} /> The Complete Solution
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
              Everything you need to <span className="text-[#00F2FF]">scale</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
              Six pillars of growth — hover each card to explore.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bentoItems.map((item, i) => (
            <Card3D key={item.title} item={item} delay={i * 0.08} />
          ))}
        </div>

        {/* Get Smart Quote CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Ready to replace manual chaos with a system that works?
            </p>
            <motion.button
              onClick={() => setQuoteOpen(true)}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00F2FF] text-[#0A192F] font-bold text-sm cyan-glow"
            >
              <Zap size={16} className="fill-[#0A192F]" />
              Get Smart Quote — It's Free
              <ArrowRight size={15} />
            </motion.button>
          </div>
        </ScrollReveal>
      </section>
    </>
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
