import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Skills from "./components/Skills";
import Details from "./components/Details";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div>
      <Sidebar />

      {/* HERO */}
      <section id="home" className="section hero">
        <h1>
          <span className="highlight">Suresh S U</span><br />
          Full Stack <br />
          <span className="cyan-text">+ AI Developer</span>
        </h1>
        <p className="hero-sub">Building intelligent & scalable solutions</p>
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

        <ProjectCard
          title="Inventory Management System"
          year="2023 – 2024"
          desc="Inventory tracking system with clean UI and product management."
          img="/projects/inventory.jpg"
          link="#"
        />

        <ProjectCard
          title="Fruit Disease Detection"
          year="2023 – 2024"
          desc="ML-based fruit disease classification using image datasets."
          img="/projects/fruit.jpg"
          link="#"
          reverse
        />
      </section>

      {/* ABOUT / DETAILS */}
      <Details />

      {/* SKILLS */}
      <section id="skills" className="section">
        <Skills />
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Email: sureshsu@example.com</p>
      </section>
    </div>
  );
}

export default App;
