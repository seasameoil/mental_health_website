import "./category.css";
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div className="category">
      <div className="title">협회소식</div>

      <ul>
        <div>공지.뉴스</div>
        <div className="sub-category-box">
          <Link to={"/news"}>
            <li className="sub-category">학회 공지사항</li>
          </Link>
          <Link to={"/news/sub01/1"}>
            <li className="sub-category">관련 공지사항</li>
          </Link>
          <Link to={"/news/sub01/2"}>
            <li className="sub-category">보도자료</li>
          </Link>
          <Link to={"/news/sub01/3"}>
            <li className="sub-category">뉴스포털</li>
          </Link>
        </div>
      </ul>

      <ul>
        <Link to={"/news/sub02"}>
          <div>연간일정</div>
        </Link>
      </ul>

      <ul>
        <Link to={"/news/sub03"}>
          <li className="sub-category">홍보게시판</li>
        </Link>
      </ul>
    </div>
  );
}
