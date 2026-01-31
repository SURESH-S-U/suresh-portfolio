import React from "react";
import profile from "../assets/profile.png";
import hackathon1 from "../assets/kpr_runner_certificate.png";
import hackathon2 from "../assets/cit_3rd_certificate.png";

const Details = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <div id="details" className="py-5" style={{ overflow: "hidden" }}>
      <style>
        {`
          .glass-card {
            background: ${isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)"};
            backdrop-filter: blur(10px);
            border: 1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"};
            border-radius: 20px;
            transition: all 0.4s ease;
          }
          .glass-card:hover {
            transform: translateY(-5px);
            border-color: #00ffff;
            box-shadow: 0 10px 30px rgba(0, 255, 255, 0.15);
          }
          .tech-pill {
            padding: 6px 15px;
            border-radius: 50px;
            font-size: 0.85rem;
            background: rgba(0, 255, 255, 0.1);
            border: 1px solid rgba(0, 255, 255, 0.3);
            color: #00ffff;
            margin: 4px;
            display: inline-block;
            transition: 0.3s;
          }
          .tech-pill:hover {
            background: #00ffff;
            color: #000;
          }
          .timeline-line {
            position: relative;
            padding-left: 30px;
            border-left: 2px dashed rgba(0, 255, 255, 0.3);
          }
          .timeline-dot {
            position: absolute;
            left: -9px;
            top: 5px;
            width: 16px;
            height: 16px;
            background: #00ffff;
            border-radius: 50%;
            box-shadow: 0 0 10px #00ffff;
          }
          .profile-aura {
            position: relative;
            display: inline-block;
          }
          .profile-aura::before {
            content: "";
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 110%; height: 110%;
            background: radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, transparent 70%);
            z-index: -1;
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            animation: morphing 8s infinite alternate;
          }
          @keyframes morphing {
            0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            100% { border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%; }
          }
          .cert-img {
            transition: transform 0.5s ease;
            cursor: zoom-in;
          }
          .cert-img:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="container py-4">
        {/* HEADER SECTION */}
        <div className="text-center mb-5 pb-5">
          <h2 className="display-4 fw-bold mb-0">About <span className="text-info">Me</span></h2>
          <div className="mt-2 mx-auto" style={{ width: '80px', height: '4px', background: '#00ffff', borderRadius: '10px' }}></div>
        </div>

        <div className="row g-5 align-items-start">
          
          {/* LEFT: MAIN PROFILE & TEXT */}
          <div className="col-lg-7">
            <div className="glass-card p-4 p-md-5">
              <h2 className="fw-bold mb-4">
                Hi, I’m <span className="text-info">SURESH S U</span>
              </h2>
              <p className="fs-5 opacity-75 lh-lg">
                I am an <strong>Artificial Intelligence and Data Science</strong> student at <span className="text-info">Bannari Amman Institute of Technology</span>. 
                I specialize in building intelligent ecosystems—merging robust <strong>MERN</strong> backend architectures with sophisticated <strong>AI/ML</strong> models.
              </p>
              
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <h5 className="fw-bold text-white mb-3"><i className="bi bi-code-slash text-info me-2"></i>What I Do</h5>
                  <ul className="list-unstyled opacity-75">
                    <li className="mb-2">▹ MERN Stack Development</li>
                    <li className="mb-2">▹ AI & ML Integration</li>
                    <li className="mb-2">▹ RESTful API Design</li>
                    <li>▹ Creative UI/UX Design</li>
                  </ul>
                </div>
                <div className="col-md-6 mb-4">
                  <h5 className="fw-bold text-white mb-3"><i className="bi bi-rocket-takeoff text-info me-2"></i>My Vision</h5>
                  <p className="opacity-75 small">
                    To build high-performance, scalable technology that simplifies complex human problems through automation and intelligence.
                  </p>
                </div>
              </div>

              {/* TECH STACK CHIPS */}
              <div className="mt-3">
                <h5 className="fw-bold text-white mb-4">Core Expertise</h5>
                <div className="d-flex flex-wrap">
                  {["React", "Node.js", "Express", "MongoDB", "Python", "FastAPI", "YOLO", "Machine Learning", "NLP", "MySQL", "Bootstrap"].map(tech => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* EDUCATION SECTION */}
            <h4 className="fw-bold mt-5 mb-4 px-2">Academic Path</h4>
            <div className="timeline-line ms-2">
              {[
                { title: "B.Tech – AI & Data Science", place: "Bannari Amman Institute of Technology", year: "2023 – 2027" },
                { title: "HSC - Model School", place: "Erode District Govt Model School", year: "2022 – 2023" },
                { title: "SSLC", place: "Govt High School, MokkinanKombai", year: "2020 – 2021" },
              ].map((edu, i) => (
                <div key={i} className="mb-4 position-relative">
                  <div className="timeline-dot"></div>
                  <div className="glass-card p-3 ms-2" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <h6 className="fw-bold text-white mb-1">{edu.title}</h6>
                    <p className="small opacity-75 mb-0">{edu.place}</p>
                    <span className="badge bg-info text-dark mt-2">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: PHOTO & AWARDS */}
          <div className="col-lg-5 ps-lg-5">
            <div className="sticky-top" style={{ top: '100px' }}>
              <div className="text-center mb-5">
                <div className="profile-aura">
                  <img
                    src={profile}
                    alt="Suresh S U"
                    className="img-fluid rounded-circle shadow-lg"
                    style={{ width: "260px", height: "260px", objectFit: "cover", border: "5px solid rgba(0,255,255,0.2)" }}
                  />
                </div>
              </div>

              {/* HACKATHONS */}
              <h4 className="fw-bold mb-4 text-center text-lg-start">Hackathon Hall of Fame</h4>
              
              <div className="mb-4">
                <div className="glass-card overflow-hidden">
                  <img src={hackathon1} alt="KPR Hack" className="img-fluid cert-img" />
                  <div className="p-3">
                    <h6 className="fw-bold text-info mb-1">🥈 2nd Place – Technova 2025</h6>
                    <p className="small opacity-75 mb-0">AI-based Face Detection & Security System</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="glass-card overflow-hidden">
                  <img src={hackathon2} alt="Horizon Hack" className="img-fluid cert-img" />
                  <div className="p-3">
                    <h6 className="fw-bold text-info mb-1">🥉 3rd Place – Hack the Horizon</h6>
                    <p className="small opacity-75 mb-0">24-Hr Hackathon: AI-powered Lawyer Assistant</p>
                  </div>
                </div>
              </div>

              {/* CAREER GOAL CARD */}
              <div className="p-4 rounded-4" style={{ background: 'linear-gradient(135deg, #00ffff 0%, #007bff 100%)' }}>
                 <h6 className="fw-bold text-dark mb-2">Career Objective</h6>
                 <p className="text-dark small opacity-90 mb-0 fw-medium">
                   Seeking a challenging role as a Full Stack Developer to build impactful AI-driven products in a forward-thinking environment.
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;