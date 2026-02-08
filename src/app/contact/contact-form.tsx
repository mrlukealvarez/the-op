"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactState } from "@/lib/contact-action";

const initialState: ContactState = { success: false };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="rounded-2xl border border-cannabis-green/20 bg-cannabis-green/5 p-8 text-center">
        <p className="text-lg font-semibold text-cannabis-green-dark">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="honeypot">Do not fill this</label>
        <input type="text" id="honeypot" name="honeypot" tabIndex={-1} autoComplete="off" />
      </div>

      {state.message && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-espresso">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-espresso/20 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-cannabis-green focus:ring-1 focus:ring-cannabis-green"
        />
        {state.errors?.name && (
          <p className="mt-1 text-xs text-red-600">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-espresso">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-espresso/20 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-cannabis-green focus:ring-1 focus:ring-cannabis-green"
        />
        {state.errors?.email && (
          <p className="mt-1 text-xs text-red-600">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-espresso">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full rounded-lg border border-espresso/20 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-cannabis-green focus:ring-1 focus:ring-cannabis-green"
        >
          <option value="general">General Inquiry</option>
          <option value="events">Events & Private Bookings</option>
          <option value="catering">Catering</option>
          <option value="careers">Careers</option>
          <option value="press">Press & Media</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-espresso">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-espresso/20 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-cannabis-green focus:ring-1 focus:ring-cannabis-green"
        />
        {state.errors?.message && (
          <p className="mt-1 text-xs text-red-600">{state.errors.message[0]}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-espresso px-8 py-3 font-semibold text-cream transition-colors hover:bg-espresso-light disabled:opacity-50"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
