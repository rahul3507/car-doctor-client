/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
import Navbar from "../components/common/navbar/Navbar";
import Banner from "../pages/Home/banner/Banner";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
