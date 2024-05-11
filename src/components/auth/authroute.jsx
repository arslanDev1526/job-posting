import React from "react";
import { useAuth } from "../../contexts/authprovider.jsx";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const  user  = useAuth();
  const location = useLocation();
  console.log(user , location ,"user in auth pro");
  return true ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace state={{ path: location.pathname }} />
  );
};

export default AuthRoute;