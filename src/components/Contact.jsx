"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";
import { fadeInLeft, fadeInRight, viewportOnce } from "@/lib/motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFeedback("Message sent! I will get back to you at " + profile.email + " soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setFeedback(err.message || "Failed to send. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Contact Me"
          subtitle="Let's connect and discuss how we can work together on your next project"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInLeft}
            className="glass-card hover-lift p-8 lg:p-10 rounded-3xl"
          >
            <p className="text-muted-foreground mb-10 leading-relaxed">
              I&apos;m always open to new opportunities, exciting projects, or conversations about technology and
              development. Feel free to reach out!
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: Mail, label: "Email Me", value: profile.email, href: `mailto:${profile.email}` },
                { icon: Phone, label: "Call Me", value: profile.phoneDisplay, href: `tel:${profile.phone}` },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Sherpur, Mymensingh, Bangladesh (Remote Available)",
                  href: null,
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50 group hover:border-emerald-500/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium hover:text-emerald-500 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <div className="text-sm font-medium mb-4">Connect with me:</div>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-emerald-500 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInRight}
            className="glass-card hover-lift p-8 lg:p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-2">Initiate Contact</h3>
            <p className="text-sm text-muted-foreground mb-8">
              Send a message directly to{" "}
              <span className="text-emerald-500 font-medium">{profile.email}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium mb-2 text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium mb-2 text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium mb-2 text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or collaboration opportunity..."
                  rows={4}
                  className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all resize-none"
                />
              </div>

              <AnimatePresence mode="wait">
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className={`flex items-start gap-2 p-3 rounded-xl text-sm ${
                      status === "success"
                        ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                        : "bg-red-500/10 border border-red-500/30 text-red-400"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    )}
                    {feedback}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                className="w-full bg-white text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-white transition-all group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
