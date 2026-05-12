// PHASE 3 — App.jsx updated to include Navbar + section scaffolding
// Each section gets an id that react-scroll Links target.
// Placeholder divs will be replaced by real components in later phases.

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-gotham-bg min-h-screen text-white">

      <Navbar />

      {/* ── Sections ── */}
      {/* Each id matches the `to` prop in NAV_LINKS inside Navbar.jsx */}

      <section id="home" className="min-h-screen flex items-center
                                    justify-center text-gotham-purple text-4xl">
        Hero — Phase 4
      </section>

      <section id="projects" className="min-h-screen flex items-center
                                        justify-center text-gray-400 text-2xl">
        Projects — Phase 5
      </section>

      <section id="about" className="min-h-screen flex items-center
                                     justify-center text-gray-400 text-2xl">
        About — Phase 6
      </section>

      <section id="skills" className="min-h-screen flex items-center
                                      justify-center text-gray-400 text-2xl">
        Skills — Phase 6
      </section>

      <section id="experience" className="min-h-screen flex items-center
                                          justify-center text-gray-400 text-2xl">
        Experience — Phase 7
      </section>

      <section id="contact" className="min-h-screen flex items-center
                                       justify-center text-gray-400 text-2xl">
        Contact — Phase 8
      </section>

    </div>
  );
}