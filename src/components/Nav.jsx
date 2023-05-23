import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Navigation">
      <Link to={"/"}>
        <div className="logo">로고</div>
      </Link>

      <div>
        <Link to={"/introduce/sub01/1"}>협회소개</Link>
        {/*
        <ul>
          <Link to={"/introduce/sub01"}>소개</Link>
          <ul>
            <Link to={"introduce/sub01/1"}>학회소개</Link>
            <Link to={"introduce/sub01/2"}>임상심리학소개</Link>
            <Link to={"introduce/sub01/3"}>인사말</Link>
            <Link to={"introduce/sub01/4"}>학회발자취</Link>
          </ul>
          <Link to={"/introduce/sub02"}>인사말</Link>
          <Link to={"/introduce/sub03"}>학회발자취</Link>
          <ul>
            <Link to={"introduce/sub03/1"}>연혁</Link>
            <Link to={"introduce/sub03/2"}>역대회장</Link>
          </ul>
          <Link to={"/introduce/sub04"}>학회 규정</Link>
          <ul>
            <Link to={"introduce/sub04/1"}>회칙 및 운영세칙</Link>
            <Link to={"introduce/sub04/2"}>윤리규정</Link>
            <Link to={"introduce/sub04/3"}>임상심리전문가 관련 규정</Link>
            <Link to={"introduce/sub04/4"}>인권 및 회원권익위원회 운영규정</Link>
          </ul>
          <Link to={"/introduce/sub05"}>조직</Link>
          <ul>
            <Link to={"introduce/sub05/1"}>임원진</Link>
            <Link to={"introduce/sub05/2"}>TF/(임시)위원회</Link>
            <Link to={"introduce/sub05/3"}>대의원회</Link>
            <Link to={"introduce/sub05/4"}>협의회</Link>
            <Link to={"introduce/sub05/5"}>지회</Link>
            <Link to={"introduce/sub05/6"}>연구회</Link>
          </ul>
        </ul>
  */}
      </div>

      <div>
        <Link to={"/news/sub01/1"}>협회소식</Link>
        {/*
        <ul>
          <Link to={"/news/sub01"}>공지.뉴스</Link>
          <ul>
            <Link>학회 공지사항</Link>
            <Link>관련 공지사항</Link>
            <Link>보도자료</Link>
            <Link>뉴스포털</Link>
          </ul>
          <Link to={"/news/sub02"}>연간일정</Link>
          <Link to={"/news/sub03"}>홍보게시판</Link>
          <Link to={"/news/sub04"}>구인게시판</Link>
        </ul>
*/}
      </div>
      <div>
        <Link to={"/information/sub01/1"}>정보광장</Link>
      </div>
      <div>
        <Link to={"/education/sub01/1"}>학술행사/교육</Link>
      </div>
      <div>
        <Link to={"/journal/sub01/1"}>협회지</Link>
      </div>
      <div>
        <Link to={"/nonMember/sub01/1"}>비회원선정</Link>
      </div>
    </div>
  );
};

export default Nav;
