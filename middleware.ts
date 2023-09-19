import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("auth_token");
  const pathname = request.nextUrl.pathname;

  if (cookie && pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (cookie && pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (!cookie && pathname !== "/" && pathname !== "/sign-in") {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/home", "/", "/notifications", "/me", "/sign-in"],
};
