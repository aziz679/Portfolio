import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import { personalInfo, about, experience, projects, techStack } from "./data/mock";

function App() {
  return (
    <div className="App bg-slate-950 min-h-screen">
      <Header personalInfo={personalInfo} />
      <Hero personalInfo={personalInfo} />
      <About about={about} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <TechStack techStack={techStack} />
      <Contact personalInfo={personalInfo} />
    </div>
  );
}

export default App;
