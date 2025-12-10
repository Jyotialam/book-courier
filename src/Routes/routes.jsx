import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Auth/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    ),

    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
