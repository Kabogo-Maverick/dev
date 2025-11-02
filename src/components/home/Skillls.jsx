import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Code,
  Cpu,
  Database,
  Cloud,
  ShieldCheck,
} from "react-bootstrap-icons";

export default function Skills() {
  const skills = [
    {
      icon: <Code size={42} />,
      title: "Frontend Development",
      level: 95,
      color: "#38bdf8",
      desc: "Elegant and responsive interfaces crafted with React and Bootstrap.",
    },
    {
      icon: <Cpu size={42} />,
      title: "Backend Systems",
      level: 90,
      color: "#f472b6",
      desc: "Building fast, secure, and scalable infrastructures.",
    },
    {
      icon: <Database size={42} />,
      title: "Data & APIs",
      level: 90,
      color: "#34d399",
      desc: "Crafting structured data flows with precision and logic.",
    },
    {
      icon: <Cloud size={42} />,
      title: "Cloud & Deployment",
      level: 90,
      color: "#a78bfa",
      desc: "Seamless integration and deployment across global networks.",
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Security & Optimization",
      level: 95,
      color: "#facc15",
      desc: "Ensuring reliability through secure, optimized architectures.",
    },
  ];

  return (
    <section
      id="skills"
      className="py-5 text-light position-relative"
      style={{
        background: "linear-gradient(135deg, #0b0f16, #111827)",
        fontFamily: "'Urbanist', 'Playfair Display', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Soft glowing orbs */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-80px",
          width: "280px",
          height: "280px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-80px",
          width: "280px",
          height: "280px",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      ></div>

      <Container className="position-relative">
        {/* Title Section */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2
              className="fw-bold mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                letterSpacing: "1px",
                background:
                  "linear-gradient(90deg, #ffffff, #a5f3fc, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Artistry of Skill & Precision
            </h2>
            <p
              className="lead text-light opacity-75"
              style={{ fontStyle: "italic" }}
            >
              Every ability here is more than code — it’s a craft perfected
              through discipline, creativity, and vision.
            </p>
          </Col>
        </Row>

        {/* Skills Grid */}
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col md={6} lg={4} key={index}>
              <div
                className="p-4 rounded-4 shadow-sm h-100 text-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.5s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = `0 0 25px ${skill.color}66`;
                  e.currentTarget.style.border = `1px solid ${skill.color}55`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.1)";
                }}
              >
                <div
                  style={{
                    color: skill.color,
                    fontSize: "2rem",
                    marginBottom: "15px",
                  }}
                >
                  {skill.icon}
                </div>

                <h5
                  className="fw-semibold text-white mb-2"
                  style={{ fontStyle: "italic" }}
                >
                  {skill.title}
                </h5>

                <p
                  className="small text-light opacity-75 mb-3"
                  style={{ fontStyle: "italic" }}
                >
                  {skill.desc}
                </p>

                {/* Circular Skill Indicator */}
                <div
                  style={{
                    position: "relative",
                    width: "90px",
                    height: "90px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    background: `conic-gradient(${skill.color} ${skill.level}%, rgba(255,255,255,0.1) ${skill.level}%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 15px ${skill.color}44`,
                    transition: "0.4s ease",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "70px",
                      height: "70px",
                      background: "#111827",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontStyle: "italic",
                      fontWeight: "500",
                    }}
                  >
                    {skill.level}%
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
