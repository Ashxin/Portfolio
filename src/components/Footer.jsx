// ─── PHASE 8 — Footer.jsx ─────────────────────────────────────────────────────
// Concept: Simple layout component — no state, no animations, no data fetching
// Footer is intentionally lightweight. It just closes the page.
// ─────────────────────────────────────────────────────────────────────────────

import { Link } from "react-scroll";
import { contact } from "../data/data";

// ─── Nav items — reused from Navbar, kept local here ─────────────────────────
// You could import a shared array from data.js — but for 5 items this is fine.
// Don't over-engineer. Add to data.js only if a third component needs it too.
const footerLinks = ["about", "projects", "experience", "skills", "contact"];

export default function Footer() {
  const year = new Date().getFullYear();
  // new Date().getFullYear() — always correct, no manual update needed ever

  return (
    <footer className="border-t border-white/10 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">

        {/* ── Logo ────────────────────────────────────────────────────────── */}
        <Link
          to="hero"
          smooth={true}
          duration={600}
          className="text-2xl font-bold text-gotham-purple cursor-pointer
                     hover:opacity-80 transition-opacity duration-300"
        >
          AK
        </Link>

        {/* ── Footer Nav ──────────────────────────────────────────────────── */}
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm text-gray-500 capitalize cursor-pointer
                         hover:text-gotham-purple transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* ── Social Icons Row ─────────────────────────────────────────────── */}
        <div className="flex items-center gap-6">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gotham-purple transition-colors duration-300 text-sm"
          >
            GitHub
          </a>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gotham-purple transition-colors duration-300 text-sm"
          >
            LinkedIn
          </a>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <a
            href={`mailto:${contact.email}`}
            className="text-gray-500 hover:text-gotham-purple transition-colors duration-300 text-sm"
          >
            Email
          </a>
        </div>

        {/* ── Copyright ────────────────────────────────────────────────────── */}
        <p className="text-xs text-gray-600">
          © {year} Aswin Kumar B. Built with React, Vite & Tailwind.
        </p>

      </div>
    </footer>
  );
}