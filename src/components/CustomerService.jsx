import React from "react";
import customerpng from "../assets/img/customerservice.png";

function CustomerService() {
  return (
    <div className="sectioncus">
      <div className="sectioncusright">
        <img src={customerpng} alt="" />
        <div className="sectioncusrightbody">
          <h2>24/7 Real time support</h2>
          <p>
            Mmekut has the highest rated client support in software. We’re 24
            hours a day, every day of the week.
          </p>
          <p>
            Mmekut also offeres Free coaching, Daily Webinars , Chat & Phone
            customer care services.
          </p>
          <button className="herobtn">Chat with us</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerService;
