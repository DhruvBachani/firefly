import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav className="navbar navbar-expand-sm navbar-dark firefly-nav mb-2">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              FIREFLY
            </a>
          </li>
        </ul>
      </nav>

      <Link to={"/createTask"}>
        <button className="btn btn-primary mg-2">Create Activity</button>
      </Link>

      <br />

      <Link to={"/selectActivity"}>
        <button className="btn btn-primary mg-2">Select Activity</button>
      </Link>
    </div>
  );
};

export default Dashboard;
