import React from "react";
import { useAuth } from "../../contexts/authprovider.jsx";
import {Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return true ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} replace state={{ path: location.pathname }} />
  );
};

export default AuthRoute;
