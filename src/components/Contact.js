import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-box">
        <p>Email</p>
        <a href="mailto:sureshsu@example.com">
          sureshsu@example.com
        </a>

        <p>LinkedIn</p>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          linkedin.com/in/suresh
        </a>

        <p>GitHub</p>
        <a href="https://github.com/SURESH-S-U" target="_blank" rel="noreferrer">
          github.com/SURESH-S-U
        </a>
      </div>
    </section>
  );
}

export default Contact;
