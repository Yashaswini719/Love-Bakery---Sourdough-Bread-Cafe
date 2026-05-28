import type { Review } from "@/types";
import { formatDate } from "@/utils/format";

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
      <div className="flex gap-1 text-accent" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} aria-hidden>
            ★
          </span>
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">&ldquo;{review.text}&rdquo;</p>
      <footer className="mt-6 border-t border-border pt-4 text-sm text-muted">
        <cite className="not-italic font-medium text-foreground">{review.author}</cite>
        <span className="mx-2">·</span>
        <time dateTime={review.date}>{formatDate(review.date)}</time>
      </footer>
    </blockquote>
  );
}
