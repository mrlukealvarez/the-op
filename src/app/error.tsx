"use client";

import { Coffee } from "lucide-react";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <Coffee className="mb-6 h-16 w-16 text-warm-gray-light" />
      <h1 className="mb-3 text-3xl font-bold text-espresso">
        Something Went Wrong
      </h1>
      <p className="mb-8 max-w-md text-warm-gray">
        Even the best baristas spill sometimes. Let&apos;s try that again.
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-espresso px-8 py-3 font-semibold text-cream transition-colors hover:bg-espresso-light"
      >
        Try Again
      </button>
    </div>
  );
}
