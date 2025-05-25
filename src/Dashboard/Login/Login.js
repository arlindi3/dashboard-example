import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const database = [
    {
      name: "arlind",
      pass: "123",
    },
    {
      name: "test",
      pass: "123",
    },
  ];
  const messages = {
    checkCredintials: "Please check credintials",
    usernameMessage: "Please enter your username",
    passwordMessage: "Please enter your password",
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const filteredUsers = database.find(
      (user) => user.name === username && user.pass === password
    );
    if (!filteredUsers) {
      setMessage(messages.checkCredintials);
    }
    if (!username) {
      setMessage(messages.usernameMessage);
    }
    if (!password) {
      setMessage(messages.passwordMessage);
    }
    if (filteredUsers) {
      window.location.pathname = "/dashboard";
    }
  };
  return (
    <>
      <div className="oval-background3"></div>
      <div className="login-form">
        <h3 className="login-font">Login</h3>
        <input
          required
          value={username}
          className="text-input"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <input
          required
          value={password}
          className="pass-input"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <p className="messages">{message}</p>
        <button onClick={handleLogin} className="btn-login">
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
