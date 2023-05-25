import React, { useState } from "react";
import "./Nav.css";
import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  const [hover, setHover] = useState(false);

  return (
    <div className="nav_container">
      <div className="container">
      <header
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link to="/">
          <div className="header_logoImg">
            로고
          </div>
        </Link>

        <div className="nav">
          <Link className="nav_link" to="/introduce/sub01/1">
            협회소개
          </Link>
          <Link className="nav_link" to="/news/sub01/1">
            협회소식
          </Link>
          <Link className="nav_link" to="/information/sub01/1">
            정보광장
          </Link>
          <Link className="nav_link" to="/education/sub01/1">
            학술행사/교육
          </Link>
          <Link className="nav_link" to="/journal/sub01/1">
            협회지
          </Link>
          <Link className="nav_link" to="/nonMember/sub01/1">
            비회원선정
          </Link>
        </div>

      </header>

      <div
        className="hover_area"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover === true && (
          <div className="hover">
            <article className="hover_introduce">
              <Link to="/introduce/sub01/1">소개</Link>
              <Link to="/introduce/sub02">인사말</Link>
              <Link to="/introduce/sub03/1">연혁</Link>
              <Link to="/introduce/sub04/1">협회규칙(정관)</Link>
              <Link to="/introduce/sub04/2">윤리규정</Link>
              <Link to="/introduce/sub05/1">조직</Link>
            </article>
            <article className="hover_news">
              <Link to="/news/sub01/1">학회 공지사항</Link>
              <Link to="/news/sub01/2">관련 공지사항</Link>
              <Link to="/news/sub01/3">보도자료</Link>
              <Link to="/news/sub01/4">뉴스포털</Link>
              <Link to="/news/sub02">연간일정</Link>
              <Link to="/news/sub03">홍보게시판</Link>
            </article>
            <article className="hover_information">
              <Link to="/information/sub01/1">우울증</Link>
              <Link>정신건강관리사란?</Link>
              <Link to="/information/sub02/1">정신건강관리사 소개</Link>
              <Link to="/information/sub02/2">정신건강관리사 수련</Link>
            </article>
            <article className="hover_education">
              <Link to="/education/sub01/1">교육</Link>
            </article>
            <article className="hover_journal">
              <Link to="/journal/sub01/1">협회지</Link>
            </article>
            <article className="hover_nonMember">
              <Link to="/nonMember/sub01/1">비회원선정</Link>
            </article>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

