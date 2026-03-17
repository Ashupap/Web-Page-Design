import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(
      "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20with%20Vextor!",
      "_blank"
    );
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="glass rounded-2xl p-3 pr-4 max-w-[200px] border border-[#25D366]/30"
          >
            <p className="text-sm font-medium text-foreground leading-tight">
              Chat with a Solution Architect now
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 0 20px rgba(37,211,102,0.4), 0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <MessageCircle size={26} fill="white" />
      </motion.button>
    </motion.div>
  );
}
