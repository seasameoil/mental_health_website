import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import axios from "axios";

import NewsItem from "./Sub01_4_item";
import "./News.css";
import "./pagination.css";
import "./Sub01_4_item.css";
import SubTop2 from "../../components/sub_top/sub_top2";
import Category2 from "../../components/category/category2";

export default function Sub01_4() {
  //news axios
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=162c8493e772408692ff2108355157d9"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <div>대기 중...</div>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }
  console.log(articles);

  return (
    <div className="sub02_news">
      <SubTop2 />
      <div style={{ display: "flex" }}>
        <Category2 />
        <div
          style={{ backgroundColor: "pink", width: "100%", padding: "0 60px" }}
        >
          <div>
            {articles.map((article) => (
              <NewsItem key={article.url} article={article} />
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
