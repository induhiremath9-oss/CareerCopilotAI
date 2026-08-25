import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const stats = [
  {
    number: "92%",
    label: "Career Match",
  },
  {
    number: "12",
    label: "Skills to Learn",
  },
  {
    number: "68%",
    label: "Career Progress",
  },
  {
    number: "7.9",
    label: "Profile Score",
  },
];

const tools = [
  {
    title: "AI Resume Analysis",
    description:
      "Analyze your resume and discover strengths, missing skills, and areas for improvement.",
    button: "Analyze Resume",
    path: "/resume-analyzer",
  },
  {
    title: "Personalized Career Match",
    description:
      "Find career paths that match your skills, interests, strengths, and goals.",
    button: "Explore Careers",
    path: "/career-match",
  },
  {
    title: "Career Roadmap",
    description:
      "Build a personalized step-by-step roadmap to reach your target career.",
    button: "View Roadmap",
    path: "/career-roadmap",
  },
  {
    title: "AI Career Guidance",
    description:
      "Get personalized guidance and practical suggestions for your career journey.",
    button: "Get Guidance",
    path: "/skills",
  },
];

function Dashboard() {
  return (
    <div className="dashboard-page">
      <header className="dashboard-navbar">
        <div className="brand">
          <div className="brand-logo">AI</div>
          <div>
            <h2>CareerCopilot</h2>
            <span>AI Career Assistant</span>
          </div>
        </div>

        <nav className="dashboard-nav">
          <Link to="/profile" className="profile-link">
            Profile
          </Link>
          <Link to="/">Home</Link>
          <Link to="/dashboard" className="active">
            Dashboard
          </Link>
          <Link to="/career-match">Career Match</Link>
          <Link to="/career-roadmap">Roadmap</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/login" className="logout-button">
            Logout
          </Link>
        </nav>
      </header>

      <main className="dashboard-container">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">AI POWERED CAREER PLATFORM</div>

            <h1>
              Welcome back, Indu!
              <br />
              <span>Career Explorer</span>
            </h1>

            <p>
              Your career journey starts here. Discover your strengths,
              improve your skills, and build a clear path toward your dream
              career with AI.
            </p>

            <div className="hero-buttons">
              <Link to="/career-roadmap" className="primary-button">
                Continue Your Journey
              </Link>

              <Link to="/career-match" className="secondary-button">
                Explore Career Match
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow-circle"></div>

            <img
              src="/career-woman.png"
              alt="Career professional working with AI"
              className="career-image"
            />

            <div className="floating-card card-one">
              <strong>92%</strong>
              <span>Career Match</span>
            </div>

            <div className="floating-card card-two">
              <strong>AI</strong>
              <span>Smart Guidance</span>
            </div>

            <div className="floating-card card-three">
              <strong>68%</strong>
              <span>Career Progress</span>
            </div>
          </div>
        </section>

        <section className="stats-section">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </section>

        <section className="tools-section">
          <div className="section-heading">
            <span>YOUR AI TOOLKIT</span>
            <h2>Powerful tools for your career</h2>
            <p>
              Everything you need to understand, plan, and grow your career.
            </p>
          </div>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div className="tool-card" key={tool.title}>
                <div className="tool-number">
                  0{index + 1}
                </div>

                <h3>{tool.title}</h3>

                <p>{tool.description}</p>

                <Link to={tool.path} className="tool-link">
                  {tool.button}
                  <span> -&gt; </span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="progress-section">
          <div className="progress-content">
            <span>YOUR PROGRESS</span>

            <h2>Keep building your future</h2>

            <p>
              Keep learning and improving your profile. Every skill you add
              takes you one step closer to your dream career.
            </p>
          </div>

          <div className="progress-circle">
            <div>
              <strong>68%</strong>
              <span>Complete</span>
            </div>
          </div>
        </section>

        <section className="quick-section">
          <div>
            <span>READY TO GROW?</span>
            <h2>Your next career move starts here.</h2>
            <p>
              Explore your career options and create a personalized plan with
              CareerCopilot.
            </p>
          </div>

          <Link to="/career-match" className="primary-button">
            Start Exploring
          </Link>
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>CareerCopilot - AI Career Assistant</p>
        <p>Build your future with confidence.</p>
      </footer>
    </div>
  );
}

export default Dashboard;