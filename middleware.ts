import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Define protected routes
  const protectedRoutes = ["/student-dashboard", "/profile", "/settings"];

  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL("/loginForm", req.url)); // Redirect to login if not authenticated
    }
  }

  return NextResponse.next(); // Allow access if authenticated
}

// Apply middleware only to protected routes
export const config = {
  matcher: ["/student-dashboard", "/student-profile"], // Add protected routes here
};
