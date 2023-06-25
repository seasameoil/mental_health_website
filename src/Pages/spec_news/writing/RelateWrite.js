import "./writing.css";
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
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";

//관련 공지사항 게시판
export default function NewsWrite() {
  const [title, setTitle] = useState("");
  const [num, setNum] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [writter, setWritter] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [fileUpload, setFileUpload] = useState(null);
  const [fileList, setFileList] = useState([]);

  const storage = getStorage();
  const imageListRef = ref(storage, "files/");
  const fileListRef = ref(storage, "files/");

  const q = query(
    collection(fireStore, "relate"),
    orderBy("num", "desc"),
    limit(1)
  );

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

  //이미지 등록
  const handleImage = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
      alert("이미지가 등록되었습니다. 이미지는 한 개만 등록이 가능합니다.");
    });
  };
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // 파일 등록
  const handleFile = () => {
    if (fileUpload === null) return;

    const fileRef = ref(storage, `${fileUpload.name}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url]);
      });
      alert("파일이 등록되었습니다. 추가할 파일이 있으면 추가해주세요.");
    });
  };
  useEffect(() => {
    listAll(fileListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

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
      const docRef = await addDoc(collection(fireStore, "relate"), {
        title: title,
        content: content,
        num: num,
        type: type,
        uploadTime: Timestamp.fromDate(new Date()),
        writter: writter,
        views: 0.0,
        imageList: imageList,
        fileList: fileList,
      });
      //setContent(docRef);
      window.location.href = "/news/sub01/2";
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="writingForm">
        <div className="writingTitle">
          <label>제목</label>
          <input value={title} onChange={handleTitle}></input>
        </div>
        <div className="writingContent">
          <label>내용</label>
          <textarea value={content} onChange={handleContents}></textarea>
        </div>
        <div className="writingClassification">
          <label>분류</label>
          <select onChange={onChange} id="selectBox">
            <option>분류 선택</option>
            <option>안내</option>
            <option>공고</option>
            <option>공지</option>
          </select>
        </div>
        <div className="writingWriter">
          <label>작성자</label>
          <input value={writter} onChange={handleWritter}></input>
        </div>
        <div className="writingImg">
          <label>이미지 업로드</label>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button className="uploadBtn" onClick={handleImage}>
            이미지 업로드
          </button>
        </div>
        <div className="writingFile">
          <label>파일 업로드</label>
          <input
            type="file"
            onChange={(event) => {
              setFileUpload(event.target.files[0]);
            }}
          />
          <button className="uploadBtn" onClick={handleFile}>
            파일 업로드
          </button>
        </div>
        <div className="postArticleBtn">
          <button onClick={handleSubmit}>등록</button>
        </div>
      </div>
    </div>
  );
}
