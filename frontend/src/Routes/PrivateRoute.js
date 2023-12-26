import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ Component, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   console.log(...rest,"rest value is ")

  return isLoggedIn ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/Login" />
  );
}

export default PrivateRoute;
