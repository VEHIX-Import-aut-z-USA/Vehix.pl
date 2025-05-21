export default function ProcesImportuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      role="region"
      aria-label="Proces importu auta z USA krok po kroku"
      className="proces-importu-wrapper"
    >
      {children}
    </section>
  );
}
