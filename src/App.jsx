import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ChatbotWidget from "./features/chatbot";
function App() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <ChatbotWidget />
    </div>
  );
}

export default App;
