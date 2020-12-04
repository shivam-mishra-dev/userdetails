import React, { useState } from 'react';
import Login from './component/login/login';
import UserDetails from './component/userData/usersDetails';
  

function App() {
  const adminUser = {
    email: "admin@gmail.com",
    password: "admin@123"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      setError("Wrong Credentials");
    }
  }

  const logout = () => {
    console.log("logout");
    setUser({
      name: "",
      email: ""
    });
  }
  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome-block">
        <UserDetails name={user.name} />
          <div className="welcome">
            <button onClick={logout}>logout</button>
          </div>
        </div>
      ) : (
          <Login login={login} error={error} />
        )}
    </div>
  );
}

export default App;
