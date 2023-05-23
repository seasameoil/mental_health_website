import React from "react";

const NewsItem = ({ article }) => {
  const { title, publishedAt, url } = article;

  return (
    <div>
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
        <p>{publishedAt}</p>
      </div>
    </div>
  );
};

export default NewsItem;
