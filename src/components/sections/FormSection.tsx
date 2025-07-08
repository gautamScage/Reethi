import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const FormSection: React.FC = () => {
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
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Form submission failed. Please try again.");
        }
      );
  };

  const inputBaseClasses = ` px-5 py-3  rounded-lg text-xs 
  transition-all duration-300 ease-in-out outline-none box-border
   text-neutral-800 placeholder-neutral-400 placeholder:font-light border border-neutral-300 
   focus:border-[#A4B465] focus:bg-white`;

  return (
    <section className="relative w-full flex items-center justify-center py-16 md:py-24 bg-cover bg-no-repeat bg-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url(/images/form_image.svg)] bg-no-repeat bg-center bg-cover" />

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#587A33] to-[#A4B465] opacity-50 -z-50" />

      {/* Form Container */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl py-5 md:py-10 px-7 md:px-20 max-w-[22rem] md:max-w-5xl">
        {/* Header Section */}
        <div className="text-center pb-6 md:pb-8">
          <h2
            className="text-xl md:text-[2.5rem] text-gray-800 mb-2 tracking-wide uppercase"
            style={{ fontFamily: "Alta, sans-serif" }}
          >
            Talk to Our Corporate Gifting Experts
          </h2>
          <p
            className="text-[0.75rem] md:text-base text-gray-600 leading-relaxed mx-auto font-light"
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
            className={`${inputBaseClasses} w-full `}
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
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Business Email Address*"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={inputBaseClasses}
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
            />
            <select
              name="giftingFor"
              value={formData.giftingFor}
              onChange={handleInputChange}
              required
              className={`${inputBaseClasses} cursor-pointer`}
            >
              <option value="" disabled className="text-gray-400">
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
            />
          </div>

          {/* Additional Information */}
          <textarea
            name="additionalInfo"
            placeholder="Additional Information"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={5}
            className={`${inputBaseClasses}]`}
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
    </section>
  );
};

export default FormSection;
