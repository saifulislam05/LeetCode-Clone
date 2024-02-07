import React  from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
const Layout = () => {

  return (
    <div className="relative">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
