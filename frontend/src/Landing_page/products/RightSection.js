import React from "react";

function RightSection({ ImageUrl, Title, Description, Link, LinkName }) {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div
          className="col p-5 "
          style={{ marginTop: "100px", height: "300px" }}
        >
          <h1>{Title}</h1>
          <p>{Description}</p>
          <a className="text-decoration-none" href={Link}>
            {LinkName} <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col p-n5 ">
          <img src={ImageUrl}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
