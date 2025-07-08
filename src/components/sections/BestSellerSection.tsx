import React from "react";
import { cn } from "../../lib/utils";

const imageSources = [
  "/images/best2.png",
  "/images/best6.png",
  "/images/best1.jpg",
  "/images/best3.png",
  "/images/best5.png",
  "/images/best4.png",
];

const BestSellerSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 md:px-10 flex flex-col gap-12 items-center">
      <h2
        className="text-5xl md:text-6xl font-light text-center text-neutral-800"
        style={{
          fontFamily: "Alta, sans-serif",
          letterSpacing: "2px",
        }}
      >
        BEST SELLERS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 w-full max-w-6xl">
        {imageSources.map((src, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center justify-center",
              "rounded-lg",
              "overflow-hidden",
              "cursor-pointer",
              "transition-transform",
              "hover:scale-105"
            )}
          >
            <img
              src={src}
              alt={`Best Seller ${index + 1}`}
              className="w-full h-full object-cover scale-90 rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellerSection;
