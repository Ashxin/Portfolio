import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";

export default function App() {
  return (
    <div className="bg-gotham-bg min-h-screen">
      <Navbar />
      <Hero />
      <Projects />

      <section id="about" className="min-h-screen" />
      <section id="skills" className="min-h-screen" />
      <section id="experience" className="min-h-screen" />
      <section id="contact" className="min-h-screen" />
    </div>
  );
}