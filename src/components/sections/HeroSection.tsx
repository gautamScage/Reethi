import React from "react";
import { useFormPopup } from "../../hooks/useFormPopup";

export const HeroSection: React.FC = () => {
  const { openPopup } = useFormPopup();

  return (
    <>
      {/* <style>
        {`
          @media (max-width: 768px) {
            .hero-mobile-content {
              max-width: none !important;
              padding: 0 !important;
            }
            
            .hero-mobile-logo {
              width: 120px !important;
              height: 120px !important;
              margin-bottom: 20px !important;
            }
            
            .hero-mobile-title {
              font-size: 32px !important;
              line-height: 1.1 !important;
              margin-bottom: 20px !important;
              letter-spacing: 0.5px !important;
            }
            
            .hero-mobile-subtitle {
              font-size: 16px !important;
              letter-spacing: 1.5px !important;
              margin-bottom: 32px !important;
              line-height: 1.4 !important;
            }
            
            .hero-mobile-button {
              width: 220px !important;
              height: 50px !important;
              font-size: 16px !important;
              padding: 12px 20px !important;
              margin-bottom: 24px !important;
              background-color: #D4CA7B !important;
            }
            
            .hero-mobile-price {
              font-size: 13px !important;
            }
          }
          
          @media (max-width: 480px) {
            .hero-mobile-section {
              padding: 70px 12px 50px 12px !important;
            }
            
            .hero-mobile-logo {
              width: 100px !important;
              height: 100px !important;
            }
            
            .hero-mobile-title {
              font-size: 28px !important;
            }
            
            .hero-mobile-subtitle {
              font-size: 14px !important;
              letter-spacing: 1px !important;
            }
            
            .hero-mobile-button {
              width: 200px !important;
              height: 48px !important;
              font-size: 15px !important;
              background-color: #D4CA7B !important
            }
          }
        `}
      </style> */}
      <section
        id="hero"
        className="hero-mobile-section relative min-h-[60vh] md:h-screen overflow-hidden flex items-center justify-center"
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        >
          <source src="/video/7581294-hd_720_1280_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 hero-gradient-bg"
          style={{ zIndex: 2, opacity: 0.7 }}
        ></div>

        {/* Content */}
        <div className="relative z-10 h-full flex" style={{ zIndex: 10 }}>
          <div className="text-center text-white max-w-4xl mx-auto px-6  flex flex-col items-center justify-center gap-4 md:gap-8">
            {/* Main Logo */}
            <img
              src="/images/Logo.svg"
              alt="Reethi Logo"
              className="mx-auto mb-0 w-32 h-32 md:w-44 md:h-44"
              style={{
                display: "block",
                margin: "0 auto",
              }}
            />

            {/* Main Heading */}
            <h1
              className="hero-title"
              style={{ fontFamily: "Alta, sans-serif" }}
            >
              PREMIUM
              <br />
              CORPORATE GIFTS
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              That your clients will cherish for years.
            </p>

            {/* CTA Button */}
            <button
              onClick={openPopup}
              className="
      rounded-md px-4 md:px-14 py-3 font-medium text-xs md:text-lg
      bg-[#D4CA7B] text-white
      hover:bg-[#ebe8cb] hover:!text-[#565656]
      transition duration-300
      shadow-md hover:shadow-lg
    "
            >
              ENQUIRE NOW
            </button>

            {/* Starting Price */}
            <div className="text-white text-sm md:text-lg font-semibold">
              *Starting ₹500 only
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
