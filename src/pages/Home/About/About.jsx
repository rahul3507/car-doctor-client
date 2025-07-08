/** @format */

import React from "react";

const About = () => {
  return (
    <div className="hero h-fit bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full  md:w-3/4 lg:w-1/2 relative mb-28 ml-4">
          <img
            src="about-banner-1.png"
            className="w-3/5 h-72 md:h-[360px] lg:h-[460px] rounded-lg shadow-2xl"
          />
          <img
            src="about-banner-2.png"
            className="w-3/5 md:w-1/2 h-72 md:h-80 lg:h-96 border-4 lg:border-8 border-gray-50 dark:border-gray-800 absolute right-4 md:right-20 lg:right-28 top-1/3 rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-full md:w-3/4 lg:w-1/2 space-y-2 lg:space-y-5">
          <h1 className="text-3xl text-orange-500 font-bold">About Us!</h1>
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
            We are qualified & of experience in this field.
          </h1>
          <p className="py-2 lg:space-y-5">
            Car Doctor is an innovative and user-friendly platform designed to
            make car maintenance and repair services more accessible to vehicle
            owners. By leveraging technology, Car Doctor connects car owners
            with certified mechanics, offering a wide range of services, from
            routine maintenance to more complex repairs. Whether it’s an oil
            change, tire replacement, or engine diagnostics, the platform aims
            to provide quality services at affordable rates.
            <br />
            Car Doctor’s primary goal is to ensure that car owners receive the
            right care and attention their vehicles need to maintain peak
            performance. The platform features an easy-to-use interface,
            allowing users to schedule appointments, track service progress, and
            receive real-time updates on their vehicle’s status. In addition,
            Car Doctor allows users to access their vehicle’s service history,
            helping to track maintenance over time.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
