import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skillls";
import Projects from "../components/home/Projects";
import Services from "../components/home/Services"
import Footer from "../components/home/Footer";


export default function Home() {
  return (
    <main className="bg-light">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Footer />
    </main>
  );
}
