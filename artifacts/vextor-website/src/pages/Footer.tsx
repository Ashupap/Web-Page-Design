import { motion } from "framer-motion";
import { Zap, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative mt-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Vextor" className="h-9 w-9 object-contain" />
              <span
                className="text-xl font-bold"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  background: "linear-gradient(135deg, #00F2FF, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Vextor
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Enterprise-grade software at SME-friendly prices. Building the tech backbone for Vikshit Bharat 2047.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-8 h-8 rounded-lg glass border border-[#00F2FF]/20 flex items-center justify-center text-muted-foreground hover:text-[#00F2FF] transition-colors"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Services</h4>
            <ul className="space-y-2">
              {["Workflow Automation", "Mobile Apps", "Web Development", "Infrastructure", "AI Integration", "Social Marketing"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="text-sm text-muted-foreground hover:text-[#00F2FF] transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "#home" },
                { label: "SME Advantage", href: "#pricing" },
                { label: "2047 Vision", href: "#pricing" },
                { label: "Get Quote", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-muted-foreground hover:text-[#00F2FF] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Contact</h4>
            <ul className="space-y-3">
              {[
                { icon: Phone, label: "+91 99999 99999" },
                { icon: Mail, label: "hello@vextor.in" },
                { icon: MapPin, label: "India — Serving SMEs Nationwide" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Icon size={14} className="text-[#00F2FF] mt-0.5 shrink-0" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Vextor Technologies Pvt. Ltd. All rights reserved. Building for Vikshit Bharat 2047.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Zap size={10} className="text-[#00F2FF]" />
            Built with AI-augmented workflows
          </div>
        </div>
      </div>
    </footer>
  );
}
