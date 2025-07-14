/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price } = service;
  return (
    <div className="text-center justify-center items-center">
      <h1>Car Services : {title}</h1>
      <div className="card-body text-center justify-center items-center">
        <form>
          <fieldset className="fieldset  ">
            <div className="  grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="label">Name</label>
                <input
                  type="name"
                  name="name"
                  className="input w-64 md:w-72 "
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="label ">Date</label>
                <input
                  type="date"
                  name="date"
                  className="input w-64 md:w-72"
                  placeholder="date"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-64 md:w-72"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="label">Deu amount</label>
                <input
                  type="text"
                  className="input  w-64 md:w-72"
                  defaultValue={price + `$`}
                />
              </div>
            </div>
            <button className="btn btn-primary  btn-block" type="submit">
              Confirm Order
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
