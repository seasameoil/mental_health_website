import React, { useEffect, useId, useState } from "react";
import { fireStore } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";

import SubTop2 from "../../components/sub_top/sub_top2";
import Category2 from "../../components/category/category2";

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
    <div className='sub01_1_info'>
            <SubTop2 />
            <div style={{display: 'flex'}}>
                <Category2 />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div>
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
                          <tbody>{showUsers}</tbody>
                        </table>
                        </div>
                      </div>
                    </div>
                </div>
    </div>
  );
}
