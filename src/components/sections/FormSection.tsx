import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import ReactGA from 'react-ga4';
import {
  corporateGiftFormSchema,
  type CorporateGiftFormSchema,
} from "../../schema/formSchemas";

const FormSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CorporateGiftFormSchema>({
    resolver: zodResolver(corporateGiftFormSchema),
  });

  const inputBaseClasses = `px-5 py-3 rounded-lg text-xs transition-all duration-300 ease-in-out outline-none box-border text-neutral-800 placeholder-neutral-400 placeholder:font-light border border-neutral-300 focus:border-[#A4B465] focus:bg-white`;

  const onSubmit = (formData: CorporateGiftFormSchema) => {
    // Track form submission attempt
    ReactGA.event({
      category: 'Form',
      action: 'Submit_Attempt',
      label: 'Main Contact Form',
      value: 1
    });

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
      .then(() => {
        // Track successful form submission
        ReactGA.event({
          category: 'Form',
          action: 'Submit_Success',
          label: 'Main Contact Form',
          value: 1
        });

        // Track lead generation with additional details
        ReactGA.event({
          category: 'Lead',
          action: 'Generated',
          label: `Main Form - ${formData.giftingFor} - ${formData.city}`,
          value: parseInt(formData.budgetPerGift) || 0
        });

        alert("Form submitted successfully!");
        reset();
      })
      .catch(() => {
        // Track form submission failure
        ReactGA.event({
          category: 'Form',
          action: 'Submit_Failed',
          label: 'Main Contact Form',
          value: 1
        });

        alert("Form submission failed. Please try again.");
      });
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
            className="w-fit mx-auto bg-[#A4B465] hover:bg-[#ebe8cb] text-white py-3 px-6 rounded-lg text-sm transition-all duration-150 ease-in-out"
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