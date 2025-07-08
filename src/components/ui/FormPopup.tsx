import React, { useState, useEffect } from "react";
import { useFormPopup } from "../../hooks/useFormPopup";
import emailjs from "@emailjs/browser";

const FormPopup: React.FC = () => {
  const { isOpen, closePopup } = useFormPopup();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    city: "",
    giftingFor: "",
    budgetPerGift: "",
    quantityRequired: "",
    additionalInfo: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.fullName,
      user_phone: formData.phoneNumber,
      user_email: formData.email,
      user_city: formData.city,
      gifting_for: formData.giftingFor,
      budget_per_gift: formData.budgetPerGift,
      quantity_required: formData.quantityRequired,
      additional_info: formData.additionalInfo,
    };

    emailjs
      .send(
        "service_t5zz5ai",
        "template_j3qmp5p",
        templateParams,
        "M6cPedCWOdOXAM6Fl"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Form submitted successfully!");
          setFormData({
            fullName: "",
            phoneNumber: "",
            email: "",
            city: "",
            giftingFor: "",
            budgetPerGift: "",
            quantityRequired: "",
            additionalInfo: "",
          });
          closePopup();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Form submission failed. Please try again.");
        }
      );
  };

  const inputBaseClasses = `px-5 py-3 rounded-lg text-xs transition-all duration-300 ease-in-out outline-none box-border text-neutral-800 placeholder-neutral-400 placeholder:font-light border border-neutral-300 focus:border-[#A4B465] focus:bg-white`;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  // Close popup on escape key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };

    if (isOpen) {
      const scrollY = window.scrollY;
      document.addEventListener("keydown", handleEscape);

      // Prevent background scrolling while keeping current position
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";

      return () => {
        document.removeEventListener("keydown", handleEscape);
        // Restore scroll position
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflowY = "";
        window.scrollTo(0, scrollY);
      };
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closePopup]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-[10000] flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={handleOverlayClick}
      style={{
        animation: "popupSlideIn 0.3s ease-out",
      }}
    >
      <style>
        {`
          @keyframes popupSlideIn {
            from {
              opacity: 0;
              transform: scale(0.9) translateY(-20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>

      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 py-8 md:p-8 max-w-lg md:max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative">
        {/* Close Button */}
        <button
          className="absolute top-0 right-0 bg-transparent border-none text-2xl cursor-pointer text-gray-600 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ease-in-out hover:bg-gray-100 hover:text-gray-800 z-10"
          onClick={closePopup}
          aria-label="Close popup"
        >
          ×
        </button>

        {/* Header Section */}
        <div className="text-center pb-5 md:pb-6">
          <h2
            className="text-xl md:text-2xl font-bold text-gray-800 mb-2 tracking-wide uppercase"
            style={{ fontFamily: "Alta, sans-serif" }}
          >
            Talk to Our Corporate Gifting Experts
          </h2>
          <p
            className="text-xs md:text-base text-gray-600 leading-relaxed mx-auto font-light"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Fill out the form below to get in touch with our experts and discuss
            your corporate gifting needs.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4">
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Enter your Full Name*"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className={`${inputBaseClasses} w-full`}
            style={{ fontFamily: "Roboto, sans-serif" }}
          />

          {/* Phone and Email */}
          <div className="grid grid-cols-2 gap-2 md:gap-5">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your Phone Number*"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className={inputBaseClasses}
              style={{ fontFamily: "Roboto, sans-serif" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Business Email Address*"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={inputBaseClasses}
              style={{ fontFamily: "Roboto, sans-serif" }}
            />
          </div>

          {/* City and Gifting For */}
          <div className="grid grid-cols-2 gap-2 md:gap-5">
            <input
              type="text"
              name="city"
              placeholder="Enter your City*"
              value={formData.city}
              onChange={handleInputChange}
              required
              className={inputBaseClasses}
              style={{ fontFamily: "Roboto, sans-serif" }}
            />
            <select
              name="giftingFor"
              value={formData.giftingFor}
              onChange={handleInputChange}
              required
              className={`${inputBaseClasses} cursor-pointer`}
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              <option value="" disabled>
                Gifting For
              </option>
              <option value="employees">Employees</option>
              <option value="clients">Clients</option>
              <option value="partners">Business Partners</option>
              <option value="events">Corporate Events</option>
              <option value="festivals">Festivals</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Budget and Quantity */}
          <div className="grid grid-cols-2 gap-2 md:gap-5">
            <input
              type="text"
              name="budgetPerGift"
              placeholder="Budget Per Gift*"
              value={formData.budgetPerGift}
              onChange={handleInputChange}
              required
              className={inputBaseClasses}
              style={{ fontFamily: "Roboto, sans-serif" }}
            />
            <input
              type="number"
              name="quantityRequired"
              placeholder="Quantity Required*"
              value={formData.quantityRequired}
              onChange={handleInputChange}
              required
              min="1"
              className={inputBaseClasses}
              style={{ fontFamily: "Roboto, sans-serif" }}
            />
          </div>

          {/* Additional Information */}
          <textarea
            name="additionalInfo"
            placeholder="Additional Information"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={3}
            className={`${inputBaseClasses} w-full resize-y min-h-[80px] md:min-h-[100px]`}
            style={{ fontFamily: "Roboto, sans-serif" }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-fit mx-auto bg-[#A4B465] hover:bg-[#ebe8cb] text-white py-3 px-6 rounded-lg text-sm transition-all duration-150 ease-in-out "
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#fff";
            }}
          >
            ENQUIRE NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
