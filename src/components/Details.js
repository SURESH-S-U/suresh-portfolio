import React from "react";
import profile from "../assets/profile.png";

const Details = () => {
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
        <div className="row align-items-center g-5">

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
                Suresh S U
              </span>
            </h2>

            <p className="fs-5 opacity-75">
              I am an <strong>Artificial Intelligence and Data Science</strong>{" "}
              student at{" "}
              <span className="text-info">
                Bannari Amman Institute of Technology
              </span>
              . I build full-stack applications and AI-powered systems using{" "}
              <strong>Python, React, FastAPI</strong>, and modern web
              technologies.
            </p>

            <h4 className="fw-bold mt-5 mb-3">Education</h4>

            {/* EDUCATION ITEMS */}
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
                <h6 className="fw-bold mb-1 text-light">
                  {edu.title}
                </h6>

                <p className="mb-0 text-light opacity-75">
                  {edu.place}
                  <br />
                  <small className="opacity-75">{edu.year}</small>
                </p>
              </div>
            ))}
          </div>

          {/* IMAGE */}
          <div className="col-md-5 text-center">
            <div
              className="p-3 rounded-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,255,255,0.15), rgba(255,255,255,0))",
                boxShadow: "0 15px 40px rgba(0,255,255,0.25)",
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-8px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <img
                src={profile}
                alt="Suresh S U"
                className="img-fluid rounded-3"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Details;
