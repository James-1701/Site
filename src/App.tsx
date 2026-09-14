import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <Navbar />

      <main id="top">
        <Hero showAbout={showAbout} setShowAbout={setShowAbout} />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
