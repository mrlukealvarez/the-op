"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/dashboard/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        const from = searchParams.get("from") || "/dashboard";
        router.push(from);
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-cream/70"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter dashboard password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          className="w-full rounded-lg border border-cream/10 bg-cream/5 px-4 py-3 text-cream placeholder-cream/30 outline-none transition-colors focus:border-amber focus:ring-1 focus:ring-amber disabled:opacity-50"
        />
      </div>

      {error && (
        <div className="rounded-lg bg-red-500/20 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-amber px-4 py-3 font-semibold text-espresso transition-all hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-espresso p-4">
      <div className="w-full max-w-md rounded-2xl border border-cream/10 bg-espresso/80 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 flex flex-col items-center gap-3">
          <h1 className="text-3xl font-bold text-cream">THE OP</h1>
          <p className="text-sm text-cream/60">
            Enter your password to access the dashboard
          </p>
        </div>
        <Suspense
          fallback={
            <div className="py-4 text-center text-cream/60">Loading...</div>
          }
        >
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
