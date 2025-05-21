export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      role="region"
      aria-label="Sekcja kontaktowa VEHIX – import aut z USA"
    >
      {children}
    </section>
  );
}
