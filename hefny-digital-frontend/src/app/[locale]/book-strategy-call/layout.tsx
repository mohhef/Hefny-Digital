export default function ScheduleMeetingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {children}
    </section>
  );
}
