import React from "react";
import heroImg from "../../assets/hero.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center position-relative"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle dark overlay with pink tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.55), rgba(255,182,193,0.25))",
          mixBlendMode: "multiply",
        }}
      ></div>

      {/* Content */}
      <div className="container text-white position-relative py-5">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-3">
  Crafting <span className="text-warning">Elegant</span> Code,<br />
  Building <span className="text-light">Intelligent</span> Systems.
</h1>

           <p className="lead text-light mb-4 fst-italic">
  A Kenyan innovator shaping the web through elegant design, robust backends, and seamless user experiences.
</p>


            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a
                href="#join"
                className="btn btn-light btn-lg rounded-pill px-4 py-2 fw-semibold shadow-sm"
                style={{
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.boxShadow = "0 0 20px #ffb6c1")}
                onMouseOut={(e) => (e.target.style.boxShadow = "none")}
              >
                About Mkay 
              </a>

              <a
                href="#explore"
                className="btn btn-outline-light btn-lg rounded-pill px-4 py-2 fw-semibold"
              >
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
