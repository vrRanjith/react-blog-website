import { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

function Navbar() {

  const {user, dispatch} = useContext(Context);
  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }; 
  
  const PF = "http://localhost:8000/images/"

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <i className="navbar-left-icons fa-brands fa-facebook"></i>
        <i className="navbar-left-icons fa-brands fa-x-twitter"></i>
        <i className="navbar-left-icons fa-brands fa-square-instagram"></i>
        <i className="navbar-left-icons fa-brands fa-pinterest"></i>
      </div>
      <div className="navbar-center">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="navbar-list-item" onClick={handleLogout}>{user && "Log-Out"}</li>
        </ul>
      </div>
      <div className="navbar-right">
        {user ? (
          <Link to= "/settings">
          <img
            className="navbar-right-image"
            src= {PF + user.profilePic}
            alt="profile"
          />
          </Link>
        ) : (
          <ul className="navbar-list">
            <li className="navbar-list-item">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="navbar-list-item">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="navbar-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Navbar;
