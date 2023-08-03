import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieUser = request.cookies.get("user");

  if (pathname === "/" && cookieUser) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (pathname !== "/" && !cookieUser) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
