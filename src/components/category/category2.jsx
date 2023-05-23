import "./category.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Category2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category">
      <hr></hr>
      <div className="title">협회소식</div>
      <hr></hr>

      <ul>
        <div className="subtitle" onClick={toggleCategory}>
          공지/뉴스
        </div>
        {isOpen && (
          <div className="sub-category-box">
            <Link to={"/news/sub01/1"}>
              <li className="sub-category">학회 공지사항</li>
            </Link>
            <Link to={"/news/sub01/2"}>
              <li className="sub-category">관련 공지사항</li>
            </Link>
            <Link to={"/news/sub01/3"}>
              <li className="sub-category">보도자료</li>
            </Link>
            <Link to={"/news/sub01/4"}>
              <li className="sub-category">뉴스포털</li>
            </Link>
          </div>
        )}
      </ul>

      <ul>
        <Link to={"/news/sub02"}>
          <div className="subtitle">연간일정</div>
        </Link>
      </ul>

      <ul>
        <Link to={"/news/sub03"}>
          <div className="subtitle">홍보게시판</div>
        </Link>
      </ul>
    </div>
  );
}
