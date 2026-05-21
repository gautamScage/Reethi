import { useState, createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";

interface FormPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const FormPopupContext = createContext<FormPopupContextType | undefined>(
  undefined,
);

export const FormPopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  // Auto-open popup when the app loads
  useEffect(() => {
    // Add a small delay to ensure the page has loaded properly
    const timer = setTimeout(() => {
      openPopup();
    }, 10000); // Opens popup 1 second after the app loads

    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <FormPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </FormPopupContext.Provider>
  );
};

export const useFormPopup = () => {
  const context = useContext(FormPopupContext);
  if (context === undefined) {
    throw new Error("useFormPopup must be used within a FormPopupProvider");
  }
  return context;
};
