import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/public/logo.svg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isAutenticated = false;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h4 className="logo_heading">Memories</h4>
      </div>
      <ul className="menu">
        {isAutenticated ? (
          <>
            <div className="profile" onClick={toggleDropdown}>
              <img
                src="https://obaidali.netlify.app/assets/me-3-wrM29k.jpeg"
                alt="profile"
              />
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <Link to="/">
                    <li>Profile</li>
                  </Link>
                  <Link to="/">
                    <li>Security</li>
                  </Link>
                  <li>
                    <button className="registerBtn">Logout</button>
                  </li>
                </ul>
              )}
            </div>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <button className="loginBtn">Login</button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button className="registerBtn">Sign Up</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
