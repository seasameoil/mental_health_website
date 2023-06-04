import "./home.css";
import "./calendar.css";
import React, { useEffect, useId, useState } from "react";
import { fireStore } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import moment from "moment";

export default function Home() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(fireStore, "/notification");

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
      //setLeng(80) //data 개수만큼 page 생성, 나중에 주석 처리
      //setLeng(users.length); //data 개수만큼 page 생성
    };
    getUsers();
  }, []);

  //캘린더
  const [date, showDate] = useState(new Date());

  return (
    <div className="home_container">
      <div className="video">소개 영상</div>
      <div className="shortcuts_container">
        <Link to="/introduce/sub01/1">
          <div className="shortcuts" style={{backgroundImage: 'url("../../img/2.jpeg")'}}>
            
            <div className="shortcut">
              <div className="img_container">
                <img src="/img/home.png" />
              </div>
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>협회소개</div>
              <div style={{ textAlign: "center" }}>About us</div>
            </div>
          </div>
        </Link>
        <Link to="/education/sub01/1">
          <div className="shortcuts" style={{backgroundImage: 'url("../../img/10.jpg")'}}>
            <div className="shortcut">
              <div className="img_container">
                <img src="/img/home.png" />
              </div>
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>이벤트</div>
              <div style={{ textAlign: "center" }}>Event</div>
            </div>
          </div>
        </Link>
        <Link to="/journal/sub01/1">
          <div className="shortcuts" style={{backgroundImage: 'url("../../img/11.jpeg")'}}>
            <div className="shortcut">
              <div className="img_container">
                <img src="/img/home.png" />
              </div>
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>블로그</div>
              <div style={{ textAlign: "center" }}>Blog</div>
            </div>
          </div>
        </Link>
        <Link to="/login">
          <div className="shortcuts" style={{backgroundImage: 'url("../../img/3.jpeg")'}}>
            <div className="shortcut">
              <div className="img_container">
                <img src="/img/home.png" />
              </div>
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>협회가입</div>
              <div style={{ textAlign: "center" }}>Join us</div>
            </div>
          </div>
        </Link>
      </div>

      {/*공지 */}
      <div style={{ display: "flex" }}>
        <div className="home_notification">
          <h2>공지사항</h2>
          <div className="table_container">
            <div>
              {/*pagination을 위해 15개씩 slice*/}
              {users.slice(0, 6).map((value) => (
                <div
                  key={uniqueId}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "7px",
                  }}
                >
                  <Link to={`/news/${value.num}`}>
                    <div>{value.title}</div>
                  </Link>

                  <div>{value.writter}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "60px",
          }}
        >
          <div className="squareBtn">
            <div>
              <div style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>
                프로그램
              </div>
              <div style={{display: 'flex', marginTop: '15px'}}>
                <Link to="/information/sub01/1">
                  <div className="mini-squareBtn" style={{marginRight: '10px'}}>
                    정신건강관리사
                  </div>
                </Link>
                <Link to="/information/sub02/1">
                  <div className="mini-squareBtn">
                    멘탈코치
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="squareBtn">
            <div>
              <div style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>
                후원 소개
              </div>
              <div style={{display: 'flex', marginTop: '15px'}}>
                <Link to="/education/sub04/1">
                  <div className="mini-squareBtn" style={{marginRight: '10px'}}>
                    후원 페이지
                  </div>
                </Link>
                <Link to="/education/sub04/1">
                  <div className="mini-squareBtn">
                    후원 계좌 안내
                  </div>
                </Link>
              </div>
            </div>
          </div> 
        </div>
      </div>

      {/*보도자료 */}
      <div className="box_container">
        <div className="shortcut_box">
          <Link to="/news/sub01/3">
            <img src="/img/3.jpeg"/>
            <div style={{marginLeft: '10px', marginTop: '10px', fontSize: '20px', fontWeight: 'bold'}}>보도자료</div>
          </Link>
        </div>

        <div className="shortcut_box">
          <Link to="news/sub02">
            <img src="/img/8.jpeg"/>
            <div style={{marginLeft: '10px', marginTop: '10px', fontSize: '20px', fontWeight: 'bold'}}>연간일정</div>
          </Link>
        </div>
        <div className="shortcut_box">
          <Link to="/news/sub03">
            <img src="/img/11.jpeg"/>
            <div style={{marginLeft: '10px', marginTop: '10px', fontSize: '20px', fontWeight: 'bold'}}>홍보게시판</div>
          </Link>
        </div>
      </div>

      {/*캘린더*/}
      <div className="calendar_container">
        <div>
          <h1 style={{ textAlign: "center" }}>일정 안내</h1>
          <Calendar
            onChange={showDate} // useState로 포커스 변경 시 현재 날짜 받아오기
            formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
            value={date}
            navigationLabel={null}
            showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
          />
        </div>
      </div>
    </div>
  );
}
