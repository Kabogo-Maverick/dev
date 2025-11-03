import React from "react";
import { Container, Button } from "react-bootstrap";
import { FileEarmarkArrowDown } from "react-bootstrap-icons";
import resumePDF from "../../assets/mk.pdf";

export default function CV() {
  return (
    <section
      id="cv-section"
      className="py-5 text-light position-relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at top left, #0b0f16, #0a0e13, #111827)",
        fontFamily: "'Urbanist', sans-serif",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Floating lights for ambient mood */}
      <div className="cv-glow glow1"></div>
      <div className="cv-glow glow2"></div>
      <div className="cv-glow glow3"></div>

      <Container
        className="text-center position-relative animate-fade-in"
        style={{ zIndex: 2, marginTop: "40px" }}
      >
        <h2
          className="fw-bold mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "2.8rem",
            background: "linear-gradient(90deg, #00ffa3, #7a00ff, #ff00cc, #00ffa3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "300% 100%",
            animation: "textFlow 8s ease infinite",
          }}
        >
          My Professional Journey
        </h2>

        <p
          style={{
            fontSize: "1.2rem",
            color: "rgba(240,240,240,0.8)",
            lineHeight: "1.9",
            maxWidth: "700px",
            margin: "0 auto 2rem",
            fontStyle: "italic",
          }}
        >
          Dive into my world — a chronicle of growth, innovation, and passion.
          This résumé showcases my evolution in tech, data, and creative engineering.
        </p>

        {/* Smooth glass-style frame */}
        <div
          className="cv-frame"
          style={{
            width: "100%",
            height: "80vh",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 0 35px rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
          }}
        >
          <iframe
            src={resumePDF}
            title="Maverick Kabogo CV"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              filter: "brightness(0.95)",
            }}
          ></iframe>
        </div>

        <Button
          variant="outline-light"
          href={resumePDF}
          download="Maverick_Kabogo_CV.pdf"
          className="mt-5 px-5 py-3 rounded-5 d-inline-flex align-items-center shadow-sm"
          style={{
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.05)",
            transition: "all 0.4s ease",
            fontStyle: "italic",
            fontWeight: 500,
            letterSpacing: "0.6px",
            fontSize: "1.05rem",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(90deg, #00ffa3, #7a00ff, #ff00cc)";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.border = "none";
            e.currentTarget.style.boxShadow = "0 0 25px #7a00ff88";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.2)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <FileEarmarkArrowDown size={20} className="me-2" />
          Download CV
        </Button>
      </Container>

      <style>{`
        @keyframes textFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .cv-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.25;
          animation: floatGlow 10s ease-in-out infinite alternate;
          z-index: 0;
        }

        .cv-glow.glow1 {
          width: 320px;
          height: 320px;
          top: -60px;
          left: -80px;
          background: rgba(0, 255, 163, 0.3);
        }

        .cv-glow.glow2 {
          width: 350px;
          height: 350px;
          bottom: -100px;
          right: -80px;
          background: rgba(255, 0, 204, 0.3);
          animation-delay: 3s;
        }

        .cv-glow.glow3 {
          width: 250px;
          height: 250px;
          top: 40%;
          left: 45%;
          background: rgba(122, 0, 255, 0.25);
          animation-delay: 5s;
        }

        @keyframes floatGlow {
          from { transform: translateY(0px) scale(1); opacity: 0.4; }
          to { transform: translateY(-25px) scale(1.1); opacity: 0.7; }
        }

        .animate-fade-in {
          animation: fadeInUp 1.3s ease forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 768px) {
          iframe { height: 70vh !important; }
          h2 { font-size: 2.1rem !important; }
        }
      `}</style>
    </section>
  );
}
