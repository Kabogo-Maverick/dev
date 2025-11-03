import React from "react";
import { motion } from "framer-motion";

export default function ContactIntro() {
  const handleScroll = (e) => {
    e.preventDefault();
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="contact-intro position-relative text-center text-light d-flex flex-column justify-content-center align-items-center overflow-hidden"
      style={{
        minHeight: "90vh",
        background: "radial-gradient(circle at top left, #0b0f16, #111827, #1a103d 90%)",
        fontFamily: "'Urbanist', sans-serif",
        padding: "4rem 1rem",
      }}
    >
      <div className="glow glow-left"></div>
      <div className="glow glow-right"></div>

      <motion.span
        style={{
          color: "rgba(255,255,255,0.7)",
          letterSpacing: "3px",
          textTransform: "uppercase",
          fontSize: "0.95rem",
          marginBottom: "1rem",
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Reach Out | Collaborate | Create
      </motion.span>

      <motion.h2
        className="fw-bold mb-3"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "3.2rem",
          background:
            "linear-gradient(90deg, #00ffa3, #7a00ff, #ff00cc, #00ffa3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: "300% 100%",
          animation: "gradientShift 8s ease infinite",
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let’s Build Something Remarkable
      </motion.h2>

      <motion.p
        style={{
          color: "rgba(255,255,255,0.85)",
          maxWidth: "650px",
          lineHeight: "1.8",
          fontSize: "1.15rem",
          fontStyle: "italic",
          marginBottom: "2.5rem",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Every connection sparks potential — a fresh idea, a bold project, or an unforgettable experience.  
        Whether you’re a creator, client, or fellow dreamer, I’d love to hear your thoughts.  
        Let’s turn imagination into impact.
      </motion.p>

      {/* Smooth Scroll Button */}
      <motion.button
        onClick={handleScroll}
        className="btn btn-outline-light rounded-pill px-5 py-3 fw-semibold"
        style={{
          borderColor: "#00ffa3",
          color: "#00ffa3",
          transition: "all 0.3s ease",
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px #00ffa3",
        }}
      >
        Start a Conversation
      </motion.button>

      <style>{`
        .glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(130px);
          opacity: 0.35;
          animation: float 10s ease-in-out infinite alternate;
          z-index: 0;
        }

        .glow-left {
          width: 280px;
          height: 280px;
          top: -70px;
          left: -90px;
          background: rgba(0, 255, 163, 0.3);
        }

        .glow-right {
          width: 320px;
          height: 320px;
          bottom: -70px;
          right: -80px;
          background: rgba(255, 0, 204, 0.25);
          animation-delay: 3s;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-25px); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
