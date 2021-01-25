import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about__container">
      <p className="about__title">About this app:</p>
      <p className="about__main">
        Create movie application with React.
        <br /> Get the movie data from API, sort movies by ratings.
      </p>
    </div>
  );
}

export default About;
