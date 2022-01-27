import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <Navbar />
      <div className="organizations-home-page-container">
        <div className="dashboard-main-container-common">
          <div className="dashboard-first-container">
            <div className="dashboard-text-box">
              <h4>Dashboard</h4>
            </div>
            <div className="dashboard-text-box">
              <p>As of [current(dd/mm/yy)]</p>
            </div>
            <div className="row" style={{ 'margin-left': "0", 'margin-right': "0" }}>
              <div className="col-md-4">
                <div className="volunteer-hours-card">
                  <h3>Total logged hours</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="volunteer-hours-card">
                  <h3>Current month hours</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="volunteer-hours-card">
                  <h3>Badges earned</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
