import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const isProduction = process.env.NODE_ENV === "production";
  const proto = request.headers.get("x-forwarded-proto");

  // 🔒 HTTPS только в продакшене
  if (isProduction && proto && proto !== "https") {
    return NextResponse.redirect(
      new URL(`https://${url.hostname}${url.pathname}${url.search}`)
    );
  }

  // 🌐 Удаление www. всегда
  if (url.hostname.startsWith("www.")) {
    const newHostname = url.hostname.replace("www.", "");
    return NextResponse.redirect(
      new URL(`${url.protocol}//${newHostname}${url.pathname}${url.search}`)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"],
};
