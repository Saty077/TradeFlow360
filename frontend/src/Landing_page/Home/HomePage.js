import React, { useEffect } from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Educations from "./Education";

import OpenAccount from "../OpenAccount";

function HomePage() {
  const dashboardURL = process.env.REACT_APP_DASHBOARD_URL;
  useEffect(() => {
    if (dashboardURL) {
      fetch(`${dashboardURL}/ping`, {
        method: "GET",
        mode: "no-cors",
      }).catch((err) => {
        console.log("Dashboard wake-up failed (non-blocking):", err);
      });
    }
  }, [dashboardURL]);

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
