import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending delay
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact-form"
      className="contact-form-section position-relative text-light overflow-hidden py-5"
      style={{
        background: "radial-gradient(circle at center, #0c101b, #0b0f16)",
        fontFamily: "'Urbanist', sans-serif",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Animated background glows */}
      <div className="contact-glow glow1"></div>
      <div className="contact-glow glow2"></div>

      {/* Form Container */}
      <motion.div
        className="form-container p-5 rounded-4 shadow-lg"
        style={{
          maxWidth: "600px",
          width: "90%",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          zIndex: 2,
        }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h3
          className="fw-bold text-center mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            color: "#00ffa3",
            letterSpacing: "1px",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Start a Conversation
        </motion.h3>

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="form-label text-muted">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="form-label text-muted">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label className="form-label text-muted">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={inputStyle}
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0,255,163,0.5)",
            }}
            className="btn w-100 py-3 rounded-5 fw-semibold"
            style={{
              background:
                "linear-gradient(90deg, #00ffa3, #7a00ff, #ff00cc, #00ffa3)",
              backgroundSize: "300% 100%",
              animation: "gradientShift 8s ease infinite",
              border: "none",
              color: "#fff",
              fontStyle: "italic",
              letterSpacing: "0.5px",
            }}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Message Sent ✅"
              : "Send Message 🚀"}
          </motion.button>
        </form>
      </motion.div>

      <style>{`
        /* Glows */
        .contact-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.3;
          animation: float 10s ease-in-out infinite alternate;
          z-index: 0;
        }

        .contact-glow.glow1 {
          width: 300px;
          height: 300px;
          top: -100px;
          left: -80px;
          background: rgba(0, 255, 163, 0.3);
        }

        .contact-glow.glow2 {
          width: 350px;
          height: 350px;
          bottom: -100px;
          right: -80px;
          background: rgba(255, 0, 204, 0.25);
          animation-delay: 4s;
        }

        /* Input Styling */
        input, textarea {
          width: 100%;
          color: #fff;
          transition: all 0.3s ease;
        }

        input:focus, textarea:focus {
          outline: none;
          border: 1px solid #7a00ff;
          box-shadow: 0 0 15px rgba(122,0,255,0.4);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-25px); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @media (max-width: 768px) {
          .form-container { padding: 2rem; }
        }
      `}</style>
    </section>
  );
}

// Custom Input Style
const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "#fff",
  borderRadius: "12px",
  padding: "12px 16px",
  fontSize: "1rem",
  width: "100%",
};
