import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import NavBar from "../layout/navbar";
import Sidebar from "../layout/sidebar";
import userdetails from "../userData/userDetails.css";
import about from "../userData/About";
import FooterNav from "../layout/footerNav";
import Home from './home';
function UserDetails(props) {
    return (
        <div className="userField">
            <Router>
                <NavBar name={props.name} />
                <Sidebar/>
                <div className="main-content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={about} />
                  </Switch>
                  </div>
                  <FooterNav/>
            </Router>
             


        </div>
    );
}
export default UserDetails;