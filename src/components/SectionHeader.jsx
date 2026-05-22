"use client";

import { motion } from "framer-motion";
import { sectionReveal, viewportOnce } from "@/lib/motion";

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionReveal}
      className="text-center mb-16"
    >
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 bg-emerald-500 mx-auto rounded-full mt-4"
      />
    </motion.div>
  );
}
