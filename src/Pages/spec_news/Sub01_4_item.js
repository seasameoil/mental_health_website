import React from "react";
import "./Sub01_4.css";

const NewsItem = ({ article }) => {
  const { title, publishedAt, url } = article;

  return (
    <div>
      <div className="news_items_container">
        <div className="news_item_container">
          <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
            </a>
          </div>
          <div className="publishedAt">{publishedAt}</div>
        </div>
        
      </div>
    </div>
  );
};

export default NewsItem;
