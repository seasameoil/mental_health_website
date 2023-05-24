import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import axios from "axios";

import "./News.css";
import "./pagination.css";
import "./Sub01_4.css";
import SubTop2 from "../../components/sub_top/sub_top2";
import Category2 from "../../components/category/category2";

export default function Sub01_4() {
  //news axios
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const CLINET_ID = process.env.REACT_APP_X_NAVER_CLIENT_ID;
  const CLINET_PW = process.env.REACT_APP_X_NAVER_CLIENT_SECRET;

  //pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 15;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [len_users, setLeng] = useState(80);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    //console.log(pageNumber)
  };

  const apiGet = async (param) => {
    const apiUrl = "/api/v1/search/news.json?query=" + param + "&display=15";
    const resp = await fetch(apiUrl, {
      //method: "GET",
      headers: {
        "X-Naver-Client-Id": CLINET_ID,
        "X-Naver-Client-Secret": CLINET_PW,
      },
    });
    resp.json().then((data) => {
      setArticles(data.items);
    });
  };
  console.log(articles);

  useEffect(() => {
    apiGet("의료");
  }, []);

  // 대기 중일 때
  if (loading) {
    return <div>대기 중...</div>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  return (
    <div className="sub02_news">
      <SubTop2 />
      <div style={{ display: "flex" }}>
        <Category2 />
        <div
          style={{
            backgroundColor: "pink",
            width: "100%",
            padding: "50px 60px",
          }}
        >
          <div>
            {articles.map((article, index) => (
              <div className="news_item_container" key={index}>
                <a href={article.originallink}>
                  {article.title
                    ?.replace(/[^\w\sㄱ-힣]$/gi, "")
                    .replace(/&apos/gi, "")
                    .replace(/&quot/gi, "")
                    .replace(/<b>/gi, "")
                    .replace(/<\/b>/gi, "")
                    .replace(/;/gi, "")}
                </a>
                <div className="publishedAt">
                  {article.pubDate.slice(0, -15)}
                </div>
              </div>
            ))}
          </div>

          <div className="board_pagination">
            <Pagination
              activePage={page}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={len_users}
              pageRangeDisplayed={5}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
