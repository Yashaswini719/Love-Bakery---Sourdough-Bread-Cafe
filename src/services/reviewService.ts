import type { Review } from "@/types";

const REVIEWS: Review[] = [
  {
    id: "1",
    author: "Elena M.",
    rating: 5,
    text: "The country sourdough is extraordinary — tangy, airy, and worth the line.",
    date: "2025-04-12",
  },
  {
    id: "2",
    author: "James T.",
    rating: 5,
    text: "A true neighborhood gem. Coffee is dialed, pastries disappear by noon.",
    date: "2025-03-28",
  },
  {
    id: "3",
    author: "Priya K.",
    rating: 5,
    text: "Reserved for brunch — avocado toast on their own bread is unbeatable.",
    date: "2025-02-15",
  },
];

export async function getReviews(): Promise<Review[]> {
  await Promise.resolve();
  return REVIEWS;
}
