import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightContents from "../Components/RightContents";
import NewsCard from "../Components/NewsCard";
import Container from "../Components/Container";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../Components/NewsDetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [newsDetails, setNewsDetails] = useState({});

//   console.log(newsDetails);

  useEffect(() => {
    const newsData = data.find((data) => data.id === id);
    setNewsDetails(newsData);
  }, [data, id]);

  return (
    <div>
      <Container>
        <header className="mt-5">
          <Header></Header>
        </header>
        <main className="grid grid-cols-12 gap-10">
          <div className="col-span-9">
            <h1 className="text-2xl font-bold mb-5">Dragon News</h1>
            <NewsDetailsCard newsDetails={newsDetails}></NewsDetailsCard>
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
