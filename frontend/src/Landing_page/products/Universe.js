import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container p-5">
      <div className="universe p-5">
        <div className="text-center ">
          <h1 className="mb-4" style={{ fontSize: "35px" }}>
            The TradeFlow Universe
          </h1>
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row p-5 text-center text-muted">
          <div className="col-4">
            <img
              src="media/images/tradeFlow.jpg"
              className="w-50 h-20 mb-2"
              alt="fund-img"
            ></img>
            <p style={{ fontSize: "14px", padding: "15px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 ">
            <img
              src="media/images/smallcaseLogo.png"
              className="mb-2"
              alt="smallcaseLogo"
            ></img>
            <p style={{ fontSize: "14px", padding: "15px" }}>
              {" "}
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
            <img
              src="media/images/sensibullLogo.svg"
              className="w-50 h-30 mb-4"
              alt="sensibullLogo"
            ></img>
            <p style={{ fontSize: "14px", padding: "15px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-4">
            <img
              src="media/images/dittoLogo.png"
              className="w-50 h-20 p-2"
              alt="dittoLogo"
            ></img>
            <p style={{ fontSize: "14px", padding: "15px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
            <img
              src="media/images/streakLogo.png"
              className="w-50 h-20 p-3"
              alt="streakLogo"
            ></img>
            <p style={{ fontSize: "14px", padding: "15px" }}>
              {" "}
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
            <img
              src="media/images/goldenpiLogo.png"
              className="w-50 h-30 p-3"
              alt="goldenpiLogo"
            ></img>
            <p style={{ fontSize: "14px", padding: "15px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <Link to="/signup">
            <button
              className="p-3 btn fs-5 mb-5 mt-5"
              style={{
                width: "20%",
                margin: "0 auto",
                backgroundColor: "#387ed1",
                color: "#fff",
              }}
            >
              Signup for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
