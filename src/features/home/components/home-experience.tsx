"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import {
  fadeUp,
  scaleReveal,
  staggerContainer,
} from "@/components/animations/motion-presets";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SectionHeading } from "@/components/shared/section-heading";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  featuredMenu,
  galleryImages,
  siteConfig,
  testimonials,
} from "@/constants/site";
import { ReservationForm } from "@/features/reservations/components/reservation-form";

export function HomeExperience() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <StorySection />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <ReservationSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[94svh] overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:pt-32">
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-coffee/15 bg-white/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-coffee backdrop-blur"
          >
            <Sparkles size={14} />
            Slow fermented daily
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-5xl font-serif text-[4.2rem] leading-[0.88] text-charcoal sm:text-8xl lg:text-[8.4rem]"
          >
            Love Bakery
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-lg leading-8 text-charcoal/68 sm:text-xl"
          >
            A premium sourdough bread cafe where 36-hour loaves, velvet coffee,
            and European warmth become a cinematic ritual.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton href="#reserve">Reserve a table</MagneticButton>
            <MagneticButton
              href={`https://wa.me/${siteConfig.whatsapp}`}
              variant="light"
            >
              WhatsApp order
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleReveal}
          initial="hidden"
          animate="visible"
          className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/40 bg-espresso shadow-soft sm:min-h-[620px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=90"
            alt="Fresh artisan sourdough bread on a bakery table"
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-cream/8" />
          <motion.div
            className="absolute bottom-6 left-6 right-6 rounded-3xl border border-cream/20 bg-charcoal/42 p-5 text-cream backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.9 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
              Today from the oven
            </p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <p className="font-serif text-3xl">Country sourdough</p>
              <p className="text-sm text-cream/70">7:30 AM batch</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1400&q=90"
          alt="Cafe counter with warm bakery atmosphere"
          className="min-h-[520px] rounded-[2rem]"
        />
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Handcrafted atmosphere"
            title="Bread with a pulse, coffee with a little theatre."
            body="Love Bakery is designed as a sensory journey: slow reveals, warm textures, editorial image rhythm, and conversion paths that feel calm instead of commercial."
          />
          <FadeIn className="mt-10 grid gap-4 sm:grid-cols-3">
            {["36h ferment", "Stone baked", "Single origin coffee"].map(
              (item) => (
                <div
                  key={item}
                  className="border-t border-charcoal/12 pt-5 text-sm font-semibold uppercase tracking-[0.18em] text-coffee"
                >
                  {item}
                </div>
              ),
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="bg-charcoal px-5 py-24 text-cream sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Animated menu"
          title="A small edit of signatures, built for appetite."
          body="Cards reveal slowly, images lift on hover, and the menu model is ready to come from Supabase when the CMS phase begins."
          tone="dark"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {featuredMenu.map((item) => (
            <motion.article
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[1.5rem] border border-cream/12 bg-cream/[0.06]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                      {item.category}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl">{item.name}</h3>
                  </div>
                  <p className="rounded-full bg-gold/15 px-3 py-1 text-sm text-gold">
                    {item.price}
                  </p>
                </div>
                <p className="mt-4 leading-7 text-cream/64">{item.note}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Instagram-ready gallery"
          title="Warm, textured, cinematic moments."
          align="center"
        />
        <div className="mt-12 grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((src, index) => (
            <FadeIn
              key={src}
              delay={index * 0.08}
              className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
            >
              <div className="group relative h-full overflow-hidden rounded-[1.5rem] bg-espresso shadow-soft">
                <Image
                  src={src}
                  alt={`Love Bakery gallery image ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition duration-700 group-hover:bg-charcoal/22" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        {testimonials.map((item) => (
          <FadeIn
            key={item.name}
            className="rounded-[1.5rem] border border-charcoal/10 bg-white/35 p-8 shadow-soft backdrop-blur"
          >
            <p className="font-serif text-3xl leading-tight text-charcoal">
              &ldquo;{item.quote}&rdquo;
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-coffee">
              {item.name} - {item.role}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ReservationSection() {
  return (
    <section id="reserve" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-espresso text-cream shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
        <div className="p-8 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Reserve or order
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-none sm:text-6xl">
            Keep a table warm.
          </h2>
          <p className="mt-6 max-w-lg leading-8 text-cream/68">
            Send a table request directly into the reservation pipeline, or
            order warm bread for pickup through WhatsApp.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-cream/72 sm:grid-cols-2">
            <Info icon={<Clock size={18} />} label={siteConfig.hours} />
            <Info icon={<MapPin size={18} />} label={siteConfig.address} />
          </div>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticButton
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Love%20Bakery%2C%20I%27d%20like%20to%20place%20an%20order.`}
              variant="light"
            >
              <MessageCircle size={16} />
              Order
            </MagneticButton>
            <Link
              href={siteConfig.mapUrl}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/15 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition hover:border-gold hover:text-gold"
            >
              Directions <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="grid gap-6 p-6 sm:p-8 lg:p-10">
          <ReservationForm />
          <ParallaxImage
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=90"
            alt="Warm cafe interior with tables"
            className="min-h-[320px] rounded-[1.5rem]"
          />
        </div>
      </div>
    </section>
  );
}

function Info({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/[0.04] p-4">
      <span className="text-gold">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
