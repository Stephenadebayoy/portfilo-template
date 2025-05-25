/** @format */

import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (
    !(
      url.pathname === "/landing" ||
      url.pathname === "/templates" ||
      url.pathname === "/auth/login" ||
      url.pathname === "/auth/register"
    )
  ) {
    return NextResponse.redirect(new URL("/landing", request.url));
  }

  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  url.searchParams.set("viewport", viewport);

  return NextResponse.next();
}

export const config = {
  matcher: ["/landing", "/templates", "/auth/login", "/auth/register"],
};
