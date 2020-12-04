import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import navBar from "../layout/navBar.css";
function FooterNav() {
    return (
        <footer className="footer">
            <div className="footer-wrap">
                <NavLink to="/" className="logo-wrapper">
                    <img src={logo} alt="logo" />
                </NavLink>
                <ul className="footer-link">
                    <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                    <li><NavLink className="nav-link" to="">Our Service</NavLink></li>
                </ul>
                <div className="contact-us">
                   <p>5100 Westheimer Rd Suite 200</p>
                   <p>contact@centusglobal.com</p>
                 </div>
            </div>
        </footer>
    );
}

export default FooterNav;