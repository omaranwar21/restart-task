import { AUTH_COOKIE_KEY } from "@/lib/types";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE_KEY)?.value;
  console.log("🚀 ~ middleware ~ token:", token);
  const { pathname } = request.nextUrl;

  // If user is logged in and tries to access login page, redirect to dashboard
  if (token && !pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If user is not logged in and tries to access protected routes, redirect to login
  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
