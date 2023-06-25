import React, { useState, useEffect } from "react";
import AppRouter from "./AppRouter";
import Nav from "./components/Nav";

import Footer from "./components/footer/footer";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("userId") === null) {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      console.log("isLogin ?? :: ", isLogin);
    } else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      console.log("isLogin ?? :: ", isLogin);
    }
  });

  return (
    <>
      <Nav isLogin={isLogin} />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
