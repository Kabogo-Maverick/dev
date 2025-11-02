import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Brush, Cpu, Globe, LightningCharge } from "react-bootstrap-icons";

export default function Services() {
  const services = [
    {
      icon: <Brush size={42} />,
      title: "Web Design & Branding",
      desc: "Beautifully structured interfaces blending luxury with usability — precision in every pixel.",
      color: "#f472b6",
    },
    {
      icon: <Cpu size={42} />,
      title: "Full-Stack Development",
      desc: "End-to-end web systems crafted with React, Django, and scalable backend integration.",
      color: "#38bdf8",
    },
    {
      icon: <Globe size={42} />,
      title: "Cloud Integration",
      desc: "Seamless deployment and hosting using AWS, Netlify, and other advanced infrastructure tools.",
      color: "#a78bfa",
    },
    {
      icon: <LightningCharge size={42} />,
      title: "Performance Optimization",
      desc: "Every project refined to run faster, smoother, and more efficiently — because elegance deserves speed.",
      color: "#facc15",
    },
  ];

  return (
    <section
      id="services"
      className="py-5 text-light position-relative"
      style={{
        background: "linear-gradient(135deg, #0b0f16, #161b25, #1a1f2e)",
        fontFamily: "'Playfair Display', 'Urbanist', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Soft glow accents */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-80px",
          width: "280px",
          height: "280px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)",
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
            "radial-gradient(circle, rgba(244,114,182,0.25) 0%, transparent 70%)",
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
                fontStyle: "italic",
                background:
                  "linear-gradient(90deg, #ffffff, #a5f3fc, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services & Expertise
            </h2>
            <p
              className="lead text-light opacity-75"
              style={{ fontStyle: "italic" }}
            >
              A curation of what I do best — turning concepts into crafted
              digital experiences.
            </p>
          </Col>
        </Row>

        {/* Services Grid */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={3} key={index}>
              <div
                className="text-center p-4 rounded-4 shadow-sm h-100"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.5s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = `0 0 25px ${service.color}66`;
                  e.currentTarget.style.border = `1px solid ${service.color}55`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.1)";
                }}
              >
                <div
                  className="mb-3"
                  style={{
                    color: service.color,
                    fontSize: "2rem",
                  }}
                >
                  {service.icon}
                </div>

                <h5
                  className="fw-semibold text-white mb-2"
                  style={{ fontStyle: "italic" }}
                >
                  {service.title}
                </h5>

                <p
                  className="small text-light opacity-75"
                  style={{ fontStyle: "italic" }}
                >
                  {service.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
