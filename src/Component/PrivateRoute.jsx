import React, { use } from "react";
import { AuthContext } from "../Context/Auth/AuthContext";
import { Navigate } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/auth"}></Navigate>;
};

export default PrivateRoute;
