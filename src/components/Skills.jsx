"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { 
  Code2, Layout, Database, Terminal, 
  Layers, Lock, Globe, QrCode, Zap, Repeat, Bot 
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: Code2, color: "text-blue-400" },
      { name: "Next.js", icon: Globe, color: "text-white" },
      { name: "Tailwind CSS", icon: Layout, color: "text-emerald-400" },
      { name: "JavaScript", icon: Terminal, color: "text-yellow-400" },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: Code2, color: "text-green-500" },
      { name: "Express.js", icon: Layers, color: "text-gray-400" },
      // { name: "REST APIs", icon: Globe, color: "text-cyan-400" },
      { name: "Authentication", icon: Lock, color: "text-purple-400" },
    ]
  },
  {
    title: "Databases & Architecture",
    skills: [
      { name: "MongoDB", icon: Database, color: "text-emerald-500" },
      { name: "MySQL", icon: Database, color: "text-orange-500" },
      { name: "Database Design", icon: Layers, color: "text-yellow-500" },
      { name: "API Integration", icon: Globe, color: "text-emerald-400" },
    ]
  },
  // {
  //   title: "Advanced Technologies",
  //   skills: [
  //     { name: "QR Code Systems", icon: QrCode, color: "text-gray-400" },
  //     { name: "Real-time Apps", icon: Zap, color: "text-yellow-400" },
  //     { name: "CI/CD", icon: Repeat, color: "text-emerald-400" },
  //     { name: "AI Tools", icon: Bot, color: "text-purple-400" },
  //   ]
  // }
];

const stats = [
  { label: "Core Technologies", value: "8+" },
  { label: "Years Experience", value: "0.5+" },
  { label: "Projects Built", value: "5+" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="My Skills"
          subtitle="Technologies I use to build modern, scalable and user-friendly web applications"
        />

        <div className="space-y-12 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              transition={{ delayChildren: catIndex * 0.05 }}
            >
              <motion.div variants={staggerItem} className="flex items-center gap-4 mb-8">
                <h3 className="text-xl font-bold whitespace-nowrap">{category.title}</h3>
                <div className="h-px w-full bg-border/50" />
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={staggerItem}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="p-6 rounded-2xl bg-secondary/30 border border-border/50 flex flex-col items-center justify-center gap-4 hover:border-primary/30 hover:bg-secondary/50 transition-all group hover-lift"
                  >
                    <skill.icon className={`w-10 h-10 ${skill.color} transition-transform group-hover:scale-110`} />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              whileHover={{ scale: 1.04, y: -4 }}
              className="p-8 rounded-2xl glass-card text-center"
            >
              <div className="text-4xl font-bold mb-2 text-gradient">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
