import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login({ toggleForm }) {
  const [activebtn, setactivebtn] = useState("login");
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const [message, setmessage] = useState("");
  const [messagetype, setmessagetype] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formdata.email || !formdata.password) {
      setmessage("All fields required.");
      setmessagetype("error");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setmessage("No user found, please signup first.");
      setmessagetype("error");
      return;
    }

    if (
      formdata.email === storedUser.email &&
      formdata.password === storedUser.password
    ) {
      localStorage.setItem("loggedIn", "true");
      setmessage("You've successfully logged In");
      setmessagetype("success");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      setmessage("Invalid details provided.");
      setmessagetype("error");
    }
  };

  return (
    <section className="login_section">
      {message && <div className={`message ${messagetype}`}>{message}</div>}
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
      <form onSubmit={handleLogin}>
        <div className="input_field">
          <label htmlFor="email">
            <img src="assets/mail.svg" alt="mail" />
          </label>
          <input
            type="email"
            id="email"
            placeholder="nexon@dev.com"
            name="email"
            onChange={handleChange}
            value={formdata.email}
          />
        </div>
        <div className="input_field">
          <label htmlFor="password">
            <img src="assets/square_asterik.svg" alt="square asterik" />
          </label>
          <input
            type="password"
            onChange={handleChange}
            id="password"
            placeholder="********"
            name="password"
            value={formdata.password}
          />
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
