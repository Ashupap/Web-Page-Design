import { motion } from "framer-motion";
import { Shield, ChevronRight, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";
import { QuoteModal } from "../components/QuoteModal";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal identification information (name, email address, phone number) when you contact us or request a quote.",
      "Business information (company name, business type, number of employees) to tailor our services.",
      "Technical data (IP address, browser type, pages visited) collected automatically when you use our website.",
      "Communication records including emails, WhatsApp messages, and call logs related to project discussions.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To respond to your inquiries, provide quotes, and deliver the services you've requested.",
      "To communicate updates about your project, invoices, and support requests.",
      "To improve our website, services, and user experience based on aggregated analytics.",
      "To send you relevant updates about Vextor services — you can opt out at any time.",
      "To comply with applicable Indian laws including the Information Technology Act, 2000.",
    ],
  },
  {
    title: "3. Data Sharing & Disclosure",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "We may share data with trusted service providers (cloud platforms, payment processors) strictly to deliver our services, bound by confidentiality agreements.",
      "We may disclose information if required by law, court order, or government authority under applicable Indian legislation.",
      "Project-specific data shared with our engineers is governed by internal NDAs and access controls.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "We implement bank-grade SSL/TLS encryption for all data in transit.",
      "Access to client data is restricted to authorised team members on a need-to-know basis.",
      "We conduct regular security audits and vulnerability assessments on our infrastructure.",
      "In the event of a data breach, we will notify affected parties within 72 hours as required under applicable law.",
    ],
  },
  {
    title: "5. Cookies & Tracking",
    content: [
      "Our website uses essential cookies required for basic functionality.",
      "Analytics cookies (e.g., page visit counts) may be used to help us improve site performance — these do not identify you personally.",
      "You can disable cookies via your browser settings; note that some site features may not function correctly without them.",
    ],
  },
  {
    title: "6. Data Retention",
    content: [
      "We retain your personal information only as long as necessary to fulfil the purposes outlined in this policy or as required by law.",
      "Project-related data is archived securely for up to 7 years for audit and compliance purposes.",
      "You may request deletion of your personal data at any time by contacting us (subject to legal retention obligations).",
    ],
  },
  {
    title: "7. Your Rights",
    content: [
      "Right to access: You may request a copy of the personal data we hold about you.",
      "Right to correction: You may request correction of inaccurate or incomplete data.",
      "Right to deletion: You may request deletion of your data, subject to legal requirements.",
      "Right to opt-out: You can unsubscribe from marketing communications at any time.",
      "To exercise any of these rights, email us at: hello@vextor.in",
    ],
  },
  {
    title: "8. Third-Party Links",
    content: [
      "Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites.",
      "We recommend reviewing the privacy policy of any third-party site you visit.",
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      "Our services are intended for businesses and individuals aged 18 and above.",
      "We do not knowingly collect personal information from minors.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    content: [
      "We may update this Privacy Policy periodically. Changes will be posted on this page with a revised effective date.",
      "Continued use of our services after changes are posted constitutes your acceptance of the updated policy.",
    ],
  },
  {
    title: "11. Contact Us",
    content: [
      "For any privacy-related questions, concerns, or requests, please contact us:",
      "Email: hello@vextor.in",
      "WhatsApp: +91 99999 99999",
      "Address: India — Serving SMEs Nationwide",
    ],
  },
];

export function PrivacyPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background pt-16">
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />

      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 svg-grid opacity-10" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,242,255,0.05) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-medium mb-6"
          >
            <Shield size={12} /> Legal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Privacy <span className="text-[#00F2FF]">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm"
          >
            Effective Date: <span className="text-foreground">1 January 2026</span> &nbsp;·&nbsp; Last Updated: <span className="text-foreground">March 2026</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto"
          >
            Vextor Technologies ("Vextor", "we", "our", "us") is committed to protecting your privacy.
            This policy explains how we collect, use, and safeguard your information.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              className="rounded-2xl p-6 sm:p-7"
              style={{ background: "rgba(10,25,47,0.5)", border: "1px solid rgba(0,242,255,0.08)" }}
            >
              <h2 className="font-bold text-base text-foreground mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
                {sec.title}
              </h2>
              <ul className="space-y-2">
                {sec.content.map((line, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <ChevronRight size={13} className="text-[#00F2FF] mt-0.5 flex-shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center rounded-3xl p-8"
          style={{ background: "rgba(10,25,47,0.6)", border: "1px solid rgba(0,242,255,0.15)" }}
        >
          <p className="text-muted-foreground text-sm mb-5">
            Have a project in mind? Get a free custom roadmap from our team.
          </p>
          <motion.button
            onClick={() => setQuoteOpen(true)}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00F2FF] text-[#0A192F] font-bold text-sm cyan-glow"
          >
            <Zap size={15} className="fill-[#0A192F]" />
            Get Smart Quote — It's Free
            <ArrowRight size={14} />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
