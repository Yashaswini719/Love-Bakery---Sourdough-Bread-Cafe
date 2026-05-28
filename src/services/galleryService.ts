import type { GalleryImage } from "@/types";

const GALLERY: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    alt: "Fresh sourdough loaves on a wooden board",
    caption: "Morning bake",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    alt: "Artisan croissants in a bakery display",
    caption: "Pastry case",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    alt: "Specialty coffee being poured",
    caption: "Coffee bar",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1486427944299-d1955d23a34e?w=800&q=80",
    alt: "Cozy café interior with natural light",
    caption: "Our space",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1608198093002-16d1691ecc09?w=800&q=80",
    alt: "Hands scoring bread dough",
    caption: "Craft",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1517433670267-08bbd2be890f?w=800&q=80",
    alt: "Brunch spread on a café table",
    caption: "Weekend brunch",
  },
];

export async function getGalleryImages(): Promise<GalleryImage[]> {
  await Promise.resolve();
  return GALLERY;
}
