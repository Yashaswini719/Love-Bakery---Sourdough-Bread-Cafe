import { getReviews } from "@/services/reviewService";
import { Section } from "@/components/ui/Section";
import { ReviewCard } from "./ReviewCard";

export async function ReviewsSection() {
  const reviews = await getReviews();

  return (
    <Section
      id="reviews"
      eyebrow="Guest voices"
      title="Loved by our regulars"
      description="Neighbors, travelers, and sourdough devotees who keep coming back."
      className="bg-cream"
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
