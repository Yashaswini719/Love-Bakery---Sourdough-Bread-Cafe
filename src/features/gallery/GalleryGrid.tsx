import Image from "next/image";
import type { GalleryImage } from "@/types";
import { MotionReveal } from "@/components/shared/MotionReveal";

type GalleryGridProps = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <li key={image.id}>
          <MotionReveal delay={index * 0.05}>
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {image.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4 text-sm text-surface">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          </MotionReveal>
        </li>
      ))}
    </ul>
  );
}
