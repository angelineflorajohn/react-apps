import React, { Component } from "react";

const NavBar = ({ totalCounters, totalCountersHavingValue }) => {
  console.log("NavBar rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-3">
          {totalCounters}
        </span>
        <span className="badge badge-pill badge-secondary m-3">
          {totalCountersHavingValue}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
