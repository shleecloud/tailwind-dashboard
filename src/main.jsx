import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // for tailwindcss
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/Login";
import { Toaster } from "./components/ui/toaster";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Customers from "./pages/Customers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <div className="h-dvh w-dvw">
          <Toaster />
          <Outlet />
        </div>
      }
    >
      <Route element={<App />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<Home />} path="/home" />
      <Route element={<Customers />} path="/customers" />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
