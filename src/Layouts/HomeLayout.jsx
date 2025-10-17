import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";
import RightContents from "../Components/RightContents";
import Container from "../Components/Container";

const HomeLayout = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <Outlet></Outlet>
        <RightContents></RightContents>
      </Container>
    </div>
  );
};

export default HomeLayout;
