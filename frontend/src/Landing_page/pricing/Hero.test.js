import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./Hero";

describe("Hero Component", () => {
  test("renders Hero", () => {
    render(<Hero />);
    const heroImg = screen.getByAltText("Pricing-equity");
    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute("src", "media/images/pricingEquity.svg");
  });

  test("renders Hero", () => {
    render(<Hero />);
    const heroImg = screen.getByAltText("intraday-Trades");
    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute("src", "media/images/intradayTrades.svg");
  });
});
