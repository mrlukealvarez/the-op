import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (request.nextUrl.pathname !== "/dashboard/login") {
      const authCookie = request.cookies.get("theop_dashboard_auth");
      const dashboardPassword = process.env.DASHBOARD_PASSWORD || "theop2026";

      if (authCookie?.value !== dashboardPassword) {
        const loginUrl = new URL("/dashboard/login", request.url);
        loginUrl.searchParams.set("from", request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
