import { useState } from "react";
import Login from "./login";
import SignUp from "./signup";
import "./auth.css";

function AuthPage() {
  const [loggedin, setloggedin] = useState(true);

  const toggleForm = () => {
    setloggedin(!loggedin);
  };
  return (
    <div className="auth_container">
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
