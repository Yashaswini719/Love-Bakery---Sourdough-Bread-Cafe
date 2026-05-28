import { cn } from "@/utils/cn";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  eyebrow,
  title,
  description,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-2xl sm:mb-12">
            {eyebrow && (
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
