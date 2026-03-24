import { lazy, Suspense, useEffect } from "react";
import { Switch, Route } from "wouter";
import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/pages/HomePage";
import { Footer } from "@/pages/Footer";

const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp").then(m => ({ default: m.FloatingWhatsApp })));

const ServicesPage  = lazy(() => import("@/pages/ServicesPage").then(m => ({ default: m.ServicesPage })));
const PricingPage   = lazy(() => import("@/pages/PricingPage").then(m => ({ default: m.PricingPage })));
const ContactPage   = lazy(() => import("@/pages/ContactPage").then(m => ({ default: m.ContactPage })));
const AboutPage     = lazy(() => import("@/pages/AboutPage").then(m => ({ default: m.AboutPage })));
const PrivacyPage   = lazy(() => import("@/pages/PrivacyPage").then(m => ({ default: m.PrivacyPage })));
const TermsPage     = lazy(() => import("@/pages/TermsPage").then(m => ({ default: m.TermsPage })));

function PageLoader() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-8 h-8 rounded-full border-2 border-[#00F2FF]/30 border-t-[#00F2FF] animate-spin" />
    </div>
  );
}

function MainContent() {
  return (
    <main>
      <HomePage />
      <Suspense fallback={null}>
        <ServicesPage />
      </Suspense>
      <Suspense fallback={null}>
        <PricingPage />
      </Suspense>
      <Suspense fallback={null}>
        <ContactPage />
      </Suspense>
    </main>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Switch>
        <Route path="/" component={MainContent} />
        <Route path="/about">
          <Suspense fallback={<PageLoader />}><AboutPage /></Suspense>
        </Route>
        <Route path="/privacy">
          <Suspense fallback={<PageLoader />}><PrivacyPage /></Suspense>
        </Route>
        <Route path="/terms">
          <Suspense fallback={<PageLoader />}><TermsPage /></Suspense>
        </Route>
      </Switch>
      <Footer />
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
}

export default App;
