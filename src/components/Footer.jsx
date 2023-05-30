import React from "react";
import mmekutlogo from "../assets/svg/mmekutlogo.svg";
import "./components.css";
import "../assets/styles/styles.css"
import twitter from "../assets/svg/twitter.svg"
import insta from "../assets/svg/insta.svg"


function Footer() {
  return (
    <div className="footerbody">
      <div className="footercnt">
        <div className="footercnt-left">

          <div className="footerlogo">
            <img src={mmekutlogo} alt="footerLogo" />
            <span className="">mmekut</span>
          </div>

          <div className="footercont">
            <p> Built to handle multiple projects across cross-functional teams</p>
          </div>

        </div>

        <div className="footercnt-right">
          <div className="footerlinksCnt">
            <h1>Highlights</h1>
            <ul>
              <li>Features</li>
              <li>How it works</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="footerlinksCnt">
            <h1>Quick Links</h1>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Get Started</li>
            </ul>
          </div>
          <div className="footerlinksCnt">
            <h1>Support</h1>
            <ul>
              <li>Feel free to get in touch with us via email</li>
              <li> Email: support@mmekutapp.com</li>
              <li>
                <div>
                <img src={twitter} alt="twitterLogo" />
                <img src={insta} alt="instaLogo" />

                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
