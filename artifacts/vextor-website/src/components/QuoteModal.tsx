import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap } from "lucide-react";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

const services = [
  "Business Automation (n8n Workflows)",
  "Mobile App (Flutter)",
  "Web Application (Next.js / React)",
  "AI Integration & Chatbots",
  "Cloud Infrastructure Setup",
  "Security Audit & Hardening",
  "Social Media Automation",
  "Custom ERP / CRM System",
  "Other / Not Sure",
];

const budgets = [
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000 – ₹15,00,000",
  "₹15,00,000+",
  "Let's discuss",
];

export function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [form, setForm] = useState({ name: "", company: "", contact: "", service: "", budget: "", brief: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); onClose(); setForm({ name: "", company: "", contact: "", service: "", budget: "", brief: "" }); }, 2500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(7,24,40,0.85)", backdropFilter: "blur(12px)" }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            className="relative w-full max-w-lg rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
            style={{ background: "linear-gradient(135deg,#071828,#0d2540)", border: "1px solid rgba(0,242,255,0.2)" }}
          >
            {/* Cyan glow top border */}
            <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg,transparent,#00F2FF,transparent)" }} />

            {/* Header */}
            <div className="px-7 pt-7 pb-5 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Zap size={16} className="text-[#00F2FF]" />
                  <span className="text-xs font-semibold text-[#00F2FF] uppercase tracking-widest">Free Consultation</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Sora', sans-serif" }}>
                  Get Your <span className="text-[#00F2FF]">Smart Quote</span>
                </h2>
                <p className="text-xs text-muted-foreground mt-1">We'll analyse your needs and respond within 24 hours.</p>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Form */}
            <div className="px-7 pb-7">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-lg font-bold text-[#00F2FF] mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Quote Request Sent!</h3>
                  <p className="text-sm text-muted-foreground">Our team will reach out within 24 hours with a tailored proposal.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">Your Name *</label>
                      <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:ring-1 focus:ring-[#00F2FF]/50"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">Company / Business *</label>
                      <input required value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                        placeholder="Sharma Traders"
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:ring-1 focus:ring-[#00F2FF]/50"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Phone / Email *</label>
                    <input required value={form.contact} onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
                      placeholder="+91 98765 43210 or you@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:ring-1 focus:ring-[#00F2FF]/50"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Service You Need *</label>
                    <select required value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm text-foreground outline-none transition-all focus:ring-1 focus:ring-[#00F2FF]/50 appearance-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <option value="" disabled style={{ background: "#0d2540" }}>Select a service</option>
                      {services.map(s => <option key={s} value={s} style={{ background: "#0d2540" }}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Monthly / Project Budget *</label>
                    <select required value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm text-foreground outline-none transition-all focus:ring-1 focus:ring-[#00F2FF]/50 appearance-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <option value="" disabled style={{ background: "#0d2540" }}>Select budget range</option>
                      {budgets.map(b => <option key={b} value={b} style={{ background: "#0d2540" }}>{b}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Brief About Your Project *</label>
                    <textarea required value={form.brief} onChange={e => setForm(f => ({ ...f, brief: e.target.value }))}
                      placeholder="Describe your business challenge, what you want to automate or build, and the problem you want solved..."
                      rows={3}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 outline-none resize-none transition-all focus:ring-1 focus:ring-[#00F2FF]/50"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-[#0A192F]"
                    style={{ background: "linear-gradient(135deg,#00F2FF,#00bcd4)", boxShadow: "0 0 20px rgba(0,242,255,0.3)" }}
                  >
                    <Zap size={14} /> Get My Free Quote
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
