import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SUV-y i Pickupy - Vehix Import Samochodów z USA",
  description: "Sprowadzamy przestronne i komfortowe SUV-y oraz praktyczne pickupy z USA: Jeep Grand Cherokee, Ford F-150, Dodge RAM i wiele innych.",
};

export default function SuvPickupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}