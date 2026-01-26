import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Sidebar = () => {
  return (
    <div style={{ position: 'fixed', left: 0, top: 0, height: '100vh', width: '80px', borderRight: '1px solid #333', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '40px 0', zIndex: 100, backgroundColor: '#0B0B0B' }}>
      <div style={{ fontWeight: 'bold', fontSize: '24px' }}>S</div>
      
      <div className="vertical-text" style={{ display: 'flex', gap: '40px' }}>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="#details" className="nav-link">Details</a>
        <a href="#projects" className="nav-link">Projects</a>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#666' }}>
        <Github size={20} />
        <Linkedin size={20} />
      </div>
    </div>
  );
};

export default Sidebar;