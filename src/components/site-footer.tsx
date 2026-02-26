import Link from "next/link";
import { Coffee } from "lucide-react";

const footerLinks = {
  Visit: [
    { href: "/menu", label: "Menu" },
    { href: "/events", label: "Events" },
    { href: "/partners", label: "Partners" },
    { href: "/community", label: "Community" },
    { href: "/contact", label: "Contact" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/perks", label: "Perks" },
    { href: "/about", label: "Black Hills Consortium" },
  ],
  Connect: [
    { href: "/contact", label: "Email Us" },
    { href: "/events", label: "Upcoming Events" },
    { href: "/community", label: "Join the Community" },
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
              Coffee, local beer, and Black Hills merch on the Grow Campus in
              Custer, South Dakota.
            </p>
            <p className="text-xs text-cream/40">
              Part of{" "}
              <a
                href="/about"
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

        <div className="mt-12 border-t border-cream/10 pt-8 flex flex-col items-center gap-4 text-xs text-cream/40">
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-amber transition-colors">
              Terms of Service
            </Link>
            <span>&middot;</span>
            <Link
              href="/privacy"
              className="hover:text-amber transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-cream/30 uppercase tracking-wider">
              Built With
            </span>
            <div className="flex items-center gap-2.5">
              {[
                {
                  href: "https://anthropic.com",
                  label: "Anthropic",
                  char: "A",
                },
                { href: "https://vercel.com", label: "Vercel", char: "\u25B2" },
                { href: "https://supabase.com", label: "Supabase", char: "S" },
                { href: "https://meta.com", label: "Meta", char: "M" },
                { href: "https://nextjs.org", label: "Next.js", char: "N" },
                { href: "https://x.ai", label: "xAI", char: "X" },
                { href: "https://openai.com", label: "OpenAI", char: "O" },
                { href: "https://cursor.com", label: "Cursor", char: "C" },
                {
                  href: "https://elevenlabs.io",
                  label: "ElevenLabs",
                  char: "11",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.label}
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-cream/5 text-[10px] font-semibold text-cream/40 transition-all hover:bg-amber/20 hover:text-amber hover:scale-110"
                >
                  {item.char}
                </a>
              ))}
            </div>
          </div>
          <p>
            &copy; {new Date().getFullYear()} THE OP &mdash; A Black Hills
            Consortium Entity. Custer, South Dakota.
          </p>
        </div>
      </div>
    </footer>
  );
}
