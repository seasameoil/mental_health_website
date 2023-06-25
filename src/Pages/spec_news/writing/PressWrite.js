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

//보도자료
export default function NewsWrite() {
  const [title, setTitle] = useState("");
  const [num, setNum] = useState("");
  const [content, setContent] = useState("");
  const [depart, setDepart] = useState("");
  const [ask, setAsk] = useState("");

  const q = query(
    collection(fireStore, "notification"),
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

  const handleAsk = (event) => {
    const {
      target: { value },
    } = event;
    setAsk(value);
  };

  const handleDepart = (event) => {
    const {
      target: { value },
    } = event;
    setDepart(value);
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
    //console.log(num);
  }, [q]);

  const handleSubmit = async (e) => {
    try {
      const docRef = await addDoc(collection(fireStore, "press"), {
        title: title,
        content: content,
        num: num,
        depart: depart,
        ask: ask,
        releaseDate: Timestamp.fromDate(new Date()),
        requestDate: Timestamp.fromDate(new Date()),
        views: 0.0,
      });
      //setContent(docRef);
      window.location.href = "/news/sub01/3";
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
        부서
        <input value={depart} onChange={handleDepart}></input>
      </div>
      <div>
        문의
        <input value={ask} onChange={handleAsk}></input>
      </div>
      <div>
        <button onClick={handleSubmit}>등록</button>
      </div>
    </div>
  );
}
