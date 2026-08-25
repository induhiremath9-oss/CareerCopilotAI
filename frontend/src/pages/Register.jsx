import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #24104f 0%, #090914 45%, #050509 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          background: "rgba(20, 20, 40, 0.85)",
          border: "1px solid rgba(150, 100, 255, 0.35)",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 0 50px rgba(120, 70, 255, 0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            marginBottom: "10px",
          }}
        >
          Create Your Profile
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#aaa",
            marginBottom: "30px",
          }}
        >
          Start your CareerCopilot AI journey
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Create Account →
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            color: "#aaa",
            marginTop: "25px",
          }}
        >
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{
              color: "#a875ff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Login
          </span>
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            width: "100%",
            background: "transparent",
            border: "none",
            color: "#999",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "12px",
  border: "1px solid rgba(160, 120, 255, 0.35)",
  background: "#111120",
  color: "white",
  outline: "none",
  fontSize: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  border: "none",
  borderRadius: "12px",
  background: "linear-gradient(90deg, #8b5cf6, #c084fc)",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Register;