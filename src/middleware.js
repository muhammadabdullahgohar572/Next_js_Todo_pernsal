import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const jwt = request.cookies.get("logintoken")?.value;

  if (request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const Authpath =
    request.nextUrl.pathname === "/Signup" ||
    request.nextUrl.pathname === "/Login";

  if (jwt && Authpath) {
    return NextResponse.redirect(new URL("/add_Task", request.url));
  }

  if (!jwt && !Authpath && !request.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/Login", "/Signup", "/add_Task", "/Show_Task"],
};
