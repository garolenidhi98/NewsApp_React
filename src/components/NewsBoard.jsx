import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "../App.css"

// eslint-disable-next-line react/prop-types
const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [toggle, setToggle] = useState(false)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=999957d4786748789666ab5605b4e2ee`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        console.log(data.articles)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleClick = ()=>{
    setToggle(!toggle)
  }

  return (
    <div className={toggle ? "newsitem-container" : ""}>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span> &nbsp;{" "}
        <span>
          <button type="button" className="btn btn-outline-primary" onClick={handleClick}>
           {toggle ? "Grid View" : "List View"}
          </button>
        </span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
            toggle = {toggle}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
