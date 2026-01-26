import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';

function App() {
  return (
    <div>
      <Sidebar />

      {/* 1. HERO SECTION */}
      <section className="section">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <p style={{ letterSpacing: '8px', color: '#888', marginBottom: '20px' }}>SURESH S U</p>
          <h1 style={{ fontSize: '80px', fontWeight: 'bold', lineHeight: '1' }}>
            Full Stack <br /> 
            <span className="cyan-text">+ AI Developer</span>
          </h1>
          <div style={{ width: '100px', height: '2px', backgroundColor: '#333', marginTop: '40px' }}></div>
        </motion.div>
      </section>

      {/* 2. PROJECTS SECTION */}
      <section id="projects" className="section" style={{ backgroundColor: '#0f0f0f' }}>
        <div style={{ width: '100%' }}>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="cyan-text">01</motion.span>
          <h2 style={{ fontSize: '50px' }}>NLP Based Database Engine</h2>
          <p style={{ color: '#aaa', maxWidth: '500px', fontSize: '18px' }}>
            Built a natural language processing system to convert user input into structured database queries. 
            Bridging the gap between humans and data.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            style={{ padding: '15px 30px', border: 'none', backgroundColor: '#00E5FF', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' }}
          >
            VIEW PROJECT →
          </motion.button>
        </div>
        {/* Large Background Text like the image */}
        <h1 style={{ position: 'absolute', right: '-50px', fontSize: '200px', opacity: 0.03, pointerEvents: 'none' }}>PROJECTS</h1>
      </section>

      {/* 3. DETAILS (ABOUT) SECTION */}
      <section id="details" className="section">
        <div style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: '40px' }}>Hi there</h2>
            <p style={{ color: '#aaa', lineHeight: '1.8' }}>
              I am an Artificial Intelligence student at <span className="cyan-text">Bannari Amman Institute of Technology</span>. 
              I specialize in Python, React, and FastAPI. When I'm not coding, I'm solving problems and thinking about 
              how AI can change the world.
            </p>
            <p className="cyan-text" style={{ marginTop: '20px', cursor: 'pointer' }}>Send me a message</p>
          </div>
          {/* Placeholder for your photo */}
          <div style={{ width: '300px', height: '400px', backgroundColor: '#222', border: '1px solid #333' }}>
             {/* You can put your <img src="your-image.jpg" /> here later */}
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="section" style={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <h2 style={{ fontSize: '50px' }}>Say hello</h2>
        <div style={{ width: '400px', textAlign: 'left', marginTop: '40px' }}>
          <input type="text" placeholder="Your email" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #333', padding: '15px', color: 'white' }} />
          <textarea placeholder="Message" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #333', padding: '15px', color: 'white', marginTop: '20px' }}></textarea>
          <button className="cyan-bg" style={{ width: '100%', padding: '15px', border: 'none', marginTop: '30px', fontWeight: 'bold' }}>SEND MESSAGE</button>
        </div>
        <p style={{ marginTop: '100px', color: '#444', fontSize: '12px' }}>© 2024 Suresh S U. Crafted with React.</p>
      </section>
    </div>
  );
}

export default App;