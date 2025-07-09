/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
