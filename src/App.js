import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import Details from "./components/Details";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import ShadowImage from "./assets/shadow.png";
import ShadowWhiteImage from "./assets/shadowWhite.png";



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
  if (theme === "dark") {
    document.body.style.backgroundColor = "#000000";
    document.body.className = "text-light";
  } else {
    document.body.style.backgroundColor = "#ffffff"; // PURE WHITE
    document.body.className = "text-dark";
  }

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
          className="min-vh-100 d-flex align-items-center"
        >
          <div className="row w-100 align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-md-6 ps-md-5">
              <h1 className="fw-bold lh-1">

                <span className="fs-4 d-block mb-4 text-uppercase opacity-75">
                  SURESH S U
                </span>

                <span className="display-1 d-block">
                  Full Stack
                </span>

                <span className="display-3 text-info d-block mt-3">
                  + AI Developer
                </span>

              </h1>

              <p className="fs-4 mt-4 opacity-75">
                Building intelligent & scalable solutions
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-md-6 d-flex justify-content-center justify-content-md-end pe-md-5">
              <img
                src={theme === "dark" ? ShadowImage : ShadowWhiteImage}
                alt="Profile"
                style={{
                  maxWidth: "420px",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",

                  /* 🔥 EDGE BLENDING FIX */
                  maskImage:
                    theme === "light"
                      ? "radial-gradient(circle, black 65%, transparent 100%)"
                      : "none",
                  WebkitMaskImage:
                    theme === "light"
                      ? "radial-gradient(circle, black 65%, transparent 100%)"
                      : "none"
                }}
              />

            </div>

          </div>
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

        {/* SKILLS */}
        <section id="skills" className="my-5 py-5">
          <Skills />
        </section>

        {/* ABOUT */}
        <section id="details" className="my-5 py-5">
          <Details theme={theme} />
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
