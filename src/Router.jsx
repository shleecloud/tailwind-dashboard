import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import App from "./pages/App";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <div className="h-dvh w-dvw bg-black">
          <Outlet />
        </div>
      }
    >
      {/* <Route path="/login" /> */}
      <Route element={<App />} path="/" />
    </Route>,
  ),
);
