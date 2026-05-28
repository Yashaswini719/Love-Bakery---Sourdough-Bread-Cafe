import { FadeIn } from "@/components/animations/fade-in";
import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" && "text-center",
        align === "left" && "mx-0",
      )}
    >
      <p
        className={cn(
          "mb-4 text-xs font-bold uppercase tracking-[0.34em]",
          tone === "dark" ? "text-gold" : "text-coffee",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-serif text-4xl leading-[1.02] sm:text-5xl lg:text-6xl",
          tone === "dark" ? "text-cream" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-8 sm:text-lg",
            tone === "dark" ? "text-cream/64" : "text-charcoal/68",
          )}
        >
          {body}
        </p>
      ) : null}
    </FadeIn>
  );
}
