import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navigation } from "./components/layout/Navigation";
import { HeroSection } from "./components/sections/HeroSection";
import ClientSection from "./components/sections/ClientSection";
import KitsSection from "./components/sections/KitsSection";
import BspokeSection from "./components/sections/BspokeSection";
import UtilitySection from "./components/sections/UtilitySection";
import AboutUsSection from "./components/sections/AboutusSection";
import BestSellerSection from "./components/sections/BestSellerSection";
import FormSection from "./components/sections/FormSection";
import Footer from "./components/sections/Footer";
import { FormPopupProvider } from "./hooks/useFormPopup";
import FormPopup from "./components/ui/FormPopup";
import Kitcarousel from "./components/sections/Kitcarousel";
import WhatsappCTA from "./components/sections/WhatsappCTA";

// Main Landing Page Component
const MainLandingPage: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  console.log("bug");

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <HeroSection />
      <ClientSection />
      <KitsSection />
      <Kitcarousel />
      <BspokeSection />
      <UtilitySection />
      <AboutUsSection />
      <BestSellerSection />
      <FormSection />
      <Footer />
      <FormPopup />
      <WhatsappCTA />
      {/* Additional sections can be added here later */}
    </div>
  );
};

// App Component with Routing
function App() {
  return (
    <FormPopupProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </FormPopupProvider>
  );
}

export default App;
