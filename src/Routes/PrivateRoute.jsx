/** @format */

import { useContext } from "react";
import { AuthContext } from "../pages/Providers/Providers";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user?.email) {
    return children;
  } else return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
