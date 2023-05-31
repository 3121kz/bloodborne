import React from "react";
import Maria from "../images/bloodborneMaria.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Maria})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About game</h1>
        <p>
          Bloodborne is a 2015 Action RPG from renowned Japanese developer
          FromSoftware exclusively for the PlayStation system. Face your fears
          as you search for answers in the ancient city of Yharnam, now cursed
          with a strange endemic illness spreading through the streets like
          wildfire. Danger, death and madness lurk around every corner of this
          dark and horrific world, and you must discover its darkest secrets in
          order to survive.
        </p>
      </div>
    </div>
  );
}

export default About;
