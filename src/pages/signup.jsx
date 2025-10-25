import { useState } from "react";
import "./signup.css";

function SignUp({ toggleForm }) {
  const [activebtn, setactivebtn] = useState("signup");

  return (
    <section className="signup_section">
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
      <h1>Try out Axon for free</h1>
      <form>
        <div className="input_field">
          <label htmlFor="name">
            <img src="assets/user.svg" alt="user" />
          </label>
          <input type="text" id="name" placeholder="Nexon" />
        </div>
        <div className="input_field">
          <label htmlFor="email">
            <img src="assets/mail.svg" alt="mail" />
          </label>
          <input type="email" id="email" placeholder="nexon@dev.com" />
        </div>
        <div className="input_field">
          <label htmlFor="number">
            <img src="assets/dial.svg" alt="dial" />
          </label>
          <input type="tel" id="number" placeholder="+234 906 072 8237" />
        </div>
        <div className="input_field">
          <label htmlFor="password">
            <img src="assets/square_asterik.svg" alt="square asterik" />
          </label>
          <input type="password" id="password" placeholder="********" />
        </div>

        <button type="submit" className="login_btn">
          <img src="assets/rocket.svg" alt="rocket" />
          Get Started
        </button>
      </form>
    </section>
  );
}

export default SignUp;
