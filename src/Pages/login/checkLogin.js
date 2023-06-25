import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const checkLogin = (props) => {
  console.log(props);
  if (props.isLogin == false) {
    alert("로그인이 필요한 기능입니다.");
    window.location.href = "/";
  }

  //return props.isLogin ? <Outlet /> : <Navigate to="/login" />;
};
export default checkLogin;
