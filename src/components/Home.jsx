import React from "react";
import Hero from "./Hero";
import About from "./About";

export default function Home() {
  return (
    <main className="bg-light">
      <Hero />
      <About />
    </main>
  );
}
