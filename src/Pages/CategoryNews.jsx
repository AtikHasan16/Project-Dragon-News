import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const newsData = useLoaderData();
  const { catId } = useParams();
  const [NewsByCat, setNewsByCat] = useState([]);
  //   console.log(NewsByCat);

  useEffect(() => {
    if (catId == "0") {
      setNewsByCat(newsData);
      return;
    } else if (catId === "1") {
      const filterBreaking = newsData.filter(
        (news) => news.others?.is_today_pick === true
      );
      setNewsByCat(filterBreaking);
      return;
    }
    const filteredNews = newsData.filter((news) => news.category_id == catId);
    setNewsByCat(filteredNews);
  }, [catId, newsData]);

  return (
    <div>
      <h1 className="text-xl font-bold mb-5">
        <span className="text-rose-600"> ({NewsByCat.length}) </span>News Found
      </h1>

      <div className="grid grid-cols-1">
        {NewsByCat.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
