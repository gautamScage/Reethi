import React from "react";
import { useFormPopup } from "../../hooks/useFormPopup";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { openPopup } = useFormPopup();

  return (
    <footer className="relative flex flex-col items-center justify-between h-[40vh] md:h-[50vh]">
      {/* Right spiral decoration - positioned to extend behind dark section */}
      <img
        src="/images/right_foot_pic.svg"
        alt="Right decoration"
        className={cn(
          "hidden md:block",
          "absolute right-0 bottom-0 h-1/2 w-auto z-10"
        )}
      />

      {/* Top section with dark background */}
      <section className="flex flex-col items-center justify-end-safe md:justify-center gap-10 bg-[#262626] w-full h-3/4 p-4 md:p-10 relative z-20">
        {/* Centered content - Social icons and buttons */}
        <div className="flex flex-col items-center gap-4 md:gap-7">
          {/* Social Media Icons */}
          <div className="flex gap-4 md:gap-8">
            <div
              className="w-8 md:w-12 h-8 md:h-12 bg-[#A4B465] rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open("mailto:info@reethigifts.com")}
            >
              <img
                src="/images/mail_footer.svg"
                alt="Email"
                style={{
                  width: "46px",
                  height: "46px",
                }}
              />
            </div>

            {/* Facebook Icon */}
            <div
              className="w-8 md:w-12 h-8 md:h-12 bg-[#A4B465] rounded-full flex justify-center items-center cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/people/Reethi-Corporate-Gifts/61576983373272/?mibextid=wwXIfr&rdid=CimGfUNpJ4rQApCe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16hFpS5FDQ%2F%3Fmibextid%3DwwXIfr",
                  "_blank"
                )
              }
            >
              <img
                src="/images/facebook_footer.svg"
                alt="Facebook"
                style={{
                  width: "46px",
                  height: "46px",
                }}
              />
            </div>

            {/* Instagram Icon */}
            <div
              className="w-8 md:w-12 h-8 md:h-12 bg-[#A4B465] rounded-full flex justify-center items-center cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/reethi.corpgifts?igsh=MTduNG1paWNsaHhoMA==",
                  "_blank"
                )
              }
            >
              <img
                src="/images/insta_footer.svg"
                alt="Instagram"
                style={{
                  width: "46px",
                  height: "46px",
                }}
              />
            </div>

            {/* WhatsApp Icon */}
            <div
              className="w-8 md:w-12 h-8 md:h-12 bg-[#A4B465] rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open("tel:+919958100762")}
            >
              <img
                src="/images/Phone logo.svg"
                alt="Phone"
                style={{
                  width: "46px",
                  height: "46px",
                }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <span
              onClick={openPopup}
              className="text-white text-xs md:text-md cursor-pointer"
            >
              ENQUIRE NOW
            </span>
            <span className="text-xl text-white">|</span>
            <span
              className="text-white text-xs md:text-md cursor-pointer"
              onClick={() =>
                window.open(
                  "https://wa.me/919958100762?text=Hi%20Reethi%20Gifts%20team!%20I%27m%20interested%20in%20your%20corporate%20gifting%20solutions.%20Please%20share%20your%20catalog%20or%20help%20me%20with%20a%20custom%20gifting%20plan%20for%20my%20company.%20Thanks!",
                  "_blank"
                )
              }
            >
              DOWNLOAD CATALOGUE
            </span>
            <span className="text-xl text-white">|</span>
              <Link
                to="/privact-policy"
                className="text-white text-xs md:text-md cursor-pointer"
              >
                PRIVACY POLICY
              </Link>{" "}
          </div>
        </div>

        {/* Logo positioned in top right */}
        <div
          className={cn(
            "absolute top-2.5 right-1/2 translate-x-1/2 md:right-12 md:translate-0 z-20"
          )}
        >
          <img
            src="/images/Logo.svg"
            alt="Reethi Logo"
            style={{
              height: "101px",
              width: "auto",
            }}
          />
        </div>
      </section>

      {/* Bottom section with gradient background */}
      <section
        style={{
          background:
            "linear-gradient(119deg, #587A33 26.15%, #A4B465 109.87%)",
        }}
        className="w-full h-1/3 flex flex-col items-center justify-center gap-4 p-5 relative overflow-hidden"
      >
        {/* Left spiral decoration */}
        <img
          src="/images/left_foot_pic.svg"
          alt="Left decoration"
          className="absolute left-0 top-1/2 -translate-y-1/3 h-full w-auto hidden md:block"
        />

        <h2 className="font-roboto font-normal text-center text-white text-sm md:text-xl z-10">
          THOUGHTFUL GIFTS THAT BUILD LASTING BUSINESS RELATIONSHIPS
        </h2>
        <p className="text-xs md:text-sm text-white opacity-90 font-light z-10">
          © 2025 Reethi Corporate Gifting. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
