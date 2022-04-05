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
      .post("api/auth/login", {
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
        DOBRODOSLI NA VECERNJE VESTI
      </h1>
      <form className="login-page-form">
        <article className="login-page-articleinput">
          <p className="sign-page-header">Unesite e-mail:</p>
          <input
            className="login-page-input"
            type="text"
            id="email"
            name="email"
            ref={emailinput}
          />
          <br />
          <p className="sign-page-header">Unesite sifru:</p>
          <input
            className="login-page-input"
            type="password"
            id="password"
            name="password"
            ref={passwordinput}
          />
          <br />
        </article>
      </form>
      <button onClick={handleLogin} className="login-page-button">
        Login
      </button>
      <button onClick={handleGoogleLogin}>Log in in with google</button>
      <br />
      <div className="login-page-redirection">
        <a className="login-page-link" href="signin">
          Nemate nalog?
        </a>
      </div>
    </div>
  );
}
