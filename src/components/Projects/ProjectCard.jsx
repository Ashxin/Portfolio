// =============================================================
// PHASE 5 — ProjectCard Component
// Concepts: Props, conditional rendering (hero vs secondary),
//           component reusability, Framer Motion whileInView
// One component, two visual variants — controlled by the hero prop.
// =============================================================

import { motion } from "framer-motion";

// Props destructured directly in the function signature.
// Every piece of data comes FROM the parent — this component owns nothing.
export default function ProjectCard({ project, index }) {
  const { title, tagline, description, metrics, tech, github, live, hero } = project;

  // whileInView fires the animation when the card enters the viewport.
  // viewport={{ once: true }} means it only animates once — not every scroll.
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
    },
  };

  // ---- HERO CARD (large, featured) ----
  if (hero) {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gotham-card border border-gotham-border rounded-2xl p-8 flex flex-col gap-6"
      >
        {/* Title + tagline */}
        <div>
          <h3 className="text-2xl font-bold text-gotham-text mb-1">{title}</h3>
          <p className="text-gotham-purple font-medium">{tagline}</p>
        </div>

        {/* Description */}
        <p className="text-gotham-muted leading-relaxed">{description}</p>

        {/* Metrics — only rendered if the array has items */}
        {/* This is conditional rendering: {condition && <JSX />} */}
        {metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((metric, i) => (
              <div key={i} className="bg-gotham-bg rounded-xl p-4 text-center">
                <p className="text-gotham-purple font-bold text-lg">{metric.value}</p>
                <p className="text-gotham-muted text-sm mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm bg-gotham-bg text-gotham-purple border border-gotham-border rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links — only rendered if they exist (not null) */}
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gotham-purple hover:underline"
            >
              GitHub →
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gotham-purple hover:underline"
            >
              Live Demo →
            </a>
          )}
          {!github && !live && (
            <span className="text-sm text-gotham-muted">Private project</span>
          )}
        </div>
      </motion.div>
    );
  }

  // ---- SECONDARY CARD (small) ----
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gotham-card border border-gotham-border rounded-2xl p-6 flex flex-col gap-4"
    >
      <div>
        <h3 className="text-xl font-bold text-gotham-text mb-1">{title}</h3>
        <p className="text-gotham-purple text-sm font-medium">{tagline}</p>
      </div>

      <p className="text-gotham-muted text-sm leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs bg-gotham-bg text-gotham-purple border border-gotham-border rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gotham-purple hover:underline"
          >
            GitHub →
          </a>
        )}
        {!github && (
          <span className="text-sm text-gotham-muted">Private project</span>
        )}
      </div>
    </motion.div>
  );
}