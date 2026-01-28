import React from "react";
import ShadowImage from "../assets/shadow.png";
import ShadowWhiteImage from "../assets/shadowWhite.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = ({ theme }) => {
  return (
    <section
      id="home"
      className="min-vh-100 d-flex flex-column justify-content-between" style={{marginTop:"-30px"}}
    >
      {/* MAIN CONTENT */}
      <div className="row w-100 align-items-center flex-grow-1">

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
        <div className="col-md-6 d-flex justify-content-center justify-content-md-end pe-md-5" style={{marginTop:"130px"}}>
          <img
            src={theme === "dark" ? ShadowImage : ShadowWhiteImage}
            alt="Profile"
            style={{
              maxWidth: "420px",
              width: "100%",
              height: "auto",
              objectFit: "contain",
              maskImage:
                theme === "light"
                  ? "radial-gradient(circle, black 65%, transparent 100%)"
                  : "none",
              WebkitMaskImage:
                theme === "light"
                  ? "radial-gradient(circle, black 65%, transparent 100%)"
                  : "none",
            }}
          />
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="ms-5 mb-4" style={{marginTop:"-150px"}}>
        {/* TEXT */}
        <p
          className="fw-semibold mb-3"
          style={{
            fontSize: "1.1rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: "linear-gradient(90deg, #00ffff, #4facfe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Check My Profile
        </p>

        {/* ICONS */}
        <div className="d-flex gap-4 mt-3">

          {/* GitHub */}
          <a
            href="https://github.com/SURESH-S-U"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-3"
            style={{
              color: "#fff",
              padding: "12px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00ffff, #4facfe)",
              boxShadow: "0 0 18px rgba(0,255,255,0.7)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/suresh-s-u/"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-3"
            style={{
              color: "#fff",
              padding: "12px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0077b5, #00c6ff)",
              boxShadow: "0 0 18px rgba(0,198,255,0.7)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            <FaLinkedin />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/SURESH_S_U/"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-3"
            style={{
              color: "#fff",
              padding: "12px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f89b29, #ffb347)",
              boxShadow: "0 0 18px rgba(255,179,71,0.7)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            <SiLeetcode />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Home;
