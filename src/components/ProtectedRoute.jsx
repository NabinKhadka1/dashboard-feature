import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const localStorageToken = localStorage.getItem("stored_token")
    ? localStorage.getItem("stored_token")
    : "";
  if (localStorageToken) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
