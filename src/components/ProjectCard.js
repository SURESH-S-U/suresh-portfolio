import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, desc, year, img, link, reverse }) => {
  return (
    <div className={`project-card ${reverse ? "reverse" : ""}`}>
      <img src={img} alt={title} />

      <div className="project-content">
        <h3>{title}</h3>
        <span>{year}</span>
        <p>{desc}</p>

        <a href={link} target="_blank" rel="noreferrer">
          <button>View Project →</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
