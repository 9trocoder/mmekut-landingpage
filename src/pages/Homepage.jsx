import React from "react";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Navbar from "../components/Navbar";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Join />
      <SectionOne />
      <SectionTwo />
    </>
  );
}

export default Homepage;
