import React from "react";
import profile from "../assets/profile.png";

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
                SURESH S U
              </span>
            </h2>

            <p className="fs-5 opacity-75">
              I am an <strong>Artificial Intelligence and Data Science</strong>{" "}
              student at{" "}
              <span className="text-info">
                Bannari Amman Institute of Technology
              </span>
              . I build scalable full-stack applications and intelligent, AI-powered
              systems using <strong>MERN</strong> and modern web technologies.
              <br /><br />
              Passionate about solving real-world problems, I enjoy transforming complex
              ideas into clean, efficient solutions. With hands-on experience in{" "}
              <strong>machine learning, backend architecture, and UI/UX design</strong>,
              I constantly push myself to learn, innovate, and create technology that
              makes an impact.
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
              <h6
                className="fw-bold mb-1"
                style={{
                  color: theme === "dark" ? "#ffffff" : "#0f2027"
                }}
              >
                {edu.title}
              </h6>

              <p
                className="mb-0"
                style={{
                  color: theme === "dark"
                    ? "rgba(255,255,255,0.75)"
                    : "rgba(15,32,39,0.75)"
                }}
              >
                {edu.place}
                <br />
                <small style={{ opacity: 0.75 }}>{edu.year}</small>
              </p>
              </div>
            ))}
          </div>

          {/* IMAGE */}
          <div className="col-md-5 text-center">
            <img
              src={profile}
              alt="Suresh S U"
              className="img-fluid rounded-3"
              style={{
                maxWidth: "280px",
                marginTop: "-400px",   // ⬆️ moves image up
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
