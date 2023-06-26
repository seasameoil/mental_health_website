import "./category.css";
import { Link } from "react-router-dom";

export default function Category5() {
  return (
    <div className="category">
      <hr></hr>
      <div className="title">블로그</div>
      <hr></hr>

      <ul>
        <Link to={"/journal/blog"}>
          <div className="subtitle">블로그</div>
        </Link>

      </ul>
    </div>
  );
}
