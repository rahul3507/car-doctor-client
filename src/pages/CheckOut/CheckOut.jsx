/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service;
  return (
    <div>
      <h1>Car Services : {title}</h1>
    </div>
  );
};

export default CheckOut;
