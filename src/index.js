import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./routes/Home";
import Product from "./routes/Product";
import Token from "./routes/Token";
import ErrorPage from "./routes/ErrorPage";
import Whitepaper from "./routes/Whitepaper";
import Technology from "./routes/Technology";
import Blog from "./routes/Blog";
import Waitlist from "./routes/Waitlist";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <div style={{ "overflow-x": "hidden" }}>
        <Outlet />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "token",
        element: <Token />,
      },
      {
        path: "whitepaper",
        element: <Whitepaper />,
      },
      {
        path: "technology",
        element: <Technology />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "waitlist",
        element: <Waitlist />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
