import React from 'react';
import { NavLink } from "react-router-dom";
function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar-link">
                <li><NavLink className="nav-link" to="/">Dashboard</NavLink></li>
                <li><NavLink className="nav-link" to="/">Events</NavLink></li>
                <li><NavLink className="nav-link" to="/">Gallery</NavLink></li>
            </ul>
        </div>
    )
}
export default Sidebar;