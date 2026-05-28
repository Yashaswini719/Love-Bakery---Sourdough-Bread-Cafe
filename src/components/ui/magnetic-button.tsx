"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "dark",
  className,
}: MagneticButtonProps) {
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x, y }} onMouseLeave={reset}>
      <Link
        href={href}
        onMouseMove={handleMove}
        className={cn(
          "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold uppercase tracking-[0.18em] transition duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold",
          variant === "dark"
            ? "bg-charcoal text-cream shadow-soft hover:bg-espresso"
            : "border border-charcoal/15 bg-cream/70 text-charcoal backdrop-blur hover:border-gold hover:bg-white/70",
          className,
        )}
      >
        <span>{children}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-gold transition-transform duration-500 group-hover:scale-[1.8]" />
      </Link>
    </motion.div>
  );
}
