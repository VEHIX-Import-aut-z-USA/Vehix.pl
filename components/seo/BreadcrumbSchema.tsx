"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function BreadcrumbSchema() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const parts = pathname.split("/").filter(Boolean);
  const breadcrumbList = parts.map((segment, index) => {
    const href = "https://vehix.pl/" + parts.slice(0, index + 1).join("/");
    return {
      "@type": "ListItem",
      position: index + 2,
      name:
        segment.charAt(0).toUpperCase() +
        segment.slice(1).replace(/-/g, " "),
      item: href,
    };
  });

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://vehix.pl/",
      },
      ...breadcrumbList,
    ],
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
