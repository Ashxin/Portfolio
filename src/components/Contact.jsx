// ─── PHASE 8 — Contact.jsx ────────────────────────────────────────────────────
// Concept: mailto: links | external links | no backend needed
// No form submission logic — mailto: hands off to the user's email client
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from "framer-motion";
import { contact } from "../data/data";

// ─── Animation Variant ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

// ─── Contact Links Config ─────────────────────────────────────────────────────
// Defined as an array so we can .map() over them — one source, no duplication.
// This is the same data-driven pattern from every previous phase.
const links = [
  {
    id: "email",
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    // mailto: opens the user's default email app — no backend, no API key needed
    icon: "✉",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Ashxin",
    href: contact.github,
    icon: "⌥",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Aswin Kumar B",
    href: contact.linkedin,
    icon: "in",
  },
  {
    id: "phone",
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone}`,
    // tel: opens the dialer on mobile — zero effort, works everywhere
    icon: "☎",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">

        {/* ── Section Header ──────────────────────────────────────────────── */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gotham-purple text-sm font-semibold tracking-widest uppercase mb-3">
            Let's Talk
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Open to internships, freelance automation projects, and
            conversations about AI systems. Reach out on any channel.
          </p>
        </motion.div>

        {/* ── Contact Cards ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              // External links (GitHub, LinkedIn) must open in a new tab.
              // mailto: and tel: open native apps — target="_blank" on those
              // would open a blank tab. Check if it's an external URL first.
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              // rel="noopener noreferrer" is a security requirement on all
              // target="_blank" links. Without it, the opened page can access
              // your window object. Always include it.
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group flex items-center gap-5 p-6 rounded-xl
                         bg-white/5 border border-white/10
                         hover:border-gotham-purple/50 hover:bg-white/8
                         transition-all duration-300"
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center
                              bg-gotham-purple/20 border border-gotham-purple/30
                              text-gotham-purple font-bold text-sm shrink-0
                              group-hover:bg-gotham-purple group-hover:text-white
                              transition-all duration-300">
                {link.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                  {link.label}
                </span>
                <span className="text-white text-sm font-medium
                                 group-hover:text-gotham-purple transition-colors duration-300">
                  {link.value}
                </span>
              </div>

              {/* Arrow — appears on hover */}
              <span className="ml-auto text-gray-600 group-hover:text-gotham-purple
                               group-hover:translate-x-1 transition-all duration-300">
                →
              </span>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}