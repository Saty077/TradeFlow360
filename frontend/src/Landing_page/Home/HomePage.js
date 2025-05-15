import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Educations from "./Education";

import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Educations />
      <OpenAccount />
    </>
  );
}

export default HomePage;
