import { motion } from "framer-motion";
import { FileText, ChevronRight, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";
import { QuoteModal } from "../components/QuoteModal";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using vextor.in or engaging Vextor Technologies Pvt. Ltd. for any service, you agree to be bound by these Terms of Use.",
      "If you do not agree to these terms, please do not use our website or services.",
      "These terms apply to all visitors, clients, and prospective clients of Vextor.",
    ],
  },
  {
    title: "2. Services Provided",
    content: [
      "Vextor provides software development, automation, mobile app development, digital infrastructure, AI integration, cloud engineering, and related digital services.",
      "The specific scope, deliverables, timelines, and payment terms for each engagement are defined in a separate Service Agreement or Statement of Work (SOW).",
      "We reserve the right to refuse service to any individual or organisation at our sole discretion.",
    ],
  },
  {
    title: "3. Intellectual Property",
    content: [
      "All content on this website — including text, graphics, logos, icons, images, and software — is the property of Vextor Technologies Pvt. Ltd. and is protected by applicable Indian copyright and IP laws.",
      "Custom work produced for a client becomes the client's property only upon full payment as specified in the relevant SOW.",
      "Vextor retains the right to showcase completed work in its portfolio unless a specific NDA restricts this.",
      "You may not reproduce, distribute, or exploit any content from this site without prior written consent.",
    ],
  },
  {
    title: "4. Client Responsibilities",
    content: [
      "Clients are responsible for providing accurate, complete, and timely information required for project execution.",
      "Clients must ensure they have legal rights to any content, assets, or data provided to Vextor for use in the project.",
      "Delays in feedback or approvals from the client side that cause project timeline extensions are not the responsibility of Vextor.",
      "Clients are responsible for maintaining backups of their own data and systems.",
    ],
  },
  {
    title: "5. Payment Terms",
    content: [
      "Payment schedules are outlined in the individual SOW or proposal agreement.",
      "Standard terms require a minimum 50% advance before project commencement.",
      "Invoices unpaid beyond the due date may attract a late fee as specified in the contract.",
      "Vextor reserves the right to pause or suspend work on accounts with outstanding balances.",
      "All prices are in Indian Rupees (INR) unless otherwise stated. Applicable GST will be charged additionally.",
    ],
  },
  {
    title: "6. Confidentiality",
    content: [
      "Both parties agree to keep confidential any proprietary information disclosed during the engagement.",
      "Confidentiality obligations survive the termination of the service agreement.",
      "Vextor implements strict internal access controls to ensure client data is only accessible to team members directly involved in the project.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: [
      "Vextor shall not be liable for indirect, incidental, consequential, or punitive damages arising out of your use of our services.",
      "Our total liability for any claim shall not exceed the amount paid by the client for the specific service in question.",
      "Vextor is not responsible for third-party service outages (hosting providers, APIs, payment gateways) that affect delivered solutions.",
    ],
  },
  {
    title: "8. Warranty & Support",
    content: [
      "Vextor provides a post-delivery warranty period as specified in the SOW (typically 30–90 days) covering bug fixes for defects in our delivered work.",
      "The warranty does not cover issues arising from client-side modifications, third-party integrations, or force majeure events.",
      "Ongoing support and maintenance beyond the warranty period are available under a separate Retainer or AMC agreement.",
    ],
  },
  {
    title: "9. Termination",
    content: [
      "Either party may terminate a service agreement with written notice as specified in the relevant SOW.",
      "Upon termination, the client is liable for payment for all work completed up to the date of termination.",
      "Vextor reserves the right to immediately terminate services in cases of breach of these terms, fraudulent activity, or non-payment.",
    ],
  },
  {
    title: "10. Dispute Resolution",
    content: [
      "In the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation.",
      "If unresolved, disputes shall be subject to arbitration under the Arbitration and Conciliation Act, 1996 (India).",
      "These terms are governed by and construed in accordance with the laws of India.",
      "The jurisdiction for any legal proceedings shall be the courts of India.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    content: [
      "Vextor reserves the right to modify these Terms of Use at any time.",
      "Updated terms will be posted on this page with a revised effective date.",
      "Continued use of our services after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "12. Contact",
    content: [
      "For questions regarding these Terms of Use, please contact us:",
      "Email: hello@vextor.in",
      "WhatsApp: +91 99999 99999",
      "Vextor Technologies Pvt. Ltd., India",
    ],
  },
];

export function TermsPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background pt-16">
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />

      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 svg-grid opacity-10" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,153,51,0.05) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#FF9933]/30 text-[#FF9933] text-xs font-medium mb-6"
          >
            <FileText size={12} /> Legal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Terms of <span className="text-[#FF9933]">Use</span>
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
            Please read these Terms of Use carefully before using our website or services.
            These terms constitute a legally binding agreement between you and Vextor Technologies Pvt. Ltd.
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
              style={{ background: "rgba(10,25,47,0.5)", border: "1px solid rgba(255,153,51,0.08)" }}
            >
              <h2 className="font-bold text-base text-foreground mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
                {sec.title}
              </h2>
              <ul className="space-y-2">
                {sec.content.map((line, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <ChevronRight size={13} className="text-[#FF9933] mt-0.5 flex-shrink-0" />
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
          style={{ background: "rgba(10,25,47,0.6)", border: "1px solid rgba(255,153,51,0.15)" }}
        >
          <p className="text-muted-foreground text-sm mb-5">
            Ready to build something great? Get a free custom roadmap from our team.
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
