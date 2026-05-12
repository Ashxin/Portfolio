// PHASE 3 — Layout & Navbar
// Concepts: React component, props, useState, useEffect, conditional className,
//           react-scroll, responsive design (hamburger menu)

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

// NAV_LINKS is defined here so Navbar owns its own structure.
// If you wanted these driven by data.js you could import them — but nav
// links rarely change, so keeping them local is acceptable.
const NAV_LINKS = [
  { label: "Projects",      to: "projects" },
  { label: "About",         to: "about" },
  { label: "Skills",        to: "skills" },
  { label: "Experience",    to: "experience" },
  { label: "Contact",       to: "contact" },
];

export default function Navbar() {
  // scrolled tracks whether the user has scrolled past 50px.
  // When true we apply the frosted-glass style.
  const [scrolled, setScrolled] = useState(false);

  // menuOpen tracks whether the mobile hamburger menu is open.
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect runs AFTER the component mounts (appears in the DOM).
  // We attach a scroll listener here — not outside the component —
  // because the window only exists in the browser, not during SSR.
  // The returned cleanup function removes the listener when the
  // component unmounts, preventing memory leaks.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array = run once on mount only

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4
        ${
          scrolled
            ? "bg-gotham-dark/80 backdrop-blur-md shadow-lg shadow-gotham-purple/10"
            : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* ── Logo ── */}
        {/* react-scroll Link scrolls smoothly to the element with id="home" */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-bold text-gotham-purple cursor-pointer
                     hover:text-purple-400 transition-colors duration-200"
        >
          AK
        </Link>

        {/* ── Desktop Nav Links ── */}
        {/* hidden on mobile (hidden), shown as flex on md screens (md:flex) */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80} // offset accounts for the fixed navbar height
                className="text-gray-400 hover:text-gotham-purple cursor-pointer
                           transition-colors duration-200 text-sm font-medium
                           relative group"
              >
                {link.label}
                {/* Underline that grows from left on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-px
                                 bg-gotham-purple transition-all duration-300
                                 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Resume Button (desktop) ── */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-4 py-2 border border-gotham-purple
                     text-gotham-purple text-sm font-medium rounded
                     hover:bg-gotham-purple hover:text-white
                     transition-all duration-200"
        >
          Resume
        </a>

        {/* ── Hamburger Button (mobile only) ── */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {/* Three bars that animate into an X when menu is open */}
          <span className={`block w-6 h-0.5 bg-gotham-purple transition-all duration-300
                            ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gotham-purple transition-all duration-300
                            ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gotham-purple transition-all duration-300
                            ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {/* Conditionally rendered — only exists in the DOM when menuOpen is true */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 px-6
                        bg-gotham-dark/90 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              // Close the menu when a link is clicked
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-gotham-purple cursor-pointer
                         transition-colors duration-200 py-1"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-4 py-2 border border-gotham-purple
                       text-gotham-purple text-sm rounded
                       hover:bg-gotham-purple hover:text-white
                       transition-all duration-200"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}