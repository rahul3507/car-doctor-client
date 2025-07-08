/** @format */

import React from "react";
import Carousel from "../../../components/ui/carousel";
const slideData = [
  {
    src: "banner-1.png",
  },
  {
    src: "banner-2.png",
  },
  {
    src: "banner-3.png",
  },
  {
    src: "banner-4.png",
  },
];
const Banner = () => {
  return (
    <div className="relative overflow-hidden w-full h-full py-6 md:py-14 lg:py-16">
      <Carousel slides={slideData} />
    </div>
  );
};

export default Banner;
