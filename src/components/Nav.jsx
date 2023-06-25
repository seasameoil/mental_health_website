import "./Nav.css";
import { Link } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav(props) {
  const isLogin = props.isLogin;

  const onLogout = () => {
    sessionStorage.removeItem("userId");
    document.location.href = "/";
  };

  const onLogIn = () => {
    document.location.href = "/login";
  };

  const handleLogin = () => {
    alert("로그인이 필요한 페이지 입니다.");
    document.location.href = "/";
  };

  const handleLogout = () => {};

  return (
    <div className="nav_container">
      <div className="container">
        <form id="form1" runat="server">
          <div class="wrap">
            <div class="menubar">
              <Link to="/">
                <div class="menuLogo">
                  <img
                    src="/img/fulllogo.jpg"
                    style={{ width: "60px", height: "50px" }}
                  />
                  <div style={{ marginLeft: "5px" }}>한국정신건강관리협회</div>
                </div>
              </Link>

              <ul class="menuItem">
                <li>
                  <Link to="/introduce/sub01/1" style={{ fontWeight: "bold" }}>
                    협회소개
                  </Link>
                  <ul>
                    <li>
                      <Link to="/introduce/sub01/1">소개</Link>
                    </li>
                    <li>
                      <Link to="/introduce/sub02">인사말</Link>
                    </li>
                    <li>
                      <Link to="/introduce/sub03/1">연혁</Link>
                    </li>
                    <li>
                      <Link to="/introduce/sub04/1">협회규칙(정관)</Link>
                    </li>
                    <li>
                      <Link to="introduce/sub04/2">윤리규정</Link>
                    </li>
                    <li>
                      <Link to="/introduce/sub05/1">조직</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/news/sub01/1" style={{ fontWeight: "bold" }}>
                    협회소식
                  </Link>
                  <ul>
                    <li>
                      <Link to="/news/sub01/1">학회 공지사항</Link>
                    </li>
                    <li>
                      <Link to="/news/sub01/2">관련 공지사항</Link>
                    </li>
                    <li>
                      <Link to="/news/sub01/3">보도자료</Link>
                    </li>
                    <li>
                      <Link to="/news/sub01/4">뉴스포털</Link>
                    </li>
                    <li>
                      <Link to="/news/sub02">연간일정</Link>
                    </li>
                    <li>
                      <Link to="/news/sub03">홍보게시판</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/information/sub01/1"
                    style={{ fontWeight: "bold" }}
                  >
                    프로그램
                  </Link>
                  <ul>
                    <li>
                      <Link to="/information/sub01/1">정신건강관리사</Link>
                    </li>
                    <li>
                      <Link to="/information/sub02/1">멘탈코치</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/education/sub01/1" style={{ fontWeight: "bold" }}>
                    이벤트
                  </Link>
                  <ul>
                    <li>
                      <Link to="/education/sub01/1">교육</Link>
                    </li>
                    <li>
                      <Link to="/education/sub04/1">후원 및 기부</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/journal/sub01/1" style={{ fontWeight: "bold" }}>
                    블로그
                  </Link>
                </li>
                <li>
                  <Link to="/nonMember/sub01/1" style={{ fontWeight: "bold" }}>
                    회원가입 신청
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={isLogin ? onLogout : onLogIn}>
                    {isLogin ? "로그아웃" : "로그인"}
                  </Link>
                  <ul>
                    <li>
                      <Link
                        to="/news/sub01/1/write"
                        onClick={isLogin ? handleLogout : handleLogin}
                      >
                        학회 공지사항 글작성
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news/sub01/2/write"
                        onClick={isLogin ? handleLogout : handleLogin}
                      >
                        관련 공지사항 글작성
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news/sub01/3/write"
                        onClick={isLogin ? handleLogout : handleLogin}
                      >
                        보도자료 글작성
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news/sub03/write"
                        onClick={isLogin ? handleLogout : handleLogin}
                      >
                        보도자료 글작성
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog/write"
                        onClick={isLogin ? handleLogout : handleLogin}
                      >
                        블로그 글작성
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
