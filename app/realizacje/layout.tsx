import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realizacje – Import aut z USA | VEHIX",
  description:
    "Zobacz przykłady aut sprowadzonych przez VEHIX. Poznaj opinie klientów i przekonaj się, dlaczego warto nam zaufać przy imporcie auta z USA.",
};

export default function RealizacjeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-6 bg-white min-h-screen">
      <section
        role="region"
        aria-label="Galeria realizacji importu aut z USA"
        className="realizacje-wrapper"
      >
        {children}
      </section>
    </div>
  );
}
