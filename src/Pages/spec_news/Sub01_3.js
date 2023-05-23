import React, { useEffect, useId, useState } from "react";
import { fireStore } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";

import "./News.css";
import "./pagination.css";
import SubTop2 from "../../components/sub_top/sub_top2";
import Category2 from "../../components/category/category2";

export default function Sub01_3() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(fireStore, "press");
  {
    /*수정해야 함*/
  }

  const uniqueId = useId();
  //console.log(uniqueId);

  useEffect(() => {
    //console.log(fireStore);
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      //setLeng(80) //data 개수만큼 page 생성, 나중에 주석 처리
      //setLeng(users.length); //data 개수만큼 page 생성
    };
    getUsers();
  }, []);

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

  return (
    <div className="sub02_news">
      <SubTop2 />
      <div style={{ display: "flex" }}>
        <Category2 />
        <div
          style={{ backgroundColor: "pink", width: "100%", padding: "0 60px" }}
        >
          <div style={{ padding: "50px 0", backgroundColor: "white" }}>
            <div style={{ width: "100%" }}>
              <table>
                <thead>
                  <th>번호</th>
                  <th>제목</th>
                  <th>자료배포일</th>
                  <th>자료요청일</th>
                  <th>담당부서</th>
                </thead>

                <tbody>
                  {/*css 확인을 위해 임시로 만든거고 나중에 삭제 예정*/}
                  <tr key={uniqueId}>
                    <td align="center">1</td>
                    <td>제목입니다.</td>
                    <td align="center">2023.05.23.</td>
                    <td align="center">2023.05.23.</td>
                    <td align="center">총무부</td>
                  </tr>

                  {/*pagination을 위해 15개씩 slice*/}
                  {users.slice(startIndex, endIndex).map((value) => (
                    <tr key={uniqueId}>
                      <td>{value.num}</td>
                      <Link to={`/news/press/${value.num}`}>
                        <td>{value.title}</td>
                      </Link>
                      <td>-</td> {/*파일*/}
                      <td>-</td>
                      <td>{value.depart}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
    </div>
  );
}
