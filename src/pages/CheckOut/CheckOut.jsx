/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service;
  return (
    <div>
      <h1>Car Services : {title}</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          <form>
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default CheckOut;
