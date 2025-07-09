/** @format */

import React from "react";
import Banner from "../banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import Footer from "../../../components/common/footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
