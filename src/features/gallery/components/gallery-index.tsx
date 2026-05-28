"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/components/animations/motion-presets";
import { SectionHeading } from "@/components/shared/section-heading";
import { galleryImages } from "@/constants/site";

export function GalleryIndex() {
  return (
    <section className="px-5 pb-24 pt-32 sm:px-8 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title="A visual archive for bread, light, texture, and ritual."
          body="Designed for Cloudinary-backed image sets with room for captions, sort ordering, and admin curation."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-12 grid auto-rows-[240px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
        >
          {galleryImages.concat(galleryImages.slice(0, 2)).map((src, index) => (
            <motion.div
              key={`${src}-${index}`}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={[
                "group relative overflow-hidden rounded-[1.5rem] bg-espresso shadow-soft",
                index % 5 === 0 ? "lg:col-span-3 lg:row-span-2" : "lg:col-span-2",
                index % 5 === 2 ? "lg:col-span-4" : "",
              ].join(" ")}
            >
              <Image
                src={src}
                alt={`Love Bakery gallery scene ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
