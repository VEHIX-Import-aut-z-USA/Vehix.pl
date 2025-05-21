import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // ✅ Только в проде: принудительный HTTPS
  if (process.env.NODE_ENV === "production" && url.protocol === "http:") {
    url.protocol = "https:";
    return NextResponse.redirect(url);
  }

  // 🚫 Удаление www (всегда, независимо от среды)
  if (url.hostname.startsWith("www.")) {
    return NextResponse.redirect(
      new URL(url.href.replace("www.", ""))
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"],
};
