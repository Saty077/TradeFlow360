import React from "react";
import "./support.css";

function Hero() {
  return (
    <div className="container-fluid p-5 ">
      <div className="supportWrapper fs-6 mx-5">
        <h1 className="fs-4">Support Portal</h1>
        <a href="" className="Link">
          Track Tickets
        </a>
      </div>
      <div className="row" id="wrapper">
        <div className="col-6 p-3">
          <h1 className="fs-4 ">
            Search for an answer or browse help topics to create a ticket
          </h1>{" "}
          <br></br>
          <input
            className="input"
            placeholder="EG: how do activate, why is my order getting rejected.."
          ></input>{" "}
          <br></br> <br></br>
          <a href="">Track account opening</a> &nbsp;
          <a href="">Track segment activation</a> &nbsp;
          <a href="">Intraday margins</a> &nbsp;
          <a href="">Kite user manual</a> &nbsp;
          <a href="">Track account</a> &nbsp;
        </div>
        <div className="col-6 p-5 featured ">
          <h1 className="fs-4 p-2">Featured</h1>
          <ol>
            <li>
              <a href="">Surveillance measure on scrips - May 2025</a>
            </li>
            <li>
              <a href="">Surveillance measure on scrips - May 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
