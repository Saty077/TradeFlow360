import React from "react";

function Hero() {
  return (
    <div className="container text-center border-bottom p-3 mt-5 mb-5">
      <h1 className="mt-5 " style={{ fontSize: "50px" }}>
        Zerodha Products
      </h1>
      <p className="fs-4">Sleek, modern, and intutive trading platforms</p>
      <p className="fs-5.5 mb-5">
        Check out our{" "}
        <a href="" style={{ textDecoration: "none" }}>
          investment offerings{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
