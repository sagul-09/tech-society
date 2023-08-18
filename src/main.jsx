import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import About from "./container/about.jsx";
// import Community from "./container/community.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/About",
  //   element: <About />,
  // },
  // {
  //   path: "/",
  //   element: <Community />,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
