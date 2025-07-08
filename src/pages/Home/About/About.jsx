/** @format */

import React from "react";

const About = () => {
  return (
    <div className="hero h-fit bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full  md:w-3/4 lg:w-1/2 relative  ">
          <img
            src="about-banner-1.png"
            className="w-3/5 h-72 md:h-[360px] lg:h-[460px] rounded-lg shadow-2xl"
          />
          <img
            src="about-banner-2.png"
            className="w-1/2 h-72 md:h-80 lg:h-96 border-4 lg:border-8 border-gray-50 absolute right-28 top-1/3 rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-full md:w-3/4 lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
