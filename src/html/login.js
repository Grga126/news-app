import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../enviroment";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const emailinput = useRef(null);
  const passwordinput = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("/auth/login", {
        email: emailinput.current.value,
        password: passwordinput.current.value,
      })
      .then(() => {
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 1000);
      })
      .catch((error) => {
        setError(error.response.data.msg);
        setShowError(true);
      });
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    window.location.replace(loginWithGoogle)
  };

  return (
    <div className="login-page background">
      <h1 style={{ margin: "0 auto", textAlign: "center" }}>
        WELCOME TO NEWS-APP
      </h1>
      <div className="login-page-container">
      <h1>Login</h1>
      <form action="">
      <div className="login-page-box">
          <input
            className="login-page-input"
            type="text"
            placeholder="Username/email"
            id="email"
            name="email"
            ref={emailinput}
          />
          </div>
          <div className="login-page-box">
          <input
            className="login-page-input"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            ref={passwordinput}
          />
          </div>
      </form>
      <button onClick={handleLogin} className="login-page-button">
        Login
      </button>
      <p>Or Login With</p>
      <button onClick={handleGoogleLogin} className="login-page-login-with-google" ></button>
      <div className="login-page-box">
        <a className="login-page-link" href="signin">
          Create Account
        </a>
        </div>
      </div>
    </div>
  );
}
