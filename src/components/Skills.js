import React from "react";
import {
  FaPython, FaReact, FaNodeJs, FaHtml5,  FaDatabase, FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiJavascript, SiFastapi, SiExpress, SiMysql, SiMongodb, SiBootstrap, SiTailwindcss, SiPostman, SiDocker,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <FaReact />,
    skills: [
      { name: "React", icon: <FaReact />, desc: "Building scalable SPAs & hooks." },
      { name: "JavaScript", icon: <SiJavascript />, desc: "ES6+, Async, & DOM logic." },
      { name: "HTML5", icon: <FaHtml5 />, desc: "Semantic structure & SEO markup." }, // Used FaHtml5
      { name: "CSS3 & Tailwind", icon: <SiTailwindcss />, desc: "Modern utility-first styling." }, // Used SiTailwindcss
      { name: "Bootstrap", icon: <SiBootstrap />, desc: "Rapid UI prototyping." },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, desc: "Event-driven server architecture." },
      { name: "Express.js", icon: <SiExpress />, desc: "Middleware & RESTful routing." },
      { name: "FastAPI", icon: <SiFastapi />, desc: "Pythonic high-performance APIs." },
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: <FaPython />,
    skills: [
      { name: "Python", icon: <FaPython />, desc: "Core AI & Data Science logic." },
      { name: "YOLO / OpenCV", icon: <FaDatabase />, desc: "Computer Vision & Detection." },
      { name: "NLP", icon: <FaDatabase />, desc: "Transformers & Text Analytics." },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, desc: "Schema-less NoSQL scaling." },
      { name: "MySQL", icon: <SiMysql />, desc: "Relational DB & query tuning." },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <SiDocker />,
    skills: [
      { name: "GitHub", icon: <FaGithub />, desc: "Version control & Collaboration." }, // Used FaGithub
      { name: "Git & CI/CD", icon: <FaGitAlt />, desc: "Workflow management." },
      { name: "Docker", icon: <SiDocker />, desc: "Environment containerization." },
      { name: "Postman", icon: <SiPostman />, desc: "API testing & documentation." },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-5 position-relative" id="skills" style={{ background: "#050505", overflow: "hidden" }}>
      
      {/* --- CYBERNETIC BACKGROUND ELEMENTS --- */}
      <div className="position-absolute w-100 h-100 top-0 start-0" style={{ zIndex: 0, opacity: 0.5 }}>
        <div className="position-absolute" style={{ top: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 255, 255, 0.08) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
        <div className="position-absolute" style={{ bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 123, 255, 0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
      </div>

      <style>
        {`
          .skill-card {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 25px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            z-index: 1;
          }

          .skill-card:hover {
            transform: translateY(-10px);
            border-color: rgba(0, 255, 255, 0.4);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
          }

          .icon-box {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background: rgba(0, 255, 255, 0.1);
            color: #00ffff;
            font-size: 1.3rem;
            transition: 0.3s;
          }

          .skill-item:hover .icon-box {
            background: #00ffff;
            color: #000;
            transform: rotateY(360deg);
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
          }

          .skill-title-gradient {
            background: linear-gradient(90deg, #00ffff, #4facfe);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
            letter-spacing: 1px;
          }

          @keyframes glowPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
        `}
      </style>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-5 pb-4">
          <h6 className="text-info text-uppercase fw-bold mb-3" style={{ letterSpacing: '5px' }}>Proficiency</h6>
          <h2 className="display-4 fw-bold text-white">Technical <span style={{ color: '#00ffff', textShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}>Skills</span></h2>
          <div className="mx-auto mt-3" style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #00ffff, #007bff)', borderRadius: '10px' }}></div>
        </div>

        <div className="row g-4">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="skill-card h-100 p-4">
                
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3 fs-4 text-info opacity-75">
                    {group.icon}
                  </div>
                  <h4 className="skill-title-gradient mb-0 fs-5 text-uppercase">{group.title}</h4>
                </div>

                <div className="skill-list">
                  {group.skills.map((skill, i) => (
                    <div key={i} className="skill-item d-flex align-items-start mb-4">
                      <div className="icon-box me-3 mt-1">
                        {skill.icon}
                      </div>
                      <div>
                        <h6 className="text-white fw-bold mb-1" style={{ fontSize: '0.95rem' }}>{skill.name}</h6>
                        <p className="small mb-0 opacity-50" style={{ lineHeight: '1.4' }}>
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="position-absolute" style={{ bottom: '15px', right: '15px', width: '6px', height: '6px', background: '#00ffff', borderRadius: '50%', boxShadow: '0 0 10px #00ffff', animation: 'glowPulse 2s infinite' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;