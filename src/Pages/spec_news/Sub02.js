import React, { useEffect, useState } from "react";
import { fireStore } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import Calendar from "react-calendar";
import moment from "moment";
import './calendar.css'

import SubTop2 from "../../components/sub_top/sub_top2";
import Category2 from "../../components/category/category2";
import BrownBar from "../../components/brown_bar/brown_bar";

export default function Sub02() {
  const [calendar, setCalendar] = useState([]);
  const calendarCollectionRef = collection(fireStore, "/calendar");

  useEffect(() => {
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
    getCalendar();
  }, [])

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

  return (
    <div className="sub01_1_info">
      <SubTop2 />
      <div style={{ display: "flex" }}>
        <Category2 />
        <div
          style={{width: "100%", padding: "0 60px" }}
        >
          <div
            style={{
              display: "flex",
              padding: "50px 0"
            }}
          >
            <div style={{ display: "flex"}}>
              <BrownBar />
              <h3>2023년 한국임상심리학회 연간일정표</h3>
            </div>
          </div>

          <div className="calendar_container">
        <div>
          <div>
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
      </div>
    </div>
  );
}
