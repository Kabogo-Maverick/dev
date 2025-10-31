import React from "react";
import heroImg from "../assets/hero.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(255,255,255,0.85), rgba(255,192,203,0.2))",
        }}
      ></div>

      {/* Content */}
      <div className="container text-dark position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-3">
              Find Your <span className="text-danger">Tribe</span>,<br />
              Build Your <span className="text-dark">Network.</span>
            </h1>
            <p className="lead text-muted mb-4 fst-italic">
              Connect with like-minded developers for creativity, collaboration,
              and innovation.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a
                href="#join"
                className="btn btn-dark btn-lg rounded-pill px-4 py-2"
              >
                Join for Free →
              </a>
              <a
                href="#explore"
                className="btn btn-outline-dark btn-lg rounded-pill px-4 py-2"
              >
                Explore Communities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
