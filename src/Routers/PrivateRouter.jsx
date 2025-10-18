import React, { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import { Navigate } from "react-router";
import Loading from "../Pages/Loading";

const PrivateRouter = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (currentUser) {
    return children;
  }
  return <Navigate to={"/authentication"}></Navigate>;
};

export default PrivateRouter;
