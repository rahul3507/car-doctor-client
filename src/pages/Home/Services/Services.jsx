/** @format */

import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-8 space-y-7 ">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-orange-600">Services</h3>
        <h2 className="text-2xl md:text-3xl lg:text-5xl dark:text-white">
          Our Servicec Area
        </h2>
        <p className="dark:text-white">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slighty
          believable.
        </p>
      </div>
      <div className="flex flex-wrap flex-row justify-center-safe gap-5  ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
