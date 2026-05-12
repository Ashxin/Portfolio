// =============================================================
// PHASE 4 — Hero Section
// Concepts: Framer Motion, staggered animations, typewriter-effect,
//           full-viewport layout, CTA buttons
// Next: Phase 5 — Projects Section (props, Array.map, conditional rendering)
// =============================================================

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

// --- Animation variants ---
// A "variant" is a named animation state. Framer Motion lets you
// define 'hidden' and 'visible' as objects, then toggle between them.
// This keeps animation logic OUT of the JSX — cleaner and reusable.

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Each child animates 0.2s after the previous one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },   // starts invisible, 30px below
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    // min-h-screen = at least full viewport height
    // flex + items-center = vertically center content
    // pt-20 = push content below fixed navbar (80px)
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      {/* motion.div with variants = the parent that controls stagger timing */}
      <motion.div
        className="max-w-3xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- Greeting --- */}
        {/* Each motion.div inherits variants from the parent container */}
        <motion.p
          className="text-gotham-purple text-lg font-mono mb-2"
          variants={itemVariants}
        >
          Hi, I'm
        </motion.p>

        {/* --- Name --- */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gotham-text mb-4"
          variants={itemVariants}
        >
          Aswin Kumar B
        </motion.h1>

        {/* --- Typewriter roles --- */}
        {/* typewriter-effect renders its own DOM — wrap in motion.div */}
        <motion.div
          className="text-2xl md:text-3xl text-gotham-purple font-semibold mb-6"
          variants={itemVariants}
        >
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "AI & Automation Engineer",
                "IoT Builder",
                "Open Source Contributor",
              ],
              autoStart: true,
              loop: true,
              delay: 60,        // ms per character when typing
              deleteSpeed: 30,  // ms per character when deleting
            }}
          />
        </motion.div>

        {/* --- Tagline --- */}
        <motion.p
          className="text-gotham-muted text-lg max-w-xl mb-10 leading-relaxed"
          variants={itemVariants}
        >
          I build things that live on the web — from intelligent automation
          pipelines to hardware-connected applications.
        </motion.p>

        {/* --- CTA Buttons --- */}
        <motion.div
          className="flex flex-wrap gap-4"
          variants={itemVariants}
        >
          {/* Primary CTA — scrolls to projects section */}
          <Link to="projects" smooth={true} duration={500} offset={-80}>
            <button className="px-6 py-3 bg-gotham-purple text-white font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
              View My Work
            </button>
          </Link>

          {/* Secondary CTA — scrolls to contact section */}
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <button className="px-6 py-3 border border-gotham-purple text-gotham-purple font-semibold rounded-lg hover:bg-gotham-purple hover:text-white transition-all cursor-pointer">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}