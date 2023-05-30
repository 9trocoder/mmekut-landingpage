import React from "react";
import "./components.css";
import secone from "../assets/img/seconeImg.png"

function SectionOne() {
  return (
    <div className="sectiononebd">
      <div className='circle-three'></div>
      <div className='circle-four'></div>

      <div className="sectionone">

        <div className="blurellipse-one"></div>
        <div className="blurellipse-two"></div>

        
        <div className="sectionone_cnt">
          <h1>Get it done for real with one simple app </h1>
          <p>
            Mmekut is a co-working space platform; Tasks, chat, calendar & more. Mmekut was built to allow everyday users and organizations to manage and track their tasks in the most efficient manner. mmekut provides the tool to create, assign, collaborate, track and deliver tasks within the desired time frame and quality standards. Join millions of creative members in one place. With mmekut you can Plan, track, and manage your tasks and projects with ease.
          </p>
          <button className="herobtn">Get Started for free</button>
        </div>

        <div className="imgGroup">
          <img src={secone} alt="" />
        </div>

      </div>
    </div>

  );
}

export default SectionOne;
