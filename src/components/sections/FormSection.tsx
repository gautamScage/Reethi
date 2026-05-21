import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactGA from "react-ga4";
import {
  corporateGiftFormSchema,
  type CorporateGiftFormSchema,
} from "../../schema/formSchemas";
import { useNavigate } from "react-router-dom";

const FormSection: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CorporateGiftFormSchema>({
    resolver: zodResolver(corporateGiftFormSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputBaseClasses = `px-5 py-3 rounded-lg text-xs transition-all duration-300 ease-in-out outline-none box-border text-neutral-800 placeholder-neutral-400 placeholder:font-light border border-neutral-300 focus:border-[#A4B465] focus:bg-white`;

  const onSubmit = async (formData: CorporateGiftFormSchema) => {
    setIsSubmitting(true);

    // Track form submission attempt
    ReactGA.event({
      category: "Form",
      action: "Submit_Attempt",
      label: "Corporate Gift Form Popup",
      value: 1,
    });

    const formDataToSend = {
      access_key: "6f52223e-d02e-474c-ad78-2f1d2bc13c25",
      subject: "New Reethi Corporate Gift Enquiry",

      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      city: formData.city,
      giftingFor: formData.giftingFor,
      budgetPerGift: formData.budgetPerGift,
      quantityRequired: formData.quantityRequired,
      additionalInfo: formData.additionalInfo,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error("Web3Forms submission failed");
      }

      // Track successful form submission
      ReactGA.event({
        category: "Form",
        action: "Submit_Success",
        label: "Corporate Gift Form Popup",
        value: 1,
      });

      // Track form completion with additional details
      ReactGA.event({
        category: "Lead",
        action: "Generated",
        label: `Corporate Gift - ${formData.giftingFor} - ${formData.city}`,
        value: parseInt(formData.budgetPerGift) || 0,
      });

      reset();
      navigate("/thank-you");
    } catch (error) {
      // Track form submission failure
      ReactGA.event({
        category: "Form",
        action: "Submit_Failed",
        label: "Corporate Gift Form Popup",
        value: 1,
      });

      alert("Form submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full flex items-center justify-center py-16 md:py-24 bg-cover bg-no-repeat bg-center">
      <div className="absolute inset-0 bg-[url(/images/form_image.svg)] bg-no-repeat bg-center bg-cover" />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#587A33] to-[#A4B465] opacity-50 -z-50" />

      <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl py-5 md:py-10 px-7 md:px-20 max-w-[22rem] md:max-w-5xl">
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 md:gap-4"
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <input
              {...register("fullName")}
              placeholder="Enter your Full Name*"
              className={`${inputBaseClasses} w-full`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1 pl-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-2 gap-2 md:gap-5">
            <div className="flex flex-col">
              <input
                {...register("phoneNumber")}
                placeholder="Enter your Phone Number*"
                className={inputBaseClasses}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1 pl-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("email")}
                placeholder="Enter your Business Email Address*"
                className={inputBaseClasses}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 pl-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* City & Gifting For */}
          <div className="grid grid-cols-2 gap-2 md:gap-5">
            <div className="flex flex-col">
              <input
                {...register("city")}
                placeholder="Enter your City*"
                className={inputBaseClasses}
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1 pl-1">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <select
                {...register("giftingFor")}
                className={`${inputBaseClasses} cursor-pointer`}
              >
                <option value="">Gifting For</option>
                <option value="employees">Employees</option>
                <option value="clients">Clients</option>
                <option value="partners">Business Partners</option>
                <option value="events">Corporate Events</option>
                <option value="festivals">Festivals</option>
                <option value="other">Other</option>
              </select>
              {errors.giftingFor && (
                <p className="text-red-500 text-xs mt-1 pl-1">
                  {errors.giftingFor.message}
                </p>
              )}
            </div>
          </div>

          {/* Budget & Quantity */}
          <div className="grid grid-cols-2 gap-2 md:gap-5">
            <div className="flex flex-col">
              <input
                {...register("budgetPerGift")}
                placeholder="Budget Per Gift*"
                className={inputBaseClasses}
              />
              {errors.budgetPerGift && (
                <p className="text-red-500 text-xs mt-1 pl-1">
                  {errors.budgetPerGift.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("quantityRequired")}
                type="number"
                placeholder="Quantity Required*"
                className={inputBaseClasses}
              />
              {errors.quantityRequired && (
                <p className="text-red-500 text-xs mt-1 pl-1">
                  {errors.quantityRequired.message}
                </p>
              )}
            </div>
          </div>

          {/* Additional Info */}
          <textarea
            {...register("additionalInfo")}
            placeholder="Additional Information"
            rows={5}
            className={`${inputBaseClasses} resize-y`}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#fff";
            }}
            className={`w-fit mx-auto flex items-center gap-2 py-3 px-6 rounded-lg text-sm transition-all ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#A4B465] hover:bg-[#ebe8cb] text-white"
            }`}
          >
            {isSubmitting && (
              <div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                style={{ animation: "spin 1s linear infinite" }}
              />
            )}
            {isSubmitting ? "SUBMITTING..." : "ENQUIRE NOW"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
