import React from "react";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Navbar from "../components/Navbar";

import SectionOne from "../components/SectionOne";

import SectionSyn from "../components/SectionSyn";
import CustomerService from "../components/CustomerService";

import Testimonials from "../components/Testimonials";

import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Join />
      <SectionOne />
      <SectionSyn />
      <CustomerService />
      <Testimonials />
      {/* <Testimonies /> */}
      <Footer />
    </>
  );
}

export default Homepage;
