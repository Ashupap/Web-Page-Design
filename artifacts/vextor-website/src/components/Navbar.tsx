import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Logo } from "./Logo";
import { QuoteModal } from "./QuoteModal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "SME Advantage", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar at very top edge */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
        style={{ 
          scaleX, 
          background: "linear-gradient(90deg, #00F2FF, #FF9933)", 
          boxShadow: "0 0 10px rgba(0, 242, 255, 0.5)" 
        }}
      />

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-[#00F2FF]/10 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              onClick={() => handleNavClick("#home")}
            >
              <img src="/logo.png" alt="Vextor" className="h-14 w-14 object-contain neon-logo-glow" />
              <div className="flex flex-col">
                <span
                  className="text-xl font-bold tracking-tight leading-none"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    background: "linear-gradient(135deg, #00F2FF 0%, #ffffff 60%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Vextor
                </span>
                <span className="text-[10px] font-semibold text-muted-foreground/80 tracking-widest uppercase mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Technologies
                </span>
              </div>
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-foreground/70 hover:text-[#00F2FF] transition-colors duration-200 relative group"
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F2FF] transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setQuoteOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F2FF] text-[#0A192F] text-sm font-semibold cyan-glow transition-all duration-300"
              >
                <Zap size={14} />
                Get Smart Quote
              </motion.button>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-full glass border border-[#00F2FF]/20 text-foreground"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-[#00F2FF]/10 shadow-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-foreground/80 hover:text-[#00F2FF] transition-colors py-2 border-b border-border/30 last:border-0"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => { setMobileOpen(false); setQuoteOpen(true); }}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00F2FF] text-[#0A192F] font-semibold cyan-glow mt-2"
              >
                <Zap size={16} />
                Get Smart Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
