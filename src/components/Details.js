import React from "react";
import profile from "../assets/profile.png";
import hackathon1 from "../assets/kpr_runner_certificate.png";
import hackathon2 from "../assets/cit_3rd_certificate.png";

const Details = ({ theme }) => {
  return (
    <div>
      <h2 className="fw-bold mb-4">About</h2>

      <section
        id="details"
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,255,255,0.04), rgba(255,255,255,0))",
        }}
      >
        <div className="container">
          <div className="row g-5">

            {/* TEXT CONTENT */}
            <div className="col-md-7">
              <h2 className="fw-bold mb-3">
                Hi, I’m{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #00ffff, #4facfe)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SURESH S U
                </span>
              </h2>

              {/* ABOUT */}
              <p className="fs-5 opacity-75">
                I am an <strong>Artificial Intelligence and Data Science</strong>{" "}
                student at{" "}
                <span className="text-info">
                  Bannari Amman Institute of Technology
                </span>
                . I build scalable full-stack applications and intelligent,
                AI-powered systems using <strong>MERN</strong> and modern web
                technologies.
                <br /><br />
                Passionate about solving real-world problems, I enjoy transforming
                complex ideas into clean, efficient solutions. With hands-on
                experience in{" "}
                <strong>
                  machine learning, backend architecture, and UI/UX design
                </strong>
                , I constantly push myself to learn, innovate, and create
                technology that makes an impact.
              </p>

              {/* WHAT I DO */}
              <h4 className="fw-bold mt-5 mb-3">What I Do</h4>
              <ul className="fs-6 opacity-75">
                <li>Full-stack web development using MERN</li>
                <li>AI & ML model integration into web applications</li>
                <li>REST API & backend system design</li>
                <li>Responsive UI and clean UX implementation</li>
              </ul>

              {/* TECH STACK */}
              <h4 className="fw-bold mt-5 mb-3">Tech Stack</h4>
              <div className="row fs-6 opacity-75">
                <div className="col-sm-6 mb-2">
                  <strong>Frontend:</strong> React, HTML, CSS, Bootstrap
                </div>
                <div className="col-sm-6 mb-2">
                  <strong>Backend:</strong> Node.js, Express, FastAPI
                </div>
                <div className="col-sm-6 mb-2">
                  <strong>Database:</strong> MongoDB, MySQL
                </div>
                <div className="col-sm-6 mb-2">
                  <strong>AI / ML:</strong> Python, ML, YOLO, NLP
                </div>
              </div>

              {/* EDUCATION */}
              <h4 className="fw-bold mt-5 mb-3">Education</h4>

              {[
                {
                  title: "B.Tech – AI & Data Science",
                  place: "Bannari Amman Institute of Technology",
                  year: "2023 – 2027",
                },
                {
                  title: "HSC",
                  place: "Erode District Govt Model School",
                  year: "2022 – 2023",
                },
                {
                  title: "SSLC",
                  place: "Govt High School, MokkinanKombai",
                  year: "2020 – 2021",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="mb-3 p-3 rounded-3"
                  style={{
                    borderLeft: "3px solid #00ffff",
                    background:
                      "linear-gradient(135deg, rgba(0,255,255,0.10), rgba(255,255,255,0))",
                  }}
                >
                  <h6
                    className="fw-bold mb-1"
                    style={{
                      color: theme === "dark" ? "#ffffff" : "#0f2027",
                    }}
                  >
                    {edu.title}
                  </h6>

                  <p
                    className="mb-0"
                    style={{
                      color:
                        theme === "dark"
                          ? "rgba(255,255,255,0.75)"
                          : "rgba(15,32,39,0.75)",
                    }}
                  >
                    {edu.place}
                    <br />
                    <small style={{ opacity: 0.75 }}>{edu.year}</small>
                  </p>
                </div>
              ))}

              {/* HACKATHON ACHIEVEMENTS */}
              <h4 className="fw-bold mt-5 mb-4">Hackathon Achievements</h4>

              <div className="row g-4">
                {/* HACKATHON 1 */}
                <div className="col-md-6">
                  <div
                    className="p-4 rounded-4 h-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,255,255,0.12), rgba(255,255,255,0))",
                      boxShadow: "0 10px 30px rgba(0,255,255,0.25)",
                    }}
                  >
                    <img
                      src={hackathon1}
                      alt="Technova Hackathon Certificate"
                      className="img-fluid rounded-3 mb-3"
                    />
                    <h6 className="fw-bold">🥈 2nd Place – Technova Hackathon 2025</h6>
                    <p className="fs-6 opacity-75 mb-1">
                      <strong>Role:</strong> Full Stack Developer
                    </p>
                    <p className="fs-6 opacity-75 mb-0">
                      Built an AI-based Face Detection, Attendance & Security
                      Surveillance System during a competitive hackathon.
                    </p>
                  </div>
                </div>

                {/* HACKATHON 2 */}
                <div className="col-md-6">
                  <div
                    className="p-4 rounded-4 h-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(79,172,254,0.15), rgba(255,255,255,0))",
                      boxShadow: "0 10px 30px rgba(79,172,254,0.25)",
                    }}
                  >
                    <img
                      src={hackathon2}
                      alt="Hack the Horizon Certificate"
                      className="img-fluid rounded-3 mb-3"
                    />
                    <h6 className="fw-bold">
                      🥉 3rd Place – Hack the Horizon (24-Hr Hackathon)
                    </h6>
                    <p className="fs-6 opacity-75 mb-1">
                      <strong>Role:</strong> Full Stack Developer
                    </p>
                    <p className="fs-6 opacity-75 mb-0">
                      Developed an AI-powered Lawyer Assistant application with
                      intelligent legal query handling and AI integration.
                    </p>
                  </div>
                </div>
              </div>

              {/* CAREER OBJECTIVE */}
              <h4 className="fw-bold mt-5 mb-3">Career Objective</h4>
              <p className="fs-6 opacity-75">
                I’m seeking opportunities as a Web / Full Stack Developer where I
                can apply my skills, contribute to impactful projects, and grow
                as an engineer in a collaborative environment.
              </p>
            </div>

            {/* IMAGE */}
            <div className="col-md-5 text-center">
              <img
                src={profile}
                alt="Suresh S U"
                className="img-fluid rounded-3"
                style={{
                  maxWidth: "280px",
                  marginTop: "-60px",
                }}
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
