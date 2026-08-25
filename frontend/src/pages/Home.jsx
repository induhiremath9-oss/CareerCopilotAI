import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="home-navbar">
        <div className="brand">
          <div className="brand-logo">AI</div>
          <div>
            <h2>CareerCopilot AI</h2>
            <span>AI Career Assistant</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <Link to="/dashboard" className="nav-dashboard">
          Dashboard
        </Link>
      </nav>

      {/* HERO */}
      <main className="hero-section">

        <div className="hero-content">

          <div className="hero-badge">
            ✦ AI-POWERED CAREER PLATFORM
          </div>

          <h1>
            Build Your
            <span> Career </span>
            With AI.
          </h1>

          <p>
            Discover your strengths, improve your skills, explore
            career opportunities, and build a personalized career
            path with CareerCopilot AI.
          </p>

          {/* ONLY ONE MAIN BUTTON */}
          <Link to="/dashboard" className="main-cta">
            Enter CareerCopilot
            <span> →</span>
          </Link>

          <div className="hero-note">
            Your personalized career journey starts here.
          </div>

        </div>

        {/* RIGHT SIDE VISUAL */}
        <div className="hero-visual">

          <div className="glow-circle"></div>

          <div className="ai-card main-card">
            <div className="card-top">
              <span className="status-dot"></span>
              CareerCopilot AI
            </div>

            <div className="card-content">
              <div className="score-circle">
                <strong>92%</strong>
                <small>Career Match</small>
              </div>

              <div className="mini-bars">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
                <div className="bar bar-4"></div>
              </div>
            </div>

            <div className="card-footer">
              <span>AI Resume Analysis</span>
              <span>Career Roadmap</span>
              <span>Skills</span>
            </div>
          </div>

          <div className="floating-card card-one">
            ✦ AI Guidance
          </div>

          <div className="floating-card card-two">
            ✓ Skills Match
          </div>

          <div className="floating-card card-three">
            ★ Career Growth
          </div>

        </div>
      </main>

      {/* FEATURES */}
      <section id="features" className="features-section">

        <div className="section-heading">
          <span>YOUR AI CAREER TOOLKIT</span>
          <h2>Everything You Need to Grow</h2>
          <p>
            Powerful AI tools designed to help you understand,
            plan, and improve your career.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-number">01</div>
            <h3>AI Resume Analysis</h3>
            <p>
              Analyze your resume and discover strengths,
              missing skills, and areas for improvement.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">02</div>
            <h3>Career Match</h3>
            <p>
              Find career paths that match your skills,
              interests, goals, and experience.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">03</div>
            <h3>Career Roadmap</h3>
            <p>
              Build a personalized step-by-step roadmap
              toward your dream career.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">04</div>
            <h3>AI Career Guidance</h3>
            <p>
              Get personalized guidance and practical
              recommendations for your next step.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <span>CAREERCOPILOT AI</span>
        <h2>Your Career. Your Future. Powered by AI.</h2>
        <p>
          CareerCopilot AI brings career planning, skill development,
          resume analysis, and personalized guidance together in one
          intelligent platform.
        </p>

        <Link to="/dashboard" className="secondary-cta">
          Enter Your Dashboard →
        </Link>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="home-footer">
        <div>
          <strong>CareerCopilot AI</strong>
          <span>AI Career Assistant</span>
        </div>

        <p>
          Build smarter. Learn faster. Grow your career.
        </p>

        <span>© 2026 CareerCopilot AI</span>
      </footer>

    </div>
  );
}

export default Home;