import * as React from "react";
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";

import "./App.css";
import RootLayout from "./Layout/RootLayout";
import ComingSoon from "./componets/ui/ComingSoon";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/sigup/Signup";
import DashOverview from "./pages/dashboard/DashOverview";



const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/dashboard", element: <DashOverview /> },

    

      { path: "*", element: <ComingSoon /> },
    ],
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}