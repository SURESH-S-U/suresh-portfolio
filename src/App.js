import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Skills from "./components/Skills";
import Details from "./components/Details";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.body.className =
      theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* FIXED SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div
        className="container-fluid"
        style={{
          marginLeft: "190px",
          paddingLeft: "24px",
          paddingRight: "24px",
          maxWidth: "calc(100vw - 190px)"
        }}
      >
        {/* THEME TOGGLE */}
        <div className="text-end mt-4">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "dark" ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* HERO */}
        <section
          id="home"
          className="min-vh-100 d-flex flex-column justify-content-center my-5"
        >
          <h1 className="fw-bold lh-1">
            <span className="fs-2 d-block mb-2">
              SURESH S U
            </span>

            <span className="display-3 d-block mt-3">
              Full Stack
            </span>

            <span className="display-4 text-info d-block mt-2">
              + AI Developer
            </span>
          </h1>

          <p className="fs-4 mt-4 opacity-75">
            Building intelligent & scalable solutions
          </p>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="my-5 py-5">
          <h2 className="fw-bold display-6 mb-5">Projects</h2>

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

        {/* ABOUT */}
        <section id="details" className="my-5 py-5">
          <Details />
        </section>

        {/* SKILLS */}
        <section id="skills" className="my-5 py-5">
          <Skills />
        </section>

        {/* CONTACT */}
        <section id="contact" className="my-5 py-5">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
