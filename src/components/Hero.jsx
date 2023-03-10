import React from "react";
import heroimage from "../assets/img/hero.png";

function Hero() {
  return (
    <div className="herobody">
      <div className="hero">
        <div className="heroleft">
          <h1>
            The one place to stay <span>Organized </span>and productive
          </h1>
          <p>
            Mmekut is built to handle multiple projects across cross-functional
            teams, organizations and individuals on a single platform
          </p>
          <button className="herobtn">Get Started for free</button>
        </div>
        <div className="heroright">
          <img src={heroimage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
