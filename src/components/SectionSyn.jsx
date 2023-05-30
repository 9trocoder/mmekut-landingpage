import React from "react";
import devicebg from "../assets/img/devices.png";
import syncdevice from "../assets/svg/BuiltSVG.svg";

function SectionSyn() {
  return (
    <div className="sectionsyn">
      <div
        className="sectionsyn_cnt"
        style={{ backgroundImage: `url(${devicebg})` }}
      >
        <h2 className="sectionsynsH2">Built and Synchronize across multiple platforms</h2>
        <p>
        Join millions of creative members in one place. Get<span> mmekut</span> on any device to explore and enjoy all features and so much more in all platforms. You’ll be able to review your upcoming tasks, and create new ones no matter where you are. Everything stays in perfect sync across all platforms. Getting things done has never been this easy. 
        </p>
        <img className="imgbuild" src={syncdevice} alt="sectionSys" />
      </div>
    </div>
  );
}

export default SectionSyn;
