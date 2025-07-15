/** @format */

import { X } from "lucide-react";

const BookingRow = ({ booking }) => {
  const { customerName, email, date, service, price, img } = booking;

  return (
    <tr>
      <th>
        <label>
          <button className="cursor-pointer bg-red-600 rounded-full p-2">
            <X className="text-white" />
          </button>
        </label>
      </th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            {img && <img src={img} alt="avatar"></img>}
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{email}</td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
