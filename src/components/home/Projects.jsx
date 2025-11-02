import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BoxArrowUpRight } from "react-bootstrap-icons";

import dzeinImg from "../../assets/dzein.jpg";
import mintImg from "../../assets/mint.jpg";
import sipImg from "../../assets/sip.jpg";


export default function Projects() {
  const projects = [
    {
      title: "Dzein Rentals",
      desc: "A luxurious car rental experience powered by React and Django, integrating live billing and fleet automation.",
      img: dzeinImg,
      color: "#38bdf8",
    },
    {
      title: "Mint Fizz Club",
      desc: "A stylish one-page nightlife website for an elite club, featuring modern animations and dynamic events display.",
      img: mintImg,
      color: "#f472b6",
    },
    {
      title: "Sip & Sync",
      desc: "A playful cocktail pairing app using React that tailors drink choices based on user moods and preferences.",
      img: sipImg,
      color: "#a78bfa",
    },
  ];

  return (
    <section
      id="projects"
      className="py-5 text-light position-relative"
      style={{
        background: "linear-gradient(135deg, #0b0f16, #161b25, #1a1f2e)",
        fontFamily: "'Playfair Display', 'Urbanist', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Soft glowing gradients */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-80px",
          width: "280px",
          height: "280px",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)",
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
            "radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      ></div>

      <Container className="position-relative">
        {/* Section Title */}
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
              Projects & Creative Endeavors
            </h2>
            <p
              className="lead text-light opacity-75"
              style={{ fontStyle: "italic" }}
            >
              A showcase of innovation — where design meets engineering and
              imagination takes form.
            </p>
          </Col>
        </Row>

        {/* Project Cards */}
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <div
                className="rounded-4 overflow-hidden h-100 shadow-sm position-relative"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "0.5s ease",
                  transform: "translateY(0)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = `0 0 25px ${project.color}66`;
                  e.currentTarget.style.border = `1px solid ${project.color}55`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.1)";
                }}
              >
                {/* Project Image */}
                <div
                  style={{
                    height: "230px",
                    backgroundImage: `url(${project.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.9)",
                  }}
                ></div>

                {/* Project Info */}
                <div className="p-4 text-center">
                  <h5
                    className="fw-semibold mb-2"
                    style={{
                      color: project.color,
                      fontStyle: "italic",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {project.title}
                  </h5>
                  <p
                    className="small text-light opacity-75 mb-4"
                    style={{ fontStyle: "italic" }}
                  >
                    {project.desc}
                  </p>

                  <Button
                    variant="outline-light"
                    size="sm"
                    style={{
                      borderColor: project.color,
                      color: project.color,
                      borderRadius: "25px",
                      fontStyle: "italic",
                      transition: "0.4s ease",
                      padding: "6px 18px",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = project.color;
                      e.currentTarget.style.color = "#0b0f16";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = project.color;
                    }}
                  >
                    View Project <BoxArrowUpRight size={14} className="ms-1" />
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* View More Button */}
        <div className="text-center mt-5">
          <Button
            className="px-4 py-2 rounded-pill fw-semibold"
            style={{
              color: "#0b0f16",
              background: "linear-gradient(90deg, #a78bfa, #38bdf8)",
              border: "none",
              fontStyle: "italic",
              transition: "0.4s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(167,139,250,0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
