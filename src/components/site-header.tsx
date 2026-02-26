"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/partners", label: "Partners" },
  { href: "/community", label: "Community" },
  { href: "/careers", label: "Careers" },
  { href: "/perks", label: "Perks" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-cream/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="THE OP Home"
        >
          <Coffee className="h-7 w-7 text-espresso" />
          <span className="text-xl font-bold tracking-tight text-espresso">
            THE OP
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-warm-gray transition-colors hover:text-espresso"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-espresso px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-espresso-light md:inline-flex"
        >
          Visit Us
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-espresso" />
          ) : (
            <Menu className="h-6 w-6 text-espresso" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-espresso/10 bg-cream px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-medium text-warm-gray transition-colors hover:text-espresso"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-espresso px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-espresso-light"
                onClick={() => setMobileOpen(false)}
              >
                Visit Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
