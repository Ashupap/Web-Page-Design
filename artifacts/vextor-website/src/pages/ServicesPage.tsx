import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Settings, Smartphone, Cpu, Database, Shield, Cloud, Layers, ChevronRight, Server, Globe,
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
   Vector icon for each N8N node type (centered at 0,0)
───────────────────────────────────────────────────────── */
function NodeIcon({ icon, color }: { icon: string; color: string }) {
  const s = { stroke: color, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (icon) {
    case "🌐": return <g {...s}>
      <circle cx="0" cy="0" r="6" strokeWidth="1.3"/>
      <ellipse cx="0" cy="0" rx="3" ry="6" strokeWidth="1"/>
      <line x1="-6" y1="0" x2="6" y2="0" strokeWidth="0.9"/>
      <line x1="-5" y1="-3" x2="5" y2="-3" strokeWidth="0.8"/>
      <line x1="-5" y1="3" x2="5" y2="3" strokeWidth="0.8"/>
    </g>;
    case "⏰": return <g {...s}>
      <circle cx="0" cy="0" r="6" strokeWidth="1.3"/>
      <line x1="0" y1="0" x2="0" y2="-4" strokeWidth="1.4"/>
      <line x1="0" y1="0" x2="2.8" y2="2" strokeWidth="1.4"/>
      <circle cx="0" cy="0" r="0.9" fill={color} strokeWidth="0"/>
    </g>;
    case "📝": return <g {...s}>
      <path d="M-4,-5 L2.5,-5 L5,-2.5 L5,5 L-4,5 Z" strokeWidth="1.2"/>
      <path d="M2.5,-5 L2.5,-2.5 L5,-2.5" strokeWidth="1"/>
      <line x1="-2" y1="0.5" x2="3" y2="0.5" strokeWidth="0.9"/>
      <line x1="-2" y1="2.5" x2="1.5" y2="2.5" strokeWidth="0.9"/>
    </g>;
    case "📄": return <g {...s}>
      <path d="M-4,-5 L2.5,-5 L5,-2.5 L5,5 L-4,5 Z" strokeWidth="1.2"/>
      <path d="M2.5,-5 L2.5,-2.5 L5,-2.5" strokeWidth="1"/>
      <line x1="-2" y1="-0.5" x2="3" y2="-0.5" strokeWidth="0.9"/>
      <line x1="-2" y1="2" x2="3" y2="2" strokeWidth="0.9"/>
      <line x1="-2" y1="4.5" x2="1" y2="4.5" strokeWidth="0.9"/>
    </g>;
    case "💬": return <g {...s}>
      <path d="M-5.5,-4.5 Q-5.5,-7 -3,-7 L4,-7 Q6,-7 6,-4.5 L6,1 Q6,3.5 4,3.5 L1,3.5 L-2.5,7 L-2,3.5 L-3,3.5 Q-5.5,3.5 -5.5,1 Z" strokeWidth="1.2"/>
    </g>;
    case "📦": return <g {...s}>
      <path d="M0,-6 L5.5,-3 L5.5,3 L0,6 L-5.5,3 L-5.5,-3 Z" strokeWidth="1.2"/>
      <line x1="-5.5" y1="-3" x2="0" y2="0" strokeWidth="0.9"/>
      <line x1="5.5" y1="-3" x2="0" y2="0" strokeWidth="0.9"/>
      <line x1="0" y1="0" x2="0" y2="6" strokeWidth="0.9"/>
    </g>;
    case "✅": return <g {...s}>
      <circle cx="0" cy="0" r="6" strokeWidth="1.3"/>
      <path d="M-3.5,0.5 L-1,3 L3.5,-3" strokeWidth="1.5"/>
    </g>;
    case "👥": return <g {...s}>
      <circle cx="-1.5" cy="-3" r="2.5" strokeWidth="1.2"/>
      <path d="M-6.5,5 Q-6.5,0.5 -1.5,0.5 Q3.5,0.5 3.5,5" strokeWidth="1.2"/>
      <circle cx="3.5" cy="-4" r="2" strokeWidth="1" strokeDasharray="none"/>
    </g>;
    case "🤖": return <g {...s}>
      <rect x="-4.5" y="-4.5" width="9" height="9" rx="2" strokeWidth="1.2"/>
      <circle cx="0" cy="0" r="2.3" strokeWidth="1"/>
      <line x1="-4.5" y1="-2" x2="-6.5" y2="-2" strokeWidth="1"/>
      <line x1="-4.5" y1="2" x2="-6.5" y2="2" strokeWidth="1"/>
      <line x1="4.5" y1="-2" x2="6.5" y2="-2" strokeWidth="1"/>
      <line x1="4.5" y1="2" x2="6.5" y2="2" strokeWidth="1"/>
      <line x1="-2" y1="-4.5" x2="-2" y2="-6.5" strokeWidth="1"/>
      <line x1="2" y1="-4.5" x2="2" y2="-6.5" strokeWidth="1"/>
    </g>;
    case "📧": return <g {...s}>
      <rect x="-6" y="-4" width="12" height="8.5" rx="1.5" strokeWidth="1.2"/>
      <path d="M-6,-4 L0,2.5 L6,-4" strokeWidth="1.1"/>
    </g>;
    case "📊": return <g {...s}>
      <line x1="-5.5" y1="5.5" x2="5.5" y2="5.5" strokeWidth="1.1"/>
      <line x1="-5.5" y1="-6" x2="-5.5" y2="5.5" strokeWidth="1.1"/>
      <rect x="-4" y="0.5" width="2.5" height="5" strokeWidth="0.9"/>
      <rect x="-0.5" y="-2.5" width="2.5" height="8" strokeWidth="0.9"/>
      <rect x="3" y="-5" width="2.5" height="10.5" strokeWidth="0.9"/>
    </g>;
    case "📅": return <g {...s}>
      <rect x="-5.5" y="-3.5" width="11" height="9.5" rx="1.5" strokeWidth="1.2"/>
      <line x1="-5.5" y1="-0.5" x2="5.5" y2="-0.5" strokeWidth="1"/>
      <line x1="-2" y1="-3.5" x2="-2" y2="-6" strokeWidth="1.3"/>
      <line x1="2" y1="-3.5" x2="2" y2="-6" strokeWidth="1.3"/>
      <rect x="-1" y="1" width="2" height="2" rx="0.4" fill={color} strokeWidth="0"/>
    </g>;
    case "🏦": return <g {...s}>
      <line x1="-5.5" y1="6" x2="5.5" y2="6" strokeWidth="1.1"/>
      <line x1="-5.5" y1="1" x2="5.5" y2="1" strokeWidth="1"/>
      <line x1="0" y1="-5.5" x2="-5.5" y2="1" strokeWidth="1"/>
      <line x1="0" y1="-5.5" x2="5.5" y2="1" strokeWidth="1"/>
      <line x1="-3.5" y1="1" x2="-3.5" y2="6" strokeWidth="1.1"/>
      <line x1="0" y1="1" x2="0" y2="6" strokeWidth="1.1"/>
      <line x1="3.5" y1="1" x2="3.5" y2="6" strokeWidth="1.1"/>
    </g>;
    case "🔢": return <g {...s}>
      <rect x="-5" y="-5.5" width="10" height="11" rx="2" strokeWidth="1.2"/>
      <line x1="-5" y1="-1.5" x2="5" y2="-1.5" strokeWidth="0.9"/>
      <line x1="0" y1="-5.5" x2="0" y2="-1.5" strokeWidth="0.9"/>
      <rect x="-3.5" y="0.5" width="2" height="2" rx="0.4" fill={color} strokeWidth="0"/>
      <rect x="-0.5" y="0.5" width="2" height="2" rx="0.4" fill={color} strokeWidth="0"/>
      <rect x="2" y="0.5" width="2" height="2" rx="0.4" fill={color} strokeWidth="0"/>
    </g>;
    case "📋": return <g {...s}>
      <rect x="-5" y="-3" width="10" height="9.5" rx="1.5" strokeWidth="1.2"/>
      <rect x="-2.5" y="-5.5" width="5" height="3" rx="1" strokeWidth="1"/>
      <line x1="-3" y1="0.5" x2="3" y2="0.5" strokeWidth="0.9"/>
      <line x1="-3" y1="3" x2="3" y2="3" strokeWidth="0.9"/>
      <line x1="-3" y1="5.5" x2="0.5" y2="5.5" strokeWidth="0.9"/>
    </g>;
    case "👤": return <g {...s}>
      <circle cx="0" cy="-2.5" r="3" strokeWidth="1.2"/>
      <path d="M-5.5,5.5 Q-5.5,0.5 0,0.5 Q5.5,0.5 5.5,5.5" strokeWidth="1.2"/>
    </g>;
    case "💰": return <g {...s}>
      <circle cx="0" cy="0" r="5.5" strokeWidth="1.2"/>
      <line x1="0" y1="-2.5" x2="0" y2="2.5" strokeWidth="1.3"/>
      <line x1="-2" y1="-0.8" x2="2" y2="-0.8" strokeWidth="1"/>
      <line x1="-2" y1="1" x2="2" y2="1" strokeWidth="1"/>
    </g>;
    case "🗓️": return <g {...s}>
      <rect x="-5.5" y="-3.5" width="11" height="9.5" rx="1.5" strokeWidth="1.2"/>
      <line x1="-5.5" y1="-0.5" x2="5.5" y2="-0.5" strokeWidth="1"/>
      <line x1="-2" y1="-3.5" x2="-2" y2="-6" strokeWidth="1.3"/>
      <line x1="2" y1="-3.5" x2="2" y2="-6" strokeWidth="1.3"/>
      <path d="M-2.5,2.5 L-0.5,4.5 L3.5,0.5" strokeWidth="1.4"/>
    </g>;
    case "🔍": return <g {...s}>
      <circle cx="-1" cy="-1" r="4.5" strokeWidth="1.3"/>
      <line x1="2.5" y1="2.5" x2="6" y2="6" strokeWidth="1.6"/>
    </g>;
    default: return <g {...s}><circle cx="0" cy="0" r="5.5" strokeWidth="1.2"/></g>;
  }
}

/* ─────────────────────────────────────────────────────────
   N8N-Style Workflow Diagram
───────────────────────────────────────────────────────── */
const NW = 82, NH = 48, GAP = 16;
const NODE_XS = [12, 110, 208, 306, 404];
const NODE_Y  = 10;
const CY      = NODE_Y + NH / 2;  // vertical center of nodes

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
        {/* viewBox height = NODE_Y*2 + NH = 10+48+10 = 68 */}
        <svg viewBox="0 0 500 68" fill="none" className="w-full" style={{ display: "block" }}>
          <defs>
            <marker id="n8nArrow" viewBox="0 0 8 6" refX="7" refY="3"
              markerWidth="5" markerHeight="4" orient="auto">
              <path d="M0 0 L8 3 L0 6z" fill="rgba(0,242,255,0.5)" />
            </marker>
          </defs>

          {/* Connections */}
          {NODE_XS.slice(0, -1).map((x, i) => {
            const x1 = x + NW, x2 = NODE_XS[i + 1];
            return (
              <g key={i}>
                <line x1={x1} y1={CY} x2={x2} y2={CY}
                  stroke="rgba(0,242,255,0.1)" strokeWidth="1.5" />
                <motion.line
                  x1={x1} y1={CY} x2={x2} y2={CY}
                  stroke="rgba(0,242,255,0.55)" strokeWidth="1.5"
                  strokeDasharray="3 3"
                  animate={{ strokeDashoffset: [6, 0] }}
                  transition={{ duration: 0.44, repeat: Infinity, ease: "linear", delay: i * 0.12 }}
                  markerEnd="url(#n8nArrow)"
                />
              </g>
            );
          })}

          {/* Nodes */}
          {wf.nodes.map((node, i) => {
            const x = NODE_XS[i];
            const c = nodeColor[node.type];
            const iconCX = x + 20;   // center x of icon circle
            const labelX = x + 36;   // x start of text labels

            return (
              <motion.g
                key={`${wf.name}-${i}`}
                initial={{ opacity: 0, scale: 0.82 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.07, type: "spring", stiffness: 220, damping: 18 }}
              >
                {/* Trigger pulse ring */}
                {i === 0 && (
                  <motion.rect
                    x={x - 2} y={NODE_Y - 2} width={NW + 4} height={NH + 4} rx="10"
                    fill="none" stroke={c} strokeWidth="1"
                    animate={{ opacity: [0.25, 0.7, 0.25] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                {/* Node body */}
                <rect x={x} y={NODE_Y} width={NW} height={NH} rx="8"
                  fill="rgba(6,16,38,0.97)" stroke={`${c}35`} strokeWidth="1" />
                {/* Left accent strip */}
                <rect x={x} y={NODE_Y + 5} width="5" height={NH - 10} rx="2.5" fill={c} />
                {/* Icon background circle */}
                <circle cx={iconCX} cy={CY} r="12" fill={`${c}16`} />
                {/* Vector icon — centered on (iconCX, CY) */}
                <g transform={`translate(${iconCX}, ${CY})`}>
                  <NodeIcon icon={node.icon} color={c} />
                </g>
                {/* Labels — vertically centered in node */}
                {node.line2 ? (
                  <>
                    <text x={labelX} y={CY - 4} fontSize="7.5" fill="#e2e8f0"
                      fontFamily="Inter, sans-serif" fontWeight="600"
                      dominantBaseline="middle">{node.line1}</text>
                    <text x={labelX} y={CY + 7} fontSize="6.5" fill="#94a3b8"
                      fontFamily="Inter, sans-serif"
                      dominantBaseline="middle">{node.line2}</text>
                  </>
                ) : (
                  <text x={labelX} y={CY} fontSize="7.5" fill="#e2e8f0"
                    fontFamily="Inter, sans-serif" fontWeight="600"
                    dominantBaseline="middle">{node.line1}</text>
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
   Phone screen — Website preview
───────────────────────────────────────────────────────── */
function PhoneWebsite() {
  const products = [
    { name: "Smart LED Bulb",     price: "₹299",  badge: "Best Seller", badgeClr: "#FF9933", bg: "linear-gradient(135deg,#1e3a5f,#0a2a4a)", icon: "💡" },
    { name: "Wireless Earbuds",   price: "₹1,499", badge: "New",         badgeClr: "#22c55e", bg: "linear-gradient(135deg,#2d1b69,#1a0e3f)", icon: "🎧" },
    { name: "Cotton Kurta",       price: "₹799",  badge: "20% OFF",     badgeClr: "#ef4444", bg: "linear-gradient(135deg,#3b1f1f,#1a0a0a)", icon: "👕" },
    { name: "Steel Water Bottle", price: "₹599",  badge: "",            badgeClr: "",        bg: "linear-gradient(135deg,#1a3322,#0a1f14)", icon: "🍶" },
  ];
  return (
    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.28 }} style={{ height: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ background: "#0a192f", padding: "5px 10px", display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid rgba(0,242,255,0.1)" }}>
        <div style={{ flex: 1, background: "rgba(255,255,255,0.06)", borderRadius: 20, padding: "3px 8px", display: "flex", alignItems: "center", gap: 4, border: "1px solid rgba(255,255,255,0.08)" }}>
          <span style={{ fontSize: 7, color: "rgba(255,255,255,0.3)" }}>🔍</span>
          <span style={{ fontSize: 7, color: "rgba(255,255,255,0.28)" }}>Search products…</span>
        </div>
        <div style={{ position: "relative" }}>
          <span style={{ fontSize: 13 }}>🛒</span>
          <div style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, borderRadius: "50%", background: "#FF9933", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 5, color: "#000", fontWeight: 700 }}>3</span>
          </div>
        </div>
      </div>
      {/* Nav categories */}
      <div style={{ display: "flex", gap: 5, padding: "5px 10px 4px", overflowX: "hidden" }}>
        {["All", "Electronics", "Fashion", "Home", "Deals"].map((c, i) => (
          <div key={c} style={{ padding: "2.5px 8px", borderRadius: 20, fontSize: 6.5, fontWeight: i === 0 ? 700 : 400, flexShrink: 0, background: i === 0 ? "#00F2FF" : "rgba(255,255,255,0.05)", color: i === 0 ? "#000" : "rgba(255,255,255,0.45)", border: `1px solid ${i === 0 ? "#00F2FF" : "rgba(255,255,255,0.08)"}` }}>{c}</div>
        ))}
      </div>
      {/* Banner */}
      <div style={{ margin: "0 10px 6px", borderRadius: 10, background: "linear-gradient(110deg,#0a2a4a,#1e3a8a)", padding: "8px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid rgba(0,242,255,0.15)" }}>
        <div>
          <div style={{ fontSize: 7, color: "rgba(255,255,255,0.5)", marginBottom: 1 }}>Summer Sale 🔥</div>
          <div style={{ fontSize: 9.5, fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>Up to <span style={{ color: "#FF9933" }}>50% OFF</span></div>
          <div style={{ marginTop: 5, background: "#00F2FF", color: "#000", fontSize: 6.5, fontWeight: 700, padding: "2.5px 8px", borderRadius: 12, display: "inline-block" }}>Shop Now</div>
        </div>
        <div style={{ fontSize: 30, opacity: 0.85 }}>🛍️</div>
      </div>
      {/* Product grid */}
      <div style={{ padding: "0 10px 6px" }}>
        <div style={{ fontSize: 7, color: "rgba(255,255,255,0.38)", fontWeight: 700, marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.8 }}>Trending Now</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
          {products.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.09 }}
              style={{ borderRadius: 9, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
              {/* Product image placeholder */}
              <div style={{ background: p.bg, height: 52, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <span style={{ fontSize: 22 }}>{p.icon}</span>
                {p.badge && (
                  <div style={{ position: "absolute", top: 4, left: 4, background: p.badgeClr, color: "#fff", fontSize: 5.5, fontWeight: 700, padding: "1.5px 4px", borderRadius: 4 }}>{p.badge}</div>
                )}
              </div>
              {/* Info */}
              <div style={{ padding: "5px 6px 6px" }}>
                <div style={{ fontSize: 7, fontWeight: 600, color: "#e2e8f0", lineHeight: 1.25, marginBottom: 2 }}>{p.name}</div>
                <div style={{ fontSize: 8.5, fontWeight: 800, color: "#00F2FF" }}>{p.price}</div>
                <div style={{ marginTop: 4, background: "rgba(0,242,255,0.12)", border: "1px solid rgba(0,242,255,0.2)", color: "#00F2FF", fontSize: 6, fontWeight: 700, padding: "2px 0", borderRadius: 5, textAlign: "center" }}>+ Add</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Phone screen — Sales Dashboard
───────────────────────────────────────────────────────── */
function PhoneDashboard() {
  const bars = [32, 58, 41, 76, 63, 92, 74];
  return (
    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.28 }} style={{ height: "100%", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ padding: "6px 11px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 9.5, fontWeight: 700, color: "#e2e8f0" }}>Sales Dashboard</div>
          <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.38)" }}>March 2026 · Live</div>
        </div>
        <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg, #00F2FF, #0a4f6e)", border: "1.5px solid rgba(0,242,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.8)" }} />
        </div>
      </div>
      {/* KPI cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, padding: "2px 10px 6px" }}>
        {[
          { val: "₹2.4L", lbl: "Revenue",  chg: "+18%", clr: "#00F2FF" },
          { val: "142",   lbl: "Orders",   chg: "+12%", clr: "#FF9933" },
          { val: "94%",   lbl: "Fulfilment", chg: "+3%", clr: "#22c55e" },
        ].map(k => (
          <div key={k.lbl} style={{ background: `${k.clr}0D`, border: `1px solid ${k.clr}22`, borderRadius: 9, padding: "5px 5px" }}>
            <div style={{ fontSize: 9, fontWeight: 800, color: k.clr, lineHeight: 1 }}>{k.val}</div>
            <div style={{ fontSize: 6, color: "rgba(255,255,255,0.42)", marginTop: 2 }}>{k.lbl}</div>
            <div style={{ fontSize: 6, color: "#22c55e", marginTop: 1 }}>{k.chg}</div>
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div style={{ margin: "0 10px 6px", padding: "6px 8px", background: "rgba(255,255,255,0.025)", borderRadius: 9, border: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.38)", marginBottom: 5 }}>Weekly Revenue</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 38 }}>
          {bars.map((h, i) => (
            <motion.div key={i} style={{ flex: 1, background: i === 5 ? "#00F2FF" : "rgba(0,242,255,0.2)", borderRadius: "2px 2px 0 0" }}
              initial={{ height: 0 }} animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }} />
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          {["M","T","W","T","F","S","S"].map((d, i) => (
            <div key={i} style={{ flex: 1, textAlign: "center", fontSize: 5.5, color: "rgba(255,255,255,0.25)" }}>{d}</div>
          ))}
        </div>
      </div>
      {/* Orders list */}
      <div style={{ padding: "0 10px" }}>
        <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.38)", marginBottom: 4 }}>Recent Orders</div>
        {[
          { id: "#1241", amt: "₹3,200", status: "Delivered",  sc: "#22c55e" },
          { id: "#1240", amt: "₹1,800", status: "In Transit", sc: "#f97316" },
          { id: "#1239", amt: "₹5,400", status: "Processing", sc: "#94a3b8" },
        ].map((o, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 7px", background: "rgba(255,255,255,0.03)", borderRadius: 7, marginBottom: 3, border: "1px solid rgba(255,255,255,0.04)" }}>
            <span style={{ fontSize: 7, color: "#e2e8f0" }}>{o.id}</span>
            <span style={{ fontSize: 7.5, fontWeight: 700, color: "#00F2FF" }}>{o.amt}</span>
            <span style={{ fontSize: 6, color: o.sc }}>{o.status}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Phone screen — Monthly Production Report
───────────────────────────────────────────────────────── */
function PhoneReport() {
  const lines = [
    { name: "Electronics", pct: 78, clr: "#00F2FF", val: "6,248" },
    { name: "Textiles",    pct: 65, clr: "#FF9933", val: "5,486" },
    { name: "FMCG",        pct: 91, clr: "#22c55e", val: "7,652" },
  ];
  return (
    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.28 }} style={{ height: "100%", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ padding: "6px 11px 4px" }}>
        <div style={{ fontSize: 9.5, fontWeight: 700, color: "#e2e8f0" }}>Production Report</div>
        <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.38)" }}>March 2026 · Auto-generated</div>
      </div>
      {/* Summary KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, padding: "2px 10px 7px" }}>
        {[
          { val: "19,386", lbl: "Total Units",  clr: "#00F2FF" },
          { val: "78%",    lbl: "Efficiency",   clr: "#FF9933" },
          { val: "0.2%",   lbl: "Defect Rate",  clr: "#22c55e" },
        ].map(m => (
          <div key={m.lbl} style={{ background: `${m.clr}0A`, border: `1px solid ${m.clr}22`, borderRadius: 9, padding: "5px 4px", textAlign: "center" }}>
            <div style={{ fontSize: 8.5, fontWeight: 800, color: m.clr, lineHeight: 1 }}>{m.val}</div>
            <div style={{ fontSize: 5.5, color: "rgba(255,255,255,0.38)", marginTop: 2, lineHeight: 1.3 }}>{m.lbl}</div>
          </div>
        ))}
      </div>
      {/* Production lines */}
      <div style={{ padding: "0 10px" }}>
        <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.38)", marginBottom: 6 }}>Production Lines</div>
        {lines.map((l, i) => (
          <div key={i} style={{ marginBottom: 9 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
              <span style={{ fontSize: 7.5, color: "#e2e8f0", fontWeight: 600 }}>{l.name}</span>
              <span style={{ fontSize: 7, color: l.clr, fontWeight: 700 }}>{l.val} units</span>
            </div>
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 4, height: 6, overflow: "hidden" }}>
              <motion.div style={{ height: "100%", background: l.clr, borderRadius: 4 }}
                initial={{ width: 0 }} animate={{ width: `${l.pct}%` }}
                transition={{ delay: i * 0.18, duration: 0.7, ease: "easeOut" }} />
            </div>
            <div style={{ fontSize: 5.5, color: "rgba(255,255,255,0.28)", marginTop: 1.5 }}>{l.pct}% of monthly capacity</div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div style={{ margin: "0 10px", padding: "4px 8px", background: "rgba(0,242,255,0.05)", borderRadius: 7, border: "1px solid rgba(0,242,255,0.15)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 6, color: "rgba(255,255,255,0.35)" }}>Powered by Vextor ERP</span>
        <span style={{ fontSize: 6.5, color: "#00F2FF", fontWeight: 700 }}>↓ PDF</span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Mobile showcase — auto-rotating 3-screen phone mockup
───────────────────────────────────────────────────────── */
function MobileShowcase() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % 3), 3800);
    return () => clearInterval(t);
  }, []);

  const tabs = [
    { label: "Website",   color: "#00F2FF" },
    { label: "Dashboard", color: "#FF9933" },
    { label: "Report",    color: "#22c55e" },
  ];

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Phone frame */}
      <div className="relative" style={{ width: 196, height: 418 }}>
        {/* Shell */}
        <div className="absolute inset-0" style={{
          borderRadius: 40,
          background: "linear-gradient(160deg, #1e293b 0%, #0c1a2e 100%)",
          border: "2.5px solid #2d4060",
          boxShadow: "0 28px 70px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(0,242,255,0.08)",
        }}>
          {/* Screen glass */}
          <div className="absolute overflow-hidden" style={{ inset: 3, borderRadius: 37, background: "#040c1e" }}>
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 z-20" style={{
              transform: "translateX(-50%)", width: 70, height: 22,
              background: "#000", borderRadius: "0 0 14px 14px",
            }} />
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 z-10 flex justify-between pt-1 px-5"
              style={{ fontSize: 7, color: "rgba(255,255,255,0.42)", pointerEvents: "none" }}>
              <span>9:41</span>
              <span style={{ letterSpacing: 1 }}>●●● ▌</span>
            </div>
            {/* Content area */}
            <div className="absolute inset-0" style={{ paddingTop: 26 }}>
              <AnimatePresence mode="wait">
                {active === 0 && <PhoneWebsite key="web" />}
                {active === 1 && <PhoneDashboard key="dash" />}
                {active === 2 && <PhoneReport key="report" />}
              </AnimatePresence>
            </div>
          </div>
          {/* Power button */}
          <div style={{ position: "absolute", right: -3, top: 88, width: 3, height: 28, background: "#3a5070", borderRadius: "0 2px 2px 0" }} />
          {/* Volume buttons */}
          <div style={{ position: "absolute", left: -3, top: 78, width: 3, height: 22, background: "#3a5070", borderRadius: "2px 0 0 2px" }} />
          <div style={{ position: "absolute", left: -3, top: 106, width: 3, height: 22, background: "#3a5070", borderRadius: "2px 0 0 2px" }} />
          {/* Home indicator */}
          <div style={{ position: "absolute", bottom: 7, left: "50%", transform: "translateX(-50%)", width: 74, height: 3, background: "rgba(255,255,255,0.25)", borderRadius: 2 }} />
        </div>
        {/* Glow base */}
        <div style={{ position: "absolute", bottom: -18, left: "50%", transform: "translateX(-50%)", width: 120, height: 24, background: "rgba(0,242,255,0.1)", borderRadius: "50%", filter: "blur(16px)" }} />
      </div>

      {/* Tab selector */}
      <div className="flex gap-2">
        {tabs.map((t, i) => (
          <button key={t.label} onClick={() => setActive(i)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-300"
            style={{
              fontSize: 10,
              fontWeight: active === i ? 600 : 400,
              background: active === i ? `${t.color}15` : "transparent",
              border: `1px solid ${active === i ? t.color + "55" : "rgba(255,255,255,0.08)"}`,
              color: active === i ? t.color : "#64748b",
              cursor: "pointer",
            }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: active === i ? t.color : "#475569", display: "inline-block", flexShrink: 0 }} />
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Infrastructure architecture diagram
───────────────────────────────────────────────────────── */
function InfraArchDiagram() {
  const svcs = [
    { Icon: Shield,   name: "Auth",      sub: "Service",   clr: "#22c55e" },
    { Icon: Database, name: "Orders",    sub: "API",       clr: "#00F2FF" },
    { Icon: Layers,   name: "Notify",    sub: "Service",   clr: "#f97316" },
    { Icon: Server,   name: "Analytics", sub: "Engine",    clr: "#a855f7" },
  ];

  function Connector({ delay = 0 }: { delay?: number }) {
    return (
      <div className="flex justify-center py-0.5">
        <div className="relative" style={{ width: 1, height: 24, background: "rgba(0,242,255,0.12)" }}>
          <motion.div style={{ position: "absolute", width: 7, height: 7, borderRadius: "50%", background: "#00F2FF", left: -3, top: 0 }}
            animate={{ y: [0, 20], opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, ease: "easeIn", delay, repeatDelay: 1.2 }} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-0 w-full">
      {/* Client layer */}
      <div className="flex gap-3 justify-center">
        {[
          { label: "Web App",  Icon: Globe,      clr: "#00F2FF" },
          { label: "Mobile",   Icon: Smartphone, clr: "#FF9933" },
        ].map(c => (
          <div key={c.label} className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass border border-white/10">
            <c.Icon size={13} style={{ color: c.clr }} />
            <span style={{ fontSize: 11, color: "#cbd5e1", fontWeight: 500 }}>{c.label}</span>
          </div>
        ))}
      </div>

      <Connector delay={0} />

      {/* API Gateway */}
      <div className="flex items-center gap-2.5 px-5 py-2 rounded-xl border border-[#f97316]/30"
        style={{ background: "rgba(249,115,22,0.07)" }}>
        <motion.div className="w-2 h-2 rounded-full" style={{ background: "#f97316" }}
          animate={{ opacity: [1, 0.35, 1] }} transition={{ duration: 1.6, repeat: Infinity }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: "#f97316" }}>API Gateway</span>
        <span style={{ fontSize: 9, color: "#64748b" }}>· rate limited</span>
      </div>

      <Connector delay={0.4} />

      {/* Microservices grid */}
      <div className="grid grid-cols-2 gap-2 w-full">
        {svcs.map((s, i) => (
          <motion.div key={s.name}
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-2 p-2 rounded-xl"
            style={{ background: `${s.clr}0C`, border: `1px solid ${s.clr}28` }}>
            <s.Icon size={12} style={{ color: s.clr, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#e2e8f0", lineHeight: 1.2 }}>{s.name}</div>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.3)" }}>{s.sub}</div>
            </div>
            <motion.div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: s.clr }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4 + i * 0.3, repeat: Infinity }} />
          </motion.div>
        ))}
      </div>

      <Connector delay={0.8} />

      {/* DB Cluster */}
      <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-[#00F2FF]/25 w-full justify-center"
        style={{ background: "rgba(0,242,255,0.06)" }}>
        <Database size={13} className="text-[#00F2FF]" />
        <span style={{ fontSize: 11, fontWeight: 600, color: "#00F2FF" }}>PostgreSQL Cluster</span>
        <motion.span style={{ fontSize: 9, color: "#22c55e", marginLeft: 6 }}
          animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
          ● 3 replicas
        </motion.span>
      </div>

      <Connector delay={1.2} />

      {/* Oracle Cloud */}
      <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-[#a855f7]/25 w-full justify-center"
        style={{ background: "rgba(168,85,247,0.06)" }}>
        <Cloud size={13} className="text-[#a855f7]" />
        <span style={{ fontSize: 11, fontWeight: 600, color: "#a855f7" }}>Oracle Cloud Backup</span>
        <span style={{ fontSize: 9, color: "#64748b", marginLeft: 4 }}>Daily · 99.99%</span>
      </div>
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
        <div className="grid md:grid-cols-2 gap-10 items-center">

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
            <div className="glass rounded-2xl p-5 border border-[#00F2FF]/20">
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
            {/* Phone mockup — 3-screen showcase */}
            <div className="order-2 md:order-1 flex justify-center">
              <MobileShowcase />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#FF9933]/10 border border-[#FF9933]/30 flex items-center justify-center">
                  <Smartphone size={24} className="text-[#FF9933]" />
                </div>
                <div>
                  <div className="text-xs text-[#FF9933] font-medium uppercase tracking-widest">Cross-Platform</div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>Mobile & Web</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                Flutter-powered Android & iOS apps plus Next.js 15 web — your business in every pocket, on every screen. The mockup on the left shows real screens we deliver.
              </p>
              <div className="space-y-3 mb-5">
                {[
                  { clr: "#00F2FF", label: "Website",   desc: "Branded storefront with CMS, SEO-ready and mobile-first" },
                  { clr: "#FF9933", label: "Dashboard",  desc: "Live sales KPIs, charts, orders — all in one glance" },
                  { clr: "#22c55e", label: "Reports",    desc: "Auto-generated monthly production & finance PDFs" },
                ].map((s, i) => (
                  <motion.div key={s.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl glass border border-white/[0.06] hover:border-white/10 transition-colors">
                    <div className="w-1 h-10 rounded-full shrink-0 mt-0.5" style={{ background: s.clr }} />
                    <div>
                      <div className="text-sm font-semibold mb-0.5" style={{ color: s.clr }}>{s.label}</div>
                      <div className="text-xs text-muted-foreground leading-snug">{s.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { label: "Flutter Android/iOS", desc: "One codebase, both stores" },
                  { label: "Next.js 15 Web",      desc: "React Server Components" },
                  { label: "Offline First",        desc: "Works without internet" },
                  { label: "Push Notifications",   desc: "Instant business alerts" },
                ].map((item, i) => (
                  <motion.div key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-3 rounded-xl glass border border-[#FF9933]/10 hover:border-[#FF9933]/28 transition-colors">
                    <div className="text-xs font-semibold mb-1">{item.label}</div>
                    <div className="text-[11px] text-muted-foreground">{item.desc}</div>
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

            {/* Live architecture diagram */}
            <div className="glass rounded-2xl p-5 border border-[#00F2FF]/15">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs text-[#00F2FF] font-medium uppercase tracking-widest">Live Architecture</span>
                <div className="flex items-center gap-1.5">
                  <motion.div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"
                    animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
                  <span className="text-[10px] text-muted-foreground">All systems operational</span>
                </div>
              </div>
              <InfraArchDiagram />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
