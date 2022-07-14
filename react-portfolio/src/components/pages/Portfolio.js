import React from "react";

export function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      {/* Techworld section */}
      <div className="project-wrapper">
        <div class="project-example">
          <a
            href="https://techworld-blog.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="portfolio-image"
              src="./assets/images/techworld-example.png"
              alt="screenshot of techworld application"
            ></img>
          </a>
        </div>
        <section className="project">
          <div class="project-description">
            <h3>TechWorld</h3>
            <p>
              TechWorld is a blog posting application which allows users to make
              an account, post text-based blog posts, edit and delete their
              posts, and comment on posts.
              <br></br>TechWorld started as an assignment in my coding bootcamp.
              <br></br>
              <br></br> TechWorld is a full-stack RESTful application, built
              using; Express.js, NodeJS, MySql2, Sequelize and Express-session.
              Check out the deployed site on Heroku{" "}
              <a href="https://techworld-blog.herokuapp.com/" target="blank">
                here!
              </a>
              <br></br>Check out the Github repo{" "}
              <a
                href="https://github.com/nicolmmm/techworld-blog"
                target="blank"
              >
                here!
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* Running Tracks section */}
      <div className="project-wrapper">
        <div className="project-example">
          <a
            href="https://running-tracks.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="portfolio-image"
              src="./assets/images/runningtracks-example.png"
              alt="screenshot of runningtracks application"
            ></img>
          </a>
        </div>
        <section className="project">
          <div class="project-description">
            <h3>RunningTracks</h3>
            <p>
              RunningTracks is an application where users can post their runs to
              track their progress. The application allows users to share their
              runs with other application users and see other users’ activity
              presented with dynamically generated charts. RunningTracks
              incentivises users to run with it’s leveling up feature making the
              application more fun to use.
              <br></br>RunningTracks started as a group assignment in my coding
              bootcamp. I collaborated with two others to build this
              application. RunningTracks is a full-stack RESTful application
              built using Express.js, NodeJS, MySql2, Sequelize and
              Express-session, ChartJS and bootstrap.
              <br></br>
              Check out the deployed site on Heroku
              <a href="https://running-tracks.herokuapp.com/" target="blank">
                here!
              </a>
              <br></br>Check out the Github repo{" "}
              <a
                href="https://github.com/nicolmmm/RunningTracks"
                target="blank"
              >
                here!
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
