import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/signup", {
      name,
      email,
      password,
    });
    console.log(response);
    if (response.status == 200) {
      history.push("/");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </label>
        <br />
        <button type="submit">Sign up!</button>
      </form>
    </div>
  );
};
export default Signup;
