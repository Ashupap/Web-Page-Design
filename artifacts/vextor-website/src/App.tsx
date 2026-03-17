import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { PricingPage } from "@/pages/PricingPage";
import { ContactPage } from "@/pages/ContactPage";
import { Footer } from "@/pages/Footer";

function App() {
  // Apply dark mode class by default
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HomePage />
        <ServicesPage />
        <PricingPage />
        <ContactPage />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
