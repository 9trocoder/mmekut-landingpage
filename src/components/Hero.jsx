import React from "react";
// import heroimage from "../assets/img/hero.png";
import heroimage from "../assets/img/heroImg.png";
import pinkVector from "../assets/svg/bgVectorCpink.svg"
import blueVector from "../assets/svg/bgVectorCblue.svg"
import yellowEllipse from "../assets/svg/Ellipseyellow.svg"
import pinkEllipse from "../assets/svg/Ellipsepink.svg"
import blueEllipse from "../assets/svg/Ellipseblue.svg"





import playicon from "../assets/img/svg/Vector.svg"

function Hero() {
  return (
    <div className="herobody">
      {/* Vectors in Postitions */}
      <img className="vector-one" src={pinkVector} alt="vectorpink" />
      <img className="vector-two" src={blueVector} alt="vectorblue" />
      <img className="ellipse-one" src={yellowEllipse} alt="yellowellipse" />
      <img className="ellipse-two" src={pinkEllipse} alt="pinkellipse" />
      <img className="ellipse-three" src={yellowEllipse} alt="yellowellipse" />
      <img className="ellipse-four" src={yellowEllipse} alt="yellowellipse" />
      <img className="ellipse-five" src={blueEllipse} alt="blueellipse" />
      <img className="ellipse-six" src={blueEllipse} alt="blueellipse" />
      <img className="ellipse-seven" src={blueEllipse} alt="blueellipse" />
      <img className="ellipse-eight" src={blueEllipse} alt="blueellipse" />
      <img className="ellipse-nine" src={blueEllipse} alt="blueellipse" />
      <img className="ellipse-ten" src={blueEllipse} alt="blueellipse" />







      
      {/* Vectors End */}
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
          <img src={heroimage} alt="hero" />
        </div>

      </div>
    </div>
  );
}

export default Hero;
