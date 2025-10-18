import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Style/index.css";
import App from "./App";
import { RouterProvider } from "react-router";
import { router } from "./Routers/Router";
import AuthProvider from "./Providers/AuthProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>
);
