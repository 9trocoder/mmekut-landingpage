import React from "react";
// import heroimage from "../assets/img/hero.png";
import heroimage from "../assets/img/herobeta.png";

import playicon from "../assets/img/svg/Vector.svg"

function Hero() {
  return (
    <div className="herobody">

      <div className="heroBeta">

        <div className="heroleft heroBetaLeft">
          <h1 className="heroHeading">
            The one place to stay <span>Organized </span>and productive
          </h1>
          <p>
            Become focused, organized, and calm with Mmekut Mmekut is built to handle multiple projects across cross-functional teams, organizations and individuals on a single platform
          </p>
          <div className="heroos">
            <button className="herobtn">Get Started for free</button>
            <button className="herobtnRight herobtnGroup">
              <img src={playicon} alt="playicon-svg" />
              <span className="">Watch Free Demo</span>
            </button>
          </div>

        </div>

        <div className="heroright">
          <img src={heroimage} alt="hero-image" />
        </div>

      </div>
    </div>
  );
}

export default Hero;
