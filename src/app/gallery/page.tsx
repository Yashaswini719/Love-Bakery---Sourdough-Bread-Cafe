import type { Metadata } from "next";
import { PublicPageShell } from "@/components/layout/public-page-shell";
import { GalleryIndex } from "@/features/gallery/components/gallery-index";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A cinematic gallery of Love Bakery sourdough, cafe interiors, pastries, and coffee moments.",
};

export default function GalleryPage() {
  return (
    <PublicPageShell>
      <GalleryIndex />
    </PublicPageShell>
  );
}
