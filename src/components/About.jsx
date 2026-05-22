"use client";

import { Code2, Cpu, Server, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const coreStack = [
  "HTML, CSS", "Tailwind CSS", "JavaScript (ES6+)", "React.js", "Next.js", "Node.js",
  "Express.js", "MongoDB",  "SQL", "Git & GitHub"
  // "PostgreSQL",
];

const advancedTech = [
  // "REST API Development & Integration",
  "Authentication & Authorization",
  "Database Design & CRUD Operations",
  "Component-based UI Architecture",
  "Responsive Web Application Development",
  "Project Deployment (Vercel)",
  "AI Tools Integration",
  // "Multi-role based architecture"
];

const experiencePoints = [
  "Built multiple responsive web applications",
  "Developed full-stack projects using React, Next.js & Node.js",
  "Integrated APIs to create dynamic applications",
  "Designed and managed database structures",
  "Implemented authentication systems",
  // "CI/CD pipeline understanding",
  // "Worked on real-world project-based learning",
  "Improving system design and backend understanding"
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInLeft}
          >
            <p className="text-lg mb-6">
              Hi, I&apos;m <span className="bg-secondary px-2 py-1 rounded text-white font-semibold">{profile.name}</span>, a <span className="text-emerald-500 font-bold">Full-Stack Web Developer.</span>
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              I enjoy building modern and responsive web applications using React, Next.js, Node.js, and MongoDB. 
              I focus on writing clean code, building REST APIs, and creating practical real-world projects while 
              continuously improving my backend and system design skills.
            </p>

            <div className="mb-10">
              <h3 className="flex items-center gap-2 text-xl font-bold mb-6 text-emerald-500">
                <Code2 className="w-5 h-5" />
                Core Stack
              </h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
                className="flex flex-wrap gap-2"
              >
                {coreStack.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={staggerItem}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 text-sm hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold mb-6 text-emerald-500">
                <Cpu className="w-5 h-5" />
                Advanced Technologies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                {advancedTech.map((tech) => (
                  <div key={tech} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInRight}
            className="glass-card hover-lift rounded-3xl p-8 lg:p-10 border-emerald-500/20 shadow-2xl shadow-emerald-500/5"
          >
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-8">
              <Server className="w-6 h-6 text-emerald-500" />
              Development Experience
            </h3>
            
            <ul className="space-y-4 mb-10">
              {experiencePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-muted-foreground group-hover:text-white transition-colors">{point}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-emerald-500 hover:text-white transition-all transform hover:-translate-y-1">
              Let&apos;s Work Together
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
