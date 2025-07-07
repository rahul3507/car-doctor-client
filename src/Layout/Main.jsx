/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
import Navbar from "../components/common/navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
