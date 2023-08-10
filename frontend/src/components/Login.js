import React from "react";
import { Link } from "react-router-dom";

import axios from 'axios'

const baseUrl = "http://localhost:9001"

export default function Login() {
    const[email,setEmail] = React.useState("");
    const[password,setPassword] = React.useState("");

    const authenticate = ()=>{
        console.log("hello");
        axios
        .post(`${baseUrl}/authenticate`, { email, password})
        .then((data) => {
            console.log("hello");
            console.log(data);
            setEmail("");
            setPassword("");
        })
        .catch((err) => console.log(err))
    }

  return (
  <>
  <div className="main">
    <div className="login-container">
        <div className="title">
            <p>Login to secure your tasks</p>
        </div>



        <form action="">
            <div className="email">
                <input type="email" name="email" id="email" placeholder="Enter your email"  
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="password">
                <input type="password" name="password" id="password" placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="submit">
                <button type="submit" onClick={authenticate}>Login</button>
            </div>

        </form>
        <div className="signup-link">
            <p>Haven't created an acount till now? <Link to="/signup">Signup</Link></p>
        </div>
    </div>
  </div>
  
  </>
  );
}
