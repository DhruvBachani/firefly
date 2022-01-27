import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Navbar />

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
