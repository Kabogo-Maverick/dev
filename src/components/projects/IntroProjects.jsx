import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function IntroProjects() {
  return (
    <section
      id="intro-projects"
      className="py-5 text-light position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0b0f16, #111827)",
        fontFamily: "'Urbanist', 'Playfair Display', sans-serif",
        minHeight: "10vh",
        paddingTop: "7rem",
      }}
    >
      {/* Ambient Glow Elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-80px",
          width: "300px",
          height: "300px",
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
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      ></div>

      <Container className="text-center position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center">
          <Col lg={10}>
            <h2
              className="fw-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "3.2rem",
                letterSpacing: "1.2px",
                marginTop: "50px",
                background:
                  "linear-gradient(90deg, #ffffff, #a5f3fc, #c084fc, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "300% 100%",
                animation: "glowSlide 8s ease infinite",
              }}
            >
              Crafting Tomorrow’s Creations
            </h2>

            <p
              className="lead text-light opacity-75 mb-3"
              style={{
                fontStyle: "italic",
                fontSize: "1.2rem",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Every great creation starts with a spark — an idea born from passion
              and curiosity. Each project I develop is a reflection of growth,
              merging innovation, structure, and storytelling into functional art.
            </p>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#bcbcbc",
                maxWidth: "700px",
                margin: "1rem auto 0",
                fontStyle: "italic",
              }}
            >
              What follows is a journey of transformation — from sketches to code,
              from dreams to deployment — where every line and every color brings
              vision to life.
            </p>
          </Col>
        </Row>

        {/* Soft Gradient Divider */}
        <div
          style={{
            marginTop: "4rem",
            height: "2px",
            width: "120px",
            background:
              "linear-gradient(90deg, transparent, #38bdf8, transparent)",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "2px",
            opacity: 0.8,
          }}
        ></div>
      </Container>

      <style>{`
        @keyframes glowSlide {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 768px) {
          #intro-projects {
            padding-top: 6rem !important;
          }
          #intro-projects h2 {
            font-size: 2.2rem !important;
          }
          #intro-projects p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
