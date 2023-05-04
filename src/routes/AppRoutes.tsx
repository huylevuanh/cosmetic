import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { routes } from "./routesString";

import Home from "../modules/Home/Home";

const AppRoutes = (): JSX.Element => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
