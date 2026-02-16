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
          Application Submitted!
        </h3>
        <p className="text-warm-gray">
          Thanks! We&apos;ll watch your video and reach out within 48 hours.
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

      {/* Role */}
      <div>
        <label
          htmlFor="role"
          className="mb-2 block text-sm font-medium text-espresso"
        >
          Role
        </label>
        <select
          id="role"
          name="role"
          required
          className="w-full rounded-lg border border-espresso/10 bg-white px-4 py-3 text-espresso focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
        >
          <option value="">Select a role...</option>
          <option value="cafe-manager">Cafe Manager</option>
          <option value="lead-barista">Lead Barista</option>
          <option value="merch-coordinator">Merch Coordinator</option>
          <option value="campus-host">Campus Host</option>
          <option value="prep-cook">Prep Cook</option>
          <option value="general">General Interest</option>
        </select>
      </div>

      {/* Portfolio URL */}
      <div>
        <label
          htmlFor="portfolio"
          className="mb-2 block text-sm font-medium text-espresso"
        >
          Portfolio URL
        </label>
        <input
          type="url"
          id="portfolio"
          name="portfolio"
          required
          className="w-full rounded-lg border border-espresso/10 bg-white px-4 py-3 text-espresso placeholder-warm-gray-light focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
          placeholder="Your website, LinkedIn, Behance, or any link to your work"
        />
      </div>

      {/* Video Introduction URL */}
      <div>
        <label
          htmlFor="video"
          className="mb-2 block text-sm font-medium text-espresso"
        >
          Video Introduction URL
        </label>
        <input
          type="url"
          id="video"
          name="video"
          required
          className="w-full rounded-lg border border-espresso/10 bg-white px-4 py-3 text-espresso placeholder-warm-gray-light focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
          placeholder="Loom, YouTube unlisted, or Google Drive link (60-90 sec)"
        />
      </div>

      {/* Preferred Meeting Link */}
      <div>
        <label
          htmlFor="meeting"
          className="mb-2 block text-sm font-medium text-espresso"
        >
          Preferred Meeting Link
        </label>
        <input
          type="text"
          id="meeting"
          name="meeting"
          required
          className="w-full rounded-lg border border-espresso/10 bg-white px-4 py-3 text-espresso placeholder-warm-gray-light focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
          placeholder="Calendly, Cal.com, or 'I'll email times'"
        />
      </div>

      {/* Brief Message (optional) */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-espresso"
        >
          Brief Message <span className="text-warm-gray-light">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-espresso/10 bg-white px-4 py-3 text-espresso placeholder-warm-gray-light focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
          placeholder="Anything else you'd like us to know..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-full bg-espresso px-8 py-4 font-semibold text-cream transition-colors hover:bg-espresso/90"
      >
        Submit Application
      </button>
    </form>
  );
}
