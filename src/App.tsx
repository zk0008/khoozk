import { useState } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

function App() {
  const [huntTime, setHuntTime] = useState<number | null>(null);
  useRevealOnScroll();

  return (
    <>
      <a
        href="#experience"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero onWin={setHuntTime} />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Contact huntTime={huntTime} />
    </>
  );
}

export default App;
