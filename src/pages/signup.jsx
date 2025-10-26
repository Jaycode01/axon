import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function SignUp({ toggleForm }) {
  const [activebtn, setactivebtn] = useState("signup");
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    number: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formdata.name ||
      !formdata.email ||
      !formdata.number ||
      !formdata.password
    ) {
      setmessage("All fields required.");
      setmessagetype("error");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formdata));
    localStorage.setItem("loggedIn", "true");

    setmessage("Your account is created successfully!");
    setmessagetype("success");
    setformdata({
      name: "",
      email: "",
      number: "",
      password: "",
    });

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <section className="signup_section">
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
      <h1>Try out Axon for free</h1>
      <form onSubmit={handleSubmit}>
        <div className="input_field">
          <label htmlFor="name">
            <img src="assets/user.svg" alt="user" />
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nexon"
            name="name"
            onChange={handleChange}
            value={formdata.name}
          />
        </div>
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
          <label htmlFor="number">
            <img src="assets/dial.svg" alt="dial" />
          </label>
          <input
            type="tel"
            id="number"
            placeholder="+234 906 072 8237"
            name="number"
            onChange={handleChange}
            value={formdata.number}
          />
        </div>
        <div className="input_field">
          <label htmlFor="password">
            <img src="assets/square_asterik.svg" alt="square asterik" />
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            name="password"
            onChange={handleChange}
            value={formdata.password}
          />
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
