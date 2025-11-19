import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css/animate.min.css";
import { RouterProvider } from "react-router";
import { Router } from "./Routes/Router.jsx";
import DataProvider from "./Context/Data/DataProvider.jsx";
import AuthProvider from "./Context/Auth/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </DataProvider>
    <Toaster></Toaster>
  </StrictMode>
);
