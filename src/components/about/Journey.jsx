import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Journey() {
  const timeline = [
    {
      year: "2019",
      title: "The Spark",
      desc: "Started my tech journey by learning the fundamentals of web development and Python, driven by curiosity and a hunger to create.",
    },
    {
      year: "2020",
      title: "Foundation & Growth",
      desc: "Began merging finance with technology while studying Financial Engineering at JKUAT — where logic met innovation.",
    },
    {
      year: "2021",
      title: "The Developer’s Path",
      desc: "Explored full-stack development — blending design, analytics, and logic into meaningful digital experiences.",
    },
    {
      year: "2023",
      title: "Data Meets Design",
      desc: "Appointed as Data Analyst Manager at Jubilee Insurance and built projects that balanced creativity and structure.",
    },
    {
      year: "2025",
      title: "The Vision Forward",
      desc: "Now leading projects that fuse AI, design, and intelligent systems — building the future, one idea at a time.",
    },
  ];

  return (
    <section
      id="journey"
      className="py-5 text-light position-relative"
      style={{
        background: "linear-gradient(135deg, #090b10, #111626, #0d0d0d)",
        overflow: "hidden",
        fontFamily: "'Urbanist', sans-serif",
      }}
    >
      {/* Glowing Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "250px",
          height: "250px",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "280px",
          height: "280px",
          background:
            "radial-gradient(circle, rgba(0,255,163,0.25) 0%, transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      ></div>

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <h2
          className="fw-bold text-center mb-5"
          style={{
            fontSize: "2.8rem",
            background: "linear-gradient(90deg, #00ffa3, #7a00ff, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientMove 8s ease infinite",
          }}
        >
          My Journey
        </h2>

        <Row className="justify-content-center">
          <Col md={10}>
            <div className="timeline position-relative">
              {/* Vertical Line */}
              <div
                className="timeline-line"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  width: "4px",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, #7a00ff, #00ffa3, transparent)",
                  transform: "translateX(-50%)",
                  borderRadius: "10px",
                }}
              ></div>

              {/* Timeline Items */}
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item mb-5 d-flex flex-column flex-md-row align-items-center ${
                    index % 2 === 0 ? "flex-md-row-reverse" : ""
                  }`}
                  style={{
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <div
                    className="timeline-content p-4 my-3"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "16px",
                      boxShadow: "0 0 25px rgba(0,255,163,0.15)",
                      width: "46%",
                      transition: "all 0.4s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 35px rgba(122,0,255,0.35)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 25px rgba(0,255,163,0.15)")
                    }
                  >
                    <h5
                      className="fw-bold"
                      style={{
                        color: "#00ffa3",
                        letterSpacing: "1px",
                      }}
                    >
                      {item.year}
                    </h5>
                    <h4
                      className="fw-semibold mb-2"
                      style={{
                        color: "#fff",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ color: "#bbb", lineHeight: "1.7" }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Connector Dot */}
                  <div
                    className="timeline-dot"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, #00ffa3 0%, #7a00ff 70%)",
                      boxShadow: "0 0 20px rgba(0,255,163,0.5)",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Animations & Responsive Adjustments */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Responsive Timeline Layout */
        @media (max-width: 768px) {
          .timeline-line {
            left: 10px !important;
            transform: none !important;
          }
          .timeline-item {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .timeline-content {
            width: 100% !important;
            margin-left: 2.5rem !important;
          }
          .timeline-dot {
            left: 10px !important;
            transform: translateY(-50%) !important;
          }
        }
      `}</style>
    </section>
  );
}
