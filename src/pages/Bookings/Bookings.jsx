/** @format */

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Providers";
import BookingRow from "./BookingRow";
const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE", // Use uppercase for consistency
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          } else {
            alert("Failed to delete booking");
          }
        })
        .catch((error) => {
          console.error("Error deleting booking:", error);
          alert("An error occurred while deleting");
        });
    }
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  });
  return (
    <div>
      <h2 className="text-5xl">Your bookings: {bookings.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
