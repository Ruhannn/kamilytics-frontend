import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Layout";
import Home from "../Home/Home";
import About from "../pages/About";
import Aayka from "../pages/Aayka";
import DashboardLayout from "../layout/DashboardLayout";
import ErrorBoundary from "../provider/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <Error />,
    ErrorBoundary,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/aya",
        element: <Aayka />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    ErrorBoundary,
    // errorElement: <Error />,
    children: [],
  },
]);

export default router;
