"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/components/animations/motion-presets";
import { SectionHeading } from "@/components/shared/section-heading";
import { menuCategories } from "@/constants/site";

export function MenuIndex() {
  return (
    <section className="px-5 pb-24 pt-32 sm:px-8 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Full menu"
          title="House-made sourdough, cafe plates, pizzas, and slow drinks."
          body="A faithful digital version of the Love Bakery menu, structured so the same data can later move into Supabase admin management."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {menuCategories.map((category) => (
            <motion.article
              key={category.name}
              variants={fadeUp}
              className="rounded-[1.5rem] border border-charcoal/10 bg-white/35 p-6 shadow-soft backdrop-blur"
            >
              <h2 className="font-serif text-4xl text-charcoal">
                {category.name}
              </h2>
              {category.note ? (
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-coffee/70">
                  {category.note}
                </p>
              ) : null}
              <div className="mt-7 space-y-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="border-t border-charcoal/10 pt-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        {"marker" in item && item.marker ? (
                          <MenuMarker marker={item.marker} />
                        ) : null}
                        <h3 className="text-lg font-semibold text-charcoal">
                          {item.name}
                        </h3>
                      </div>
                      <p className="shrink-0 rounded-full bg-gold/15 px-3 py-1 text-sm font-semibold text-coffee">
                        {item.price}
                      </p>
                    </div>
                    {item.description ? (
                      <p className="mt-2 leading-7 text-charcoal/62">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Original menu boards"
            title="Client menu references, preserved for review."
            body="These are the source menu images you shared, kept in the site so the digital menu can be checked against the original boards."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="mt-10 grid gap-6 lg:grid-cols-2"
          >
            {["/menu/love-bakery-menu-1.jpeg", "/menu/love-bakery-menu-2.jpeg"].map(
              (src, index) => (
                <motion.figure
                  key={src}
                  variants={fadeUp}
                  className="overflow-hidden rounded-[1.5rem] border border-charcoal/10 bg-white/45 p-3 shadow-soft backdrop-blur"
                >
                  <div className="relative aspect-[9/13] overflow-hidden rounded-[1.1rem] bg-linen">
                    <Image
                      src={src}
                      alt={`Love Bakery original menu board ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </motion.figure>
              ),
            )}
          </motion.div>
        </section>
      </div>
    </section>
  );
}

function MenuMarker({ marker }: { marker: string }) {
  const color =
    marker === "veg"
      ? "border-emerald-700 text-emerald-700"
      : marker === "egg"
        ? "border-gold text-gold"
        : "border-rose text-rose";

  return (
    <span
      aria-label={marker}
      className={`mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center border ${color}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
    </span>
  );
}
