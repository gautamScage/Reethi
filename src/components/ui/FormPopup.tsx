import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactGA from "react-ga4";
import { useFormPopup } from "../../hooks/useFormPopup";
import {
  corporateGiftFormSchema,
  type CorporateGiftFormSchema,
} from "../../schema/formSchemas";
import { useNavigate } from "react-router-dom";

const FormPopup: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, closePopup } = useFormPopup();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CorporateGiftFormSchema>({
    resolver: zodResolver(corporateGiftFormSchema),
  });

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
      closePopup();
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

  const inputBaseClasses = `px-5 py-3 rounded-lg text-xs transition-all duration-300 ease-in-out outline-none box-border text-neutral-800 placeholder-neutral-400 placeholder:font-light border border-neutral-300 focus:border-[#A4B465] focus:bg-white`;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closePopup();
  };

  // Escape key / body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };

    if (isOpen) {
      const scrollY = window.scrollY;
      document.addEventListener("keydown", handleEscape);

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";

      return () => {
        document.removeEventListener("keydown", handleEscape);
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
      style={{ animation: "popupSlideIn 0.3s ease-out" }}
    >
      <style>
        {`
          @keyframes popupSlideIn {
            from { opacity: 0; transform: scale(0.9) translateY(-20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        `}
      </style>

      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 py-8 md:p-8 max-w-lg md:max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative">
        <button
          className="absolute top-0 right-0 text-2xl w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 z-10"
          onClick={closePopup}
        >
          ×
        </button>

        <div className="text-center pb-5 md:pb-6">
          <h2
            className="text-xl md:text-2xl font-bold text-gray-800 uppercase"
            style={{ fontFamily: "Alta, sans-serif" }}
          >
            Talk to Our Corporate Gifting Experts
          </h2>
          <p
            className="text-xs md:text-base text-gray-600 font-light"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Fill out the form below to get in touch with our experts and discuss
            your corporate gifting needs.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 md:gap-4"
        >
          <div className="flex flex-col">
            <input
              {...register("fullName")}
              placeholder="Enter your Full Name*"
              className={`${inputBaseClasses}`}
              disabled={isSubmitting}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs pl-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-5">
            <div className="flex flex-col">
              <input
                {...register("phoneNumber")}
                placeholder="Phone Number*"
                className={inputBaseClasses}
                disabled={isSubmitting}
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
                placeholder="Business Email Address*"
                className={inputBaseClasses}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 pl-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-5">
            <div className="flex flex-col">
              <input
                {...register("city")}
                placeholder="City*"
                className={inputBaseClasses}
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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

          <div className="grid grid-cols-2 gap-2 md:gap-5">
            <div className="flex flex-col">
              <input
                {...register("budgetPerGift")}
                placeholder="Budget Per Gift*"
                className={inputBaseClasses}
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
              {errors.quantityRequired && (
                <p className="text-red-500 text-xs mt-1 pl-1">
                  {errors.quantityRequired.message}
                </p>
              )}
            </div>
          </div>

          <textarea
            {...register("additionalInfo")}
            placeholder="Additional Information"
            rows={3}
            className={`${inputBaseClasses} resize-y min-h-[80px]`}
            disabled={isSubmitting}
          />

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
    </div>
  );
};

export default FormPopup;
