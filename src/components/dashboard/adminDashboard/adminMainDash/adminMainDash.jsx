import React from "react";
import Cards from "../adminMainDash/adminCards/adminCards";
import Table from "../adminMainDash/adminTable/adminTable";
import "./adminMainDash.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1><b>Admin Dashboard</b></h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
