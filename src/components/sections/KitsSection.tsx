import React from "react";

const KitsSection: React.FC = () => {
  const categories = [
    {
      title: "JOINING KITS & BAGS",
      image: "/images/kit_1.webp",
      targetSection: "kitcarousel",
    },
    {
      title: "BESPOKE GIFT HAMPERS",
      image: "/images/kit_2.webp",
      targetSection: "bespoke-section",
    },
    {
      title: "UTILITY & DECOR",
      image: "/images/kit_3.webp",
      targetSection: "utility-section",
    },
  ];

  const handleScroll = (targetSection: string) => {
    const targetElement = document.getElementById(targetSection);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="bg-[#d7debe] w-full md:rounded-t-[60%_5%] md:rounded-b-[60%_5%] flex justify-center items-center flex-col py-10 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            onClick={() => handleScroll(category.targetSection)}
            key={index}
            className="flex flex-col gap-4 flex-1 min-w-44 md:min-w-88 mx-auto"
          >
            <div className="relative max-w-64 sm:max-w-full">
              <img
                src={category.image}
                alt={category.title}
                className="transition duration-300 bg-cover ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full flex flex-col items-center md:items-start">
              <h3
                className="cursor-pointer text-2xl md:text-3xl md:font-bold text-[#2c3e2d] mb-2 tracking-wide uppercase hover:underline"
                style={{ fontFamily: "Alta, sans-serif" }}
              >
                {category.title}
              </h3>

              <div className="bg-[#587A33] w-1/4 h-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KitsSection;
