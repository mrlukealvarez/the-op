import Link from "next/link";
import { Coffee } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <Coffee className="mb-6 h-16 w-16 text-warm-gray-light" />
      <h1 className="mb-3 text-4xl font-bold text-espresso">404</h1>
      <p className="mb-2 text-xl font-medium text-espresso">Page Not Found</p>
      <p className="mb-8 max-w-md text-warm-gray">
        Looks like this page wandered off into Custer State Park. Let&apos;s get
        you back to the cafe.
      </p>
      <Link
        href="/"
        className="rounded-full bg-espresso px-8 py-3 font-semibold text-cream transition-colors hover:bg-espresso-light"
      >
        Back to THE OP
      </Link>
    </div>
  );
}
