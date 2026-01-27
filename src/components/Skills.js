import React from "react";
import "./Skills.css";
import {
  FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase
} from "react-icons/fa";
import {
  SiJavascript, SiFastapi, SiExpress, SiMysql
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        <div className="skill"><FaPython /><span>Python</span></div>
        <div className="skill"><SiJavascript /><span>JavaScript</span></div>
        <div className="skill"><FaReact /><span>React</span></div>
        <div className="skill"><FaNodeJs /><span>Node.js</span></div>
        <div className="skill"><SiFastapi /><span>FastAPI</span></div>
        <div className="skill"><SiExpress /><span>Express</span></div>
        <div className="skill"><FaHtml5 /><span>HTML</span></div>
        <div className="skill"><FaCss3Alt /><span>CSS</span></div>
        <div className="skill"><SiMysql /><span>MySQL</span></div>
        <div className="skill"><FaDatabase /><span>Database</span></div>
      </div>
    </section>
  );
};

export default Skills;
