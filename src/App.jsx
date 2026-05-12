import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="bg-gotham-bg min-h-screen">
      <Navbar />
      <Hero />

      {/* Placeholder sections — you'll replace these in later phases */}
      <section id="projects" className="min-h-screen" />
      <section id="about" className="min-h-screen" />
      <section id="skills" className="min-h-screen" />
      <section id="experience" className="min-h-screen" />
      <section id="contact" className="min-h-screen" />
    </div>
  );
}