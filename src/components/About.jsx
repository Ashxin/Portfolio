// ─── PHASE 6 — About.jsx ─────────────────────────────────────────────────────
// Concept: Two-column layout | local image | whileInView animations
// Left column: photo + stats | Right column: bio text
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from "framer-motion";
import { about } from "../data/data";

// ─── Animation Variants ───────────────────────────────────────────────────────
// Same variant pattern from Phase 4 — reused here on scroll instead of mount.
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24 px-6 md:px-16 lg:px-32"
    >
      {/* Section wrapper — stagger children on scroll */}
      <motion.div
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        // amount: 0.2 → trigger when 20% of section is visible
        // Without this, the animation fires too early (element barely on screen)
      >

        {/* ── LEFT COLUMN — Image + Stats ──────────────────────────────────── */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-8">

          {/* Profile image */}
          <div className="relative">
            {/* Purple glow ring behind the image */}
            <div className="absolute inset-0 rounded-2xl bg-gotham-purple/30 blur-xl scale-105" />
            <img
              src={about.image}
              alt={`${about.name} profile photo`}
              // If your image file doesn't exist yet, this will show a broken image.
              // Add your photo to src/assets/ first.
              className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl
                         border-2 border-gotham-purple/40"
              // object-cover: fills the box without stretching, cropping if needed
            />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-4 rounded-xl
                           bg-white/5 border border-white/10 text-center"
              >
                <span className="text-2xl font-bold text-gotham-purple">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

        </motion.div>

        {/* ── RIGHT COLUMN — Bio Text ───────────────────────────────────────── */}
        <motion.div variants={fadeUp} className="flex flex-col gap-6">

          {/* Section label */}
          <p className="text-gotham-purple text-sm font-semibold tracking-widest uppercase">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Builder by nature. <br />
            <span className="text-gotham-purple">Engineer by choice.</span>
          </h2>

          {/* Bio paragraphs — mapped from data, not hardcoded */}
          <div className="flex flex-col gap-4">
            {about.bio.map((paragraph, i) => (
              <p key={i} className="text-gray-400 leading-relaxed text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA — links to contact section */}
          
            <a
            href="mailto:your@email.com"
            // Replace with your actual email
            className="self-start mt-2 px-6 py-3 border border-gotham-purple
                       text-gotham-purple rounded-lg hover:bg-gotham-purple
                       hover:text-white transition-all duration-300 font-medium"
          >
            Get In Touch →
          </a>

        </motion.div>

      </motion.div>
    </section>
  );
}