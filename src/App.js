import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Skills from "./components/Skills";
import Details from "./components/Details";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";

function App() {

  // THEME STATE
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // APPLY THEME
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // TOGGLE FUNCTION
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="app-container">
      <Sidebar />

      {/* THEME TOGGLE */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "☀ Light" : "🌙 Dark"}
      </button>

      {/* HERO */}
      <section id="home" className="section hero">
        <h1 className="hero-title">
          <span className="name-text">SURESH S U</span><br />
          <span className="role-text">
            Full Stack <br />
            <span className="cyan-text">+ AI Developer</span>
          </span>
        </h1>
        <p className="hero-sub">
          Building intelligent & scalable solutions
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects">
        <h2 className="section-title">Projects</h2>

        <ProjectCard
          title="NLP Based Database Engine"
          year="2024 – 2025"
          desc="NLP system converting natural language into structured database queries."
          img="/projects/nlp.jpg"
          link="#"
        />

        <ProjectCard
          title="Face Detection & Identification"
          year="2024 – 2025"
          desc="AI-based face detection system with full-stack integration."
          img="/projects/face.jpg"
          link="#"
          reverse
        />
      </section>

      <Details />

      <section id="skills" className="section">
        <Skills />
      </section>

      <Contact />
    </div>
  );
}

export default App;
