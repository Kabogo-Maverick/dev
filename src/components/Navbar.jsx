import React from "react";
import logo from "../assets/logo.jpeg"; // your logo image

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div className="container">
        {/* Brand / Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="MaverickDev Logo"
            className="me-2"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span className="fw-bold fst-italic text-dark fs-4">
            Maverick<span className="text-success">Dev</span>
          </span>
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold fst-italic" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold fst-italic" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold fst-italic" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold fst-italic" href="#contact">
                Contact
              </a>
            </li>

            {/* Social Icons */}
            <li className="nav-item ms-lg-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark btn-sm me-2"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark btn-sm me-2"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark btn-sm"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
