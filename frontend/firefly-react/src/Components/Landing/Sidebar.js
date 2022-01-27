import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="firefly-sidebar">
      <div className="sidebar-content-container">
        <div className="sidebar-links-container">
          <Link className="sidebar-links" to={"/dashboard"}>
            Dashboard
          </Link>
        </div>
        <div className="sidebar-links-container">
          <Link className="sidebar-links" to={"/dashboard"}>
            Organisation
          </Link>
        </div>
        <div className="sidebar-links-container">
          <Link className="sidebar-links" to={"/dashboard"}>
            Tasks
          </Link>
        </div>
        <div className="sidebar-links-container">
          <Link className="sidebar-links" to={"/dashboard"}>
            Hours
          </Link>
        </div>
        <div className="sidebar-links-container">
          <Link className="sidebar-links" to={"/dashboard"}>
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
