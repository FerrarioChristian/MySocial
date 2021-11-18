import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h1 className="loginLogo">G3N3T1C</h1>
          <span className="loginDesc">
            Connect with friends and the world around you on G3N3T1C
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" type="text" className="loginInput" />
            <input placeholder="Email" type="email" className="loginInput" />
            <input
              placeholder="Password"
              type="Password"
              className="loginInput"
            />
            <input
              placeholder="Confirm Password"
              type="Password"
              className="loginInput"
            />
            <button className="loginButton">Sign up</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
