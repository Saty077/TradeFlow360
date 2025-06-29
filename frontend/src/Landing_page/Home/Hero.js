import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="home-image"
          className="mb-5"
        ></img>
        <h1 className="mt-5"> Invest in everything</h1>
        <p className="mb-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to="/signup">
          <button
            className="p-3 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            SignUp Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
