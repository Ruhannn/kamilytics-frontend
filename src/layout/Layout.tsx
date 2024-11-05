import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAnalytics from "../hook/useAnalytics";

const Main = () => {
  const location = useLocation();
  useAnalytics(location.pathname);
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
