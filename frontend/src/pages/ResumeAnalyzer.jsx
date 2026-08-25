import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResumeAnalyzer = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Please upload a PDF, DOC, or DOCX resume.");
      setFile(null);
      return;
    }

    setError("");
    setFile(selectedFile);
  };

  const analyzeResume = async () => {
    setError("");
    setResult("");

    if (!file && !resumeText.trim()) {
      setError("Please upload your resume or paste your resume text.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      if (file) {
        formData.append("resume", file);
      }

      if (resumeText.trim()) {
        formData.append("resumeText", resumeText);
      }

      const response = await fetch(
        "https://careercopilot-ai-jl8g.onrender.com/api/ai/analyze-resume",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Resume analysis failed.");
      }

      const analysis =
  data.analysis ||
  data.result ||
  data.message ||
  data.response ||
  "";

const formattedAnalysis =
  typeof analysis === "object"
    ? JSON.stringify(analysis, null, 2)
    : analysis;

setResult(
  formattedAnalysis || "Resume analysis completed successfully."
);
    } catch (err) {
      console.error("Resume analysis error:", err);
      setError(
        err.message ||
          "Unable to analyze your resume. Please check that the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };
  
 
const parsedResult = (() => {
  try {
    if (typeof result !== "string") return result;

    let cleaned = result.trim();

    // Remove ```json and ``` if Gemini sends them
    cleaned = cleaned.replace(/^```json\s*/i, "");
    cleaned = cleaned.replace(/^```\s*/i, "");
    cleaned = cleaned.replace(/\s*```$/i, "");

    return JSON.parse(cleaned);
  } catch {
    return null;
  }
})();

return (
    <div className="resume-page">
      {/* NAVBAR */}
      <nav className="resume-navbar">
        <div
          className="brand"
          onClick={() => navigate("/dashboard")}
        >
          🚀 <span>CareerCopilot</span> <b>AI</b>
        </div>

        <div className="nav-links">
          <button onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>

          <button onClick={() => navigate("/career-match")}>
            Career Match
          </button>

          <button onClick={() => navigate("/career-roadmap")}>
            Roadmap
          </button>

          <button className="active">
            Resume Analyzer
          </button>

          <button onClick={() => navigate("/skill-recommendations")}>
            Skill Recommendations
          </button>

          <div className="profile-icon">👤</div>
        </div>
      </nav>

      {/* HERO */}
      <section className="resume-hero">
        <div className="hero-image">
          📄
          <div className="floating-icon one">🤖</div>
          <div className="floating-icon two">✨</div>
          <div className="floating-icon three">💼</div>
        </div>

        <div className="hero-content">
          <div className="small-title">
            ✨ AI POWERED TOOL
          </div>

          <h1>
            AI Resume <span>Analyzer</span> 🚀
          </h1>

          <p>
            Upload your resume and get intelligent AI-powered
            feedback to improve your skills, experience and job
            readiness.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <main className="resume-main">

        {/* UPLOAD CARD */}
        <section className="upload-card">
          <div className="card-heading">
            <div className="heading-icon">🤖</div>

            <div>
              <h2>Analyze Your Resume</h2>
              <p>
                Upload your resume or paste your resume text below.
              </p>
            </div>
          </div>

          {/* FILE UPLOAD */}
          <div className="upload-box">
            <div className="upload-icon">📄</div>

            <h3>
              {file ? "Resume Selected 🎉" : "Upload Your Resume"}
            </h3>

            <p>
              {file
                ? file.name
                : "Choose your PDF, DOC or DOCX resume"}
            </p>

            <label className="choose-button">
              📎 Choose File
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                hidden
              />
            </label>

            {file && (
              <div className="file-name">
                ✓ {file.name}
              </div>
            )}
          </div>

          {/* DIVIDER */}
          <div className="divider">
            <span>OR</span>
          </div>

          {/* TEXT AREA */}
          <div className="text-section">
            <label>📝 Paste Your Resume Text</label>

            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="You can paste your resume text here if you don't want to upload a file..."
            />
          </div>

          {/* ERROR */}
          {error && (
            <div className="error-message">
              ⚠️ {error}
            </div>
          )}

          {/* ANALYZE BUTTON */}
          <button
            className="analyze-button"
            onClick={analyzeResume}
            disabled={loading}
          >
            {loading
              ? "🤖 Analyzing Your Resume..."
              : "✨ Analyze My Resume →"}
          </button>
        </section>

        {/* RESULT */}
        {result && (
          <section className="result-section">
            <div className="result-header">
              <div>
                <div className="small-title">
                  ✨ AI INSIGHTS
                </div>

                <h2>Your Resume Analysis</h2>

                <p>
                  Here are personalized insights generated from
                  your resume.
                </p>
              </div>

              <div className="result-icon">
                🤖
              </div>
            </div>

            <div className="result-card">
              <div className="result-title">
                📊 AI Resume Feedback
              </div>

              <div className="result-text">
  {parsedResult ? (
    <div className="analysis-results">

      <div className="analysis-item">
        <h3>🎯 Experience Level</h3>
        <p>{parsedResult.experienceLevel || "Not available"}</p>
      </div>

      <div className="analysis-item">
        <h3>💡 Overall Advice</h3>
        <p>{parsedResult.overallAdvice || "Not available"}</p>
      </div>

      <div className="analysis-item">
        <h3>💪 Strengths</h3>
        <ul>
          {(parsedResult.strengths || []).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="analysis-item">
        <h3>📚 Missing Skills</h3>
        <ul>
          {(parsedResult.missingSkills || []).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="analysis-item">
        <h3>🚀 Career Suggestions</h3>
        <ul>
          {(parsedResult.careerSuggestions || []).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="analysis-item">
        <h3>📝 Resume Improvement Tips</h3>
        <ul>
          {(parsedResult.resumeImprovementTips || []).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

    </div>
  ) : (
    <p>{result}</p>
  )}
</div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="resume-cta">
          <div className="cta-emoji">🚀</div>

          <div className="cta-content">
            <h2>
              Ready to improve your resume? ✨
            </h2>

            <p>
              Use your AI insights to strengthen your skills,
              projects and career profile.
            </p>
          </div>

          <button
            className="dashboard-button"
            onClick={() => navigate("/dashboard")}
          >
            ← Back to Dashboard
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="resume-footer">
        © 2026 CareerCopilot <span>AI</span>.
        All rights reserved. 💜
      </footer>

      {/* PAGE STYLES */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #070817;
        }

        .resume-page {
          min-height: 100vh;
          color: white;
          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(100, 70, 190, 0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 30%,
              rgba(60, 100, 220, 0.15),
              transparent 30%
            ),
            #070817;
        }

        /* NAVBAR */

        .resume-navbar {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          background: rgba(5,6,20,0.9);
          position: sticky;
          top: 0;
          z-index: 10;
          backdrop-filter: blur(12px);
        }

        .brand {
          font-size: 22px;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
        }

        .brand span {
          margin-left: 7px;
        }

        .brand b {
          color: #a66cff;
          margin-left: 3px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-links button {
          border: none;
          background: transparent;
          color: #c6c5d7;
          padding: 11px 14px;
          border-radius: 22px;
          cursor: pointer;
          font-size: 14px;
        }

        .nav-links button:hover,
        .nav-links button.active {
          color: white;
          background: rgba(135, 67, 255, 0.2);
        }

        .profile-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-left: 10px;
          background: linear-gradient(
            135deg,
            #7438ff,
            #b56cff
          );
        }

        /* HERO */

        .resume-hero {
          max-width: 1200px;
          margin: auto;
          padding: 75px 5% 65px;
          display: flex;
          align-items: center;
          gap: 70px;
        }

        .hero-image {
          width: 330px;
          height: 230px;
          border-radius: 28px;
          background:
            linear-gradient(
              145deg,
              rgba(88,49,170,.45),
              rgba(23,28,67,.65)
            );
          border: 1px solid rgba(170,130,255,.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 100px;
          position: relative;
          box-shadow:
            0 25px 70px rgba(82,40,190,.25);
        }

        .floating-icon {
          position: absolute;
          font-size: 32px;
          padding: 10px;
          border-radius: 15px;
          background: rgba(17,18,45,.9);
          border: 1px solid rgba(160,120,255,.3);
        }

        .floating-icon.one {
          top: 20px;
          left: 20px;
        }

        .floating-icon.two {
          top: 25px;
          right: 20px;
        }

        .floating-icon.three {
          bottom: 18px;
          right: 30px;
        }

        .hero-content {
          flex: 1;
        }

        .small-title {
          color: #a875ff;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: .5px;
          margin-bottom: 15px;
        }

        .hero-content h1 {
          font-size: clamp(40px, 5vw, 64px);
          line-height: 1.05;
          margin: 0 0 22px;
          font-weight: 800;
        }

        .hero-content h1 span {
          background: linear-gradient(
            90deg,
            #a879ff,
            #61c9ff
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-content p {
          color: #b8b7c9;
          font-size: 18px;
          line-height: 1.7;
          max-width: 700px;
        }

        /* MAIN */

        .resume-main {
          max-width: 1200px;
          margin: auto;
          padding: 0 5% 60px;
        }

        .upload-card {
          padding: 35px;
          border-radius: 25px;
          background:
            linear-gradient(
              145deg,
              rgba(31,27,69,.9),
              rgba(15,18,42,.9)
            );
          border: 1px solid rgba(144,111,255,.25);
          box-shadow:
            0 25px 70px rgba(0,0,0,.25);
        }

        .card-heading {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 30px;
        }

        .heading-icon {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          background: linear-gradient(
            135deg,
            #5832c9,
            #9e58ff
          );
        }

        .card-heading h2 {
          margin: 0 0 6px;
          font-size: 27px;
        }

        .card-heading p {
          margin: 0;
          color: #aaa9bb;
        }

        .upload-box {
          text-align: center;
          padding: 45px 25px;
          border: 1px dashed rgba(157,125,255,.45);
          border-radius: 22px;
          background: rgba(90,60,170,.08);
        }

        .upload-icon {
          font-size: 55px;
          margin-bottom: 12px;
        }

        .upload-box h3 {
          margin: 5px 0;
          font-size: 23px;
        }

        .upload-box p {
          color: #9998aa;
          margin-bottom: 22px;
        }

        .choose-button {
          display: inline-block;
          padding: 14px 27px;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 700;
          background: linear-gradient(
            90deg,
            #7440ff,
            #9e5cff
          );
          box-shadow: 0 10px 30px rgba(123,65,255,.25);
        }

        .choose-button:hover {
          transform: translateY(-2px);
        }

        .file-name {
          margin-top: 17px;
          color: #73e5b0;
          font-size: 14px;
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 15px;
          margin: 28px 0;
          color: #77768a;
        }

        .divider::before,
        .divider::after {
          content: "";
          height: 1px;
          flex: 1;
          background: rgba(255,255,255,.1);
        }

        .text-section label {
          display: block;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .text-section textarea {
          width: 100%;
          min-height: 190px;
          resize: vertical;
          border: 1px solid rgba(144,111,255,.22);
          border-radius: 16px;
          outline: none;
          padding: 18px;
          color: white;
          background: rgba(3,5,18,.7);
          font-size: 15px;
          line-height: 1.6;
        }

        .text-section textarea:focus {
          border-color: #8a58ff;
          box-shadow: 0 0 0 3px rgba(138,88,255,.1);
        }

        .text-section textarea::placeholder {
          color: #666579;
        }

        .error-message {
          margin-top: 20px;
          padding: 14px 18px;
          border-radius: 12px;
          color: #ffb4b4;
          background: rgba(255,60,60,.1);
          border: 1px solid rgba(255,80,80,.25);
        }

        .analyze-button {
          width: 100%;
          margin-top: 25px;
          border: none;
          border-radius: 15px;
          padding: 18px;
          color: white;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
          background: linear-gradient(
            90deg,
            #7440ff,
            #4d9dff
          );
          box-shadow: 0 15px 35px rgba(93,71,255,.25);
        }

        .analyze-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(93,71,255,.4);
        }

        .analyze-button:disabled {
          opacity: .65;
          cursor: not-allowed;
        }

        /* RESULT */

        .result-section {
          margin-top: 35px;
          padding: 35px;
          border-radius: 25px;
          background:
            linear-gradient(
              145deg,
              rgba(28,45,75,.8),
              rgba(22,18,52,.9)
            );
          border: 1px solid rgba(89,181,255,.2);
        }

        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .result-header h2 {
          margin: 0 0 8px;
          font-size: 30px;
        }

        .result-header p {
          margin: 0;
          color: #a9a8b8;
        }

        .result-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 35px;
          background: rgba(100,100,255,.15);
        }

        .result-card {
          padding: 28px;
          border-radius: 18px;
          background: rgba(4,6,20,.65);
          border: 1px solid rgba(255,255,255,.08);
        }

        .result-title {
          font-size: 19px;
          font-weight: 800;
          margin-bottom: 18px;
          color: #b98aff;
        }

        .result-text {
          white-space: pre-wrap;
          color: #d7d6df;
          line-height: 1.8;
          font-size: 15px;
        }

        /* CTA */

        .resume-cta {
          margin-top: 35px;
          padding: 30px 35px;
          display: flex;
          align-items: center;
          gap: 25px;
          border-radius: 23px;
          background:
            linear-gradient(
              100deg,
              rgba(72,43,130,.55),
              rgba(31,39,87,.55)
            );
          border: 1px solid rgba(160,120,255,.2);
        }

        .cta-emoji {
          font-size: 60px;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h2 {
          margin: 0 0 8px;
          font-size: 24px;
        }

        .cta-content p {
          margin: 0;
          color: #aaa9ba;
        }

        .dashboard-button {
          border: none;
          padding: 16px 27px;
          border-radius: 30px;
          color: white;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          background: linear-gradient(
            90deg,
            #753cff,
            #a35cff
          );
          white-space: nowrap;
        }

        .dashboard-button:hover {
          transform: translateY(-2px);
        }

        /* FOOTER */

        .resume-footer {
          text-align: center;
          padding: 30px;
          color: #777688;
          font-size: 14px;
        }

        .resume-footer span {
          color: #a66cff;
          font-weight: 700;
        }

        /* MOBILE */

        @media (max-width: 900px) {
          .nav-links button {
            display: none;
          }

          .resume-hero {
            flex-direction: column;
            text-align: center;
          }

          .hero-image {
            width: 280px;
          }

          .resume-cta {
            flex-direction: column;
            text-align: center;
          }

          .dashboard-button {
            width: 100%;
          }
        }

        @media (max-width: 600px) {
          .resume-navbar {
            padding: 0 20px;
          }

          .brand {
            font-size: 18px;
          }

          .resume-hero {
            padding-top: 45px;
          }

          .upload-card,
          .result-section {
            padding: 22px;
          }

          .card-heading {
            align-items: flex-start;
          }

          .heading-icon {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeAnalyzer;