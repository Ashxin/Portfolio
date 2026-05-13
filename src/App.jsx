import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <div className="bg-gotham-bg min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Certifications />

      <section id="about" className="min-h-screen" />
      <section id="skills" className="min-h-screen" />
      <section id="experience" className="min-h-screen" />
      <section id="contact" className="min-h-screen" />
    </div>
  );
}