import React, { useEffect, useState } from "react";
import "./News.css";

const News = () => {
  const [newsData, setNewsData] = useState("");
  const fetchData = () => {
    fetch(
      `https://api.worldnewsapi.com/search-news?text=tesla&language=en&api-key=${
        import.meta.env.VITE_NEWS_APIKEY
      }`
    ).then((data) =>
      data
        .json()
        .then((data) => setNewsData(data))
        .catch((error) => console.log(error))
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="news-container">
      {newsData ? (
        <img
          width={200}
          height={200}
          src={newsData.news[0].image}
          className="news-image"
        />
      ) : (
        <></>
      )}
      {newsData ? (
        <h1 className="news-title">{newsData.news[0].title}</h1>
      ) : (
        <></>
      )}
      {newsData ? (
        <p className="news-para">{newsData.news[0].text.slice(0, 500)}...</p>
      ) : (
        <></>
      )}
    </section>
  );
};

export default News;
