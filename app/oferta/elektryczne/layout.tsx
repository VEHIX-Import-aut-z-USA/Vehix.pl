import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elektryczne samochody z USA – Tesla, Mach-E, Rivian | VEHIX",
  description:
    "Sprawdź ofertę elektryków z USA po pełnym imporcie: Tesla, Mach-E, Rivian. Realne ceny, wsparcie w dotacjach i kompleksowa obsługa importu od VEHIX.",
};

export default function ElektryczneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main aria-label="Oferta samochodów elektrycznych z USA">
      {children}
    </main>
  );
}
