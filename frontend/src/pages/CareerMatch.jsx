import React, { useState } from "react";

function CareerMatch() {
  const [education, setEducation] = useState("");
  const [interest, setInterest] = useState("");
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const findCareer = async () => {
    if (!education.trim() || !interest.trim() || !skills.trim()) {
      setResult(
        "Please fill in all three fields before finding your career."
      );
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/ai/career-match",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            education,
            interest,
            skills,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data) {
        let finalResult = "";

        if (typeof data.result === "string") {
          finalResult = data.result;
        } else if (data.result && typeof data.result === "object") {
          finalResult = JSON.stringify(data.result, null, 2);
        } else if (typeof data.message === "string") {
          finalResult = data.message;
        } else {
          finalResult =
            "Your career recommendation has been generated successfully.";
        }

        setResult(finalResult);
      } else {
        setResult(
          "We could not generate your recommendation right now. Please try again."
        );
      }
    } catch (error) {
      console.error("Career Match Error:", error);

      setResult(
        "Unable to connect to CareerCopilot AI. Please make sure the backend server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const goToDashboard = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <header style={styles.navbar}>
        <div style={styles.logo} onClick={goToDashboard}>
          🚀 <span>CareerCopilot</span> <strong>AI</strong>
        </div>

        <nav style={styles.nav}>
          <button onClick={goToDashboard} style={styles.navButton}>
            Dashboard
          </button>

          <button
            onClick={() => (window.location.href = "/career-match")}
            style={{ ...styles.navButton, ...styles.activeNav }}
          >
            Career Match
          </button>

          <button
            onClick={() => (window.location.href = "/roadmap")}
            style={styles.navButton}
          >
            Roadmap
          </button>

          <button
            onClick={() => (window.location.href = "/resume-analyzer")}
            style={styles.navButton}
          >
            Resume Analyzer
          </button>

          <button
            onClick={() => (window.location.href = "/skill-recommendations")}
            style={styles.navButton}
          >
            Skill Recommendations
          </button>
        </nav>

        <div style={styles.profile}>IH</div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.badge}>🎯 AI CAREER GUIDANCE</div>

        <h1 style={styles.heroTitle}>
          Find the career path
          <br />
          <span>that's right for you 🚀</span>
        </h1>

        <p style={styles.heroText}>
          Discover career opportunities that match your education,
          interests and technical skills with AI-powered career guidance.
        </p>
      </section>

      {/* MAIN CARD */}
      <main style={styles.container}>
        <div style={styles.mainCard}>
          <div style={styles.cardHeading}>
            <div style={styles.headingIcon}>💬</div>

            <div>
              <h2 style={styles.cardTitle}>Tell us about yourself</h2>

              <p style={styles.cardSubtitle}>
                Enter your details and let CareerCopilot AI find suitable
                career directions for you.
              </p>
            </div>
          </div>

          {/* EDUCATION */}
          <div style={styles.inputSection}>
            <label style={styles.label}>🎓 Education</label>

            <p style={styles.example}>
              Example: BE Computer Science Engineering
            </p>

            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Enter your education"
              style={styles.input}
            />
          </div>

          {/* INTEREST */}
          <div style={styles.inputSection}>
            <label style={styles.label}>💼 Career Interest</label>

            <p style={styles.example}>
              Example: Full Stack Development, AI, Software Engineering
            </p>

            <input
              type="text"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              placeholder="Enter your career interest"
              style={styles.input}
            />
          </div>

          {/* SKILLS */}
          <div style={styles.inputSection}>
            <label style={styles.label}>⚡ Your Skills</label>

            <p style={styles.example}>
              Example: HTML, CSS, JavaScript, React, Node.js, MongoDB
            </p>

            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Enter your skills"
              style={styles.input}
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={findCareer}
            disabled={loading}
            style={{
              ...styles.findButton,
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "🤖 AI is analyzing your profile..." : "🚀 Find My Career →"}
          </button>

          {/* RESULT */}
          {result && (
            <div style={styles.resultCard}>
              <div style={styles.resultHeader}>
                <span style={styles.resultIcon}>✨</span>

                <div>
                  <h3 style={styles.resultTitle}>Your Career Insight</h3>

                  <p style={styles.resultSubtitle}>
                    Personalized recommendation from CareerCopilot AI
                  </p>
                </div>
              </div>

              <div style={styles.resultText}>
                {result}
              </div>
            </div>
          )}
        </div>

        {/* BENEFITS */}
        <section style={styles.benefits}>
          <div style={styles.benefit}>
            <div style={styles.benefitIcon}>🎯</div>

            <h3>Personalized Matching</h3>

            <p>
              Get career suggestions based on your education, interests and
              current technical skills.
            </p>
          </div>

          <div style={styles.benefit}>
            <div style={styles.benefitIcon}>🤖</div>

            <h3>AI-Powered Guidance</h3>

            <p>
              CareerCopilot AI analyzes your profile and helps identify
              promising career directions.
            </p>
          </div>

          <div style={styles.benefit}>
            <div style={styles.benefitIcon}>🚀</div>

            <h3>Build Your Future</h3>

            <p>
              Use your career recommendation to plan the skills, projects and
              next learning steps.
            </p>
          </div>
        </section>

        {/* BOTTOM */}
        <section style={styles.bottomCard}>
          <div>
            <div style={styles.bottomTitle}>
              🚀 Ready to build your future?
            </div>

            <p style={styles.bottomText}>
              Continue your journey with your personalized career roadmap.
            </p>
          </div>

          <button onClick={goToDashboard} style={styles.dashboardButton}>
            ← Back to Dashboard
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 CareerCopilot AI · Build your future with intelligent guidance 💙
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, #1d2750 0%, #0b1020 45%, #060912 100%)",
    color: "#ffffff",
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  navbar: {
    minHeight: "72px",
    padding: "0 6%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "25px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(7,11,25,0.75)",
    backdropFilter: "blur(18px)",
    position: "sticky",
    top: 0,
    zIndex: 20,
  },

  logo: {
    fontSize: "19px",
    fontWeight: "800",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  navButton: {
    border: "none",
    background: "transparent",
    color: "#aeb8d5",
    padding: "9px 12px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
  },

  activeNav: {
    color: "#ffffff",
    background: "rgba(126,147,255,0.18)",
  },

  profile: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#6f8cff,#b078ff)",
    fontWeight: "800",
    fontSize: "12px",
    flexShrink: 0,
  },

  hero: {
    textAlign: "center",
    padding: "75px 20px 45px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  badge: {
    display: "inline-block",
    padding: "9px 18px",
    borderRadius: "30px",
    background: "rgba(112,132,255,0.12)",
    border: "1px solid rgba(145,160,255,0.25)",
    color: "#b9c5ff",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "1.5px",
    marginBottom: "22px",
  },

  heroTitle: {
    margin: 0,
    fontSize: "clamp(38px, 6vw, 68px)",
    lineHeight: "1.05",
    fontWeight: "850",
    letterSpacing: "-2px",
    color: "#f5f7ff",
  },

  heroText: {
    maxWidth: "700px",
    margin: "25px auto 0",
    color: "#aeb7d0",
    lineHeight: "1.7",
    fontSize: "15px",
  },

  container: {
    width: "min(1050px, 92%)",
    margin: "0 auto",
    paddingBottom: "50px",
  },

  mainCard: {
    padding: "35px",
    borderRadius: "28px",
    background:
      "linear-gradient(145deg, rgba(34,45,86,0.78), rgba(16,22,46,0.9))",
    border: "1px solid rgba(151,169,255,0.2)",
    boxShadow: "0 25px 80px rgba(0,0,0,0.35)",
  },

  cardHeading: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
    marginBottom: "32px",
  },

  headingIcon: {
    width: "55px",
    height: "55px",
    borderRadius: "16px",
    background: "rgba(118,143,255,0.16)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    flexShrink: 0,
  },

  cardTitle: {
    margin: "0 0 5px",
    fontSize: "23px",
  },

  cardSubtitle: {
    margin: 0,
    color: "#aeb8d3",
    fontSize: "13px",
  },

  inputSection: {
    marginBottom: "24px",
  },

  label: {
    display: "block",
    fontSize: "15px",
    fontWeight: "800",
    marginBottom: "5px",
  },

  example: {
    margin: "0 0 10px",
    color: "#8792b0",
    fontSize: "12px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "16px 18px",
    borderRadius: "13px",
    border: "1px solid rgba(157,170,220,0.18)",
    outline: "none",
    background: "rgba(5,9,22,0.55)",
    color: "#ffffff",
    fontSize: "14px",
  },

  findButton: {
    width: "100%",
    border: "none",
    padding: "17px 20px",
    borderRadius: "14px",
    background: "linear-gradient(90deg,#6f83ff,#57d9ff)",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "850",
    cursor: "pointer",
    boxShadow: "0 10px 35px rgba(80,130,255,0.25)",
  },

  resultCard: {
    marginTop: "25px",
    padding: "25px",
    borderRadius: "20px",
    background: "rgba(9,15,32,0.65)",
    border: "1px solid rgba(117,225,255,0.18)",
  },

  resultHeader: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "18px",
  },

  resultIcon: {
    fontSize: "26px",
  },

  resultTitle: {
    margin: 0,
    fontSize: "19px",
  },

  resultSubtitle: {
    margin: "4px 0 0",
    color: "#8f9ab8",
    fontSize: "12px",
  },

  resultText: {
    whiteSpace: "pre-wrap",
    lineHeight: "1.75",
    color: "#d9def0",
    fontSize: "14px",
    background: "rgba(255,255,255,0.035)",
    padding: "18px",
    borderRadius: "13px",
  },

  benefits: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "18px",
    marginTop: "25px",
  },

  benefit: {
    textAlign: "center",
    padding: "27px 20px",
    borderRadius: "20px",
    background: "rgba(25,32,61,0.62)",
    border: "1px solid rgba(151,169,255,0.12)",
  },

  benefitIcon: {
    fontSize: "27px",
    marginBottom: "10px",
  },

  benefitHeading: {
    fontSize: "16px",
    margin: "0 0 9px",
  },

  benefitText: {
    color: "#929db9",
    fontSize: "12px",
    lineHeight: "1.6",
    margin: 0,
  },

  bottomCard: {
    marginTop: "25px",
    padding: "25px 30px",
    borderRadius: "20px",
    background:
      "linear-gradient(90deg, rgba(60,74,130,0.5), rgba(34,47,88,0.35))",
    border: "1px solid rgba(157,170,255,0.14)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  },

  bottomTitle: {
    fontSize: "16px",
    fontWeight: "800",
  },

  bottomText: {
    color: "#929db9",
    fontSize: "12px",
    margin: "6px 0 0",
  },

  dashboardButton: {
    border: "none",
    borderRadius: "12px",
    padding: "13px 20px",
    background: "linear-gradient(90deg,#7585ff,#ad7bff)",
    color: "#ffffff",
    fontWeight: "800",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  footer: {
    textAlign: "center",
    padding: "30px 20px",
    color: "#66718f",
    fontSize: "11px",
    borderTop: "1px solid rgba(255,255,255,0.06)",
  },
};

export default CareerMatch;