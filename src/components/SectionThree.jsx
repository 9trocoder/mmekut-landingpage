import React from "react";
import calendarimg from "../assets/img/calendarimg.png";
import "./components.css"

function SectionThree() {
  return (
    <div className="sectionbody">
      <div className="sectionthree">
        <img src={calendarimg} alt="" />
        <div className="sectionthreeleft">
          <div className="secthreetag">
            <h6>Calendar</h6>
          </div>
          <h2>Flexible Calendar views</h2>
          <p>
            With Calendar views, you can check and handle your schedules in a more convenient way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
