import React from "react";
import calendarimg from "../assets/img/calendarimg.png";
import "./components.css";

function section__right() {
  return (
    <div className="sectionbody">
      <div className="section__right">
        <img src={calendarimg} alt="" />
        <div className="section__right-body">
          <div className="section__right-tag">
            <h6>Calendar</h6>
          </div>
          <h2>Flexible Calendar views</h2>
          <p>
            With Calendar views, you can check and handle your schedules in a
            more convenient way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default section__right;
