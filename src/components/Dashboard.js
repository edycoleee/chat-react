//components/Dashboard.js
import React from "react";
import Sidebar from "./Sidebar";

function Dashboard({ id }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <Sidebar id={id} />
    </div>
  );
}

export default Dashboard;
