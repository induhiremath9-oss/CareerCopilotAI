import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import CareerRoadmap from "./pages/CareerRoadmap";
import CareerMatch from "./pages/CareerMatch.jsx";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Skills from "./pages/Skills";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/ProfilePage";

/* =========================
   PROFESSIONAL DASHBOARD
========================= */

function OldDashboard() {
  const cards = [
    {
      icon: "Ÿ“„",
      title: "AI Resume Analysis",
      text: "Analyze your resume, discover strengths, and identify areas for improvement.",
      path: "/resume-analyzer",
      action: "Analyze Resume",
    },
    {
      icon: "ŸŽ¯",
      title: "Personalized Career Match",
      text: "Find career paths that match your skills, interests, and goals.",
      path: "/career-match",
      action: "Explore Careers",
    },
    {
      icon: "Ÿ—ºï¸",
      title: "Career Roadmap",
      text: "Build a personalized step-by-step roadmap for your career growth.",
      path: "/career-roadmap",
      action: "View Roadmap",
    },
    {
      icon: "Ÿ’¡",
      title: "AI Career Guidance",
      text: "Get personalized guidance to make smarter career decisions.",
      path: "/skills",
      action: "Get Guidance",
    },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <Link to="/dashboard" style={styles.brand}>
          <div style={styles.logo}>AI</div>
          <div>
            <div style={styles.brandName}>CareerCopilot</div>
            <div style={styles.brandSub}>AI Career Assistant</div>
          </div>
        </Link>

        <nav style={styles.nav}>
          <Link to="/profile">Profile</Link>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/dashboard" style={styles.activeNav}>Dashboard</Link>
          <Link to="/career-match" style={styles.navLink}>Career Match</Link>
          <Link to="/career-roadmap" style={styles.navLink}>Roadmap</Link>
          <Link to="/skills" style={styles.navLink}>Skills</Link>
          <Link to="/login" style={styles.navButton}>Logout</Link>
        </nav>
      </header>

      <main style={styles.container}>
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <div style={styles.badge}>AI POWERED PERSONALIZED CAREER DASHBOARD</div>

            <h1 style={styles.heroTitle}>
              Welcome back,
              <br />
              <span style={styles.gradientText}>Career Explorer</span>
            </h1>

            <p style={styles.heroText}>
              Your career journey starts here. Discover your strengths,
              improve your skills, and build a clear path toward your dream
              career with AI.
            </p>

            <div style={styles.actions}>
              <Link to="/career-roadmap" style={styles.primaryButton}>
                Ÿš€ Continue Your Journey
              </Link>
              <Link to="/career-match" style={styles.secondaryButton}>
                Explore Career Match â†’
              </Link>
            </div>
          </div>

          <div style={styles.visual}>
            <div style={styles.visualGlow}></div>
            <div style={styles.avatarCircle}>
              <div style={styles.avatar}>Ÿ‘©Ÿ»â€Ÿ’»</div>
            </div>

            <div style={{...styles.floatingCard, ...styles.floatOne}}>
              <span style={styles.floatIcon}>ŸŽ¯</span>
              <div>
                <b>Career Match</b>
                <small>92% compatible</small>
              </div>
            </div>

            <div style={{...styles.floatingCard, ...styles.floatTwo}}>
              <span style={styles.floatIcon}>Ÿ“ˆ</span>
              <div>
                <b>AI Readiness</b>
                <small>Excellent progress</small>
              </div>
            </div>

            <div style={{...styles.floatingCard, ...styles.floatThree}}>
              <span style={styles.floatIcon}>âœ¨</span>
              <div>
                <b>Next Goal</b>
                <small>Build your skills</small>
              </div>
            </div>
          </div>
        </section>
        <section style={styles.stats}>
          <Stat icon="ŸŽ¯" number="92%" label="Career Match" />
          <Stat icon="Ÿ“š" number="12" label="Skills to Learn" />
          <Stat icon="Ÿš€" number="68%" label="Career Progress" />
          <Stat icon="Ÿ†" number="7.9" label="Profile Score" />
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>YOUR AI TOOLKIT</span>
            <h2 style={styles.sectionTitle}>Everything you need</h2>
            <p style={styles.sectionText}>
              Powerful tools to help you understand, plan, and grow your career.
            </p>
          </div>

          <div style={styles.cardGrid}>
            {cards.map((card) => (
              <div
                key={card.title}
                style={styles.toolCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-7px)";
                  e.currentTarget.style.borderColor = "#8878ff";
                  e.currentTarget.style.boxShadow =
                    "0 18px 45px rgba(92,75,255,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor =
                    "rgba(139,124,255,0.22)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={styles.cardIcon}>{card.icon}</div>
                <h3 style={styles.cardTitle}>{card.title}</h3>
                <p style={styles.cardText}>{card.text}</p>
                <Link to={card.path} style={styles.cardLink}>
                  {card.action} â†’
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.progressBox}>
          <div style={{flex: 1}}>
            <span style={styles.sectionTag}>YOUR PROGRESS</span>
            <h2 style={styles.progressTitle}>
              You're building your future Ÿš€
            </h2>
            <p style={styles.progressText}>
              Keep learning and improving your profile. Every skill you add
              takes you one step closer to your dream career.
            </p>
            <Link to="/career-roadmap" style={styles.primaryButton}>
              View My Roadmap â†’
            </Link>
          </div>

          <div style={styles.progressRing}>
            <div style={styles.progressInner}>
              <strong>68%</strong>
              <span>Complete</span>
            </div>
          </div>
        </section>

        <section style={styles.cta}>
          <div style={styles.ctaIcon}>Ÿ¤–</div>
          <div style={{flex: 1}}>
            <span style={styles.sectionTag}>CAREERCOPILOT AI</span>
            <h2 style={styles.ctaTitle}>Ready for your next career move?</h2>
            <p style={styles.ctaText}>
              Let AI help you understand your strengths and create a
              personalized career plan.
            </p>
          </div>
          <Link to="/career-match" style={styles.primaryButton}>
            Start Now â†’
          </Link>
        </section>
      </main>

      <footer style={styles.footer}>
        <span>CareerCopilot AI â€” Your intelligent career companion.</span>
        <span>Â© 2026 CareerCopilot AI</span>
      </footer>
    </div>
  );
}

function Stat({ icon, number, label }) {
  return (
    <div style={styles.statCard}>
      <div style={styles.statIcon}>{icon}</div>
      <div>
        <strong style={styles.statNumber}>{number}</strong>
        <div style={styles.statLabel}>{label}</div>
      </div>
    </div>
  );
}

/* =========================
   APP ROUTES
========================= */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/career-roadmap" element={<CareerRoadmap />} />
        <Route
          path="/roadmap"
          element={<Navigate to="/career-roadmap" replace />}
        />

        <Route path="/career-match" element={<CareerMatch />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/profile" element={<Profile />} />

        {/* Both names work now */}
        <Route
          path="/skill-recommendations"
          element={<Navigate to="/skills" replace />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/signup"
          element={<Navigate to="/register" replace />}
        />

        {/* No NotFound component needed */}
        <Route
          path="*"
          element={
            <div style={styles.notFound}>
              <div style={styles.notFoundBox}>
                <div style={{fontSize: "55px"}}>Ÿš€</div>
                <h1 style={{margin: "10px 0"}}>404</h1>
                <p style={{color: "#9999ad"}}>
                  This page could not be found.
                </p>
                <Link to="/dashboard" style={styles.primaryButton}>
                  Back to Dashboard
                </Link>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

/* =========================
   STYLES
========================= */

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 12% 12%, rgba(100,80,255,.18), transparent 28%), radial-gradient(circle at 85% 18%, rgba(255,80,190,.12), transparent 25%), #070711",
    color: "#fff",
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    minHeight: "72px",
    padding: "0 5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    background: "rgba(7,7,17,.9)",
    backdropFilter: "blur(18px)",
    borderBottom: "1px solid rgba(255,255,255,.08)",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
    textDecoration: "none",
    color: "#fff",
  },

  logo: {
    width: "42px",
    height: "42px",
    borderRadius: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontSize: "13px",
    background: "linear-gradient(135deg,#6c5cff,#a951ff)",
    boxShadow: "0 0 28px rgba(105,85,255,.45)",
  },

  brandName: {
    fontWeight: 850,
    fontSize: "17px",
  },

  brandSub: {
    color: "#85859c",
    fontSize: "10px",
    marginTop: "2px",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },

  navLink: {
    color: "#aaaabd",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: 650,
  },

  activeNav: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: 800,
  },

  navButton: {
    color: "#fff",
    textDecoration: "none",
    padding: "9px 15px",
    borderRadius: "10px",
    background: "linear-gradient(135deg,#6c5cff,#a451ff)",
    fontSize: "11px",
    fontWeight: 800,
  },

  container: {
    width: "90%",
    maxWidth: "1250px",
    margin: "0 auto",
  },

  hero: {
    minHeight: "540px",
    display: "grid",
    gridTemplateColumns: "1.1fr .9fr",
    alignItems: "center",
    gap: "40px",
    padding: "55px 0 35px",
  },

  heroContent: {
    maxWidth: "650px",
  },

  badge: {
    display: "inline-block",
    padding: "9px 14px",
    borderRadius: "50px",
    border: "1px solid rgba(130,110,255,.5)",
    color: "#b9afff",
    background: "rgba(100,80,255,.08)",
    fontSize: "10px",
    fontWeight: 850,
    letterSpacing: "1px",
  },

  heroTitle: {
    fontSize: "clamp(42px,6vw,72px)",
    lineHeight: ".98",
    letterSpacing: "-3px",
    margin: "24px 0",
    fontWeight: 900,
  },

  gradientText: {
    background: "linear-gradient(90deg,#fff,#aaa0ff,#ff9dd8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  heroText: {
    color: "#a4a4b9",
    fontSize: "15px",
    lineHeight: 1.8,
    maxWidth: "610px",
    marginBottom: "28px",
  },

  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },

  primaryButton: {
    display: "inline-block",
    textDecoration: "none",
    color: "#fff",
    padding: "13px 20px",
    borderRadius: "11px",
    background: "linear-gradient(135deg,#6c5cff,#a451ff)",
    fontWeight: 800,
    fontSize: "12px",
    boxShadow: "0 10px 28px rgba(100,80,255,.25)",
  },

  secondaryButton: {
    display: "inline-block",
    textDecoration: "none",
    color: "#d8d3ff",
    padding: "12px 19px",
    borderRadius: "11px",
    border: "1px solid rgba(139,124,255,.35)",
    background: "rgba(255,255,255,.035)",
    fontWeight: 750,
    fontSize: "12px",
  },

  visual: {
    height: "420px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  visualGlow: {
    position: "absolute",
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle,rgba(100,85,255,.42),rgba(190,70,255,.08),transparent 70%)",
    filter: "blur(10px)",
  },

  avatarCircle: {
    width: "270px",
    height: "270px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    background:
      "linear-gradient(145deg,rgba(100,90,255,.28),rgba(255,100,200,.10))",
    border: "1px solid rgba(150,130,255,.4)",
    boxShadow:
      "0 0 80px rgba(103,86,255,.25), inset 0 0 50px rgba(255,255,255,.04)",
  },

  avatar: {
    fontSize: "125px",
    filter: "drop-shadow(0 15px 25px rgba(0,0,0,.5))",
  },
  floatingCard: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: "9px",
    padding: "12px 14px",
    borderRadius: "13px",
    background: "rgba(17,17,33,.9)",
    border: "1px solid rgba(125,110,255,.38)",
    backdropFilter: "blur(14px)",
    fontSize: "11px",
  },

  floatIcon: {
    fontSize: "20px",
  },

  floatOne: {
    top: "42px",
    right: "0",
  },

  floatTwo: {
    left: "0",
    top: "165px",
  },

  floatThree: {
    right: "20px",
    bottom: "42px",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "14px",
    marginBottom: "80px",
  },

  statCard: {
    display: "flex",
    alignItems: "center",
    gap: "13px",
    padding: "19px",
    borderRadius: "16px",
    background: "rgba(255,255,255,.035)",
    border: "1px solid rgba(255,255,255,.08)",
  },

  statIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(110,95,255,.12)",
    fontSize: "20px",
  },

  statNumber: {
    fontSize: "21px",
  },

  statLabel: {
    color: "#85859c",
    fontSize: "10px",
    marginTop: "4px",
  },

  section: {
    marginBottom: "70px",
  },

  sectionHeader: {
    marginBottom: "27px",
  },

  sectionTag: {
    color: "#9d8fff",
    fontSize: "9px",
    fontWeight: 900,
    letterSpacing: "2px",
  },

  sectionTitle: {
    fontSize: "34px",
    margin: "8px 0",
    letterSpacing: "-1px",
  },

  sectionText: {
    color: "#85859c",
    margin: 0,
    fontSize: "13px",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "17px",
  },

  toolCard: {
    minHeight: "285px",
    padding: "23px",
    borderRadius: "19px",
    background:
      "linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018))",
    border: "1px solid rgba(139,124,255,.22)",
    transition: "all .25s ease",
  },

  cardIcon: {
    width: "50px",
    height: "50px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "23px",
    background: "rgba(111,92,255,.12)",
  },

  cardTitle: {
    fontSize: "17px",
    margin: "22px 0 10px",
  },

  cardText: {
    color: "#89899f",
    lineHeight: 1.65,
    fontSize: "12px",
    minHeight: "78px",
  },

  cardLink: {
    color: "#aaa0ff",
    textDecoration: "none",
    fontSize: "11px",
    fontWeight: 850,
  },

  progressBox: {
    margin: "20px 0 70px",
    padding: "42px",
    borderRadius: "24px",
    display: "flex",
    alignItems: "center",
    gap: "35px",
    background:
      "linear-gradient(120deg,rgba(90,75,255,.13),rgba(255,80,180,.07))",
    border: "1px solid rgba(139,124,255,.22)",
  },

  progressTitle: {
    fontSize: "30px",
    margin: "8px 0 10px",
  },

  progressText: {
    color: "#9696aa",
    lineHeight: 1.7,
    maxWidth: "650px",
    fontSize: "13px",
    marginBottom: "24px",
  },

  progressRing: {
    width: "145px",
    height: "145px",
    flexShrink: 0,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "conic-gradient(#8a78ff 68%,rgba(255,255,255,.08) 68%)",
  },

  progressInner: {
    width: "108px",
    height: "108px",
    borderRadius: "50%",
    background: "#0b0b17",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  cta: {
    marginBottom: "70px",
    padding: "32px",
    display: "flex",
    alignItems: "center",
    gap: "22px",
    borderRadius: "21px",
    background: "rgba(255,255,255,.035)",
    border: "1px solid rgba(255,255,255,.08)",
  },

  ctaIcon: {
    fontSize: "42px",
  },

  ctaTitle: {
    margin: "7px 0",
    fontSize: "25px",
  },

  ctaText: {
    color: "#85859d",
    margin: 0,
    fontSize: "12px",
  },

  footer: {
    padding: "28px 5%",
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    flexWrap: "wrap",
    color: "#69697c",
    fontSize: "10px",
    borderTop: "1px solid rgba(255,255,255,.07)",
  },

  notFound: {
    minHeight: "100vh",
    background: "#070711",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },

  notFoundBox: {
    padding: "45px",
    borderRadius: "20px",
    background: "rgba(255,255,255,.04)",
    border: "1px solid rgba(139,124,255,.25)",
  },
};

export default App;