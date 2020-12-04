import React, { useState } from 'react';
import login from '../login/login.css'
function Login({ login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });
    const submitHandler = e => {
        e.preventDefault();
        login(details);
    }
    return (
        <form onSubmit={submitHandler} className="form-wrapper">
            <div className="form-inner">
               
                {(error != "") ? (<div className="error">{error}</div>):""}
                <div className="form-group">
                    <input type="text" placeholder="name" name="name" id="name" onChange={e => setDetails({...details,name:e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <input type="email" placeholder="email" name="email" id="email" onChange={e => setDetails({...details,email:e.target.value})} value={details.email} />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="password" name="password" id="pasword" onChange={e => setDetails({...details,password:e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="Sign In"/>
            </div>
        </form>
    )
}

export default Login