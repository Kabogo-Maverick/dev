import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Values() {
  const values = [
    {
      title: "Innovation",
      desc: "I challenge limits and turn imagination into tangible progress.",
      glow: "linear-gradient(135deg, #00ffa3, #0066ff)",
    },
    {
      title: "Integrity",
      desc: "My foundation is built on honesty, accountability, and trust.",
      glow: "linear-gradient(135deg, #ff007a, #7a00ff)",
    },
    {
      title: "Excellence",
      desc: "Every detail matters I refine, perfect, and elevate beyond expectation.",
      glow: "linear-gradient(135deg, #ffe600, #ff00b8)",
    },
    {
      title: "Collaboration",
      desc: "True success is collective.  I grow stronger with teamwork.",
      glow: "linear-gradient(135deg, #00e0ff, #00ffa3)",
    },
  ];

  return (
    <section
      id="values"
      className="py-5 text-light position-relative"
      style={{
        background: "linear-gradient(160deg, #090c13, #0e1220, #070b11)",
        overflow: "hidden",
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
      }}
    >
      {/* Ambient Light Gradient */}
      <div className="ambient-glow"></div>

      <Container className="position-relative text-center" style={{ zIndex: 2 }}>
        <h2
          className="fw-bold mb-5"
          style={{
            fontSize: "3rem",
            background:
              "linear-gradient(90deg, #00ffa3, #7a00ff, #ffffff, #ff00b8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "300% 100%",
            animation: "shift 8s ease infinite",
          }}
        >
          My Core Values
        </h2>

        <Row className="g-4 justify-content-center">
          {values.map((v, i) => (
            <Col md={6} lg={3} key={i}>
              <Card
                className="h-100 p-4 value-card"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  boxShadow: `0 0 20px rgba(255,255,255,0.05)`,
                  transition: "all 0.4s ease",
                }}
              >
                <h4
                  className="fw-semibold mb-3"
                  style={{
                    fontSize: "1.5rem",
                    background: v.glow,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {v.title}
                </h4>
                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "#cfd3da",
                    fontStyle: "italic",
                    lineHeight: "1.7",
                  }}
                >
                  {v.desc}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        @keyframes shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .value-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 0 25px rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.2);
        }

        .ambient-glow {
          position: absolute;
          top: -10%; left: -10%;
          width: 120%; height: 120%;
          background: radial-gradient(
            circle at center,
            rgba(0,255,163,0.08),
            rgba(122,0,255,0.05),
            transparent 70%
          );
          animation: floatLight 10s ease-in-out infinite alternate;
          z-index: 0;
        }

        @keyframes floatLight {
          0% { transform: translateY(0); opacity: 0.5; }
          100% { transform: translateY(-30px); opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
