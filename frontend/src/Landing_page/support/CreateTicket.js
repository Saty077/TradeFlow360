import React from "react";

function createTicket() {
  return (
    <div className="container p-5" style={{ padding: "10px" }}>
      <h1 className="fs-4  text-muted">
        To create a ticket, select a relevant topic
      </h1>
      <div className="row p-5 fs-6">
        <div className="col-4 p-5 mb-3">
          <a
            href=""
            style={{
              textDecoration: "none",
              lineHeight: "2",
              color: "black",
            }}
          >
            <p className="fs-4">
              <i class="fa fa-plus-square-o" aria-hidden="true"></i>
              &nbsp; Account Opening
            </p>
          </a>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Resident individual
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Minor{" "}
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Non Resident Indian (NRI)
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Company, Partnership, HUF and LLP{" "}
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Glossary{" "}
          </a>
          <br />{" "}
        </div>
        <div className="col-4 p-5 mb-3">
          <a
            href=""
            style={{
              textDecoration: "none",
              lineHeight: "2",
              color: "black",
            }}
          >
            <p className="fs-4">
              <i class="fa fa-user-o" aria-hidden="true"></i>&nbsp; Your
              TradeFlow Account
            </p>
          </a>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Your Profile
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Account modification
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Client Master Report (CMR) and Depository Participant (DP)
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Nomination
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Transfer and conversion of securities
          </a>
          <br />{" "}
        </div>
        <div className="col-4 p-5 mb-3">
          <a
            href=""
            style={{
              textDecoration: "none",
              lineHeight: "2",
              color: "black",
            }}
          >
            <p className="fs-4">
              {" "}
              <i class="fa fa-bar-chart" aria-hidden="true"></i>&nbsp; Kite
            </p>
          </a>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            IPO
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Trading FAQs
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Margin Trading Facility (MTF) and Margins
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Charts and orders
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Alerts and Nudges
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            General
          </a>
          <br />{" "}
        </div>
        <div className="col-4 p-5 mb-3 ">
          <a
            href=""
            style={{
              textDecoration: "none",
              lineHeight: "2",
              color: "black",
            }}
          >
            <p className="fs-4">
              <i class="fa fa-creative-commons" aria-hidden="true"></i>
              &nbsp; Coins
            </p>
          </a>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Understanding mutual funds and Coins
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Minor{" "}
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Coin app
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Coin web
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Transactoins and reports
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Natoinal Pension Scheme (NPS)
          </a>
          <br />{" "}
        </div>
        <div className="col-4 p-5 mb-3">
          <a
            href=""
            style={{
              textDecoration: "none",
              lineHeight: "2",
              color: "black",
            }}
          >
            <p className="fs-4">
              <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
              &nbsp; Funds
            </p>
          </a>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Add money
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Withdraw money
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Add bank accounts
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            eMandates
          </a>
          <br />{" "}
        </div>
        <div className="col-4 p-5 mb-3">
          <a
            href=""
            style={{
              textDecoration: "none",
              lineHeight: "2",
              color: "black",
            }}
          >
            <p className="fs-4">
              <i class="fa fa-circle-o-notch" aria-hidden="true"></i>
              &nbsp; Console
            </p>
          </a>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Portfolio
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Corporate actions
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Funds statement
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Reports
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Profile
          </a>
          <br />{" "}
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Segments
          </a>
          <br />{" "}
        </div>
      </div>
    </div>
  );
}

export default createTicket;
