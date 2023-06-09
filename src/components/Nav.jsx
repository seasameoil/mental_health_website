import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav(props) {
  const isLogin = props.isLogin;

  const onLogout = () => {
    sessionStorage.removeItem("userId");
    window.location.href = "/";
  };

  const onLogIn = () => {
    //document.location.href = "/login";
  };

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
                  <Link to="/journal/blog" style={{ fontWeight: "bold" }}>
                    블로그
                  </Link>
                </li>
                <li>
                  <Link to="/nonMember/sub01/1" style={{ fontWeight: "bold" }}>
                    회원가입 신청
                  </Link>
                </li>
                <li>
                  <Link to="/login" style={{ fontWeight: "bold", color: 'orange', width: '70px' }} onClick={isLogin ? onLogout : onLogIn}>
                    {isLogin ? "로그아웃" : "로그인"}
                  </Link>
                </li>


                  <Link to="/intro" style={{ fontWeight: "bold", color: 'orange', width: '50px' }}>
                    INTRO
                  </Link>

              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
