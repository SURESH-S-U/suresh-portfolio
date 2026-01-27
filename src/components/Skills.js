import React from "react";
import {
  FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase
} from "react-icons/fa";
import {
  SiJavascript, SiFastapi, SiExpress, SiMysql
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Database", icon: <FaDatabase /> },
];

const Skills = () => {
  return (
    <section className="py-5" id="skills">
      <h2 className="fw-bold mb-4">Skills</h2>

      <div className="row g-4 text-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{
                transition: "transform 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* ICON */}
              <div
                className="fs-1 mb-2"
                style={{
                  color: "#00ffff",
                  textShadow: "0 0 12px rgba(0,255,255,0.7)"
                }}
              >
                {skill.icon}
              </div>

              {/* NAME */}
              <span className="fw-semibold fs-6">
                {skill.name}
              </span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
