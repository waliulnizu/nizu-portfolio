"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { viewportOnce } from "@/lib/motion";

const educationData = [
  {
    title: "BSc in Computer Science & Engineering",
    institution: "Daffodil International University",
    passingYear: "2021",
    grade: "CGPA: 2.61 / 4.00",
    description: "Focused on software engineering, full-stack web development, databases, and modern application architecture.",
    position: "right"
  },
  {
    title: "Higher Secondary Certificate",
    institution: "Sherpur Govt. College",
    passingYear: "2014",
    grade: "GPA: 3.60 / 5.00",
    description: "Completed higher secondary education with a Science background.",
    position: "left"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Education"
          subtitle="My academic journey and continuous growth in computer science, software engineering, and modern web technologies."
        />

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-emerald-500/20" />

          <div className="space-y-12">
            {educationData.map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-center">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary border-2 border-emerald-500 flex items-center justify-center z-10">
                  <GraduationCap className="w-5 h-5 text-emerald-500" />
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 w-full gap-8 lg:gap-32`}>
                  <div className={`${item.position === 'left' ? 'lg:block' : 'lg:invisible'} order-2 lg:order-none`}>
                    <motion.div
                      initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="glass-card hover-lift p-8 rounded-3xl"
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
                          {item.passingYear}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground text-xs font-medium">
                          {item.grade}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-emerald-500 mb-4">
                        <div className="w-4 h-4 rounded-sm border border-emerald-500/50 flex items-center justify-center text-[10px] font-bold">U</div>
                        <span className="text-sm font-medium text-muted-foreground">{item.institution}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className={`${item.position === 'right' ? 'lg:block' : 'lg:invisible'} order-2 lg:order-none`}>
                    <motion.div
                      initial={{ opacity: 0, x: item.position === 'right' ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="glass-card hover-lift p-8 rounded-3xl"
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
                          {item.passingYear}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground text-xs font-medium">
                          {item.grade}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-emerald-500 mb-4">
                        <div className="w-4 h-4 rounded-sm border border-emerald-500/50 flex items-center justify-center text-[10px] font-bold">U</div>
                        <span className="text-sm font-medium text-muted-foreground">{item.institution}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
