import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import navlogo from "../assets/svg/mmekutlogo.svg";
import menu from "../assets/svg/menu.svg";
import "./components.css";
import "../assets/styles/styles.css"

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  // Notes for editing:
  // Dark Node, Animation, Responsive(Mobile Navigation)

  return (
    <>
      <nav className={`${show ? "navbar-white" : "navbar"}`}>
        
        <div className="navbar_left">
          <Link to="/" className="navlogo">
            <img src={ navlogo } alt="navbarLogo" />
            <span className="navbar_mmekut">mmekut</span>
          </Link>
        </div>
        <div className="navbar_right">
        <Link to="/" className="navbar_rightitem ">
            Features
          </Link>
          <Link to="/" className="navbar_rightitem">
            How it works
          </Link>
          <Link to="/" className="navbar_rightitem">
            Pricing
          </Link>
          <Link to="/" className="navbar_rightitem">
            Log in
          </Link>
          <Link to="/" className="navbar_rightitem  navbar_button">
            Get started
          </Link>
          <div className="navmenu">
            <img src={ menu } alt="menu-svg" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
