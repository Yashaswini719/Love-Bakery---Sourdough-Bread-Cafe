import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { getGalleryImages } from "@/services/galleryService";
import { GalleryGrid } from "@/features/gallery/GalleryGrid";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description:
    "A look inside Love Bakery — loaves, pastries, coffee, and our calm café space.",
  path: "/gallery",
});

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <Section
      eyebrow="Gallery"
      title="A glimpse of the craft"
      description="Sourdough mornings, pastry afternoons, and a warm place to linger."
    >
      <GalleryGrid images={images} />
    </Section>
  );
}
