// ─── App.jsx — Final Assembly ─────────────────────────────────────────────────
// Every section imported and rendered in reading order.
// App.jsx owns nothing except layout — no state, no logic.
// ─────────────────────────────────────────────────────────────────────────────

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gotham-bg min-h-screen text-white">
      <Navbar />

      <main>
        <section id="hero">   <Hero />          </section>
        <section id="projects">  <Projects />   </section>
        <section id="about">     <About />      </section>
        <section id="skills">    <Skills />     </section>
        <section id="experience"><Experience /> </section>
        <section id="certifications"><Certifications /></section>
        <section id="contact">   <Contact />    </section>
      </main>

      <Footer />
    </div>
  );
}