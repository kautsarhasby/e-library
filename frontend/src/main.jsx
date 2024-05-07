import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { Dashboard } from "./pages/admin/Dashboard.jsx";
import { Books } from "./pages/admin/Books.jsx";
import { Member } from "./pages/admin/Member.jsx";
import { Home } from "./pages/home/Home.jsx";
import { ErrorElement } from "./pages/404.jsx";
import { Register } from "./pages/Register.jsx";
import { AppAdmin } from "./pages/admin/AppAdmin.jsx";
import { Detail } from "./pages/Detail.jsx";
import { AppHome } from "./pages/home/AppHome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppHome />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Detail />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AppAdmin />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "member",
        element: <Member />,
      },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
