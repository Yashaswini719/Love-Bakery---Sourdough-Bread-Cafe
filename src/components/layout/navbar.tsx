"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/constants/site";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Navbar() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 90],
    ["rgba(251, 244, 232, 0)", "rgba(251, 244, 232, 0.86)"],
  );
  const borderColor = useTransform(
    scrollY,
    [0, 90],
    ["rgba(45, 32, 24, 0)", "rgba(45, 32, 24, 0.12)"],
  );

  return (
    <motion.header
      style={{ background, borderColor }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group" aria-label="Love Bakery home">
          <span className="block font-serif text-2xl leading-none text-charcoal">
            Love Bakery
          </span>
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-coffee">
            Sourdough Cafe
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal/70 transition hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden sm:block">
          <MagneticButton href="#reserve" variant="light">
            Book table
          </MagneticButton>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 bg-cream/70 text-charcoal lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </nav>
    </motion.header>
  );
}
