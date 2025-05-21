import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LeadCaptureBar from "@/components/lead-capture/lead-capture-bar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import CookieConsent from "@/components/ui/CookieConsent";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://vehix.pl"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://vehix.pl",
    siteName: "VEHIX",
    title: "VEHIX – Import aut z USA",
    description: "Sprowadzamy auta z USA pod klucz – bez stresu i niespodzianek.",
    images: [
      {
        url: "https://vehix.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VEHIX - import aut z USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VEHIX – Import aut z USA",
    description: "Importuj auta z USA z VEHIX. Kompleksowa obsługa i gwarancja ceny.",
    images: ["https://vehix.pl/og-image.jpg"],
    site: "@vehixpl",
  },
  themeColor: "#0A0F1C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://vehix.pl/" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:image" content="https://vehix.pl/og-image.jpg" />

        {/* ✅ PWA + iOS meta */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#002868" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="VEHIX" />

        {/* ✅ Fonts */}
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W4C2LZ6C');
            `,
          }}
        />

        {/* ✅ Schema.org Organization */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VEHIX",
              url: "https://vehix.pl",
              logo: "https://vehix.pl/Vehix-Logo-PNG.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+48 600 928 700",
                contactType: "Customer Service",
              },
              sameAs: [
                "https://www.facebook.com/vehixpolska",
                "https://www.instagram.com/vehixpolska",
              ],
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4C2LZ6C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header role="banner" aria-label="Nagłówek serwisu">
            <Header />
          </header>

          <main role="main" className="min-h-screen" id="main-content">
            {children}
          </main>

          <LeadCaptureBar />

          <footer role="contentinfo" aria-label="Stopka serwisu">
            <Footer />
          </footer>

          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
