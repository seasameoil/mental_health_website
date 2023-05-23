import React, { useEffect, useState, useId } from "react";
import { fireStore } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Route, useNavigate } from "react-router-dom";

import SubTop from "../components/sub_top/sub_top_news";
import Category from "../components/category/category_news";
import { Link } from "react-router-dom";

export default function News() {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(fireStore, "notification");
  const uniqueId = useId();

  useEffect(() => {
    //console.log(fireStore);
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getPosts();
  }, []);

  const showPosts = posts.map((value) => (
    <tr key={uniqueId}>
      <td>{value.num}</td>
      <td>{value.type}</td>
      <Link to={`/news/${value.num}`}>
        <td>{value.title}</td>
      </Link>
      <td>-</td>

      <td>{value.writter}</td>
      <td>{value.views}</td>
    </tr>
  ));

  return (
    <div>
      <SubTop />
      <div style={{ display: "flex" }}>
        <Category />
      </div>
      <table>
        <thead
          style={{ backgroundColor: "pink", width: "100%", padding: "0 60px" }}
        >
          <th>번호</th>
          <th>분류</th>
          <th>제목</th>
          <th>파일</th>
          <th>이름</th>
          <th>등록일</th>
          <th>조회</th>
        </thead>
        <tbody>{showPosts}</tbody>
      </table>
    </div>
  );
}
