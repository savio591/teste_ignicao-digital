import React from "react";

import Vertical_menu from "./components/Vertical_menu";
import Navbar from "./components/Navbar";
import Bread_crumbs from "./components/Bread_crumbs";
import Dashboard from "./components/Dashboard";

export default function PageDashboard() {
  return (
    <>
      <Vertical_menu />
      <div id="col_2">
        <Navbar />
        <Bread_crumbs />
        <Dashboard />
      </div>
    </>
  );
}
