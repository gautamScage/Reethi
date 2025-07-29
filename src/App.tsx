import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import ReactGA from 'react-ga4';
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
import TermsAndCondition from "./components/sections/TermsAndCondition";

// Your GA4 Measurement ID
const MEASUREMENT_ID = 'G-WZQWT0K3JV';

// Component to track page views
function Analytics() {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view on route change
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search 
    });
  }, [location]);

  return null;
}

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

  useEffect(() => {
    ReactGA.initialize(MEASUREMENT_ID);
  }, []);

  return (
    <FormPopupProvider>
      <Router>
        <Analytics />
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndCondition />}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </FormPopupProvider>
  );
}

export default App;