import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("/api/auth/register", {
        email: emailInput.current.value,
        username: usernameInput.current.value,
        password: passwordInput.current.value,
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

  const usernameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  return (
    <div className="sign-page background">
      <h1>Napravite nalog!</h1>
      <article className="sign-page-article">
        {showError && (
          <p className="error-message"
            style={{ backgroundColor: "red", width: "250px", margin: "0 auto", padding : "15px", color : "white" }}
          >
            {error}
          </p>
        )}
        <p className="sign-page-header">Unesite korisnicko ime:</p>
        <input
          className="sign-page-input"
          type="text"
          id="ime"
          name="ime"
          ref={usernameInput}
        />
        <br />
        <p className="sign-page-header">Unesite E-mail:</p>
        <input
          ref={emailInput}
          className="sign-page-input"
          type="email"
          id="email"
          name="email"
        />
        <br />
        <p className="sign-page-header">Unesite sifru</p>
        <input
          ref={passwordInput}
          className="sign-page-input"
          type="password"
          id="password"
          name="password"
        />
        <br />
        <div className="sign-page-redirection">
          <a className="sign-page-link" href="login">
            {" "}
            Imate vec postojeci nalog?
          </a>
        </div>
        <button onClick={handleRegister} className="sign-page-button">
          Kreiraj nalog!
        </button>
      </article>
    </div>
  );
}
