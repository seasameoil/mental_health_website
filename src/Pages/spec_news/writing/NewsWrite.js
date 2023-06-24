import { useEffect, useState } from "react";
import {
  doc,
  getFirestore,
  setDoc,
  Timestamp,
  query,
  orderBy,
  limit,
  collection,
} from "firebase/firestore";
import { fireStore } from "../../../Firebase";

export default function NewsWrite() {
  const [title, setTitle] = useState("");
  const [num, setNum] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [writter, setWritter] = useState("");

  const onChange = (event) => {
    var target = document.getElementById("selectBox");
    setType(target.options[target.selectedIndex].text);
  };

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
    const usersCollectionRef = collection(fireStore, "notification");
    const tempNum = query(usersCollectionRef, orderBy("num"), limit(2));
    console.log(tempNum);
  });

  const handleSubmit = async (e) => {
    try {
      const docRef = await setDoc(doc(fireStore, "notification", "1"), {
        title: title,
        content: content,
        num: num,
        type: type,
        uploadTime: Timestamp.fromDate(new Date()),
        writter: writter,
        views: 0.0,
      });
      setContent(docRef);
    } catch (error) {
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
      <select onChange={onChange} id="selectBox">
        <option>분류 선택</option>
        <option>안내</option>
        <option>공고</option>
      </select>
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
