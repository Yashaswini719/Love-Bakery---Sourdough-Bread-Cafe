import Link from "next/link";
import { Camera, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/constants/site";

export function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-14 text-cream sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-4xl">Love Bakery</p>
          <p className="mt-4 max-w-md leading-7 text-cream/64">
            Slow bread, quiet coffee, and a digital experience built to feel as
            considered as the first warm slice.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Visit
          </p>
          <p className="leading-7 text-cream/72">{siteConfig.address}</p>
          <p className="mt-2 leading-7 text-cream/72">{siteConfig.hours}</p>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Connect
          </p>
          <div className="flex gap-3">
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream transition hover:border-gold hover:text-gold"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle size={18} />
            </Link>
            <Link
              href={siteConfig.mapUrl}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream transition hover:border-gold hover:text-gold"
              aria-label="Open Google Maps"
            >
              <MapPin size={18} />
            </Link>
            <Link
              href="https://instagram.com"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream transition hover:border-gold hover:text-gold"
              aria-label="Open Instagram"
            >
              <Camera size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
