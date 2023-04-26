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
      <div>
        <Link to={"/non-member"}>비회원신청</Link>
      </div>
    </div>
  );
};

export default Nav;
