import React from "react";

function Brokerage() {
  return (
    <div className="container border-top">
      <div className="row p-5">
        <div className="col-8 p-5">
          <a style={{ textDecoration: "none" }} href="">
            <h2 className="fs-4 text-center p-3">Brokerage calculator</h2>
          </a>
          <p className="text-muted ">
            <ul style={{ lineHeight: "2.5" }}>
              <li>
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday
              </li>
              <li>
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity
              </li>
              <li>
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity,
              </li>
              <li>
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              </li>
              <li>
                currency, and commodity trades. Flat ₹20 on all option trades.
              </li>
              <li>
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
                Flat ₹20 on all option trades.
              </li>
            </ul>
          </p>
        </div>
        <div className="col-3 p-5">
          <a style={{ textDecoration: "none" }} href="">
            <h2 className="fs-4 text-center p-3">List of charges</h2>
          </a>
          <p className="text-muted"></p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
