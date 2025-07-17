/** @format */

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Providers";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetch(url, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => setBookings(Array.isArray(data) ? data : []));
    }
  }, [url, user]);

  return (
    <div>
      <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
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
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
