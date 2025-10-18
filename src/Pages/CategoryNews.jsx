import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const newsData = useLoaderData();
  const { catId } = useParams();
  const [NewsByCat, setNewsByCat] = useState([]);
  console.log(NewsByCat);

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

  return <div>Category News {NewsByCat.length}</div>;
};

export default CategoryNews;
