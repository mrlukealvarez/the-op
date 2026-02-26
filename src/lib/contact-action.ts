"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Invalid email address"),
  subject: z.enum(["general", "events", "catering", "careers", "press"]),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
  honeypot: z.string().max(0, "Bot detected"),
});

export type ContactState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message?: string;
};

const submissions = new Map<string, number[]>();

function isRateLimited(email: string): boolean {
  const now = Date.now();
  const window = 60 * 60 * 1000; // 1 hour
  const maxPerWindow = 5;
  const prev = submissions.get(email) ?? [];
  const recent = prev.filter((t) => now - t < window);
  if (recent.length >= maxPerWindow) return true;
  recent.push(now);
  submissions.set(email, recent);
  return false;
}

export async function submitContactForm(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
    honeypot: (formData.get("honeypot") as string) ?? "",
  };

  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  if (isRateLimited(result.data.email)) {
    return {
      success: false,
      message: "Too many submissions. Please try again later.",
    };
  }

  // In production, send email or save to database
  console.log("[THE OP Contact]", result.data);

  return {
    success: true,
    message: "Thanks for reaching out! We'll get back to you soon.",
  };
}
