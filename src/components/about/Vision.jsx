import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import visionImg from "../../assets/hero.jpeg";

export default function Vision() {
  return (
    <section
      id="vision"
      className="py-5 text-light position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #060b13, #101726, #060b13)",
        fontFamily: "'Urbanist', sans-serif",
      }}
    >
      {/* Floating Orbs */}
      <div className="vision-orb orb-green"></div>
      <div className="vision-orb orb-purple"></div>

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center g-5">
          {/* Left Side - Text */}
          <Col md={6} data-aos="fade-right" className="text-center text-md-start">
            <h2 className="vision-title fw-bold mb-4">
              The Future Through Our Lens
            </h2>
            <p className="vision-text mb-3">
              Vision is not just what we see — it’s how we design reality. We
              believe innovation starts with imagination, powered by code,
              crafted with art, and defined by purpose.
            </p>
            <p className="vision-text mb-4">
              Every line of code, every color, every pixel — all harmonize to
              create experiences that feel alive, purposeful, and visionary.
            </p>
            <button className="vision-btn">Witness the Future</button>
          </Col>

          {/* Right Side - Floating Image */}
          <Col md={6} data-aos="fade-left" className="text-center">
            <div className="vision-frame mx-auto position-relative">
              <div className="vision-glow"></div>
              <img src={visionImg} alt="Vision" className="vision-img img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .vision-title {
          font-size: 2.9rem;
          background: linear-gradient(90deg, #00ffa3, #7a00ff, #00b7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 300% 100%;
          animation: glowText 10s ease infinite;
        }

        .vision-text {
          font-size: 1.15rem;
          color: #dcdcdc;
          line-height: 1.8;
          opacity: 0.9;
        }

        .vision-btn {
          border: 1px solid #00ffa3;
          color: #00ffa3;
          padding: 0.7rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          background: transparent;
          transition: all 0.4s ease;
        }
        .vision-btn:hover {
          background: linear-gradient(90deg, #00ffa3, #7a00ff);
          color: #fff;
          box-shadow: 0 0 20px rgba(0,255,163,0.3);
        }

        .vision-frame {
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 0 40px rgba(0,255,163,0.15);
          transform: perspective(800px) rotateY(-4deg);
          transition: transform 0.6s ease, box-shadow 0.6s ease;
        }
        .vision-frame:hover {
          transform: perspective(800px) rotateY(0deg) scale(1.03);
          box-shadow: 0 0 60px rgba(122,0,255,0.25);
        }

        .vision-img {
          border-radius: 25px;
          filter: brightness(0.9);
          transition: filter 0.5s ease;
        }
        .vision-frame:hover .vision-img {
          filter: brightness(1.1);
        }

        .vision-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(0,255,163,0.15), transparent 70%);
          filter: blur(100px);
          z-index: 0;
        }

        .vision-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          animation: float 12s ease-in-out infinite alternate;
          opacity: 0.6;
        }
        .orb-green {
          top: -120px;
          left: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0,255,163,0.25), transparent 70%);
        }
        .orb-purple {
          bottom: -150px;
          right: -150px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(122,0,255,0.25), transparent 70%);
        }

        @keyframes glowText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          from { transform: translateY(0); }
          to { transform: translateY(40px); }
        }

        @media (max-width: 768px) {
          .vision-title { font-size: 2.2rem; text-align: center; }
          .vision-text { text-align: center; }
          .vision-btn { display: block; margin: 0 auto; }
          .vision-frame { transform: none; max-width: 90%; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
