import React from "react";

export function About() {
  return (
    <div className="about-me-body">
      <img
        className="profile-image"
        src="./assets/images/nicol-profile.jpg"
        alt="Nicol"
      ></img>
      <div className="about-me-words">
        <p className="about-me-desc">
          <h1>About me</h1>
          <p>
            Hi! I am a 28 year old software develope from Sydney, Australia. I
            have been learning how to code for the past year. Previously I
            worked as a diversional therapist and I still work as a photographer
            on the side. I completed a 24 week Full-Stack Bootcamp by Trilogy
            Education and The University Of Sydney in August 2022 and I hold a
            Bachelor of Visual Arts and Design from ACU. I know HTML, CSS and
            Javascript. I am comfortable working with React, NodeJS, ExpressJS,
            MySQL, MongoDB and various CSS libraries
          </p>
        </p>
      </div>
    </div>
  );
}
