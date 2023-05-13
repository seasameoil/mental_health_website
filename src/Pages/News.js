import React, { useEffect, useId, useState } from "react";
import { fireStore } from "../Firebase";
import { collection, doc, getDocs } from "firebase/firestore";

export default function News() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(fireStore, "notification");

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
    };
    getUsers();
  }, []);

  const showUsers = users.map((value) => (
    <tr key={uniqueId}>
      <td>{value.num}</td>
      <td>{value.type}</td>
      <td>{value.title}</td>
      <td>-</td>
      <td>{value.uploadTime.toDate().toISOString()}</td>
      <td>{value.writter}</td>
    </tr>
  ));

  return (
    <div>
      <h1>학회소식 페이지</h1>
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
        <tbody>{showUsers}</tbody>
      </table>
    </div>
  );
}
