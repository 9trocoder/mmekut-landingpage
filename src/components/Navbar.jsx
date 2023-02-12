import React from 'react'
import { Link } from 'react-router-dom'
import navlogo from "../assets/svg/mmekutlogo.svg";
import "./components.css"

function Navbar() {
  return (
    <>
        <nav className="navbar">
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
            </div>
        </nav>
    </>
  )
}

export default Navbar