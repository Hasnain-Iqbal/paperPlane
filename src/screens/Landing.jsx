import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Hero from "../components/Sections/Hero.jsx";
import WhatWeDo from "../components/Sections/WhatWeDo.jsx";
import Pricing from "../components/Sections/Pricing.jsx";
import Demo from "../components/Sections/Demo.jsx";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Hero />
      <WhatWeDo />
      <Demo />
      <Pricing />
      <Footer />
    </>
  );
}


