/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import router from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <div className="mx-8 my-4">
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </div>
);
