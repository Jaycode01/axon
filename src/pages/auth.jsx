import { useState, useEffect } from "react";
import Login from "./login";
import SignUp from "./signup";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./auth.css";

function AuthPage() {
  const [loggedin, setloggedin] = useState(true);

  const toggleForm = () => {
    setloggedin(!loggedin);
  };

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.mode === "login") {
      setloggedin(true);
    } else {
      setloggedin(false);
    }
  }, [location.state]);
  return (
    <div className="auth_container">
      <button type="button" onClick={() => navigate("/")} className="back">
        <img src="assets/move_left.svg" alt="back" />
      </button>
      <div className="auth_box">
        {loggedin ? (
          <Login toggleForm={toggleForm} />
        ) : (
          <SignUp toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default AuthPage;
