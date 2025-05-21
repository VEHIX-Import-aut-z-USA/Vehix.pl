import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muscle Cars i samochody sportowe – Import z USA | VEHIX",
  description:
    "Importujemy legendarne amerykańskie muscle cars i sportowe auta: Ford Mustang, Chevrolet Camaro, Dodge Challenger, Corvette, Shelby GT500 i więcej. Kompleksowa obsługa – zamów kalkulację online.",
};

export default function MuscleCarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      role="main"
      aria-label="Oferta muscle cars i samochodów sportowych z USA"
    >
      {children}
    </main>
  );
}
