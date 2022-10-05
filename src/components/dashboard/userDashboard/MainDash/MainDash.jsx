import React from "react";
import Cards from "../MainDash/Cards/Cards";
import Table from "../MainDash/Table/Table";
import "./MainDash.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1><b>Dashboard</b></h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
