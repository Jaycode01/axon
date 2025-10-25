import { useState } from "react";
import "./login.css";

function Login({ toggleForm }) {
  const [activebtn, setactivebtn] = useState("login");

  return (
    <section className="login_section">
      <div className="switch_box" onClick={toggleForm}>
        <button
          type="button"
          onClick={() => setactivebtn("login")}
          className={activebtn === "login" ? "active" : ""}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => setactivebtn("signup")}
          className={activebtn === "signup" ? "active" : ""}
        >
          Get Started
        </button>
      </div>
      <h1>Good to see you again!</h1>
      <form>
        <div className="input_field">
          <label htmlFor="email">
            <img src="assets/mail.svg" alt="mail" />
          </label>
          <input type="email" id="email" placeholder="nexon@dev.com" />
        </div>
        <div className="input_field">
          <label htmlFor="password">
            <img src="assets/square_asterik.svg" alt="square asterik" />
          </label>
          <input type="password" id="password" placeholder="********" />
        </div>

        <button type="submit" className="login_btn">
          <img src="assets/login.svg" alt="login" />
          LogIn
        </button>
      </form>
    </section>
  );
}

export default Login;
