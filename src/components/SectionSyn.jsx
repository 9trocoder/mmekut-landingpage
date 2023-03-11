import React from "react";
import devicebg from "../assets/img/devices.png";
import syncdevice from "../assets/img/syncdevices.png";

function SectionSyn() {
  return (
    <div className="sectionsyn">
      <div
        className="sectionsyn_cnt"
        style={{ backgroundImage: `url(${devicebg})` }}
      >
        <h2>Built and Synchronize across multiple platforms</h2>
        <p>
          Get mmekut on any device. You can explore and enjoy all features and
          so much more in all platforms. Getting things done has never been this
          easy.
        </p>
        <img src={syncdevice} alt="" />
      </div>
    </div>
  );
}

export default SectionSyn;
