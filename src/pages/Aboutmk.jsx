import React from "react";
import AboutIntro from "../components/about/AboutIntro";
import Journey from "../components/about/Journey";
import Vision from "../components/about/Vision";
// import Values from "../components/about/Values";
import Footer from "../components/home/Footer";

export default function AboutMk() {
  return (
    <>
      <AboutIntro />
      <Journey />
      <Vision />
      {/* <Values /> */}
      <Footer />
    </>
  );
}
