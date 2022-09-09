import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRouteRH({ children }) {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.AuthReducer.user);
  const auth = useSelector((state) => state.AuthReducer.auth);
  return (
    <div>
      {(token || auth) && user.role === "Admin RH" ? (
        children
      ) : (
        <Navigate to="/Profile"></Navigate>
      )}
    </div>
  );
}

export default PrivateRouteRH;
