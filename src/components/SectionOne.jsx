import React from "react";
import "./components.css";
import secone from "../assets/img/lady.png";

function SectionOne() {
  return (
    <div className="sectiononebd">
       <div className="sectionone">
      <div className="sectionone_cnt">
        <h2>Organize it all with one simple app</h2>
        <p>
          Join millions of creative members in one place, A co-working space
          platform: Tasks, Chat, Advertise & more Plan, track, and manage any
          type of work with project management that flexes to team's and
          workspace needed.
        </p>
        <button className="herobtn">Get Started</button>
        <img src={secone} alt="" />
      </div>
    </div>
    </div>
   
  );
}

export default SectionOne;
