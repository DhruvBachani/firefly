import React from "react";
import OrganizationsSummaryTable from "./OrganizationsSummaryTable";
import Navbar from "../Landing/Navbar";
import Sidebar from "../Landing/Sidebar";

const OtherOrganizationsHomePage = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <Navbar />
      <div className="organizations-home-page-container">
        <div className="organizations-summary-container">
          <hr />
          <h2>Summary</h2>
          <hr />

          <OrganizationsSummaryTable />
        </div>
      </div>
    </React.Fragment>
  );
};

export default OtherOrganizationsHomePage;
