import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-5">
      <h2 className="fw-bold text-center mb-5">Contact</h2>

      <div className="container">
        <div className="row justify-content-center g-4">

          {/* EMAIL */}
          <div className="col-12 col-md-4">
            <div className="card text-center shadow-sm h-100 border-0">
              <div className="card-body">
                <FaEnvelope className="fs-1 text-info mb-3" />
                <h5 className="fw-semibold">Email</h5>
                <a
                  href="mailto:sureshsu@example.com"
                  className="text-decoration-none text-reset"
                >
                  sureshsu@example.com
                </a>
              </div>
            </div>
          </div>

          {/* LINKEDIN */}
          <div className="col-12 col-md-4">
            <div className="card text-center shadow-sm h-100 border-0">
              <div className="card-body">
                <FaLinkedin className="fs-1 text-info mb-3" />
                <h5 className="fw-semibold">LinkedIn</h5>
                <a
                  href="https://linkedin.com/in/suresh"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-reset"
                >
                  linkedin.com/in/suresh
                </a>
              </div>
            </div>
          </div>

          {/* GITHUB */}
          <div className="col-12 col-md-4">
            <div className="card text-center shadow-sm h-100 border-0">
              <div className="card-body">
                <FaGithub className="fs-1 text-info mb-3" />
                <h5 className="fw-semibold">GitHub</h5>
                <a
                  href="https://github.com/SURESH-S-U"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-reset"
                >
                  github.com/SURESH-S-U
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
