import React from "react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm fixed-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            width="45"
            height="45"
            className="rounded-circle me-2"
          />
          <span className="fw-semibold fst-italic text-dark fs-5">
            MaverickDev
          </span>
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {["Home", "Features", "About", "Contact"].map((link) => (
              <li className="nav-item mx-2" key={link}>
                <a
                  className="nav-link fw-medium text-dark"
                  href={`#${link.toLowerCase()}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <button className="btn btn-dark rounded-pill px-4 ms-lg-3">
            Join for Free
          </button>
        </div>
      </div>
    </nav>
  );
}
