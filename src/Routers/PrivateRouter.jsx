import React, { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  // console.log(location);

  const { currentUser, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (currentUser) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/authentication"}></Navigate>;
};

export default PrivateRouter;
