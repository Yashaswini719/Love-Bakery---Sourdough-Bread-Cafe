export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-charcoal px-6 py-10 text-cream">
      <section className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Admin foundation
        </p>
        <h1 className="mt-4 font-serif text-5xl">Love Bakery Dashboard</h1>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {["Menu", "Gallery", "Reservations", "Settings"].map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-cream/10 bg-cream/[0.05] p-6"
            >
              <p className="font-serif text-2xl">{item}</p>
              <p className="mt-3 text-sm leading-6 text-cream/60">
                Ready for Supabase CRUD screens, auth guards, and upload flows.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
