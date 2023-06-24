import React, { useEffect, useId, useState } from "react";
import { fireStore } from "../../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";

import "./NewsView.css";
import "./News.css";
import SubTop2 from "../../components/sub_top/sub_top2";
import Category2 from "../../components/category/category2";

export default function NewsView() {
  const [post, setPost] = useState([]);
  const uniqueId = useId();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postRef = doc(fireStore, "notification", id);
        const snapShot = await getDoc(postRef);

        setPost(snapShot.data());
        await updateDoc(postRef, { views: Number(snapShot.data().views) + 1 });
      } catch (err) {
        console.error("Error fetching collection data: ", err);
      }
    };
    fetchData();
  }, [id]);
  //console.log(post);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <SubTop2 />
      <div style={{ display: "flex" }}>
        <Category2 />
        <div style={{ width: "100%", padding: "50px 60px" }}>
          <div style={{ border: "1px solid grey", padding: "20px 20px" }}>
            <div>{post.title}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginTop: "20px",
                color: "grey",
              }}
            >
              {post.num} | {post.type} | 사무국 | 조회 {post.views}
            </div>
            <div
              id="text"
              style={{
                marginTop: "30px",
                lineHeight: "25px",
              }}
            >
              {post.content}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <button className="goBack" onClick={goBack}>
              목록으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
