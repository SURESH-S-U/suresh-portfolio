import React from "react";

const ProjectCard = ({ title, desc, year, img, link, reverse }) => {
  return (
    <div
      className={`row align-items-center my-5 py-5 rounded-4 shadow-sm ${
    reverse ? "flex-row-reverse" : ""
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(0,255,255,0.05), rgba(255,255,255,0))",
        backdropFilter: "blur(4px)",
      }}
    >
      {/* IMAGE */}
      <div className="col-md-6 mb-3 mb-md-0 text-center">
        <img
          src={img}
          alt={title}
          className="img-fluid rounded-4 shadow"
          style={{
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        />
      </div>

      {/* CONTENT */}
      <div className="col-md-6 px-md-4">
        <h3 className="fw-bold mb-1">{title}</h3>

        <span
          className="fw-semibold"
          style={{ color: "#00ffff", fontSize: "0.9rem" }}
        >
          {year}
        </span>

        <p className="mt-3 fs-5 opacity-75">
          {desc}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="btn mt-3 px-4"
          style={{
            border: "1px solid #00ffff",
            color: "#00ffff",
            borderRadius: "25px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#00ffff";
            e.target.style.color = "#000";
            e.target.style.boxShadow = "0 0 15px rgba(0,255,255,0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#00ffff";
            e.target.style.boxShadow = "none";
          }}
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
