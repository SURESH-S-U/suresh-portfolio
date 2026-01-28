import React from "react";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiFastapi,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiBootstrap,
  SiTailwindcss,
  SiPostman,
  SiDocker,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
        desc: "Build responsive SPAs, reusable components, and dynamic UIs."
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        desc: "Implement async logic, API integration, and modern ES6+ features."
      },
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        desc: "Semantic markup for accessible and SEO-friendly web pages."
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        desc: "Responsive layouts, animations, and clean UI styling."
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
        desc: "Rapid UI development with responsive grid systems."
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        desc: "Utility-first styling for modern and scalable designs."
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        desc: "Server-side logic, authentication, and API handling."
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        desc: "RESTful API development and middleware integration."
      },
      {
        name: "FastAPI",
        icon: <SiFastapi />,
        desc: "High-performance APIs for AI & ML model integration."
      },
    ],
  },
  {
    title: "AI / Machine Learning",
    skills: [
      {
        name: "Python",
        icon: <FaPython />,
        desc: "Data processing, ML model development, and automation."
      },
      {
        name: "Machine Learning",
        icon: <FaDatabase />,
        desc: "Model training, evaluation, and real-world problem solving."
      },
      {
        name: "YOLO",
        icon: <FaDatabase />,
        desc: "Real-time object & face detection systems."
      },
      {
        name: "NLP",
        icon: <FaDatabase />,
        desc: "Text analysis and AI-powered assistant development."
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        desc: "NoSQL database design for scalable applications."
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        desc: "Relational database design and optimized queries."
      },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        desc: "Version control and collaborative development."
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        desc: "Repository management, branching, and CI workflows."
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        desc: "API testing, debugging, and documentation."
      },
      {
        name: "Docker",
        icon: <SiDocker />,
        desc: "Containerization for consistent deployments."
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-5" id="skills">
      <h2 className="fw-bold mb-5">Skills</h2>

      <div className="row g-4">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4">
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,255,255,0.12), rgba(255,255,255,0))",
                boxShadow: "0 10px 30px rgba(0,255,255,0.25)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-8px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <h5 className="fw-bold mb-4 text-info">{group.title}</h5>

              {group.skills.map((skill, i) => (
                <div key={i} className="d-flex mb-3">
                  <div
                    className="fs-3 me-3"
                    style={{
                      color: "#00ffff",
                      textShadow: "0 0 10px rgba(0,255,255,0.7)",
                    }}
                  >
                    {skill.icon}
                  </div>

                  <div>
                    <h6 className="fw-semibold mb-1">{skill.name}</h6>
                    <p className="fs-6 opacity-75 mb-0">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
