import { clerkMiddleware } from "@clerk/nextjs/server";

// In dev mode, skip protecting routes
export default clerkMiddleware(async (auth, req) => {
  if (process.env.NODE_ENV === "production") {
    await auth.protect(); // only protect in production
  } else {
    // developer mode: allow everything
    return;
  }
});

export const config = {
  matcher: [
    "/((?!_next|_static|favicon.ico).*)",
    "/(api|trpc)(.*)",
  ],
};
