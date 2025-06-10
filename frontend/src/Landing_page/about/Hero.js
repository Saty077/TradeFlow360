import React from "react";

function Hero() {
  return (
    <div className="constainer">
      <div className="row mt-5 ">
        <h1 className="text-center">About Developer</h1>
      </div>

      <div className="row" style={{ lineHeight: "1.7", fontSize: "1.2em" }}>
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/SatyamJha.jpg"
            alt="myImg"
            style={{ height: "400px", width: "400px", borderRadius: "100%" }}
            className="ml-5"
          ></img>
          <h2>Satyam Kumar Jha</h2>
          <h3 className="text-muted fs-6">MERN stack, Web Developer</h3>
        </div>
        <div className="col-6 p-5">
          <p>
            I am a passionate MERN Stack Developer and a 2024 B.Tech graduate
            with an impressive CGPA of 8.27, I thrive on building innovative web
            applications that solve real-world problems. With expertise in
            Node.js, Express.js, React.js, MongoDB, Redux, Bootstrap, and
            TailwindCSS, I bring ideas to life through clean, scalable, and
            efficient code.
          </p>
          <p>
            Over time, I have developed multiple projects that showcase my
            technical abilities, including Wonderlust, PostStream, a weather
            application, a Spotify clone, a camera app, and many others.
          </p>
          <p>
            With a keen eye for design and functionality, I constantly seek
            opportunities to refine my skills, contribute to impactful projects,
            and collaborate with like-minded professionals in the ever-evolving
            tech landscape.
          </p>
          <p>
            Connect on{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/satyam-kr-jha/"
            >
              LinkedIn
            </a>{" "}
            /{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Saty077/"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
