// validation/corporateGiftForm.schema.ts
import { z } from "zod";

export const corporateGiftFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits")
    .regex(/^\d+$/, "Phone number must be numeric"),
  email: z
    .string()
    .email("Invalid email address")
    .refine((email) => {
      const domain = email.toLowerCase();
      return !domain.includes("gmail") && !domain.includes("yahoo");
    }, "Email cannot be from gmail or yahoo"),
  city: z.string().min(1, "City is required"),
  giftingFor: z.string().min(1, "Please select who you're gifting for"),
  budgetPerGift: z
    .string()
    .refine(
      (val) => Number(val) >= 200,
      "Budget per gift must be at least ₹200"
    ),
  quantityRequired: z
    .string()
    .refine((val) => Number(val) >= 50, "Quantity must be at least 50"),
  additionalInfo: z.string().optional(),
});

export type CorporateGiftFormSchema = z.infer<typeof corporateGiftFormSchema>;
