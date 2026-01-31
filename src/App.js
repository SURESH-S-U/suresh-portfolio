import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import Details from "./components/Details";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Home from "./components/Home";
import FireworkComponent from "./components/FireworkComponent";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Force Dark Background Permanently
    document.body.style.backgroundColor = "#0a0118"; 
    document.body.className = "text-light";

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <FireworkComponent />

      {/* SIDEBAR (Now Violet) */}
      <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(false)} />

      {/* MOBILE BURGER */}
      {isMobile && (
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            zIndex: 1200,
            background: "rgba(191, 0, 255, 0.2)",
            border: "1px solid #bf00ff",
            color: "#fff"
          }}
          className="btn"
        >
          ☰
        </button>
      )}

      {/* MAIN CONTENT */}
      <div
        className="container-fluid"
        style={{
          marginTop: "-70px",
          position: "relative",
          zIndex: 1,
          marginLeft: !isMobile ? "170px" : "0", // Adjusted to match sidebar width
          padding: "120px 32px 32px",
          maxWidth: !isMobile ? "calc(100vw - 170px)" : "100%",
        }}
      >
        <Home />

        {/* PROJECTS SECTION */}
        <section id="projects" className="my-5 py-5">
          <h2 className="fw-bold display-6 mb-5" style={{ color: "white" }}>
            Projects
          </h2>
          <ProjectCard
            title="NLP Based Database Engine"
            year="2024 – 2025"
            desc="NLP system converting natural language into structured database queries."
            img="/projects/nlp.jpg"
            link="#"
          />
          {/* Add other ProjectCards here */}
        </section>

        <section id="skills" className="my-5 py-5">
          <Skills />
        </section>

        <section id="details" className="my-5 py-5">
          <Details />
        </section>

        <section id="contact" className="my-5 py-5">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;