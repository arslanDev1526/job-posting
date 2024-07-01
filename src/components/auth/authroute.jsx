import React from "react";
import { useAuth } from "../../contexts/authprovider.jsx";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const auth = useAuth();
  const location = useLocation();
  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate
      to={"/register"}
      replace
      state={{ path: location.pathname }}
    />
  );
};

export default AuthRoute;