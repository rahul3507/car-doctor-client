/** @format */

import React from "react";
import Carousel from "../../../components/ui/carousel";
const slideData = [
  {
    title: "Mystic Mountains",
    desc: "Experience the serene beauty of the mountains with our latest collection.",
    button: "Explore Component",
    src: "banner-1.png",
  },
  {
    title: "Urban Dreams",
    desc: "Explore the vibrant city life with our Urban Dreams collection.",
    button: "Explore Component",
    src: "banner-2.png",
  },
  {
    title: "Neon Nights",
    desc: "Immerse yourself in the electrifying atmosphere of the city at night.",
    button: "Explore Component",
    src: "banner-3.png",
  },
  {
    title: "Desert Whispers",
    desc: "Uncover the hidden gems of the desert with our Desert Whispers collection.",
    button: "Explore Component",
    src: "banner-4.png",
  },
];
const Banner = () => {
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
};

export default Banner;
