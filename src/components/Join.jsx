import React from 'react'
import j1 from "../assets/svg/j1.svg";
import j2 from "../assets/svg/j2.svg";
import j3 from "../assets/svg/j3.svg";
import j4 from "../assets/svg/j4.svg";
import j5 from "../assets/svg/j5.svg";
import j6 from "../assets/svg/j6new.svg";

function Join() {

const jslist = [j1, j2, j3, j4, j5, j6]

  return (
    <div className="joinbd">
      <div className="join">
        <div className="joincnt">
            {/* <p>Join millions of people to capture ideas, organize life, chat and do something creative</p> */}
            <div className="joincntlist">
                {jslist.map((logolist, key) => (
                    <img key={key} src={logolist} alt="" className="logolistimg" />
                ))}
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Join