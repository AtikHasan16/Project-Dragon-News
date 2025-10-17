import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Style/index.css";
import App from "./App";
import { RouterProvider } from "react-router";
import { router } from "./Routers/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App></App>
    </RouterProvider>
  </StrictMode>
);
