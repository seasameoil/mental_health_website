import React, { useEffect, useId, useState } from "react";
import { fireStore } from "../../Firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Pagination from "react-js-pagination";
import { Link, Navigate } from "react-router-dom";

import "./News.css";
import "./pagination.css";
import SubTop2 from "../../components/sub_top/sub_top2";
import Category2 from "../../components/category/category2";

export default function Sub01_2() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(fireStore, "relate");
  {
    /*수정해야 함*/
  }
  const q = query(usersCollectionRef, orderBy("num", "desc"));

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
        <div style={{ width: "100%", padding: "0 60px" }}>
          <div style={{ padding: "50px 0" }}>
            <div style={{ width: "100%" }}>
              <table>
                <thead>
                  <th>번호</th>
                  <th>분류</th>
                  <th>제목</th>
                  <th>파일</th>
                  <th>이름</th>
                  <th>등록일</th>
                  <th>조회</th>
                </thead>

                <tbody>
                  {/*pagination을 위해 15개씩 slice*/}
                  {users.slice(startIndex, endIndex).map((value, index) => (
                    <tr key={index}>
                      <td>{value.num}</td>
                      <td>{value.type}</td>
                      <Link to={`/news/relate/${value.id}`}>
                        <td className="title-cell" style={{textAlign: 'left'}}>{value.title}</td>
                      </Link>
                      <td>{value.fileList.length > 0 && <img src="/img/fileImg.jpg" style={{width: '15px', height: '15px'}}/>}</td> {/*파일*/}
                      <td>{value.writter}</td>
                      <td>{value.uploadTime.toDate().toLocaleDateString()}</td>
                      <td>{value.views}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="writingIcon" style={{marginTop: '20px', display: 'flex', justifyContent: 'flex-end'}}>
              <Link to="/news/sub01/2/write">
                <button style={{background: 'rgb(117, 117, 117)', border: 'none', color: 'white', width: '80px', height: '30px', borderRadius: '10px', cursor: 'pointer'}}>글쓰기</button>
              </Link>
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
