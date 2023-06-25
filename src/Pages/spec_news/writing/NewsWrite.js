import './writing.css'
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

//공지사항 게시판
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
    collection(fireStore, "notification"),
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
      const docRef = await addDoc(collection(fireStore, "notification"), {
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
      window.location.href = "/news/sub01/1";
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div className="writingForm">
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
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button onClick={handleImage}>이미지 업로드</button>
      </div>
      <div>
        <input
          type="file"
          onChange={(event) => {
            setFileUpload(event.target.files[0]);
          }}
        />
        <button onClick={handleFile}>파일 업로드</button>
      </div>
      <div>
        <button onClick={handleSubmit}>등록</button>
      </div>
    </div>
    </div>
  );
}
