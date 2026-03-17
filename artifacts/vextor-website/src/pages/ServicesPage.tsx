import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Smartphone, Globe, Server, Cpu, Database, Shield, Cloud, Code, Layers } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

function AnimatedFlowChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const nodes = [
    { x: 50, y: 30, label: "Form Input", icon: "📝" },
    { x: 200, y: 80, label: "CRM", icon: "👥" },
    { x: 350, y: 30, label: "Invoicing", icon: "📄" },
    { x: 200, y: 160, label: "Inventory", icon: "📦" },
    { x: 350, y: 130, label: "HR Mgmt", icon: "🏢" },
    { x: 500, y: 80, label: "Insights", icon: "📊" },
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

        {/* Paths */}
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="#00F2FF"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="200"
            strokeDashoffset={isInView ? 0 : 200}
            markerEnd="url(#arrow)"
            opacity="0.6"
            style={{ transition: `stroke-dashoffset ${0.6}s ease ${i * 0.2}s` }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
          >
            <circle cx={node.x + 10} cy={node.y + 10} r="28" fill="rgba(0,242,255,0.08)" stroke="#00F2FF" strokeWidth="1" filter="url(#nodeGlow)" />
            <text x={node.x + 10} y={node.y + 14} textAnchor="middle" fontSize="14">{node.icon}</text>
            <text x={node.x + 10} y={node.y + 38} textAnchor="middle" fontSize="8" fill="#00F2FF" fontFamily="Inter, sans-serif">{node.label}</text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

export function ServicesPage() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#00F2FF]/20 text-[#00F2FF] text-xs font-medium mb-4">
            The Infrastructure Suite
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Services Built for{" "}
            <span className="text-[#00F2FF]">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From traditional Bahi-Khata to enterprise cloud. We handle the tech so you can focus on growth.
          </p>
        </div>
      </ScrollReveal>

      {/* Service 1: Workflow Automation */}
      <div className="mb-24">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00F2FF]/10 border border-[#00F2FF]/30 flex items-center justify-center">
                  <Settings size={24} className="text-[#00F2FF]" />
                </div>
                <div>
                  <div className="text-xs text-[#00F2FF] font-medium uppercase tracking-widest">Deep Dive</div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>Workflow Automation</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed italic">
                "From Bahi-Khata to Cloud"
              </p>
              <div className="space-y-4">
                {[
                  { icon: Database, label: "Custom CRM", desc: "Tailored customer relationship management with smart follow-ups" },
                  { icon: Code, label: "Automated Invoicing", desc: "GST-compliant invoices generated and sent automatically" },
                  { icon: Layers, label: "Inventory Tracking", desc: "Real-time stock levels across all locations with alerts" },
                  { icon: Shield, label: "HR Management", desc: "Payroll, attendance and performance all in one place" },
                ].map((feat, i) => (
                  <motion.div
                    key={feat.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl glass border border-[#00F2FF]/10 hover:border-[#00F2FF]/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#00F2FF]/10 flex items-center justify-center shrink-0">
                      <feat.icon size={16} className="text-[#00F2FF]" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-1">{feat.label}</div>
                      <div className="text-muted-foreground text-xs">{feat.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6 border border-[#00F2FF]/20">
              <div className="text-sm font-medium text-[#00F2FF] mb-4">Data Flow Architecture</div>
              <AnimatedFlowChart />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Service 2: Mobile & Web */}
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
                {/* Phone frame */}
                <div className="w-52 h-96 rounded-3xl border-4 border-foreground/20 glass overflow-hidden shadow-2xl relative">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-foreground/30" />
                  <div className="mt-8 p-3 space-y-3">
                    {/* App header */}
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-[#00F2FF]" style={{ fontFamily: "'Sora', sans-serif" }}>Vextor Admin</div>
                      <div className="w-6 h-6 rounded-full bg-[#00F2FF]/20 border border-[#00F2FF]/30" />
                    </div>
                    {/* KPI cards */}
                    <div className="grid grid-cols-2 gap-2">
                      {[{ v: "₹2.4L", l: "Revenue", c: "#00F2FF" }, { v: "142", l: "Orders", c: "#FF9933" }].map((kpi) => (
                        <div key={kpi.l} className="rounded-xl p-2 border border-white/10" style={{ background: `${kpi.c}10` }}>
                          <div className="font-bold text-sm" style={{ color: kpi.c }}>{kpi.v}</div>
                          <div className="text-[9px] text-muted-foreground">{kpi.l}</div>
                        </div>
                      ))}
                    </div>
                    {/* Mini chart */}
                    <div className="rounded-xl p-3 glass border border-white/5">
                      <div className="text-[9px] text-muted-foreground mb-2">Weekly Sales</div>
                      <div className="flex items-end gap-1 h-12">
                        {[30, 55, 40, 80, 60, 90, 70].map((h, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{ background: i === 5 ? "#00F2FF" : "rgba(0,242,255,0.25)" }}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Recent orders list */}
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
                {/* Glow effect under phone */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#00F2FF]/20 blur-xl rounded-full" />
              </motion.div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FF9933]/10 border border-[#FF9933]/30 flex items-center justify-center">
                  <Smartphone size={24} className="text-[#FF9933]" />
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
                  { label: "Next.js 15 Web", desc: "React Server Components" },
                  { label: "Offline First", desc: "Works without internet" },
                  { label: "Push Notifications", desc: "Instant business alerts" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-3 rounded-xl glass border border-[#FF9933]/10 hover:border-[#FF9933]/30 transition-colors"
                  >
                    <div className="text-xs font-semibold mb-1">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Service 3: Infrastructure */}
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
                  { icon: Cloud, label: "Oracle Cloud Backups", desc: "Automated daily backups with 99.99% uptime" },
                  { icon: Layers, label: "Docker Microservices", desc: "Horizontally scalable, independent services" },
                  { icon: Shield, label: "Bank-grade Security", desc: "End-to-end encryption, SOC2 compliance ready" },
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
                  { name: "Auth Service", uptime: "100%", load: 18 },
                  { name: "DB Cluster", uptime: "99.97%", load: 65 },
                  { name: "CDN Edge", uptime: "99.99%", load: 28 },
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
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-[#00F2FF]"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs text-[#00F2FF]">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
