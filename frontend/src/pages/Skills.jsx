import React from "react";
import { useNavigate } from "react-router-dom";
import "./Skills.css";

const skills = [
  {
    icon: "TS",
    iconClass: "typescript",
    title: "TypeScript",
    priority: "HIGH PRIORITY",
    priorityClass: "high",
    description:
      "You already know JavaScript and React. TypeScript will help you build safer and more professional applications.",
    topics: ["Types", "Interfaces", "Generics", "React with TypeScript"],
  },
  {
    icon: "🐍",
    iconClass: "python",
    title: "Python",
    priority: "HIGH PRIORITY",
    priorityClass: "high",
    description:
      "Python is useful for AI, automation, data processing and backend development.",
    topics: ["Python Basics", "OOP", "APIs", "AI Libraries"],
  },
  {
    icon: "⌘",
    iconClass: "github",
    title: "Git & GitHub",
    priority: "HIGH PRIORITY",
    priorityClass: "high",
    description:
      "GitHub helps you manage, showcase and share your projects with recruiters.",
    topics: ["Git", "Branches", "Commits", "Pull Requests"],
  },
  {
    icon: "</>",
    iconClass: "api",
    title: "REST API Development",
    priority: "MEDIUM PRIORITY",
    priorityClass: "medium",
    description:
      "You are already using Node.js and Express.js. Stronger API knowledge will improve your backend skills.",
    topics: ["HTTP", "REST", "CRUD", "Authentication", "API Testing"],
  },
  {
    icon: "▣",
    iconClass: "sql",
    title: "SQL & Databases",
    priority: "MEDIUM PRIORITY",
    priorityClass: "medium",
    description:
      "SQL is an important skill for software development and database-related jobs.",
    topics: ["SELECT", "JOIN", "GROUP BY", "Database Design"],
  },
  {
    icon: "✓",
    iconClass: "testing",
    title: "Testing",
    priority: "MEDIUM PRIORITY",
    priorityClass: "medium",
    description:
      "Testing skills help you create reliable, maintainable and professional applications.",
    topics: ["Jest", "Unit Testing", "API Testing"],
  },
];

const Skills = () => {
  const navigate = useNavigate();

  return (
    <div className="skills-page">
      {/* Background decoration */}
      <div className="skills-glow skills-glow-one"></div>
      <div className="skills-glow skills-glow-two"></div>

      {/* Top navigation */}
      <header className="skills-header">
        <div
          className="skills-brand"
          onClick={() => navigate("/dashboard")}
        >
          <div className="skills-brand-icon">🚀</div>
          <div>
            <div className="skills-brand-name">CareerCopilot AI</div>
            <div className="skills-brand-subtitle">AI Career Assistant</div>
          </div>
        </div>

        <nav className="skills-nav">
          <button onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button onClick={() => navigate("/career-roadmap")}>
            Career Roadmap
          </button>
          <button className="skills-nav-active">Skills</button>
        </nav>

        <button
          className="skills-profile"
          onClick={() => navigate("/profile")}
          aria-label="Profile"
        >
          👤
        </button>
      </header>

      {/* Hero */}
      <main className="skills-main">
        <section className="skills-hero">
          <div className="skills-hero-badge">
            ✨ AI POWERED TOOL
          </div>

          <h1>
            Skill Recommendations
            <span> 🚀</span>
          </h1>

          <p>
            Discover the most in-demand skills you should learn next
            <br />
            based on your career goal and current knowledge.
          </p>

          <div className="skills-personalized">
            <span>⭐</span>
            <div>
              <strong>Personalized for your Full Stack Development</strong>
              <small>and AI career path</small>
            </div>
          </div>
        </section>

        {/* Section heading */}
        <section className="skills-section-heading">
          <div>
            <div className="skills-heading-title">
              <span>⭐</span>
              <h2>Recommended Skills For You</h2>
            </div>

            <p>
              These skills can strengthen your technical knowledge,
              projects and job readiness.
            </p>
          </div>

          <div className="skills-page-badge">
            <span>▤</span>
            Page 6 of 7
          </div>
        </section>

        {/* Stats */}
        <section className="skills-stats">
          <div className="skills-stat-card">
            <div className="skills-stat-icon">🎯</div>
            <div>
              <strong>6</strong>
              <span>Recommended Skills</span>
            </div>
          </div>

          <div className="skills-stat-card">
            <div className="skills-stat-icon">🔥</div>
            <div>
              <strong>3</strong>
              <span>High Priority</span>
            </div>
          </div>

          <div className="skills-stat-card">
            <div className="skills-stat-icon">💼</div>
            <div>
              <strong>Full Stack</strong>
              <span>Career Goal</span>
            </div>
          </div>

          <div className="skills-stat-card">
            <div className="skills-stat-icon">🚀</div>
            <div>
              <strong>Career Ready</strong>
              <span>Learning Path</span>
            </div>
          </div>
        </section>

        {/* Skills grid */}
        <section className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skills-card" key={skill.title}>
              <div className="skills-card-top">
                <div className={`skills-icon ${skill.iconClass}`}>
                  {skill.icon}
                </div>

                <div className="skills-card-title-area">
                  <h3>{skill.title}</h3>

                  <span
                    className={`skills-priority ${skill.priorityClass}`}
                  >
                    ★ {skill.priority}
                  </span>
                </div>
              </div>

              <p className="skills-description">
                {skill.description}
              </p>

              <div className="skills-topics-title">
                Topics to learn
              </div>

              <div className="skills-topic-list">
                {skill.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>

              <div className="skills-card-bottom">
                <div className="skills-progress">
                  <div className="skills-progress-label">
                    <span>Learning path</span>
                    <span>{index < 3 ? "Start here" : "Next step"}</span>
                  </div>

                  <div className="skills-progress-track">
                    <div
                      className={`skills-progress-fill ${
                        index < 3 ? "strong" : ""
                      }`}
                    ></div>
                  </div>
                </div>

                <button
                  className="skills-learn-btn"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/search?q=${encodeURIComponent(
                        `learn ${skill.title}`
                      )}`,
                      "_blank"
                    )
                  }
                >
                  Start Learning
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom CTA */}
        <section className="skills-cta">
          <div className="skills-cta-decoration skills-rocket">
            🚀
          </div>

          <div className="skills-cta-content">
            <div className="skills-cta-label">
              ✨ YOUR NEXT MOVE
            </div>

            <h2>
              Learn. Build. Get Hired.
            </h2>

            <p>
              Start with the high-priority skills and build a small
              project after learning each major skill.
            </p>

            <div className="skills-cta-steps">
              <div>
                <span>📚</span>
                <strong>Learn</strong>
              </div>

              <div className="skills-cta-line"></div>

              <div>
                <span>💻</span>
                <strong>Build</strong>
              </div>

              <div className="skills-cta-line"></div>

              <div>
                <span>💼</span>
                <strong>Get Hired</strong>
              </div>
            </div>
          </div>

          <div className="skills-cta-orbit">
            ✦
          </div>
        </section>

        {/* Footer */}
        <footer className="skills-footer">
          <span>🚀 CareerCopilot AI</span>
          <span>Keep learning, keep building, keep growing 💜</span>
        </footer>
      </main>
    </div>
  );
};

export default Skills;