import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="mb-5 fs-2">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            that's why 1.3+ crore customers trust TradeFlow with 3.5+ lakh
            crores worth of equity investments.{" "}
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The TradeFlow universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech starups offr you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initatives like Nudge and Kill Switch, we don't jsut facilitate
            transactions, but activily help you do better with your money
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media\images\ecosystem.png"
            alt="stats-img"
            style={{ width: "90%" }}
          ></img>

          <div className="text-center">
            <a href=" " className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href=" " style={{ textDecoration: "none" }}>
              Try kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
