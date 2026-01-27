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

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  /* Track screen size */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(false); // reset sidebar on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Theme handling */
  useEffect(() => {
    document.body.className =
      theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* SIDEBAR */}
      <Sidebar
        isOpen={sidebarOpen}
        toggle={() => setSidebarOpen(false)}
      />

      {/* MOBILE BURGER */}
      {isMobile && (
        <button
          onClick={() => setSidebarOpen(prev => !prev)}
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            zIndex: 1300
          }}
          className="btn btn-outline-secondary"
        >
          ☰
        </button>
      )}

      {/* STATIC THEME TOGGLE */}
      <button
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1300
        }}
        className="btn btn-outline-secondary btn-sm"
      >
        {theme === "dark" ? "☀ Light" : "🌙 Dark"}
      </button>

      {/* MAIN CONTENT */}
      <div
        className="container-fluid"
        style={{
          marginLeft: !isMobile ? "190px" : "0",
          padding: "100px 24px 24px",
          maxWidth: !isMobile
            ? "calc(100vw - 190px)"
            : "100%"
        }}
      >
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
          <h2 className="fw-bold display-6 mb-5">
            Projects
          </h2>

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
          <Details theme={theme} />
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
