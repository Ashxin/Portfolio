// ─── PHASE 7 — Experience.jsx ─────────────────────────────────────────────────
// Concept: Vertical timeline built with CSS left-border trick
// Both work and education entries render from one array — type prop controls style
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from "framer-motion";
import { timeline } from "../data/data";

// ─── Animation Variant ────────────────────────────────────────────────────────
const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">

        {/* ── Section Header ──────────────────────────────────────────────── */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gotham-purple text-sm font-semibold tracking-widest uppercase mb-3">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience & Education
          </h2>
        </motion.div>

        {/* ── Timeline ────────────────────────────────────────────────────── */}
        {/*
          THE BORDER TRICK:
          The vertical line is NOT an <hr> or a separate element.
          It's the left border of this container div.
          Each entry is positioned with pl-8 (padding-left: 32px)
          to push content right of the line.
          The dot on the line is a ::before pseudo approach — here we use
          an absolutely positioned div inside each entry instead,
          which is easier to control in Tailwind.
        */}
        <div className="relative border-l-2 border-gotham-purple/30 ml-4">

          {timeline.map((entry, i) => (
            <motion.div
              key={entry.id}
              custom={i}
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              // Each entry is indented from the line with pl-8
              // pb-12 creates vertical spacing between entries
              className="relative pl-8 pb-12 last:pb-0"
              // last:pb-0 — removes bottom padding from the final entry
              // so there's no empty space below it
            >

              {/* ── Dot on the timeline line ──────────────────────────────── */}
              {/*
                Positioned absolutely, vertically centered at the top of the entry.
                -left-[9px] pulls it to sit exactly on the border line.
                (border is 2px wide, dot is 16px wide → offset = (16/2 - 2/2) = 7px... ≈ 9px with rounding)
              */}
              <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2
                               ${entry.type === "work"
                                 ? "bg-gotham-purple border-gotham-purple"
                                 : "bg-gotham-bg border-gotham-purple"
                               }`}
              />
              {/*
                work entries: filled dot (solid purple)
                education entries: hollow dot (border only)
                This is conditional className in action — same pattern as Phase 3.
              */}

              {/* ── Entry Card ────────────────────────────────────────────── */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10
                              hover:border-gotham-purple/40 transition-all duration-300">

                {/* Type badge */}
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3
                                  ${entry.type === "work"
                                    ? "bg-gotham-purple/20 text-gotham-purple"
                                    : "bg-blue-500/20 text-blue-400"
                                  }`}
                >
                  {entry.type === "work" ? "Work" : "Education"}
                </span>

                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{entry.role}</h3>
                    <p className="text-gotham-purple text-sm font-medium">{entry.org}</p>
                  </div>
                  <span className="text-gray-500 text-sm shrink-0">{entry.period}</span>
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-2">
                  {entry.bullets.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                      {/* Custom bullet — a small purple square */}
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-gotham-purple shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}