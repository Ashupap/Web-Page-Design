import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle, ChevronRight, ArrowLeft, MessageCircle, Send } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

const steps = [
  {
    id: 1,
    title: "What's your biggest bottleneck?",
    subtitle: "Select the challenge holding your business back",
  },
  {
    id: 2,
    title: "Tell us about your business",
    subtitle: "Help us understand your scale and industry",
  },
  {
    id: 3,
    title: "How can we reach you?",
    subtitle: "We'll respond within 2 hours on WhatsApp",
  },
];

const bottlenecks = [
  { id: "manual", label: "Manual Work", emoji: "📝", desc: "Too much paperwork, data entry, and repetitive tasks" },
  { id: "website", label: "Bad Website", emoji: "🌐", desc: "No online presence or poor customer experience" },
  { id: "servers", label: "Server Crashes", emoji: "💥", desc: "Downtime, data loss, or infrastructure failures" },
  { id: "all", label: "All of the above", emoji: "🚀", desc: "Need a complete digital transformation" },
];

const industries = [
  "Retail / Trading", "Manufacturing", "Healthcare", "Education",
  "Real Estate", "Food & Beverage", "Logistics", "Professional Services", "Other"
];

const scales = [
  "1-10 employees", "11-50 employees", "51-200 employees", "200+ employees"
];

export function ContactPage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string>("");
  const [industry, setIndustry] = useState("");
  const [scale, setScale] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const goNext = () => setStep((s) => Math.min(s + 1, 3));
  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    if (!name || !whatsapp) return;
    const message = encodeURIComponent(
      `Hi Vextor! I need help with: ${selected}\nBusiness: ${industry}, ${scale}\nName: ${name}`
    );
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#00F2FF]/20 text-[#00F2FF] text-xs font-medium mb-4">
            The Growth Engine
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Get Your{" "}
            <span className="text-[#00F2FF]">Smart Quote</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            3 quick questions. We'll send you a custom solution roadmap within 2 hours.
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-2xl mx-auto">
        {/* Step indicator */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-10">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center gap-3">
                <motion.div
                  animate={{
                    backgroundColor: step >= s.id ? "#00F2FF" : "transparent",
                    borderColor: step >= s.id ? "#00F2FF" : "rgba(0,242,255,0.3)",
                    scale: step === s.id ? 1.2 : 1,
                  }}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors"
                  style={{ color: step >= s.id ? "#0A192F" : "#00F2FF" }}
                >
                  {step > s.id ? <CheckCircle size={14} /> : s.id}
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="w-12 h-0.5 bg-[#00F2FF]/20">
                    <motion.div
                      className="h-full bg-[#00F2FF]"
                      animate={{ width: step > s.id ? "100%" : "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Form card */}
        <ScrollReveal delay={0.1}>
          <div className="glass rounded-3xl border border-[#00F2FF]/20 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00F2FF]/5 rounded-full blur-3xl" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl mb-4"
                  >
                    🚀
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 text-[#00F2FF]" style={{ fontFamily: "'Sora', sans-serif" }}>
                    You're all set!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We've received your request. Our Solution Architect will WhatsApp you within 2 hours.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm">
                    <MessageCircle size={14} />
                    Check WhatsApp for our response
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="mb-6 relative z-10">
                    <div className="text-xs text-[#00F2FF] font-medium uppercase tracking-widest mb-1">
                      Step {step} of 3
                    </div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {steps[step - 1].title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{steps[step - 1].subtitle}</p>
                  </div>

                  {/* Step 1 */}
                  {step === 1 && (
                    <div className="space-y-3">
                      {bottlenecks.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => setSelected(item.label)}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className={`w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 flex items-center gap-4 ${
                            selected === item.label
                              ? "border-[#00F2FF] bg-[#00F2FF]/10"
                              : "border-border/50 hover:border-[#00F2FF]/40 hover:bg-[#00F2FF]/5"
                          }`}
                        >
                          <span className="text-2xl">{item.emoji}</span>
                          <div>
                            <div className="font-semibold text-sm">{item.label}</div>
                            <div className="text-xs text-muted-foreground">{item.desc}</div>
                          </div>
                          {selected === item.label && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-auto"
                            >
                              <CheckCircle size={18} className="text-[#00F2FF]" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2 block">
                          Industry
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {industries.map((ind) => (
                            <motion.button
                              key={ind}
                              onClick={() => setIndustry(ind)}
                              whileTap={{ scale: 0.96 }}
                              className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                                industry === ind
                                  ? "border-[#00F2FF] bg-[#00F2FF]/10 text-[#00F2FF]"
                                  : "border-border/50 hover:border-[#00F2FF]/40 text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {ind}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2 block">
                          Business Scale
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {scales.map((s) => (
                            <motion.button
                              key={s}
                              onClick={() => setScale(s)}
                              whileTap={{ scale: 0.96 }}
                              className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                                scale === s
                                  ? "border-[#FF9933] bg-[#FF9933]/10 text-[#FF9933]"
                                  : "border-border/50 hover:border-[#FF9933]/40 text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {s}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2 block">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-[#00F2FF] focus:outline-none focus:ring-2 focus:ring-[#00F2FF]/20 text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2 block">
                          WhatsApp Number
                        </label>
                        <div className="flex gap-2">
                          <div className="px-3 py-3 rounded-xl bg-background border border-input text-sm text-muted-foreground">
                            +91
                          </div>
                          <input
                            type="tel"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            placeholder="98765 43210"
                            className="flex-1 px-4 py-3 rounded-xl bg-background border border-input focus:border-[#00F2FF] focus:outline-none focus:ring-2 focus:ring-[#00F2FF]/20 text-sm transition-all"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          We'll only use this to send your solution roadmap. No spam, ever.
                        </p>
                      </div>

                      {/* Summary */}
                      <div className="p-4 rounded-xl bg-[#00F2FF]/5 border border-[#00F2FF]/20 space-y-2">
                        <div className="text-xs font-medium text-[#00F2FF] mb-2">Your Request Summary</div>
                        <div className="text-xs text-muted-foreground">Bottleneck: <span className="text-foreground">{selected || "—"}</span></div>
                        <div className="text-xs text-muted-foreground">Industry: <span className="text-foreground">{industry || "—"}</span></div>
                        <div className="text-xs text-muted-foreground">Scale: <span className="text-foreground">{scale || "—"}</span></div>
                      </div>
                    </div>
                  )}

                  {/* Navigation buttons */}
                  <div className="flex items-center justify-between mt-8">
                    {step > 1 ? (
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        onClick={goBack}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 text-muted-foreground text-sm hover:text-foreground hover:border-[#00F2FF]/40 transition-all"
                      >
                        <ArrowLeft size={14} />
                        Back
                      </motion.button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={goNext}
                        disabled={step === 1 && !selected || step === 2 && (!industry || !scale)}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00F2FF] text-[#0A192F] font-semibold text-sm cyan-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        Continue
                        <ChevronRight size={14} />
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleSubmit}
                        disabled={!name || !whatsapp}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        style={{ boxShadow: "0 0 20px rgba(37,211,102,0.3)" }}
                      >
                        <MessageCircle size={14} />
                        Send on WhatsApp
                        <Send size={14} />
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
