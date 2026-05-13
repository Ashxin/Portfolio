// =============================================================
// PHASE 5 — Projects Section
// Concepts: Importing data, Array.filter(), Array.map(),
//           passing props into a reusable component
// =============================================================

import { motion } from "framer-motion";
import { projects } from "../../data/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  // Array.filter() splits one array into two based on a condition.
  // hero projects get large cards, the rest get small cards.
  const heroProjects = projects.filter((p) => p.hero);
  const secondaryProjects = projects.filter((p) => !p.hero);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-gotham-purple font-mono mb-2">What I've built</p>
        <h2 className="text-4xl font-bold text-gotham-text">Projects</h2>
      </motion.div>

      {/* Hero projects — stacked vertically, full width */}
      {/* Array.map() takes each project object and returns a ProjectCard */}
      {/* The index is passed so each card can delay its animation slightly */}
      <div className="flex flex-col gap-8 mb-12">
        {heroProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Secondary projects — two columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {secondaryProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

    </section>
  );
}