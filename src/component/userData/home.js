import React from "react";
import profile from "../images/profile.png";
function Home(props) {
    return (
        <div className="data-wrapper">
            <div className="card-wrapper">
                <figure>
                    <img src={profile}/>
                </figure>
                <div className="card">
                    <h1>Name:{props.name}</h1>
                    <span>Email:</span>
                </div>
            </div>
        </div>
    )
}

export default Home;