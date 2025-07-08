import React, { useState, useEffect } from "react";
import { useFormPopup } from "../../hooks/useFormPopup";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const UtilitySection: React.FC = () => {
  const { openPopup } = useFormPopup();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  const products = [
    { id: 1, image: "/images/U&D1.jpg", alt: "Utility & Decor 1" },
    { id: 2, image: "/images/U&D2.jpg", alt: "Utility & Decor 2" },
    { id: 3, image: "/images/decor3.png", alt: "Utility & Decor 3" },
    { id: 4, image: "/images/U&D3.jpg", alt: "Utility & Decor 4" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const visibleItems = Array.from({ length: itemsPerView }, (_, index) => {
    const productIndex = (currentSlide + index) % products.length;
    return products[productIndex];
  });

  return (
    <section id="utility-section" className="bg-white w-full py-16 md:py-32">
      <div className="max-w-xs md:max-w-7xl mx-auto px-4 md:px-10 flex flex-col gap-6 md:gap-10">
        {/* Header */}
        <div className="w-full">
          <h2
            className="text-[2.5rem] md:text-6xl text-[#2c3e2d] mb-2 leading-tight md:leading-normal md:tracking-wider uppercase"
            style={{ fontFamily: "Alta, sans-serif" }}
          >
            Utility & Decor
          </h2>
          <p className="text-xs md:text-lg text-neutral-600 font-light">
            Useful by Nature, Beautiful by Design.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center w-full">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-8 top-1/2 -translate-y-1/2 rounded-full bg-black/50 h-12 w-12 p-2 text-neutral-100 hover:bg-black/30 transition-all z-10"
          >
            <ChevronLeftIcon size={24} />
          </button>

          {/* Product Items */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {visibleItems.map((product) => (
              <div
                key={product.id}
                className="h-80 rounded-lg overflow-hidden cursor-pointer flex items-center justify-center shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="
      absolute -right-8 top-1/2 -translate-y-1/2 
      rounded-full bg-black/50 h-12 w-12 
      flex items-center justify-center
      text-neutral-100 hover:bg-black/30 
      transition-all z-10
    "
          >
            <ChevronRightIcon size={24} />
          </button>
        </div>

        {/* Enquire Now Button */}
        <div className="flex justify-end w-full">
          <button
            onClick={openPopup}
            className="hover:underline text-black hover:text-[#A4B465] transition-colors duration-300 font-medium cursor-pointer text-sm md:text-base"
          >
            ENQUIRE NOW <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UtilitySection;
