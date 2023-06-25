import React, { useEffect, useId, useState, createElement } from "react";
import { fireStore } from "../../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import "./NewsView.css";
import "./News.css";
import SubTop2 from "../../components/sub_top/sub_top2";
import Category2 from "../../components/category/category2";
import { getStorage, ref, getMetadata } from "firebase/storage";
import { render } from "react-dom";

export default function NewsView() {
  const [post, setPost] = useState([]);
  const uniqueId = useId();
  const { id } = useParams();
  const storage = getStorage();
  const [image, setImage] = useState();
  const [files, setFiles] = useState([]);
  const [fileName, setFilesName] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postRef = doc(fireStore, "notification", id);
        const snapShot = await getDoc(postRef);

        setPost(snapShot.data());
        setImage(snapShot.data().imageList);
        snapShot.data().fileList.forEach((item) => {
          setFiles((prev) => [...prev, item]);
        });
        await updateDoc(postRef, { views: Number(snapShot.data().views) + 1 });
      } catch (err) {
        console.error("Error fetching collection data: ", err);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    files.forEach((item) => {
      const imageRef = ref(storage, item);
      getMetadata(imageRef).then((metaData) => {
        setFilesName((prev) => [...prev, metaData.name]);
      });
    });
  }, [files]);

  const handleFile = (props) => {
    window.open(`${files[props]}`);
    //console.log(files[props]);
  };

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
              {post.num} | {post.type} | {post.writter} | 조회 {post.views}
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

            <div id="myimg">
              {Array.isArray(image) && image.length != 0 && <img src={image} style={{ width: "100%", height: "100%" }} />}
            </div>

            <div style={{marginTop: '60px'}}>
              첨부파일
            {fileName.map((value, index) => (
              <button
                className="fileListBtn"
                onClick={() => {
                  handleFile(index);
                }}
                key={index}
              >
                {value}
              </button>
            ))}
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
