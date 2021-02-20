import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState(localStorage.getItem("userName") || "");
  const [password, setPassword] = useState("");
  const [formStatus, setFormStatus] = useState(false);
  const [errors, setErrors] = useState({
    passwordError: "",
    signInSuccess: false,
    submitted: false,
  });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const res = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      setErrors({ ...errors, signInSuccess: true, submitted: true });
    } catch (e) {
      setErrors({ ...errors, signInSuccess: false, submitted: true });
    }
  };

  const userNameChangeHandler = (e) => {
    setEmail(e.target.value);
    localStorage.setItem("email", e.target.value);
  };

  const passwordChangeHandle = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 6) {
      setFormStatus(true);
      setErrors({ passwordError: "" });
    } else {
      setErrors({
        passwordError: "Password should have at least 6 characters",
      });
      setFormStatus(false);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>
          UserName
          <input
            type="text"
            placeholder="username"
            value={email}
            onChange={userNameChangeHandler}
          ></input>
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={passwordChangeHandle}
          ></input>
          {errors.passwordError && <div>{errors.passwordError}</div>}
        </label>
        <button type="submit" disabled={!formStatus}>
          Submit
        </button>
        {errors.submitted &&
          (errors.signInSuccess ? <p>logged in</p> : <p>Sign in failed</p>)}
        <p>
          Not a user?<Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
