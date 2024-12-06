import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const PrivateRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
    //   localStorage.removeItem("token");
      return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(decodedToken.role)) {
      return <Navigate to="/unauthorized" />;
    }

    return children;
  } catch (error) {
    console.error("Invalid token:", error);
    // localStorage.removeItem("token");
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
