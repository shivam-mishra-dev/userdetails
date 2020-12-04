import React from 'react';
import navBar from "../layout/navBar.css";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
function NavBar(props) {
    return (
        <nav className="navbar">
            <NavLink to="/" className="logo-wrapper">
                <img src={logo} alt="logo" />
            </NavLink>
            <div>
                <ul className="navigation">
                    <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                    <li><NavLink className="nav-link" to="">Our Service</NavLink></li>
                    <li><NavLink className="nav-link" to="">Contact Us</NavLink></li>
                </ul>
                <p className="note">welcome {props.name}</p>
            </div>
        </nav>
    )
}
export default NavBar;