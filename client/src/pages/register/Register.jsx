import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {registerUser} from "../../apis/register.api"

// THINGS TO IMPLEMENT: HANDLE FOR PRE-EXISTING USER ERROR AND MESSAGE DISPLAY TO CHOOSE OTHER NAME, PASS OR EMAIL.


function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault(); 
    setError(false)
    try {
    // user register api call 
     const userRegistered = registerUser(username, email, password)
     userRegistered && window.location.replace("/login")
    }
    catch (err) {
     setError(true)
    }
  }

  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="register-input"
          type="text"
          placeholder="enter you username..."
          onChange= {(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Email</label>
        <input
          className="register-input"
          type="email"
          placeholder="enter you emial..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password</label>
        <input
          className="register-input"
          type="password"
          placeholder="enter you password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="register-button">Register</button>
      </form>
      <button className="register-login-button">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && 
        <span style={{color:"red", marginTop: "10px", fontSize:"20px"}}>Something went Wrong!</span>
      }
      
    </div>
  );
}

export default Register;
