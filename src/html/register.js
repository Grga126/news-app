import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const usernameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/auth/register", {
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

  return (
    <div className="background">
      <div className="container-register">
        <h1>Create Account</h1>
        {showError && (
          <p
            className="error-message"
            style={{
              backgroundColor: "red",
              width: "250px",
              margin: "0 auto",
              padding: "15px",
              color: "white",
            }}
          >
            You need to suck my dick!
            {error}
          </p>
        )}
        <form action="">
        <input
          className="register-page-box"
          type="text"
          placeholder="Username"
          id="ime"
          name="ime"
          ref={usernameInput}
        />
        <br />
        <input
          ref={emailInput}
          className="register-page-box"
          type="email"
          placeholder="E-mail adress"
          id="email"
          name="email"
        />
        <br />
        <input
          ref={passwordInput}
          className="register-page-box"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        </form>
        <a className="register-page-link" href="/">
          {" "}
          Already have account?
        </a>
        <button onClick={handleRegister} className="register-page-button">
          Create Account!
        </button>
      </div>
      </div>
  );
}
