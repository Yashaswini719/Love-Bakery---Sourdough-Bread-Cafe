import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function PublicPageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
