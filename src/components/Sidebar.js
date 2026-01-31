import React, { useEffect, useState } from "react";

const Sidebar = ({ isOpen, toggle }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* KEYFRAMES FOR ANIMATIONS */}
      <style>
        {`
          @keyframes border-glow {
            0% { border-color: rgba(0, 255, 255, 0.3); box-shadow: 0 0 5px rgba(0, 255, 255, 0.2); }
            50% { border-color: rgba(0, 255, 255, 1); box-shadow: 0 0 20px rgba(0, 255, 255, 0.6); }
            100% { border-color: rgba(0, 255, 255, 0.3); box-shadow: 0 0 5px rgba(0, 255, 255, 0.2); }
          }
          @keyframes text-flicker {
            0%, 100% { opacity: 1; text-shadow: 0 0 8px rgba(0,255,255,0.6); }
            50% { opacity: 0.8; text-shadow: 0 0 15px rgba(0,255,255,1); }
          }
          @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .nav-link-custom:hover .link-dot {
            width: 12px !important;
            opacity: 1 !important;
          }
        `}
      </style>

      {/* OVERLAY */}
      {isMobile && isOpen && (
        <div
          onClick={toggle}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(4px)",
            zIndex: 999
          }}
        />
      )}

      <aside
        className="d-flex flex-column align-items-center justify-content-between py-4"
        style={{
          width: "170px",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 1000,
          // Enhanced Background with Glassmorphism
          background: "linear-gradient(180deg, rgba(15, 32, 39, 0.95), rgba(32, 58, 67, 0.9), rgba(44, 83, 100, 0.95))",
          backdropFilter: "blur(12px)",
          color: "#e0f7fa",
          borderRight: "1px solid rgba(0, 255, 255, 0.3)",
          boxShadow: "10px 0 30px rgba(0,0,0,0.5)",

          /* RESPONSIVE TRANSFORM */
          transform: isMobile && !isOpen ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)",
          overflow: "hidden"
        }}
      >
        {/* TOP GLOW DOT - Pulsing */}
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#00ffff",
            boxShadow: "0 0 20px #00ffff, 0 0 40px #00ffff",
            animation: "border-glow 2s infinite ease-in-out"
          }}
        />

        {/* BACKGROUND ACCENT ORB (The "Wow" factor) */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '-50px',
          width: '100px',
          height: '100px',
          background: 'rgba(0, 255, 255, 0.1)',
          filter: 'blur(40px)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        {/* VERTICAL NAME - Flicker Effect */}
        <div
          className="fw-bold text-uppercase"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            letterSpacing: "8px",
            fontSize: "16px",
            color: "#00ffff",
            animation: "text-flicker 3s infinite",
            userSelect: "none"
          }}
        >
          SURESH S U
        </div>

        {/* NAVIGATION */}
        <nav className="nav flex-column text-center gap-4 w-100 align-items-center">
          {["Home", "Projects", "Skills", "Details", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link-custom px-0 fw-semibold d-flex align-items-center"
              style={{
                color: "#e0f7fa",
                letterSpacing: "1.5px",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                textDecoration: "none",
                position: "relative",
                fontSize: "14px"
              }}
              onClick={() => isMobile && toggle()}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00ffff";
                e.currentTarget.style.transform = "scale(1.1) translateX(5px)";
                e.currentTarget.style.textShadow = "0 0 15px #00ffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#e0f7fa";
                e.currentTarget.style.transform = "scale(1) translateX(0)";
                e.currentTarget.style.textShadow = "none";
              }}
            >
               {/* Hidden Dot that appears on hover */}
               <span className="link-dot" style={{
                 width: '0px',
                 height: '2px',
                 background: '#00ffff',
                 marginRight: '8px',
                 display: 'inline-block',
                 opacity: 0,
                 transition: 'all 0.3s ease',
                 boxShadow: '0 0 8px #00ffff'
               }}></span>
              {item}
            </a>
          ))}
        </nav>

        {/* BOTTOM ACCENT - Floating Animation */}
        <div
          style={{
            width: "60px",
            height: "3px",
            borderRadius: "10px",
            background: "linear-gradient(90deg, transparent, #00ffff, transparent)",
            boxShadow: "0 0 15px #00ffff",
            animation: "floating 3s infinite ease-in-out"
          }}
        />

        {/* NEON STRIP ON THE EDGE */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: '10%',
          bottom: '10%',
          width: '2px',
          background: 'linear-gradient(to bottom, transparent, #00ffff, transparent)',
          opacity: 0.5
        }} />
      </aside>
    </>
  );
};

export default Sidebar;