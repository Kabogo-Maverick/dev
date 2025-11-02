import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CodeSlash, Cpu, Globe, LightningCharge } from "react-bootstrap-icons";

export default function About() {
  return (
    <section
      id="about"
      className="py-5 text-light position-relative"
      style={{
        background: "linear-gradient(135deg, #111827, #1f2937)",
        overflow: "hidden",
      }}
    >
      {/* Floating shapes */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-80px",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      ></div>

      <Container className="position-relative">
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="fw-bold mb-3 text-white">
              <span className="text-info">Beyond Code:</span> The Mind of Maverick
            </h2>
            <p className="lead text-light opacity-75">
              Software engineer, AI enthusiast, and creative builder merging
              technology, design, and business insight to shape the digital world.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {[
            {
              icon: <CodeSlash size={48} className="text-info mb-3" />,
              title: "Creative Frontends",
              desc: "Intuitive, sleek designs powered by React and Bootstrap.",
            },
            {
              icon: <Cpu size={48} className="text-warning mb-3" />,
              title: "Engineered Backends",
              desc: "Strong, secure APIs built for real-world performance.",
            },
            {
              icon: <Globe size={48} className="text-success mb-3" />,
              title: "Smart Finance Systems",
              desc: "Merging innovation and financial tech to build tomorrow’s tools.",
            },
            {
              icon: <LightningCharge size={48} className="text-danger mb-3" />,
              title: "AI & Automation",
              desc: "Creating intelligent systems that adapt and evolve with time.",
            },
          ].map((item, i) => (
            <Col md={6} lg={3} key={i}>
              <div
                className="p-4 text-center rounded-4 h-100"
                style={{
                  background:
                    "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 0 25px rgba(0,255,255,0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item.icon}
                <h5 className="fw-semibold mt-2">{item.title}</h5>
                <p className="text-light small opacity-75">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
