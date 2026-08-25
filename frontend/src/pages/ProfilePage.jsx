import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      {/* Profile Header */}
      <section className="profile-hero">
        <div className="profile-card">
          <div className="profile-photo-wrapper">
            <img
              src="/my-profile.jpg"
              alt="Profile"
              className="profile-photo"
            />
            <span className="profile-status"></span>
          </div>

          <div className="profile-main-info">
            <span className="profile-badge">✨ CAREERCOPILOT AI</span>

            <h1>Indu</h1>

            <h2>Information Science Engineering Student</h2>

            <p className="profile-description">
              Passionate about Full Stack Development, Artificial Intelligence
              and building practical technology solutions for the future.
            </p>

            <div className="profile-tags">
              <span>🎓 5th Semester</span>
              <span>💻 Full Stack Development</span>
              <span>🤖 AI &amp; Technology</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="profile-content">
        {/* About */}
        <div className="profile-section about-section">
          <div className="section-heading">
            <span className="section-icon">👋</span>
            <div>
              <h3>About Me</h3>
              <p>A quick introduction</p>
            </div>
          </div>

          <p className="about-text">
            I am an Information Science Engineering student interested in
            software development, artificial intelligence and modern web
            technologies. I enjoy learning by building projects and turning
            ideas into useful applications.
          </p>
        </div>

        {/* Education + Career */}
        <div className="profile-grid">
          <div className="profile-section">
            <div className="section-heading">
              <span className="section-icon">🎓</span>
              <div>
                <h3>Education</h3>
                <p>Academic journey</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-dot"></div>
              <div>
                <h4>B.E. Information Science Engineering</h4>
                <p>5th Semester</p>
                <span>Currently pursuing</span>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <div className="section-heading">
              <span className="section-icon">🎯</span>
              <div>
                <h3>Career Goal</h3>
                <p>What I'm working towards</p>
              </div>
            </div>

            <div className="goal-box">
              <strong>AI-Integrated Full Stack Developer</strong>
              <p>
                Building strong skills in frontend, backend, databases and
                AI-powered applications.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="profile-section">
          <div className="section-heading">
            <span className="section-icon">⚡</span>
            <div>
              <h3>Technical Skills</h3>
              <p>Technologies I'm learning and using</p>
            </div>
          </div>

          <div className="skill-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>Git &amp; GitHub</span>
            <span>REST APIs</span>
            <span>JWT</span>
            <span>AI Integration</span>
          </div>
        </div>

        {/* Current Project */}
        <div className="profile-section project-section">
          <div className="section-heading">
            <span className="section-icon">🚀</span>
            <div>
              <h3>Featured Project</h3>
              <p>What I'm currently building</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-top">
              <div>
                <span className="project-label">AI PROJECT</span>
                <h4>CareerCopilot AI</h4>
              </div>

              <span className="project-status">● In Progress</span>
            </div>

            <p>
              An AI-powered career guidance platform that helps students
              discover career paths, improve their skills and get personalized
              career recommendations.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Gemini AI</span>
            </div>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="profile-stats">
          <div className="stat-card">
            <span>🎓</span>
            <strong>5th</strong>
            <p>Semester</p>
          </div>

          <div className="stat-card">
            <span>💻</span>
            <strong>10+</strong>
            <p>Technologies</p>
          </div>

          <div className="stat-card">
            <span>🚀</span>
            <strong>1</strong>
            <p>AI Project</p>
          </div>

          <div className="stat-card">
            <span>📚</span>
            <strong>∞</strong>
            <p>Learning</p>
          </div>
        </div>
      </section>
      <Link to="/" className="back-home">
  ← Back to Home
</Link>
    </div>
  );
};

export default Profile;
