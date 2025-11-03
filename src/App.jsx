import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Home from "./pages/Home";
import AboutMk from "./pages/Aboutmk";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Projects from "./pages/Projects"; // ✅ Add this

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutmk" element={<AboutMk />} />
        <Route path="/projects" element={<Projects />} /> {/* ✅ New route */}

        {/* You can add more later like Projects, Contact, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
