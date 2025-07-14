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
        <form>
          <fieldset className="fieldset">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
            </div>
            <button className="btn btn-primary  btn-block" type="submit">
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
