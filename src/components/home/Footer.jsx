import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Github,
  Instagram,
  Twitter,
  Linkedin,
} from "react-bootstrap-icons";
import logo from "../../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer
      className="text-light py-5 position-relative"
      style={{
        background: "linear-gradient(135deg, #0b0f16, #141821, #1a1f2e)",
        fontFamily: "'Playfair Display', 'Urbanist', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Soft glowing effects */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-80px",
          width: "250px",
          height: "250px",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-80px",
          width: "250px",
          height: "250px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      ></div>

      <Container className="position-relative">
        <Row className="gy-4 text-center text-md-start">
          {/* Logo + tagline */}
          <Col md={4}>
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <img
                src={logo}
                alt="Logo"
                className="mb-3 rounded-circle"
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
              <h5
                className="fw-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, #a78bfa, #38bdf8, #a5f3fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontStyle: "italic",
                }}
              >
                Maverick Kabogo
              </h5>
              <p className="small text-light opacity-75">
                Crafting digital experiences that inspire, empower, and connect.
              </p>
            </div>
          </Col>

          {/* Navigation links */}
          <Col md={4}>
            <h6
              className="fw-semibold mb-3"
              style={{ color: "#a5f3fc", fontStyle: "italic" }}
            >
              Explore
            </h6>
            <ul className="list-unstyled">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-light text-decoration-none"
                      style={{
                        opacity: 0.8,
                        transition: "0.3s ease",
                        fontStyle: "italic",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
                      onMouseOut={(e) => (e.currentTarget.style.opacity = 0.8)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </Col>

          {/* Social icons */}
          <Col md={4}>
            <h6
              className="fw-semibold mb-3"
              style={{ color: "#a5f3fc", fontStyle: "italic" }}
            >
              Connect
            </h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              {[
                { icon: <Github />, link: "https://github.com/" },
                { icon: <Instagram />, link: "https://instagram.com/" },
                { icon: <Twitter />, link: "https://x.com/" },
                { icon: <Linkedin />, link: "https://linkedin.com/" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-light"
                  style={{
                    fontSize: "1.5rem",
                    transition: "0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "#38bdf8")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                  }
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        {/* Divider + copyright */}
        <hr
          className="my-4"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        />
        <p
          className="text-center small text-light opacity-75 mb-0"
          style={{ fontStyle: "italic" }}
        >
          © {new Date().getFullYear()} Maverick Kabogo — All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
