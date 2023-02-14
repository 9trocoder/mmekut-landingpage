import React from "react";
import "./components.css";
import reminderimg from "../assets/img/reminderimg.png";

function SectionTwo() {
  return (
    <div className="sectionbody">
      <div className="sectioncnt">
        <div className="sectiontwoleft">
          <div className="sectag">
            <h6>Reminder</h6>
          </div>
          <h2>Get reminded anytime, any where</h2>
          <p>
            With mmekut notification, you can get reminders, communications and
            other timely information anytime, and anywhere.
          </p>
        </div>
        <img src={reminderimg} alt="" />
      </div>
      
    </div>
  );
}

export default SectionTwo;
