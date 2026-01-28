import React from "react";
import ShadowImage from "../assets/shadow.png";
import ShadowWhiteImage from "../assets/shadowWhite.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const iconStyle = (c1, c2) => ({
  color: "#fff",
  padding: "14px",
  borderRadius: "50%",
  background: `linear-gradient(135deg, ${c1}, ${c2})`,
  boxShadow: "0 0 22px rgba(0,255,255,0.6)",
  transition: "all 0.3s ease",
});


const Home = ({ theme }) => {
  return (
    <section
      id="home"
      className="min-vh-100 d-flex flex-column justify-content-between" style={{marginTop:"-30px"}}
    >
      {/* MAIN CONTENT */}
      <div className="row w-100 align-items-center flex-grow-1" style={{marginTop:"100px"}}>

        {/* LEFT CONTENT */}
        <div
        className="col-md-6 ps-md-5"
        style={{ marginTop: "180px" }}
        >          <h1 className="fw-bold lh-1">
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
        <div className="col-md-6 d-flex justify-content-center justify-content-md-end pe-md-5" style={{marginTop:"-10px"}}>
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

    {/* FULL WIDTH CTA SECTION */}
<div
  className="profile-cta"
  style={{
    width: "100%",
    padding: "70px 20px",
    marginTop: "40px",
    background:
      "linear-gradient(120deg, rgba(0,255,255,0.12), rgba(79,172,254,0.15), rgba(0,255,255,0.12))",
    backdropFilter: "blur(6px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    animation: "ctaReveal 1.2s ease forwards",
  }}
>
  {/* CTA TEXT */}
  <h2
    style={{
      fontSize: "2.2rem",
      fontWeight: "700",
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      background:
        "linear-gradient(90deg, #00ffff, #4facfe, #00ffff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundSize: "200% auto",
      animation: "gradientMove 4s linear infinite",
      marginBottom: "25px",
    }}
  >
    Check My Profile
  </h2>

  {/* CTA GLOW BAR */}
  <div
    style={{
      width: "320px",
      height: "6px",
      borderRadius: "50px",
      background:
        "linear-gradient(90deg, #00ffff, #4facfe, #00ffff)",
      backgroundSize: "200% 200%",
      boxShadow: "0 0 35px rgba(0,255,255,0.8)",
      animation: "gradientMove 3s linear infinite",
      marginBottom: "40px",
    }}
  />

  {/* SOCIAL ICONS */}
  <div className="d-flex gap-4 justify-content-center">
    <a
      href="https://github.com/SURESH-S-U"
      target="_blank"
      rel="noopener noreferrer"
      className="fs-3"
      style={iconStyle("#00ffff", "#4facfe")}
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/suresh-s-u/"
      target="_blank"
      rel="noopener noreferrer"
      className="fs-3"
      style={iconStyle("#0077b5", "#00c6ff")}
    >
      <FaLinkedin />
    </a>

    <a
      href="https://leetcode.com/u/SURESH_S_U/"
      target="_blank"
      rel="noopener noreferrer"
      className="fs-3"
      style={iconStyle("#f89b29", "#ffb347")}
    >
      <SiLeetcode />
    </a>
  </div>
</div>


    </section>
  );
};

export default Home;
