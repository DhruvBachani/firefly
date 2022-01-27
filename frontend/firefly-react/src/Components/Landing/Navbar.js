import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark firefly-nav mb-2">
      <div className="firefly-logo-container">
        <Link
          className="firefly-logo"
          to={"/"}
          style={{ textDecoration: "none" }}
        >
          FIREFLY
        </Link>
      </div>
      <Link
        className="firefly-logo"
        to={"/login"}
        style={{ textDecoration: "none" }}
      >
        Log In
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link
        className="firefly-logo"
        to={"/signUp"}
        style={{ textDecoration: "none" }}
      >
        Sign Up
      </Link>
    </nav>
  );
}

export default Navbar;
