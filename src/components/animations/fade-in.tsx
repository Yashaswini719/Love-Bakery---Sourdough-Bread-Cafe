"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp } from "@/components/animations/motion-presets";
import { cn } from "@/utils/cn";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function FadeIn({ className, delay = 0, ...props }: FadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={fadeUp}
      transition={{ delay }}
      {...props}
    />
  );
}
