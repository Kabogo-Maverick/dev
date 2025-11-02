import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CodeSlash, Cpu, Globe, LightningCharge } from "react-bootstrap-icons";

export default function About() {
  return (
    <section
      id="about"
      className="py-5 text-light position-relative"
      style={{
        fontFamily: "'Playfair Display', serif",
        background: "linear-gradient(135deg, #0d0d0f, #1a1a2e, #111827)",
        overflow: "hidden",
      }}
    >
      {/* Soft glowing background shapes */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-60px",
          width: "260px",
          height: "260px",
          background:
            "radial-gradient(circle, rgba(147,197,253,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
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
            "radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      ></div>

      <Container className="position-relative">
        {/* Title Section */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2
              className="fw-bold mb-3"
              style={{
                fontStyle: "italic",
                background:
                  "linear-gradient(90deg, #ffffff, #a5b4fc, #f9a8d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "2.6rem",
                letterSpacing: "1px",
              }}
            >
              <span style={{ color: "#a5b4fc" }}>Beyond Code:</span>{" "}
              The Mind of Maverick
            </h2>
            <p
              className="lead text-light opacity-75"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: "italic",
                color: "#f5f5f5",
                fontSize: "1.05rem",
              }}
            >
              A Kenyan software engineer — merging creativity, intelligence, and
              technology into elegant digital craftsmanship.
            </p>
          </Col>
        </Row>

        {/* Info Cards */}
        <Row className="g-4">
          {[
            {
              icon: <CodeSlash size={48} className="text-info mb-3" />,
              title: "Creative Frontends",
              desc: "Designing sleek, intuitive experiences that breathe life into ideas.",
              color: "#38bdf8",
            },
            {
              icon: <Cpu size={48} className="text-warning mb-3" />,
              title: "Engineered Backends",
              desc: "Building structured, secure systems for performance that lasts.",
              color: "#fbbf24",
            },
            {
              icon: <Globe size={48} className="text-success mb-3" />,
              title: "Smart Finance Systems",
              desc: "Merging innovation and financial intelligence for smarter solutions.",
              color: "#22c55e",
            },
            {
              icon: <LightningCharge size={48} className="text-danger mb-3" />,
              title: "AI & Automation",
              desc: "Exploring automation and intelligence for evolving digital futures.",
              color: "#ef4444",
            },
          ].map((item, i) => (
            <Col md={6} lg={3} key={i}>
              <div
                className="p-4 text-center rounded-4 h-100 shadow-sm"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.5s ease",
                  fontStyle: "italic",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = `0 0 35px ${item.color}55`;
                  e.currentTarget.style.border = `1px solid ${item.color}55`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.08)";
                }}
              >
                {item.icon}
                <h5
                  className="fw-semibold mt-2"
                  style={{
                    fontStyle: "italic",
                    color: "#fff",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {item.title}
                </h5>
                <p
                  className="text-light small opacity-75"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontStyle: "italic",
                    color: "#f5f5f5",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
