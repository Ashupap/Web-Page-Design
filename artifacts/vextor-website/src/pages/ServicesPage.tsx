import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Settings, Smartphone, Cpu, Database, Shield, Cloud, Layers, ChevronRight,
} from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

/* ─────────────────────────────────────────────────────────
   N8N Workflow Types & Data
───────────────────────────────────────────────────────── */
type NodeType = "webhook" | "cron" | "form" | "action" | "ai" | "notify" | "done";

type N8NNode = { line1: string; line2?: string; icon: string; type: NodeType };

type WorkflowDef = {
  name: string;
  tag: string;
  color: string;
  desc: string;
  nodes: N8NNode[];
};

const nodeColor: Record<NodeType, string> = {
  webhook: "#22c55e",
  cron:    "#f97316",
  form:    "#8b5cf6",
  action:  "#3b82f6",
  ai:      "#a855f7",
  notify:  "#06b6d4",
  done:    "#22c55e",
};

const workflows: WorkflowDef[] = [
  {
    name: "Order → Invoice",
    tag: "Sales",
    color: "#00F2FF",
    desc: "Auto-generate GST invoices, send WhatsApp receipt and sync inventory on every new order",
    nodes: [
      { line1: "New Order",  icon: "🌐", type: "webhook" },
      { line1: "Create",     line2: "Invoice", icon: "📄", type: "action" },
      { line1: "WhatsApp",   line2: "Receipt", icon: "💬", type: "notify" },
      { line1: "Update",     line2: "Stock",   icon: "📦", type: "action" },
      { line1: "Log Done",   icon: "✅",        type: "done"   },
    ],
  },
  {
    name: "Lead Nurturing",
    tag: "CRM",
    color: "#00F2FF",
    desc: "Score new CRM leads with AI every morning and fire personalised email sequences automatically",
    nodes: [
      { line1: "Daily 9AM", icon: "⏰", type: "cron"   },
      { line1: "Fetch",     line2: "Leads",   icon: "👥", type: "action" },
      { line1: "AI Score",  icon: "🤖",        type: "ai"     },
      { line1: "Send",      line2: "Email",   icon: "📧", type: "notify" },
      { line1: "Update",    line2: "CRM",     icon: "📊", type: "action" },
    ],
  },
  {
    name: "Low Stock Alert",
    tag: "Inventory",
    color: "#FF9933",
    desc: "Check stock levels every 6 hours, filter items below threshold and WhatsApp the owner instantly",
    nodes: [
      { line1: "Every 6h",  icon: "⏰", type: "cron"   },
      { line1: "Read",      line2: "Stock",   icon: "📦", type: "action" },
      { line1: "Filter",    line2: "Low",     icon: "🔍", type: "ai"     },
      { line1: "WhatsApp",  line2: "Alert",   icon: "💬", type: "notify" },
      { line1: "Create PO", icon: "📝",        type: "action" },
    ],
  },
  {
    name: "GST Filing Prep",
    tag: "Finance",
    color: "#FF9933",
    desc: "On month-end, pull all transactions, calculate GST slab-wise and email a ready PDF to your CA",
    nodes: [
      { line1: "Month End", icon: "📅", type: "cron"   },
      { line1: "Fetch",     line2: "Txns",    icon: "🏦", type: "action" },
      { line1: "Calc GST",  icon: "🔢",        type: "ai"     },
      { line1: "Build",     line2: "Report",  icon: "📋", type: "action" },
      { line1: "Email CA",  icon: "📧",        type: "notify" },
    ],
  },
  {
    name: "HR Onboarding",
    tag: "HR",
    color: "#00F2FF",
    desc: "New employee form instantly triggers account creation, welcome email, payroll entry and training schedule",
    nodes: [
      { line1: "Form",      line2: "Submit",  icon: "📝", type: "form"   },
      { line1: "Create",    line2: "User",    icon: "👤", type: "action" },
      { line1: "Welcome",   line2: "Email",   icon: "📧", type: "notify" },
      { line1: "Add",       line2: "Payroll", icon: "💰", type: "action" },
      { line1: "Schedule",  line2: "Train",   icon: "🗓️", type: "action" },
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   N8N-Style Workflow Diagram
───────────────────────────────────────────────────────── */
const NW = 80, NH = 44, GAP = 18;
const NODE_XS = [14, 112, 210, 308, 406];
const NODE_Y = 14;

function N8NWorkflowDiagram({ wf }: { wf: WorkflowDef }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={wf.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
        <svg viewBox="0 0 500 72" fill="none" className="w-full">
          <defs>
            <marker
              id="n8nArrow"
              viewBox="0 0 8 6"
              refX="7"
              refY="3"
              markerWidth="5"
              markerHeight="4"
              orient="auto"
            >
              <path d="M0 0 L8 3 L0 6z" fill="rgba(0,242,255,0.45)" />
            </marker>
          </defs>

          {/* Connections */}
          {NODE_XS.slice(0, -1).map((x, i) => {
            const x1 = x + NW;
            const x2 = NODE_XS[i + 1];
            const y  = NODE_Y + NH / 2;
            return (
              <g key={i}>
                <line x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(0,242,255,0.1)" strokeWidth="1.5" />
                <motion.line
                  x1={x1} y1={y} x2={x2} y2={y}
                  stroke="rgba(0,242,255,0.5)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  animate={{ strokeDashoffset: [6, 0] }}
                  transition={{ duration: 0.45, repeat: Infinity, ease: "linear", delay: i * 0.12 }}
                  markerEnd="url(#n8nArrow)"
                />
              </g>
            );
          })}

          {/* Nodes */}
          {wf.nodes.map((node, i) => {
            const x = NODE_XS[i];
            const c = nodeColor[node.type];
            return (
              <motion.g
                key={`${wf.name}-${i}`}
                initial={{ opacity: 0, scale: 0.82 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.07, type: "spring", stiffness: 220, damping: 18 }}
              >
                {/* Trigger glow pulse */}
                {i === 0 && (
                  <motion.rect
                    x={x - 2} y={NODE_Y - 2} width={NW + 4} height={NH + 4} rx="9"
                    fill="none" stroke={c} strokeWidth="1"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                {/* Node body */}
                <rect x={x} y={NODE_Y} width={NW} height={NH} rx="7"
                  fill="rgba(8,20,42,0.96)" stroke={`${c}35`} strokeWidth="1" />
                {/* Left colored strip */}
                <rect x={x} y={NODE_Y + 4} width="5" height={NH - 8} rx="2.5" fill={c} />
                {/* Icon background */}
                <circle cx={x + 18} cy={NODE_Y + NH / 2} r="11" fill={`${c}18`} />
                {/* Emoji icon */}
                <text x={x + 18} y={NODE_Y + NH / 2 + 4} textAnchor="middle" fontSize="10">
                  {node.icon}
                </text>
                {/* Labels */}
                {node.line2 ? (
                  <>
                    <text x={x + 33} y={NODE_Y + 17} fontSize="7.5" fill="#e2e8f0"
                      fontFamily="Inter, sans-serif" fontWeight="600">{node.line1}</text>
                    <text x={x + 33} y={NODE_Y + 28} fontSize="6.5" fill="#94a3b8"
                      fontFamily="Inter, sans-serif">{node.line2}</text>
                  </>
                ) : (
                  <text x={x + 33} y={NODE_Y + NH / 2 + 3} fontSize="7.5" fill="#e2e8f0"
                    fontFamily="Inter, sans-serif" fontWeight="600">{node.line1}</text>
                )}
              </motion.g>
            );
          })}
        </svg>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────
   Older diagram (kept for non-automation services)
───────────────────────────────────────────────────────── */
function AnimatedFlowChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const nodes = [
    { x: 50,  y: 30,  label: "Form Input", icon: "📝" },
    { x: 200, y: 80,  label: "CRM",        icon: "👥" },
    { x: 350, y: 30,  label: "Invoicing",  icon: "📄" },
    { x: 200, y: 160, label: "Inventory",  icon: "📦" },
    { x: 350, y: 130, label: "HR Mgmt",    icon: "🏢" },
    { x: 500, y: 80,  label: "Insights",   icon: "📊" },
  ];
  const paths = [
    "M 90 40 Q 145 60 190 80",
    "M 90 30 Q 220 30 340 30",
    "M 230 90 Q 230 130 220 155",
    "M 390 40 Q 445 55 490 80",
    "M 390 140 Q 445 120 490 90",
    "M 230 170 Q 380 170 395 145",
  ];
  return (
    <div ref={ref} className="relative w-full overflow-x-auto">
      <svg viewBox="0 0 600 210" className="w-full min-w-[400px]">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#00F2FF" />
          </marker>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {paths.map((d, i) => (
          <motion.path key={i} d={d} stroke="#00F2FF" strokeWidth="1.5" fill="none"
            strokeDasharray="200"
            strokeDashoffset={isInView ? 0 : 200}
            markerEnd="url(#arrow)" opacity="0.6"
            style={{ transition: `stroke-dashoffset 0.6s ease ${i * 0.2}s` }} />
        ))}
        {nodes.map((node, i) => (
          <motion.g key={i} initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.15 + 0.3, type: "spring" }}>
            <circle cx={node.x + 10} cy={node.y + 10} r="28"
              fill="rgba(0,242,255,0.08)" stroke="#00F2FF" strokeWidth="1" filter="url(#nodeGlow)" />
            <text x={node.x + 10} y={node.y + 14} textAnchor="middle" fontSize="14">{node.icon}</text>
            <text x={node.x + 10} y={node.y + 38} textAnchor="middle" fontSize="8"
              fill="#00F2FF" fontFamily="Inter, sans-serif">{node.label}</text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Page
───────────────────────────────────────────────────────── */
export function ServicesPage() {
  const [selectedWorkflow, setSelectedWorkflow] = useState(0);

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#00F2FF]/20 text-[#00F2FF] text-xs font-medium mb-4">
            The Infrastructure Suite
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            Services Built for <span className="text-[#00F2FF]">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From traditional Bahi-Khata to enterprise cloud. We handle the tech so you can focus on growth.
          </p>
        </div>
      </ScrollReveal>

      {/* ── Service 1: Workflow Automation ───────────────── */}
      <div className="mb-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left: selectable workflow list */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#00F2FF]/10 border border-[#00F2FF]/30 flex items-center justify-center">
                  <Settings size={24} className="text-[#00F2FF]" />
                </div>
                <div>
                  <div className="text-xs text-[#00F2FF] font-medium uppercase tracking-widest">Deep Dive</div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>Workflow Automation</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                Powered by <span className="font-semibold text-[#FF6D5A]">n8n</span> — visual pipelines that connect your apps, data and teams. Click a use case to preview its flow.
              </p>
            </ScrollReveal>

            <div className="space-y-2.5">
              {workflows.map((wf, i) => (
                <motion.button
                  key={wf.name}
                  onClick={() => setSelectedWorkflow(i)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="w-full text-left flex items-center gap-4 p-3.5 rounded-xl glass border transition-all duration-200 cursor-pointer"
                  style={{
                    borderColor: selectedWorkflow === i ? `${wf.color}55` : "rgba(255,255,255,0.06)",
                    background:  selectedWorkflow === i ? `${wf.color}0A` : "transparent",
                    boxShadow:   selectedWorkflow === i ? `0 0 0 1px ${wf.color}20` : "none",
                  }}
                >
                  {/* Step number */}
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold shrink-0 transition-all duration-200"
                    style={{
                      background: selectedWorkflow === i ? `${wf.color}20` : "rgba(255,255,255,0.04)",
                      color:      selectedWorkflow === i ? wf.color : "#64748b",
                      border:     `1px solid ${selectedWorkflow === i ? wf.color + "40" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    {i + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="text-sm font-semibold transition-colors duration-200"
                        style={{ color: selectedWorkflow === i ? wf.color : "#e2e8f0" }}
                      >
                        {wf.name}
                      </span>
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded-full font-medium shrink-0"
                        style={{ background: `${wf.color}15`, color: wf.color }}
                      >
                        {wf.tag}
                      </span>
                      <span className="text-[10px] text-slate-500 ml-auto shrink-0">
                        {wf.nodes.length} nodes
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug line-clamp-1">{wf.desc}</p>
                  </div>

                  <motion.div
                    animate={{ x: selectedWorkflow === i ? 2 : 0, opacity: selectedWorkflow === i ? 1 : 0.25 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                    style={{ color: wf.color }}
                  >
                    <ChevronRight size={15} />
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right: N8N workflow diagram */}
          <ScrollReveal delay={0.15}>
            <div className="glass rounded-2xl p-5 border border-[#00F2FF]/20 sticky top-24">
              {/* Card header */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div
                    className="text-sm font-semibold transition-colors duration-300"
                    style={{ color: workflows[selectedWorkflow].color }}
                  >
                    {workflows[selectedWorkflow].name}
                  </div>
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                    style={{
                      background: `${workflows[selectedWorkflow].color}15`,
                      color: workflows[selectedWorkflow].color,
                    }}
                  >
                    {workflows[selectedWorkflow].tag}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#22c55e]"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  />
                  <span className="text-[10px] text-muted-foreground">Running</span>
                </div>
              </div>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={workflows[selectedWorkflow].name + "-desc"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[11px] text-slate-400 mb-4 leading-relaxed"
                >
                  {workflows[selectedWorkflow].desc}
                </motion.p>
              </AnimatePresence>

              {/* N8N Diagram */}
              <div className="rounded-xl overflow-hidden p-3" style={{ background: "rgba(4,12,28,0.8)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <N8NWorkflowDiagram wf={workflows[selectedWorkflow]} />
              </div>

              {/* Footer */}
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2">
                <span className="text-[10px] text-slate-500">Powered by</span>
                <span className="text-[10px] font-bold" style={{ color: "#FF6D5A" }}>n8n</span>
                <span className="text-[10px] text-slate-600 mx-1">·</span>
                <span className="text-[10px] text-slate-500">Visual automation</span>
                <span className="text-[10px] text-slate-500 ml-auto">
                  {workflows[selectedWorkflow].nodes.length} nodes · 0 errors
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Service 2: Mobile & Web ──────────────────────── */}
      <div className="mb-24">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Phone mockup */}
            <div className="order-2 md:order-1 flex justify-center">
              <motion.div
                className="relative"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-52 h-96 rounded-3xl border-4 border-foreground/20 glass overflow-hidden shadow-2xl relative">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-foreground/30" />
                  <div className="mt-8 p-3 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-[#00F2FF]" style={{ fontFamily: "'Sora', sans-serif" }}>Vextor Admin</div>
                      <div className="w-6 h-6 rounded-full bg-[#00F2FF]/20 border border-[#00F2FF]/30" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {[{ v: "₹2.4L", l: "Revenue", c: "#00F2FF" }, { v: "142", l: "Orders", c: "#FF9933" }].map((kpi) => (
                        <div key={kpi.l} className="rounded-xl p-2 border border-white/10" style={{ background: `${kpi.c}10` }}>
                          <div className="font-bold text-sm" style={{ color: kpi.c }}>{kpi.v}</div>
                          <div className="text-[9px] text-muted-foreground">{kpi.l}</div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl p-3 glass border border-white/5">
                      <div className="text-[9px] text-muted-foreground mb-2">Weekly Sales</div>
                      <div className="flex items-end gap-1 h-12">
                        {[30, 55, 40, 80, 60, 90, 70].map((h, i) => (
                          <motion.div key={i} className="flex-1 rounded-sm"
                            style={{ background: i === 5 ? "#00F2FF" : "rgba(0,242,255,0.25)" }}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.5 }} />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {["Order #1241 — ₹3,200", "Order #1240 — ₹1,800", "Order #1239 — ₹5,400"].map((o, i) => (
                        <div key={i} className="text-[9px] flex justify-between items-center p-1.5 rounded-lg bg-white/5">
                          <span className="text-muted-foreground">{o}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FF]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#00F2FF]/20 blur-xl rounded-full" />
              </motion.div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FF9933]/10 border border-[#FF9933]/30 flex items-center justify-center">
                  <Cpu size={24} className="text-[#FF9933]" />
                </div>
                <div>
                  <div className="text-xs text-[#FF9933] font-medium uppercase tracking-widest">Cross-Platform</div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>Mobile & Web</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Cross-Platform Performance" — Flutter-based Android/iOS apps & Next.js 15 Web Applications that work flawlessly on every device.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Flutter Android/iOS", desc: "One codebase, two platforms" },
                  { label: "Next.js 15 Web",      desc: "React Server Components" },
                  { label: "Offline First",        desc: "Works without internet" },
                  { label: "Push Notifications",   desc: "Instant business alerts" },
                ].map((item, i) => (
                  <motion.div key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-3 rounded-xl glass border border-[#FF9933]/10 hover:border-[#FF9933]/30 transition-colors">
                    <div className="text-xs font-semibold mb-1">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Service 3: Infrastructure ────────────────────── */}
      <ScrollReveal>
        <div className="glass rounded-3xl p-8 sm:p-12 border border-[#00F2FF]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F2FF]/5 rounded-full blur-3xl" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-[#00F2FF]/10 border border-[#00F2FF]/30 flex items-center justify-center"
                  animate={{ boxShadow: ["0 0 0 0 rgba(0,242,255,0.4)", "0 0 0 15px rgba(0,242,255,0)", "0 0 0 0 rgba(0,242,255,0.4)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Cpu size={28} className="text-[#00F2FF]" />
                </motion.div>
                <div>
                  <div className="text-xs text-[#00F2FF] font-medium uppercase tracking-widest">The USP</div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>Infrastructure & Microservices</h3>
                </div>
              </div>
              <p className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                "Enterprise Power. Zero Bloat."
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We build the backbone; you reap the rewards. Docker-based deployment, microservice architecture, automated backups on Oracle Cloud.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Cloud,  label: "Oracle Cloud Backups",   desc: "Automated daily backups with 99.99% uptime" },
                  { icon: Layers, label: "Docker Microservices",   desc: "Horizontally scalable, independent services" },
                  { icon: Shield, label: "Bank-grade Security",    desc: "End-to-end encryption, SOC2 compliance ready" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#00F2FF]/10 flex items-center justify-center shrink-0">
                      <item.icon size={14} className="text-[#00F2FF]" />
                    </div>
                    <div>
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-muted-foreground text-xs ml-2">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated server visualization */}
            <div className="glass rounded-2xl p-6 border border-[#00F2FF]/10">
              <div className="text-xs text-[#00F2FF] font-medium mb-4 uppercase tracking-widest">System Status</div>
              <div className="space-y-3">
                {[
                  { name: "API Gateway", uptime: "99.99%", load: 42 },
                  { name: "Auth Service", uptime: "100%",  load: 18 },
                  { name: "DB Cluster",   uptime: "99.97%", load: 65 },
                  { name: "CDN Edge",     uptime: "99.99%", load: 28 },
                ].map((service, i) => (
                  <div key={service.name} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium">{service.name}</span>
                      <span className="text-[#00F2FF]">{service.uptime}</span>
                    </div>
                    <div className="w-full bg-foreground/10 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: service.load > 60 ? "#FF9933" : "#00F2FF" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${service.load}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <motion.div className="w-2 h-2 rounded-full bg-[#00F2FF]"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }} />
                <span className="text-xs text-[#00F2FF]">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
