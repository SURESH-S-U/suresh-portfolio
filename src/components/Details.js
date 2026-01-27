import React from "react";
import "./Details.css";
import profile from "../assets/profile.png";

const Details = () => {
  return (
    <section id="details" className="details-section">
      <div className="details-container">

        <div className="details-text">
          <h2>
            Hi, I’m <span className="highlight">Suresh S U</span>
          </h2>

          <p>
            I am an Artificial Intelligence and Data Science student at
            <span className="highlight"> Bannari Amman Institute of Technology</span>.
            I build full-stack applications and AI-powered systems using
            Python, React, FastAPI, and modern web technologies.
          </p>

          <h3>Education</h3>

          <p>
            <b>B.Tech – AI & Data Science</b><br />
            Bannari Amman Institute of Technology (2023 – 2027)
          </p>

          <p>
            <b>HSC</b> – Sree Dharsitric Govt Model School (2022 – 2023)
          </p>

          <p>
            <b>SSLC</b> – Govt High School, Mokkina Komba (2020 – 2021)
          </p>
        </div>

        <div className="details-image">
          <img src={profile} alt="Suresh S U" />
        </div>

      </div>
    </section>
  );
};

export default Details;
