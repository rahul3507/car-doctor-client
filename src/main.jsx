/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./pages/Providers/Providers.jsx";

createRoot(document.getElementById("root")).render(
  <div className="px-8  dark:bg-gray-900">
    <StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </StrictMode>
  </div>
);
