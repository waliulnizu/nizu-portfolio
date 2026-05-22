"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/site";
import { sectionReveal, viewportOnce } from "@/lib/motion";

export default function Footer() {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="py-20 px-6 relative border-t border-border/30 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionReveal}
        className="max-w-7xl mx-auto flex flex-col items-center"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mb-12 relative"
        >
          <ChevronRight className="w-6 h-6 text-yellow-500 absolute -left-8 top-1/2 -translate-y-1/2 -rotate-45" />
          <h2 className="text-6xl font-black tracking-tighter text-gradient">NIZU</h2>
          <div className="h-1.5 w-full bg-white mt-1 shimmer-border" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {["ABOUT", "PROJECTS", "SKILLS", "EDUCATION", "CONTACT"].map((link, i) => (
            <motion.div key={link} whileHover={{ y: -2 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
              <Link
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleLinkClick(e, `#${link.toLowerCase()}`)}
                className="text-xs font-bold tracking-widest text-muted-foreground hover:text-emerald-500 transition-colors"
              >
                {link}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-xs text-muted-foreground">
          © 2026 All rights reserved by <span className="text-primary font-medium">{profile.name}</span>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
