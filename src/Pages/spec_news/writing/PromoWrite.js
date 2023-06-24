import { useEffect, useState } from "react";
import {
  Timestamp,
  query,
  orderBy,
  limit,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { fireStore } from "../../../Firebase";

//홍보게시판
export default function NewsWrite() {
  const [title, setTitle] = useState("");
  const [num, setNum] = useState("");
  const [content, setContent] = useState("");
  const [writter, setWritter] = useState("");

  const q = query(
    collection(fireStore, "promo"),
    orderBy("num", "desc"),
    limit(1)
  );

  const handleTitle = (event) => {
    const {
      target: { value },
    } = event;
    setTitle(value);
  };
  const handleContents = (event) => {
    const {
      target: { value },
    } = event;
    setContent(value);
  };

  const handleWritter = (event) => {
    const {
      target: { value },
    } = event;
    setWritter(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        //console.log(doc.data());
        setNum(Number(doc.data().num + 1));
      });
    };
    fetchData();
    console.log(num);
  }, [q]);

  const handleSubmit = async (e) => {
    try {
      const docRef = await addDoc(collection(fireStore, "promo"), {
        title: title,
        content: content,
        num: num,
        uploadTime: Timestamp.fromDate(new Date()),
        writter: writter,
        views: 0.0,
      });
      //setContent(docRef);
      window.location.href = "/news/sub03";
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        제목
        <input value={title} onChange={handleTitle}></input>
      </div>
      <div>
        내용
        <textarea value={content} onChange={handleContents}></textarea>
      </div>
      <div>
        작성자
        <input value={writter} onChange={handleWritter}></input>
      </div>
      <div>
        <button onClick={handleSubmit}>등록</button>
      </div>
    </div>
  );
}
