import type { Metadata } from "next";
import { PublicPageShell } from "@/components/layout/public-page-shell";
import { MenuIndex } from "@/features/menu/components/menu-index";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Love Bakery's artisan sourdough loaves, cafe plates, pastries, and coffee menu.",
};

export default function MenuPage() {
  return (
    <PublicPageShell>
      <MenuIndex />
    </PublicPageShell>
  );
}
