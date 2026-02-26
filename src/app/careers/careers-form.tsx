"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export function CareersForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-espresso/10 bg-white p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber/10">
          <Send className="h-8 w-8 text-amber" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-espresso">
          You&apos;re on the List!
        </h3>
        <p className="text-warm-gray">
          We&apos;ll reach out when the cafe doors open and hiring begins. Until
          then, follow us for build-out updates.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1: Name + Email */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-espresso"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-espresso/10 bg-white px-4 py-3 text-espresso placeholder-warm-gray-light focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-espresso"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-espresso/10 bg-white px-4 py-3 text-espresso placeholder-warm-gray-light focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
            placeholder="you@example.com"
          />
        </div>
      </div>

      {/* Role Interest */}
      <div>
        <label
          htmlFor="role"
          className="mb-2 block text-sm font-medium text-espresso"
        >
          Role Interest
        </label>
        <select
          id="role"
          name="role"
          required
          className="w-full rounded-lg border border-espresso/10 bg-white px-4 py-3 text-espresso focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
        >
          <option value="">Select a role...</option>
          <option value="general-manager">General Manager</option>
          <option value="head-barista">Head Barista</option>
          <option value="barista">Barista</option>
          <option value="general">General Interest</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label
          htmlFor="location"
          className="mb-2 block text-sm font-medium text-espresso"
        >
          Current Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          className="w-full rounded-lg border border-espresso/10 bg-white px-4 py-3 text-espresso placeholder-warm-gray-light focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
          placeholder="City, State (e.g. Custer, SD)"
        />
      </div>

      {/* Experience */}
      <div>
        <label
          htmlFor="experience"
          className="mb-2 block text-sm font-medium text-espresso"
        >
          Relevant Experience
        </label>
        <textarea
          id="experience"
          name="experience"
          rows={3}
          className="w-full rounded-lg border border-espresso/10 bg-white px-4 py-3 text-espresso placeholder-warm-gray-light focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
          placeholder="Tell us about your coffee, hospitality, or management experience..."
        />
      </div>

      {/* Brief Message (optional) */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-espresso"
        >
          Anything Else?{" "}
          <span className="text-warm-gray-light">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full rounded-lg border border-espresso/10 bg-white px-4 py-3 text-espresso placeholder-warm-gray-light focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
          placeholder="Why you want to work at THE OP..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-full bg-espresso px-8 py-4 font-semibold text-cream transition-colors hover:bg-espresso/90"
      >
        Join the Waitlist
      </button>
    </form>
  );
}
