import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/reset.css";
import "./components/global.css";
import App from "./components/app/App";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
