import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oferta VEHIX – auta z USA",
  description:
    "Sprowadzamy muscle cars, SUV-y, luksusowe i elektryczne auta prosto z USA. Z VEHIX zaoszczędzisz do 30% i zyskasz pełną obsługę „pod klucz”.",
};

export default function OfertaLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      role="main"
      aria-label="Oferta samochodów z USA"
      className="pt-20"
    >
      <nav
        role="navigation"
        aria-label="Katalog ofert VEHIX"
        className="bg-gray-50 py-4"
      >
        <ul className="container-content flex flex-wrap gap-4 text-sm">
          <li>
            <Link href="/oferta/top5" className="hover:underline">
              Top 5 modeli
            </Link>
          </li>
          <li>
            <Link href="/oferta/muscle-cars" className="hover:underline">
              Muscle Cars
            </Link>
          </li>
          <li>
            <Link href="/oferta/suv-pickup" className="hover:underline">
              SUV / Pickup
            </Link>
          </li>
          <li>
            <Link href="/oferta/luksusowe" className="hover:underline">
              Luksusowe
            </Link>
          </li>
          <li>
            <Link href="/oferta/elektryczne" className="hover:underline">
              Elektryczne
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
}
