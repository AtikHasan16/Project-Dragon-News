import React from "react";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Container from "../Components/Container";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-base-300">
      <Container>
        <Navbar></Navbar>

        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default AuthLayout;
