import React, { useState } from "react";
import { fireStore } from "../../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./login.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const userRef = collection(fireStore, "admin");
      const userIdInfo = query(userRef, where("id", "==", email));
      const userPwdInfo = query(userRef, where("password", "==", password));
      let isUserExist = (await getDocs(userIdInfo)).docs;
      let isPwdCorrect = (await getDocs(userPwdInfo)).docs;
      //console.log(isUserExist);
      if (isUserExist.length === 1 && isPwdCorrect.length === 1) {
        console.log("found user!");
        sessionStorage.setItem("userId", email);
      } else if (isUserExist.length !== 1) {
        console.log("존재하지 않는 아이디 입니다.");
        alert("존재하지 않는 아이디 입니다.");
      } else {
        alert("존재하지 않는 회원이거나 아이디/비밀번호를 다시 시도해 주세요.");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }

    document.location.href = "/";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <div
          style={{ marginBottom: "15px", fontSize: "20px", fontWeight: "bold" }}
        >
          로그인
        </div>
        <div>
          <input
            className="login-id"
            name="email"
            placeholder="아이디"
            required
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            className="login-pw"
            name="password"
            type="password"
            placeholder="비밀번호"
            required
            value={password}
            onChange={onChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button type="submit" onClick={onSubmit} className="login-btn">
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
};

/** 
 * if (newAccount) {
        // create account
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else
       
 *  
 * 
 *    <span onClick={toggleAccount}>
        {newAccount ? "Sign in" : "Create Account"}
      </span> */

export default Auth;
