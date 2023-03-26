import React from 'react';
import "./components.css";

function Footer() {
  return (
    <div className="footerbody">
      <div className="footer-top">
        <div className="footer-topleft">
          <h2 className="footertitle">
            Subscribe to our Newsletter
          </h2>
          <p className="footerparagraph">You can join our mailing list and be the first to receive information about new updates and exciting stuff we are working on.</p>
        </div>
        <div className="footer-topright">
          <input type="text" placeholder='Enter email address' className="footeremailinput" />
          <button className="footersubmitbtn">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer 