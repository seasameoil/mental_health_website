import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Navigation">
      <div>
        <Link to={"/introduce"}>학회소개</Link>
      </div>
      <div>
        <Link to={"/news"}>학회소식</Link>
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
      </div>
      <div>
        <Link to={"/infomation"}>정보광장</Link>
      </div>
      <div>
        <Link to={"/edu"}>학술행사/교육</Link>
      </div>
      <div>
        <Link to={"/journal"}>학회지</Link>
      </div>
    </div>
  );
};

export default Nav;
