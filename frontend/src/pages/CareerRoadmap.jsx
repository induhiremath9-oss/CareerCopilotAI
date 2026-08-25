import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const roadmapSteps = [
  {
    number: 1,
    icon: "🎨",
    title: "HTML & CSS",
    level: "Foundation",
    description:
      "Learn web page structure, styling, layouts and responsive design.",
    skills: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"],
  },
  {
    number: 2,
    icon: "⚡",
    title: "JavaScript",
    level: "Foundation",
    description:
      "Learn programming basics, functions, arrays, objects and modern JavaScript.",
    skills: ["ES6+", "DOM", "APIs", "Async JavaScript"],
  },
  {
    number: 3,
    icon: "⚛️",
    title: "React",
    level: "Development",
    description:
      "Build modern interactive interfaces using components and React.",
    skills: ["Components", "Props", "State", "Hooks", "React Router"],
  },
  {
    number: 4,
    icon: "🟢",
    title: "Node.js & Express",
    level: "Development",
    description:
      "Learn backend development, REST APIs and server-side programming.",
    skills: ["Node.js", "Express.js", "REST API", "Authentication"],
  },
  {
    number: 5,
    icon: "🍃",
    title: "MongoDB",
    level: "Development",
    description:
      "Learn databases, collections, documents and connecting MongoDB with applications.",
    skills: ["MongoDB", "Mongoose", "CRUD", "Database Design"],
  },
  {
    number: 6,
    icon: "🔗",
    title: "Git & GitHub",
    level: "Career",
    description:
      "Learn version control and how to manage and showcase your projects.",
    skills: ["Git", "GitHub", "Branches", "Commits", "Pull Requests"],
  },
  {
    number: 7,
    icon: "🚀",
    title: "Build Projects",
    level: "Career",
    description:
      "Create real-world projects to strengthen your portfolio and prepare for jobs.",
    skills: ["Full Stack", "AI Integration", "Deployment", "Portfolio"],
  },
];

const CareerRoadmap = () => {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleStep = (number) => {
    setCompletedSteps((previous) => {
      if (previous.includes(number)) {
        return previous.filter((step) => step !== number);
      }

      return [...previous, number];
    });
  };

  const progress = Math.round(
    (completedSteps.length / roadmapSteps.length) * 100
  );

  return (
    <div className="roadmap-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .roadmap-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 15% 10%, rgba(104, 55, 190, 0.18), transparent 28%),
            radial-gradient(circle at 85% 20%, rgba(44, 120, 255, 0.12), transparent 25%),
            #070817;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        .roadmap-navbar {
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
          background: rgba(5, 6, 20, 0.96);
          border-bottom: 1px solid rgba(157, 111, 255, 0.25);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .roadmap-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 21px;
          font-weight: 800;
          white-space: nowrap;
        }

        .logo-rocket {
          font-size: 24px;
        }

        .logo-white {
          color: #ffffff;
        }

        .logo-purple {
          color: #a66cff;
        }

        .roadmap-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .roadmap-nav button {
          border: none;
          background: transparent;
          color: #c8c8d8;
          font-size: 14px;
          cursor: pointer;
          padding: 9px 12px;
          border-radius: 20px;
          transition: 0.25s;
        }

        .roadmap-nav button:hover {
          color: #ffffff;
          background: rgba(139, 76, 255, 0.15);
        }

        .roadmap-nav .active {
          color: #d49cff;
          background: rgba(123, 57, 255, 0.14);
        }

        .profile-circle {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #7237ff, #a65cff);
          box-shadow: 0 0 22px rgba(132, 68, 255, 0.35);
          font-size: 20px;
        }

        .roadmap-hero {
          padding: 70px 7% 45px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-badge {
          display: inline-block;
          color: #bd8cff;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.5px;
          margin-bottom: 15px;
        }

        .roadmap-hero h1 {
          margin: 0;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.1;
          font-weight: 800;
        }

        .gradient-text {
          background: linear-gradient(90deg, #ffffff, #a86cff, #6d9cff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .roadmap-hero p {
          max-width: 720px;
          margin: 20px auto 0;
          color: #b7b8ca;
          line-height: 1.7;
          font-size: 16px;
        }

        .roadmap-summary {
          width: min(1100px, 90%);
          margin: 0 auto 45px;
          padding: 25px 30px;
          border: 1px solid rgba(145, 94, 255, 0.3);
          border-radius: 22px;
          background: linear-gradient(
            135deg,
            rgba(48, 27, 87, 0.7),
            rgba(13, 17, 42, 0.8)
          );
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
        }

        .summary-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 16px;
        }

        .summary-title {
          font-size: 20px;
          font-weight: 750;
        }

        .summary-count {
          color: #b98cff;
          font-size: 14px;
          font-weight: 700;
        }

        .progress-track {
          width: 100%;
          height: 10px;
          background: rgba(255, 255, 255, 0.09);
          border-radius: 20px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 20px;
          background: linear-gradient(90deg, #7337ff, #b96cff, #62b9ff);
          transition: width 0.4s ease;
        }

        .progress-text {
          margin-top: 12px;
          color: #9fa1b7;
          font-size: 13px;
        }

        .journey-section {
          width: min(1100px, 90%);
          margin: 0 auto;
          padding-bottom: 60px;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .section-heading h2 {
          margin: 0 0 10px;
          font-size: 27px;
        }

        .section-heading p {
          margin: 0;
          color: #999bb0;
          font-size: 14px;
        }

        .roadmap-list {
          position: relative;
        }

        .roadmap-list::before {
          content: "";
          position: absolute;
          left: 27px;
          top: 30px;
          bottom: 30px;
          width: 3px;
          background: linear-gradient(
            to bottom,
            #7841ff,
            #9a63ff,
            rgba(116, 63, 255, 0.2)
          );
          border-radius: 10px;
        }

        .roadmap-item {
          position: relative;
          display: flex;
          gap: 28px;
          margin-bottom: 28px;
        }

        .step-number {
          flex: 0 0 56px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #12142b;
          border: 2px solid #7741ff;
          color: #ffffff;
          font-size: 17px;
          font-weight: 800;
          z-index: 2;
          box-shadow: 0 0 20px rgba(119, 65, 255, 0.2);
        }

        .roadmap-item.completed .step-number {
          background: linear-gradient(135deg, #7138ff, #a55cff);
          border-color: #b47cff;
        }

        .roadmap-card {
          flex: 1;
          padding: 28px;
          border-radius: 20px;
          border: 1px solid rgba(132, 94, 218, 0.27);
          background: linear-gradient(
            135deg,
            rgba(26, 24, 56, 0.95),
            rgba(13, 16, 39, 0.96)
          );
          transition: 0.3s;
        }

        .roadmap-card:hover {
          transform: translateY(-3px);
          border-color: rgba(167, 113, 255, 0.65);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
        }

        .roadmap-item.completed .roadmap-card {
          border-color: rgba(128, 93, 255, 0.7);
          background: linear-gradient(
            135deg,
            rgba(45, 29, 78, 0.95),
            rgba(15, 18, 42, 0.96)
          );
        }

        .card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .card-title-area {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .step-icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(113, 62, 255, 0.15);
          border: 1px solid rgba(146, 97, 255, 0.3);
          font-size: 25px;
          flex-shrink: 0;
        }

        .step-label {
          color: #a879ff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .card-title-area h3 {
          margin: 0;
          font-size: 22px;
        }

        .level-badge {
          padding: 7px 12px;
          border-radius: 20px;
          color: #bfa3ff;
          background: rgba(128, 73, 255, 0.13);
          border: 1px solid rgba(142, 89, 255, 0.25);
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
        }

        .roadmap-card p {
          margin: 20px 0;
          color: #b5b6c8;
          line-height: 1.6;
          font-size: 14px;
        }

        .skills-label {
          color: #a879ff;
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          padding: 7px 11px;
          border-radius: 8px;
          color: #d6d6e5;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.09);
          font-size: 11px;
        }

        .card-action {
          display: flex;
          justify-content: flex-end;
          margin-top: 22px;
        }

        .complete-button {
          border: none;
          padding: 10px 18px;
          border-radius: 10px;
          color: #ffffff;
          background: linear-gradient(90deg, #6832e9, #914cff);
          cursor: pointer;
          font-weight: 700;
          font-size: 12px;
          transition: 0.25s;
        }

        .complete-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(120, 58, 255, 0.3);
        }

        .complete-button.done {
          background: rgba(60, 190, 130, 0.15);
          border: 1px solid rgba(60, 220, 150, 0.35);
          color: #73e5b0;
        }

        .roadmap-cta {
          width: min(1100px, 90%);
          margin: 0 auto 55px;
          padding: 32px 40px;
          border-radius: 22px;
          border: 1px solid rgba(137, 83, 255, 0.3);
          background: linear-gradient(
            110deg,
            rgba(46, 25, 82, 0.95),
            rgba(18, 21, 49, 0.95)
          );
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .cta-content {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .cta-rocket {
          font-size: 52px;
        }

        .cta-content h2 {
          margin: 0 0 7px;
          font-size: 23px;
        }

        .cta-content p {
          margin: 0;
          color: #a9aabd;
          font-size: 13px;
          line-height: 1.5;
        }

        .dashboard-button {
          border: none;
          min-width: 220px;
          padding: 14px 25px;
          border-radius: 28px;
          background: linear-gradient(90deg, #7332ed, #a04cff);
          color: #ffffff;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(119, 50, 237, 0.25);
          transition: 0.25s;
        }

        .dashboard-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 35px rgba(119, 50, 237, 0.38);
        }

        .roadmap-footer {
          text-align: center;
          padding: 25px 15px 35px;
          color: #77798f;
          font-size: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .heart {
          color: #a86cff;
        }

        @media (max-width: 850px) {
          .roadmap-navbar {
            padding: 0 3%;
          }

          .roadmap-nav {
            gap: 8px;
          }

          .roadmap-nav button {
            padding: 7px;
            font-size: 12px;
          }

          .roadmap-cta {
            flex-direction: column;
            text-align: center;
          }

          .cta-content {
            flex-direction: column;
          }
        }

        @media (max-width: 650px) {
          .roadmap-navbar {
            height: auto;
            min-height: 64px;
            padding: 12px 15px;
            gap: 10px;
          }

          .roadmap-nav {
            display: none;
          }

          .roadmap-logo {
            font-size: 17px;
          }

          .profile-circle {
            width: 36px;
            height: 36px;
          }

          .roadmap-hero {
            padding: 45px 20px 30px;
          }

          .roadmap-hero h1 {
            font-size: 34px;
          }

          .roadmap-summary,
          .journey-section,
          .roadmap-cta {
            width: 92%;
          }

          .roadmap-summary {
            padding: 20px;
          }

          .summary-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 7px;
          }

          .roadmap-list::before {
            left: 21px;
          }

          .roadmap-item {
            gap: 15px;
          }

          .step-number {
            flex: 0 0 44px;
            width: 44px;
            height: 44px;
            font-size: 14px;
          }

          .roadmap-card {
            padding: 20px;
          }

          .card-top {
            flex-direction: column;
          }

          .level-badge {
            align-self: flex-start;
          }

          .card-title-area h3 {
            font-size: 19px;
          }

          .roadmap-cta {
            padding: 28px 20px;
          }

          .dashboard-button {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="roadmap-navbar">
        <div className="roadmap-logo">
          <span className="logo-rocket">🚀</span>
          <span className="logo-white">CareerCopilot</span>
          <span className="logo-purple">AI</span>
        </div>

        <div className="roadmap-nav">
          <button onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>

          <button onClick={() => navigate("/career-match")}>
            Career Match
          </button>

          <button className="active">
            Roadmap
          </button>

          <button onClick={() => navigate("/resume-analyzer")}>
            Resume Analyzer
          </button>

          <button onClick={() => navigate("/skill-recommendations")}>
            Skill Recommendations
          </button>
        </div>

        <div className="profile-circle">👤</div>
      </nav>

      {/* HERO */}
      <section className="roadmap-hero">
        <div className="hero-badge">🗺️ AI CAREER ROADMAP</div>

        <h1>
          Build your path to{" "}
          <span className="gradient-text">Full Stack Developer</span> 🚀
        </h1>

        <p>
          Follow a structured learning journey designed to help you build
          practical skills, real-world projects and the experience needed
          for your career.
        </p>
      </section>

      {/* PROGRESS */}
      <section className="roadmap-summary">
        <div className="summary-top">
          <div className="summary-title">
            📚 Full Stack Developer Roadmap
          </div>

          <div className="summary-count">
            {completedSteps.length} / {roadmapSteps.length} Steps Completed
          </div>
        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="progress-text">
          Your learning progress: {progress}%
        </div>
      </section>

      {/* ROADMAP */}
      <section className="journey-section">
        <div className="section-heading">
          <h2>Your Learning Journey</h2>
          <p>
            Complete each stage and build projects along the way.
          </p>
        </div>

        <div className="roadmap-list">
          {roadmapSteps.map((step) => {
            const isCompleted = completedSteps.includes(step.number);

            return (
              <div
                className={`roadmap-item ${
                  isCompleted ? "completed" : ""
                }`}
                key={step.number}
              >
                <div className="step-number">
                  {isCompleted ? "✓" : step.number}
                </div>

                <div className="roadmap-card">
                  <div className="card-top">
                    <div className="card-title-area">
                      <div className="step-icon">{step.icon}</div>

                      <div>
                        <div className="step-label">
                          Step {step.number}
                        </div>

                        <h3>{step.title}</h3>
                      </div>
                    </div>

                    <div className="level-badge">
                      {step.level}
                    </div>
                  </div>

                  <p>{step.description}</p>

                  <div className="skills-label">
                    WHAT TO LEARN
                  </div>

                  <div className="skills-list">
                    {step.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="card-action">
                    <button
                      className={`complete-button ${
                        isCompleted ? "done" : ""
                      }`}
                      onClick={() => toggleStep(step.number)}
                    >
                      {isCompleted
                        ? "✓ Completed"
                        : "Mark as Complete"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* CTA */}
<section className="roadmap-cta">
  <div className="cta-content">
    <div className="cta-rocket">🚀</div>

    <div>
      <h2>Keep learning. Keep building. ✨</h2>

      <p>
        Complete each stage and build real-world
        projects for your portfolio.
      </p>
    </div>
  </div>

  <button
    className="dashboard-button"
    onClick={() => navigate("/dashboard")}
  >
    ← Back to Dashboard
  </button>
</section>

{/* FOOTER */}
<footer className="roadmap-footer">
  © 2026 CareerCopilot AI. All rights reserved.{" "}
  <span className="heart">♥</span>
</footer>

</div>
  );
};

export default CareerRoadmap;