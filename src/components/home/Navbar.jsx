import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  // Hide/show navbar on scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const nav = document.getElementById("navmenu");
      const toggler = document.getElementById("navbar-toggler");

      if (
        navOpen &&
        nav &&
        !nav.contains(e.target) &&
        !toggler.contains(e.target)
      ) {
        setNavOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [navOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Mk", path: "/aboutmk" },
    { name: "Projects", path: "/projects" },
    // { name: "Portfolio", path: "/portfolio" },
    { name: "Resume", path: "/resume" },
    { name: "Contact Me", path: "/contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top py-3 ${
        show ? "nav-visible" : "nav-hidden"
      }`}
      style={{
        background: "transparent",
        transition: "all 0.4s ease",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            width="45"
            height="45"
            className="rounded-circle me-2 border border-light"
          />
          <span className="fw-semibold fst-italic text-white fs-5">
            MaverickDev
          </span>
        </Link>

        {/* Toggle Button */}
        <button
          id="navbar-toggler"
          className="navbar-toggler border-0"
          type="button"
          onClick={(e) => {
            e.stopPropagation(); // Prevent immediate close
            setNavOpen(!navOpen);
          }}
        >
          <span
            className={`navbar-toggler-icon ${
              navOpen ? "d-none" : "d-inline-block"
            }`}
          ></span>
          <span
            className={`text-white fs-3 fw-bold ${
              navOpen ? "d-inline-block" : "d-none"
            }`}
            style={{ transform: "rotate(90deg)", transition: "all 0.3s ease" }}
          >
            ×
          </span>
        </button>

        {/* Nav Menu */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            navOpen ? "show" : ""
          }`}
          id="navmenu"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 text-center">
            {links.map((link) => (
              <li className="nav-item mx-2" key={link.name}>
                <Link
                  to={link.path}
                  className="nav-link fw-semibold text-white"
                  style={{
                    transition: "color 0.3s ease",
                  }}
                  onClick={() => setNavOpen(false)}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "#00ffcc") // glowing aqua hover
                  }
                  onMouseLeave={(e) => (e.target.style.color = "#fff")}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="btn btn-outline-light rounded-pill px-4 ms-lg-3"
            onClick={() => setNavOpen(false)}
          >
            Join My Community
          </button>
        </div>
      </div>
    </nav>
  );
}
