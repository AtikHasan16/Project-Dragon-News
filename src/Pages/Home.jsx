import React from "react";
import { Navigate } from "react-router";

const Home = () => {
  // const location  = useLocation()
  // console.log(location);
  
  return <Navigate to={"/categories/0"}></Navigate>;
};

export default Home;
