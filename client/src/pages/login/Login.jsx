import { useContext, useRef} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import {Context} from "../../context/Context"
import axios from "axios";

function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} = useContext(Context);

  const handleSubmit = async (e) => { 
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
      // login api call
      const res = await axios.post("/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    }
    catch (err) {
      dispatch({type: "LOGIN_FAILURE"});
    }
  };
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="login-input"
          type="text"
          placeholder="enter you username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="enter you password..."
          ref={passwordRef}
        />
        <button className="login-button" type="submit" disabled={isFetching}>Login</button>
      </form>
      <button className="login-register-button">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login;
