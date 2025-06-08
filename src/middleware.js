import { NextResponse } from "next/server";

export function middleware(request) {
  const jwt = request.cookies.get("logintoken")?.value;
  const { pathname } = request.nextUrl;

  const publicPaths = ["/Login", "/Signup"];
  const protectedPaths = ["/add_Task", "/Show_Task", "/"];

  // 🔒 If user is not logged in and trying to access protected pages
  if (!jwt && protectedPaths.includes(pathname)) {
     NextResponse.redirect(new URL("/Login", request.url));
  }

  // 🔁 If user is logged in and trying to access login or signup
  if (jwt && publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/add_Task", request.url));
  }

  return NextResponse.next(); // Allow all other requests
}

export const config = {
  matcher: ["/", "/add_Task", "/Show_Task", "/Login", "/Signup"],
};
