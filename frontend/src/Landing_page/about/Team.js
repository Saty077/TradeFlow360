import React from "react";

function Team() {
  return (
    <div className="constainer">
      {/* <div className="row p-5 mt-5 mb-5 "></div> */}

      <div className="p-5">
        <div
          className="row p-5 mt-5  border-top "
          style={{ lineHeight: "1.7", fontSize: "1.2em" }}
        >
          <div className="row">
            <h1 className="fs-2 text-center mb-5" style={{ lineHeight: "1.5" }}>
              About Project
            </h1>
            <h1
              className="fs-4 text-center text-muted"
              style={{ lineHeight: "1.5" }}
            >
              This is my Full-Stack Web Development project Zerodha <br></br>{" "}
              This Project is build using MERN Stack technology
            </h1>
          </div>
          <div className="col-6 p-5 text-muted">
            <p>
              This project features secure user authentication with JWT and a
              personalized trading dashboard. After logging in or signing up,
              users are directed to a responsive dashboard where they can
              explore various trading tools and access personalized content with
              ease.
            </p>
            <p>
              Users can place buy and sell orders seamlessly within the
              dashboard. All transactions are tracked and displayed in the
              "Orders" section, allowing users to review their order history and
              manage trades efficiently in real time through a user-friendly
              interface.
            </p>
            <p>
              The portfolio section lets users track holdings, view P&L
              statements, and get investment insights. The layout is designed
              for clarity, making portfolio tracking simple and effective.
            </p>
          </div>
          <div className="col-6 p-5 text-muted">
            <p>
              Advanced charting tools are included with support for technical
              indicators. Users can interact with these charts to analyze price
              trends and patterns. This feature enhances trading strategies and
              offers deeper market analysis for active investors.
            </p>
            <p>
              A functional watchlist allows users to monitor selected assets.
              includes supporting UI elements for smooth interaction. users can
              interact with items of watchlist just by hovering on them and make
              buy and sell orders accordingly.
            </p>
            <p>
              The project was built over two months using the MERN stack. React,
              Bootstrap, and Material UI power the frontend. Node.js and Express
              along with other packages handle the backend, while MongoDB stores
              data. The structure includes folders for the landing page,
              dashboard, and backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
