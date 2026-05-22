"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectImageSlider from "@/components/ProjectImageSlider";
import SectionHeader from "@/components/SectionHeader";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Featured Projects" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="glass-card hover-lift rounded-3xl overflow-hidden flex flex-col group"
            >
              <ProjectImageSlider images={project.images} title={project.title} />

              <div className="p-8 flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold mb-4 ${project.titleColor || "text-white"}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-secondary/50 border border-border/50 text-[10px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] flex items-center justify-center gap-2 bg-white text-black py-2.5 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live System
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] flex items-center justify-center gap-2 bg-secondary/50 border border-border text-white py-2.5 rounded-xl text-sm font-bold hover:bg-secondary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {project.serverLink ? "Client Code" : "Source Code"}
                  </a>
                  {project.serverLink && (
                    <a
                      href={project.serverLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-secondary/30 border border-border text-white py-2.5 rounded-xl text-sm font-bold hover:bg-secondary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Server API
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
