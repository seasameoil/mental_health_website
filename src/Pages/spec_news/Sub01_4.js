import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { fireStore } from "../../Firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

import "./News.css";
import "./pagination.css";
import "./Sub01_4.css";
import SubTop2 from "../../components/sub_top/sub_top2";
import Category2 from "../../components/category/category2";

export default function Sub01_4() {
  //news
  const [articles, setArticles] = useState([]);
  const articlesRef = collection(fireStore, "news");
  const q = query(articlesRef, orderBy("time", "desc"));

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
    const getArticles = async () => {
      const data = await getDocs(q);
      setArticles(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      //setLeng(80) //data 개수만큼 page 생성, 나중에 주석 처리
      //setLeng(users.length); //data 개수만큼 page 생성
    };
    getArticles();
  }, []);

  return (
    <div className="sub02_news">
      <SubTop2 />
      <div style={{ display: "flex" }}>
        <Category2 />
        <div
          style={{
            width: "100%",
            padding: "50px 60px",
          }}
        >
          <div>
            {articles.map((article, index) => (
              <div className="news_item_container" key={index}>
                <div>{article.company}</div>
                <a href={article.link} target="_blank" rel="noreferrer">
                  {article.title}
                </a>
                <div className="publishedAt">{article.time}</div>
              </div>
            ))}
          </div>

          <div className="board_pagination" style={{marginTop: '100px'}}>
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
