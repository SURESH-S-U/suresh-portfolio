import React from "react";

const Sidebar = () => {
  return (
    <aside
      className="d-flex flex-column align-items-center justify-content-between py-4 text-light shadow-lg"
      style={{
        width: "170px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1000,
        background: "linear-gradient(180deg, #0f2027, #203a43, #2c5364)"
      }}
    >
      {/* TOP GLOW DOT */}
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#00ffff",
          boxShadow: "0 0 12px #00ffff"
        }}
      />

      {/* VERTICAL NAME */}
      <div
        className="fw-bold text-uppercase"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          letterSpacing: "7px",
          fontSize: "14px",
          color: "#cfd8dc",
          textShadow: "0 0 8px rgba(0,255,255,0.3)"
        }}
      >
        SURESH S U
      </div>

      {/* NAVIGATION */}
      <nav className="nav flex-column text-center gap-4">
        {["Home", "Projects", "Details", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-link px-0 fw-semibold"
            style={{
              color: "#e0f7fa",
              letterSpacing: "1px",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#00ffff";
              e.target.style.textShadow = "0 0 8px #00ffff";
              e.target.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#e0f7fa";
              e.target.style.textShadow = "none";
              e.target.style.transform = "translateX(0)";
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* BOTTOM ACCENT LINE */}
      <div
        style={{
          width: "50px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #00ffff, transparent)",
          boxShadow: "0 0 10px #00ffff"
        }}
      />
    </aside>
  );
};

export default Sidebar;
