import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realizacje – Import aut z USA | VEHIX",
  description:
    "Zobacz przykłady aut sprowadzonych przez VEHIX. Poznaj opinie klientów i przekonaj się, dlaczego warto nam zaufać przy imporcie auta z USA.",
  alternates: {
    canonical: "https://vehix.pl/realizacje",
  },
};

export default function Head() {
  return (
    <>
      <link rel="canonical" href="https://vehix.pl/realizacje" />
    </>
  );
}
