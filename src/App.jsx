import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>

      <Hero />

      {/* =========================================
          FUTURE SECTIONS
      ========================================== */}

      <section
        id="about"
        className="min-h-screen bg-black text-white"
      >
        <About/>
      </section>


      <section
        id="skills"
        className="min-h-screen bg-white"
      >
        <Skills/>
      </section>


      <section
        id="projects"
        className="min-h-screen bg-black text-white"
      >
        <Projects/>
      </section>


      <section
        id="experience"
        className="min-h-screen bg-white"
      >
        <Experience/>
      </section>


      <section
        id="contact"
        className="min-h-screen bg-black text-white"
      >
        <Contact/>
      </section>

    </div>
  );
}

export default App;