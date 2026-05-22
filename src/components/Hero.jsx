"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/site";
import { staggerContainer, staggerItem } from "@/lib/motion";

const skills = [
  { name: "React", color: "text-blue-400" },
  { name: "Next.js", color: "text-purple-400" },
  { name: "Node.js", color: "text-green-400" },
  { name: "Express", color: "text-gray-400" },
  { name: "MongoDB", color: "text-emerald-400" },
  // { name: "REST APIs", color: "text-cyan-400" },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for New Opportunities
          </motion.div>

          <motion.h1 variants={staggerItem} className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>
          <motion.p variants={staggerItem} className="text-xl lg:text-2xl text-muted-foreground mb-8">
            Building Scalable and Responsive Web Applications.
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-wrap gap-3 mb-10">
            {skills.map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className={`px-4 py-1.5 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium ${skill.color}`}
              >
                {skill.name}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mb-10">
            <motion.button
              type="button"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-emerald-500 hover:text-white transition-colors"
            >
              View Projects
            </motion.button>
            <motion.a
              href={profile.cv}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-secondary/50 border border-border text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary transition-colors inline-flex items-center justify-center"
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div variants={staggerItem} className="flex gap-4">
            {[
              { Icon: Github, href: profile.github },
              { Icon: Linkedin, href: profile.linkedin },
              { Icon: Mail, href: `mailto:${profile.email}` },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.12, y: -3 }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-emerald-500/20"
          />
          <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 p-4">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-emerald-500/20 relative">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 320px, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
              </div>
            </div>

            {/* Floating icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-10 right-0 w-12 h-12 bg-secondary/80 border border-border/50 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm"
            >
              <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute bottom-10 left-0 w-12 h-12 bg-secondary/80 border border-border/50 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm"
            >
              <div className="w-5 h-5 border-2 border-muted rounded-sm rotate-12" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
