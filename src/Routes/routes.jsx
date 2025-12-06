import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";

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
]);
