import React from "react";
import "./About.css";
import { ReactComponent as AboutSvg } from "../../assets/undraw_youtube_tutorial_2gn3.svg";

const About = () => {
  return (
    <div className="about">
      <h1>About us</h1>
      <div className="content">
        <p>
          Meeting new people can be a difficult task in University, especially
          now that we are all taking classes from home reducing the chance of
          meeting new people and making new friends. <br />
          <br />
          This is why we created this application, so that students can interact
          with their classmates like they would in person if not more. With
          randomized voice calls after every lecture to strengthen your
          understanding together and get to know the people in your class, to
          class forums to discuss questions, this app makes your room feel less
          lonely during these hard times.
        </p>
        <AboutSvg className="svg" />
      </div>
    </div>
  );
};

export default About;
