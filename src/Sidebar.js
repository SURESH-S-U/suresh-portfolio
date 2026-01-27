import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="vertical-text">SURESH S U</div>

      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#details">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Sidebar;
