import React from "react";
import { useAuth } from "../../contexts/authprovider.jsx";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = ({ role }) => {
  const {user} = useAuth();
  const location = useLocation();
  if (!user) {
    return (
      <Navigate to={"/login"} replace state={{ path: location.pathname }} />
    );
  }


  if (user && user.user_metadata && user.user_metadata.role !== role) {
    return <Navigate to={"/login"} replace state={{ path: location.pathname }} />;
  }

  return <Outlet/>;
};

export default AuthRoute;
