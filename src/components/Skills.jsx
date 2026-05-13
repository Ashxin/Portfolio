// ─── PHASE 6 — Skills.jsx ────────────────────────────────────────────────────
// Concept: Rendering grouped data | 4 domain cards | whileInView per card
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from "framer-motion";
import { skillCategories } from "../data/data";

// ─── Animation Variants ───────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    // Custom variants — the `i` (index) is passed via the `custom` prop below.
    // This lets each card compute its own delay without a parent orchestrator.
    // It's an alternative to staggerChildren — useful when cards are in a grid.
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-32">

      <div className="max-w-6xl mx-auto">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gotham-purple text-sm font-semibold tracking-widest uppercase mb-3">
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills & Domains
          </h2>
        </motion.div>

        {/* ── 4 Domain Cards — 2-column grid on md+ ──────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              custom={i}
              // custom={i} passes the index into the variant function above
              // This is how custom variants receive external data
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`relative p-8 rounded-2xl border border-white/10
                          bg-gradient-to-br ${category.color}
                          hover:border-gotham-purple/50 transition-all duration-300
                          group overflow-hidden`}
            >
              {/* Subtle hover glow — purely decorative */}
              <div className="absolute inset-0 bg-gotham-purple/5 opacity-0
                              group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Card header */}
              <div className="relative flex items-center gap-4 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.domain}</h3>
              </div>

              {/* Skill pills */}
              <div className="relative flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full
                               bg-white/10 text-gray-300
                               border border-white/10
                               hover:border-gotham-purple/50 hover:text-white
                               transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}