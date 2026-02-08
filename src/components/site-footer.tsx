import Link from "next/link";
import { Coffee } from "lucide-react";

const footerLinks = {
  Visit: [
    { href: "/menu", label: "Menu" },
    { href: "/events", label: "Events" },
    { href: "/community", label: "Community" },
    { href: "/contact", label: "Contact" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Careers" },
    { href: "https://bhconsortium.com", label: "Black Hills Consortium" },
  ],
  Connect: [
    { href: "#", label: "Instagram" },
    { href: "#", label: "Facebook" },
    { href: "#", label: "Twitter / X" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-espresso/10 bg-espresso text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Coffee className="h-6 w-6 text-amber" />
              <span className="text-lg font-bold text-cream">THE OP</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-cream/60">
              Where the Black Hills Come Together. Amsterdam-inspired cafe and
              community space in Custer, South Dakota.
            </p>
            <p className="text-xs text-cream/40">
              Part of{" "}
              <a
                href="https://bhconsortium.com"
                className="underline transition-colors hover:text-amber"
              >
                Black Hills Consortium
              </a>
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream/50">
                {heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 transition-colors hover:text-amber"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-xs text-cream/40">
          <p>
            &copy; {new Date().getFullYear()} THE OP &mdash; A Black Hills
            Consortium Entity. Custer, South Dakota.
          </p>
        </div>
      </div>
    </footer>
  );
}
