import React from "react";
import mmekutlogo from "../assets/svg/mmekutlogo.svg";
import "./components.css";

function Footer() {
  return (
    <div className="footerbody">
      <div className="footer-top">
        <div className="footer-topleft">
          <h2 className="footertitle">Subscribe to our Newsletter</h2>
          <p className="footerparagraph">
            You can join our mailing list and be the first to receive
            information about new updates and exciting stuff we are working on.
          </p>
        </div>
        <div className="footer-topright">
          <input
            type="text"
            placeholder="Enter email address"
            className="footeremailinput"
          />
          <button className="footersubmitbtn">Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottomright">
          <div className="footer-bottomleft">
            <img src={mmekutlogo} alt="" />
            <p className="footerparagraph">
              Built to handle mulitiple projects across cross-functional teams.
            </p>
          </div>
          <div className="fbottom">
            <h3>Highlights</h3>
            <div className="fbottom-list">
              <p className="fblitem">Features</p>
              <p className="fblitem">Premium</p>
            </div>
          </div>
          <div className="fbottom">
            <h3>Quick Links</h3>
            <div className="fbottom-list">
              <p className="fblitem">Privacy Policy</p>
              <p className="fblitem">Terms of use</p>
              <p className="fblitem">The Team</p>
              <p className="fblitem">Get Started</p>
            </div>
          </div>
          <div className="fbottom">
            <h3>Support</h3>
            <p className="footerparagraph">Feel free to get in touch with us via email</p>
            <p className="footerparagraph">Email: <strong>support@mmekutapp.com</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
