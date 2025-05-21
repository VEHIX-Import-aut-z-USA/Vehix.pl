export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      role="region"
      aria-label="Najczęściej zadawane pytania o import aut z USA"
      className="faq-wrapper"
    >
      {children}
    </section>
  );
}
