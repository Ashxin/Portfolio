// ─── PHASE 7 — Certifications.jsx ────────────────────────────────────────────
// Concept: Badge/pill grid — simplest possible repeating UI
// Each cert is one object in an array → one card in the grid
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from "framer-motion";
import { certifications } from "../data/data";

// ─── Component ────────────────────────────────────────────────────────────────
export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">

        {/* ── Section Header ──────────────────────────────────────────────── */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gotham-purple text-sm font-semibold tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Certifications
          </h2>
        </motion.div>

        {/* ── Badge Grid ──────────────────────────────────────────────────── */}
        {/*
          grid-cols-1 on mobile
          grid-cols-2 on sm (640px+)
          grid-cols-3 on lg (1024px+)
          Tailwind's responsive prefixes handle all breakpoints — no media queries needed.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              // Tighter delay (0.08) because there are more items — 0.1 per card
              // would make the last card wait almost a second. Scale the delay.
              className="group flex flex-col gap-1 p-5 rounded-xl
                         bg-white/5 border border-white/10
                         hover:border-gotham-purple/50 hover:bg-white/8
                         transition-all duration-300"
            >
              {/* Cert name */}
              <p className="text-sm font-semibold text-white leading-snug
                            group-hover:text-gotham-purple transition-colors duration-300">
                {cert.name}
              </p>

              {/* Issuer + year row */}
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-gray-500">{cert.issuer}</span>
                <span className="text-xs text-gotham-purple/70 font-mono">{cert.year}</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}