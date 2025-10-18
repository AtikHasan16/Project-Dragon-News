import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";
import RightContents from "../Components/RightContents";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";
import NewsMarquee from "../Components/NewsMarquee";
import LeftContent from "../Components/LeftContent";

const HomeLayout = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <NewsMarquee></NewsMarquee>
        <Navbar></Navbar>
        <div className="grid grid-cols-12 gap-6 my-10">
          <aside className="col-span-3">
            <LeftContent></LeftContent>
          </aside>
          <main className="col-span-6">
            <Outlet></Outlet>
          </main>
          <aside className="col-span-3">
            <RightContents></RightContents>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default HomeLayout;
