export default function ONasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section role="region" aria-label="Poznaj zespół VEHIX">
      {children}
    </section>
  );
}
