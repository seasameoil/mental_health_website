import "./intro.css";
import "./calendar.css";
import React, { useEffect, useId, useState } from "react";
import { fireStore } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import moment from "moment";

export default function Intro() {
  const [notification, setNoti] = useState([]);
  const notiCollectionRef = collection(fireStore, "/notification");

  const [relate, setRelate] = useState([]);
  const relateCollectionRef = collection(fireStore, "/relate");

  const [promo, setPromo] = useState([]);
  const promoCollectionRef = collection(fireStore, "/promo");

  const [calendar, setCalendar] = useState([]);
  const calendarCollectionRef = collection(fireStore, "/calendar");

  const uniqueId = useId();
  //console.log(uniqueId);

  useEffect(() => {
    //console.log(fireStore);
    const getNoti = async () => {
      const data = await getDocs(notiCollectionRef);
      setNoti(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      //setLeng(80) //data 개수만큼 page 생성, 나중에 주석 처리
      //setLeng(users.length); //data 개수만큼 page 생성
    };

    const getRelate = async () => {
      const data = await getDocs(relateCollectionRef);
      setRelate(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      //setLeng(80) //data 개수만큼 page 생성, 나중에 주석 처리
      //setLeng(users.length); //data 개수만큼 page 생성
    };

    const getPromo = async () => {
      const data = await getDocs(promoCollectionRef); 
      setPromo(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          //startDate: moment.unix(doc.data().startDate.seconds).format("YYYY-MM-DD"),
          //endDate: moment.unix(endDateSeconds).add(endDateNanoseconds, 'nanoseconds').format("YYYY-MM-DD")
        }))
      );
      //setLeng(80) //data 개수만큼 page 생성, 나중에 주석 처리
      //setLeng(users.length); //data 개수만큼 page 생성
    };

    const getCalendar = async () => {
      const data = await getDocs(calendarCollectionRef);
      setCalendar(
        data.docs.map((doc) => {
          const startDate = doc.data().endDate;
          const startDateSeconds = startDate ? startDate.seconds : 0;
          const endDate = doc.data().endDate;
          const endDateSeconds = endDate ? endDate.seconds : 0;
    
          return {
            ...doc.data(),
            id: doc.id,
            startDate: moment.unix(startDateSeconds).format("YYYY-MM-DD"),
            endDate: moment.unix(endDateSeconds).format("YYYY-MM-DD")
          };
        })
      );
    };

    getNoti();
    getRelate();
    getPromo();
    getCalendar();
  }, []);

  //선택한 공지사항 종류
  const [selectedItem, setSelectedItem] = useState("학회 공지사항"); // 선택된 항목 상태 초기값은 빈 문자열로 설정

  const handleItemClick = (item) => {
    setSelectedItem(item); // 선택된 항목 업데이트
  };

  //캘린더
  const [date, showDate] = useState(new Date());
  //startdate와 enddate를 mark 배열에 저장
  const mark = [];
  calendar.forEach(({startDate, endDate}) => {
    const dates = getDatesBetween(startDate, endDate);
    mark.push(...dates);
  });
  //console.log(mark)

  // 날짜 배열을 가져오는 함수
  function getDatesBetween(start, end) {
    const _dates = [];
    let currentDate = moment(start);
    while (currentDate.isSameOrBefore(end)) {
      _dates.push(currentDate.format('YYYY-MM-DD'));
      currentDate = currentDate.add(1, 'days');
    }
    return _dates;
  }
  
  const dot_style = (color) => ({
    width: '4px',
    height: '4px',
    backgroundColor: color,
    borderRadius: '50%',
    marginLeft: '0.063rem',
  });

  return (
    <div className="home_container">
      <div className="video">소개 영상</div>
      <div className="shortcuts_container">
        <Link to="/introduce/sub01/1">
          <div
            className="shortcuts"
            style={{ backgroundImage: 'url("../../img/8.jpeg")' }}
          >
            <div className="shortcut">
              <div className="img_container">
                <img src="/img/home.png" />
              </div>
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                협회소개
              </div>
              <div style={{ textAlign: "center" }}>About us</div>
            </div>
          </div>
        </Link>
        <Link to="/education/sub01/1">
          <div
            className="shortcuts"
            style={{ backgroundImage: 'url("../../img/10.jpg")' }}
          >
            <div className="shortcut">
              <div className="img_container">
                <img src="/img/home.png" />
              </div>
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>이벤트</div>
              <div style={{ textAlign: "center" }}>Event</div>
            </div>
          </div>
        </Link>
        <Link to="/journal/blog">
          <div
            className="shortcuts"
            style={{ backgroundImage: 'url("../../img/11.jpeg")' }}
          >
            <div className="shortcut">
              <div className="img_container">
                <img src="/img/home.png" />
              </div>
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>블로그</div>
              <div style={{ textAlign: "center" }}>Blog</div>
            </div>
          </div>
        </Link>
        <Link to="/nonMember/sub01/1">
          <div
            className="shortcuts"
            style={{ backgroundImage: 'url("../../img/3.jpeg")' }}
          >
            <div className="shortcut">
              <div className="img_container">
                <img src="/img/home.png" />
              </div>
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                협회가입
              </div>
              <div style={{ textAlign: "center" }}>Join us</div>
            </div>
          </div>
        </Link>
      </div>

      {/*공지 */}
      <div style={{ display: "flex" }}>
        <div className="home_notification">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2>공지사항</h2>
            <div style={{fontSize: '0.9rem', display: 'flex'}}>
              <div onClick={() => handleItemClick("학회 공지사항")}>학회 공지사항 | &nbsp;</div>
              <div onClick={() => handleItemClick("관련 공지사항")}> 관련 공지사항 | &nbsp;</div>
              <div onClick={() => handleItemClick("홍보게시판")}>홍보게시판</div>
            </div>
          </div>
          <div className="table_container">
            {selectedItem === "학회 공지사항" && (
            <div>
              {/*pagination을 위해 6개씩 slice*/}
              {notification.slice(0, 6).map((value) => (
                <div
                  key={uniqueId}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "7px",
                  }}
                >
                  <Link to={`/news/${value.id}`}>
                    <div>{value.title}</div>
                  </Link>

                  <div>{value.writter}</div>
                </div>
              ))}
            </div>
            )}

            {selectedItem === "관련 공지사항" && (
            <div>
              {/*pagination을 위해 6개씩 slice*/}
              {relate.slice(0, 6).map((value) => (
                <div
                  key={uniqueId}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "7px",
                  }}
                >
                  <Link to={`/news/relate/${value.id}`}>
                    <div>{value.title}</div>
                  </Link>

                  <div>{value.writter}</div>
                </div>
              ))}
            </div>
            )}

            {selectedItem === "홍보게시판" && (
            <div>
              {/*pagination을 위해 6개씩 slice*/}
              {promo.slice(0, 6).map((value) => (
                <div
                  key={uniqueId}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "7px",
                  }}
                >
                  <Link to={`/news/promo/${value.id}`}>
                    <div>{value.title}</div>
                  </Link>

                  <div>{value.writter}</div>
                </div>
              ))}
            </div>
            )}

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
              <div
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                프로그램
              </div>
              <div style={{ display: "flex", marginTop: "15px" }}>
                <Link to="/information/sub01/1">
                  <div
                    className="mini-squareBtn"
                    style={{ marginRight: "10px" }}
                  >
                    정신건강관리사
                  </div>
                </Link>
                <Link to="/information/sub02/1">
                  <div className="mini-squareBtn">멘탈코치</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="squareBtn">
            <div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                후원 소개
              </div>
              <div style={{ display: "flex", marginTop: "15px" }}>
                <Link to="/education/sub04/1">
                  <div
                    className="mini-squareBtn"
                    style={{ marginRight: "10px" }}
                  >
                    후원 페이지
                  </div>
                </Link>
                <Link to="/education/sub04/1">
                  <div className="mini-squareBtn">후원 계좌 안내</div>
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
            <img src="/img/3.jpeg" />
            <div
              style={{
                marginLeft: "10px",
                marginTop: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              보도자료
            </div>
          </Link>
        </div>

        <div className="shortcut_box">
          <Link to="/news/sub02">
            <img src="/img/8.jpeg" />
            <div
              style={{
                marginLeft: "10px",
                marginTop: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              연간일정
            </div>
          </Link>
        </div>
        <div className="shortcut_box">
          <Link to="/news/sub03">
            <img src="/img/11.jpeg" />
            <div
              style={{
                marginLeft: "10px",
                marginTop: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              홍보게시판
            </div>
          </Link>
        </div>
      </div>

      {/*캘린더*/}
      <div className="calendar_container">
        <div>
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
          <div>
            {calendar.map((item) => {
              const start = moment(item.startDate, 'YYYY.MM.DD');
              const end = moment(item.endDate, 'YYYY.MM.DD');
              //isBetween 메소드로 특정 기간 내에 해당하는지 판단
              //[]:시작일과 종료일 포함한다는 뜻
              if (moment(date).isBetween(start, end, null, '[]')) {
                return (
                <div className="calendarContent_container"> 
                  <div style={{fontWeight: 'bold', color: 'orange', marginBottom: '5px'}}>{moment(date).format("YYYY-MM-DD")}</div>
                  <div>{item.content}</div>
                </div>);
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
