/** @format */

import * as z from "zod";

const email = z
  .string()
  .email("Invalid email address")
  .min(1, "Email is required");
const password = z
  .string()
  .min(1, "Password field is required")
  .min(7, "Password must be at least 7 characters long");

export const loginSchema = z.object({
  email,
  password,
});

export const joinWaitlistSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  businessName: z.string().min(2, { message: "Business name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
});
