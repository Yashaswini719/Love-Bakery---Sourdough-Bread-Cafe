import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { getMenuItems } from "@/services/menuService";
import { MenuGrid } from "@/features/menu/MenuGrid";

export const metadata: Metadata = createPageMetadata({
  title: "Menu",
  description:
    "Explore our daily sourdough loaves, pastries, specialty coffee, and brunch selections.",
  path: "/menu",
});

export default async function MenuPage() {
  const items = await getMenuItems();

  return (
    <Section
      eyebrow="Menu"
      title="Sourdough, pastry, coffee"
      description="Baked and brewed in small batches. Seasonal items rotate weekly."
    >
      <MenuGrid items={items} />
    </Section>
  );
}
