import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [menu, setmenu] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [username, setusername] = useState("User");

  const navigate = useNavigate();

  useEffect(() => {
    const storeduser = localStorage.getItem("user");
    const loggedIn = localStorage.getItem("loggedIn") === "true";

    if (storeduser && loggedIn) {
      const parseduser = JSON.parse(storeduser);
      setusername(parseduser.name);
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, []);

  const handlelogout = () => {
    localStorage.removeItem("loggedIn");
    setisLoggedIn(false);
    setTimeout(() => {
      navigate("/auth");
    }, 300);
  };

  return (
    <nav>
      <img src="assets/axon.png" alt="axon logo" />
      {isLoggedIn ? (
        <div className="loggedin_cta">
          <div className="user_space">
            <img src="assets/user.svg" alt="user" />
            <p className="username">{username}</p>
          </div>
          <button type="button" className="logout_btn" onClick={handlelogout}>
            <img src="assets/logout.svg" alt="logout" />
            Logout
          </button>
        </div>
      ) : (
        menu && (
          <div className="cta">
            <button
              type="button"
              className="login_btn"
              onClick={() => navigate("/auth", { state: { mode: "login" } })}
            >
              Login
            </button>
            <button
              type="button"
              className="signup_btn"
              onClick={() => navigate("/auth", { state: { mode: "signup" } })}
            >
              <img src="assets/zap.svg" alt="zap" />
              Get Started
            </button>
          </div>
        )
      )}
      <button className="menu" onClick={() => setmenu(!menu)}>
        <img src="assets/bars.svg" alt="menu" />
      </button>
    </nav>
  );
}

export default Navbar;
