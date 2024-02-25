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
import Login from "./pages/Login";
import { Toaster } from "./components/ui/toaster";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NavBar from "./components/nav-bar";
import Customers from "./pages/Customers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <div className="h-dvh container pb-4">
          <Toaster />
          <Outlet />
        </div>
      }
    >
      <Route element={<Login />} index />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route
        element={
          <section className="h-full flex flex-col">
            <NavBar />
            <Outlet />
          </section>
        }
      >
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Customers />} path="/customers" />
        <Route element={<About />} path="/about" />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
