import React, { useState } from "react";
import { fireStore } from "../../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

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
      } else {
        console.log("Try again,,,");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          placeholder="id"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={"Sign In"} />
        {error}
      </form>
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
