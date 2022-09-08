import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies();
  const navigate = useNavigate();

  const handleCookie = () => {
    setCookies("Username", username, { path: "/" });
    setCookies("Password", password, { path: "/" });
    navigate("/home");
  };

  return (
    <div>
      <h1>Username of user</h1>
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <h1>Password of user</h1>
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button onClick={() => handleCookie()}>Go To Home</button>
      </div>
    </div>
  );
};

export default Login;
