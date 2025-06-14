import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="largest-broker"></img>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in Inda</h1>
          <p className="mb-5">
            2+ million TradeFlow clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
            <img
              src="media\images\pressLogos.png"
              alt="press-img"
              style={{ width: "90%" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
