import React, { useEffect, useId, useState } from "react";
import { fireStore } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

//import "./NewsView.css";

export default function PressView() {
  const [post, setPost] = useState([]);
  const uniqueId = useId();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postRef = doc(fireStore, "press", id);
        const snapShot = await getDoc(postRef);

        setPost(snapShot.data());
      } catch (err) {
        console.error("Error fetching collection data: ", err);
      }
    };
    fetchData();
  }, [id]);
  //console.log(post);

  return (
    <div>
      <h2 align="center">게시글 상세정보</h2>
      <div className="post-view-wrapper" key={uniqueId}>
        <div className="post-view-row">
          <label>제목</label>
          <label>{post.title}</label>
        </div>
        <div className="post-view-row">
          <label>자료배포일</label>
        </div>
        <div className="post-view-row">
          <label>보도요청일</label>
        </div>
        <div className="post-view-row">
          <label>담당부서</label>
          <div>{post.depart}</div>
        </div>
        <div className="post-view-row">
          <label>문의</label>
          <div>{post.ask}</div>
        </div>
        <div className="post-view-row">
          <label>내용</label>
          <div>{post.content}</div>
        </div>
      </div>
      <button
        className="post-view-go-list-btn"
        //onClick={() => history.goBack()}
      >
        목록으로 돌아가기
      </button>
    </div>
  );
}
