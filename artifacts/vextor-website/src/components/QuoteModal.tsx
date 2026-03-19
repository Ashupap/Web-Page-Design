import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, CheckCircle, ChevronRight, ArrowLeft, MessageCircle, Send, Clock, Shield, Star } from "lucide-react";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

const steps = [
  { id: 1, title: "What's your biggest bottleneck?", subtitle: "Select the challenge holding your business back" },
  { id: 2, title: "Tell us about your business",      subtitle: "Help us understand your scale and industry" },
  { id: 3, title: "How can we reach you?",            subtitle: "We'll respond within 2 hours on WhatsApp" },
];

const bottlenecks = [
  { id: "manual",  label: "Manual Work",         emoji: "📝", desc: "Paperwork, data entry & repetitive tasks" },
  { id: "website", label: "Bad Website",          emoji: "🌐", desc: "No online presence or poor UX" },
  { id: "servers", label: "Server Crashes",       emoji: "💥", desc: "Downtime, data loss or infra failures" },
  { id: "all",     label: "Full Digital Makeover",emoji: "🚀", desc: "Complete digital transformation" },
];

const industries = [
  "Retail / Trading", "Manufacturing", "Healthcare", "Education",
  "Real Estate", "Food & Beverage", "Logistics", "Professional Services", "Other",
];

const scales = ["1–10", "11–50", "51–200", "200+"];

const WHATSAPP = "919999999999";

export function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [step, setStep]           = useState(1);
  const [selected, setSelected]   = useState("");
  const [industry, setIndustry]   = useState("");
  const [scale, setScale]         = useState("");
  const [name, setName]           = useState("");
  const [whatsapp, setWhatsapp]   = useState("");
  const [submitted, setSubmitted] = useState(false);

  const goNext = () => setStep(s => Math.min(s + 1, 3));
  const goBack = () => setStep(s => Math.max(s - 1, 1));
  const canContinue = (step === 1 && !!selected) || (step === 2 && !!industry && !!scale);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1); setSelected(""); setIndustry(""); setScale("");
      setName(""); setWhatsapp(""); setSubmitted(false);
    }, 300);
  };

  const handleSubmit = () => {
    if (!name || !whatsapp) return;
    const msg = encodeURIComponent(
      `Hi Vextor! I need help with: ${selected}\nBusiness: ${industry}, ${scale} employees\nName: ${name}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(7,24,40,0.88)", backdropFilter: "blur(12px)" }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden"
            style={{ background: "linear-gradient(135deg,#071828,#0d2540)", border: "1px solid rgba(0,242,255,0.2)" }}
          >
            {/* Cyan glow top border */}
            <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg,transparent,#00F2FF,transparent)" }} />

            {/* Header */}
            <div className="px-6 sm:px-8 pt-6 pb-4 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Zap size={15} className="text-[#00F2FF]" />
                  <span className="text-xs font-semibold text-[#00F2FF] uppercase tracking-widest">Free Consultation</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Sora', sans-serif" }}>
                  Get Your <span className="text-[#00F2FF]">Smart Quote</span>
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">3 quick questions. Custom roadmap on WhatsApp in 2 hours.</p>
              </div>
              <button onClick={handleClose} className="p-1.5 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors mt-1">
                <X size={18} />
              </button>
            </div>

            {/* Body: two-column on md+ */}
            <div className="px-6 sm:px-8 pb-7 grid md:grid-cols-[1fr_1.5fr] gap-6 items-start">

              {/* Left: trust panel */}
              <div className="hidden md:flex flex-col gap-4 pt-2">
                <div className="space-y-3">
                  {[
                    { icon: Clock,  color: "#00F2FF", text: "Response within 2 hours" },
                    { icon: Shield, color: "#FF9933", text: "No spam — ever"          },
                    { icon: Star,   color: "#22c55e", text: "100% free consultation"  },
                  ].map(({ icon: Icon, color, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                        <Icon size={14} style={{ color }} />
                      </div>
                      <span className="text-sm text-muted-foreground">{text}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right: step form */}
              <div>
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-4">
                  {steps.map((s, i) => (
                    <div key={s.id} className="flex items-center gap-2">
                      <motion.div
                        animate={{
                          backgroundColor: step >= s.id ? "#00F2FF" : "transparent",
                          borderColor: step >= s.id ? "#00F2FF" : "rgba(0,242,255,0.3)",
                          scale: step === s.id ? 1.15 : 1,
                        }}
                        className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{ color: step >= s.id ? "#0A192F" : "#00F2FF" }}
                      >
                        {step > s.id ? <CheckCircle size={12} /> : s.id}
                      </motion.div>
                      {i < steps.length - 1 && (
                        <div className="h-0.5 bg-[#00F2FF]/15 w-6 sm:w-10">
                          <motion.div className="h-full bg-[#00F2FF]"
                            animate={{ width: step > s.id ? "100%" : "0%" }}
                            transition={{ duration: 0.4 }} />
                        </div>
                      )}
                    </div>
                  ))}
                  <span className="ml-auto text-xs text-muted-foreground">Step {step} of 3</span>
                </div>

                {/* Form card */}
                <div className="rounded-2xl border border-[#00F2FF]/15 p-4 sm:p-5 relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.02)" }}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F2FF]/4 rounded-full blur-3xl pointer-events-none" />

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div key="success"
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8">
                        <motion.div animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6 }} className="text-5xl mb-3">🚀</motion.div>
                        <h3 className="text-lg font-bold mb-2 text-[#00F2FF]" style={{ fontFamily: "'Sora', sans-serif" }}>
                          You're all set!
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          Our Solution Architect will WhatsApp you within 2 hours.
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                          style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "#25D366" }}>
                          <MessageCircle size={13} /> Check WhatsApp for our response
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div key={step}
                        initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25, ease: "easeInOut" }}>

                        <div className="mb-4">
                          <h3 className="text-sm font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                            {steps[step - 1].title}
                          </h3>
                          <p className="text-muted-foreground text-xs mt-0.5">{steps[step - 1].subtitle}</p>
                        </div>

                        {/* Step 1: Bottleneck */}
                        {step === 1 && (
                          <div className="grid grid-cols-2 gap-2">
                            {bottlenecks.map(item => (
                              <motion.button key={item.id}
                                onClick={() => setSelected(item.label)}
                                whileTap={{ scale: 0.97 }}
                                className={`p-3 rounded-xl border-2 text-left transition-all duration-200 relative ${
                                  selected === item.label
                                    ? "border-[#00F2FF] bg-[#00F2FF]/10"
                                    : "border-white/8 hover:border-[#00F2FF]/40 hover:bg-[#00F2FF]/5"
                                }`}>
                                <span className="text-xl block mb-1">{item.emoji}</span>
                                <div className="font-semibold text-xs leading-tight mb-0.5">{item.label}</div>
                                <div className="text-[10px] text-muted-foreground leading-tight">{item.desc}</div>
                                {selected === item.label && (
                                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-2 right-2">
                                    <CheckCircle size={13} className="text-[#00F2FF]" />
                                  </motion.div>
                                )}
                              </motion.button>
                            ))}
                          </div>
                        )}

                        {/* Step 2: Business info */}
                        {step === 2 && (
                          <div className="space-y-4">
                            <div>
                              <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">Industry</label>
                              <div className="grid grid-cols-3 gap-1.5">
                                {industries.map(ind => (
                                  <motion.button key={ind} onClick={() => setIndustry(ind)} whileTap={{ scale: 0.95 }}
                                    className={`p-2 rounded-lg border text-[10px] font-medium leading-tight transition-all ${
                                      industry === ind
                                        ? "border-[#00F2FF] bg-[#00F2FF]/10 text-[#00F2FF]"
                                        : "border-white/8 hover:border-[#00F2FF]/40 text-muted-foreground"
                                    }`}>
                                    {ind}
                                  </motion.button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">Team size</label>
                              <div className="grid grid-cols-4 gap-1.5">
                                {scales.map(s => (
                                  <motion.button key={s} onClick={() => setScale(s)} whileTap={{ scale: 0.95 }}
                                    className={`py-2 rounded-lg border text-xs font-semibold transition-all ${
                                      scale === s
                                        ? "border-[#FF9933] bg-[#FF9933]/10 text-[#FF9933]"
                                        : "border-white/8 hover:border-[#FF9933]/40 text-muted-foreground"
                                    }`}>
                                    {s}
                                  </motion.button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Step 3: Contact */}
                        {step === 3 && (
                          <div className="space-y-3">
                            <div>
                              <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">Your Name</label>
                              <input type="text" value={name} onChange={e => setName(e.target.value)}
                                placeholder="Rahul Sharma"
                                className="w-full px-3 py-2.5 rounded-xl bg-background border border-input focus:border-[#00F2FF] focus:outline-none focus:ring-2 focus:ring-[#00F2FF]/20 text-sm transition-all" />
                            </div>
                            <div>
                              <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">WhatsApp Number</label>
                              <div className="flex gap-2">
                                <div className="px-3 py-2.5 rounded-xl bg-background border border-input text-sm text-muted-foreground">+91</div>
                                <input type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
                                  placeholder="98765 43210"
                                  className="flex-1 px-3 py-2.5 rounded-xl bg-background border border-input focus:border-[#00F2FF] focus:outline-none focus:ring-2 focus:ring-[#00F2FF]/20 text-sm transition-all" />
                              </div>
                              <p className="text-[10px] text-muted-foreground mt-1">Used only to send your roadmap. No spam, ever.</p>
                            </div>
                            {/* Summary */}
                            <div className="p-3 rounded-xl border border-[#00F2FF]/20 grid grid-cols-3 gap-2"
                              style={{ background: "rgba(0,242,255,0.04)" }}>
                              {[
                                { label: "Challenge", value: selected  },
                                { label: "Industry",  value: industry  },
                                { label: "Team",      value: scale ? `${scale} emp.` : "—" },
                              ].map(item => (
                                <div key={item.label}>
                                  <div className="text-[9px] text-[#00F2FF] font-semibold uppercase mb-0.5">{item.label}</div>
                                  <div className="text-[10px] text-foreground">{item.value || "—"}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-5">
                          {step > 1 ? (
                            <motion.button whileTap={{ scale: 0.96 }} onClick={goBack}
                              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/10 text-muted-foreground text-sm hover:text-foreground hover:border-[#00F2FF]/40 transition-all">
                              <ArrowLeft size={13} /> Back
                            </motion.button>
                          ) : <div />}

                          {step < 3 ? (
                            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                              onClick={goNext} disabled={!canContinue}
                              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#00F2FF] text-[#0A192F] font-semibold text-sm cyan-glow disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                              Continue <ChevronRight size={13} />
                            </motion.button>
                          ) : (
                            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                              onClick={handleSubmit} disabled={!name || !whatsapp}
                              className="flex items-center gap-1.5 px-5 py-2 rounded-xl font-semibold text-sm text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                              style={{ background: "#25D366", boxShadow: "0 0 18px rgba(37,211,102,0.3)" }}>
                              <MessageCircle size={13} /> Send on WhatsApp <Send size={13} />
                            </motion.button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
