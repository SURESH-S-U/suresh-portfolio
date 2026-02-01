import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectData = [
    {
      title: "NLP Based Database Engine",
      year: "2024 - 2025",
      img: "/projects/nlp.jpg",
      role: "NLP Developer",
      desc: "An intelligent interface that translates natural language into precise SQL queries, allowing non-technical users to interact with complex databases seamlessly.",
      github: "https://github.com/SURESH-S-U/FastDB",
      live: "#",
    },
    {
      title: "Face Identification System",
      year: "2024 - 2025",
      img: "/projects/face.jpg",
      role: "Full Stack Developer",
      desc: "Real-time biometric security solution. Features high-speed face matching and a robust FastAPI backend for low-latency authentication.",
      github: "https://github.com/SURESH-S-U/Face-Detection-And-Recognization-FullStack",
      live: "#",
    },
    {
      title: "Inventory Smart-Track",
      year: "2023 - 2024",
      img: "/projects/inventory.jpg",
      role: "Frontend Developer",
      desc: "A sophisticated dashboard designed for stock visualization. Built with high-performance React components and real-time state management.",
      github: "https://github.com/SURESH-S-U/Electronic-Inventory-Management-System",
      live: "#",
    },
    {
      title: "Fruite-Disease Detector",
      year: "2023 - 2024",
      img: "/projects/fruit.jpg",
      role: "ML Engineer",
      desc: "Deep learning model optimized for mobile deployment. Identifies plant pathologies with 95%+ accuracy to help farmers protect their yields.",
      github: "https://github.com/SURESH-S-U",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-5 position-relative" style={{ background: "#050505", color: "#fff", overflow: "hidden" }}>
      
      <style>
        {`
          /* FLOATING ANIMATION FOR IMAGES */
          @keyframes subtleFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(1deg); }
          }

          /* GLOW ORB BACKGROUND */
          .bg-glow-orb {
            position: absolute;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(0, 255, 255, 0.07) 0%, transparent 70%);
            border-radius: 50%;
            z-index: 0;
            filter: blur(60px);
          }

          .glass-project-card {
            background: rgba(255, 255, 255, 0.015);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(0, 255, 255, 0.05);
            border-radius: 40px;
            padding: 50px;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            position: relative;
            z-index: 1;
            margin-bottom: 120px; /* CREATED LARGE BREATHING SPACE */
          }

          .glass-project-card:hover {
            background: rgba(0, 255, 255, 0.03);
            border-color: rgba(0, 255, 255, 0.3);
            transform: translateY(-10px) scale(1.01);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 255, 0.1);
          }

          .project-img-wrapper {
            position: relative;
            animation: subtleFloat 6s ease-in-out infinite;
          }

          .project-img-wrapper img {
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.6);
            border: 1px solid rgba(255,255,255,0.1);
          }

          /* BUTTONS */
          .btn-project {
            padding: 10px 24px;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: 0.3s;
          }

          .btn-github {
            background: rgba(255, 255, 255, 0.05);
            color: #fff;
            border: 1px solid rgba(255,255,255,0.1);
          }
          .btn-github:hover {
            background: #fff;
            color: #000;
          }

          .btn-live {
            background: linear-gradient(90deg, #00ffff, #007bff);
            color: #000;
            border: none;
          }
          .btn-live:hover {
            box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
            transform: scale(1.05);
          }

          .project-count {
            position: absolute;
            font-size: 10rem;
            font-weight: 900;
            background: linear-gradient(180deg, rgba(0, 255, 255, 0.05) 0%, transparent 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            top: -50px;
            left: -20px;
            z-index: -1;
            user-select: none;
          }
        `}
      </style>

      <div className="container position-relative">
        {/* SECTION TITLE */}
        <div className="text-center mb-5 pb-5">
          <h2 className="display-4 fw-bold mb-3">Project <span className="text-info">Showcase</span></h2>
          <p className="opacity-50">Realworld Probles with commercial solutions</p>
          <div className="mx-auto" style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #00ffff, #007bff)", borderRadius: "10px" }}></div>
        </div>

        {projectData.map((project, index) => {
          const isReverse = index % 2 !== 0;
          return (
            <div key={index} className="position-relative">
              {/* RANDOM BACKGROUND ORBS FOR CREATIVITY */}
              <div className="bg-glow-orb" style={{ 
                top: "10%", 
                [isReverse ? "left" : "right"]: "-100px" 
              }}></div>

              <div className={`row align-items-center glass-project-card ${isReverse ? "flex-row-reverse" : ""}`}>
                <div className="project-count">0{index + 1}</div>

                {/* IMAGE SIDE */}
                <div className="col-lg-5">
                  <div className="project-img-wrapper">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="img-fluid w-100"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* CONTENT SIDE */}
                <div className={`col-lg-7 ${isReverse ? "pe-lg-5" : "ps-lg-5"}`}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="badge rounded-pill" style={{ background: "rgba(0, 255, 255, 0.1)", color: "#00ffff", border: "1px solid rgba(0,255,255,0.2)" }}>
                      {project.year}
                    </span>
                    <span className="text-info fw-bold small text-uppercase" style={{ letterSpacing: "2px" }}>
                      {project.role}
                    </span>
                  </div>

                  <h2 className="fw-bold text-white mb-3" style={{ fontSize: "2.5rem" }}>{project.title}</h2>
                  <p className="opacity-75 fs-5 lh-base mb-4" style={{ maxWidth: "600px" }}>
                    {project.desc}
                  </p>

                  <div className="d-flex gap-3 mt-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-project btn-github">
                      <FaGithub size={20} /> Code
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn-project btn-live">
                      <FaExternalLinkAlt size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;