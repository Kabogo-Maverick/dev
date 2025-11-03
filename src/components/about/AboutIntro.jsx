import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import aboutImg from "../../assets/hero.jpeg"; // your image path

export default function AboutIntro() {
  return (
    <section
      id="about"
      className="py-5 text-light position-relative"
      style={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #121212 60%, #1b0028 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(144, 238, 144, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(138, 43, 226, 0.15) 0%, transparent 40%)",
          zIndex: 0,
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="image-wrapper position-relative">
              <Image
                src={aboutImg}
                alt="About"
                fluid
                rounded
                style={{
                              marginTop: "60px",

                  boxShadow: "0 0 30px rgba(138,43,226,0.4)",
                  border: "2px solid rgba(0,255,150,0.3)",
                }}
              />
              <div
                className="position-absolute top-50 start-50 translate-middle rounded-circle"
                style={{
                  width: "180px",
                  height: "180px",
                  background: "rgba(0,255,150,0.08)",
                  filter: "blur(80px)",
                  zIndex: -1,
                }}
              ></div>
            </div>
          </Col>

          <Col md={6}>
            <h2
              className="fw-bold mb-3"
              style={{
                background: "linear-gradient(90deg, #00ffa3, #7a00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "2.5rem",
                            marginTop: "40px"

              }}
            >
              About Me
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#ddd",
                textShadow: "0 0 5px rgba(0,255,150,0.2)",
              }}
            >
              I'm a passionate <strong>Software Engineer</strong> and{" "}
              <strong>Data Analyst</strong> dedicated to creating impactful,
              visually stunning, and technically robust digital experiences.
              With a focus on merging creativity and functionality, I transform
              complex ideas into seamless, high-performing applications.
            </p>
            <p style={{ color: "#aaa" }}>
              Whether it’s building modern full-stack systems, analyzing
              financial data, or designing interactive frontends, I blend
              precision and imagination to deliver results that stand out.
            </p>
            <Button
              variant="outline-light"
              size="lg"
              className="mt-3"
              style={{
                borderColor: "#00ffa3",
                color: "#00ffa3",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#00ffa3";
                e.target.style.color = "#111";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#00ffa3";
              }}
            >
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
