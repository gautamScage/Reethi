import React from "react";

export const Navigation: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 md:h-20">
        <div className="flex items-center justify-between h-full">
          {/* Home Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/images/home logo.svg"
              alt="Home Logo"
              className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <span
              className="text-white text-sm md:text-xl lg:text-2xl font-medium leading-6 md:leading-7"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Home
            </span>
          </div>

          {/* Phone Number - Desktop version */}
          <a
            href="https://wa.me/9958100762?text=Hi%20Reethi%20Gifts%20team!%20I%27m%20interested%20in%20your%20corporate%20gifting%20solutions.%20Please%20share%20your%20catalog%20or%20help%20me%20with%20a%20custom%20gifting%20plan%20for%20my%20company.%20Thanks!"
            target="_blank"
            className="flex items-center gap-2 text-white no-underline transition-all duration-300 ease-in-out hover:opacity-80 hover:-translate-y-0.5 cursor-pointer group"
            title="Chat with us on WhatsApp"
          >
            <img
              src="/images/Phone logo.svg"
              alt="Phone Logo"
              className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <span
              className="text-sm lg:text-lg font-normal leading-6"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              +91 9958100762
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};
