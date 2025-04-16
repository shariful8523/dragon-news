import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from './NewsCard'

const MainContent = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">
        Dragon News
      </h1>
      <div className="space-y-4">
        {data.map((news) => (
          <NewsCard key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
