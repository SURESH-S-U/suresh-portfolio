import React from "react";
import ShadowImage from "../assets/shadow.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const iconStyle = (c1, c2) => ({
  color: "#fff",
  padding: "14px",
  borderRadius: "50%",
  background: `linear-gradient(135deg, ${c1}, ${c2})`,
  boxShadow: "0 0 20px rgba(0,255,255,0.4)",
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem"
});

const Home = () => {
  return (
    <section id="home" className="min-vh-100 d-flex flex-column justify-content-between position-relative overflow-hidden" style={{ marginTop: "-30px", background: "#050505" }}>
      
      {/* --- CYBERNETIC WAVE SYSTEM --- */}
      <style>
        {`
          @keyframes waveSlide {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes orbFloat {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
            50% { transform: translateY(-20px) scale(1.1); opacity: 0.5; }
          }
          .high-effect-container {
            position: absolute;
            top: -40px; /* MOVED ONE STEP UPWARD */
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
            overflow: hidden;
          }
          .wave-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 200%; 
            height: 100%;
            display: flex;
            animation: waveSlide 18s linear infinite;
          }
          .floating-orb {
            position: absolute;
            width: 350px;
            height: 350px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
            filter: blur(50px);
            animation: orbFloat 9s ease-in-out infinite;
          }
        `}
      </style>

      <div className="high-effect-container">
        <div className="floating-orb" style={{ top: '15%', left: '10%' }}></div>
        <div className="floating-orb" style={{ top: '35%', left: '65%', animationDelay: '-2s' }}></div>

        <div className="wave-wrapper">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none" style={{ width: '50%', height: '550px' }}>
            <defs>
              {/* BALANCED BRIGHTNESS GRADIENT */}
              <linearGradient id="softWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0, 255, 255, 0)" />
                <stop offset="50%" stopColor="rgba(0, 255, 255, 0.5)" />
                <stop offset="100%" stopColor="rgba(0, 255, 255, 0)" />
              </linearGradient>

              {/* SUBTLE GLOW FILTER */}
              <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* AMBIENT PATH */}
            <path 
              d="M0 200 C 360 100 720 300 1080 200 C 1440 100 1800 300 2160 200" 
              fill="none" stroke="rgba(0, 255, 255, 0.08)" strokeWidth="60" 
            />
            
            {/* MAIN GLOWING LINE */}
            <path 
              d="M0 200 C 360 100 720 300 1080 200 C 1440 100 1800 300 2160 200" 
              fill="none" stroke="url(#softWaveGrad)" strokeWidth="2.5" filter="url(#subtleGlow)"
            />

            {/* THIN DATA LINE */}
            <path 
              d="M0 210 C 400 350 800 50 1200 210" 
              fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" 
            />
          </svg>
          
          {/* Duplicate for seamless loop */}
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none" style={{ width: '50%', height: '550px' }}>
            <path 
              d="M0 200 C 360 100 720 300 1080 200 C 1440 100 1800 300 2160 200" 
              fill="none" stroke="rgba(0, 255, 255, 0.08)" strokeWidth="60" 
            />
            <path 
              d="M0 200 C 360 100 720 300 1080 200 C 1440 100 1800 300 2160 200" 
              fill="none" stroke="url(#softWaveGrad)" strokeWidth="2.5" filter="url(#subtleGlow)"
            />
            <path 
              d="M0 210 C 400 350 800 50 1200 210" 
              fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" 
            />
          </svg>
        </div>
      </div>

      {/* --- CONTENT (UNCHANGED) --- */}
      <div className="row w-100 align-items-center flex-grow-1 position-relative" style={{ marginTop: "100px", zIndex: 1 }}>
        <div className="col-md-6 ps-md-5" style={{ marginTop: "180px" }}>
          <h1 className="fw-bold lh-1">
            <span className="fs-4 d-block mb-4 text-uppercase opacity-75 text-info" style={{ letterSpacing: "8px" }}>SURESH S U</span>
            <span className="display-1 d-block text-white">Full Stack</span>
            <span className="display-3 text-info d-block mt-3" style={{ textShadow: "0 0 20px rgba(0, 255, 255, 0.4)" }}>+ AI Developer</span>
          </h1>
          <p className="fs-4 mt-4 text-white opacity-75">Building intelligent & scalable solutions</p>
        </div>

        <div className="col-md-6 d-flex justify-content-center justify-content-md-end pe-md-5">
          <img src={ShadowImage} alt="Profile" style={{ maxWidth: "420px", width: "100%", height: "auto", objectFit: "contain" }} />
        </div>
      </div>

      <div className="profile-cta" style={{
          width: "100%", padding: "70px 20px", marginTop: "40px",
          background: "linear-gradient(120deg, rgba(0,255,255,0.05), rgba(0,123,255,0.1), rgba(0,255,255,0.05))",
          backdropFilter: "blur(10px)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
          position: "relative", zIndex: 1
      }}>
        <h2 style={{
            fontSize: "2.2rem", fontWeight: "700", letterSpacing: "0.25em", textTransform: "uppercase",
            background: "linear-gradient(90deg, #00ffff, #4facfe, #00ffff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% auto", marginBottom: "25px",
        }}>Check My Profile</h2>

        <div style={{ width: "320px", height: "4px", borderRadius: "50px", background: "linear-gradient(90deg, #00ffff, #007bff, #00ffff)", boxShadow: "0 0 35px rgba(0,255,255,0.8)", marginBottom: "40px" }} />

        <div className="d-flex gap-4 justify-content-center">
          <a href="https://github.com/SURESH-S-U" target="_blank" rel="noreferrer" style={iconStyle("#00ffff", "#4facfe")}><FaGithub /></a>
          <a href="https://www.linkedin.com/in/suresh-s-u/" target="_blank" rel="noreferrer" style={iconStyle("#0077b5", "#00c6ff")}><FaLinkedin /></a>
          <a href="https://leetcode.com/u/SURESH_S_U/" target="_blank" rel="noreferrer" style={iconStyle("#f89b29", "#ffb347")}><SiLeetcode /></a>
        </div>
      </div>
    </section>
  );
};

export default Home;