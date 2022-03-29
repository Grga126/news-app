import axios from "axios";
import { useRef } from "react";

export default function Signin() {
  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("/api/auth/register", {
        email: emailInput.current.value,
        username: usernameInput.current.value,
        password: passwordInput.current.value,
      })
      .then(() => {
        alert("sve je proslo dobro");
      })
      .catch((error) => {
       // error.msg ce lepo vratiti sa backa sta je tacno problem
      });
  };

  const usernameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  return (
    <div className="sign-page background">
      <h1>Napravite nalog!</h1>
      <article className="sign-page-article">
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
