import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Users } from "lucide-react";

interface JoinModalProps {
  open: boolean;
  onClose: () => void;
}

const domains = [
  "Software Architecture",
  "Infrastructure & DevOps",
  "Full-Stack Development",
  "Security Research",
  "Cloud Engineering",
  "AI / Machine Learning",
  "UI/UX Design",
  "Mobile Development",
  "Other",
];

export function JoinModal({ open, onClose }: JoinModalProps) {
  const [form, setForm] = useState({ name: "", email: "", domain: "", projects: "", why: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); onClose(); setForm({ name: "", email: "", domain: "", projects: "", why: "" }); }, 2500);
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
            className="relative w-full max-w-lg rounded-3xl overflow-hidden"
            style={{ background: "linear-gradient(135deg,#071828,#0d2540)", border: "1px solid rgba(255,153,51,0.25)" }}
          >
            {/* India stripe top */}
            <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg,#FF9933 33.3%,#fff 33.3% 66.6%,#138808 66.6%)" }} />

            {/* Header */}
            <div className="px-7 pt-7 pb-5 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Users size={18} className="text-[#FF9933]" />
                  <span className="text-xs font-semibold text-[#FF9933] uppercase tracking-widest">Join the Movement</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Sora', sans-serif" }}>
                  Build India's Future <span className="text-[#FF9933]">With Us</span>
                </h2>
                <p className="text-xs text-muted-foreground mt-1">Tell us about yourself and why you want to be part of Vextor.</p>
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
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-lg font-bold text-[#FF9933] mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Application Received!</h3>
                  <p className="text-sm text-muted-foreground">We'll review your profile and get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">Full Name *</label>
                      <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:ring-1 focus:ring-[#FF9933]/50"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:ring-1 focus:ring-[#FF9933]/50"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Domain of Expertise *</label>
                    <select required value={form.domain} onChange={e => setForm(f => ({ ...f, domain: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm text-foreground outline-none transition-all focus:ring-1 focus:ring-[#FF9933]/50 appearance-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <option value="" disabled style={{ background: "#0d2540" }}>Select your primary domain</option>
                      {domains.map(d => <option key={d} value={d} style={{ background: "#0d2540" }}>{d}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Projects You've Worked On *</label>
                    <textarea required value={form.projects} onChange={e => setForm(f => ({ ...f, projects: e.target.value }))}
                      placeholder="Briefly describe 1–3 notable projects: what you built, the tech stack, your role, and the impact..."
                      rows={3}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 outline-none resize-none transition-all focus:ring-1 focus:ring-[#FF9933]/50"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Why Do You Want to Join Vextor? *</label>
                    <textarea required value={form.why} onChange={e => setForm(f => ({ ...f, why: e.target.value }))}
                      placeholder="Tell us what excites you about our mission to digitize 1 Million Indian SMEs by 2047..."
                      rows={3}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 outline-none resize-none transition-all focus:ring-1 focus:ring-[#FF9933]/50"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-[#0A192F]"
                    style={{ background: "linear-gradient(135deg,#FF9933,#ffb347)", boxShadow: "0 0 20px rgba(255,153,51,0.3)" }}
                  >
                    <Send size={14} /> Submit Application
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
