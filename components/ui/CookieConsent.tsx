"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("vehix_cookie_accepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("vehix_cookie_accepted", "true");
    setVisible(false);

    // ✅ CONSENT MODE v2 – informujemy Google o akceptacji
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }

    // ✅ Wyślij zdarzenie do Google Tag Manager (dataLayer)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consentGranted",
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50">
      <div className="bg-white border border-gray-300 rounded-2xl shadow-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-gray-800">
          Używamy plików cookies w celach analitycznych i marketingowych. Więcej
          informacji znajdziesz w naszej{" "}
          <a href="/polityka" className="text-accent underline">
            polityce prywatności
          </a>.
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={acceptCookies}
            className="bg-primary text-white text-sm px-4 py-2 rounded-full hover:opacity-90 transition"
          >
            Akceptuję
          </button>
          <button
            onClick={() => setVisible(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Zamknij baner cookies"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
