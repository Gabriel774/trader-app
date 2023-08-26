import { NextRequest, NextResponse } from "next/server";
export const config = {};

export function middleware(req: NextRequest) {
  const auth_token = req.cookies.has("auth_token");

  if (req.nextUrl.pathname.startsWith("/stocks") && !auth_token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (
    (req.nextUrl.pathname == "/" || req.nextUrl.pathname == "/register") &&
    auth_token
  ) {
    return NextResponse.redirect(new URL("/stocks/trade", req.url));
  }
}
