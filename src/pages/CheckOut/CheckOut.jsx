/** @format */

import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/Providers";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);
  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const due_amount = form.due_amount.value;
    const order = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price,
      due_amount,
    };
    console.log(order);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="text-center justify-center items-center">
      <h1>Car Services : {title}</h1>
      <div className="card-body text-center justify-center items-center">
        <form onSubmit={handleBookService}>
          <fieldset className="fieldset  ">
            <div className="  grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="label">Name</label>
                <input
                  type="name"
                  name="name"
                  className="input w-64 md:w-72 "
                  defaultValue={user?.displayName}
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
                  defaultValue={user?.email}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="label">Deu amount</label>
                <input
                  type="text"
                  name="due_amount"
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
