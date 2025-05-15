import React from "react";

function LeftSection({
  ImageUrl,
  Title,
  Description,
  TryDemo,
  LearnMore,
  PlayStore,
  AppStore,
}) {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src={ImageUrl}></img>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{Title}</h1>
          <p>{Description}</p>
          <div className="mb-3">
            <a href={TryDemo} className="text-decoration-none">
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={LearnMore}
              style={{ marginLeft: "50px" }}
              className="text-decoration-none"
            >
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div>
            <a href={PlayStore}>
              {" "}
              <img src="media\images\googlePlayBadge.svg"></img>
            </a>
            <a href={AppStore}>
              {" "}
              <img
                src="media\images\appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
