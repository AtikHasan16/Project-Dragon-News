import React from "react";
import Header from "../Components/Header";
import RightContents from "../Components/RightContents";
import NewsCard from "../Components/NewsCard";
import Container from "../Components/Container";
import { useLocation } from "react-router";
import NewsDetailsCard from "../Components/NewsDetailsCard";

const NewsDetails = () => {
  const location = useLocation();
  const newsDetailsData = location.state;

  return (
    <div>
      <Container>
        <header className="mt-5">
          <Header></Header>
        </header>
        <main className="grid grid-cols-12 gap-10">

          <div className="col-span-9">
            <h1 className="text-2xl font-bold mb-5">Dragon News</h1>
            <NewsDetailsCard
              newsDetailsData={newsDetailsData}
            ></NewsDetailsCard>
          </div>
          <aside className="col-span-3">
            <RightContents></RightContents>
          </aside>
        </main>
      </Container>
    </div>
  );
};

export default NewsDetails;
