/** @format */
import * as z from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  description: z.string().min(1, "Message is required"),
});
