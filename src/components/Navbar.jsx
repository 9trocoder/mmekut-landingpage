import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import navlogo from "../assets/svg/mmekutlogo.svg";
import menu from "../assets/svg/menu.svg";
import "./components.css"

function Navbar() {
     const [show, handleShow] = useState(false);
     const transitionNavBar = () => {
    if (window.scrollY > 200) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <>
        <nav className={show === false ? "navbar" : "navbar-white"}>
            <div className="navbar_left">
                <Link to="/" className='navlogo'> 
                    <img src={navlogo} alt="" />
                </Link>
            </div>
            <div className="navbar_right">
                <Link to="/" className="navbar_rightitem">Features</Link>
                <Link to="/" className="navbar_rightitem">Premium</Link>
                <Link to="/" className="navbar_rightitem">The Team</Link>
                <Link to="/" className="navbar_rightitem">Log in</Link>
                <Link to="/" className="navbar_rightitem  navbar_button">Get started</Link>
                <div className="navmenu">
                    <img src={menu} alt="" />
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar