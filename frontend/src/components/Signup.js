import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const baseUrl = "http://localhost:9001"

export default function Signup() {
  const[name,setName] = React.useState("");
  const[contact,setContact] = React.useState("");
  const[password,setPassword] = React.useState("");
  const[coPassword,setCopassword] = React.useState("");
  const[email,setEmail] = React.useState("");
  const sendData = ()=>{
    if(password!==coPassword){
      return ;
    }
    axios
    .post(`${baseUrl}/user`, { name,contact,email,password,coPassword })
    .then((data) => {
        console.log(data);
        setContact("");
        setCopassword("");
        setEmail("");
        setName("")
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
            <div className="name">
              <input
                autoComplete="off"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={name}
              onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="email">
              <input
                autoComplete="off"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
                <div className="contact">
              <input
              autoComplete="off"
                type="phone"
                name="contact"
                id="contact"
                placeholder="Enter your contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="password">
              <input
                autoComplete="off"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="password">
              <input
              autoComplete="off"
                type="password"
                name="password"
                id="password"
                placeholder="Confirm your password"
                value={coPassword}
                onChange={(e) => setCopassword(e.target.value)}
              />
            </div>
            <div className="submit">
              <button type="submit" onClick={sendData}>Login</button>
            </div>
          </form>
          <div className="signup-link">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
