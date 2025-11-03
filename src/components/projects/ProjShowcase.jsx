import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImg from "../../assets/hero.jpeg";

export default function ProjShowcase() {
  const projects = [
    {
      title: "Dzein Rentals",
      desc: "A luxury car rental platform merging design, power, and seamless UX. Includes real-time booking and dynamic billing.",
      tag: "Full-Stack Web App",
      color: "#38bdf8",
    },
    {
      title: "Sip & Sync",
      desc: "An AI-driven cocktail generator that curates drinks based on user mood and taste preferences.",
      tag: "React + JSON DB",
      color: "#a78bfa",
    },
    {
      title: "Mint Fizz",
      desc: "A vibrant club website with glowing animations, interactive displays, and a one-page smooth scroll layout.",
      tag: "Frontend Design",
      color: "#f472b6",
    },
  ];

  return (
    <section
      id="proj-showcase"
      className="py-5 text-light position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0b0f16, #111827)",
        fontFamily: "'Urbanist', 'Playfair Display', sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Cinematic background image overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
          filter: "blur(6px)",
          zIndex: 0,
        }}
      ></div>

      {/* Ambient Glow Orbs */}
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

      <Container className="position-relative" style={{ zIndex: 2 }}>
        {/* Header */}
        <Row className="text-center mb-5">
          <Col>
            <h2
              className="fw-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "3rem",
                background:
                  "linear-gradient(90deg, #ffffff, #a5f3fc, #c084fc, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "300% 100%",
                animation: "glowSlide 8s ease infinite",
              }}
            >
              Showcasing My Digital Creations
            </h2>
            <p
              style={{
                fontStyle: "italic",
                color: "#bcbcbc",
                fontSize: "1.1rem",
              }}
            >
              A journey through innovation, style, and evolution — every project
              tells a story.
            </p>
          </Col>
        </Row>

        {/* Project Cards */}
        <Row className="g-4 justify-content-center">
          {projects.map((proj, i) => (
            <Col md={6} lg={4} key={i}>
              <div
                className="project-card p-4 rounded-4 h-100 shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.5s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px)";
                  e.currentTarget.style.boxShadow = `0 0 30px ${proj.color}55`;
                  e.currentTarget.style.border = `1px solid ${proj.color}55`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.1)";
                }}
              >
                <div
                  className="project-image mb-3 rounded-3"
                  style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "180px",
                    borderRadius: "16px",
                    filter: "brightness(0.8)",
                    boxShadow: `0 0 20px ${proj.color}33`,
                  }}
                ></div>

                <h4
                  className="fw-semibold text-white mb-2"
                  style={{
                    fontStyle: "italic",
                    letterSpacing: "0.5px",
                  }}
                >
                  {proj.title}
                </h4>

                <p
                  style={{
                    color: "#cfcfcf",
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                    minHeight: "70px",
                  }}
                >
                  {proj.desc}
                </p>

                <span
                  className="badge rounded-pill px-3 py-2"
                  style={{
                    background: proj.color,
                    color: "#111",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                  }}
                >
                  {proj.tag}
                </span>
              </div>
            </Col>
          ))}
        </Row>

        {/* CTA Button */}
        <div className="text-center mt-5">
          <Button
            variant="outline-light"
            style={{
              borderRadius: "30px",
              padding: "0.8rem 2.2rem",
              border: "1px solid #38bdf8",
              fontStyle: "italic",
              transition: "0.4s",
              letterSpacing: "1px",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#38bdf8";
              e.currentTarget.style.color = "#111";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#fff";
            }}
          >
            Explore More Projects
          </Button>
        </div>
      </Container>

      <style>{`
        @keyframes glowSlide {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 768px) {
          #proj-showcase h2 {
            font-size: 2.2rem !important;
          }
          #proj-showcase p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
