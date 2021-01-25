import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about__container">
      <p className="about__title">About this app:</p>
      <p className="about__main">
        Create a movie application with React.
        <br /> Get movie data from API, sort movies by ratings. <br />
        If you clcik a movie, you can see the full summary.
      </p>
    </div>
  );
}

export default About;
